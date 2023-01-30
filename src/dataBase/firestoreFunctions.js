import db from "./dbConfig";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  setDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

export const saveDocByCollection = async (document, collectionName, id) => {
  if (!id) {
    try {
      await addDoc(collection(db, collectionName), document);
      alert("salvo com sucesso!");
    } catch (e) {
      alert("ocorreu um erro ao salvar " + e.message);
    }
  } else {
    try {
      await setDoc(doc(db, collectionName, id), document);
      alert("editado com sucesso");
    } catch (e) {
      alert("ocorreu um erro ao editar " + e.message);
    }
  }
};

export const getAllDocumentsByCollection = async (collectionName) => {
  try {
    const messagesArray = [];
    const collectionRef = collection(db, collectionName);
    const messages = await getDocs(collectionRef);
    messages.forEach((message) => {
      messagesArray.push({
        ...message.data(),
        id: message.id,
      });
    });
    return messagesArray;
  } catch (err) {
    throw err.message;
  }
};

export const deleteDocByColletion = async (docRef, collectionName) => {
  try {
    await deleteDoc(doc(db, collectionName, docRef));
    alert("documento excluido!");
  } catch (e) {
    console.log("erro ao deletar documento " + e.message);
  }
};

export const getDocByCollection = async (id, collectionName) => {
  try {
    const docRef = doc(db, collectionName, id);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) return { ...docSnap.data(), messageId: doc.id };
  } catch (e) {
    console.log("erro ao buscar documento " + e.message);
  }
};