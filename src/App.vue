<template>
  <div id="body">
    <!-- // 总体背景 -->
    <div id="backimg">

      <heads />
      <banner />
      <!-- <subject /> -->
      <router-view></router-view>
      <logo />
      <imgg />
      <div class="icon">
        <img src="./assets/xia.png" alt="" width="100%">
        <div class="icon_img">
          <div class="icon_div">
            <img src="./assets/index_27.png" alt="" />
            <p>曾老师</p>
            <p>gdc@csiam.org.cn</p>
          </div>
          <div class="icon_div">
            <img src="./assets/index_24.png" alt="" />
            <p>山东大学</p>
            <p>山东省青岛市即墨区滨海大道72号</p>
          </div>
          <div class="icon_div">
            <img src="./assets/index_30.png" alt="" />
            <p>刘老师</p>
            <p>18561554786</p>
          </div>
        </div>
      </div>
      <!-- bottom_img -->
      <!-- <footer>
        img
      </footer> -->
    </div>
  </div>
</template>

<script>// @ts-nocheck

import banner from "./components/banner.vue";
// import subject from "./components/subject.vue";
import logo from "./components/logo.vue";
import imgg from "./components/img.vue";
import heads from "./components/heads.vue";
export default {
  name: "App",
  components: {
    heads,
    banner,
    // subject,
    logo,
    imgg,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
}
#body {
  /* height: 2820px; */
  /* background: url(./assets/下.png) no-repeat 0% 100%/100% 300px; */
  /* width: 274vw; */
}
.g-rep {
  margin: 0 auto;
  width: 960px;
}
.clear::after {
  content: "*";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
#backimg {
  width: 100vw;
  background: url(./assets/shang.png) no-repeat 0% 0%/100% 1415px;
}

.icon {
  text-align: center;
  position: relative;
}
.icon_div {
  /* float: left; */
  display: inline-block;
  margin-left: 90px;
}
.icon_img {
  position: absolute;
  top: 90px;
  left: 500px;
}
.icon_div p {
  margin-top: 5px;
  font-size: 14px;
  color: white;
}
/* 兼容移动端 */
@media screen and (max-width:500px) {
  #body{
    width: 100vw;
  }
  #backimg {
  width: 100%;
  background: url(./assets/shang.png) no-repeat 0% 0%/100% 140vw;
}

  .icon {
   width: 100%;
 height: 20vw;
  
  text-align: center;
  position: relative;
  background:url(./assets/xia.png) ;
  background-size: 100% 100%;
}
.icon img{
  display: none;
}
.icon_div {
  /* float: left; */
  display: inline-block;
 margin: auto;
 width: 33%;
}
.icon_img {
  width: 100%;
  height: 100%;
  position: absolute;
 top: 0;
 left: 0;
 
  display: flex;
  justify-content: space-evenly;
}
.icon_div p {
  margin-top: 1vw;
  font-size: 3vw;
  color: white;
}

}
</style>
