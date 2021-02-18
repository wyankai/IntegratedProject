//Variables here
var trivia = [
    {
        question: "During CNY, how many visitors are allowed into a household per day?",
        choices: ["5", "8", "10", "12"],
        answer: "B",
    }, {
        question: "Which phase is it now?",
        choices: ["1", "2", "3", "4"],
        answer: "C",
    }, {
        question: "How many total cases are there in singapore? (as of 2020)",
        choices: ["100K", "50K", "70K", "25K"],
        answer: "B",
    }, {
        question: "What is not a symptom of Covid?",
        choices: ["Fever", "Dry Cough", "Tiredness", "Eye irritation"],
        answer: "D",
    }, {
        question: "What do you need to do right before entering a mall?",
        choices: ["Wash your hands and wear mask", "Scan ez-link card and sanitize your hands", "Scan QR code and take temperature", "Do travel declaration form"],
        answer: "C",
    }, {
        question: "On which month did school start reopening?",
        choices: ["January", "May", "June", "October"],
        answer: "C",
    }, {
        question: "Which of the following places were not visited by a covid-19 case",
        choices: ["Orchard road", "Universal Studios Singapore", "Tuas Link", "IMM"],
        answer: "C",
    }, {
        question: "What should passengers on the bus do to reduce the risk of spreading Covid?",
        choices: ["Try not to talk on the phone/ to the other passengers on the bus", "Talk loudly on the bus", "Try not to use the handrails even though you are standing up.", "Do not seat on the bus seats"],
        answer: "A",
    }, {
        question: "In which phase does Karaoke reopen?",
        choices: ["1", "2", "3", "4"],
        answer: "D",
    }, {
        question: "What places were reopened during phase 2 of covid19?",
        choices: ["Swimming centres", "Arcades", "Cinemas ", "Clubs"],
        answer: "C",
    }, {
        question: "When was phase 3 announced?",
        choices: ["September ", "November", "January (2021) ", "December"],
        answer: "D",
    }, {
        question: "How many people are allowed to gather at weddings?",
        choices: ["20", "100", "50 ", "10"],
        answer: "C",
    }, {
        question: "How many people are allowed to gather in Phrase 2?",
        choices: ["3", "5", "8 ", "12"],
        answer: "B",
    }, {
        question: "Which of the following is not an action you should take if you are issued the Quarantine Order?",
        choices: ["Monitor your temperature and report your health status at least 3 times a day", "Spend time with your family members", "Inform your QO Agent if you feel unwell or need any assistance.", "Stay in your designated location"],
        answer: "B",
    }, {
        question: "What do you need to do to receive the covid19 vaccination?",
        choices: ["Pay an amount of $5", "Book an appointment", "Ask them directly ", "Purchase the vaccines "],
        answer: "B",
    }, {
        question: "How many days do you need to be quarantined after travelling from another country?",
        choices: ["14", "1", "20 ", "7"],
        answer: "A",
    }
]

//shuffle the array
trivia.sort(function(){return 0.5 - Math.random()});

var questionNumber = 0;
var intervalId;
var clockRunning = false;
var intervalIdAnswer;
var clockRunningAnswer = false;
var correct = 0;
var timedOut = 0;
var incorrect = 0;

//create timer
var timer = {
    time: 10,
    reset: function () {
        timer.time = 10;
        $("#timer").text(timer.time) // Sets the timer to refresh
        document.getElementById('correctLottie').style.display = 'none'
        document.getElementById('incorrectLottie').style.display = 'none'
    },
    start: function () {
        if (!clockRunning) {
            intervalId = setInterval(timer.countdown, 1000);
            clockRunning = true;
            document.getElementById('correctLottie').style.display = 'none'
            document.getElementById('incorrectLottie').style.display = 'none'
        };

    },
    stop: function () {
        clearInterval(intervalId)
        clockRunning = false;
    },
    countdown: function () { //displays the 
        timer.time--;
        $("#timer").text(timer.time)
        if (timer.time == 0) {
            timedOut++;
            timer.stop();
            $("#answerBox").hide();
            $("#question").text("Oof, you ran out of time");
            answerTimer.start()
            //they timed out so do a timed out here
            questionNumber++
            //run through next question
        }
    },

}
//This timer is made for the wait inbetween answers
var answerTimer = {
    time: 1,
    start: function () {
        if (!clockRunningAnswer) {
            intervalIdAnswer = setInterval(answerTimer.countdown, 1000);
            clockRunningAnswer = true;
        };

    },
    stop: function () {
        clearInterval(intervalIdAnswer)
        clockRunningAnswer = false;
    },
    countdown: function () { //displays the 
        answerTimer.time--;
        if (answerTimer.time == 0) {
            //Run the next question
            timer.reset(); // resets the timer

            showQuestion(); //Run the next question!
            answerTimer.stop();
            answerTimer.time = 5; // resets timer
        }
    },
}

function reset() {
    // reset stuff
    questionNumber = 0;
    correct = 0;
    incorrect = 0;
    timedOut = 0;
    // Shuffle it again
    trivia.sort(function(){return 0.5 - Math.random()});
    $("#playAgain").hide(); // hide the button again
    $("#results").show();
    $("#timerBox").show();
    $("#questionBox").show(500);
    $(".stats").hide();
    $("#correct, #incorrect, #timeOut").text("") //clear the results
    showQuestion();// Start again!
}


function showQuestion() {
    if (questionNumber === 4) {
        //end the game please.
        //fill out results
        $(".stats").show(500);
        $("results").show(500);
        $("#correct").text("You got " + correct + " questions correct!");
        $("#incorrect").text("You got " + incorrect + " questions incorrect!");
        $("#timeOut").text("You timed out on " + timedOut + " questions!");
        $("#masks").text("You received " + correct + " masks!");
        $("#questionBox").hide();
        $("#timerBox").hide();
        $("#playAgain").show(500); //ask them to play again
    }
    else {
        $("#question").text(trivia[questionNumber].question) //Shows current question
        renderAnswers(); // Shows the answers through function renderAnswers
        $("#question").show(500);
        $("#answerBox").show(500);
        timer.start();
        // questionNumber++
        // if they selected the right answer, reset interval and select 
        // if timer.time === 0, show that they timed out
        // else they selected the wrong answer
    }
}


function renderAnswers() { //This renders all the answer choices into the buttons
    $("#A").text(trivia[questionNumber].choices[0]);
    $("#B").text(trivia[questionNumber].choices[1]);
    $("#C").text(trivia[questionNumber].choices[2]);
    $("#D").text(trivia[questionNumber].choices[3]);
}





//Hide the stuff i don't want to show
$("#results").hide();
$("#questionBox").hide();
$("#answerBox").hide();
$("#playAgain").hide(); // hide play again button
$(".stats").hide();

//Starts the game with the button click
$("#startButton").on("click", function () {
    $("#results").show(200);
    $("#startGame").hide();
    $("#questionBox").show(500);
    showQuestion();
    document.getElementById('correctLottie').style.display = 'none'
});

//sets up answer buttons to respond to clicks
$(document).on("click", ".answer", function () {
    var answer = $(this).attr("option") //this calls the result of the answer
    var correctAnswer = trivia[questionNumber].answer
    console.log(answer);
    // hide answer box function
    $("#answerBox").hide();
    // clear question
    // $("#question").hide();

    if (answer === correctAnswer) { //This checks if the answer is equal to the option attribute
        correct++ //iterate correct answers
        $("#question").text("You're right!");
        document.getElementById('correctLottie').style.display = 'block'
        timer.stop(); // stop the timer
        answerTimer.start();// start the answer break timer
    }
    else {
        incorrect++ //iterate incorrect answer
        $("#question").text("Ooh, sorry you're wrong")
        document.getElementById('incorrectLottie').style.display = 'block'
        timer.stop(); // stop the timer
        answerTimer.start(); // start the break timer
    }

    questionNumber++

    //then show answer box fast in both if else function

    //if answer matches with triviaanswer they get a point
    //if they don't answer the question in the amoutn of time, they get tracked of what questions they didn't answer
    //else they answered it wrong so keep talley of that
});
