import { getServerSession } from "next-auth"
import { authOptions } from "../lib/auth"
import SignOutButton from "../components/SignOutButton";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div> 
        { session?.user ? ( <SignOutButton/>  ) : <button>Sign in</button> }
        <button></button>
        <div >hello from home {session?.user.username}</div>
    </div>
  )
}
