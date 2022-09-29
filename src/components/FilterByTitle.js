const FilterByTitle = (props) => {
    const handleFilterByTitle = (ev) => {
        props.handleFilterByTitle(ev.target.value.toLowerCase());
    }
    return (<>
        <form className="formName">
        <label className="labelName">Search by title: </label>
        <input type='text'
        className="inputName"
        placeholder="Ex. qui est esse" 
        onChange={handleFilterByTitle}
        value={props.filterByTitle}
        />
      </form>
    </>)
}

export default FilterByTitle;