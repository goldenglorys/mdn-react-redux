import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Traanslate";
import Header from "./components/Header";
import Route from "./components/Route";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascrJSipt library",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
];

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
      <Header/>
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
