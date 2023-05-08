var myQuestions = [
	{
		question: "1 - Ada Lovelace foi considerada a primeira programadora do mundo.",
		answers: {
			a: 'Verdadeiro',
			b: 'Falso'
		},
		correctAnswer: 'a'
	},
	{
		question: "2 - Ada Lovelace nasceu no ano de 1815, na Inglaterra.",
		answers: {
			a: 'Verdadeiro',
			b: 'Falso'
		},
		correctAnswer: 'a'
	},
	{
		question: "3 - Ada Lovelace é conhecida por seu trabalho com o matemático Charles Babbage em sua máquina analítica.",
		answers: {
			a: 'Verdadeiro',
			b: 'Falso'
		},
		correctAnswer: 'a'
	},
	{
		question: "4 - Ada Lovelace conseguiu ver a máquina analítica funcionando na prática.",
		answers: {
			a: 'Verdadeiro',
			b: 'Falso'
		},
		correctAnswer: 'b'
	},
	{
		question: "5 - Ada Lovelace é tinha apenas 18 anos quando começou a trabalhar com Charles Babbage.",
		answers: {
			a: 'Verdadeiro',
			b: 'Falso'
		},
		correctAnswer: 'b'
	},
	{
		question: "6 - Ada Lovelace era filha do poeta britânco Lord Byron.",
		answers: {
			a: 'Verdadeiro',
			b: 'Falso'
		},
		correctAnswer: 'a'
	},
	{
		question: "7 - Ada Lovelace morreu jovem, aos 36 anos, por conta de complicações de uma doença.",
		answers: {
			a: 'Verdadeiro', 
			b: 'Falso'
		},
		correctAnswer: 'a'
	},
	{
		question: "8 - Em 2010, em Londres, foi inaugurada a faculdade Ada National College for Digital Skills, focada em tecnologia, em homenagem à cientista.",
		answers: {
			a: 'Verdadeiro',
			b: 'Falso'
		},
		correctAnswer: 'b'
	},
	{
		question: "9 - Ada escreveu um livro aos doze anos de idade, onde compilou seus estudos e ideias.",
		answers: {
			a: 'Verdadeiro',
			b: 'Falso'
		},
		correctAnswer: 'a'
	}
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

function showQuestions(questions, quizContainer){
	var output = [];
	var answers; 
		
		for(var i=0; i<questions.length; i++){
			answers = [];
		for(letter in questions[i].answers){
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ questions[i].answers[letter]
					+ '</label>'
				);
			}
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}
		quizContainer.innerHTML = output.join('');
	}
function showResults(questions, quizContainer, resultsContainer){
	var answerContainers = quizContainer.querySelectorAll('.answers');
	var userAnswer = '';
	var numCorrect = 0;
		
		for(var i=0; i<questions.length; i++){
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			if(userAnswer===questions[i].correctAnswer){
				numCorrect++;
				answerContainers[i].style.color = 'green';
			}
			else{
				answerContainers[i].style.color = 'red';
			}
		}
			resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;
		}
	showQuestions(questions, quizContainer);
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
