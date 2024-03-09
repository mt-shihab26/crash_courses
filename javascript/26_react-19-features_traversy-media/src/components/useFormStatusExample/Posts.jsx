import { useState } from "react";
import { useFormStatus } from "react-dom";

const Submit = () => {
    const formStatus = useFormStatus();
    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={formStatus.pending}
            type="submit"
        >
            {formStatus.pending ? "Submitting ..." : "Submit"}
        </button>
    );
};

const PostForm = ({ addPost }) => {
    return (
        <form
            action={async formData => {
                const newPost = {
                    title: formData.get("title"),
                    body: formData.get("body"),
                };
                await new Promise(resolve => setTimeout(resolve, 1000));
                addPost(newPost);
            }}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                    Title
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title"
                    type="text"
                    placeholder="Enter title"
                    name="title"
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">
                    Body
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="body"
                    rows="5"
                    placeholder="Enter body"
                    name="body"
                ></textarea>
            </div>
            <div className="flex items-center justify-between">
                <Submit />
            </div>
        </form>
    );
};

const PostItem = ({ post }) => {
    return (
        <div className="bg-blue-50 shadow-md p-4 my-6 rounded-lg">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

const Posts = () => {
    const [posts, setPosts] = useState([]);

    return (
        <>
            <PostForm addPost={newPost => setPosts(posts => [...posts, newPost])} />
            {posts.map((post, index) => (
                <PostItem key={index} post={post} />
            ))}
        </>
    );
};

export { Posts as UseFormStatusExample };
