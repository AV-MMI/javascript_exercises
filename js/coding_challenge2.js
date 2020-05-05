let johnScore, mikeScore, maryScore, averageJohnScore, averageMikeScore, averageMaryScore, highestAverageScore;

//Declaration of player's team score.
johnScore = 89 + 120 + 103;
mikeScore = 116 + 94 + 123;
maryScore = 97 + 134 + 105;

//Calculations of average score for each team.
averageJohnScore = (johnScore / 3);
averageMikeScore = (mikeScore / 3);
averageMaryScore = (maryScore / 3);

//Calculations of which team is the winner
if (averageJohnScore > averageMikeScore && averageJohnScore > averageMaryScore) {
  highestAverageScore = averageJohnScore;
  console.log('The winner team is John\'s team!! with an average of: ' + highestAverageScore + ' points');
  console.log('While Mike\'s average is ' + averageMikeScore + ' and Mary\'s average is ' + averageMaryScore);
}

else if (averageMikeScore > averageJohnScore && averageMikeScore > averageMaryScore) {
  highestAverageScore = averageMikeScore;
  console.log('The winner team is Mike\'s team!! with an average of: ' + highestAverageScore + ' points');
  console.log('While John\'s average is ' + averageJohnScore + ' and Mary\'s average is ' + averageMaryScore);
}

else if (averageMaryScore > averageJohnScore && averageMaryScore > averageMikeScore) {
  highestAverageScore = averageMaryScore;
  console.log('The winner team is Mary\'s team!! with an average of: ' + highestAverageScore + ' points');
  console.log('While John\'s average is ' + averageJohnScore + ' and Mike\'s average is ' + averageMikeScore);
}

else if (averageJohnScore == averageMikeScore && averageJohnScore > averageMaryScore) {
  console.log('There is been a draw between John\'s and Mike\'s team!! with an average of ' + averageJohnScore + ' points!!');
}

else if (averageMikeScore == averageMaryScore && averageMikeScore > averageJohnScore)  {
  console.log('There is been a draw between Mike\'s and Mary\'s team!! with an average of ' + averageMikeScore + ' points!!');
} 

else if (averageMaryScore == averageJohnScore && averageMaryScore > averageMikeScore) {
  console.log('There is been a draw between Mary\'s and John\'s team!! with an average of ' + averageMaryScore + ' points!!');
}
else {
  console.log('There have been a draw among the teams with an average score of: ' + averageJohnScore + ' points');
}