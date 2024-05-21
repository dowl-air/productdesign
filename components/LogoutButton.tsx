"use client";

import { logout } from "@/app/actions/admin.action";

export default function LogoutButton() {
    const logoutHandler = async () => {
        await logout();
    };

    return (
        <button className="btn btn-error" onClick={logoutHandler}>
            Logout
        </button>
    );
}
