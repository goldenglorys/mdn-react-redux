import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascrJSipt library'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    }
];

const App = () => {
  return (
    <div>
      {/* <Accordion items={items}/> */}
      <Search/>
    </div>
  );
};

export default App;
