let student = [
    {
        name: "Manoj Bhatta",
        marks: 100,
    },
    {
        name: "Salman Khan",
        marks: 74,
    },
    {
        name: "Ramesh Saud",
        marks: 80,
    },
];
let gpa=student.map((el)=>{
    return el.marks/25;
});
