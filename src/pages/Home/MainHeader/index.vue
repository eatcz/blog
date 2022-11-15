<template>
  <!-- 主体头部 -->
  <header class="cover">
    <!-- 头部背景 -->
    <div class="cover-bg flex">
      <h3>橙子de博客</h3>
      <p>为自己的目标勇敢前进的模样.</p>
      <img src="~@/assets/images/t01d98f8b7d040b9f1d.jpg" alt />
    </div>
  </header>
</template>

<script>
export default {
  name: "MainHeader"
};
</script>

<style scoped lang='less'>
// 主体头部
// PC端
@media screen and (min-width: 820px) {
  .cover {
    width: 100%;
    height: 20rem;
    --tw-bg-opacity: 1;
    background-color: rgba(17, 24, 39, var(--tw-bg-opacity));
    // 头部背景
    .cover-bg {
      position: relative;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow: hidden;
      h3 {
        z-index: 1;
        font-size: 1.8rem;
        margin: 0.5rem 0;
      }
      p {
        z-index: 1;
        font-size: 1.2rem;
      }
      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
      }
    }
  }
}

// 移动端
@media screen and (max-width: 820px) {
  .cover {
    width: 100%;
    height: 18rem;
    --tw-bg-opacity: 1;
    // background-color: rgba(17,24,39,var(--tw-bg-opacity));
    //         // 头部背景
    .cover-bg {
      position: relative;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow: hidden;
      h3 {
        z-index: 1;
        font-size: 1.8rem;
        margin: 0.5rem 0;
      }
      p {
        z-index: 1;
        font-size: 1.2rem;
      }
      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 100%;
        max-height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>