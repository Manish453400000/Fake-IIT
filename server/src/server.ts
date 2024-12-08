import dotenv from "dotenv";
dotenv.config({
  path: "./.env"
});

import { server } from "./app";
import { connectDB } from "./db/connectDB";

const nodeVersion = +process.version?.slice(1).split(".")[0] || 0;

const startServer = async() => {
  server.listen(process.env.PORT || 8080, () => {
    console.info(
      `✅ server is running at: http://localhost:${process.env.PORT}`
    )
    console.log('😁 you are good to go now');
  })
}

(async() => {
  if(nodeVersion >= 14){
    try{
      await connectDB();
      startServer();
    }catch(err){
      console.log("mongoDB connection error: ",err)
    }
  }else {
    connectDB()
    .then(() => {
      startServer();
    })
    .catch((err) => {
      console.log("mongoDB connection error: ", err);
    })
  }
})();