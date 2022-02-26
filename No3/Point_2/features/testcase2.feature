Feature: Most Accessed Features 2

Scenario: User can choose any song genre to explore
 Given Navigate to Youtube music Web
     When User click on Explore menu
     And User click on Moods & genres tab
     And User choose the Rock genre
     Then User can see all musics in the "Rock" genre page

Scenario: User can access artist page from search
 Given Navigate to Youtube music Web
     When User click search panel on top of page
     And User input the "Linkin Park" keyword
     And User click the artist from search result
     Then User will be directed to the "Linkin Park" page

Scenario: 
 Given Navigate to Youtube music Web
     When User click search panel on top of page
     And User input the "One More Light" keyword
     And User click the album from the search result
     Then User will be directed to the "One More Light" album page