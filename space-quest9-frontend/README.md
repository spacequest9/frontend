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

BACKEND FUNCTION AND ALGORITHM

The algorithm to generate rooms we use dictionary and tuple.
First got the data from npm.js... faker.js.We use  Faker.js  to generates  100 rooms with room title  and room description randomly. We stored the data in a file and to read that data in python we use dictionary.
 #We will create a dictionary of rooms.
    #dRoooms key (x,y) cordinates of room
    #dRooms value is the Room object at coordinates (x,y)

    dRooms = {}

    #Counters to track how many links were skipped
    totalSouthSkipped = 0
    totalWestSkipped = 0

    #We are going to place rooms on co-odrinates starting from (100,100)
    #We will go right and up by 25 points.
    #So, first room coordinate is (100,100). Next room in same row will be (125, 100), (150, 100) and so on. Last room
    # in this row will be (350,100)
    #After being done this row, we move to next row above this, which has first room at (100, 125). Its next room will
    # be (125, 125), (150, 125) and so on.
    #This will we keep going up until last row, whose first room will be (100, 350).
    #

    startx, starty, distance = 100,100,25

    #Index to read data from dataFromFile
    dataFileIndex = 1
    for i in range(0, 10): #For each row
        #We are in row number i. So, y cordinate is fixed at 100 + i*25
        #now we will go through each column of this ith row, and set x co-ordinates and create room
        y = starty + i*distance
        for j in range(0,10):
            #X, y co-ordinates of room
            x = startx + j*distance

            #We have x,y co-oridinate to create a room

            print ("Date from file", (dataFromFile[dataFileIndex]))
            #Create room based on title, description, x and y co-ordinates
            room = Room(title = dataFromFile[dataFileIndex][0], description =dataFromFile[dataFileIndex][1], locx = x, locy=y)
            room.save()
            dRooms[(x,y)] = room

            #Connect this room to its neghbour

            #First look north room, which is x, y + 25, but it should exist
            # if y + 25 <= 350:
            #     if (x, y + 25) in dRooms:
            #         northRoom = dRooms[(x, y + 25)]
            #         room.n_to = northRoom
            #         northRoom.s_to = room

            # Look south which is 100,100, south is x, y-25
            skipped = False
            if  y-distance >= starty:
                if random.randint(1,10) in (1,2,3,4,5,6,7,8):#Skip 20% of souths
                    southRoom =  dRooms[(x, y - distance)]
                    room.connectRooms(southRoom, "s")
                else:
                    print("Skip adding south")
                    totalSouthSkipped += 1
                    skipped = True

            # # Look each which is x+25,y and should exist
            # if x +25 <= 350:
            #     if (x - 35, y) in dRooms:
            #         westRoom = dRooms[(x - 35, y)]
            #     room.w_to = westRoom
            #     westRoom.w_to = room

            #Look west which is x+25,y and should exist
            if x-distance >= startx:

                if skipped or random.randint(1, 10) in (1, 2, 3, 4, 5, 6, 7,8):#Skip 20% of west
                    westRoom =dRooms[(x-distance,y)]
                    room.connectRooms(westRoom, "w")
                else:
                    print("Skip adding west")
                    totalWestSkipped += 1

            dataFileIndex += 1

    print("Rooms : ", dRooms)
    for cord, room in dRooms.items():
        print(cord, ":", room)

    print("Total Skipped ", totalSouthSkipped , totalWestSkipped)

    players=Player.objects.all()
    for p in players:
      p.currentRoom=dRooms[(200,250)].id
      p.save()


