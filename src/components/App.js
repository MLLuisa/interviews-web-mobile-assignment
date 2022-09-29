import '../styles/App.scss';
import api from '../services/api';
import Main from './Main';
import { useState, useEffect } from 'react';

function App() {

const [dataApi, setDataApi] = useState([]);

useEffect(() => {
  api().then((dataFromApi) => {
    setDataApi(dataFromApi);
    console.log(dataFromApi);
  });
}, []);

  return (
    <div className="App">
      <h1>Post</h1>
      <ul className='wrapper-list'>
        <Main 
        dataApi={dataApi}/>
      </ul>
     
    </div>
  );
}

export default App;
