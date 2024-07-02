import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const topInstructors = [{
  avatar: '../../../6_shared/ui/images/Mentor.png',
  author: 'Ronald Richards',
  profession: 'UI/UX Designer',
  rating: 4.9,
  studentsCount: 2400,
},
{
  avatar: '../../../6_shared/ui/images/Mentor.png',
  author: 'Ronald Richards',
  profession: 'UI/UX Designer',
  rating: 4.9,
  studentsCount: 2400,
},
{
  avatar: '../../../6_shared/ui/images/Mentor.png',
  author: 'Ronald Richards',
  profession: 'UI/UX Designer',
  rating: 4.9,
  studentsCount: 2400,
},
{
  avatar: '../../../6_shared/ui/images/Mentor.png',
  author: 'Ronald Richards',
  profession: 'UI/UX Designer',
  rating: 4.9,
  studentsCount: 2400,
},
{
  avatar: '../../../6_shared/ui/images/Mentor.png',
  author: 'Ronald Richards',
  profession: 'UI/UX Designer',
  rating: 4.9,
  studentsCount: 2400,
}];

// Функция для записи курсов в коллекцию 'courses'
const addCourses = async () => {
  try {
    const collectionRef = collection(db, "topInstructors");

    for (const topInstructor of topInstructors) {
      // Используем addDoc для автоматического создания ID документа
      await addDoc(collectionRef, topInstructor);
      
      // Либо используем setDoc с определенным ID (например, name в качестве ID)
      // await setDoc(doc(db, "courses", course.name), course);
    }
    
    console.log("Top Instructors successfully added!");
  } catch (error) {
    console.error("Error adding top Instructors: ", error);
  }
};

// Вызов функции для записи курсов
// addCourses();

const getCourses = async () => {
  try {
    const collectionRef = collection(db, "topInstructors");
    const querySnapshot = await getDocs(collectionRef);

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      // console.log(doc.id, 'это автор', doc.data().list.author )
    });
  } catch (error) {
    console.error("Error getting documents: ", error);
  }
};

// getCourses();

// const auth = aut
