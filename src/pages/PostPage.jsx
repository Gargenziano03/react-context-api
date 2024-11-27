import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
export default function PostPage() {

    const [post, setPost] = useState(null)
    const { id } = useParams();
    const url = `http://127.0.0.1:3000/posts/${id}`
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
                        <img src={`http://127.0.0.1:3000/${post.image}`} alt="post" />
                    </div>
                ) : (
                    <div>loading...</div>
                )
            }
        </>
    )
}