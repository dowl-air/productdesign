"use server";

import { revalidatePath } from "next/cache";

const revalidateItems = async (): Promise<void> => {
    revalidatePath("/");
};

export default revalidateItems;
