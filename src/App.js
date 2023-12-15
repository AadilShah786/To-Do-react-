import React, {useState,useCallback} from 'react';
import './App.css';
import Left from './components/left';
import Centre from './components/centre';
import Right from './components/right';

function App() {

  const [reRender, setReRender] = useState(false);

  const triggerReRender = useCallback(() => {
    setReRender(prevState => !prevState); // Toggle state
  }, []);

  return (
    <div className="App">
      <Left  onClick={triggerReRender}/>
      <Centre reRender={reRender}/>
      <Right/>
    </div>
  );
}

export default App;
