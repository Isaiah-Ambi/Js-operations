const dude = {
    firstName : '',
    lastName : '',
    middleName : '',
    // changed DOB to age
    age : 0,
    maritalStatus : '',
    weight : 0,
    height : 0,
    highestAcademicQualification : '',
    idNumber : '',
    ageClassification : '',
};

dude.firstName = prompt('enter first name');
dude.lastName = prompt('enter last name');
dude.middleName = prompt('enter middle name');

dude.age = prompt('enter age'); 
dude.maritalStatus = prompt('marital status');
dude.weight = prompt('enter weight');
dude.height = prompt('enter height');
dude.highestAcademicQualification = prompt('enter highest academic qualification');
dude.idNumber = prompt('enter id number');

if (dude.age <= 7) {dude.ageClassification = 'toddler'}
else if (dude.age <= 12) {dude.ageClassification = 'adolescent'}
else if (dude.age <= 19) {dude.ageClassification = 'teenager'}
else if (dude.age <= 25) {dude.ageClassification = 'baby adult'}
else if (dude.age <= 35) {dude.ageClassification = 'adult'}
else if (dude.age <= 55) {dude.ageClassification = 'midlife crisis'}
else {dude.ageClassification = 'ancestor'}

console.log(dude);