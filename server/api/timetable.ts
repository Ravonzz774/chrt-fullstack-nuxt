import Base64 from "crypto-js/enc-base64";
import AES from "crypto-js/aes";
import Utf8 from "crypto-js/enc-utf8";

async function getToken(): Promise<string> {
  const data = await $fetch("https://chrt.remmody.ru/v2/api/token", {
    method: "POST",
    headers: {
      BotKey:
        "ncoD7LJq-c7b3?Ka7G-aDfRsoMBNCgKKF-Pvu7oG/gMg2i1U9gqLBSAa!83w/?9PioybXfokFm=hSk1VMKlMx5BNx9PsLPYxnU5NiLEBRpYNkCu7pUZARxR5cfewgOD2",
    },
  });
  return data.token;
}

async function getDataEncrypted(token: string): Promise<string> {
  const data = await $fetch("https://chrt.remmody.ru/v2/api", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
}

function decryptData(encryptedData: string): string {
  try {
    const key = Base64.parse("NGM5NjVlOWUyMWVlYjNhNTZhZWQ3YTQzNjg3NTc1MWU=");
    const iv = Base64.parse("MjljNzZlYjU0MjA1MTg0YQ==");

    const decrypted = AES.decrypt(encryptedData, key, { iv: iv });

    return decrypted.toString(Utf8);
  } catch (e) {
    console.error("Ошибка при дешифровании данных:", e);
    throw e;
  }
}

async function getData(): Promise<string> {
  const token = await getToken();
  const encryptedData = await getDataEncrypted(token);
  const data = decryptData(encryptedData);
  return data;
}

export default defineEventHandler((event) => {
  return getData();
});
