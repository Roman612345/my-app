import { useEffect, useState } from "react";

import { bookService } from "../../services/bookService";
import Books from "./Books";
import BookForm from "./BookForm";

const BooksContainer = () => {
  // const [books, setBooks] = useState([]);
  // const [trigger, setTrigger] = useState(null);

  // useEffect(() => {
  //   bookService.getAll().then(({ data }) => setBooks(data.data));
  // }, [trigger]);
  return (
    <div>
      {/* <BookForm setTrigger={setTrigger} />
      <hr />
      <Books books={books} /> */}
    </div>
  );
};

export default BooksContainer;
