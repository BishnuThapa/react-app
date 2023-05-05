function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //   items = [];
  //   if (items.length === 0) return <p>No Items Found.</p>;
  // map function is used to converting each item to an different type
  return (
    //   Fragments for component can return multiple lines <> </>
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No Items Found</p> : null} */}
      {items.length === 0 && <p>No Items Found</p>}
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
