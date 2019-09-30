This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


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

#