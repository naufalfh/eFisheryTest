Feature: Most Accessed Features 1

Scenario: User can play music directly while accessing Youtube music
 Given Navigate to Youtube music Web
     When User click search panel on top of page
     And User input the "In the end" keyword
     Then User choose the song from the search result

Scenario: User can see current top chart music
 Given Navigate to Youtube music Web
     When User click on Explore menu
     And User click Charts tab
     Then User can see all current top musics in "Charts" page

Scenario: User can see new releases musics
 Given Navigate to Youtube music Web
     When User click on Explore menu
     And User click on New Releases tab
     Then User can see new musics in "New releases" page