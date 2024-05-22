import GridLayout from "@/components/GridLayout";
import { getItems } from "../actions/items.action";

export default async function Home() {
    const items = await getItems();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-white">
            <div className="max-w-7xl w-full mx-auto">
                <GridLayout items={items} />
            </div>
        </main>
    );
}
