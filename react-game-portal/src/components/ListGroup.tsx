import { Fragment, useState } from "react";
import { MouseEvent } from "react";

interface Props {
  cities: String[];
  heading: String;
  onSelectItem: (item: String) => void;
}

function ListGroup({ cities, heading, onSelectItem }: Props) {
  //cities = [];

  //Event Handling
  const handleClick = (event: MouseEvent) => console.log(event);

  // use state Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Fragment>
      <h1>{heading}</h1>
      {cities.length == 0 && <p>No items founds</p>}
      <ul className="list-group">
        {cities.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
