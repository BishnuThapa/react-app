import Button from "./components/Button";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    // <div>
    //   {/* <ListGroup
    //     items={items}
    //     heading="Cities"
    //     onSelectItem={handleSelectItem}
    //   /> */}
    //   <Button onClick={() => console.log("clicked")}>My Button</Button>
    // </div>
    <>
      <Form />
    </>
  );
}

export default App;

//  props are the input passed to a component, similar to function args, immutable

//  state: internal data managed by a component that can change overtime,similar to local variable, mutable
