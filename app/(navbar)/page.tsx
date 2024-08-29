import { getTranslations } from "next-intl/server";

import GridLayout from "@/components/GridLayout";
import { getItems } from "../actions/items.action";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { cookies } from "next/headers";

const Home = async () => {
    const items = await getItems();
    const locale = cookies().get("user-locale")?.value;
    const t = await getTranslations("homepage");

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="max-w-7xl w-full mx-auto">
                <GridLayout items={items} />
            </div>

            <div className="hero bg-[#96A7B1] text-white max-w-7xl mx-auto lg:h-[220px]" id="about">
                <div className="w-full">
                    <div className="w-full">
                        <div className="flex flex-col lg:flex-row gap-8 items-center flex-1">
                            <h1 className="flex flex-1 justify-center items-center text-6xl sm:text-[7rem] text-nowrap relative">
                                {t("aboutUs")}
                                <div className="absolute -bottom-12 right-5 text-2xl">
                                    <LocaleSwitcher initLocale={locale} />
                                </div>
                            </h1>
                            <div className="flex flex-col justify-center items-center py-6 flex-1">
                                <p className="text-justify lg:pr-8 text-xs xl:text-sm">{t("aboutUsText")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero bg-[#98A27F] text-white max-w-7xl mx-auto lg:h-[220px]" id="contact">
                <div className="flex flex-col w-full lg:flex-row gap-8 items-center">
                    <h1 className="flex flex-1 justify-center items-center text-6xl sm:text-[7rem] text-nowrap lg:pt-0">{t("contact")}</h1>
                    <div className="flex flex-col items-start [&>p]:text-nowrap sm:text-xl flex-1">
                        <ContactForm />
                    </div>
                </div>
            </div>

            <footer className="footer bg-base-200 text-center py-14 w-full px-12 max-w-7xl mx-auto">
                <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-5">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-5">
                        <Link href="/#about" className="link text-nowrap capitalize">
                            {t("aboutUs").toLowerCase()}
                        </Link>
                        <Link href="/#contact" className="link text-nowrap capitalize">
                            {t("contact").toLowerCase()}
                        </Link>
                        <Link href="/gdpr" className="link text-nowrap">
                            {t("gdpr")}
                        </Link>
                    </div>
                    <p>© {new Date().getFullYear()} productdesign.cz</p>
                </div>
            </footer>
        </main>
    );
};

export default Home;
