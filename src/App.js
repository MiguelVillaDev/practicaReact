import logo from './logo.svg';
import './App.css';
import { NewUserForm } from './components/NewUserForm'
import { useState } from 'react';
import {DisplayInfoUser} from './components/DisplayInfoUser'


function App() {

  const [user, setUser] = useState([])


  
  return (
    <div className="App">

      <h1>Hola</h1>
      <NewUserForm passData={setUser}/>
      <DisplayInfoUser user={user}/>
     
    </div>
  );
}

export default App;
