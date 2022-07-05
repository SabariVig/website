<script context="module">
  import getposts from '$lib/getpost'
  const posts = getposts('blog')

  export async function load({ params }) {
    const { slug } = params
    const post = posts.find((post) => slug === post.metadata.slug || slug === post.metadata.title)
    if (!post) {
      return {
        status: 404,
        error: 'Post not found'
      }
    }
    return {
      props: {
        ...post.metadata,
        component: post.component
      }
    }
  }
</script>

<script>
  export let component
</script>

<svelte:component this={component} />
