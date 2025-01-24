import Link from "next/link";
import getAllPosts from "../../lib/getAllPosts";



export default async function Home() {
  const posts = await getAllPosts();
  return (
    <div>
          <h1 className="text-center font-bold text-xl my-5">All Blogs</h1>
          <ul className="ml-5">
            {
              posts.map((post, index) => <li key={post.id}>
                <Link href={`/blog/${post.id}`}>
                  {index+1}. {post.title}
                </Link>
              </li>)
            }
          </ul>
        </div>
  );
}
