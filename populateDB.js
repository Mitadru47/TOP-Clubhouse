const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = "mongodb+srv://Admin-Mitadru:DB1234@clustermg.e4fjgoy.mongodb.net/clubhouseDB?retryWrites=true&w=majority&appName=ClusterMG"

async function main(){

    console.log("Debug: Connecting to DB...");

    await mongoose.connect(mongoDB);
    console.log("Debug: Connected!");

    await createUsers();
    await createMessages();

    console.log("Debug: Closing Connection...");
    mongoose.connection.close();
}

main().catch((error) => console.log(error));

const User = require("./models/user");
const Message = require("./models/message");

const users = [];

async function createUsers(){

    console.log("Debug: Creating Users...");

    await Promise.all([
        createUser(0, "John", "Marston", "intellectualGunslinger", "passwordJM", "VIP"),
        createUser(1, "Arthur", "Morgan", "aGoodMan", "passwordAM", ""),
        createUser(2, "Dutch", "van der Linde", "kingLear", "passwordD", "")
    ]);
}

async function createMessages(){
    
    console.log("Debug: Creating Messages...");

    await Promise.all([

        createMessage(
            "Old West Quote #1", 
            "We All Need Friends, Old Timer. We Die Alone, But We Live Among Men.", 
            "2010-05-18", 
            users[0]
        ),

        createMessage(
            "Old West Quote #2", 
            "You came for me? Risked life and limb in this den of lowlifes and murderers... So that they might live and love? Aint that fine.", 
            "2018-10-26", 
            users[2]
        ),

        createMessage(
            "Old West Quote #3", 
            "People Don't Forget. Nothing Gets Forgiven.", 
            "2010-05-18", 
            users[0]
        ),
    ]);
}

async function createUser(index, firstname, lastname, username, password, membership_status){

    const userDetail = {
        
        firstname: firstname,
        lastname: lastname,

        username: username,
        password: password,

        membership_status: membership_status
    };

    const user = new User(userDetail);
    await user.save();

    users[index] = user;
    console.log("Added User: " + user.username);
}

async function createMessage(title, text, timestamp, creator){

    const messageDetail = {
        
        title: title,
        text: text,

        timestamp: timestamp,
        creator: creator
    };

    const message = new Message(messageDetail);
    await message.save();

    console.log("Adding Message: " + message.title);
}