function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // map function is used to converting each item to an different type
  return (
    //   Fragments for component can return multiple lines <> </>
    <>
      <h1>List</h1>
      <ul className="list-group">
        {/*  to return data dynamically write inside {} */}
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
