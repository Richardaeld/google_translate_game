# ![Romancing The Cards](favicon-32x32.png "Romancing The Cards")omancing The Cards

This games purpose is to illustrate how a simple game can help learning/memorizing words in a different 
language and memory retention.  Using a simple pairing game combined with a timer the user is given a 
sense of urgency to complete this simple task.

# Live demo with deployment information
#### Live Demo
+ A fully functioning demo can be found on GitHub, [here](https://richardaeld.github.io/google_translate_game/ "deplayment location")
+ GitHub's IDE GitPod was used for the entire construction and planning process.
+ GitHub houses the master branch.

#### Deployment information
+ Go to the location of the respository in GitHub (ex. https://github.com/Richardaeld/google_translate_game)
+ Select Settings (Circled in red in picture below)
![Where select is located](assets/readme/select_settings.png "Where select is located")
+ Go down in settings page until you find the heading "GitHub Pages" (underlined in red in picture below)
+ Click "None" under the Source subheading (circled in red in picture below)
+ Select the branch you with to publish
+ In this example we chose to select master (circled in red in picture below)
![Where Github Pages, branch selection, and branches are located](assets/readme/select_branch.png "Where Github Pages, branch selection, and branches are located")
+ Click save (underlined in red in picture below)
![Where save is located](assets/readme/select_save.png "Where save is located")
+ Reload page and you will see the layout under Github Pages will change and tell you the page is ready to be published
![What about to be published screen looks like](assets/readme/see_ready.png "What about to be published screen looks like")
+ Once the page has fully published the layout will change once more and tell you the site has published
![What published screen looks like](assets/readme/see_published.png "What published screen looks like")



# Wireframe 
![wireframe of the playing screen with div description](assets/readme/wireframe/WF_game_5_pair-large.png "wireframe of the playing screen with div description")
+ Wireframes were make for all predetermined size variations of the webpage
+ Each wireframe that contains cards was given a pointing arrow and a description because of the complexity of the card design
+ [Click here to view all wireframes associated to this project.](assets/readme/wireframe "location of wireframes")

# UX Choices 
![Responsiveness across devices](assets/readme/responsiveness.jpg "Looks great across all devices!")

### Game Start Screen
+ Large font with a dark text shadow is used to help the title stand out
+ A bright font color was used with a slightly opaque transparancy to allow for the
text within to stand out despite being smaller

### Game Board and Game Play
+ A dark background was used to help the cards stand out
+ The font family chosen for the cards was ment to resemble hand writting and was
paired with a bright text font to give the illusion of home made flash cards.
+ Selectable card backgrounds were added to give repeated users something different to look at. 

### add tinyfy or load timer
![Load time with clean code](assets/readme/pingdom.jpg "Average load time from LA")
# Brand Identity
+ Type text with headers ***
+ Index card

# Client Stories and Experience Provided
## Client Stories
+ As a user, I'd like an enjoyable way to waste my free time.
+ As a user, I'd like a game that forces me to use my mental retaining ability
+ As a user, I'd like to learn some basic words of a different language

## Experience Provided
+ The game has adjustable difficulty, timer, and total card pairs for a enjoyable was to spend time
+ The games adjustable difficulty can be used to provide an experience that will cause the user to lose if they only hunt and peck
+ The game has several different languages to pick from to pair with their comparable English or othe language counterpart 

# Testing
## Checking Languages and Pairings
#### Expectation(s):
1. The game always has the correct pair of words up to match

#### Assumption(s):
1. A basic understanding of foreign languages used or a cheat sheet of correct word pairs
1. User will NOT reload browser between play throughs.

#### Testing Step(s):
1. Start the game on its default setting or add more time to timer if needed.
1. Complete the game.
1. Wait for game to restart.
1. Select the next amout of cards (10) and repeat steps 2 and 3.
1. Select the last level of cards (15) and repeat steps 2 and 3.
1. Select the next language, reset cards to start level (5), and start game.
1. Repeat steps 2, 3, 4, 5, and 6 until all languages have been cycled through.

#### Document Result(s):
1. Document any incidences of incorrect, game accepted word pairings.
1. document any incidences of cards left on the table when they should have disappeared.

--------------------------------

## Checking Menues, Lose/Win Conditions, Header items, and Multiple Round Playability
#### Expectation(s):
1. Menues disappear when not in use.
1. Game tells user when they have won or lost.
1. Header items are easily visible, disappear when not in use, always display correct values

#### Assumption(s):
1. User will NOT reload browser between play throughs.
1. User knows game header consists of win/lost condition, game title, player points, and time remaining.

#### Testing Step(s):
1. Start a game with default settings. 
1. Let it run out, check for game header to change to lose condition and let game reset.
1. Select next level of time and start the game.
1. Let it run out, check for game header to change to lose condition and let game reset.
1. Repeat steps 3 and 4 until all times have been selected.
1. Start another game, win this round, and check game for win title.
1. Change card count and repeat step 6.
1. Change language and repeat step 6.
1. Change difficulty and repeat step 6. 

#### Document Result(s):
1. document any incidences of incorrect title presentation
1. document any failure of timer to lose game 
1. document any multiple playthrough errors (mismatching cards, incorrect card placement, etc...)
------------------------------------------------------

## Previous and Current bugs
#### Previous Bug(s)
+ Occasionally a matching pair of cards will leave a single card on the table, sometimes making the game unwinnable.  This card can be either face up or face down. This bug was
generated by not flashing the "clickRecord" when a user lost the game.

## Scaleability
+ Add an api that would read out the 'pairing langauge' word of a matched card
+ Add a greater selection of different card backgrounds to give the user a different visual experience according to their preference.
+ Add a game board background selector for a different visual experience for returning users

# Tools, References, Code, and idea(s) used
## Tools
+ [Bootstrap](https://getbootstrap.com/) - Used as framework
+ [GitHub](https://github.com/) - Deployment of prototype website
+ [GitPod](https://www.gitpod.io/) - Integrated development environment
+ [Google Fonts](https://fonts.google.com/) - Used font families from here
+ [Jigsaw (Validation Service)](https://jigsaw.w3.org/css-validator/) - Used to identify errors in CSS
+ [Pingdom](https://tools.pingdom.com/) - Checked for page load time
+ [Techsini](https://techsini.com/multi-mockup/) - Used for their viewable responsiveness PNG
+ [TinyPNG](https://tinypng.com/) - Minimizing KB load per image
+ [W3C Validator](https://validator.w3.org/) - Used to identify errors in markup

## References and Code Used
+ [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Invaluable source of information about JavaScript
    + Used a piece of code to allow background to travel entire length of page
    + Used code and idea to help with rotating the cards on the board
+ [Stack Overflow](https://stackoverflow.com/) - Helped with understands importance of loops in JavaScript
+ [TestLodge](https://blog.testlodge.com/how-to-write-test-cases-for-software-with-sample/) - Used for test case examples
+ [W3Schools](https://www.w3schools.com/) - A wonderful resource of element, attribute, and event selection
    + Used code and idea to help with rotating the cards on the board
+ [Bootstrap](https://getbootstrap.com/) - Framework used to help speed up development and add a better UX:
+ [github](https://docs.github.com/en/enterprise/2.14/user/articles/configuring-a-publishing-source-for-github-pages) - Using the style and 
structure of githubs deployment information as the basis of the readme's deployment section

## idea(s) used
+ [maxnyla's deployment section from her readme](https://github.com/maxnyla/Pawsome) - the idea was taking githubs deployment section 
and adding it to the readme's deployment section 

# Technologies (langauges) used
+ HTML - Is the basic construction (foundation) of webpage
+ CSS - Makes basic construction of webpage more visually appealing 
+ JavaScript - Allow users to interact with webpage without having to reload or load multiple pages

# Acknowledgements
+ Felipe Souza Alarcon for his honest guidence, foresight, and providing stellar hints to questions I hadnt asked yet. 
+ Emily Grooms for help in revising this README document.