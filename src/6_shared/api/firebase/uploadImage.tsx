import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { storage } from "../firebase";

export async function uploadImage(file: File, directory: string): Promise<string> {
  const uniqueName = `${uuidv4()}.jpg`;
  const fileRef = ref(storage, `${directory}/${uniqueName}`);

  await uploadBytes(fileRef, file);

  const downloadURL = await getDownloadURL(fileRef);

  return downloadURL;
}
