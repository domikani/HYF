const class07Students = [];
function addStudentToClass(studentName) {
  // You write code here
  if (studentName !== "") {
    if (class07Students.length <= 6 && studentName == `Queen`) {
      class07Students.push(studentName);
      return `The Queen will always have a place in class 07! `;
    } else {
      if (class07Students.length < 6) {
        let checkName = studentName.toLowerCase();

        if (!class07Students.includes(checkName)) {
          class07Students.push(checkName);
          return `Student ${checkName} added to the class 07.`;
        } else {
          return `Student ${checkName} is already in the class.`;
        }
      } else {
        return `Cannot add more students to class 07`;
      }
    }
  } else {
    return `You cannot enter an empty name in the class!`;
  }
}

function getNumberOfStudents() {
  // You write code here
  return `Class 07 has ${class07Students.length} students.`;
}

//Checking examples
console.log(addStudentToClass("Maria"));
console.log(addStudentToClass(""));
console.log(addStudentToClass("Eli"));
console.log(addStudentToClass("Nikos"));
console.log(addStudentToClass("Xristos"));
console.log(addStudentToClass("Kate"));
console.log(addStudentToClass("Filipos"));
console.log(addStudentToClass("Queen"));

console.log(getNumberOfStudents());
