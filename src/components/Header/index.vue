<template>
  <!-- 头部 -->
  <header class="nav-head flex" id="haeder" ref="header">
    <!-- 头部导航栏 -->
    <nav class="flex">
      <!-- 头部左导航栏 -->
      <ul class="lf-navlist flex">
        <li class="items">
          <a href="/index.html">首页</a>
        </li>
        <li class="items">
          <a href="/archives.html">文章</a>
        </li>
        <li class="items">
          <a href="javascript:;">图库</a>
        </li>
        <li class="items">
          <a href="javascript:;">日志</a>
        </li>
        <li class="items">
          <a href="javascript:;">关于</a>
        </li>
      </ul>
      <!-- 头部右搜索框 -->
      <!-- <div class="search">
        <a href="javascript:;" class="iconfont" style="font-size: 20px;">&#xe8d6;</a>
      </div>-->
      <div class="search">
        <div ref="search" class="search_container flex">
          <div @click="showSearch" class="search_icon flex">
            <i class="iconfont">&#xe8d6;</i>
          </div>
          <!-- <a href="javascript:;" class="iconfont">&#xe8d6;</a> -->
          <div class="search_input">
            <input type="text" class="search" />
          </div>
        </div>
      </div>
    </nav>
    <div class="side-menu-container flex" ref="nav" @touchmove.prevent>
      <ul class="menu-lists flex">
        <li class="items">
          <a href="javascript:;">首页</a>
        </li>
        <li class="items">
          <a href="javascript:;">文章</a>
        </li>
        <li class="items">
          <a href="javascript:;">日志</a>
        </li>
        <li class="items">
          <a href="javascript:;">图库</a>
        </li>
        <li class="items">
          <a href="javascript:;">关于</a>
        </li>
        <li class="items">
          <a href="javascript:;" class="iconfont" style="font-size: 20px;">&#xe8d6;</a>
        </li>
      </ul>
    </div>

    <!-- 移动端导航 -->
    <svg
      class="swap-off fill-current nav-line"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 512 512"
      @click="navshow"
      v-show="show"
    >
      <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
    </svg>
    <svg
      class="swap-on fill-current nav-line"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 512 512"
      @click="navhide"
      v-show="!show"
    >
      <polygon
        points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
      />
    </svg>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      show: true
    };
  },
  methods: {
    // 移动端下导航栏显示
    navshow() {
      this.$refs.nav.classList.add("trans");
      this.show = false;
    },
    // 隐藏
    navhide() {
      this.$refs.nav.classList.remove("trans");
      this.show = true;
    },
    // 显示搜索框
    showSearch() {
      this.$refs.search.classList.toggle("active");
    }
  },
  mounted() {
    // 滚动条滚动时header添加背景变色
    window.addEventListener("scroll", () => {
      // 添加类名
      this.$refs.header.classList.toggle("stiky", window.pageYOffset > 0);
    });
  }
};
</script>

<style scoped lang='less'>
// 头部

// PC端
@media screen and (min-width: 820px) {
  .nav-head {
    position: fixed;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 4rem;
    z-index: 1;
    transition-duration: 0.3s;
    .swap-off,
    .swap-on {
      display: none;
    }
    // 头部导航栏
    nav {
      justify-content: space-around;
      align-items: center;
      width: 100%;
      background-color: transparent;
      // 头部左导航栏
      .lf-navlist {
        justify-content: center;
        align-items: center;
        .items {
          margin-right: 1.5rem;
        }
      }
      // 头部右搜索框
      .search {
        // width: 50px;
        width: 200px;
        // width: 6rem;
        height: 100%;
        // padding: 0 2%;
        // margin-left: 2rem;
        // background-color: #a25554;
      }
      .search_container {
        position: relative;
        justify-content: center;
        width: 40px;
        height: 40px;
        background-color: #fff;
        border-radius: 60px;
        transition: 0.5s linear;
        overflow: hidden;
        & .search_icon {
          position: absolute;
          top: 0;
          left: 0;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          cursor: pointer;
          color: #287dfc;
          border-radius: 50%;
          z-index: 100;
          background-color: #fff;
          & i {
            font-size: 20px;
          }
        }
        & .search_input {
          position: relative;
          width: 200px;
          min-height: 100%;
          & input {
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            text-indent: 3rem;
            color: #666;
          }
        }
      }
      .active {
        width: 200px;
      }
    }
    // 移动端导航
    & .side-menu-container {
      display: none;
    }

    .swap-off,
    .swap-on {
      display: none;
    }
  }
  // 导航栏渐变
  .stiky {
    background-color: #000;
    a {
      color: #fff;
    }
  }
}

// 移动端
@media screen and (max-width: 820px) {
  .nav-head {
    position: fixed;
    align-items: center;
    width: 100%;
    min-height: 4rem;
    padding-left: 1rem;
    background-color: #fff;
    z-index: 2;
    // 头部导航栏
    nav {
      display: none;
      flex-direction: column;
      position: absolute;
      left: 0;
      top: 4rem;
      z-index: 2;
      width: 60%;
      min-height: 100vh;
      background-color: #fff;
      border-top: 1px solid #eee;
      // 头部左导航栏
      .lf-navlist {
        flex-direction: column;
        padding: 1rem;
        font-size: 1.2rem;
        .items {
          line-height: 2rem;
          margin-right: 1.5rem;
        }
      }
      // 头部右搜索框
      .search {
        height: 100%;
        margin-left: 1rem;
      }
    }
    // 移动端导航
    & .side-menu-container {
      flex-direction: column;
      position: absolute;
      // left: 0;
      top: 4rem;
      z-index: 2;
      width: 60%;
      min-height: 100vh;
      background-color: #fff;
      border-top: 1px solid #eee;
      padding: 2rem;
      transform: translateX(-80vw);
      left: -2vw;
      transition: 0.3s linear;
      & .menu-lists {
        flex-direction: column;
        justify-content: center;
        align-content: center;
        // background-color: #fba;
        .items {
          height: 60px;
          line-height: 60px;
          text-align: center;
          & a {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .swap-off:hover ~ .side-menu-container {
      transform: translateX(80vw);
    }
    .trans {
      transform: translateX(0);
    }
  }
}
</style>