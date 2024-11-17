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
  <div class="container">
    <!-- 页面主题开始 -->
    <section class="hero">
      <div class="hero-image" style="background-image: url('images/rc1.png')">
        <div class="hero-text">
          <h3 class="hero-title">Soft Robot</h3>
          <h2 class="sub-title">训-检-存-查 新一代智慧检测</h2>
        </div>
      </div>
    </section>
    <section class="video-section" style="height: 105px">
      <div class="video-wrapper">
        <video
          src="@/assets/video/robot.mp4"
          muted
          autoplay
          loop
          id="main-video"
          class="video"
          style="width: 300px; height: 200px"
        ></video>
      </div>
    </section>
    <section class="performance">
      <div class="title">
        <span class="main-title">适配复杂环境下的巡检机器人设计</span>
        <hr />
      </div>
      <p class="desc">
        基于折纸结构的多模态软体机器人
        <br />
        <b>不同控制组合选取，实现三维立体运动</b>
        <br />
        软体机器人通过巧妙的腔室协同作用展现了卓越的灵活性，能够实现爬行、抬头、越障、移线等多样化动作。
        其独特结构使其在复杂环境中表现出色，具备适应狭小空间、执行复杂任务的能力。
      </p>
      <div class="mainImage">
        <img
          src="@/assets/images/ruanren.png"
          alt=""
          style="width: 300px; height: 200px"
        />
        <img
          src="@/assets/images/rc1.png"
          alt=""
          style="display: none; width: 300px; height: 200px"
        />
        <img
          src="@/assets/images/ruchong1.png"
          alt=""
          style="display: none; width: 300px; height: 200px"
        />
      </div>
      <div class="list">
        <div class="part">
          <div class="module">
            <div class="list1">
              <video
                class="image-list film"
                src="@/assets/video/soft_crawl.mp4"
                muted="muted"
                id="soft-crawl-video"
                autoplay="autoplay"
                loop="loop"
                style="width: 300px; height: 200px"
              ></video>
            </div>
            <div>
              <p class="p-title">良好的稳定性能</p>
              <p class="p-desc">
                气动控制双脚抱紧管道，在复杂的地下系统稳定爬行
              </p>
            </div>
          </div>
          <div class="module">
            <div
              class="image-list image-list2"
              style="
                background-image: url('@/assets/images/ruanren.png');
                background-size: 300px 200px;
              "
            ></div>
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
            <div
              class="image-list image-list3"
              style="background-image: url('@/assets/images/ruchong2.png')"
            ></div>
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
            <div
              class="image-list image-list4"
              style="background-image: url('@/assets/images/ruchong2.png')"
            ></div>
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
    </section>
    <section class="robot-parameters">
      <ul class="parameters-list">
        <li>
          <p class="name">整体重量</p>
          <p class="value">300g ± 5g</p>
        </li>
        <li>
          <p class="name">工作姿态</p>
          <p class="value">爬行、抬头、越障、移线</p>
        </li>
        <li>
          <p class="name">长宽高（吸气）</p>
          <p class="value">0.20*0.08*0.10</p>
        </li>
        <li>
          <p class="name">高清实时传输</p>
          <p class="value">支持</p>
        </li>
        <li>
          <p class="name">行走速度</p>
          <p class="value">≤5m/s</p>
        </li>
        <li>
          <p class="name">识别线缆破损位置</p>
          <p class="value">支持</p>
        </li>
        <li>
          <p class="name">长宽高（充气）</p>
          <p class="value">0.28*0.08*0.10</p>
        </li>
        <li>
          <p class="name">点阵红温信息采集</p>
          <p class="value">支持</p>
        </li>
        <li>
          <p class="name">抬头角度</p>
          <p class="value">≤75°</p>
        </li>
        <li>
          <p class="name">温湿度信息采集</p>
          <p class="value">支持</p>
        </li>
        <li>
          <p class="name">全自由度（腔室数）</p>
          <p class="value">3</p>
        </li>
        <li>
          <p class="name">整体材料可降解</p>
          <p class="value">支持</p>
        </li>
      </ul>
    </section>
    <div class="footer">
      <h1>3D模型展示</h1>
      <div class="iframe-wrapper">
        <iframe
          src="http://www.51jianmo.com/newModel/?code=M0000000000070179RW5J&desc=0&icon=1&type=1&quick=0&opacity=0&full=0&isxcx=0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div class="footer-background"></div>
    <div class="container">
      <div
        class="image-wrapper"
        style="left: 116px; top: 27px; width: 167px; height: 63px"
      >
        <img
          src="https://pmta1538c-pic42.websiteonline.cn/upload/139_jwr5_plwu.jpg"
          style="width: 167px; height: auto"
        />
      </div>
      <div
        class="image-wrapper"
        style="left: 122px; top: 145px; width: 227px; height: 43px"
      >
        <img src="@/assets/images/chengshi1.png" style="height: 63px" />
      </div>
      <div
        class="image-wrapper"
        style="left: 666px; top: 29px; width: 173px; height: 65px"
      >
        <img
          src="@/assets/images/outeke.png"
          style="width: 173px; height: auto; margin-top: 3px"
        />
      </div>
      <div
        class="image-wrapper"
        style="left: 378px; top: 147px; width: 213px; height: 45px"
      >
        <img
          src="@/assets/images/jinwan.png"
          style="height: 115%; margin-left: 30px"
        />
      </div>
      <div
        class="image-wrapper"
        style="left: 376px; top: 37px; width: 194px; height: 43px"
      >
        <img
          src="@/assets/images/huawei.png"
          style="height: 160%; margin-left: 55px; margin-top: -4px"
        />
      </div>
      <div
        class="image-wrapper"
        style="left: 675px; top: 147px; width: 151px; height: 45px"
      >
        <img
          src="@/assets/images/Unitree.png"
          style="width: 151px; height: auto"
        />
      </div>
      <div
        class="image-wrapper"
        style="left: 912px; top: 37px; width: 161px; height: 56px"
      >
        <img
          src="@/assets/images/zhongtie.png"
          style="width: 161px; height: auto"
        />
      </div>
      <div
        class="image-wrapper"
        style="left: 910px; top: 160px; width: 162px; height: 24px"
      >
        <img
          src="@/assets/images/samsung.png"
          style="width: 162px; height: auto"
        />
      </div>
      <div class="overlay"></div>
    </div>
  </div>
</template>
    <style scoped lang='scss'>
</style>
