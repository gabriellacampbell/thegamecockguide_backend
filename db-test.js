require("dotenv").config();

const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
});

// creates message class
const Message = mongoose.model("Message", schema);

const message = new Message({
  name: "Hello World",
});

async function createMessage(){
  const result = await message.save();
  console.log(result);
}

mongoose
  .connect(process.env.MONGODB_URI, {dbName: "testdb"})
  .then(() => {
    console.log("Connected to mongodb...");
    return createMessage();
  })
   .catch((err) => {
    console.error("Could not connect:", err.message);

    if(err.reason && err.reason.servers){
      err.reason.servers.forEach((server, address) => {
        if(server.error){
          console.error(address, server.error.message);
        }
      });
    }
  });