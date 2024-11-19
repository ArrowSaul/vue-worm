<script setup>
document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("media");
  video.play(); // 尝试播放视频
  // 监听视频暂停事件
  video.onpause = function () {
    document.querySelector(".video_overlay").style.display = "flex"; // 视频暂停时显示遮罩层
  };
});
</script>
<template>
  <div class="video_play_black">
    <div class="video_play_box">
      <div class="video_overlay">
        <div class="video_text">
          <div class="video_title">Soft Robot</div>
          <div class="video_text_title">训-检-存-查 新一代智慧检测</div>
        </div>
        <div class="overlay_buttons">
          <a class="anchor_mCustom" data-id="#contact" href="/#contact"
            >如何获取</a
          >
          <a href="javascript:;" class="anchor_video">观看视频</a>
        </div>
      </div>
      <video
        class="msa"
        id="media"
        controls
        webkit-playsinline
        playsinline
        x5-playsinline="true"
        preload="metadata"
        src="@/assets/video/robot_crawl.mp4"
        autoplay
        muted
        loop
      ></video>
    </div>
  </div>
  <div class="home-main" ref="introduction" id="introduction">
    <div class="home-main-left">
      <div class="home-main-left-title">适配复杂环境下的巡检机器人设计</div>
      <div class="home-main-left-text">
        基于折纸结构的多模态软体机器人 不同控制组合选取，实现三维立体运动
        软体机器人通过巧妙的腔室协同作用展现了卓越的灵活性，能够实现爬行、抬头、越障、移线等多样化动作。
        其独特结构使其在复杂环境中表现出色，具备适应狭小空间、执行复杂任务的能力。
      </div>
    </div>
    <div class="home-main-right">
      <img src="@/assets/images/ruchong1.png" />
    </div>
  </div>
  <div class="home-second" ref="function" id="function">
    <div class="home-second-title">功能介绍</div>
    <div class="home-second-list">
      <div class="part">
        <div class="module">
          <img
            class="image-list image-list1"
            src="@/assets/images/worm3.png"
          />
          <div>
            <p class="p-title">良好的稳定性能</p>
            <p class="p-desc">气动控制双脚抱紧管道，在复杂的地下系统稳定爬行</p>
          </div>
        </div>
        <div class="module">
          <img
            class="image-list image-list2"
            src="@/assets/images/ruchong2.png"
          />
          <div>
            <p class="p-title">监测区域地底情况的监控系统</p>
            <p class="p-desc">
              通过巡检次数、范围扩大构建可成长管网数据库，加速地下线缆故障排查进行紧急情况应对
            </p>
          </div>
        </div>
      </div>
      <div class="part">
        <div class="module">
          <img
            class="image-list image-list3"
            src="@/assets/images/worm2.png"
          />
          <div>
            <p class="p-title">爬行姿态仿生</p>
            <p class="p-desc">项目灵感：鳞翅目幼虫的爬行姿态运动</p>
            <p class="p-desc">
              采用软体机器人技术，为项目赋予了更加灵活的特性。
            </p>
            <p class="p-desc">适应狭小空间的能力</p>
          </div>
        </div>
        <div class="module">
          <img
            class="image-list image-list4"
            src="@/assets/images/worm1.png"
          />
          <div>
            <p class="p-title">双模态折纸结构</p>
            <p class="p-desc">
              通过不同腔室的吸气或者抽气，来完成机器人的爬行，跳跃等动作
            </p>
            <p class="p-desc">
              两腔室复合:两腔室吸气+单腔室充气=折纸软体驱动器弯曲位移
            </p>
            <p class="p-desc">
              三腔室复合:同时吸气+同时充气=折纸软体驱动器伸缩位移
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="home-second-next" ref="performance" id="performance">
    <div class="home-second-title">数据与参数</div>
    <div class="home-second-container">
      <div class="left" ref="left">
        <div class="text">
          尺 寸：<br />
          整机质量：<br />
          外壳材质：<br />
          防护等级：<br />
          工业相机图像采集：<br />
          补光灯：<br />
          激光雷达：<br />
          超声波雷达：<br />
          资产盘点：<br />
          一体化显示屏：<br />
          动环检测传感器：<br />
        </div>
      </div>
      <div class="right" ref="right">
        <div class="text">
          57cm*39cm*145cm（长*宽*高）<br />
          整机质量≤60kg<br />
          采用ABS防火材质，支持V0级别阻燃<br />
          防护等级IP32<br />
          1220万像素<br />
          白光，补光最远距离3.5m<br />
          上部探测距离25米，下部探测距离30米<br />
          精度±3mm<br />
          采用RFID和二维码<br />
          屏幕尺寸7寸，支持多点触控，分辨率≥800*400<br />
          支持环境信息检测，配备温度传感器、湿度传感器、噪音传感器、PM2.5及PM10传感器；TVOC、CO₂、甲醛
        </div>
      </div>
    </div>
  </div>

  <div class="home-third" ref="model" id="model">
    <div class="home-third-title">3D模型展示</div>
    <iframe
      class="home-third-iframe"
      src="http://www.51jianmo.com/newModel/?code=M0000000000070179RW5J&desc=0&icon=1&type=1&quick=0&opacity=0&full=0&isxcx=0"
      allowfullscreen
    ></iframe>
  </div>
  <div class="home-fouth" ref="cooperate" id="cooperate">
    <div class="home-fouth-title">合作伙伴</div>
    <div class="home-fouth-content-container">
      <div class="home-fouth-content">
        <div class="home-fouth-content-item">
          <img src="@/assets/images/partner1.png" class="partner-image" />
        </div>
        <div class="home-fouth-content-item">
          <img src="@/assets/images/partner2.png" class="partner-image" />
        </div>
        <div class="home-fouth-content-item">
          <img src="@/assets/images/partner3.png" class="partner-image" />
        </div>
        <div class="home-fouth-content-item">
          <img src="@/assets/images/partner4.png" class="partner-image" />
        </div>
        <div class="home-fouth-content-item">
          <img src="@/assets/images/partner5.png" class="partner-image" />
        </div>
        <div class="home-fouth-content-item">
          <img src="@/assets/images/partner6.png" class="partner-image" />
        </div>
        <div class="home-fouth-content-item">
          <img src="@/assets/images/partner7.png" class="partner-image" />
        </div>
        <div class="home-fouth-content-item">
          <img src="@/assets/images/partner8.png" class="partner-image" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang='scss'>
//项目介绍
.home-main {
  display: flex; // 启用 Flexbox 布局
  flex-direction: row; // 水平布局
  justify-content: center; // 水平居中对齐子元素
  align-items: center; // 垂直居中对齐子元素
  height: 50vh;
  width: 100%;
}
.home-main-left {
  display: flex; // 启用 Flexbox 布局
  flex-direction: column; // 垂直布局
  justify-content: center; // 水平居中对齐子元素
  align-items: center; // 垂直居中对齐子元素
  width: 50%;
}
.home-main-right {
  width: 50%;
}
.home-main-right img {
  /* 确保没有设置背景颜色 */
  background-color: transparent; /* 明确设置背景颜色为透明 */
}
.home-main-left-title {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #273840;
}
.home-main-left-text {
  margin-bottom: 40px;
  font-size: 25px;
  word-break: break-word; /* 强制文本在单词边界处换行 */
  text-align: left; /* 文本左对齐 */
  width: 400px; /* 容器宽度为 400 像素 */
}
.home-main-button-top {
  display: flex;
  flex-direction: row; // 水平布局
  //内间距
  padding: 10px;
}
.home-main-button-first {
  /* 白色背景 */
  background-color: #fff;
  /* 蓝色边框 */
  border: 2px solid #55acd7;
  /* 增加内边距 */
  padding: 10px 20px;
  /* 增加字体大小 */
  font-size: 18px;
  /* 设置最小宽度 */
  min-width: 150px;

  margin-right: 20px;
}
.home-main-button-second {
  background-color: #fff;
  border: 2px solid #474b4b;
  /* 增加内边距 */
  padding: 10px 20px;
  /* 增加字体大小 */
  font-size: 18px;
  /* 设置最小宽度 */
  min-width: 150px;
}
.home-main-button-third {
  background-color: #fff;
  border: 2px solid #474b4b;
  /* 增加内边距 */
  padding: 10px 20px;
  /* 增加字体大小 */
  font-size: 18px;
  /* 设置最小宽度 */
  min-width: 150px;
}

// 解决方案
body {
  font-family: "Arial", sans-serif;
  background: linear-gradient(135deg, #eafdfc, #f7f7ff);
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.home-second {
  margin-top: 50px;
  display: flex; // 启用 Flexbox 布局
  flex-direction: column; // 垂直布局
  justify-content: center; // 水平居中对齐子元素
  align-items: center; // 垂直居中对齐子元素
  width: 100%;
  max-width: 100%; /* 确保最大宽度为 100% */
  overflow: hidden; /* 防止内容溢出 */
  height: 1700px;
  color: white;
  text-align: center;
  position: relative;
}
.home-second-next {
  margin-top: 50px;
  display: flex; // 启用 Flexbox 布局
  flex-direction: column; // 垂直布局
  justify-content: center; // 水平居中对齐子元素
  align-items: center; // 垂直居中对齐子元素
  width: 100%;
  max-width: 100%; /* 确保最大宽度为 100% */
  overflow: hidden; /* 防止内容溢出 */
  height: 500px;
  color: white;
  text-align: center;
  position: relative;
}
.home-second-list {
  display: flex;
  justify-content: space-between;
}

.home-second-list .part {
  width: 480px;
  margin-right: 40px; /* 添加右侧间隔 */
}

.home-second-list .part .module {
  margin-bottom: 80px;
}

.home-second-list .part .module .image-list {
  width: 100%;
  border-radius: 20px;
  margin-bottom: 30px;
  overflow: hidden; /* 确保图片不会溢出容器 */
}

.home-second-list .part .module .image-list img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit; /* 继承父容器的圆角 */
}

.home-second-list .part .module .image-list1 {
  height: 400px;
}

.home-second-list .part .module .image-list2 {
  height: 500px;
}

.home-second-list .part .module .image-list3 {
  height: 400px;
}

.home-second-list .part .module .image-list4 {
  width: 600px;
  height: 300px;
}

.home-second-list .part .module .p-title {
  font-size: 24px;
  line-height: 24px;
  font-weight: 700;
  color: #000;
  margin-bottom: 10px;
}

.home-second-list .part .module .p-desc {
  margin: 0;
  font-size: 16px;
  color: #383838;
}

.home-second-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  box-sizing: border-box;
}
.text {
  font-size: 18px; /* 设置字体大小 */
  line-height: 1.5; /* 设置行高 */
  color: #333; /* 设置文字颜色 */
  text-align: left; /* 文字左对齐 */
  margin: 0; /* 移除默认外边距 */
  padding: 0; /* 移除默认内边距 */
}
.left,
.right {
  width: 45%; /* 调整宽度以适应内容 */
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
}
// 标题样式
.home-second-title {
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 20px;
  color: #000;
}

// 3D模型
.home-third {
  margin-top: 40px;
  display: flex; // 启用 Flexbox 布局
  flex-direction: column; // 水平布局
  justify-content: center; // 水平居中对齐子元素
  align-items: center; // 垂直居中对齐子元素
  height: 50vh;
  width: 100%;
}
.home-third-title {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #050505;
}
.home-third-iframe {
  width: 100%;
  height: 500px;
}

// 合作伙伴
.home-fouth {
  margin-top: 100px;
  display: flex; // 启用 Flexbox 布局
  flex-direction: column; // 水平布局
  justify-content: center; // 水平居中对齐子元素
  align-items: center; // 垂直居中对齐子元素
  width: 100%;
  height: 600px;
  color: white;
  text-align: center;
  position: relative;
}
.home-fouth-title {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #050505;
}
.home-fouth-content-container {
  width: 1000px; /* 根据实际需求调整 */
  max-width: 100%; /* 确保在小屏幕上不会超出父容器 */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.home-fouth-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr); // 4列，每列等宽
  grid-template-rows: repeat(2, 1fr); // 2行，每行等高
  gap: 10px; // 行和列之间的间距
  padding: 10px;
  grid-column-gap: 80px; // 列之间的间距
}

.partner-image {
  width: 100%; /* 使图片占满容器 */
  height: auto; /* 保持图片比例 */
}

.home-fouth-content-item {
  text-align: center;
  overflow: hidden;
  display: flex; // 启用 Flexbox 布局
  justify-content: center; // 水平居中对齐
  align-items: center; // 垂直居中对齐
}
//展示视频
video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* 确保视频覆盖整个容器 */
}
.video_play_black {
  position: relative;
  overflow: hidden;
  width: 100%; /* 占满整个水平宽度 */
  height: 700px;
}
.video_play_box {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
}
.video_overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  margin-top: 200px;
  margin-left: 200px;
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 24px;
}
.video_text {
  margin-bottom: 20px;
  margin-right: 100px;
  z-index: 10;
}
.video_title {
  margin-bottom: 20px;
  font-size: 60px;
}
.video_text_title {
  margin-bottom: 20px;
  z-index: 10;
}
.overlay_buttons {
  z-index: 10;
}
.anchor_mCustom,
.hy_banner_click {
  display: inline-block;
  margin: 0 10px;
  padding: 10px 20px;
  background: linear-gradient(to right, #60ba89, #2db5eb); /* 左绿右蓝渐变 */
  color: white;
  text-decoration: none;
  border-radius: 20px;
  transition: background-color 0.3s;
}
.anchor_video {
  color: white; /* 字体颜色 */
  border: 1px solid white; /* 边框颜色 */
  background: transparent; /* 透明背景 */
  text-decoration: none; /* 去掉下划线 */
  padding: 10px 20px; /* 内边距 */
  border-radius: 20px;
  transition: all 0.3s ease; /* 平滑过渡效果 */
}
.anchor_video:hover {
  background: white; /* 悬停时背景颜色 */
  color: red; /* 悬停时字体颜色 */
}
.anchor_mCustom:hover,
.hy_banner_click:hover {
  background: #4fc7f0; /* 按钮悬停效果 */
}
</style>
