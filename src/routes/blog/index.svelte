<script context="module">
  import getposts from '$lib/getpost'
  const posts = getposts('blog').map((post) => post.metadata)
  export const load = async () => {
    return {
      props: {
        posts
      }
    }
  }
</script>

<div class="container">
  <h1>All Posts</h1>
  <ul>
    {#each posts as post}
      <li>
        <a sveltekit:prefetch href={`/blog/${post.slug}`}>
          <p>
            {post.title}
          </p>
          <span>
            {post.datePublished}
          </span>
        </a>
      </li>
    {/each}
  </ul>
</div>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  .container {
    margin: 4rem auto;
    padding: 0 1rem;
  }

  ul {
    list-style-type: none;
    padding: 0 1rem;
    margin: 3rem 0;
  }

  li {
    margin: 0.8rem 0;
  }

  span {
    color: grey;
  }

  p {
    margin: 0.6rem 0;
  }

  a:hover {
    text-decoration: underline;
  }

  @media all and (min-width: 600px) {
    a {
      display: flex;
      justify-content: space-between;
    }
    p {
      margin: 0.3rem 0;
    }

    ul {
      padding: 0 3rem;
    }
  }
</style>
