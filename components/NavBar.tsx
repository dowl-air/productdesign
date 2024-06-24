import Link from "next/link";

const NavBar = () => {
    return (
        <div className="fixed w-full mt-3 z-10">
            <div className="max-w-7xl mx-auto flex flex-col items-end relative">
                <div className="absolute left-0 sm:left-auto min-w-[calc((1280px/2)+1.29rem)] max-w-[calc((1280px/2)+1.29rem)] bg-red-500">
                    <div className="relative bg-blue-500">
                        <img src="/LOGO-33.png" alt="logo" className="absolute" />
                        <Link href="/" className="absolute left-0 bg-transparent w-32 md:w-44 h-11 cursor-pointer z-50"></Link>
                    </div>
                </div>
                <nav className="w-full sm:w-[50%] text-nowrap sm:text-lg md:text-xl z-10">
                    <ul className="flex justify-end sm:justify-center gap-3 sm:gap-24 ml-10 -mt-1">
                        <li>
                            <Link href="/#about" className="text-white">
                                ABOUT US
                            </Link>
                        </li>
                        <li>
                            <Link href="/#contact" className="text-white">
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
