import Link from "next/link";

const PostsPage = async () => {
  const res = await fetch("http://localhost:5001/posts", {
    // server side rendering....= eta sudhu server er jinish gulo sudumatro user req onujayei instant poriborton hoye jabe
    cache: "no-store",

    // { static side rendering....= eta use korle nirdhisto time por data update hobe }
    // next: {
    //   revalidate: 5,
    // },
  });
  const posts = await res.json();
  console.log(posts);
  return (
    <div className="w-full">
      <h1 className="text-3xl">Total Posts: {posts.length}</h1>
      {posts.map((post) => (
        <div
          key={post.id}
          className="card  bg-gray-200 shadow-xl w-[70%] my-5 mx-auto"
        >
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p>{post.description}</p>
            <p>Likes : {post.likesCount}</p>
          </div>
          <div className="card-actions justify-center my-2">
            <Link href={`/posts/${post.id}`}>
              <button className="btn  btn-active btn-warning">See More</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
