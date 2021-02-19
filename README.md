# Integrated Project

Name: Nur Latifah Bte Ajenan and Wee Yan Kai <br>
Student Number: S10204552, S10206089C <br>
Phone Website Link: https://CovidQuiz.wyankai.repl.co

# Covid Quiz
Our integrated project is about a covid-19 themed phone application that aims to educate users about covid-19 in Singapore. The objective is to collect masks stranded around the Singapore map and use them to help people involved in a covid-19 cluster around the map too. In order to collect masks in the game, you will need to complete quizzes about covid-19 and earn a certain amount of masks depending on how much you scored on the quiz. By doing these quizzes, users can educate themselves about the virus. Once they complete their action of giving the masks to the NPCs, they will earn a reward that will open and reveal the voucher they have received. This application also has a chat feature with Singaporeans playing the game where you can help one another with the covid-19 quizzes.

<b>IMPORTANT NOTE: THE CHAT BUTTON WOULD NOT REDIRECT YOU TO THE CHAT PAGE IF YOU ARE NOT CONNECTED TO THE SERVER.<br>
THIS IS MADE SO THAT THE USERS WILL NOT THINK THAT THERE IS A ERROR IN THE CODE AND REALISED THAT THEY DID NOT CONNECT TO THE SERVER.</b>

## Usage
Firstly, you have to download NodeJS and NPM on your computer

Elaborate tutorial on how to download NodeJS and NPM on your computer:<br>
https://youtu.be/X-FPCwZFU_8

Secondly you have to open your command panel to run the NPM commands

Elaborate tutorial on how to run NPM command on your computer:<br>
https://youtu.be/8Rmj5UY5mJk


NPM code needed for to access this project:
```
npm install

(Note that there might be vulnerability message after running npm install, ignore it and run the next code instead)

npm run dev

Go to localhost:3000
```

## Design Process
 
The design is for the philanthrophis users who like to learn about the latest news about covid’19 in Singapore.
The website uses Covid'19 API to display the statistics on the news in Singapore. The website also have a quiz to educate the players on Covid'19.

The design is also for the socialiser users who like to help others for the points, recognition and other visible perks.
The website have a chat function for the players to communicate with one another. Players can use the function to socialise as well as discuss the quiz answers to other players as well as give them advices.

The design will appeal to consumer users who act on the system for the extrinsic rewards..
In the application, when a user manages to complete a NPC’s request, they are given a reward. Some rewards include vouchers as well as gift cards. Consumer users that are not willing to use the app might act on the system for the extrinsic rewards.

-As the creator of the websote, I want to create a platform for the users to learn about Covid as well as a rewards system to motivate them to learn about Covid'19.

## Features

Feature 1: Game map that allows the user to interact with the masks and covid buttons which will pop up a bubble giving the users information.

Feature 2: Statistic Function that help to show the number of cases that has happened, or happen today etc.

Feature 3:Quiz feature is the main action in the game where users do and complete quizzes about covid-19 and earn masks depending on the amount of correct answers they get. Questions are randomly generated for every quiz and are multiple-choice questions. Users have the option to quit the quiz or submit it.

Feature 4:Give masks: When the user has obtained a number of masks, they can interact with the covid button on the game map to give masks to the NPCs in the game. They will have to give away a specific amount of masks in order to achieve the reward.

Feature 5: Reward: Users will get a reward in a gift form. They will have to tap it to open it which reveals various types of vouchers that they might get. The vouchers are real and users can redeem them by proceeding to the store and showing them their screen.

Feature 6: Reward list: The reward list displays all the possible rewards that the user can win, this feature is used mainly to inform them of the vouchers and motivate them to continue playing the game.

Feature 7: Chat: Real time chat that updates as users uses it. Chat will inform users that a user has join the chat as well as update the chat in real time as players message each other. Players can use the chat feature to socialise with people who are also playing the game and discuss the quiz answers.

Feature 8: Profile: Users can view their own profile to look at their statistics and also change their username. The username will also be changed accordingly for the chat.

Feature 9: Settings:<br>
Dark mode: The dark mode allows the user to have a preference for how the game is displayed on their screen, they can choose to either have bright mode or dark mode for the app.<br>
About this game: Users can learn more about the game through this setting feature. The purpose of the game will be explained and more information about the quizzes and rewards will be provided.



 
### Existing Features

Feature 1: Game map that allows the user to interact with the masks and covid buttons which will pop up a bubble giving the users information.

Feature 2: Statistic Function that help to show the number of cases that has happened, or happen today etc.

Feature 3:Quiz feature is the main action in the game where users do and complete quizzes about covid-19 and earn masks depending on the amount of correct answers they get. Questions are randomly generated for every quiz and are multiple-choice questions. Users have the option to quit the quiz or submit it.

Feature 6: Reward list: The reward list displays all the possible rewards that the user can win, this feature is used mainly to inform them of the vouchers and motivate them to continue playing the game.

Feature 7: Chat: Players can use the chat feature to socialise with people who are also playing the game and discuss the quiz answers. When the user manages to assist another player, they can earn more masks for helping others.

Feature 9: Settings:<br>
Dark mode: The dark mode allows the user to have a preference for how the game is displayed on their screen, they can choose to either have bright mode or dark mode for the app.<br>
About this game: Users can learn more about the game through this setting feature. The purpose of the game will be explained and more information about the quizzes and rewards will be provided.


### Features Left to Implement

Feature 4:Give masks: When the user has obtained a number of masks, they can interact with the covid button on the game map to give masks to the NPCs in the game. They will have to give away a specific amount of masks in order to achieve the reward.

Feature 5: Reward: Users will get a reward in a gift form. They will have to tap it to open it which reveals various types of vouchers that they might get. The vouchers are real and users can redeem them by proceeding to the store and showing them their screen.

Feature 8: Profile: Users can view their own profile to look at their statistics and also change their username.


## Technologies Used
- HTML

- Javascript
    - The project uses **Javascript** for the scripting of the website

- CSS
    - The project uses **CSS** to style the website.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.

- Covid'19 API
  - The project uses the Covid'19 API to diplay information about Covid'19 cases in Singapore.

- Node.JS
  - The project uses Node.JS package for the chat function of the website. Information is taken from the package and a server is created for the chatt.

- socket.io
  - The project uses socket.io server for the chat function of the website. Information is uploaded to the server to enable real-time chat function.

- localStorage
 - localStorage is used to save the user's information.


## Testing
1. Quiz Button Randomization :
    1. Press the home button
    2. See if the quiz pops out
    3. Reload the page to see if the quiz button position has changed
    
Expected Result: Quiz button position should be random<br>
End Result(Success): Quiz button position should be random<br>
<br>

2. Quiz Results:
   1. Press the quiz button
   2. Do quiz
   3. Finish quiz to see the statistics
   
Expected Result: Quiz should show the number of incorrect, correct and timed-out questions.<br>
End Result(Success): Quiz should show the number of incorrect, correct and timed-out questions.<br>
<br>

3. Statistics:
   1. Finish the quiz
   2. Go to the profile page
   3. Statistics of the profile page should change; quiz completed increase as well aas the number of masks earned
   
Expected Result: Quiz completed increase and number of mask earned increased.<br>
End Result(FAIL): Quiz completed increase only.<br>
<br>

4. Settings:
   1. Press the Settings button
   2. Press the Light Mode/Dark Mode button
   3.Reload the page
   
Expected Result: The page will be dark mode/light mode according to the button you pressed even after you reload the page.<br>
End Result(Success): The page will be dark mode/light mode according to the button you pressed even after you reload the page.<br>
<br>

5. Statistics:
   1. Press the line graph button on the top right corner of the homepage.
   2. Redirect to the statistics page
   
Expected Result: Statistics of the total cases as well as today cases should be shown<br>
End Result(Success): Statistics of the total cases as well as today cases should be shown<br>
<br>

6. Rewards Page:
   1. Press the rewards button.
   2. A list of rewards should be shown
   
Expected Result: A list of rewards should be shown<br>
End Result(Success): A list of rewards should be shown<br>
<br>

7. Chat Page:
   1. Press the chat button.
   2. Should redirect you to the chat page unless you didn't connect to the NodeJS server.
   3. Chatting should be possible
   
Expected Result:Message is shown with the username and time sent<br>
End Result(Success): Message is shown with the username and time sent<br>
<br>

8. Multiple-user Chat:
    1. Open the chat in another tab
    2. Send a message to the chat
    3. Switch back to the tab that you used to test #7.

Expected Result:Entry message will be shown as well as the message sent by the new tab is shown with the username and time sent<br>
End Result(Success): Entry message will be shown as well as the message sent by the new tab is shown with the username and time sent<br>
<br>

9. Changing of the username:
    1. Press the profile button.
    2. Press the icon next to the username.
    3. Change the username.

Expected Result:Username should be updated and reloading will not change the new username<br>
End Result(Success): Username is updated and reloading will not change the new username<br>
<br>

10. Changing of the username part 2:
    1. After changing the username, go to the chat page by pressing the chat button.
    2. Try sending a message

Expected Result: Username should be updated and sending a message will show the new username<br>
End Result(Success): Username should be updated and sending a message will show the new username<br>
<br>


### Bugs
1. Information on the profile page is not fully implemented and username has to be input to use the chat function.

## Credits
Icon stylesheet taken from :
- https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css <br>

Chat function is adapted from :
- https://www.npmjs.com/package/chatcord <br>

Ajax function to change the background of the body is taken from: 
- https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js<br>

### Media
- The design assets for the images are designed by

### Acknowledgements

- I received inspiration for this the statistics function from the Interactive Developement supplementary classes recording.
- I used the chatcord function for the application's chat function.

