//CHAT FUNCTION
const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');

// Get username and room from URL
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

const socket = io();

// Join chatroom
socket.emit('joinRoom', { username, room });

// Get room and users
socket.on('roomUsers', ({ room, users }) => {
  outputRoomName(room);
  outputUsers(users);
});


// Message from server
socket.on('message', (message) => {
  console.log(message);
  outputMessage(message);

  // Scroll down
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

// Message submit
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get message text
  let msg = e.target.elements.msg.value;

  msg = msg.trim();

  if (!msg) {
    return false;
  }

  // Emit message to server
  socket.emit('chatMessage', msg);

  // Clear input
  e.target.elements.msg.value = '';
  e.target.elements.msg.focus();
});

// Output message to DOM
function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  const p = document.createElement('p');
  p.classList.add('meta');
  p.innerText = message.username;
  p.innerHTML += `<span>${message.time}</span>`;
  div.appendChild(p);
  const para = document.createElement('p');
  para.classList.add('text');
  para.innerText = message.text;
  div.appendChild(para);
  document.querySelector('.chat-messages').appendChild(div);
}

// Add room name to DOM
function outputRoomName(room) {
  roomName.innerText = room;
}

// Add users to DOM
function outputUsers(users) {
  userList.innerHTML = '';
  users.forEach((user) => {
    const li = document.createElement('li');
    li.innerText = user.username;
    userList.appendChild(li);
  });
}


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


