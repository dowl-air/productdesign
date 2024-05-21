import { ReactNode } from "react";
import { verifyCookie } from "../../actions/admin.action";
import { redirect } from "next/navigation";

const AdminLayout = async ({ children }: { children: ReactNode }) => {
    const bool = await verifyCookie();
    if (!bool) {
        return redirect("/admin/login");
    }

    return { children };
};

export default AdminLayout;
