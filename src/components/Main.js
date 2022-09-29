const Main = (props) => {
        return props.dataApi.map((element, index) => {
            return (<>
            <li key={index} className='post-list'>
                <h4>{element.title}</h4>
                <p>{element.body}</p>
            </li>
                </>)
        })
    }

export default Main;