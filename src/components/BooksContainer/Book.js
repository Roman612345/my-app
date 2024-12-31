const Book = ({ book }) => {
  const { id, title, author, year, description } = book;
  return (
    <div>
      <p>id: {id}</p>
      <p>title: {title}</p>
      <p>author: {author}</p>
      <p>year: {year}</p>
      <p>{description}</p>
    </div>
  );
};

export default Book;
