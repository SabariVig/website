<div class="container">
  <div class="blog">
    <slot />
  </div>
</div>


<style>
  @import '../Components/Blog.css';

  .container {
    max-width: 750px;
    margin: 7rem auto;
  }

  .blog {
    margin: initial;
    padding: initial;
  }

  :global(.blog h1) {
    font-size: 2.5rem;
    font-weight: 700;
  }

  :global(.blog img) {
    width: 100%;
    border-radius: 4px;
  }

  :global(.blog p) {
    padding: 0.3em 0;
    line-height: 1.9;
  }

  :global(.blog li) {
    margin: 0.7rem 0;
  }

  :global(.blog h1) {
    margin: 0.7rem -0.4rem;
  }

  :global(.blog a) {
    border-bottom: 1px solid var(--underline);
  }

  :global(.blog a:hover) {
    color: var(--secondary);
    border-bottom: 1px solid var(--secondary);
  }
</style>
