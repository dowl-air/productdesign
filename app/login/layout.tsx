import { ReactNode } from "react";
import { verifyCookie } from "../actions/admin.action";
import { redirect } from "next/navigation";

export default async function Layout({ children }: { children: ReactNode }) {
    const bool = await verifyCookie();
    if (bool) {
        redirect("/admin");
    }
    return <>{children}</>;
}
