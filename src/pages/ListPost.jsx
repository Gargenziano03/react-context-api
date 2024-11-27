import { useState, useEffect, useContext } from 'react'
import GlobalContexts from '../contexts/GlobalContexts';
export default function ListPost() {


    const [postsData, setPostsData] = useState({})
    const { apiUrl } = useContext(GlobalContexts)



    function fetchData(url = `${apiUrl}/posts`) {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                setPostsData(data)

            })
    }

    useEffect(fetchData, [])
    return (
        <>
            <section className='posts'>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-">
                        {postsData.data ? postsData.data.map(post => (
                            <div className="col" key={post.id}>
                                <div className="card">
                                    <h3>{post.title}</h3>
                                    <img width="200px" height="150px" src={`${apiUrl}/${post.image}`} alt="" />
                                    <p>{post.content}</p>
                                </div>
                            </div>
                        )) :
                            <p>no results yet</p>}
                    </div>
                </div>
            </section>
        </>
    )
}