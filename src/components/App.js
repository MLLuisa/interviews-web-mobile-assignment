import '../styles/App.scss';
import api from '../services/api';
import Filters from './Filters';
import { useState, useEffect } from 'react';
import Posts from './Posts';

function App() {

const [dataApi, setDataApi] = useState([]);
const [filterByTitle, setFilterByTitle] = useState("");

useEffect(() => {
  api().then((dataFromApi) => {
    setDataApi(dataFromApi);
    console.log(dataFromApi);
  });
}, []);

const handleFilterByTitle = (value) => {
  setFilterByTitle(value)
}

  return (
    <div className="App">
      <h1>Post</h1>
      <Filters
      handleFilterByTitle={handleFilterByTitle}
      filterByTitle={filterByTitle}/>
      <ul className='wrapper-list'>
        <Posts
        dataApi={dataApi}/>
      </ul>
    </div>
  );
}

export default App;
