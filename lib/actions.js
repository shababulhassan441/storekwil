"use server";


import { createAdminClient } from "@/appwrite/config";
import { ID } from "node-appwrite";



// RegisterToWaitList
export async function RegisterToWaitList(formData) {

  const data = Object.fromEntries(formData);
  const {firstName,lastName,email,company,country,telephone } = data;

  console.log(firstName,lastName,email,company,country,telephone)

  try {

    const {  databases } = await createAdminClient();

   await databases.createDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_COLLECTION_ID_WAITLIST,
      ID.unique(),
      {
        firstName,lastName,email,company,country,telephone
       
      }
    );
    
    return { message: "Successfully Registered in the WaitList" , type:"success"};
  } catch (error) {
    console.error("ERROR RegisterToWaitList", error);
    return { message: error?.message, type:"error"};
  }

}