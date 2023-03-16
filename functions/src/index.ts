import * as functions from "firebase-functions";
import { LandingAPI } from "./routes/landing.routes";


exports.landing = functions.https.onRequest(LandingAPI);
// exports.admin = functions.https.onRequest(AdminAPI);
