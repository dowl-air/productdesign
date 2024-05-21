"use client";
import { login } from "@/app/actions/admin.action";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
    const [error, setError] = useState(false);

    const loginHandler = async (FormData: FormData) => {
        setError(false);
        const response = await login(FormData);
        if (response.status === "bad") {
            setError(true);
        } else {
            redirect("/admin");
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-400">
            <div className="card bg-neutral px-20 py-24 rounded-2xl">
                <h1 className="font-bold text-2xl mb-5">Admin - Sign In</h1>
                <form className="flex flex-col gap-2" action={loginHandler}>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input name="login" type="text" className="grow" placeholder="Username" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <input name="password" type="password" className="grow" placeholder="Password" />
                    </label>
                    <p className={`text-error ${error ? "flex" : "hidden"}`}>Wrong username or password.</p>
                    <button type="submit" className="btn btn-primary mt-3">
                        Login
                    </button>
                </form>
            </div>
            <Link href="/" className="link text-black text-lg mt-8">
                Back to Homepage
            </Link>
        </main>
    );
};

export default LoginPage;
