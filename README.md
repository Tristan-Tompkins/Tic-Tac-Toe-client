# Tic Tac Toe!

A online version of the class tic tac toe game! Play against yourself(for now >:)! Sign up and sign in are required to play; win detection and game statistics are provided for you.
## Getting Started

Simply go to https://tristan-tompkins.github.io/Tic-Tac-Toe-client/, sign up, and sign in.

## Technologies used

+ HTML
+ CSS + SASS
+ Javascript + jQuery
+ Bootstrap

## Planning and Development

Planning:
1. Start coding
2. Refactor and complete small goals that lead up to a big goal
3. After making progress, go back and check if what was done makes anything on the to-do list


#### My Process

1. Start coding
2. Build HTML
2. Complete auth event handlers with skeleton from previous work
3. Complete game event handlers except PATCH
4. Complete onUpdateGame
5. Refactor into smaller files, more folders
6. Build game logic
7. Refactor game logic
10. Add view onPageLoad handlers
11. Refactor game logic into its own folder
12. Add bootstrap navbar, nav dropdowns
13. Refactor into smaller files, more folders
15. Receive feedback and update
16. Fill in ReadME

#### Initial wireframes and user stories
##### [Desktop wireframe](https://res.cloudinary.com/ddsmdjlij/image/upload/v1595382665/Wireframe_tbsnjp.jpg)

1. As a user, I want to sign up.
2. As a user, I want to sign in.
3. As a user, I want to change passwords.
4. As a user, I want to sign out.
5. As a user, I want to play a new game.
6. As a user, I want to see previous games.
7. As a user, I want to go to a previous game.
8. As a user, I want to see how the code works.
9. As a user, I want to see a demonstration of the code.

## Problem Solving Strategy

1. Break down problems into smallest solvable problem and build up.
2. Take a break after certain amount of time regardless of progress.
3. Write down diagrams if stuck.
4. Explain code to peers for different approaches to solve the problem.

###Future Plans

In the future I would like to add some additional SCSS to make it more appealing to the user. Add a theme selector for the different races of the WoW game letting thee user choose. Also allow the an Ai that the user can interact with. Adding additional features such a history of games and a multiplayer aspect with leaderboards.
# Requirements

In order to get a satisfactory score, by the time you present your project, you
**must** meet the following requirements:

### Deployment

Be deployed online, where the rest of the world can access it.

1.  [X] Deploy on your public Github page, not Github Enterprise.
1.  [X] Present a working browser game, built by you, hosted and deployed on GitHub Pages.

### Version Control

Demonstrate using version control by:

1.  [X] Sharing your work through a git repository hosted on Github.
1.  [X] Making frequent, cohesive commits dating back to the **first day**
of the project week.

### Documentation

Produce documentation in the form of a **README**, which must:

1.  [X] Pin your repository on GitHub as a Popular Repository
1.  [X] Complete the repository `Description` field and `Website` field with a meaningful sentence description of the application and link to the live URL
![github image](https://git.generalassemb.ly/storage/user/3667/files/beae41ae-aaaa-11e7-8867-63958d376a0b)
1.  [X] List technologies used
1.  [X] Document your planning and tell a story about your development process and problem-solving strategy.
1.  [X] List unsolved problems which would be fixed in future iterations.
1.  [X] Link to wireframes and user stories.

### Technical Specifications

1.  [X] Use a custom game engine written by you.
1.  [X] Be a single-page application, no browser refresh.
1.  [X] Render a game board in the browser.
1.  [X] Switch turns between X and O (or whichever markers you select).  Tip:  Assume player X is the first player to start the game.
1.  [X] Visually display which side won if a player gets three in a row or show a draw if neither wins.
1.  [X] Support playing multiple games, one at a time.
1.  [X] Use jQuery for DOM manipulation and event handling.
1.  [X] Use AJAX for interacting with a provided API.

### API Specifications

1.  [X] Create new games on the server. (CREATE)
1.  [X] Update a game by storing new moves. (UPDATE)
1.  [X] Visually display the results of retrieving game statistics, such as total games won by a user. (READ)
1.  [X] Give feedback to the user after each action.

### Auth Specifications

1.  [X] Signup with email, password, and password confirmation.
1.  [X] Login with email and password.
1.  [X] Logout when logged in.
1.  [X] Change password with current and new password.
1.  [X] Signup and Signin must only be available to not signed in users.
1.  [X] Logout and Change password must only be available to signed in users.
1.  [X] Give feedback to the user after each action's success or failure.
1.  [X] All forms must clear after submit success or failure

### DO NOT!!

Your app **must not**:
1.  [X] Delete your repository at any time or start over.
1.  [X] Rely on refreshing the page for any functionality.
1.  [X] Have any user-facing bugs.
    -  [X] Display non-functional buttons, nor buttons that do not successfully complete a task.
    -  [X] Show actions at inappropriate times (example: sign out button when not signed in).
    -  [X] Forms not clearing at appropriate times (example: sign up form not clearing after success).
1.  [X] Allow the same game to be played after a player has won or tied.
1.  [X] Allow players to move in the same square more than once.
1.  [X] Change players when an invalid move is made.
1.  [X] Use alerts for anything.
1.  [X] Display errors or warnings in the console.
1.  [X] Display debugging messages in the console.
