import React, { useState } from "react";
import Header from "./components/header";
import Banner from "./components/baner";
import List from "./components/list";
import { anime } from "./data";
import "./App.css";
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel=
"stylesheet" />
const App = () => {
  const [selected, setSelected] = useState(anime.banner);

  return (
    <div className="app">
      <Header />
      <main className="main">
        <Banner anime={selected} />
        <List
          data={anime.data}
          onSelect={setSelected}
          selectedId={selected.id}
        />
      </main>
    </div>
  );
};

export default App;