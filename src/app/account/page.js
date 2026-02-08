import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function AccountPage({searchParams}) {
    const session = await getServerSession(authOptions);
    const desiredUsername = searchParams?.desiredUsername;
    if (!session) {
        redirect('/');
    }
    return (
        <div>
            account {session?.user?.name}<br />
            desired username: {desiredUsername}
        </div>
    );
}
