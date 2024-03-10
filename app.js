const express = require("express");
const app = express();

// Mongo DB Connection Setup

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = "mongodb+srv://Admin-Mitadru:DB1234@clustermg.e4fjgoy.mongodb.net/clubhouseDB?retryWrites=true&w=majority&appName=ClusterMG"

async function main(){

    try{ await mongoose.connect(mongoDB); }
    catch(error){ console.log(error); }
}

main().catch((error) => console.log(error));

// View Engine Setup

app.set("views", __dirname + "/views");
app.set("view engine", "pug");

// Static Folder Access - "public"
app.use(express.static(__dirname + '/public'));

// Passport Authentication Setup

const passport = require("passport");
const session = require("express-session");

app.use(session({ secret: "friends", resave: false, saveUninitialized: true }));
app.use(passport.session());

// Function 1 - Setting up LocalStrategy

const User = require("./models/user");
const LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy(async (username, password, done) => {

    try{

        const user = await User.findOne({ username: username }).exec();

        if(!user)
            return done(null, false, { message: "Incorrect Username!" });

        if(user.password !== password)
            return done(null, false, { message: "Incorrect Password!" });

        return done(null, user);
    }

    catch(error){
        return done(error);
    }
}));

// Function 2 - Serialize User
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Function 3 - Deserialize User

passport.deserializeUser(async (id, done) => {

    try{

        const user = await User.findById(id).exec();
        done(null, user);
    }

    catch(error){
        done(error);
    }
});

app.use((req, res, next) => {
    
    res.locals.currentUser = req.user;
    next();
});

// To have access to the "currentUser" variable in all of our views without having to manually pass it into 
// all of the controllers in which we need it.

// Routing

app.use(express.urlencoded({ extended: false })); // ** Parses incoming requests with URL-encoded payloads.

const indexRouter = require("./routes/index");
app.use("/index", indexRouter);

app.get("/", (req, res) => res.render("login"));
app.post("/log-in", passport.authenticate("local", { successRedirect: "/index", failureRedirect: "/"}));

app.get("/log-out", (req, res, next) => {

    req.logout((error) => {

        if(error)
            return next(error);

        res.redirect("/");
    });
});

module.exports = app;