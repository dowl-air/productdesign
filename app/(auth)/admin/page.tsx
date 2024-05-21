import { ImagesChanger } from "@/components/ImagesChanger";
import LogoutButton from "@/components/LogoutButton";
import { LayoutImage } from "@/types/LayoutImage";

const AdminPage = () => {
    const images: LayoutImage[] = [
        { id: "1", x: 0, y: 0, w: 1, h: 1, url: "https://via.placeholder.com/300", description: "Image 1" },
        { id: "2", x: 1, y: 0, w: 1, h: 1, url: "https://via.placeholder.com/300", description: "Image 2" },
        { id: "3", x: 2, y: 0, w: 1, h: 1, url: "https://via.placeholder.com/300", description: "Image 3" },
        { id: "4", x: 3, y: 0, w: 1, h: 1, url: "https://via.placeholder.com/300", description: "Image 4" },
        { id: "5", x: 0, y: 1, w: 2, h: 2, url: "https://via.placeholder.com/600", description: "Image 5" },
    ];

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

            <ImagesChanger loadedImages={images} />
        </main>
    );
};

export default AdminPage;
