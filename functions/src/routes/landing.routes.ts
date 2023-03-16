import * as express from "express";

// import authorizeRequest from "../services/authentication.service";
import * as cors from "cors";
import { sendLandingMail } from "../api/mail";
const app = express();
app.use(cors());


 
app.post("/sendLandingMail", sendLandingMail); 

export const LandingAPI = app;
