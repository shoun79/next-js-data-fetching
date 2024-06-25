import Link from "next/link";

export async function generateStaticParams() {
    const res = await fetch('http://localhost:5000/posts');
    const posts = await res.json();
    const ids = posts.map(post => {
        return {
            id: post.id + ''
        }

    });

    return ids;
}

const DetailPage = async ({ params }) => {
    const { id } = params;
    const res = await fetch(`http://localhost:5000/posts/${id}`);
    const post = await res.json();

    return (
        <div>
            <div className="card bg-gray-100 my-8 shadow-xl w-[70%] mx-auto">
                <div className="card-body">
                    <h2 className="card-title">{post?.title}</h2>
                    <p>{post?.description}</p>
                    <p>Likes: {post?.likes_count}</p>
                    <div className="card-actions justify-end">
                        <Link href={`/posts`}>
                            <button className="btn btn-primary">Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;