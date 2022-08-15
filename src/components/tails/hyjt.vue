<template>
  <div class="g-rep">
    <div class="introduce">
      <h3>会议交通</h3>
    </div>

  <div class="text">
      <p><strong>会议酒店：汇泉王朝大饭店</strong></p> 
      <p><strong>地址：中国山东省青岛市市南区南海路9号</strong></p>     <br>
      
      <ul>
        <li><strong>（预计时间：20分钟）</strong>青岛站 → 步行234米 → 青岛站地铁站-A口（地铁3号线，前往青岛北站方向）→ 汇泉广场地铁站-C口 → 步行551米到汇泉王朝大饭店
<p></p></li>
        <li><strong>（预计时间：50分钟）</strong>青岛北站地铁站（地铁1号线，前往王家港方向）→ 青岛站地铁站（站内换乘地铁3号线，前往青岛北站方向）→ 汇泉广场地铁站-C口 → 步行551米到汇泉王朝大饭店
<p></p></li>
        <li><strong>（预计时间：1小时35分钟）</strong>青岛胶东国际机场 → 胶东机场地铁站（地铁8号线，前往青岛北站方向）→  青岛北站地铁站（站内换乘地铁1号线，前往王家港方向）→ 青岛站地铁站（站内换乘地铁3号线，前往青岛北站方向）→ 汇泉广场地铁站-C口 → 步行551米到汇泉王朝大饭店
<p></p></li>
      </ul>
      
    </div>


  </div>
</template>



<script>
export default {
    name:'hyjt',
    mounted() {
      window.scrollTo(0,0);
    }
    
}
</script>

<style>
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