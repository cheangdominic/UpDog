# Project Title
UpDog

## 1. Project Description
UpDog is a web-based mobile app designed to create meaningful connections between humans and dogs. We want to enable our users to synchronise their schedules with each other and build a community with an emphasis on the dog’s well being. The project's key features include profile management, playdate scheduling, friends system, and a community chat.

## 2. Names of Contributors
List team members and/or short bio's here... 
* Hi! My name is Aaron! I am a former consultant, former chef, current CST student. 
* Hi, my name is Dominic Cheang! I am a current CST student and am coming straight out of highschool.
* Hi, my name is Jun Morimoto! I would love to explore our journy building codes as a team. 
* Hi, my name is Trung!
	
## 3. Technologies and Resources Used
List technologies (with version numbers), API's, icons, fonts, images, media or data sources, and other resources that were used.
* HTML, CSS, JavaScript
* Bootstrap 5.0 (Frontend library)
* Firebase 8.0 (BAAS - Backend as a Service)
* MapBox v3.7.0 (API)
* Javascript API for filereader; image conversion to base64 strings

## 4. Complete setup/installion/usage
State what a user needs to do when they come to your project.  How do others start using your code or application?
Here are the steps ...
* The app can be accessed at updog-d7aa0.web.app or through live serve

## 5. Known Bugs and Limitations
Here are some known bugs:
* Playdate covers may be innaccurate to location due to longitude and latitude address searching inaccuracies

## 6. Features for Future
What we'd like to build in the future:
* Public profiles to view when clicking participants that joined playdates. 
* Filters for playdates: Locations, dog sizes, ages, etc. 
* Private chat with friends
* MapBox sourced locations for scheduling playdates with friends
	
## 7. Contents of Folder
Content of the project folder:

```
 Top level of project folder: 
├── .gitignore               # Git ignore file, specifies intentionally untracked files to ignore
├── 404.html                 # 404 error HTML page, displayed when a user navigates to a non-existent page
├── chat.html		         # Chat page HTML file, where users can chat with each other
├── create_doggo.html        # Add dog HTML page, allows users to add a new dog to their profile
├── dog_profile.html         # Dog profile HTML page, displays a user's dog's details
├── edit_profile.html        # Edit dog profile HTML page, allows users to edit their dog's info
├── FAQ.html                 # Frequently Asked Questions page HTML
├── firebase.json            # Firebase configuration file for hosting and project setup
├── firebase.indexes.json    # Firebase Firestore indexes configuration
├── firestore.rules          # Firestore security rules
├── friends.html             # Friends page HTML, displays a user's friends and friend requests
├── inbox.html               # Inbox page HTML, shows the playdates a user has joined
├── index.html               # Landing page HTML, default page when visiting the app URL
├── login.html               # Login page HTML, allows users to log into the app
├── main.html          	     # Main page HTML, dashboard shown after login
├── maps.html                # Map page HTML, displays park maps and geolocation features
├── navigation_info.html     # Article page HTML, explains app's park navigation features
├── playdates_info.html      # Article page HTML, explains the playdate feature
├── profile.html             # Profile page HTML, shows user's personal profile
├── public_profile.html      # Public profile page HTML, shows other users' public profiles
├── README.md                # Project README file, contains documentation and setup instructions
└── socializing_info.html    # Article page HTML, explains socializing features in the app

Subfolders and files:
├── .git                     # Git repository folder
├── images                   # Folder containing images
    /blah.jpg                # Example image file, include source acknowledgement
├── scripts                  # Folder containing JavaScript files
    /authentication.js       # Handles Firebase authentication
    /autoaddress.js          # Geocoder auto address selection for playdates
    /chat.js                 # Chat functionality between users
    /create_doggo.js         # Logic for creating a new dog profile
    /dateofplaydate.js       # Sets min/max dates for playdate creation
    /dogprofile.js           # Displays dog profile information
    /editdogprofile.js       # Edits a dog's profile information
    /editpost.js             # Edits a playdate post
    /editprofile.js          # Edits user profile information
    /firebaseAPI_UpDog.js    # Firebase API setup and helpers
    /friends.js              # Friend management functionality
    /joinedList.js           # Displays list of playdates user has joined
    /login.js                # Login page logic
    /main.js                 # Populates main page with playdates and content
    /map.js                  # Map interactions with MapBox
    /participants.js         # Manages participants for playdates
    /playdates.js            # Saves playdates and removes expired ones
    /profile.js              # Populates user profile page
    /publicprofile.js        # Populates public profile page
    /script.js               # General helper functions
    /skeleton.js             # Sets up page layout skeleton, navbars, etc.
    /welcomealert.js         # Displays welcome greeting to users
├── styles                   # Folder containing CSS styles
    /chat.css                # Styles specific to chat page
    /color.css               # Defines color schemes and variables
    /dogprofile.css          # Styles for dog profile page
    /editdogprofile.css      # Styles for edit dog profile page
    /editpost.css            # Styles for editing playdates
    /editprofile.css         # Styles for editing user profile
    /friends.css             # Styles for friends page
    /inbox.css               # Styles for inbox/joined playdates page
    /joinedList.css          # Styles for joined playdates list page
    /loggedin.css            # Styles applied when user is logged in
    /loggedout.css           # Styles applied when user is logged out
    /loginpage.css           # Styles for login page
    /main.css                # Styles for main page/dashboard
    /map.css                 # Styles for map page
    /postcreate.css          # Styles for creating playdate posts
    /profile.css             # Styles for user's profile page
    /publicprofile.css       # Styles for public profiles of other users
    /styles.css              # General global styles
```


