const NewPhrase = (props) => {

    const saveNewPhrase = (ev) => {
        props.saveNewPhrase(ev.target.value);
      }
      
      const saveNewTitle = (ev) => {
        props.saveNewTitle(ev.target.value);
      }

    return (<>
    <form className="formName">
    <label htmlFor='labelName' className="labelName">
      Title:
      <input type="text" 
             name="name"
             id='text'
             className="inputName"
             value={props.newTitle}
             onChange={saveNewTitle}/>
    </label>
    <label htmlFor='labelName' className="labelName">
      Phrase:
      <input type="text" 
             name="name"
             className="inputName"
             value={props.NewPhrase}
             onChange={saveNewPhrase}/>
    </label>
  </form>
  <button onClick={props.addNewPhraseAndTitle} className='addButton'>Add</button>
  </>)
}

export default NewPhrase;