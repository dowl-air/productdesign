import { storage } from "@/utils/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadImageToFirestore = async (file: File, id: string): Promise<string> => {
    const storageRef = ref(storage, `images/${id}`);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
};
