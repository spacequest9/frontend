Spacequest9 Reademe.md

Backend 
  the API is a Python/Django server.  The generate rooms algorithm iteratively creates room data and stores in a dictionary.  This data structure allows for the quickest lookup times and the best run time.  Space complexity is negligible with this data structure.

  The endpoints are:
  1. def createworld(request): # creates 100+ rooms. returns empty json object
  2. def create_our_world(request): # creates custom star constellation room objects
  3. def initialize(request): # initializes player and places at a starting room. 
  4. def move(request): # allows a player to make a move.  


Frontend
The client was build using React with the following libraries:

  1. axios - for api calls
  2. konva - canvas library for game display
  3. semantic ui - for styling
  4. styled-components - for styling

The api calls made:

  1. createourworld - creates world grid layout
  2. init - initializes world and puts player in a room
  3. getrooms - retrieves rooms
  4. move - allows player to move

The api calls are consumed by storing on state and then using that state to control display components.  A player starts out in a room that contains x and y coordinates that allow canvas mapping.  The room also contains data about other players in the room, which is displayed on the screen.  The room also contains information on what other room connect to it and this logic is connected to the directional display buttons on the screen that allow a player to move.

Each time a player moves, state is changed and triggers another render.

