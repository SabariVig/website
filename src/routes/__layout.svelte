<script>
  import Nav from '../Components/Nav.svelte'
</script>

<Nav />
<slot />

<style global>
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('/fonts/Inter-Light.woff2?v=3.19') format('woff2'),
      url('fonts/Inter-Light.woff?v=3.19') format('woff');
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/Inter-Regular.woff2?v=3.19') format('woff2'),
      url('/fonts/Inter-Regular.woff?v=3.19') format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url('/fonts/Inter-Medium.woff2?v=3.19') format('woff2'),
      url('/fonts/Inter-Medium.woff?v=3.19') format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('/fonts/Inter-SemiBold.woff2?v=3.19') format('woff2'),
      url('/fonts/Inter-SemiBold.woff?v=3.19') format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('/fonts/Inter-Bold.woff2?v=3.19') format('woff2'),
      url('/fonts/Inter-Bold.woff?v=3.19') format('woff');
  }
  :root {
    --primary: #8e20ec;
    --secondary: #14ebd3;
    --background: #050505;
    --background-2: #1b1c1d;
    --foreground: #ffffff;
    --selection: #35353580;
    --font-sans: inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, Georgia, Serif;
    --underline: #fefefe4e;
  }

  @media (prefers-color-scheme: light) {
    :root {
      --foreground: #050505;
      --background: #e5e5e5;
      --secondary: #8e20ec;
      --primary: #14ebd3;
      --underline: #37352f29;
    }
  }

  ::-moz-selection {
    background-color: var(--selection);
  }

  ::selection {
    background-color: var(--selection);
  }

  * {
    box-sizing: inherit;
    border: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    box-sizing: box-border;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;

    font-family: var(--font-sans);

    background: var(--background);
    color: var(--foreground);
    max-width: 100vw;
    overflow-x: hidden;

    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
</style>
