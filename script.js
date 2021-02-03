//COVID STATS USING API
//Start of evey js thing
$(document).ready(function () {
  //function to request info on sg cases 
  function getCountry(country) {
    //settings for the AJAX thing
    var settings = {
      "url": "https://disease.sh/v3/covid-19/countries/Singapore", 
      "method": "GET",
      "timeout": 0,
      "headers": {
        "Cookie": ""
      },
    };

    //running an AJAX request with the settings above
    $.ajax(settings).done(function (response) {
      //console.log(response);
      //get the data from this call and assign to vars
      let totalCase = response.cases;
      let nowCase = response.todayCases;
      let totalDeath = response.deaths;
      let nowDeath = response.todayDeaths;
      let totalReco = response.recovered;
      let nowReco = response.todayRecovered;

      //create big thing to append later
      //var addStat = '<p id = "now_Death"> Deaths today: ' + nowDeath + '</p>'
      //console.log(addStat)
      //$(".stat_box").append(addStat);

      //test function
      $(".total_case").append(totalCase);
      $(".now_case").append(nowCase);
      $(".total_death").append(totalDeath);
      $(".now_death").append(nowDeath);
      $(".total_reco").append(totalReco);
      $(".now_reco").append(nowReco);


    });
  }

  //calling the function
  getCountry("Singapore")
})

$(document).ready(function () {
  //function to store items into local storage
  $(".btn-primary").on("click",function(e){
      e.preventDefault();
      console.log("hi");

  });

  //function based obj for contry list
  function contCase (name,cases,death,reco) {
      this.name = name;
      this.cases = cases;
      this.deaths = death;
      this.reco = reco;

  };


});

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
