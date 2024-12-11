import { fetchUserDetails } from "@/appwrite/data";
import { cookies } from "next/headers";
import "@/styles/globals.css";
import Image from "next/image";
// import { BiSolidFlagCheckered } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { BiSolidError } from "react-icons/bi";

export default async function SuccessPage({ params }) {
  cookies();
  const { userId } = params;
  const userExists=await fetchUserDetails(userId)



    if(!userExists) return(
        <div  className="thankyou">
        <div className="card">
           <BiSolidError className="error-icon"/>
           <h1>Sorry</h1>
           <h4>No User Found</h4>
           <p>Please Try to Register Again</p>
           <a href="/"><button>Back to Home</button></a>
        </div>
       </div>
    )
  return (
    <div  className="thankyou">
     <div className="card">
        <FaCheckCircle className="check-icon"/>
        <h1>Thank You</h1>
        <h4>{userExists.firstName}{" "}{userExists.lastName}</h4>
        <h4>Your request is submitted Successfully.</h4>
        <p>We have sent you the credentials for Perktify dashboard, Where you can track & manage your refferal rewards</p>
        <a href="/"><button>Back to Home</button></a>
     </div>
    </div>
  );
}
