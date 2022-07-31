<template>
  <!-- logo -->
  <div>
    <!-- 大会介绍 introduce-->
    <div class="introduce">
      <h3>赞助企业</h3>
      <span>SPONSOR</span>
    </div>
    <div class="g-rep img_g">
      <div class="img_tu">
        <a href="https://www.zwcad.com/" target="_blank">
          <img src="../assets/zanzhu1-logo.png" alt="" style="width: 300px;margin-bottom:10px"/>
        </a>
      </div>

      <div class="img_tu">
        <a href="https://www.featuremaker.com/" target="_blank">
          <img src="../assets/zanzhu3-logo.png" alt="" style="width: 300px;"/>
        </a>
      </div>

      <div class="img_tu">
        <a href="https://www.boomingtech.com/" target="_blank">
          <img src="../assets/zanzhu2-logo.png" alt="" style="width: 300px;"/>
        </a>
      </div>


      <br/>      <br/>

      
      <!-- <div class="img_tu">
        <a href="#">
          <img src="../assets/zanzhu-logo.png" alt="" />
        </a>
        
      </div>
      <div class="img_tu">
        <a href="#">
          <img src="../assets/zanzhu-logo.png" alt="" />
        </a>
        
      </div> -->
    </div>
    <!-- <div class="g-rep img_g2">
      <div class="img_tu img_g2_1">
         <a href="#">
          <span>几何设计与计算专委会</span>
        </a>
      </div>
      <div class="img_tu img_g2_2">
         <a href="#">
          <img src="../assets/logo3.png" alt="" />
        </a>
      </div>
      <div class="img_tu img_g2_3">
        <a href="#">
          <img src="../assets/logo1.png" alt="" />
        </a>
      </div>
    </div> -->
      <div class="more">
        <p>持续招募中，更多赞助信息请访问
          <a href="https://mp.weixin.qq.com/s/f-_C-ClniiHb0rgZ60uiqg" target="_blank">
            https://mp.weixin.qq.com/s/f-_C-ClniiHb0rgZ60uiqg
          </a>
        </p>
      </div>
  
  </div>
</template>

<script>
</script>

<style scoped>
.more {
  margin-top:20px;
  text-align:center;
  font-size:20px;
}
.img_g {
  position: relative;
}
.img_g2 {
  margin-top: 0px;
  position: relative;
}
.img_tu {
  /* border: 1px solid red; */
  /* width: 80%; */
  display: inline;
  text-align: center;
  margin-left: 20px;
}
.img_tu:nth-child(2),
.img_tu:nth-child(3) {
  /* margin-left: 65px; */
}
.img_tu:last-child {
  position: absolute;
  top: 17px;
  font-weight: 600;
}
.img_tu:first-child img {
  /* width: 370px; */
}
.img_tu span {
  display: inline-block;
  font-size: 25px;
}
.img_g2_1 {
  position: absolute;
  top: 20px;
}
.img_g2_2 {
  position: absolute;
  top: 20px;
  left: 235px;
}
.img_g2_3 {
  position: absolute;
  top: 20px;
  right: 1px;
}
/* 兼容移动端 */
@media screen and (max-width:500px){
  .introduce{
    width: 100%;
    margin:5vw auto;
font-size: 7vw;
  }
  .img_g {
  position: relative;
}
.img_g2 {
  margin-top: 0px;
  position: relative;
}
.g-rep {
    margin: 0 auto;
    width:100%;
}
.img_g> .img_tu {
  /* border: 1px solid red; */
  /* width: 80%; */
  display: inline-block;
  width: 100%;
}
.img_tu:nth-child(2),
.img_tu:nth-child(3) {
  /* margin-left: 65px; */
}
.img_tu:last-child {
  position: absolute;
  top: 17px;
  font-weight: 600;
}
.img_tu:first-child img {
  /* width: 370px; */
}
.img_tu span {
  display: inline-block;
  font-size: 25px;
}
.img_g2_1 {
  position: absolute;
  top: 20px;
}
.img_g2_2 {
  position: absolute;
  top: 20px;
  left: 235px;
}
.img_g2_3 {
  position: absolute;
  top: 20px;
  right: 1px;
}
}
.img_tu>a>img{
  /* text-align: center; */
  /* margin-left: 25vw; */
}
</style>