import { PostItem } from "./PostItem";

/**
 * List of posts.
 */
export const PostList = ({ posts }) => {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <PostItem post={post} />
        </li>
      ))}
    </ul>
  );
};
