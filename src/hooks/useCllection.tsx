import React, { useEffect, useState } from "react";
import { db } from "../firebase";

import {
  collection,
  DocumentData,
  onSnapshot,
  Query,
  query,
} from "firebase/firestore";

interface Channals {
  id: string;
  channel: DocumentData;
}

export const useCllection = (data: string) => {
  const [documents, setDocuments] = useState<Channals[]>([]);

  const collectionRef: Query<DocumentData> = query(collection(db, data));

  useEffect(() => {
    onSnapshot(collectionRef, (querySnapshot) => {
      const channelsResults: Channals[] = [];
      querySnapshot.docs.forEach((doc) => {
        console.log(doc.id, doc.data());

        channelsResults.push({
          id: doc.id,
          channel: doc.data(),
        });
      });
      setDocuments(channelsResults);
    });
  }, []);

  return { documents };
};
