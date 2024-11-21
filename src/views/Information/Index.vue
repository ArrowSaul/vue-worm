<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import * as echarts from "echarts";

const myChart = ref(null);

onMounted(() => {
  myChart.value = echarts.init(document.getElementById("echart3"), "dark");
  const option = {
    xAxis: {
      type: "category",
      data: ["2012", "2020", "2025", "2032", "2040"],
      name: "时间",
    },
    yAxis: {
      type: "value",
      name: "破损程度（%）",
    },
    series: [
      {
        data: [30, 40, 50, 60, 90],
        type: "line",
      },
    ],
  };
  myChart.value.setOption(option);
});

onBeforeUnmount(() => {
  if (myChart.value !== null) {
    myChart.value.dispose();
  }
});
</script>

<template>
  <!-- 导航栏 -->
  <nav class="navbar">
    <div class="navlogo">
      <a href="" title="RuChong" class="navbar-Logo"></a>
      <h1>SOFT ROBOT</h1>
    </div>
    <div class="navmid">
      <ul>
        <li class="navmid-no">
          <router-link to="/map">巡检概览</router-link>
        </li>
        <li class="navmid-no">
          <router-link to="/underground">地下环境</router-link>
        </li>
        <li class="navmid-no">
          <router-link to="/information">历史信息</router-link>
        </li>
        <li class="navmid-no">
          <router-link to="/">返回首页</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <div class="contain clearfix" style="color: aliceblue">
    <div class="contain-sousuo clearfix">
      <div class="sousuo">
        <input type="text" class="input" placeholder="     请选择计划" />
        <input type="button" value="搜索" class="button-sousuo" />
      </div>
      <!-- <div class="daochu"></div> -->
      <div class="neirong-box clearfix">
        <div class="neirong-table">
          <div class="table-nav">
            <ul>
              <li class="neirong-no">执行结果</li>
              <li class="neirong-no">计划名称</li>
              <li class="neirong-no">任务编号</li>
              <li class="neirong-no">开始时间</li>
              <li class="neirong-no">应开始时间</li>
              <li class="neirong-no">班组名称</li>
              <li class="neirong-no">完成时间</li>
            </ul>
            <ul>
              <li class="neirong-no"><div class="xunjian">巡检中</div></li>
              <li class="neirong-no">金水</li>
              <li class="neirong-no">
                <div class="task-number">2024ASDGAD</div>
              </li>
              <li class="neirong-no">2024.05.06 15:00</li>
              <li class="neirong-no">2024.05.06</li>
              <li class="neirong-no">金水团队</li>
              <li class="neirong-no">2024.05.06 16:00</li>
            </ul>
            <ul>
              <li class="neirong-no"><div class="xunjian-ywc">已完成</div></li>
              <li class="neirong-no">金水</li>
              <li class="neirong-no">
                <div class="task-number">2024ASDGAD</div>
              </li>
              <li class="neirong-no">2024.05.06 15:00</li>
              <li class="neirong-no">2024.05.06</li>
              <li class="neirong-no">金水团队</li>
              <li class="neirong-no">2024.05.06 16:00</li>
            </ul>
            <ul>
              <li class="neirong-no"><div class="xunjian-wks">未开始</div></li>
              <li class="neirong-no">金水</li>
              <li class="neirong-no">
                <div class="task-number">2024ASDGAD</div>
              </li>
              <li class="neirong-no">2024.05.06 15:00</li>
              <li class="neirong-no">2024.05.06</li>
              <li class="neirong-no">金水团队</li>
              <li class="neirong-no">2024.05.06 16:00</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="page-normal">
        <span class="page-prev">&lt;</span>
        <!-- 数字1 代表当前页面-->
        <span class="page-current">1</span>
        <a href="#">2</a>
        .......
        <a href="#">3</a>
        <!-- <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">7</a>
                <a href="#">8</a>
                <a href="#">9</a>
                ……
                <a href="#">199</a>
                <a href="#">200</a> -->
        <a href="#">&gt;</a>
      </div>
    </div>
  </div>
</template>
<style scoped lang='scss'>
.navbar {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  height: 64px;
  width: 100%;
  border: 0px;
  padding: 0px;
  background-color: rgba(27, 23, 23, 0.5);
}
.navmid {
  color: aliceblue;
  margin-left: 140px;
}
.navlogo {
  display: flex;
}
.navbar-Logo {
  display: flex;
  float: left;
  background-image: url("../images/ruchong-logo透明背景.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 60px;
  height: 60px;
  margin-left: 60px;
}
.navlogo h1 {
  float: left;
  line-height: 64px;
}
.navright {
  display: flex;
  float: right;
  color: aliceblue;
  margin-left: 280px;
}
.navmid-no {
  /* display: flex; */
  /* align-self: center; */
  float: left;
  width: 80px;
  height: 64px;
  margin-left: 180px;
}
.navmid ul {
  /* justify-content: center; */
  align-self: center;
  height: 64px;
  margin: 0;
  padding: 0;
  /* line-height: 64px; */
}
.navmid-no a {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-decoration: none;
  color: aliceblue;
}
/* 导航栏结束 */
.contain {
  position: relative; /* 添加这行 */
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 93%;
  height: 800px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 2px #232222;
  margin: 30px auto;
  /* background-image: url("../images/暗色背景图2.jpg"); */
  background-color: #535252;
}
.sousuo {
  display: flex;
  width: 500px;
  height: 40px;
  border: 1px solid rgb(24, 91, 116);
  margin: 20px 0 0 30px;
  border-radius: 7px;
}
.sousuo .input {
  float: left;
  height: 38px;
  width: 419px;
  margin: 0px;
  border: none;
  outline: none;
  border-radius: 7px 0 0 7px;
}
.sousuo .button-sousuo {
  float: left;
  height: 40px;
  width: 81px;
  margin: 0px 0 0 0;
  border: none;
  outline: none;
  border-radius: 0 7px 7px 0;
  background-color: rgb(74, 165, 83);
}
.neirong-box {
  display: grid;
  /* grid-template-columns: repeat(7, 1fr); */
  width: 1480px;
  height: 690px;
  margin: 30px;
  border: 1px solid rgb(50, 43, 43);
}
.table-nav ul {
  height: 40px;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
.table-nav ul li {
  border: 1px solid #232222;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.table-nav ul li .xunjian {
  font-size: larger;
  height: 25px;
  width: 110px;
  color: chocolate;
  /* background-color: chocolate; */
  border-radius: 10px;
}
.table-nav ul li .xunjian-ywc {
  font-size: larger;
  height: 25px;
  width: 110px;
  color: rgb(210, 30, 183);
  /* background-color: rgb(210, 30, 183); */
  border-radius: 10px;
}
.table-nav ul li .xunjian-wks {
  font-size: larger;
  height: 25px;
  width: 110px;
  color: rgb(30, 102, 210);
  /* background-color: rgb(30, 102, 210); */
  border-radius: 10px;
}
.table-nav ul li .task-number {
  height: 25px;
  width: 110px;
  color: rgb(61, 215, 67);
  /* background-color: chocolate; */
  border-radius: 10px;
}
.neirong-no {
  text-align: center; /* 水平居中 */
  line-height: 2em; /* 垂直居中 */
  font-family: "楷体";
  font-size: 16px;
}

.table-nav ul li:nth-child(1) {
  grid-column: 1;
}

.table-nav ul li:nth-child(2) {
  grid-column: 2;
}

.table-nav ul li:nth-child(3) {
  grid-column: 3;
}

.table-nav ul li:nth-child(4) {
  grid-column: 4;
}

.table-nav ul li:nth-child(5) {
  grid-column: 5;
}

.table-nav ul li:nth-child(6) {
  grid-column: 6;
}

.table-nav ul li:nth-child(7) {
  grid-column: 7;
}
/* 页码开始 */
/*设置 a 标签的css样式*/
.page-normal a {
  border: 1px solid #fff;
  padding: 5px 7px;
  color: #fff;
  margin-left: 20px; /*设置标签 a 之间的间隔*/
  text-decoration: none; /*去除页码数字下面的下划线*/
}
/*设置鼠标经过时 a 标签的css样式*/
.page-normal a:hover {
  background-color: #ffbe94;
}

/*设置整个div的css样式,该样式主要用于设置网页内的省略号 …… 的样式，并且同时设置内容居中显示*/
.page-normal {
  color: #fff;
  text-align: center;
}

/*设置当前页面的css样式*/
.page-normal .page-current {
  color: #050505;
  background-color: #fff;
}

/*设置左单括号 < 的css样式*/
.page-normal .page-prev {
  color: #fff;
}

/*进行代码优化，将不同css样式中共有的属性放在一起，有助于提高运行效率*/
.page-normal a,
.page-normal a:hover,
.page-normal .page-prev,
.page-normal .page-current {
  border: 1px solid #fff;
  padding: 5px 7px;
}
/* 页码结束 */
/* html样式开始 */
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
html {
  --antd-wave-shadow-color: #1890ff;
}
html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  /* -ms-text-size-adjust: 100%; */
  /* -ms-overflow-style: scrollbar; */
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
/* html[Attributes Style] {
    -webkit-locale: "cn";
} */
html {
  display: block;
}
::selection {
  color: #fff;
  background: #1890ff;
}
/* html样式结束 */

/* body样式开始 */
body,
html {
  font-family: Open Sans, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue,
    Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun,
    sans-serif !important;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f3f4f6 !important;
}
a,
body,
div,
form,
h1,
h2,
h3,
h4,
h5,
h6,
head,
html,
input,
li,
ol,
p,
select,
span,
ul {
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC,
    Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  font-variant: tabular-nums;
  line-height: 1.5;
  background-color: #fff;
  /* background-image: url('../images/白色2.webp'); */
  background-repeat: no-repeat;
  background-size: cover;
  font-feature-settings: "tnum", "tnum";
}
body,
html {
  width: 100%;
  height: 100%;
}
*,
:after,
:before {
  box-sizing: border-box;
}
body {
  display: block;
  margin: 0px;
}
div {
  display: block;
}
li,
ol,
ul {
  list-style-type: none;
}
ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
/* body样式结束 */
</style>