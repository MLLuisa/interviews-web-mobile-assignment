import '../styles/App.scss';
import api from '../services/api';
import Filters from './Filters';
import { useState, useEffect } from 'react';
import Posts from './Posts';
import NewPhrase from './NewPhrase';

function App() {

const [dataApi, setDataApi] = useState([]);
const [filterByTitle, setFilterByTitle] = useState("");
const [newPhrase, setNewPhrase] = useState("");
const [newTitle, setNewTitle] = useState("");

useEffect(() => {
  api().then((dataFromApi) => {
    setDataApi(dataFromApi);
  });
}, []);

const handleFilterByTitle = (value) => {
  setFilterByTitle(value)
}

const saveNewPhrase = (value) => {
  setNewPhrase(value);
}

const saveNewTitle = (value) => {
  setNewTitle(value);
}

const addNewPhraseandTitle = (ev) => {
  ev.preventDefault();
  if(newPhrase === "" || newTitle === "") {
    alert('You have to fill all the inputs');
    return false
  } else {
    const newList = {body: newPhrase, title: newTitle};
  setDataApi([...dataApi, newList])
  setNewPhrase("");
  setNewTitle("");
  }
}


  return (
    <div className="App">
      <h1 className='header-title'>Post</h1>
      <Filters
      handleFilterByTitle={handleFilterByTitle}
      filterByTitle={filterByTitle}/>
      <div className='wrapper-newPhrase'>
      <NewPhrase
      saveNewTitle={saveNewTitle}
      newTitle={newTitle}
      newPhrase={newPhrase}
      saveNewPhrase={saveNewPhrase}
      addNewPhraseandTitle={addNewPhraseandTitle}/>
      </div>
      <ul className='wrapper-list'>
        <Posts
        dataApi={dataApi}
        filterByTitle={filterByTitle}/>
      </ul>
    </div>
  );
}

export default App;
