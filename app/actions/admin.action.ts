"use server";

import { JWTPayload, jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { env } from "process";

const secretKey = "superSecret";
const key = new TextEncoder().encode(secretKey);

const login_x = env.ADMIN_LOGIN;
const password_x = env.ADMIN_PASSWORD;

export const login = async (formData: FormData) => {
    const login = formData.get("login") as string;
    const password = formData.get("password") as string;
    if (login !== login_x || password !== password_x) return { status: "bad" };
    const session = await encrypt({ login, password });
    cookies().set("session", session, { httpOnly: true });
    return { status: "success" };
};

export const logout = async () => {
    cookies().delete("session");
    return { message: "success" };
};

export const verifyCookie = async (): Promise<boolean> => {
    const admin = cookies().get("session");
    if (admin === undefined) return false;
    const value: JWTPayload = await decrypt(admin.value);
    return value.password === password_x;
};

export const encrypt = async (payload: { login: string; password: string }) => {
    return await new SignJWT(payload).setProtectedHeader({ alg: "HS256" }).setIssuedAt().sign(key);
};

export const decrypt = async (arg: string) => {
    try {
        const { payload } = await jwtVerify(arg, key, { algorithms: ["HS256"] });
        return payload;
    } catch (e) {
        return { password: null, login: null };
    }
};
