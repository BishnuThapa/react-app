import { useState } from "react";
function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //   items = [];
  //   if (items.length === 0) return <p>No Items Found.</p>;
  // map function is used to converting each item to an different type

  //  event handler
  //   const handleClick = (event: MouseEvent) => console.log(event);
  // hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    //   Fragments for component can return multiple lines <> </>
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No Items Found</p> : null} */}
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {/*  to return data dynamically write inside {} */}
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
