import { useEffect, useState } from "react";
import Book from "./Book";
import { bookService } from "../../services/bookService";
import { useSearchParams } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useSearchParams({ page: "1" });
  const [prevNext, setPrevNext] = useState({ prev: null, next: null });

  useEffect(() => {
    bookService.getAll(query.get("page")).then(({ data }) => {
      setBooks(data.data);
      setPrevNext({ prev: data.links.prev, next: data.links.next });
    });
  }, [query.get("page")]);

  const handlePrev = () => {
    setQuery((prev) => {
      prev.set("page", `${+prev.get("page") - 1}`);
      return prev;
    });
  };

  const handleNext = () => {
    setQuery((prev) => {
      prev.set("page", `${+prev.get("page") + 1}`);
      return prev;
    });
  };

  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      <button disabled={!prevNext.prev} onClick={handlePrev}>
        Prev
      </button>
      <button disabled={!prevNext.next} onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Books;
