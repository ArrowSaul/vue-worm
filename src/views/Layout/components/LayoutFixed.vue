<script setup>
import { RouterLink } from 'vue-router';
//vueuse
import { useScroll } from "@vueuse/core";
const { y } = useScroll(window);
// 定义滚动到指定元素的函数
const scrollToElement = (elementId) => {
  const targetElement = document.querySelector(`#${elementId}`);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <div class="app-header-sticky" :class="{ show: y > 78 }">
    <div class="container">
      <RouterLink class="logo" to="/" />
      <ul class="app-header-nav">
        <li class="home">
          <a href="#" @click.prevent="scrollToElement('introduction')">项目介绍</a>
        </li>
        <li class="home">
          <a href="#" @click.prevent="scrollToElement('point')">解决痛点</a>
        </li>
        <li class="home">
          <a href="#" @click.prevent="scrollToElement('function')">3D模型</a>
        </li>
        <li class="home">
          <a href="#" @click.prevent="scrollToElement('contact')">合作伙伴</a>
        </li>
      </ul>
    </div>
  </div>
</template>


<style scoped lang='scss'>
.app-header-sticky {
  width: 100%;
  height: 100px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  // 此处为关键样式!!!
  // 状态一：往上平移自身高度 + 完全透明
  transform: translateY(-100%);
  opacity: 0;

  // 状态二：移除平移 + 完全不透明
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 100px;
    height: 100px;
    background: url("@/assets/images/logo.png") no-repeat right 18px;
    background-size: 100px auto;
  }

  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid $xtxColor;

    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;

      &:hover {
        color: $xtxColor;
      }
    }
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
          color: #2db5eb;
          border-bottom: 1px solid #2db5eb;
      
        }
      }

      .active {
        color: #2db5eb;
        border-bottom: 1px solid #2db5eb;
      }
  }
}
</style>