<svelte:head>
	<title>Sabari Vignesh</title>
</svelte:head>

<div class="container">
  <div class="ham" />
  <div class="content">
    <div class="header">
      <h1>
        An Engineering designer passionate about <br />
        building <span> Platforms </span>
        that scale
      </h1>
    </div>
    <div class="circle green" />
    <div class="circle purple" />
    <a sveltekit:prefetch href="/about">
      <button>About Me -></button>
    </a>
  </div>
</div>

<style>
  .content {
    position: relative;
    max-height: 100vh;
    margin: auto;
    height: calc(90vh - 70px - 1rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 0 1rem;
  }

  .header {
    max-width: 900px;
    margin: 1rem 0;
  }

  h1 {
    font-weight: 400;
    font-size: 4rem;
  }

  h1 span {
    color: var(--secondary);
  }

  button {
    padding: 1rem 2.5rem;
    margin: 1.5rem 0;
    font-size: 1rem;
    font-family: inherit;
    font-weight: 500;
    background-color: var(--foreground);
    color: var(--background);
    border-radius: 5px;
    align-self: flex-start;
  }

  button:hover {
    opacity: 0.8;
  }

  .circle {
    position: absolute;
    z-index: -1;
    height: 400px;
    width: 400px;
    border-radius: 50%;
    opacity: 0.5;
    animation: glow 10s ease infinite;
    filter: blur(60px);
    overflow: hidden;
  }
  .green {
    background-color: var(--secondary);
    top: 15%;
    right: -10%;
  }
  .purple {
    background-color: var(--primary);
    top: 30%;
    right: 0;
  }

  @keyframes glow {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.55;
    }
    100% {
      transform: scale(1);
      opacity: 0.5;
    }
  }

  @media all and (max-width: 820px) {
    br {
      display: none;
    }
  }

  @media all and (max-width: 700px) {
    h1 {
      font-size: 3rem;
    }
    .circle {
      height: 300px;
      width: 300px;
    }
  }

  @media all and (max-width: 500px) {
    h1 {
      font-size: 2.5rem;
    }
    .circle {
      height: 250px;
      width: 250px;
    }
  }

  @media all and (max-width: 400px) {
    h1 {
      font-size: 2rem;
    }

    .circle {
      height: 200px;
      width: 200px;
    }
    button {
      padding: 0.8rem 2rem;
      font-size: 0.8rem;
    }
  }

  @media all and (max-height: 450px) {
    h1 {
      font-size: 1.5rem;
    }
  }
</style>
