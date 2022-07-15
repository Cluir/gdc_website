<template>
  <div class="g-rep">
    <div class="introduce">
      <h3>酒店预定</h3>
      <span>第十四届全国几何设计与计算学术会议</span>
    </div>
    <div class="text">
      <p><strong>会议酒店：汇泉王朝大饭店</strong></p>      <br>
      <p class="text_indent">汇泉王朝大饭店是一家五星级饭店，坐落于风景秀丽的汇泉湾畔，依山傍海，景色宜人，红瓦绿树、碧海蓝天。数步之间即可与青岛最负盛名的第一海水浴场拥抱，是最具岛城特色的海边旅游渡假饭店之一。汇泉王朝大饭店以一流的设备、一流的管理、一流的服务，为您提供舒适的享受和温馨的氛围。</p>
      <p><i></p>
    </div>
  </div>
</template>

<script>
export default {
    name:'jdyd',
    mounted() {
      window.scrollTo(0,0);
    }
}
</script>

<style>
.text {
  font-size: 20px;
  line-height: 1.35;
}
.text_indent {
  text-indent: 2em;
  /* line-height: 30px; */
}
.introduce {
  width: 300px;
  text-align: center;
  margin: 40px auto;
  font-size: 30px;
}
.introduce > span {
  display: inline-block;
  margin-top: 10px;
  color: #898989;
  font-size: 15px;
}
</style>