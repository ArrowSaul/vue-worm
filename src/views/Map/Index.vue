<script setup >
import { ref,reactive  } from "vue";
const center = ref({ lng: 0, lat: 0 });
const zoom = ref(3);

// 8条管道线路的坐标点
const pipelines = reactive ([
  {
    id: 1,
    color: "green",
    points: [
      { lng: 113.649338, lat: 34.805095 },
      { lng: 113.651449, lat: 34.805925 },
      { lng: 113.652635, lat: 34.805933 },
      { lng: 113.654387, lat: 34.80577 },
      { lng: 113.657028, lat: 34.805896 },
      { lng: 113.672317, lat: 34.805696 },
      { lng: 113.672901, lat: 34.800094 },
    ],
  },
  {
    id: 2,
    color: "red",
    points: [
      { lng: 113.665732, lat: 34.814783 },
      { lng: 113.665696, lat: 34.811468 },
      { lng: 113.66566, lat: 34.798849 },
      { lng: 113.665687, lat: 34.798471 },
      { lng: 113.663747, lat: 34.798487 },
      { lng: 113.663549, lat: 34.798686 },
      { lng: 113.663567, lat: 34.800531 },
    ],
  },
  {
    id: 3,
    color: "green",
    points: [
      { lng: 113.659004, lat: 34.814828 },
            { lng: 113.659096, lat: 34.811468 },
      { lng: 113.65906, lat: 34.798849 },
      { lng: 113.659087, lat: 34.798471 },
    ],
  },
  {
    id: 4,
    color: "red",
    points: [
      { lng: 113.654387, lat: 34.814591 },
      { lng: 113.654369, lat: 34.811568 },
      { lng: 113.654405, lat: 34.805892 },
      { lng: 113.654351, lat: 34.803165 },
      { lng: 113.655986, lat: 34.800675 },
    ],
  },
  {
    id: 5,
    color: "red",
    points: [
      { lng: 113.654369, lat: 34.811612 },
      { lng: 113.671706, lat: 34.811375 },
    ],
  },
  {
    id: 6,
    color: "green",
    points: [
      { lng: 113.650308, lat: 34.812575 },
      { lng: 113.654315, lat: 34.812546 },
      { lng: 113.654405, lat: 34.805892 },
      { lng: 113.654351, lat: 34.803165 },
      { lng: 113.655986, lat: 34.800675 },
    ],
  }
]);
//其他
const handler = ({ BMap, map }) => {
  console.log(BMap, map);
  center.value.lng = 113.661161;
  center.value.lat = 34.805844;
  zoom.value = 16;
  // // 初始化地图和管道
  // initMap(map);
};
const show = ref(false);

const infoWindowClose = () => {
  show.value = false;
};
const infoWindowOpen = () => {
  show.value = true;
};
// 管道显示状态
const pipelinesVisible = ref(false);
// const closePolyline = () => {
//   pipelinesVisible.value = false;
// };
// const openPolyline = () => {
//   pipelinesVisible.value = true;
// };
const infoVisible = ref(false);
// 银屏路信息框的显示状态
const daoluVisible = ref(false);
// 切换巡检信息框的显示状态
function toggleInfoVisibility() {
  if (!infoVisible.value) {
    infoVisible.value = true;
  } else {
    infoVisible.value = false;
  }
}
const toggleDaoluVisibility = () => {
  // if (daoluVisible.value) {
  //   daoluVisible.value = false;
  // } else {
  //   daoluVisible.value = true;
  // }
  daoluVisible.value = !daoluVisible.value;
  pipelinesVisible.value = !pipelinesVisible.value; // 更新管道线路的显示状态
};
</script>
<template>
  <div>
    <!-- 信息盒子 -->
    <div v-if="infoVisible" class="infoBox">
      <ul class="biaotou">
        <li>巡检日期</li>
        <li>任务编号</li>
        <li>巡检区域</li>
        <li>巡检结果</li>
      </ul>
      <ul>
        <li>2024-10-05</li>
        <li>A07</li>
        <li class="yinpinglu">银屏路</li>
        <li>良好</li>
      </ul>
      <hr
        style="
          border: none;
          height: 2px;
          background-color: rgb(230, 230, 250);
          opacity: 0.5;
        "
      />
      <ul>
        <li>2024-10-06</li>
        <li>A05</li>
        <li class="kexuedadao">科学大道</li>
        <li>良好</li>
      </ul>
      <hr
        style="
          border: none;
          height: 2px;
          background-color: rgb(230, 230, 250);
          opacity: 0.5;
        "
      />
      <ul>
        <li>2024-10-30</li>
        <li>B07</li>
        <li>东风路</li>
        <li>良好</li>
      </ul>
      <hr
        style="
          border: none;
          height: 2px;
          background-color: rgb(230, 230, 250);
          opacity: 0.5;
        "
      />
      <ul>
        <li>2024-11-05</li>
        <li>A07</li>
        <li>南门寨</li>
        <li>良好</li>
      </ul>
    </div>

    <!-- 线缆标记 -->
    <div v-if="daoluVisible" class="xianlanbiaozhu">
      <ul>
        <li><span class="red">————</span> 已巡检</li>
        <li><span class="green">————</span> 未巡检</li>
      </ul>
    </div>

    <!-- 显示信息按钮 -->
    <div class="showInfoButton">
      <a href="javascript:void(0)" @click="toggleInfoVisibility"
        ><span class="biaoji"></span> 查看已巡检位置</a
      >
      <a
        href="javascript:void(0)"
        id="toggle-cable-button"
        @click="toggleDaoluVisibility"
        ><span class="chakan"></span>显示线缆分布</a
      >
      <a href="javascript:void(0)" @click="toggleFullScreen"
        ><span class="quanping"></span>全屏</a
      >
      <!-- <a href="javascript:void(0)" @click="toggleLanguageMenu"
        ><span class="fanyi">翻译</span></a
      > -->
      <div class="yuyan" style="width: 70px">
        <div @click="changeLanguage('indonesian')">
          <a
            href="map-indonesian.html"
            data-message="您确定将此界面翻译成印尼语吗？"
            >印尼语</a
          >
        </div>
        <div @click="changeLanguage('english')">
          <a href="map-english.html" data-message="您确定将此界面翻译成英语吗？"
            >英语</a
          >
        </div>
        <div @click="changeLanguage('malay')">
          <a href="map-malay.html" data-message="您确定将此界面翻译成马来语吗？"
            >马来语</a
          >
        </div>
      </div>
    </div>

    <!-- 名称 -->
    <div class="name">
      <h1>地下管网巡检系统</h1>
    </div>

    <!-- 巡检分析 -->
    <div class="xunjianfenxi">
      <div class="dixiaguanwangxinxi">
        <div><p style="color: white">地下官网信息</p></div>
        <div class="progress-ring1">
          <span>50%</span>
          <span class="s1">破损程度</span>
        </div>
        <div class="progress-ring2">
          <span>75km</span>
          <span class="s2">总里程</span>
        </div>
        <div class="progress-ring3">
          <span>25km</span>
          <span class="s3">已巡检里程</span>
        </div>
      </div>
      <div class="xianlanposunyuanyin">
        <div><p style="color: white">线缆破损原因</p></div>
        <div class="progress-bars">
          <div class="progress">
            <label for="file1">化学腐蚀:</label>
            <progress id="file1" max="100" value="30">30%</progress>
          </div>
          <div class="progress">
            <label for="file2">电缆讨论阻碍:</label>
            <progress id="file2" max="100" value="70">70%</progress>
          </div>
          <div class="progress">
            <label for="file3">线缆负荷:</label>
            <progress id="file3" max="100" value="100">100%</progress>
          </div>
          <div class="progress">
            <label for="file4">外力损伤:</label>
            <progress id="file4" max="100" value="50">50%</progress>
          </div>
          <div class="progress">
            <label for="file5">线缆受潮:</label>
            <progress id="file5" max="100" value="10">10%</progress>
          </div>
          <div class="progress">
            <label for="file6">环境温度:</label>
            <progress id="file6" max="100" value="80">80%</progress>
          </div>
        </div>
      </div>
    </div>
    <baidu-map
      class="bm-view"
      :center="center"
      :zoom="zoom"
      :scroll-wheel-zoom="true"
      @ready="handler"
      mapType="BMAP_SATELLITE_MAP"
      @click="paintPolyline"
      @rightclick="newPolyline"
    ><div v-if="pipelinesVisible">
      <!-- 循环渲染8条管道线路 -->
      <bm-polyline 
        :path="pipeline.points"
        v-for="pipeline in pipelines"
        :key="pipeline.id"
        :stroke-color="pipeline.color"
        :stroke-weight="4"
        :stroke-opacity="0.8"
        
      ></bm-polyline>
    </div>
      <bm-marker
        :position="{ lng: 113.661161, lat: 34.805844 }"
        :dragging="true"
        @click="infoWindowOpen"
      >
        <bm-info-window
          :show="show"
          @close="infoWindowClose"
          @open="infoWindowOpen"
          >金水区郑州轻工业大学东风校区北门至东风路文化路交叉口已完成巡检，地下线缆状态良好</bm-info-window
        >
      </bm-marker>
    </baidu-map>
  </div>
</template>
<style scoped>
.bm-view {
  width: 100%;
  height: 1000px;
}

/* html样式开始 */
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
html {
  --antd-wave-shadow-color: #1890ff;
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
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
.collapsed {
  background-color: rgb(0, 0, 0, 0.7);
  color: hsla(0, 0%, 100%, 0.85);
}
.ys-navbar .navbar-container {
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
}
.ys-navbar {
  position: absolute;
  width: 100%;
  height: 75px;
  top: 0;
  left: 0;
  z-index: 1001;
  background-color: rgb(16, 14, 14);
}
.single-dropdown-item {
  position: relative;
}
.name {
  position: absolute;
  height: auto;
  width: auto;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 5px;
  border-radius: 4px;
  right: 50%; /* 使用百分比值 */
  transform: translateX(50%); /* 调整水平对齐 */
  z-index: 100; /* 调整为更高的值 */
}
/* 悬浮开始 */
/* you侧线缆信息开始 */
/* you侧线缆信息结束 */
/* 红绿线缆标注开始 */
.xianlanbiaozhu {
  /* display: none; */
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 10;
  background-color: rgba(27, 23, 23, 0.8);
  border: 1px solid #ddd;
  border-radius: 10px;
}
.xianlanbiaozhu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.xianlanbiaozhu li {
  font-size: 14px;
  line-height: 1.5;
  color: #f9f9f9;
}
.xianlanbiaozhu .red {
  color: red;
}
.xianlanbiaozhu .green {
  color: green;
}
/* 红绿线缆标注结束 */
/* you侧巡检信息分析开始 */
.xunjianfenxi {
  position: absolute;
  width: 380px;
  height: 700px;
  top: 200px;
  right: 20px;
  background-color: rgba(27, 23, 23, 0.8);
  border: 1px solid #ddd;
  border-radius: 10px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  /* display: none; */
}
.dixiaguanwangxinxi {
  margin: 10px;
  height: 260px;
  background-color: rgba(27, 23, 23, 0.8);
}
.xianlanposunyuanyin {
  margin: 10px;
  flex-grow: 1;
  background-color: rgba(27, 23, 23, 0.8);
}
.progress-ring1 {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  left: 117px;
}
.progress-ring1::before {
  content: attr(data-progress);
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 10px solid #f3f3f3;
  border-top-color: #db8734;
  border-left-color: #db8734;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  line-height: 120px;
  font-size: 24px;
}
.progress-ring1 span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  line-height: 120px;
  font-size: 24px;
  color: white;
  width: 200px;
}
.progress-ring1 .s1 {
  position: absolute;
  font-size: 14px;
  bottom: 90px;
}
.progress-ring2 .s2 {
  position: absolute;
  font-size: 14px;
  bottom: 90px;
}
.progress-ring3 .s3 {
  position: absolute;
  font-size: 14px;
  bottom: 90px;
}
.progress-ring2 {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  left: 10px;
  bottom: 10px;
}
.progress-ring2::before {
  content: attr(data-progress);
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 10px solid #f3f3f3;
  border-top-color: #db5834;
  border-bottom-color: #db5834;
  border-left-color: #db5834;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  line-height: 120px;
  font-size: 24px;
}
.progress-ring2 span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  line-height: 120px;
  font-size: 24px;
  color: white;
  width: 200px;
}
.progress-ring3 {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  left: 225px;
  bottom: 110px;
}
.progress-ring3::before {
  content: attr(data-progress);
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 10px solid #f3f3f3;
  border-top-color: #3498db;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  line-height: 120px;
  font-size: 24px;
}
.progress-ring3 span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  line-height: 120px;
  font-size: 24px;
  color: white;
  width: 200px;
}
.progress-bars {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-row-gap: 10px;
  align-items: center;
}
.progress {
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 6px;
  margin-bottom: 6px;
  color: rgb(34, 199, 214);
}
progress {
  width: 260px;
  height: 20px;
  margin: 0 auto;
}
/* you侧巡检信息分析结束 */
.infoBox {
  position: absolute;
  top: 100px;
  left: 20px;
  width: 400px;
  background-color: rgba(27, 23, 23, 0.8);
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  /* display: none; */
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease;
}
.biaotou {
  background-color: rgba(150, 139, 139, 0.5);
}
.infoBox ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
}
.infoBox ul li {
  flex: 1;
  color: #fff;
  padding: 10px;
  margin: 0 auto;
  transition: background-color 0.3s ease;
}
.infoBox ul:first-child li {
  background-color: rgba(255, 255, 255, 0.1);
  font-weight: bold;
}
.infoBox ul li:hover {
  background-color: rgba(29, 237, 14, 0.5);
}
.showInfoButton {
  position: absolute;
  text-align: center;
  top: 80px;
  right: 20px;
  z-index: 10;
  width: auto;
  height: 45px;
  background-color: #fff;
  border-radius: 5px;
  padding: 0 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.showInfoButton a {
  text-decoration: none;
  color: #5f5477;
  padding: 5px 10px;
  border-radius: 3px;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
}

.showInfoButton a:hover {
  background-color: rgba(245, 101, 11, 0.5);
}

.showInfoButton a {
  float: left;
}

.showInfoButton span {
  margin-right: 100px;
}

.showInfoButton .quanping {
  width: 30px;
  height: 30px;
  background-image: url("@/assets/images/全屏.png");
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0;
  border: 0;
  padding: 0;
  display: inline-block;
}

.showInfoButton .fanyi {
  height: 30px;
  margin-right: 0;
  position: relative;
  text-align: center;
  line-height: 30px;
}

.showInfoButton .yuyan {
  display: none;
  position: absolute;
  width: 70px;
  height: auto;
  background-color: #fff;
  top: 42px;
  left: 374px;
}

.showInfoButton .yuyan div {
  border-bottom: 1px solid #2a2a2b;
}

.showInfoButton .chakan {
  width: 30px;
  height: 30px;
  background-image: url("@/assets/images/look.png");
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0;
  border: 0;
  padding: 0;
  display: inline-block;
}

.showInfoButton .biaoji {
  width: 24px;
  height: 24px;
  background-image: url("@/assets/images/mark.png");
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0;
  border: 0;
  padding: 0;
  display: inline-block;
}

.showInfoButton a {
  position: relative;
}

.showInfoButton a::after {
  content: "";
  position: absolute;
  top: 25%;
  right: -1px;
  height: 20px;
  border-left: 1px solid #5f5477;
}

.showInfoButton a:last-child::after {
  display: none;
}
</style>
