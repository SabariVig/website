export function getPosts(type = "blog") {
  const posts = Object.entries(import.meta.globEager(`/posts/blog/*.md`)).map(([path, post]) => ({
    path,
    metadata: post.metadata,
    component: post.default
  }))
  console.log("lib.getpost", posts)
  return posts
}

export default getPosts
