import { useState } from 'react';
import './App.css';
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { ShowTask } from './components/ShowTask';

function App() {
  const [tasklist, setTasklist] = useState([]);
  
  const [currenttask, setCurrenttask] = useState({});

  return (
    <div className="App">
      <Header/>
      <AddTask 
        tasklist={tasklist}
        setTasklist={setTasklist}
        currenttask={currenttask}
        setCurrenttask={setCurrenttask}
      />
      <ShowTask 
        tasklist={tasklist} 
        setTasklist={setTasklist}
        currenttask={currenttask}
        setCurrenttask={setCurrenttask}
      />
    </div>
  );
}

export default App;
