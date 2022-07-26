let studentNames = ['jason', 'john', 'bobby'] 

let teachers = [
    {
        name: 'damian',
        subjects: 'arrays, javascript, mongodb'
    },
    {
        name: 'jonathan',
        subjects: 'arrays, javascript'
    }
];

// sort()
// const sortedStudentNames = studentNames.sort();
// console.log(sortedStudentNames) 

// filter ()
// const filteredStudentNames = studentNames.filter(
    // function (student) {
    //     return student == "bobby"
    // }
    
    // (student) => {
    //     return student === 'bobby'
    // }

    // (student) => student === 'bobby'

    // (student) => true //// DON'T DO THIS ! ! ! ! ! 
// )
// console.log(filteredStudentNames)


// studentNames = studentNames.filter((student)=> true)

// const someBobby = studentNames.some((student) => student === 'bobby')
// console.log("Do we have at least one bobby?",someBobby)

// const everyBobby = studentNames.every((student) => student === 'bobby)')
// console.log("Everyone's a bobby?",everyBobby)

// studentNames.forEach((student) => {
//     console.log(student)
// })

// const justTheNames = teachers.map(teacher => {
//     return teacher.name
// })
// console.log(justTheNames);

let numbers = [10,20,30,4,5,3,12,5,2,3,2,312,-3,-2,-4]

let totals = numbers.reduce((accumulator, currentValue, index,array) => {
    return accumulator + currentValue;
}, 0) /// 0 = indicates the starting point of total number
console.log(totals)

let total = 0
for (let i = 0; i < numbers.length; i++) {
    total += numbers[i]
}
total = numbers.reduce((accumulator, thisNum, index, array) => {
    if (index < 5) {
        return accumulator + thisNum
    } else {
        return accumulator
    }
}, 0)
console.log(total)