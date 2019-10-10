import React, { useState } from 'react';
import ReactDOM from "react-dom";

import TeamForm from './component/TeamForm.js';
import Info from './component/Info.js';
import './App.css';

function App() {

  const [memberInfo, setMemberInfo] = useState([
      {
          id: '',
          name: '',
          email: '',
          role: ''
      }
  ]);

  const addInfo = info => {
      const newInfo = {
          id: Date.now(),
          name: info.name,
          email: info.email,
          role: info.role
      };

      setMemberInfo([...memberInfo, newInfo]);
  };

  return (
      <div className="App">
          <h1>Team Info</h1>
          <TeamForm addInfoFn={addInfo} />
          <Info infoList={memberInfo} />
      </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);

export default App;