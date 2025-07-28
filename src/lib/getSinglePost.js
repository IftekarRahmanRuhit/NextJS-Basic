
export const getSinglePost = async (post_id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }
  const data = await res.json();
  return data;
};