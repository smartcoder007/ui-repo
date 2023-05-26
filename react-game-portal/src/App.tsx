import ListGroup from "./components/ListGroup"

function App() {
  let cities = [
    "New York",
    "Sanfransisco",
    "New jerrsy",
    "Chicago",
    "Atlantis",
  ];
  const handleSelectItem= (item:String) => {console.log(item)}
  return <div><ListGroup cities={cities} heading="CityList" onSelectItem={handleSelectItem}/></div>;
}

export default App;
