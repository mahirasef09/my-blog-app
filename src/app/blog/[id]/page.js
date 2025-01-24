import getPost from "../../../../lib/getPost";

export default async function Post({ params }) {
    const { id } = params;
    const post = await getPost(id);
    return (
        <div className="flex justify-center my-5">
            <div>
                <h2 className="font-bold text-center my-5">Blog Details</h2>
                <div className="card card-compact bg-gray-100 w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Title: {post.title}</h2>
                        <p><span className="font-bold">Description:</span> {post.body}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}