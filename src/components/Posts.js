import '../styles/layout/posts.scss';

const Posts = (props) => {
        return props.dataApi.map((element, index) => {
            return (<>
            <li key={index} className='post-list'>
                <h4>{element.title}</h4>
                <p>{element.body}</p>
            </li>
                </>)
        })
    }

export default Posts;