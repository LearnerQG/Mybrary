// line 11 was being edited by me check the video and line 11 and finish the remaining part that's needed to be in line 11 . then remove this line and place line 2 here without touching the lines below line 2
// line 92 and 94 is the comment you should check before proceeding to 97 and must check all the comments pertaining the lines mentioned in line 2
// Lines were written in this order ({ These lines 11 & 12 are the lines that is must for continuing the project . So these are the first two lines }, 13 , 15 , 17 , 19 , 21 , 27 , 30 , 31, 34 , 66 , 69 , 75 , 77 , 80 , 84 , 88 , then lines 5-7 , finally again go the the end in the line 97

if (process.env.NODE_ENV !== 'production'){
        require('dotenv').config()// check the use .parse() hint in 16:31 where it indicates us to use .parse instead of .load
 } // And now what we need to do is tell our application to load that into it so in the very top of our application here we just need to do a simple check to check if we runing in the production environment or not we just say if(process.env.NODE_ENV = this will be set by default by node and we wanna check if this is not equal to production because we don't actually want to load in this environment variable we must put in our developement environment so we can say it's not production and we wanna run some code to actually load up those different dependencies so we require dot env and we're just going to say .load ( ***check the use .parse() hint in 16:31 where it indicates us to use .parse instead of .load***) this is going to load all the variables from our .env file here and it's going to import this into our process .env variable in our application . and now if we save that and try to rerun our application we see here that it should work and as you can see everything is green and we got message saying we are connected to mongoose and our application is up and running .

// Now the very last thing we need to do is set up our application with git so if we just close out the list we can just type in git init and it will initialize our repository here and if you don't have already git installed or don't no how ti install git check this : https://www.youtube.com/watch?v=IHaTbJPdB-s   Now that we have git initialized too we wanna create the git ignore file in our project just call it .gitignore and in here we're going to put we don't want to include in our git repository . In our case we don't want to include our dotenv file because we never want to include these environment variables there could be sensitive information we don't want to share with the world . And we also want to not install this node_modules because as you can see this is a huge set of dependencies  . this is where npm installs everything your application requires and it becomes very very large . But this package.json and package-lock.json file hold all that information in a much more condensed way so that when someone pulls down your project they can just run npm install and it will install all these dependencies in node_modules . So now we go to .gitignore and we wanna also ignore node_modules now if we save that you see in visual studio code this actually grey out to let you know that there ignored and these green files are new files we've added . So we can run git add with a period after which is "." without the quotes to add everything in our folder and that is below , which is perfect everything is been added and we can run git commit and we can call it wahatever we want we can just say "Initial Setup"    This is goig to add all this different files to our project and there we go we now have everything set 

// First line is this line : The first thing we need to do in order to get our project started is to use npm to initialize our project . if you don't have npm or node intalled already make sure you check out how to install node video : https://www.youtube.com/watch?v=VShtPwEkDD0&t=0s . So what we need to do is run npm init -y        The -y will default all the parameters to yes instead of hiting enter all the every time a line appears and just give us all the default values inside of our package.json . Then go to package.json and change "main":"index.js" lines index.js to server.js which is the name of this file and which is just personal preference and we can close out of it . next we can actually install the dependencies  that we're going to need in order to get a basic express server up and running . In order to do that we need to run npm i which stands for npm install and pass in the list of packages we want . in our case we use 'express' without the quotes  for our server , 'ejs' without the quotes for our templating language and then we use 'express-ejs-layouts' without the quotes which will allow us to create a layout file for all of our html . we will just hit enter and with that done that's going to download all the packages for us thats going to add those to our package.json , as you can see in package.json in our dependencies section and it creates the log file for us . 
//  . I installed 'express', 'ejs', 'express-ejs-layouts' without the quotes  by typing npm i express ejs express-ejs-layouts . and the last thing we wanna do is install a developement independency so we can run npm i --save-dev which will save this as a developement dependency(not sure whether dependency or independency) and we want nodemon which will allow us to automatically refresh and restart our server every time we make a change . so we type in npm i --save-dev nodemon. Now that that's done we can go to our package.json here we'll see it's a dev dependency and we can actually create this script we want for running our server . The first script we're going to run is to build to start our startup normally so we're just going to call this start in line 6 of package.json and this is just going to run node server.js so after "start": we write "node server.js" . And this is just going to start our server on a production environment without nodemon . Our next is going to be called devStart in line 7 of package.json which is what we're going to be using most of the times to start our server and this is going to run nodemon server.js so after "devStart": we write "nodemon server.js" , this is just essentially the same thing as node server.js except for it will automatically refresh our server every time we make the change . So now we can save that and we're completely done with our package.json and npm . So we're completely done with our package.json and npm . The next thing that we wanna do is setup our actual server so we've created this server.js file and in here is where we're going to get our express and application up and running . So first thing we do is we're going to import express from the express library that we installed with npm which is done in line 13 . And continue from there .   [In short                npm init - y                    npm i express ejs express-ejs-layouts                        use    " npm install -g nodemon  " instead of " npm i --save-dev nodemon " and remove the quates  and lastly to start nodemon type:                 nodemon start                    ]  { npm run devStart is going to start nodemon as well } 
const express = require('express')      //comment on line 13 : import express from express library that i installed with npm . Then proceed to line 15 .

const app = express()   // now i'm going to  get the app portion of that by calling the function of express . Then proceed to line 17 . 

const expressLayouts = require('express-ejs-layouts')   // i'm going to get the express-ejs-layouts package that i installed as well i'm going to require that package in . Then proceed to line 19 . 

app.set('view engine','ejs')    // we're setting our view engine so we say app.set and we're using .ejs as view engine .  Then proceed to line 21 . 

app.set('views',__dirname + '/views')   // where our views are going to be coming from
//  __dirname for current directoryname and just append views folder to direct it to views directory more specificly 
// directory like C://windows/Programfiles
        //  or 
//  my udenstanding is that all the ejs(the view-engine-name-will-be-in-the-place-of-ejs-if-some-other-extension-was-chosen) files will be viewed from views folder .  Then proceed to line 27 . 

app.set('layout', 'layouts/layout')     //Last thing we wanna do is hook up express layouts . So we can say app.set and we tell we wanna set up where our layout files are going to be . And essentially the idea behind a layout file is that every single file is going to be put inside of this layout file so we don't have to duplicate all of the beginning html and ending html of our project such as the header and footer . So we just say that that is going to be inside of a layouts folder inside of a file called layout .  
//   Then proceed to line 30 . 

app.use(expressLayouts) // we also need to tell our express application that we want to use expressLayouts so we just say app.use( and we pass in that expressLayouts variable that we included from that library ) . Then proceed to line 32 . 

app.use(express.static('public'))       //  we also want to tell our express where our public files are going to be such as stylesheets our javascript or our images . Then proceed to line 34 . 

app.listen(process.env.PORT||3000)      //  Now we can just tell our app that we want to listen on a certain port so we can say app.listen(and we're going to want to set this up to be process.env.PORT we're just going to pull this from an environment variable so when we deploy the server is going to tell us what port it is listening to not us || but for developement we're just going to default this to port 300 since the server is not telling us anything for our hosting platform so we're just gonna use port 3000 ) 

// Now if we save that This is all that we need to get our server up and running and down in the terminal we can run 'npm run devStart' without the quotes which is that command we created earlier and if we hit enter you should see that it's starting  up the node server .

// then in the browser type localhost:3000 and it will say cannot get anything , thats because there is no route set up in our application 

//  that's where we're going to work on next

// in many smaller applications you may see that people put all of there routs inside of their server.js file but for our larger applications such as this application it becomes very hard to manage

// so were going to use mvc to layout our applications and we're going to put all of our routes which will also be called controllers inside of the routes folder

// so we can just create here a routes folder and all of our routes are going to go inside this folder 

//  and the reason we're using the word routes instead of controllers is because in nodejs and express land most people refer to controllers as routes but you can think of them as exactly the same thing . 

// we already have our views folder which is where all of our views from mvc are going to go .  

// lastly we're just going to create a folder here called models and this is where all of our database models are going to be going .

// now that we have our mvc  structure set up lets create our very first route which is going to be our index route so essentially everything for when we don't actually have a resource or a model in our url

//  so in our routes here we create a new file called index.js and inside of here we're going to set up all the routes like i said for our index of our application 
//*  **my understanding may be head body footer etc**  *


//  now we're going to set up a single route at our root index.js

// then go to index . js and read till you reach line 12 it should be changed to 7(till the end of line 7))

// then you will find why you wrote line 57 (should be changed to may be 66) in this page

const indexRouter = require('./routes/index')  // Now we have the reference to this index router right here inside of this require we can tell our app to use that.so down here we can just say app.use( tell it the rout path of this is coming from in our case this just rout of our application so we just pin this in a slash right here '/' which just says very root of our application and we tell it what router it want to handle this route and we just say it's our index router . Then go to line 67
app.use('/',indexRouter) // And now if we save this you will see that we get an issue here with our application it's crashing because it doesn't know how to get any information from this index (index.js may be) file because we're not actually exporting any information from this file , so we now goto index.js and go to line 14 and start reading comment from line 14 





// after line 8 of index.js continued to here . The last thing that we have to do before our application is fully set up is working on getiing our modules integrated and to do that we're just going to connect our application to a local mongodb database . If you don't have mongodb installed in your computer make sure you check out our how to install mongo db video which will be found in this link https://www.youtube.com/watch?v=wcx3f0eUiAw   . So now we need to integrate mongodb in our application and in order to do that we need to be in our server.js file and install it while in this page . because all the libraries are installed in here . In terminal type npm i mongoose           This allowing us to integrate with mongodb . Make sure it's intalled inside of our application . Now we we can work on setting up our database . so to do that right here we do the following :

const mongoose =require('mongoose')// we require mongoose and keep it in a variable in line 66.

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true,  useUnifiedTopology: true } ) // use  ,  useUnifiedTopology: true otherwise this error will show (node:5040) [MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor. (Use `node --trace-warnings ...` to show where the warning was created)
// And in line 68 now we can set up our connection for database . The first thing we wanna say is mongoose.connect('and in here we're going to actually hook the url for our connection .  for essentially you never actually want to hardcode your connection you want to be dependent upon your environment because when you're developing you want mongoose to coonect to your local mongo db server . but when you have your application deployed you want connect to a server thats on the web somewhere , so in here we're going to pass a string for the url which is going to come from the environment variables . so let's say process.env.DATABASE_URL'), {and the next thing this is going to take is some options for how we wanna set up mongodb inside of our application , in our case because of the version of mongodb that we're using we're going to wanna set up a variable here that says useNewUrlParser: true and we set this to true and this is just because the mongoose gen by default uses an older way of accessing data in mongodb which is deppricated currently in mongodb , depending on when you watch this tutorial this may already be changed to true by default so you may or may not need this , you can just play around with it on your own to figure it out }

const db = mongoose.connection//   now the last thing we wanna do is actually just log if we are or are not connected to our database . so we can access the connection here let's create a variable called db and we can just get this from moongoose . connection 



db.on('error',error=>{console.error(error)})// Then we can just say db.on('error', so when we run into an error when we connect it to our database we want to print that error out error = > { so inside of here we can just do console.error(error) } ) 



db.once('open',()=> console.log('Connected to mongoose'))// in line 79 we can say .once wcich is only going to run one time ,this is just when we open up our database for the first time . so once we connect with the very first time we just gonna console.log here that we've Connected it to Mongoose.And there we go that's all the code we need to run for this but if we try to run our application typing npm run devStart we're going to get an error immediately that's because our application doesn't actually have this variable for our database url so we need to set this up now . to do that we're to be using our library which is called .env which will allow us to load in environment variable in our application . so wejust say nmp i --save-dev dotenv        . then go to line 83 of this file



// Then go to line 1 of .env file and write DATABASE_URL =  and we're just going to set this to our database url , this url is going to take the form of mongodb since we're taking mongodb : // and we're going to put in here localhost since it is local to our application mongodb://localhost and since our application is called mybrary we'll call the database that we're accessing mybrary mongodb://localhost/mybrary  . And if we save this we now have our database url . 

// Then continue to line 5-7 of this page . 


