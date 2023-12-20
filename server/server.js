import express from 'express';
import cors from 'cors';
import Database from "better-sqlite3";
const db = new Database("database.db");

const messages = db.prepare("SELECT * FROM messages").all();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", function(request,response){
    messages.run();
    response.json(messages);
})

app.post("/messages",function(request,response){
    console.log("This is working");
    const newMessage = request.body;
    response.json(newMessage.message);
    console.log(newMessage.message);
})


app.listen(8080, function(){
    console.log("App is running");
})