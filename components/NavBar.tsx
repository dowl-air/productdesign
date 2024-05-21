import Link from "next/link";

const NavBar = () => {
    return (
        <div className="fixed w-full mt-3 z-10">
            <div className="max-w-7xl mx-auto flex flex-col items-end">
                <nav className="w-[50%] text-xl">
                    <ul className="flex justify-center gap-24">
                        <li>
                            <Link href="/#about">O NÁS</Link>
                        </li>
                        <li>
                            <Link href="/#contact">KONTAKT</Link>
                        </li>
                    </ul>
                </nav>
                <hr className="w-[50%] h-0.5 bg-white" />
            </div>
        </div>
    );
};

export default NavBar;
