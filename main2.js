const Project = function (name, description) {
  let obj = {
    name: name,
    description: description,
    sessions: []
  }
  obj.dumpAnswers = function () {
    let showAll = {};
    for (var i = 0; i < this.sessions.length; i++) {
      for (var j = 0; j < this.sessions[i].questions.length; j++) {
        let question = this.sessions[i].questions[j].questionText;
        showAll[question] = [];

        for (var q = 0; q < this.sessions[i].questions[j].answers.length; q++) {
          showAll[question].push(this.sessions[i].questions[j].answers[j].answerText)
        }
      }
    }
    return showAll;
}
return obj;
}

const Session = function (name, project) {
  let obj = {
    name:name,
    project: project,
    questions: []
  }
  project.sessions.push(obj);

  return obj;
}

const Question = function (questionText, session) {
  let obj = {
    questionText: questionText,
    session: session,
    answers: []

  }
  session.questions.push(obj);

  return obj;
}

const Answer = function (answerText, question) {
  let obj = {
    answerText: answerText,
    question: question
  }
  question.answers.push(obj)

  obj.Edit = function (oldAns, newAns) {
    let editedAns = this.answerText.replace(oldAns, newAns);
    this.answerText = editedAns;

    return this.answerText;
  }

  return obj;
}

let project1 = Project('Homework', 'In this project you will see  how much i like to do my homework (no)')

let session1 = Session('SessionName1-1', project1);
let session2 = Session('SessionName1-2', project1);


let question1 = Question('Why am I unable yo understand JS?', session1)
let question2 = Question('Should I try to understand it or it would be better to relax and drink some wine?', session1)
let question3 = Question('Why are cats so cute?', session2)

let answer1 = Answer('Because you are stupid blonde', question1)
let answer2 = Answer('Because you are lazy seal', question1)
let answer3 = Answer('Yes, you should read more and do your hw responsibly', question2)
let answer4 = Answer('You can code and drink wine at the same time, when no one\'s looking', question2)
let answer5 = Answer('Because of their meeeooow', question3)
let answer6 = Answer('Soooft kitty, waaarm kitty, little ball of fuuur', question3)


console.log(project1.dumpAnswers());
