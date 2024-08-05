import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
    // Retrieve the cookies
    const cookieStore = cookies();
    const userLocale = cookieStore.get("user-locale")?.value;

    // Provide a static locale or use the one from the cookies
    const locale = userLocale || "en";

    return {
        locale,
        messages: (await import(`/messages/${locale}.json`)).default,
    };
});
