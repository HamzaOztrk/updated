

import './App.css';
import Main from './Main';
import Card from './Card';
import { useState } from 'react';

function App() {

  const [show,SetShow] = useState(true)
  const [mail,setMail] = useState("ash@loremcompany.com")

  return (
  <div>
     {show ? <Main setShow={SetShow} setMail={setMail} mail={mail}/> : <Card setShow={SetShow} setMail={setMail} mail={mail}/>}
  </div>
   
    
  );
}

export default App;
