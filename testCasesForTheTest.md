Important End 2 End Test Scenarios:

Sample BDD Test cases for three important scenarios that I think is important for the users…

# Homescreen...

Given: The user navigates to the homescreen section within the app
Then: Check the app title is displayed	
And: Check that the search icon is displayed	
And: Check that the first 20 movies are displayed
And: Check that Each movie includes	a thumbnail
And: Check that Each movie includes	a movie title
And: Check that Each movie includes	a release date
And: Check that Each movie includes	an IMDB score


# Movie List Pagination...

Given: The user navigates to the homescreen section within the app
When: The user scrolls down
Then: The user should see the next 20 movies


# Movie Detail Screen...

Given: The user navigates to the homescreen section within the app
When: The user opens the movie detail screen section
Then: Check that the back button is displayed
And: Check that the screen title is displayed
And: Check that the photo of the movie is displayed
And: Check that the movie title is displayed
And: Check that the IMDB score is displayed
And: Check that the general information is displayed
And: Check that the movie details is displayed


# Search Movie...

Given: The user navigates to the homescreen section within the app
When: The user searches a movie
Then: The searched movie should be displayed

