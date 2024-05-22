import { getItems } from "@/app/actions/items.action";
import { ImagesChanger } from "@/components/ImagesChanger";
import LogoutButton from "@/components/LogoutButton";

const AdminPage = async () => {
    const items = await getItems();

    return (
        <main className="flex min-h-screen flex-col bg-[#F3F5F6]">
            <div className="w-full flex justify-center bg-white fixed shadow-md px-5 z-10">
                <div className="flex max-w-7xl flex-1 justify-between items-center py-4">
                    <h1 className="text-3xl font-bold text-black">Admin Dashboard</h1>
                    <div className="flex gap-3">
                        <LogoutButton />
                    </div>
                </div>
            </div>

            <ImagesChanger loadedImages={items} />
        </main>
    );
};

export default AdminPage;
