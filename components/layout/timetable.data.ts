function getGroupIdsAndNames(data) {
  let courses = [];
  let i = 0;
  for (let course of data) {
    courses.push({
      course: course.course,
      groups: [],
    });
    for (let group of course.groups) {
      courses[i].groups.push({
        id: group.id,
        name: group.name,
      });
    }
    i += 1;
  }

  return courses;
}