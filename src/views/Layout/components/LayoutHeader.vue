<script setup>
// 定义滚动到指定元素的函数
const scrollToElement = (elementId) => {
  const targetElement = document.querySelector(`#${elementId}`);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <header class="app-header">
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/">SoftRobot</RouterLink>
      </h1>
      <ul class="app-header-nav">
        <li class="home">
          <a href="#" @click.prevent="scrollToElement('introduction')">项目介绍</a>
        </li>
        <li class="home">
          <a href="#" @click.prevent="scrollToElement('function')">功能介绍</a>
        </li>
        <li class="home">
          <a href="#" @click.prevent="scrollToElement('model')">3D模型</a>
        </li>
        <li class="home">
          <a href="#" @click.prevent="scrollToElement('cooperate')">合作伙伴</a>
        </li>
        <li class="home">
          <router-link to="/flixed/map" >在线地图</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>


<style scoped lang='scss'>
.app-header {
  background: #fff;
  width: 100%;
  height: 100px;
  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 100px;

    a {
      display: block;
      height: 100px;
      width: 100%;
      text-indent: -9999px;
      background: url("@/assets/images/logo.png") no-repeat center 18px /
        contain;
    }
  }

  .app-header-nav {
    width: 820px;
    display: flex;
    padding-left: 40px;
    position: relative;
    z-index: 998;

    li {
      margin-right: 40px;
      width: 76px;
      text-align: center;

      a {
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        display: inline-block;

        &:hover {
          color: #5e5e5e;
          border-bottom: 1px solid #5e5e5e;
        }
      }

      .active {
        color: #5e5e5e;
        border-bottom: 1px solid #5e5e5e;
      }
    }
  }

  .search {
    width: 170px;
    height: 32px;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;

    .icon-search {
      font-size: 18px;
      margin-left: 5px;
    }

    input {
      width: 140px;
      padding-left: 5px;
      color: #666;
    }
  }

  .cart {
    width: 50px;

    .curr {
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;
      display: block;

      .icon-cart {
        font-size: 22px;
      }

      em {
        font-style: normal;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 6px;
        line-height: 1;
        background: #e26237;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial;
      }
    }
  }
}
</style>