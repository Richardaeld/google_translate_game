# ![Romancing The Cards](favicon-32x32.png "Romancing The Cards")omancing The Cards

The purpose of this, JavaScript powered, game is to illustrate how a simple game can entertain and help with learning/memorizing words in a different language. It also has the hidden 
benefit to help improve memory retention by rewarding users that remember where a specific word was located on the board. To help this game be applicable to a wide audience it has 
six selectable languages which the user can choose any combination of. These user selected languages will pull random word pairs from their language banks to keep the user interested
for multiple playthroughs. Other user selectable options are provided to adjust the difficulty of the game for maximum user enjoyment. These options are: the delay between selecting 
cards, time to complete each round, and the number of cards to pair.

# UX
## Goals
### User Goals
+ I want to learn basic words of a new language.
+ I want to be entertained by a game on my browser or cell phone during my free time.
+ I want to work on my memory retention ability.

### Developer Goals 
Showcase "Vanilla" JavaScript ability:
+ Have a game that is "vanilla" JavaScript powered and takes multiple user inputs.
+ Have user inputs that can change the way JavaScript builds the game (Ex. number of cards, multiple languages, background (appearance) of cards, etc...)
+ All cards for game are dynamically added and removed with the start and end of each game round.
+ Game is capable of multiple play throughs without a page refreash.
+ The game timer is a continuously running JavaScript function.
+ The card pair positions are random every time
+ The words chosen for each game are randomly pulled from the word bank of the user selected language.

## Client Stories and Experience Provided
### Client Stories
+ As a user, I'd like an enjoyable way to spend my free time.
+ As a user, I'd like a game that helps with memory retention skills.
+ As a user, I'd like to learn some basic words of a different language.

### Experience Provided
+ The game has different settings, such as: selectable difficulty, timer, languages, and total number of card pairs to give a user an enjoyable way to spend time with plenty of replay value.
+ The game has an adjustable difficulty that can be used to provide an experience that will help with memory retention skills.
+ The game currently has six different languages to pick from and they are pairable in any way the user chooses.

## Design Choices
![Responsiveness across devices](assets/readme/responsiveness.jpg "Looks great across all devices!")
+ This program is responsive across all devices

### Game Start Screen
+ The game title stands out due to the use of a large font with a dark text shadow.
+ The text descriptions, for select/options, are placed over a dark background with a bright text color to help them stand out and draw the eye.
+ Multiple user inputs given for returning and new users alike. 

### Game Board
+ A dark image background was used to help the cards stand out.
+ The background used was chosen because it resembles a desk or table. 

### Gameplay
+ The gameplay is kept intuitive and simple so users can focus on recognizing foreign words or remembering where words were placed.
+ The game header contains a timer and points calculator in an easily read format.
+ The cards are dynamically added and removed, with JavaScript, when the game starts and ends.
+ The game allows multiple playthroughs without having to refresh browser.
+ A click limiter was installed to keep users from spam clicking to win the game. This duration can be changed by selecting a different game difficulty setting.
+ The game pulls random word pairing from its language bank for each round.

### Game Cards
+ The default background image of the game cards resemble that of flash cards that school students would use.
+ The font family chosen for the cards mimics a hand-written font and was paired with a bright text color. This combination gives a home-made flash card appearance.
+ A CSS effect is applied to the game cards to give them a flipping animation. This gives the game a simple but memorable wow factor.

### Page Performance
+ Code kept simple, clean, and elegant for quicker load times.
+ "Vanilla" JavaScript used over jQuery because of its better performance.
+ Load time checked by [Pingdom](https://tools.pingdom.com/).
![Load time with clean code and image compression according to pingdom](assets/readme/pingdom.jpg "Average load time from LA according to Pingdom")
+ All images have been compresssed by [tinyPNG](https://tinypng.com/).
![Image compressions average](assets/readme/tinyfi.png "Image compressions average")

## Wireframe and Live Demo
#### Wireframe 
![wireframe of the playing screen with div description](assets/readme/wireframe/wf_game_5_pair-large.png "wireframe of the playing screen with div description")
+ [Balsamiq](https://balsamiq.com/) was used for the planning process.
+ Wireframes were made for all predetermined size variations of the webpage.
+ Each wireframe that contains cards was given a pointing arrow and a description because of the complexity of the card design.
+ [Click here to view all wireframes associated to this project.](assets/readme/wireframe "location of wireframes")

#### Live Demo
![finished demo of the playing screen](assets/readme/finished_game_5_pair-large.png "finished demo of the playing screen")
+ A fully functioning demo can be found on GitHub, [here](https://richardaeld.github.io/google_translate_game/ "deplayment location")
+ [GitHub's](https://github.com/) IDE [GitPod](https://www.gitpod.io/) was used for the construction process.
+ GitHub houses the master branch. 

## Brand Identity
This game has a similar appearance to studying at home or in school by flashcards. This is accomplished though:
+ A background that resembles a desk or dining room table.
+ The default card backgrounds which are ment to resemble index cards or flash cards that students use to study.
+ The font used on the cards looks like hand writting and gives the impression of hand-made cards. 
+ A bright font color was used to give personality to the cards and make them more engaging to look at.

# Technologies (Languages) Used
+ HTML - Is the basic construction (foundation) of this webpage
+ CSS - Used to make the basic construction of this webpage more visually appealing 
+ JavaScript - Allow users to interact with webpage without having to reload page or load multiple pages

# Testing
## Program Tested Systems 
### BrowserStack
+ Windows 10 (edge 18, chrome 71)
+ OS X Big Sur (Chrome 71, Safari 14)
+ Google Nexus 5 (Portrait)

## Developer Tested Systems
 + Windows 10 (Chrome 87, Edge 87, Firefox 84)
 + G8 ThinQ (Chrome 87)
 + ipad, 5th gen 13.3(safari 13) 

## Developer Testing method(s)
### Header items, Lose/Win Conditions, and Multiple Round Playability
#### Expectation(s):
1. Menus disappear when not in use.
1. Game tells user when they have won or lost.
1. Header items are easily visible, disappear when not in use, always display correct values.
1. The game never needs to be reloaded to function properly.

#### Assumption(s):
1. Tester will ***not*** reload browser between play throughs.
1. Tester knows the correct content of game's header and when it should be visible.

#### Testing Step(s):
1. Start a game with **default settings**. 
1. Let time run out, watch the game header to change to "You Lose!" and let game reset.
1. Select next level of **Time on Clock** and start the game.
1. Repeat steps 2 and 3 until all times have been selected.
1. Start another game, win this round, and watch game header change to "You Win!" and let game reset.
1. Change **Number of Pairs** and repeat step 5.
1. Change **Base Language** and repeat step 5.
1. Change **Difficulty** (increase **time on clock** if needed) and repeat step 5. 

#### Document Result(s):
1. Document any incidences of incorrect header presentation.
1. Document any failure of the timer.
1. Document any incorrect win/lose conditions.
1. Document any multiple playthrough errors (mismatching cards, incorrect card placement, etc...).
------------------------------------------------------

### Checking Language Pairings
#### Expectation(s):
1. The game always has the correct pair of words up to match.

#### Assumption(s):
1. A basic understanding of foreign languages used or a cheat sheet of correct word pairs.
1. Tester will ***not*** reload browser between play throughs.

#### Testing Step(s):
1. Start the game on its **default setting** (add more time to **Time on Clock** if needed).
1. Complete the game.
1. Wait for game to restart.
1. Select the next amount of **Number of Pairs** and repeat steps 2 and 3.
1. repeat steps 4, 2, and then 3 in that order until all **Number of Pairs** have been used.
1. Select the next language of **Pairing Language**, reset **Number of Pairs** to 5 pairs, and start game.
1. Repeat steps 2, 3, 4, 5, and 6 until all Pairing Languages have been cycled through.

#### Document Result(s):
1. Document any incidences of incorrectly accepted/unaccepted word pairings.
1. Document any incidences of cards left on the table when they should have disappeared.

--------------------------------

## Previous and Current Bug(s)
#### Previous Bug(s)
+ Occasionally a matching pair of cards will leave a single card on the table, sometimes making the game unwinnable.  This card can be either face up or face down. This bug was
generated by not flashing the "clickRecord" when a user lost the game. **update(This was a two part bug detailed in the following bug)
+ A single card of a matched pair would occasionally be removed from the game, a user was awarded a point, and the pair was considered matched.  This was because if a user 
clicked fast enough the programs initial defensive anti-spam click logic wouldnt work. So an additional layer of defensive logic was added. This code checks to be sure any pairs 
are not the same card and automatically fails the "pairing" if they are an identical card ID.  
+ Some words with masculine and feminine forms (ex. celles-ci/ceux-ci) excede the character limit of line space and drop to the line below. This was creating an unappealing 
visual appearance. This bug was fixed by a change to font-size units from rem to a combination of rem and vw. However, a pixel width roughly between 1200 and 1166 can still use two 
lines but now they provide a good visual experience.
+ The "aria-expanded" state remains while the select/option boxlist isn't expanded. This occurs beacuse of the limitations of select/option. This bug could be triggered when a user 
focuses on the select/option listbox by not directly clicking on the select/option listbox itself. This focus bug could also be triggered by tabing through the content of the page 
or clicking on the label for the select/option listbox. Another trigger of this bug was when a user selects the same option from a select/option listbox that is currently selected. 
This bug wasnt able to be fixed so the "aria-expanded" state was removed entirly along with its JavaScript code. A solution to add it back in could be with a future update that changes 
the select/option listbox to a ul/li JavaScript powered listbox. With the appropriate JavaScript this will make the listbox more customizable, capable of a better UX, and more 
friendly towards ARIA states.
+ The background image would not always extend the entire length of the screen on smaller devices. Code from MDN was used to find the appropriate length to set "min-height" to. This 
variable was created at the global and local levels. The global variable was used to set the height of the background when the program starts and to "reset" its height after winning 
or losing conditions of the game were met. The local variable was created to set the background after the cards have been created to be sure the background extends appropriately. 
Having these two different scoped variables ensures the program switches appropriately between the different needed screen heights on all devices.

#### Current Bug(s)
+ A screen pixel width below 320px or above 4000px will quickly lose a good UX. 
+ **Jigsaw (Validation Service)** throws an error on ".cardFaceTypeIndex" and ".cardBackTypeIndex" because of the length of the linear-gradient used to create the index card design.

## Scalability
+ Increase the number of usable words in each language word bank.
+ Add an API that would read out the "pairing langauge" word of a matched card pair.
+ Add a greater selection of card backgrounds to give users a different visual experience according to their preference.
+ Add a game board background selector for a different visual experience for returning users.
+ Change the games select/option listboxes to ul/li JavaScript powered Listboxes. This would allow for greater customization and full support of ARIA.

# Deployment Information
## Current GitHub Deployment
+ Go to the location of the repository in GitHub, [https://github.com/Richardaeld/google_translate_game](https://github.com/Richardaeld/google_translate_game).
+ Select Settings at the top of the page (Circled in red in picture below).
![Where select is located](assets/readme/deployment/current_select_settings.png "Where select is located")
+ Go down in settings page until you find the heading "GitHub Pages" (underlined in red in the picture below).
+ Click "None" under the Source subheading (circled in red in picture below).
+ Select the branch you wish to publish.
+ In this example we chose to select master (circled in red in the picture below).
![Where Github Pages, branch selection, and branches are located](assets/readme/deployment/current_select_branch.png "Where Github Pages, branch selection, and branches are located")
+ Click save (underlined in red in the picture below).
![Where save is located](assets/readme/deployment/current_select_save.png "Where save is located")
+ Reload page and you will see the layout under Github Pages will change and tell you the page is ready to be published.
![What queued to be published screen looks like](assets/readme/deployment/current_see_ready.png "What queued to be published screen looks like")
+ Once the page is fully published, the layout will change once more and tell you the site has been published.
![What published screen looks like](assets/readme/deployment/current_see_published.png "What published screen looks like")
+ Now the page is fully viewable at the provided HTTP address.

## Deploy clone from GitHub
+ Go to the location of the repository in GitHub, [https://github.com/Richardaeld/google_translate_game](https://github.com/Richardaeld/google_translate_game).
+ Click code button to get the drop down Menus
![Where the code button is](assets/readme/deployment/clone_code_button.jpg "where the code button is")
+ Copy https address provided
![Where the https address is](assets/readme/deployment/clone_code_button_expanded.jpg "Where the https address is")
+ Create a blank or boiler plate GitPod and open this new GitPod project
+ Go to the Bash and type, "git clone " and paste the https address found in GitHub page
+ Press enter
+ The clone will be created within a folder, titled "google_translate_game" (The original name of the project)
![Where the root folder is](assets/readme/deployment/clone_cloned_folder.jpg "Where the root folder is")
+ Remove everything from this folder and the project will be fully functional.

# Tools, References, Code, and Idea(s) Used
## Tools
+ [Balsamiq](https://balsamiq.com/) - Used to produce the wireframes
+ [Bootstrap](https://getbootstrap.com/) - Used as framework
+ [GitHub](https://github.com/) - Deployment of demo(prototype) website
+ [GitPod](https://www.gitpod.io/) - Integrated development environment used
+ [Google Fonts](https://fonts.google.com/) - Imported font families from here 
+ [Jigsaw (Validation Service)](https://jigsaw.w3.org/css-validator/) - Used to identify errors in CSS
+ [Pingdom](https://tools.pingdom.com/) - Used to check for load time
+ [Techsini](https://techsini.com/multi-mockup/) - Used for their viewable responsiveness PNG
+ [TinyPNG](https://tinypng.com/) - Used to Minimize KB load per image
+ [W3C Validator](https://validator.w3.org/) - Used to identify errors in markup
+ [BrowserStack](https://www.browserstack.com/) - used to check for compatibility errors
+ [JSHint](https://jshint.com/) - used as a JavaScript validator  

## References, Idea(s) Code Used
+ Felipe Souza Alarcon - Idea to use JavaScript objects for words in various languages
+ Css card flip animation - This animation's code originated from three different locations. With great effort, these code pieces were melded into something unique to this project but 
still deserves accurate documentation. This code has been cited in the CSS where the three main structures of the card's CSS exist(Outside, rotating portion, and faces).
A citing was also added to the HTML above the dynamically added content section. The three places where code originated from are: Arjun Khara, MDN Web Docs, and
W3Schools.  All these are documented in detail below. 
+ [Arjun Khara](https://www.youtube.com/watch?v=OV8MVmtgmoY) - First discovered idea of rotating 3d objects using CSS here.
    + Used idea of a single box to contain all moving objects and faces of a card or 3D object.
    + Used ideas from his code to help understand how and where to place items, such as: "backface-visability" and "transform-style" to create desired effect.
+ [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Invaluable source of information about JavaScript, HTML, and CSS
    + Used two pieces of code which allowed the background to travel entire vertical length of page (documented in JavaScript).
    + An idea that was used was a container that rotates 180 degrees with the aid of "backface-visability: hidden" and "transform-style:preserve-3d".
    + Used code placement (ex: where to place "backface-visability") and ideas to help with rotating the cards on the board. The exact location for this is [here](https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility).
    + Used to help understand how "backface-visability: hidden" and "transform-style:preserve-3d" work together to produce the desired effect. The exact location for this is [here](https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility).
+ [W3Schools](https://www.w3schools.com/) - A wonderful resource for element, attribute, and event selection for JavaScript
    + Used code and ideas to help with rotating the cards on the game board. The exact location for this is [here](https://www.w3schools.com/howto/howto_css_flip_box.asp).
+ [World Wide Web Consortium (W3C)](https://www.w3.org/) - for understanding ARIA content and industry standard use
    + Multiple standardizations were used from specifically: [aria-labelledby to provide a name for user interface controls](https://www.w3.org/WAI/GL/wiki/Using_aria-labelledby_to_provide_a_name_for_user_interface_controls) and [ARIA labeling with a dropdown listbox](https://www.w3.org/TR/wai-aria-practices-1.1/examples/listbox/listbox-collapsible.html)
+ [Stack Overflow](https://stackoverflow.com/) - Helped in understanding the importance of loops in JavaScript
+ [TestLodge](https://blog.testlodge.com/how-to-write-test-cases-for-software-with-sample/) - Used for test case examples
+ [Bootstrap](https://getbootstrap.com/) - Framework used to help speed up development and add a better UX
+ [Maxnyla's Deployment Section from Her Readme](https://github.com/maxnyla/Pawsome) - The idea to use GitHub's literal deployment process was found [here](https://github.com/maxnyla/Pawsome). 
+ [GitHub](https://docs.github.com/en/enterprise/2.14/user/articles/configuring-a-publishing-source-for-github-pages) - Used the structure of GitHub's deployment information as the basis for this readme's deployment section
    + [location of deployment structure provided my GitHub docs](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)


# Acknowledgements
+ Felipe Souza Alarcon for his honest guidance, foresight, and helping lead me into directions I did not know I could go with this project. 
+ Emily Eldridge for help with revising the grammar and flow of this README document.