import { collection, onSnapshot, where, query } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "../firebase/config";

export const useColection = (collectionName, _query) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  // set up query
  const q = useRef(_query).current;

  useEffect(() => {
    let ref = collection(db, collectionName);

    if (q) {
      ref = query(ref, where(...q));
    }

    const unsubscribe = onSnapshot(
      ref,
      snapshot => {
        let snaps = [];
        snapshot.forEach(snap => {
          snaps.push({ id: snap.id, ...snap.data() });
        });
        setDocuments(snaps);
        setError(null);
      },
      err => {
        console.log(err);
        setError("Could not fetch the data!");
      }
    );
    return () => unsubscribe();
  }, [collectionName, _query]);

  return { documents, error };
};
