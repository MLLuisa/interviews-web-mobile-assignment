import FilterByTitle from "./FilterByTitle";

const Filters = (props) => {
    return (<>
    <FilterByTitle
    filterByTitle={props.filterByTitle}
    handleFilterByTitle={props.handleFilterByTitle} />
    </>)
}

export default Filters;