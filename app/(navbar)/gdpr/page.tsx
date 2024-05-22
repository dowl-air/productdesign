import Link from "next/link";

const GDPRPage = () => {
    return (
        <main className="mx-auto bg-base-300 min-h-screen py-24">
            <div className="max-w-5xl w-full mx-auto mb-5 flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" strokeWidth={2} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M9 14 4 9l5-5" />
                    <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11" />
                </svg>
                <Link href="/" className="link">
                    Zpět na domovskou obrazovku
                </Link>
            </div>
            <div className="max-w-5xl mx-auto w-full card bg-base-100 shadow-xl p-10 flex flex-col gap-3 [&>h2]:text-2xl">
                <h1 className="text-3xl mb-5">Zásady ochrany osobních údajů</h1>

                <p>
                    Vaše soukromí je pro nás důležité. Tato stránka vám poskytuje informace o tom, jaké osobní údaje shromažďujeme, jak je
                    zpracováváme a jak chráníme vaše práva.
                </p>

                <h2>Jaké údaje shromažďujeme?</h2>
                <ul>
                    <li>
                        <strong>Kontaktní informace:</strong> Vaše jméno, e-mailová adresa a další informace, které nám poskytujete prostřednictvím
                        našeho kontaktního formuláře.
                    </li>
                    <li>
                        <strong>Technické údaje:</strong> IP adresa, typ prohlížeče, čas přístupu a další technické údaje automaticky zaznamenané při
                        návštěvě našeho webu.
                    </li>
                </ul>

                <h2>Jak využíváme vaše údaje?</h2>
                <ul>
                    <li>
                        <strong>Odpověď na vaše dotazy:</strong> Používáme vaše kontaktní údaje k odpovědi na vaše dotazy a poskytování informací,
                        které si vyžádáte.
                    </li>
                    <li>
                        <strong>Zlepšování našich služeb:</strong> Technické údaje nám pomáhají analyzovat, jak návštěvníci používají náš web, a
                        zlepšovat jeho funkčnost.
                    </li>
                </ul>

                <h2>Jak chráníme vaše údaje?</h2>
                <p>
                    Využíváme různé technické a organizační opatření k ochraně vašich osobních údajů před neoprávněným přístupem, ztrátou nebo
                    zneužitím. Vaše údaje jsou uchovávány bezpečně a přístup k nim mají pouze oprávněné osoby.
                </p>

                <h2>Vaše práva</h2>
                <p>Podle GDPR máte následující práva:</p>
                <ul>
                    <li>Právo na přístup k vašim osobním údajům</li>
                    <li>Právo na opravu nepřesných údajů</li>
                    <li>Právo na odstranění osobních údajů (právo být zapomenut)</li>
                    <li>Právo na omezení zpracování</li>
                    <li>Právo na přenositelnost údajů</li>
                    <li>Právo vznést námitku proti zpracování</li>
                </ul>

                <h2>Kontakt</h2>
                <p>Máte-li jakékoli dotazy týkající se ochrany osobních údajů nebo chcete-li uplatnit svá práva, kontaktujte nás na:</p>
                <p>Email: privacy@yourdomain.cz</p>
                <p>Adresa: Vaše společnost, Ulice, Město, PSČ</p>

                <p>Datum účinnosti: 1. května 2024</p>
            </div>
        </main>
    );
};

export default GDPRPage;
