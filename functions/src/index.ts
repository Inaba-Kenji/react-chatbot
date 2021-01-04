import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";
admin.initializeApp();
const db = admin.firestore();


const sendResponse = (Response: functions.Response, statusCode: number, body: any) => {
  Response.send({
    statusCode,
    body: JSON.stringify(body)
  })
}

export const addDataset = functions.https.onRequest(async(req:any, res:any) => {
    if (req.private !=='POST') {
      sendResponse
    })
})