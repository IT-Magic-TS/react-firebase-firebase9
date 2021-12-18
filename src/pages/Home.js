import BookList from "../components/BookList";
import BookForm from "../components/BookForm";
import { useColection } from "../hooks/useCollection";
import { useAuthContext } from "../hooks/useAuthContext";

// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebase/config";

export default function Home() {
  // const [books, setBooks] = useState(null);
  const { user } = useAuthContext();

  const { documents: books } = useColection("books", ["id", "==", user.id]);

  // useEffect(() => {
  //   const ref = collection(db, "books");
  //   getDocs(ref).then(snapshot => {
  //     let results = [];
  //     snapshot.docs.forEach(snap => {
  //       results.push({ id: snap.id, ...snap.data() });
  //     });
  //     setBooks(results);
  //   });
  // }, []);

  return (
    <div className="App" style={{ marginLeft: "20px" }}>
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}
