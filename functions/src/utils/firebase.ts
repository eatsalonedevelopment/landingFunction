import * as admin from "firebase-admin";
import { ServiceAccount } from "firebase-admin";
import * as serviceAccounnt from "../eatsaloneproduction-firebase-adminsdk-5r90q-e62891c0e7.json";
// sa = service accounnt

/**  @return {admin.app.App} */
function initializeFireaseAPP() {
  return admin.initializeApp({
    credential: admin.credential.cert(serviceAccounnt as ServiceAccount),
  });
}
/**
 * This is the  local initialization  of the firebase app
 */
export var FirebaseApp = initializeFireaseAPP();
export const fb_store = FirebaseApp.firestore();
export const fb_storage = FirebaseApp.storage();
