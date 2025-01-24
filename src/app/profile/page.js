
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";


export default async function Profile() {
    const { isAuthenticated } = getKindeServerSession();

    // if (!(await isAuthenticated())) {
    //     redirect("/api/auth/login");
    // }


    // return (await isAuthenticated()) ? (
    //     <div>
    //         <h2 className="text-center text-5xl font-bold my-5">Welcome to your profile!</h2>
    //     </div>):
    // (<div>
    //     This page is protected, please <LoginLink>Login</LoginLink> to view it
    // </div>
    // );

    return (
        <div>
            <h2 className="text-center text-5xl font-bold my-5">Welcome to your profile!</h2>
        </div>
    );

}