const student = {
    english : 0,
    french : 0,
    mathematics : 0,
    physics : 0,
    chemistry : 0,
    biology : 0,
    workshop : 0,
    technicalDrawing : 0,
    humanities : 0,
};

let A = 5;
let B = 4;
let C = 3;
let D = 2;
let E = 1;
let F = 0;

// let englishUnits = 2;
// let frenchUnits = 1;
// let mathematicsUnits = 4;
// let physicsUnits = 4;
// let chemistryUnits = 4;
// let biologyUnits = 3;
// let workshopUnits = 1;
// let technicalDrawingUnits = 1;
// let humanitiesUnits = 1;

student.english = getGrade('english ', 2)
student.french = getGrade('french ', 1)
student.mathematics = getGrade('mathematics', 4)
student.physics = getGrade('physics ', 4)
student.chemistry = getGrade('chemistry ', 4)
student.biology = getGrade('biology ', 3)
student.workshop = getGrade('workshop ', 1)
student.technicalDrawing = getGrade('technicalDrawing ', 1)
student.humanities = getGrade('humanitites ', 1)

const sumUnits = englishUnits + frenchUnits + mathematicsUnits 
+ physicsUnits + physicsUnits + chemistryUnits + biologyUnits 
+ workshopUnits + technicalDrawingUnits + humanitiesUnits;

const sumGrade = student.english + student.french + student.mathematics + student.physics 
    + student.chemistry + student.biology + student.workshop + student.technicalDrawing + student.humanities;

const gpa = sumGrade/sumUnits;

function getGrade(subject, units){
    let userInput;
    while (true) {
        userInput = prompt('what was your grade in ' + subject);
        if (userInput === 'A' || userInput === 'B' || userInput === 'C' || userInput === 'D' || userInput === 'E' || userInput === 'F')
        {   ;
            break;}
        else {
            alert('incorrect grade value. Please type in your appropriate grade in ' + subject);
        }
    }
    return gradeConvert(userInput, units)
}

function gradeConvert (studentGrade, subjectUnits){
    // let subject = 0
    if (studentGrade == 'A'){subject = A * subjectUnits}
    else if (studentGrade == 'B'){subject = B * subjectUnits}
    else if (studentGrade == 'C'){subject = C * subjectUnits}
    else if (studentGrade == 'D'){subject = D * subjectUnits}
    else if (studentGrade == 'E'){subject = E * subjectUnits}
    else if (studentGrade == 'F'){subject = F * subjectUnits}

    return subject
};

console.log(gpa);
document.write(gpa);