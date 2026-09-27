// Name: adeena akram | Roll No: 2500605
const students = [
{ name: "Ayesha", rollNo: "2500405", marks: 88 },
{ name: "Ali", rollNo: "2500606", marks: 74 },
{ name: "Sara", rollNo: "2500607", marks: 91 },
{ name: "Ahmed", rollNo: "2500608", marks: 63 },
{ name: "Hina", rollNo: "2500609", marks: 79 }
];


function getGrade(marks) {
if (marks >= 85) {
return "A";
}
else if (marks >= 70) {
return "B";
}
else if (marks >= 50) {
return "C";
}
else {
return "F";
}
}

const table = document.getElementById("studentTable");

let total = 0;
let topStudent = students[0];

for (let student of students) {
const row = document.createElement("tr");


row.innerHTML =
    "<td>" + student.name + "</td>" +
    "<td>" + student.rollNo + "</td>" +
    "<td>" + student.marks + "</td>" +
    "<td>" + getGrade(student.marks) + "</td>";

table.appendChild(row);

total = total + student.marks;

if (student.marks > topStudent.marks) {
    topStudent = student;
}


}

const average = total / students.length;

document.getElementById("average").textContent =
"Class Average: " + average.toFixed(1);

document.getElementById("topStudent").textContent =
"Top Scorer: " + topStudent.name;
