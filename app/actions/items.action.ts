import { LayoutImage } from "@/types/LayoutImage";
import { db } from "@/utils/firebase";
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { uploadImageToFirestore } from "./storage.action";

export const getItems = async (): Promise<LayoutImage[]> => {
    const snap = await getDocs(collection(db, "items"));
    const items = snap.docs.map((doc) => ({ ...doc.data(), id: doc.id } as LayoutImage));
    return items;
};

export const addItem = async (item: Omit<LayoutImage, "url">, file: File): Promise<void> => {
    const docRef = await addDoc(collection(db, "items"), item);
    const url = await uploadImageToFirestore(file, docRef.id);
    await updateDoc(docRef, { url });
};

export const updateItem = async (item: LayoutImage): Promise<void> => {
    await updateDoc(doc(db, "items", item.id), item);
};

export const deleteItem = async (id: string): Promise<void> => {
    await deleteDoc(doc(db, "items", id));
};
