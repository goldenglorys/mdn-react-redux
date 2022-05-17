import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const options = [
  {
    label: "The Color Cyan",
    value: "cyan",
  },
  {
    label: "The Color Lemon",
    value: "lemon",
  },
  {
    label: "The Color Navy Blue",
    value: "navy-blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      {/* <Accordion items={items}/> */}
      {/* <Search/> */}
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
    </div>
  );
};

export default App;
