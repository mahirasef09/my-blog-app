import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import Link from "next/link"


const NavBar = async () => {
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    // console.log(user);
  return (
    <div className="bg-gray-200">
        <nav className="container mx-auto flex justify-between items-center p-4">
            <div>
                <h1 className="font-extrabold text-2xl">My Blogs</h1>
            </div>
            <div className="space-x-4">
                <Link className="btn btn-sm btn-accent" href={'/'}>Home</Link>
                <Link className="btn btn-sm btn-accent" href={'/profile'}>Profile</Link>
                {
                    user ? <Link className="btn btn-sm btn-accent" href={'/api/auth/logout'}>Logout</Link>
                    :
                    <Link className="btn btn-sm btn-accent" href={'/api/auth/login'}>Login</Link>
                }
            </div>
        </nav>
    </div>
  )
}

export default NavBar