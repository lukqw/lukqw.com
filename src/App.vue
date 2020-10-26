<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app {
    @font-face {
      font-family: "Roboto Thin";
      src: local("Roboto"),
      url(./fonts/Roboto-Thin.ttf) format("truetype");
    }
    color: #ed8605;
    padding: 32px;
    height: 100%;
    background-color: #ffffff;
  }
  .t-href {
    color: #ed8605;
    :hover {
      color: #ed6a05;
    }
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  body {
    height: 100%;
  }

  html {
    height: 100%;
  }

</style>
