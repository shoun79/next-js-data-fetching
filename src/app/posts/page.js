import Link from "next/link";
import styles from './Posts.module.css'


const PostsPage = async () => {
    const res = await fetch('http://localhost:5000/posts', {
        cache: 'no-store'
        // next: {
        //     revalidate: 5
        // }
    });
    const posts = await res.json();

    return (
        <div>
            <h2 className={`${styles.header_text}`}>Total Posts:{posts.length}</h2>
            <div >
                {
                    posts.map(post =>
                        <div key={post?.id} className="card bg-gray-100 my-8 shadow-xl w-[70%] mx-auto">
                            <div className="card-body">
                                <h2 className="card-title">{post?.title}</h2>
                                <p>{post?.description}</p>
                                <p>Likes: {post?.likes_count}</p>
                                <div className="card-actions justify-end">
                                    <Link href={`/posts/${post?.id}`}>
                                        <button className="btn btn-primary">See More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div >
    );
};

export default PostsPage;