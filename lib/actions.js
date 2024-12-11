"use server";

import { AdminClientPerktify, createAdminClient } from "@/appwrite/config";
import { ID, Query } from "node-appwrite";
import { Resend } from "resend";
import { generateReferralCode } from "./utils";
import { redirect } from "next/navigation";


// Registeration
export async function createNewUserRegistration(formData) {
  const data = Object.fromEntries(formData);
  const { firstName, lastName, email, company, country, phone, referCode } =
    data;

  const password = generateReferralCode(firstName) + "_test";
  let user;
  try {
    const { users, account, databases } = await AdminClientPerktify();

    let referredBy = null;

    if (referCode) {
      const { documents } = await databases.listDocuments(
        process.env.NEXT_PUBLIC_PERKTIFY_DATABASE_ID,
        process.env.NEXT_PUBLIC_PERKTIFY_COLLECTION_ID_USERS,
        [Query.contains("referralCode", referCode)]
      );

      referredBy = documents.length !== 0 ? documents[0].$id : null;
    }

    if (referCode && !referredBy) {
      return { message: "Invalid Invitation Code", type: "error" };
    } else if (referCode && referredBy) {
      // creates new auth user
      const newUserAccount = await account.create(
        ID.unique(),
        email,
        password,
        firstName
      );

      user=newUserAccount.$id;

      // sets prefs of the user
      await users.updateLabels(
        newUserAccount.$id, // userId
        ["user"] // prefs
      );

      // sets Email Verification of the user
      await users.updateEmailVerification(
        newUserAccount.$id, // userId
        true
      );
      // update MFA of the user
      await users.updateMfa(
        newUserAccount.$id, // userId
        true
      );

      //create document in users collection
      await databases.createDocument(
        process.env.NEXT_PUBLIC_PERKTIFY_DATABASE_ID,
        process.env.NEXT_PUBLIC_PERKTIFY_COLLECTION_ID_USERS,
        newUserAccount.$id,
        {
          firstName,
          lastName,
          company,
          country,
          referralCode: generateReferralCode(firstName),
          isRefferedLead: true,
          refferedBy: referredBy,
          email,
          phone,
        }
      );
      //create document in leads collection
      await databases.createDocument(
        process.env.NEXT_PUBLIC_PERKTIFY_DATABASE_ID,
        process.env.NEXT_PUBLIC_PERKTIFY_COLLECTION_ID_LEADS,
        ID.unique(),
        {
          referredBy: referredBy,
          users: newUserAccount.$id,
        }
      );

      //create document in points collection
      await databases.createDocument(
        process.env.NEXT_PUBLIC_PERKTIFY_DATABASE_ID,
        process.env.NEXT_PUBLIC_PERKTIFY_COLLECTION_ID_POINTS,
        ID.unique(),
        {
          userId: referredBy,
          points: 100,
        }
      );

      await sendmail(email, firstName, password);

      return {
        message: newUserAccount.$id,
        type: "success",
      };
      // return {
      //   message:
      //     "User Registered Successfully \n Your Friend Earned 100 Points",
      //   type: "success",
      // };
    } else {
      // creates new auth user
      const newUserAccount = await account.create(
        ID.unique(),
        email,
        password,
        firstName
      );
      user=newUserAccount.$id;
      // sets prefs of the user
      await users.updateLabels(
        newUserAccount.$id, // userId
        ["user"] // prefs
      );

      // sets Email Verification of the user
      await users.updateEmailVerification(
        newUserAccount.$id, // userId
        true
      );
      // update MFA of the user
      await users.updateMfa(
        newUserAccount.$id, // userId
        true
      );

      //create document in users collection
      await databases.createDocument(
        process.env.NEXT_PUBLIC_PERKTIFY_DATABASE_ID,
        process.env.NEXT_PUBLIC_PERKTIFY_COLLECTION_ID_USERS,
        newUserAccount.$id,
        {
          firstName,
          lastName,
          company,
          country,
          referralCode: generateReferralCode(firstName),
          isRefferedLead: false,
          refferedBy: null,
          email,
          phone,
        }
      );

      await sendmail(email, firstName, password);

      // return { message: "User Registered Successfully", type: "success" };
      return {
        message: newUserAccount.$id,
        type: "success",
      };
    }

  } catch (error) {
    return { message: `${error?.message}`, type: "error" };
  }


  // redirect(`/success/${user}`)
}

export async function sendmail(email, user, pwd) {
  const resend = new Resend("re_Pn5pomA5_9w5UjrbBtz5McXQzzjfRbrgu");

  resend.emails.send({
    from: "storekwil@shabab.site",
    to: email,
    subject: `Welcome to StoreKwil`,
    html: `
      <h1>Welcome to StoreKwil!</h1>
      <p>Congratulations on registering on StoreKwil. We're excited to have you on board!</p>
      <p>You can log in to your dashboard using the credentials below:</p>
      <ul>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Password:</strong> ${pwd}</li>
      </ul>
      <p><a href="https://portal-storekwil.netlify.app/login" target="_blank">Click here to login to your dashboard</a></p>
      <p>If you have any questions, feel free to reach out to our support team.</p>
      <p>Happy shopping!</p>
      <p>The StoreKwil Team</p>
    `,
  });
}
