<script setup>
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
            <router-link to="/flixed/map">巡检概览</router-link>
          </li>
          <li class="navmid-no">
            <router-link to="/flixed/underground">地下环境</router-link>
          </li>
          <li class="navmid-no">
            <router-link to="/flixed/information">历史信息</router-link>
          </li>
          <li class="navmid-no">
            <router-link to="/">返回首页</router-link>
          </li>
        </ul>
      </div>
    </nav>
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
  float: left;
  width: 100px;
  height: 64px;
  margin-left: 180px;
}
.navmid ul {
  align-self: center;
  height: 64px;
  margin: 0;
  padding: 0;
}
.navmid-no a {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-decoration: none;
  color: aliceblue;
}
</style>