<template>
  <div id="root">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
/* 滚动条样式 */
::-webkit-scrollbar {
  width: 5px;
  height: 1px;
  background-color: #666;
}
::-webkit-scrollbar-thumb {
  width: 10px;
  height: 5%;
  background-color: #2d3436;
}
/* PC端 */
@media screen and (min-width: 820px) {
  #root {
    flex-direction: column;
    width: 100%;
  }
}

/* 移动端 */
@media screen and (max-width: 820px) {
  /*  主容器 */
  #root {
    position: relative;
    flex-direction: column;
    width: 100%;
  }
}
</style>
