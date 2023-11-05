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

let sumUnits = englishUnits + frenchUnits + mathematicsUnits 
+ physicsUnits + physicsUnits + chemistryUnits + biologyUnits 
+ workshopUnits + technicalDrawingUnits + humanitiesUnits;

let englishGrade = prompt('enter english grade');
if (englishGrade == 'A'){student.english = A * englishUnits}
else if (englishGrade == 'B'){student.english = B * englishUnits}
else if (englishGrade == 'C'){student.english = C * englishUnits}
else if (englishGrade == 'D'){student.english = D * englishUnits}
else if (englishGrade == 'E'){student.english = E * englishUnits}
else if (englishGrade == 'F'){student.english = F * englishUnits};

let frenchGrade = prompt('enter french grade');
if (frenchGrade == 'A'){student.french = A * frenchUnits}
else if (frenchGrade == 'B'){student.french = B * frenchUnits}
else if (frenchGrade == 'C'){student.french = C * frenchUnits}
else if (frenchGrade == 'D'){student.french = D * frenchUnits}
else if (frenchGrade == 'E'){student.french = E * frenchUnits}
else if (frenchGrade == 'F'){student.french = F * frenchUnits};

let mathGrade = prompt('enter math grade');
if (mathGrade == 'A'){student.mathematics = A * mathematicsUnits}
else if (mathGrade == 'B'){student.mathematics = B * mathematicsUnits}
else if (mathGrade == 'C'){student.mathematics = C * mathematicsUnits}
else if (mathGrade == 'D'){student.mathematics = D * mathematicsUnits}
else if (mathGrade == 'E'){student.mathematics = E * mathematicsUnits}
else if (mathGrade == 'F'){student.mathematics = F * mathematicsUnits};

let physicsGrade = prompt('enter physics grade');
if (physicsGrade == 'A'){student.physics = A * physicsUnits}
else if (physicsGrade == 'B'){student.physics = B * physicsUnits}
else if (physicsGrade == 'C'){student.physics = C * physicsUnits}
else if (physicsGrade == 'D'){student.physics = D * physicsUnits}
else if (physicsGrade == 'E'){student.physics = E * physicsUnits}
else if (physicsGrade == 'F'){student.physics = F * physicsUnits};

let chemistryGrade = prompt('enter chemistry grade');
if (chemistryGrade == 'A'){student.chemistry = A * chemistryUnits}
else if (chemistryGrade == 'B'){student.chemistry = B * chemistryUnits}
else if (chemistryGrade == 'C'){student.chemistry = C * chemistryUnits}
else if (chemistryGrade == 'D'){student.chemistry = D * chemistryUnits}
else if (chemistryGrade == 'E'){student.chemistry = E * chemistryUnits}
else if (chemistryGrade == 'F'){student.chemistry = F * chemistryUnits};

let biologyGrade = prompt('enter biology grade');
if (biologyGrade == 'A'){student.biology = A * biologyUnits}
else if (biologyGrade == 'B'){student.biology = B * biologyUnits}
else if (biologyGrade == 'C'){student.biology = C * biologyUnits}
else if (biologyGrade == 'D'){student.biology = D * biologyUnits}
else if (biologyGrade == 'E'){student.biology = E * biologyUnits}
else if (biologyGrade == 'F'){student.biology = F * biologyUnits};

let workshopGrade = prompt('enter workshop grade');
if (workshopGrade == 'A'){student.workshop = A * workshopUnits}
else if (workshopGrade == 'B'){student.workshop = B * workshopUnits}
else if (workshopGrade == 'C'){student.workshop = C * workshopUnits}
else if (workshopGrade == 'D'){student.workshop = D * workshopUnits}
else if (workshopGrade == 'E'){student.workshop = E * workshopUnits}
else if (workshopGrade == 'F'){student.workshop = F * workshopUnits};

let technicalDrawingGrade = prompt('enter technical drawing grade');
if (technicalDrawingGrade == 'A'){student.technicalDrawing = A * technicalDrawingUnits}
else if (technicalDrawingGrade == 'B'){student.technicalDrawing = B * technicalDrawingUnits}
else if (technicalDrawingGrade == 'C'){student.technicalDrawing = C * technicalDrawingUnits}
else if (technicalDrawingGrade == 'D'){student.technicalDrawing = D * technicalDrawingUnits}
else if (technicalDrawingGrade == 'E'){student.technicalDrawing = E * technicalDrawingUnits}
else if (technicalDrawingGrade == 'F'){student.technicalDrawing = F * technicalDrawingUnits};

let humanitiesGrade = prompt('enter humanities grade');
if (humanitiesGrade == 'A'){student.humanities = A * humanitiesUnits}
else if (humanitiesGrade == 'B'){student.humanities = B * humanitiesUnits}
else if (humanitiesGrade == 'C'){student.humanities = C * humanitiesUnits}
else if (humanitiesGrade == 'D'){student.humanities = D * humanitiesUnits}
else if (humanitiesGrade == 'E'){student.humanities = E * humanitiesUnits}
else if (humanitiesGrade == 'F'){student.humanities = F * humanitiesUnits};

// console.log(student);
let sumGrade = student.english + student.french + student.mathematics + student.physics 
+ student.chemistry + student.biology + student.workshop + student.technicalDrawing + student.humanities;


let gpa = sumGrade/sumUnits;

// console.log(gpa);
document.write(gpa);