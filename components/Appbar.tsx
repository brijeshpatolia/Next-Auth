"use client"
// import { useRouter } from "next/navigation"
import {signIn , signOut, useSession } from "next-auth/react"
export const Appbar = () => {
    // const router = useRouter();
    const session = useSession();
    return (
        <div>
            <button onClick={()=>{
               signIn();
            }}>
                signin 
            </button>

            <button onClick={()=>{
                signOut();
            }}>
                signout
            </button>

            <div className="">
                     {JSON.stringify(session) } 
            </div>
        </div>
    )
}
