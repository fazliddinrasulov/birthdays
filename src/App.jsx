import { useState } from "react";
import { data } from "./data";
import List from "./List";
import { nanoid } from "nanoid";

function App() {
  const [info, setInfo] = useState(data);
  console.log(data);
  return (
    <main>
      <article className="container">
        <h3 className="title">{info.length} Birthdays Today</h3>
        {info.map((item) => {
          return <List key={nanoid()} item={item} />;
        })}
        <button onClick={() => setInfo([])} className="btn btn-block">
          Clear All
        </button>
      </article>
    </main>
  );
}

export default App;
