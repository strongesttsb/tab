import { useState } from "react";

function App() {
  const [text, setText] = useState(""); 
  const [selectedTab, setSelectedTab] = useState(""); 
  const [lists, setLists] = useState({
    football: [],
    basketball: [],
    voleyball: []
  });


  const addNote = () => {
    if (!text) {
      alert("Error");
      return;
    }
    if (!selectedTab) {
      alert("Error");
      return;
    }

    setLists((prevLists) => ({
      ...prevLists,
      [selectedTab]: [...prevLists[selectedTab], { id: Math.random(), name: text }]
    }));
    setText("");
    setSelectedTab(""); 
  };

  return (
    <div className="container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Введите текст..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <select value={selectedTab} onChange={(e) => setSelectedTab(e.target.value)}>
          <option value="">Выберите вкладку</option>
          <option value="football">Football</option>
          <option value="basketball">Basketball</option>
          <option value="voleyball">Voleyball</option>
        </select>
        <button onClick={addNote}>Add</button>
      </div>

      <div className="tabs">
        <div className="tab">
          <h2>Football</h2>
          <ul className="vertical-list">
            {lists.football.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
        <div className="tab">
          <h2>Basketball</h2>
          <ul className="vertical-list">
            {lists.basketball.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
        <div className="tab">
          <h2>Voleyball</h2>
          <ul className="vertical-list">
            {lists.voleyball.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
