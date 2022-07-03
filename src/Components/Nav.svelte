<script>
  import { navigating } from '$app/stores'
  let navOpened = false
  $: if ($navigating) navOpened = false
</script>

<nav class="container">
  <div class="content">
    <a sveltekit:prefetch href="/">
      <div class="flex">
        <div class="colorhue" />
        <h5>Sabari Vignesh</h5>
      </div>
    </a>

    <ul class:navActivated={navOpened}>
      <li><a sveltekit:prefetch href="/">Home</a></li>
      <li><a sveltekit:prefetch href="/about">About</a></li>
      <!-- <li><a sveltekit:prefetch href="/blog">Blog</a></li> -->
    </ul>

    <button on:click|preventDefault={() => (navOpened = !navOpened)} class="ham">
      <div>
        <div class="line" />
        <div class="line" />
        <div class="line" />
      </div>
    </button>
  </div>
</nav>

<style>
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
    height: 50px;
  }

  h5 {
    margin: 0 0.7rem;
  }

  .colorhue {
    height: 13px;
    width: 15px;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    --hue: 90deg, hsla(276, 91%, 79%, 1) 0%, hsla(256, 83%, 72%, 1) 100%;
    background: hsla(276, 91%, 79%, 1);
    background: linear-gradient(var(--hue));
    background: -moz-linear-gradient(var(--hue));
    background: -webkit-linear-gradient(var(--hue));
  }

  ul {
    display: flex;
    list-style-type: none;
    transition: transform 0.4s ease-out;
  }

  li {
    font-weight: 400;
    font-size: 0.9rem;
    margin: 0 1rem;
  }

  .line {
    height: 2px;
    width: 16px;
    border-radius: 5px;

    background-color: var(--foreground);
    margin: 3px 0;
  }

  li:hover {
    color: var(--secondary);
  }

  .ham {
    z-index: 2;
    width: 50px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
  }

  @media all and (min-width: 600px) {
    .ham {
      display: none;
    }
  }

  @media all and (max-width: 600px) {
    ul {
      position: absolute;
      top: 60px;
      left: 0px;
      right: 0px;
      width: 100%;
      margin: auto;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: var(--background);
      z-index: 1;
      transform: translateY(-150%);
    }
    .navActivated {
      transform: translateY(0%);
    }
    li {
      margin: 1rem 0;
    }
  }
</style>
