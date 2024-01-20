import Link from "next/link";

const DetailPage = async ({ params }) => {
  console.log(params.id);
  const res = await fetch(`http://localhost:5001/posts/${params.id}`);
  const post = await res.json();
  return (
    <div>
      <h1 className="text-3xl text-center">Post Detail Page</h1>
      <div
        key={post.id}
        className="card  bg-gray-200 shadow-xl w-[70%] my-5 mx-auto"
      >
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p>{post.description}</p>
          <p>Likes : {post.likesCount}</p>
        </div>
        <div className="card-actions justify-end m-6">
          <Link href="/posts">
            <button className="btn btn-accent">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
