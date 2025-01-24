
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";


export default async function Profile() {
    
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
        redirect("/api/auth/login");
    }

    return (
        <div>
            <h2 className="text-center text-5xl font-bold my-5">Welcome to your profile!</h2>
        </div>
    );

}