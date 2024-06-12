import GridLayout from "@/components/GridLayout";
import { getItems } from "../actions/items.action";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default async function Home() {
    const items = await getItems();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="max-w-7xl w-full mx-auto">
                <GridLayout items={items} />
            </div>

            <div className="hero bg-[#96A7B1] text-white max-w-7xl mx-auto" id="about">
                <div
                    className="w-full py-32"
                    style={{ backgroundImage: "url('./logo.svg')", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
                >
                    <div className="w-full ">
                        <div className="flex flex-col lg:flex-row gap-8 items-center flex-1">
                            <h1 className="flex flex-1 justify-center items-center text-6xl sm:text-7xl lg:text-8xl text-nowrap ">ABOUT US</h1>
                            <div className="flex flex-col justify-center items-center py-6 [&>p]:text-nowrap sm:text-xl flex-1">
                                <p>Navrhujeme tvary domácích spotřebičů.</p>
                                <p>We design the shapes of appliances.</p>
                                <p>Some other text about the company.</p>
                                <p>And some other text about the company.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero bg-[#98A27F] text-white max-w-7xl mx-auto" id="contact">
                <div className="flex flex-col w-full lg:flex-row gap-8 items-center">
                    <h1 className="flex flex-1 justify-center items-center text-6xl sm:text-7xl lg:text-8xl text-nowrap pt-32 lg:pt-0">CONTACT</h1>
                    <div className="flex flex-col items-start py-6 [&>p]:text-nowrap sm:text-xl flex-1">
                        <ContactForm />
                    </div>
                </div>
            </div>

            <footer className="footer bg-base-200 text-center py-14 w-full px-12 max-w-7xl mx-auto">
                <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-5">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-5">
                        <Link href="/#about" className="link text-nowrap">
                            About us
                        </Link>
                        <Link href="/#contact" className="link text-nowrap">
                            Contact
                        </Link>
                        <Link href="/gdpr" className="link text-nowrap">
                            Zásady ochrany osobních údajů
                        </Link>
                    </div>
                    <p>© 2012 - {new Date().getFullYear()} productdesign.cz</p>
                </div>
            </footer>
        </main>
    );
}
