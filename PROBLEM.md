# Angular TollGate Assessment - PlayerApp

## Objective

    Develop a simple web application using Angular which displays details of all the players stored in the repository and add the details of a new player to the repository. Use angular material for UI Components.

## Things to do

1. The app is composed of 1 Module with 3 Components, 1 Service and 1 Player Model Class. 

	- AppModule (Bootsrapping module that contains all the components)
	- Components (AppComponent, HeaderComponent and DashboardComponent)
	- Service (PlayerService)  
	- Player Model class with details player id, name,country and noOfMatchesPlayed

2. AppComponent is the RootComponent and should contain HeaderComponent and DashboardComponent

3. HeaderComponent contain the 'MatToolbar' and should display the App Title, which is, "PlayerApp".

4. DashboardComponent should display the players along with their details as cards (one for each player) and provides input fields, as interface for the user, to add the details of a new Player to the server.

5. DashboardComponent should use PlayerService to fetch all the players from the server and to add a new player to the server

6. PlayerService should provide below functionalities.
 
	- getPlayers() - Performs the API call using HttpClient get() and returns the Observable of Player[].
	- addPlayer() - Performs the API call using HttpClient post() and returns the Observable of Player.  

7. Use json-server to set up a fake REST Service to provide below endpoints for API calls.

	- GET - http://localhost:3000/players - get all the Players
	- POST - http://localhost:3000/players - add a new  Player

## Submission:

Upon completion, commit the changes and  push the project to a new gitlab-cgi repository and share the repo url in the tracker
