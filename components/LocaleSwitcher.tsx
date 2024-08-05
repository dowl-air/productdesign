"use client";

const LocaleSwitcher = ({ initLocale }: { initLocale: string | undefined }) => {
    const setLocale = () => {
        if (initLocale === "cs") {
            document.cookie = "user-locale=en; path=/";
        } else {
            document.cookie = "user-locale=cs; path=/";
        }
        window.location.reload();
    };
    return (
        <div>
            <button className="text-white" onClick={setLocale}>
                {initLocale === "cs" ? "EN" : "CS"}
            </button>
        </div>
    );
};

export default LocaleSwitcher;
