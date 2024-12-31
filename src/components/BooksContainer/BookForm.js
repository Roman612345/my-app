import { useForm } from "react-hook-form";
import { bookService } from "../../services/bookService";

const BookForm = ({ setTrigger }) => {
  const { reset, handleSubmit, register } = useForm();
  const submitBook = async (book) => {
    await bookService.create(book);
    setTrigger((prevState) => !prevState);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitBook)}>
      <input type="text" placeholder={"title"} {...register("title")} />
      <input type="text" placeholder={"author"} {...register("author")} />
      <input type="text" placeholder={"year"} {...register("year")} />
      <button>Submit Book</button>
    </form>
  );
};

export default BookForm;
