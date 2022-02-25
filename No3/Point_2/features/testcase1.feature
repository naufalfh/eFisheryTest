Feature: Essential features

Scenario: User can play music directly after accessing Youtube music
 Given Navigate to Youtube music Web
     When User click search panel on top of page
     And User input the "In the end" keyword
     Then User choose the song from the search result

Scenario: User can login into Youtube music
 Given Navigate to Youtube music Web
     When User click on Sign In button
     And User input "naufalrog@gmail.com" into email field
     And User input "<password>" into password field
     Then User successfully Sign In into account with "naufalrog@gmail.com" email

Scenario: User can add album into library
 Given Navigate to Youtube music Web and Login into account
     When User search for 'A thousand suns' album
     And User click on the album
     And User click the add to library button
     And User go into library and open album tab
     Then User will find the album already added into library