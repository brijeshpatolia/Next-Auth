import { Appbar } from "@/components/Appbar";
import { getServerSession } from "next-auth";
import NEXT_AUTH from "../lib/auth";

export default async function UserComponent() {
   const session = await getServerSession(NEXT_AUTH);
  return <div>
    <Appbar />
    {JSON.stringify(session)}
  </div>;
}

