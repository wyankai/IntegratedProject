//LIGHT MODE AND DARK MODE CODE
var darkMode;

if (localStorage.getItem('dark-mode')) {  
  // if dark mode is in storage, set variable with that value
  darkMode = localStorage.getItem('dark-mode');  
  
} else {  
  // if dark mode is not in storage, set variable to 'light'
  darkMode = 'light';  
  $("#dark-button").show();
  $("#light-button").hide(); 
}

// set new localStorage value
localStorage.setItem('dark-mode', darkMode);


if (localStorage.getItem('dark-mode') == 'dark') {
  $('body').addClass('dark');  
  $("#dark-button").hide();
  $("#light-button").show();
}

if (localStorage.getItem('dark-mode') == 'light') {
  $("#dark-button").show();
  $("#light-button").hide(); 
}

$('.dark-button').on('click', function() {  
  $('body').addClass('dark');  
  localStorage.setItem('dark-mode', 'dark');
  $(".dark-button").hide();
  $(".light-button").show();
  $("#dark-button").hide();
  $("#light-button").show();
});

$('.light-button').on('click', function() {  
  $('body').removeClass('dark');
  localStorage.setItem('dark-mode', 'light'); 
  $(".dark-button").show();
  $(".light-button").hide(); 
  $("#dark-button").show();
  $("#light-button").hide();  
});


