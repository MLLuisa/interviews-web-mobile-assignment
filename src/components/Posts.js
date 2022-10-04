import '../styles/layout/posts.scss';

const Posts = (props) => {
        const titleFiltered = props.dataApi
        .filter((element) => {
            return element.title.toLowerCase().includes(props.filterByTitle.toLowerCase());
        })

        if(titleFiltered.length === 0) {
            return <p>Phrase not found.</p>
        } else {
            return props.dataApi.map((element, index) => {
            return (<>
            <li key={index} className='post-list'>
                <h4>{element.title}</h4>
                <p>{element.body}</p>
            </li>
                </>)
        })
        }
        
    }

export default Posts;