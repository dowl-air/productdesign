import GridLayout from "@/components/GridLayout";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-gray-400">
            <div className="max-w-7xl w-full mx-auto">
                <GridLayout />
            </div>
        </main>
    );
}
