export interface IMenuItem {
  name: string;
  url: string;
  icon: string;
}

export const MENU_DATA: IMenuItem[] = [
  {
    icon: "line-md:calendar",
    name: "Расписание",
    url: "/",
  },
  {
    name: "Выбор Групп",
    icon: "line-md:cog-filled",
    url: "/select",
  },
];
