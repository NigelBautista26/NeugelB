# Bugs found...

1. Searching a specific movie doesnt just display that specific movie. and at the same time displays other non related movies.

        Steps to replicate:

            Go to the homescreen
            Search for a movie called  "Scoob!"

        Expected Result: The search should display the specific movie alone.

        Actual Result: Thes earch will display the specific movie with other non related movies.



2. The "X" button for search doesnt exit out of the search functionality.

        Steps to replicate:

            Go to the homescreen
            Search for any movie
            Press the "X" button

        Expected Result: The search tab should be empty again and the list of movies displayed for the previous search should be gone.

        Actual Result: The search tab is empty again but the list of movies from the previous search is still displayed.



3. The back button redirects the user back to the home screen but still displays the list of movies from the last search.

        Steps to replicate:

            Go to the homescreen
            Search for the "scoob"
            Press the back button

        Expected Result: The user should be redirected back to the home screen and the original list of movies should be displayed.

        Actual Result: The user is redirected back to the home screen but the list of movies displayed are still from the users last searched list.



4. The refresh movie functionality doesnt work

        Steps to replicate:

            Go to the homescreen
            on the top of the movie list scroll from top then down to initiate the refresh

        Expected Result: The refresh functionality should refresh the movie list shown in the homescreen.

        Actual result: The refresh functionality doesnt refresh the movie list shown in the homescreen.



5. "Requirement Unclear" - The mobile application only displays a maximum 4 movies on the mobile viewport before scrolling, but in the requirements, it said that the initial view for the home screen should display 20? so im not certain if this is a real bug or not? as the infinite scrolling does work fine. or maybe the requirement is wrong?

