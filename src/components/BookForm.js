import { useState } from "react";

// firebase imports
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { useAuthContext } from "../hooks/useAuthContext";

// const ref = collection(db, 'books')

export default function BookForm() {
  const [newBook, setNewBook] = useState("");

  const { user } = useAuthContext();

  console.log(user.uid);

  const handleSubmit = async e => {
    e.preventDefault();

    await addDoc(collection(db, "books"), { title: newBook, id: user.uid });

    setNewBook("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add a new book title:</span>
        <input
          required
          type="text"
          onChange={e => setNewBook(e.target.value)}
          value={newBook}
        />
      </label>
      <button>Add</button>
    </form>
  );
}
