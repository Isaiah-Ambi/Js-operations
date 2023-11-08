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

let englishUnits = 2;
let frenchUnits = 1;
let mathematicsUnits = 4;
let physicsUnits = 4;
let chemistryUnits = 4;
let biologyUnits = 3;
let workshopUnits = 1;
let technicalDrawingUnits = 1;
let humanitiesUnits = 1;

let englishGrade = prompt('enter english grade');
student.english = gradeConvert(englishGrade, englishUnits);


let frenchGrade = prompt('enter french grade');
student.french = gradeConvert(frenchGrade, frenchUnits);

let mathGrade = prompt('enter math grade');
student.mathematics = gradeConvert(mathGrade, mathematicsUnits);

let physicsGrade = prompt('enter physics grade');
student.physics = gradeConvert(physicsGrade, physicsUnits)

let chemistryGrade = prompt('enter chemistry grade');
student.chemistry = gradeConvert(chemistryGrade, chemistryUnits)

let biologyGrade = prompt('enter biology grade');
student.biology = gradeConvert(biologyGrade, biologyUnits)

let workshopGrade = prompt('enter workshop grade');
student.workshop = gradeConvert(workshopGrade, workshopUnits)

let technicalDrawingGrade = prompt('enter technical drawing grade');
student.technicalDrawing = gradeConvert(technicalDrawingGrade, technicalDrawingUnits)

let humanitiesGrade = prompt('enter humanities grade');
student.humanitites = gradeConvert(humanitiesGrade, humanitiesUnits)


function gradeConvert (studentGrade, subjectUnits){
    if (studentGrade == 'A'){subject = A * subjectUnits}
    else if (studentGrade == 'B'){subject = B * subjectUnits}
    else if (studentGrade == 'C'){subject = C * subjectUnits}
    else if (studentGrade == 'D'){subject = D * subjectUnits}
    else if (studentGrade == 'E'){subject = E * subjectUnits}
    else if (studentGrade == 'F'){subject = F * subjectUnits}

    return subject;
};



console.log(student)


