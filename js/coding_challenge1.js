let johnHeight, markHeight, johnMass, markMass, johnBMI, markBMI, comparisonBMI;
//Height and Mass
johnHeight = 1.95 //meters
johnMass = 92 //kg
markHeight = 1.69 //meters
markMass = 78 //kg

//BMI Calculation
johnBMI = johnMass / (johnHeight**2); 
markBMI = markMass / (markHeight**2);

//Comparison between both BMI
comparisonBMI = (markBMI > johnBMI);

//String print in the console
console.log('MarkBMI: ' + markBMI);
console.log('John BMI: ' + johnBMI);
console.log('Is Mark\'s BMI higher than John\'s?' + ' ' + comparisonBMI);
