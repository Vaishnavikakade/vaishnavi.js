var readlineSync = require("readline-sync")
var score=0;

var userName=readlineSync.question("May i know your name??");
const chalk=require('chalk')
console.log('\n');
console.log(chalk.blue.italic('Welcome in GK Quiz"+userName+"Do You Know Vaishnavi'));
console.log('\n');

function play(question,answer)
{
  var userAnswer=readlineSync.question(question);
  if(userAnswer===answer)
  {
    console.log("Right!!");
    score=score+1;
  }
  else
  {
    console.log("Wrong!!");
  }

console.log(chalk.blue('current score',score));
console.log(chalk.blue('---------'));
}
var question=[{
 
    question:"what is the capital of India", 
    answer:"delhi",
 },
 {
   question:"which game is our national game",
   answer:"hockey",
 },
 {
   question:"who is our national bird",
   answer:"peacock",
  
 },
 {
   question:"who is our national animal",
   answer:"tiger",
 },
 {
   question:"what is our national flower",
   answer:"lotus",
 },
 {
   question:"what is our national fruit ",
   answer:"mango",
 },
{
  question:"what is the capital of Maharashtra",
  answer:"mumbai",
},
{
  question:"who wrote our national anthem",
  answer:"ravindranath tagore",
},
{
  question:"when we got independance",
  answer:"15 august 1947",
},
{
  question:"how many states do we have",
  answer:"28"
},
];
for(var i=0; i<question.length; i++)
{
  var currentQuestion=question[i];
  play(currentQuestion.question,currentQuestion.answer)
}

console.log(chalk.blue('YAY!!!! your score",score'));
if(score>7)
{

console.log(chalk.blue('congratulations!! you are going on next level'));
}
else
{

  const chalk=require('chalk');
  console.log(chalk.blue('you did well...'))
}
var readlineSync = require("readline-sync");
var score=0;
var userName= readlineSync.question("Are you ready for next level??");

console.log(chalk.blue('Welcome!!!In Quiz Related To General Information'));
function gkQuiz(listOfAnswer,question,answer)
{
  
