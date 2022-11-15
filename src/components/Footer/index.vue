<template>
  <footer class="flex">
    <div class="foot-link flex">
      <!-- <i class="iconfont">&#xe66c;</i> -->
      <!-- <div class=""> -->
      <ul class="offsite-links flex">
        <li>
          <a href="javascript:;" class="iconfont item">&#xe66c;</a>
        </li>
        <li>
          <a href="javascript:;" class="iconfont item">&#xe65a;</a>
        </li>
        <li>
          <a href="javascript:;" class="iconfont item">&#xe887;</a>
        </li>
        <li>
          <a href="javascript:;" class="iconfont item">&#xe918;</a>
        </li>
      </ul>
      <!-- </div> -->
      <div class="github-badge flex">
        <a href="javascript:;">
          <img
            src="https://img.shields.io/badge/hello-%E6%A9%99%E5%AD%90de%E5%8D%9A%E5%AE%A2-blue"
            alt
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped lang='less'>
// 底部

// PC端
@media screen and (min-width: 820px) {
  footer {
    justify-content: center;
    width: 100%;
    height: 6rem;
    background-color: #fff;
    margin-top: 2rem;
    opacity: 0.5;
    .foot-link {
      min-width: 50%;
      justify-content: space-between;
      .offsite-links {
        max-height: 2rem;
        justify-content: center;
        align-items: center;
        .item {
          padding: 0.3rem;
        }
      }
    }
  }
}

// 移动端
@media screen and (max-width: 820px) {
  // 底部
  footer {
    justify-content: center;
    width: 100%;
    height: 6rem;
    background-color: #fff;
    margin-top: 2rem;
    opacity: 0.5;
    .foot-link {
      min-width: 80%;
      justify-content: center;
      flex-direction: column;
      .offsite-links {
        max-height: 2rem;
        justify-content: center;
        align-items: center;
        .item {
          padding: 0.1rem;
        }
      }
      .github-badge {
        justify-content: center;
        margin-top: 0.8rem;
      }
    }
  }
}
</style>