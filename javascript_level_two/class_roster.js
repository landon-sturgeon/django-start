var students = [];
var check = true;
while (check === true) {
  var user_command = prompt("How do you want to adjust the student roster? (add, remove, display, quit)")
  if (user_command === "add") {
    var new_student = prompt("Type the name of the new student.")
    students.push(new_student.toString())
  }
  else if (user_command === "remove") {
    var remove = prompt("Type the name of the student to remove.")
    var index = students.indexOf(remove)
    if (index !== -1) {
      alert(students[index] + " has been removed.")
      students.splice(index, 1)
    } else {
      alert(remove.toString() + " was not found in the student roster.")
    }
  } else if (user_command === "display") {
    alert("List of students\n" + students.toString())
  } else if (user_command === "quit") {
    check = false;
  } else {
    alert("Did not recognize " + user_command.toString() + " as a valid input. Please try again.")
  }
}
