//LIGHT MODE AND DARK MODE CODE
var darkMode;

if (localStorage.getItem('dark-mode')) {  
  // if dark mode is in storage, set variable with that value
  darkMode = localStorage.getItem('dark-mode');  
} else {  
  // if dark mode is not in storage, set variable to 'light'
  darkMode = 'light';  
}

// set new localStorage value
localStorage.setItem('dark-mode', darkMode);


if (localStorage.getItem('dark-mode') == 'dark') {
  $('body').addClass('dark');  
}

$('.dark-button').on('click', function() {  
  $('body').addClass('dark');  
  localStorage.setItem('dark-mode', 'dark');
});

$('.light-button').on('click', function() {  
  $('body').removeClass('dark');
  localStorage.setItem('dark-mode', 'light');   
});


//GETTING QUIZ COMPLETED DATA
var numberCompleted

localStorage.setItem('quiz', numberCompleted);

if (localStorage.getItem(numberCompleted)) {  
  // if quiz is in storage, set variable with that value
  numberCompleted = localStorage.getItem('quiz');  
} else {  
  // if dark mode is not in storage, set variable to 'light'
  localStorage.setItem('quiz', 0);  
}

document.getElementById("quizCompleted").innerHTML = localStorage.getItem("quiz");


//GETTING MASKS COLLECTED DATA
var numberCollected

localStorage.setItem('masks', numberCollected);

if (localStorage.getItem(numberCollected)) {  
  // if quiz is in storage, set variable with that value
  numberCompleted = localStorage.getItem('masks');  
} else {  
  // if dark mode is not in storage, set variable to 'light'
  localStorage.setItem('masks', 0);  
}

document.getElementById("maskCollected").innerHTML = localStorage.getItem("masks");


//GETTING LIVE SAVED DATA
var liveSaved

localStorage.setItem('live', liveSaved);

if (localStorage.getItem(liveSaved)) {  
  // if quiz is in storage, set variable with that value
  liveSaved = localStorage.getItem('live');  
} else {  
  // if dark mode is not in storage, set variable to 'light'
  localStorage.setItem('live', 0);  
}

document.getElementById("liveSaved").innerHTML = localStorage.getItem("live");


//GETTING ASSIST DATA
var assistNumber

localStorage.setItem('assistData', assistNumber);

if (localStorage.getItem(assistNumber)) {  
  assistNumber = localStorage.getItem('assistData');  
} else {  
  // if dark mode is not in storage, set variable to 'light'
  localStorage.setItem('assistData', 0);  
}

document.getElementById("assist").innerHTML = localStorage.getItem("assistData");


//GETTING REWARDS COLLECTED DATA
var rewardsCollectedData

localStorage.setItem('rewards', rewardsCollectedData);

if (localStorage.getItem(rewardsCollectedData)) {  
  rewardsCollectedData = localStorage.getItem('rewards');  
} else {  
  // if dark mode is not in storage, set variable to 'light'
  localStorage.setItem('rewards', 0);  
}

document.getElementById("rewardsCollected").innerHTML = localStorage.getItem("rewards");
