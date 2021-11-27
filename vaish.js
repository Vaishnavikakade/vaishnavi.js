var readlineSync=require("readline-sync");
var score=0;
var userName = readlineSync.question("what's your name?");
console.log("Welcome"+userName+"DO YOU KNOW VAISHNAVI");


function play(question,answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer==answer)
  {
   console.log("right");
   score=score+1;
  }

  else
 {
  console.log("wrong!");
 }

}
console.log("current score:",score);
console.log("-------");
var questions=[{
  question:"where do i live?",
  answer:"banglore",
},
  {
    question:"my favorite superhero would be?",
    answer:"Dhruv"
  },
  {
    question:"where do i work?",
    answer:"microsoft"
  },
];
for(var i=0; i<questions.length; i++)
{
  var currentQuestion=question[i];
  play(currentQuestion.question,currentQuestion.answer)
}
console.log("YAY!!! You score",score);

s