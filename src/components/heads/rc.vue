<template>
  <div class="g-rep">
    <div class="introduce">
      <h3>会议日程</h3>
      <!-- <span>第十四届全国几何设计与计算学术会议</span> -->
    </div>
   <table class="meeting_schedule">
                    <tr>
                        <th colspan="4">2022年8月19日 星期五  全天会议注册</th>
                    </tr>
                    <tr>
                        <td style="text-align: center; width: 20%"><b>时间</b></td>
                        <td style="text-align: center; width: 50%"><b>日程安排</b></td>
                    </tr>
                    <tr>
                         <td rowspan="2">14:00—17:00 </td>
                        <td style="text-align: left">会前课程1 计图框架入门与进阶</td>
                    </tr>
                    <tr>
                        <td style="text-align: left">会前课程2 高效网格生成</td>
                    </tr>
                    <tr>
                        <td>19:00—21:00</td>
                        <td colspan="2" style="text-align: left">专委会会议</td>
                    </tr>
    </table>
   <table class="meeting_schedule">
                    <tr>
                        <th colspan="4">2022年8月20日 星期六</th>
                    </tr>
                    <tr>
                        <td style="text-align: center; width: 20%"><b>时间</b></td>
                        <td style="text-align: center; width: 50%"><b>日程安排</b></td>
                    </tr>
                    <tr>
                        <td>8:30—9:00</td>
                        <td style="text-align: left">开幕式</td>
                    </tr>
                    <tr>
                       <td>9:00—10:00</td>
                        <td style="text-align: left">特邀报告1 </td>
                    </tr>
                    <tr>
                        <td>10:20—12:00</td>
                        <td colspan="2" style="text-align: left">全国计算几何协作组四十周年暨苏步青先生诞辰120周年纪念特别论坛</td>
                       
                    </tr>
                  
                    <tr>
                        <td>14:00—16:00</td>
                         <td colspan="2" style="text-align: left">学科发展战略研讨会</td>
                       
                    </tr>
                    <tr>
                        <td>16:20—16:50</td>
                         <td colspan="2" style="text-align: left">论文快放1</td>
                       
                    </tr>
                    <tr>
                        <td>16:50—17:30</td>
                         <td colspan="2" style="text-align: left">论文交流1</td>
                       
                    </tr>
                    <tr>
                        <td>18:00—20:00</td>
                        <td colspan="2" style="text-align: left">晚宴</td>
                    </tr>
    </table>
          <table class="meeting_schedule">
                    <tr>
                        <th colspan="4">2022年8月21日 星期日</th>
                    </tr>
                    <tr>
                        <td style="text-align: center; width: 20%"><b>时间</b></td>
                        <td style="text-align: center; width: 50%"><b>日程安排</b></td>
                    </tr>
                    <tr>
                        <td>8:30—9:30</td>
                        <td style="text-align: left">特邀报告2</td>
                    </tr>
                    <tr>
                       <td>9:50—11.30</td>
                        <td style="text-align: left">专题论坛1  数字孪生</td>
                    </tr>
                     <tr>
                       <td>11:30—12:00</td>
                        <td style="text-align: left">论文快放2</td>
                    </tr>
                     <tr>
                       <td>14:00—15:00</td>
                        <td style="text-align: left">特邀报告3</td>
                    </tr>
                    <tr>
                        <td>15:00—15:40</td>
                        <td colspan="2" style="text-align: left">论文交流2</td>
                    </tr>
                    <tr>
                        <td rowspan="2">15:40—17:20</td>
                        <td colspan="2" style="text-align: left">专题论坛2 开源工业软件</td>
                    </tr>

                  
                    <tr>
                        <td   style="text-align: left">专题论坛3 深度几何学习</td>
                    </tr>
                    

    </table>
       <table class="meeting_schedule">
                    <tr>
                        <th colspan="4">2022年8月22日 星期一</th>
                    </tr>
                    <tr>
                        <td style="text-align: center; width: 20%"><b>时间</b></td>
                        <td style="text-align: center; width: 50%"><b>日程安排</b></td>
                    </tr>
                    <tr>
                        <td>8:30—10:00</td>
                        <td style="text-align: left">产业特别论坛  </td>
                    </tr>
                    <tr>
                       <td rowspan="2">10:10—11:50</td>
                        <td style="text-align: left">专题论坛4 增材制造</td>
                    </tr>
                    <tr>
                        <td style="text-align: left">专题论坛5 国产CAD几何引擎</td>
                    </tr>
                    <tr>
                        <td>11:50—12:00</td>
                        <td colspan="2" style="text-align: left">闭幕式</td>
                    </tr>
    </table>

  </div>
</template>

<script>
export default {
    name:'rc'
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
.meeting_schedule {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.meeting_schedule td, .meeting_schedule th {
  border: 1px solid #ddd;
  padding: 8px;
}

.meeting_schedule tr:nth-child(even){background-color: #f2f2f2;}

.meeting_schedule tr:hover {background-color: #ddd;}

.meeting_schedule th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #2E4D8E;
  color: white;
  text-align:center;
}

</style>