import GridLayout from "@/components/GridLayout";
import { getItems } from "../actions/items.action";
import Link from "next/link";
import { sendMail } from "../actions/email.action";
import ContactForm from "@/components/ContactForm";

export default async function Home() {
    const items = await getItems();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="max-w-7xl w-full mx-auto">
                <GridLayout items={items} />
            </div>

            <div className="hero bg-base-200 py-32 mt-20" id="about">
                <div className="hero-content">
                    <div className="max-w-md flex flex-col sm:flex-row gap-8 items-center">
                        <h1 className="text-5xl font-bold text-nowrap ">O nás</h1>
                        <div className="py-6 [&>p]:text-nowrap text-xl">
                            <p>Navrhujeme tvary domácích spotřebičů.</p>
                            <p>We design the shapes of appliances.</p>
                            <p>Some other text about the company.</p>
                            <p>And some other text about the company.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero py-32" id="contact">
                <div className="hero-content gap-8 flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-nowrap">Napište nám</h1>
                        <p className="py-6">Pošlete nám zprávu.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl">
                        <ContactForm />
                    </div>
                </div>
            </div>

            <footer className="footer bg-base-200 text-center py-14 w-full px-12">
                <div className="w-full mx-auto max-w-7xl flex justify-between">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-5">
                        <Link href="/#about" className="link">
                            O nás
                        </Link>
                        <Link href="/#contact" className="link">
                            Kontakt
                        </Link>
                        <Link href="/gdpr" className="link">
                            Zásady ochrany osobních údajů
                        </Link>
                    </div>
                    <p>© 2012 - {new Date().getFullYear()} productdesign.cz</p>
                </div>
            </footer>
        </main>
    );
}
