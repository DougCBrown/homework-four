# JavaScript Quiz Game

This is an app built to test your Javascript knowledge.

When the main page starts, you will be asked to: 1) begin the game (Start Quiz) or 2) view high scores (High Scores) that are stored in local storage.

If the user clicks the Start Quiz, they are taken to the game page and starts the quiz questions. It will also begin the quiz countdown timer. The timer begins at 60 seconds to answer the 5 questions. Points are awarded for a correct answer based on how much time is remaining on the timer (10 points for every second remaining on the timer). If the question is answered incorrectly, 15 seconds are subtracted from the timer.

When the user completes all questions or if the timer runs out prior to completing the quiz, the user is taken to the end page where the score is displayed and the user can enter a name to save the score in local storage. Only the top 5 scores will be stored. Also on the end screen the user has the option to play again (automatically starts a new quiz) without saving the high score or return to the home screen.

If the user clicks the high score button on the home screen, they are taken to the high score page where they can view the top 5 high scores and an option to remove all high scores. 
