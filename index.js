// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


function returnFirstTwoDrivers(array1){
   const array2 = array1.slice(0,2);
    return array2;
}

function returnLastTwoDrivers(array1){
    const array2 = array1.slice(-2);
     return array2;
 }

const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers];
selectingDrivers[0];
selectingDrivers[1];

const createFareMultiplier = num => {
    return function (fareMultiplier) {  
        return fareMultiplier * num;
    }
}

const fareDoubler = num => num *2;
const fareTripler = num => num *3;

function selectDifferentDrivers(arrayOfDrivers, function1){
    return function1(arrayOfDrivers);
}
