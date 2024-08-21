import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export async function saveImageRef(
  collectionName: string,
  docId: string,
  imageUrl: string
): Promise<void> {
  try {
    const docRef = doc(db, collectionName, docId);
    await setDoc(docRef, { cover: imageUrl }, { merge: true });
    console.log(`Image URL successfully saved in Firestore for ${collectionName}/${docId}.`);
  } catch (error) {
    console.error("Error saving image URL in Firestore:", error);
    throw error;
  }
}
 