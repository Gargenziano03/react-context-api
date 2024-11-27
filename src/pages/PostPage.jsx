import { useParams } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import GlobalContexts from "../contexts/GlobalContexts"

export default function PostPage() {
    const { apiUrl } = useContext()
    const [post, setPost] = useState(null)
    const { id } = useParams(GlobalContexts);
    const url = `${apiUrl}/posts/${id}`
    console.log(url);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPost(data)
            })
            .catch(err => {
                console.log(err);

            })
    },
        [])

    return (
        <>
            {
                post ? (
                    <div>
                        <img src={`${apiUrl}/${post.image}`} alt="post" />
                    </div>
                ) : (
                    <div>loading...</div>
                )
            }
        </>
    )
}