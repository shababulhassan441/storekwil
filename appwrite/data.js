import { createAdminClient } from "@/appwrite/config";
import { ID } from "node-appwrite";


export async function fetchData() {
  try {
    const { databases } = await createAdminClient();

    const [
      hero,
      intro,
      whyhead,
      chooseCards,
      WaitList,
      footer,
      keyfeaturesHead,
      keyfeaturesCards,
      stickyLinks,
    ] = await Promise.all([
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_HERO
      ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_INTRODUCTION
      ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_WHYCHOOSEUS
      ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_WHYCHOOSEUS_CARDS
      ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_WAITLIST_CONTENT
      ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_FOOTER
      ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_KEYFEATURES
      ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_KEYFEATURES_CARDS
      ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_STICKY_LINKS
      ),
    ]);

    const HeroContent = hero.documents[0] || {};
    const IntroductionData = intro.documents[0] || {};
    const WhyHead = whyhead.documents[0] || {};
    const whyCards = chooseCards.documents || {};
    const WaitListData = WaitList.documents[0] || {};
    const footerData = footer.documents[0] || {};
    const keyfeaturesHeadData = keyfeaturesHead.documents[0] || {};
    const keyfeaturesCardsData = keyfeaturesCards.documents || {};
    const stickyLinksUrl = stickyLinks.documents[0] || {};

    return {
      HeroContent,
      IntroductionData,
      WhyHead,
      whyCards,
      WaitListData,
      footerData,
      keyfeaturesHeadData,
      keyfeaturesCardsData,
      stickyLinksUrl,
    };
  } catch (error) {
    console.error("fetchCardData:", error);
  }
}

export async function fetchheaderFooter() {
  try {
    const { databases } = await createAdminClient();

    const [footer,header] = await Promise.all([
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_FOOTER
      ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_HEADER
      ),
    ]);

    // const headerData = header.documents[0] || {};
    const footerData = footer.documents[0] || {};
    const headerData = header.documents[0] || {};

    return {
      footerData,
      headerData,
    };
  } catch (error) {
    console.error("fetchCardData:", error);
  }
}

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
    
    return { message: "Request submitted Successfully!" , type:"success"};
  } catch (error) {
    console.error("ERROR RegisterToWaitList", error);
    return { message: error?.message, type:"error"};
  }

}
