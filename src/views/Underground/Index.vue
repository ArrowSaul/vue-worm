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
  <div class="mainbox">
    <ul class="clearfix nav1">
      <li style="width: 22%">
        <div class="box">
          <div class="tit">巡检情况记录</div>
          <div class="boxnav" style="height: 330px">
            <div class="yqlist">
              <ul class="clearfix">
                <li>
                  <div class="yq" id="yq">34</div>
                  <span>里程（m）</span>
                </li>
                <li>
                  <div class="yq">67</div>
                  <span>频率（次）</span>
                </li>
                <li>
                  <div class="yq">345</div>
                  <span>总里程</span>
                </li>
                <li>
                  <div class="yq">2.5</div>
                  <span>巡检总时间 (h)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="tit">本次巡检情况分析</div>
          <div class="boxnav">
            <div class="" style="height: 406px" id="echart2">
              <div class="s888">
                <div class="shijian clearfix">
                  <p style="float: left; color: aqua">巡检时间：</p>
                  <p style="float: right">2h38min</p>
                </div>
                <div class="shijian">
                  <p style="float: left; color: aqua">平均巡检速度：</p>
                  <p style="float: right">2m/s</p>
                </div>
                <div class="shijian">
                  <p style="float: left; color: aqua">已巡检距离：</p>
                  <p style="float: right">16m</p>
                </div>
                <div class="shijian">
                  <p style="float: left; color: aqua">破损数量：</p>
                  <p style="float: right">4</p>
                </div>
                <div class="shijian">
                  <p style="float: left; color: aqua">破损原因：</p>
                  <p style="float: right">温度过高</p>
                </div>
              </div>
              <div class="s999">
                <h3>情况分析:</h3>
                <p>
                  金水区文化路地下线缆发现绝缘破损，绝缘破损长度约0.2米，裸露的电线导致安全隐患。
                  绝缘破损程度较严重，可能导致电线短路，存在火灾风险。
                  绝缘破损可能导致电线短路，存在火灾风险，需要及时处理。
                  <br />
                  地下潮湿环境是导致线缆破损的主要原因。
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li style="width: 56%">
        <div class="box">
          <div class="boxnav mapc" style="height: 550px; position: relative">
            <div class="map" id="map" style="overflow: hidden">
              <img
                id="dynamic-image1"
                src="@/assets/images/00000008.jpg"
                alt=""
                style="width: 100%; height: 100%"
              />
            </div>
          </div>
        </div>
        <div class="box">
          <div class="tit">线缆破损趋势预测</div>
          <div
            class="boxnav clearfix"
            style="height: 250px"
            id="echart3"
            ref="myChart"
          ></div>
        </div>
      </li>
      <li style="width: 22%">
        <div class="box">
          <div class="tit">热力云图</div>
          <div
            class="boxnav"
            id="echart4"
            style="height: 200px; overflow: hidden"
          >
            <img
              src="@/assets/images/热力云图.gif"
              alt=""
              style="width: 100%; height: auto"
            />
          </div>
        </div>
        <div class="box">
          <div class="tit">电缆损坏情况</div>
          <div
            class="boxnav"
            style="height: 250px; overflow: hidden"
            id="echart5"
          >
            <img
              id="dynamic-image2"
              src="https://ruchong520.obs.cn-north-4.myhuaweicloud.com/test/photo/1.jpg"
              alt=""
              style="width: 100%; height: auto"
            />
          </div>
        </div>
        <div class="box">
          <div class="tit">温湿度传感器</div>
          <div class="boxnav" style="height: 250px" id="echart6">
            <div class="wendu">
              <p style="font-size: 20px">
                <img src="@/assets/images/温度.png" alt="" />温度
              </p>
              <p style="font-size: 40px; margin-top: 25px">21.5 °C</p>
            </div>
            <div class="shidu">
              <p style="font-size: 20px">
                <img src="@/assets/images/湿度.png" alt="" />湿度
              </p>
              <p style="font-size: 40px; margin-top: 25px">62%</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
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
  width: 100px;
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
/* CSS Document */
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

*,
body {
  padding: 0px;
  margin: 0px;
  font-family: "微软雅黑";
}

body {
  color: #fff;
  font-size: 16px;
  background: #43474b no-repeat;
  background-size: 100% 100%;
}

@font-face {
  font-family: electronicFont;
  src: url(../font/DS-DIGIT.TTF);
}

html,
body {
  min-height: 100%;
}

li {
  list-style-type: none;
}

// table {
// }

i {
  margin: 0px;
  padding: 0px;
  text-indent: 0px;
}

img {
  border: none;
  max-width: 100%;
}

a {
  text-decoration: none;
  color: #fff;
}

a.active,
a:focus {
  outline: none !important;
  text-decoration: none;
}

ol,
ul,
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
}

a:hover {
  color: #06c;
  text-decoration: none !important;
}

.clearfix:after,
.clearfix:before {
  display: table;
  content: " ";
}

.clearfix:after {
  clear: both;
}

.pulll_left {
  float: left;
}

.pulll_right {
  float: right;
}

i {
  font-style: normal;
}

.text-w {
  color: #ffe400;
}

.text-d {
  color: #ff6316;
}

.text-s {
  color: #14e144;
}

.text-b {
  color: #07e5ff;
}

.head {
  position: relative;
  height: 90px;
  margin: 0 15px;
  padding-right: 60px;
}

.head h1 {
  font-size: 30px;
  letter-spacing: -2px;
  text-align: center;
  line-height: 90px;
  padding-right: 55px;
  color: #daf9ff;
}

// .head .menu {
// }

.head .menu ul {
  font-size: 0;
}

.head .menu li {
  display: inline-block;
  position: relative;
  margin: 30px 15px;
}

.head .menu li a {
  display: block;
  font-size: 18px;
  color: #fff;
  line-height: 30px;
  padding: 0 10px;
}

.head .time {
  position: absolute;
  right: 0;
  line-height: 90px;
  top: 0;
}

.menu li:before,
.menu li:after {
  position: absolute;
  width: 10px;
  height: 5px;
  opacity: 0.4;
  content: "";
  border-top: 2px solid #02a6b5;
  top: -1px;
  border-radius: 2px;
}

.menu li:before,
.menu li a:before {
  border-left: 2px solid #02a6b5;
  left: -1px;
}

.menu li:after,
.menu li a:after {
  border-right: 2px solid #02a6b5;
  right: -1px;
}

.menu li a {
  position: relative;
}

.menu li a:before,
.menu li a:after {
  position: absolute;
  width: 10px;
  height: 5px;
  opacity: 0.4;
  content: "";
  border-bottom: 2px solid #02a6b5;
  bottom: -1px;
  border-radius: 2px;
}

.head .menu li a:hover {
  color: #f4e925;
}

.menu li a:hover:before,
.menu li a:hover:after,
.menu li:hover:before,
.menu li:hover:after {
  border-color: #f4e925;
  opacity: 1;
}

.mainbox {
  padding: 0px 10px;
  color: #fff;
  font-size: 16px;
  background: #43474b no-repeat;
  background-size: 100% 100%;
}

.nav1 {
  margin-left: -6px;
  margin-right: -6px;
}

.nav1 > li {
  padding: 0 6px;
  float: left;
}

.box {
  border: 1px solid rgba(7, 118, 181, 0.5);
  box-shadow: inset 0 0 10px rgba(7, 118, 181, 0.4);
  margin-bottom: 12px;
  position: relative;
}

.tit {
  padding: 10px 10px 10px 25px;
  border-bottom: 1px solid rgba(7, 118, 181, 0.7);
  font-size: 16px;
  font-weight: 500;
  position: relative;
}

.tit:before,
.tit01:before {
  position: absolute;
  content: "";
  width: 6px;
  height: 6px;
  background: rgba(22, 214, 255, 0.9);
  box-shadow: 0 0 5px rgba(22, 214, 255, 0.9);
  border-radius: 10px;
  left: 10px;
  top: 18px;
}

.tit:after,
.box:before {
  width: 100%;
  height: 1px;
  content: "";
  position: absolute;
  left: 0;
  bottom: -1px;
  background: linear-gradient(to right, #076ead, #4ba6e0, #076ead);
  box-shadow: 0 0 5px rgba(131, 189, 227, 1);
  opacity: 0.6;
}

.box:before {
  top: -1px;
}

.boxnav {
  display: flex;
  padding: 10px;
}

.tit01 {
  font-size: 16px;
  font-weight: 500;
  position: relative;
  padding-left: 15px;
}

.tit01:before {
  left: 3px;
  top: 8px;
}

.mapc {
  background: url(@/assets/images/bg3.png) no-repeat center center;
  background-size: 100% 100%;
}

.map {
  position: relative;
  height: 100%;
  width: 100%;
}

// .map img {
// }

.mapnav {
  position: absolute;
  z-index: 10;
}

.yqlist li {
  float: left;
  width: 50%;
  padding: 10px 0;
  text-align: center;
}

.yq {
  width: 100px;
  height: 100px;
  margin: 0 auto 5px auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-family: electronicFont;
  color: #fff32b;
}

.yqlist li span {
  opacity: 0.6;
  font-size: 14px;
}

.yq:before {
  position: absolute;
  width: 100%;
  height: 100%;
  content: "";
  background: url(@/assets/images/img1.png) center center;
  border-radius: 100px;
  background-size: 100% 100%;
  opacity: 0.3;
  left: 0;
  top: 0;
  animation: myfirst2 15s infinite linear;
}

.yq:after {
  position: absolute;
  width: 86%;
  background: url(@/assets/images/img2.png) center center;
  border-radius: 100px;
  background-size: 100% 100%;
  opacity: 0.3;
  height: 86%;
  content: "";
  left: 7%;
  top: 7%;
  animation: myfirst 15s infinite linear;
}

@keyframes myfirst {
  to {
    transform: rotate(-360deg);
  }
}

@keyframes myfirst2 {
  to {
    transform: rotate(360deg);
  }
}

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

#echart6 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 18px solid #cf3e3e;
  margin: 0;
  border: 0;
  /* border: 2px solid #f4e925; */
}

.wendu {
  /* float: left; */
  padding-top: 40px;
  flex: 1;
  border-bottom: 2px solid #fefefe;
  border-right: 2px solid #fefefe;
  width: 150px;
  height: 80%;
  text-align: center;
}

.wendu p img {
  vertical-align: middle;
  width: 25px;
  height: 25px;
}

.shidu {
  /* float: right; */
  padding-top: 40px;
  flex: 1;
  border-bottom: 2px solid #fefefe;
  width: 150px;
  height: 80%;
  text-align: center;
}

.shidu p img {
  vertical-align: middle;
  width: 25px;
  height: 25px;
}

/* echart2开始 */
#echart2 {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.s888 {
  display: flex;
  flex-direction: column;
  flex: 1;
  font-size: 20px;
}

.s888 p {
  width: auto;
  height: auto;
  margin: 6px;
}

.shijian {
  clear: both;
  flex: 1;
}
</style>