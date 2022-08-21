<template>
  <div class="g-rep">
    <div class="introduce">
      <h3>疫情防控</h3>
      <!-- <span>第十四届全国几何设计与计算学术会议</span> -->
    </div>
    <p>尊敬的各位与会嘉宾们：您好！<br>
      欢迎您莅临参加GDC 2022第十四届全国几何设计与计算大会！
      十分感谢您对我们的信任和支持，GDC 2022大会全面落实有关防疫政策，按照要求切实做到疫情防控与安全办会两不误，确保让各位与会嘉宾们放心参会，烦请仔细阅读并遵守相关防疫政策要求并遵守执行。
    </p>

    <div>
      <div class="title">会议前</div>
      <div>
        <ol>
          <li>嘉宾自我健康筛查</li>
          <p>来青前，请做好自我健康状况监测，确保身体状况良好,近期无咳嗽发热等症状，确认没有中高风险地区旅居史，低风险来青人员须持48小时内核酸检测阴性证明来青。<span
              style="color: red;">所有健康码异常及到访过中高风险区所在街道（镇）的人员不得参会</span>
          </p>
          <br>
          <div style="text-align: center;">扫码查询自己所在地区风险等级↓</div>
          <p style="text-align: center;"><img class="small_img" src="../../assets/yqfk/fengxiandengji.png"></p>
          <li>来青报备</li>
          <ul>
            <li>第一步：山东省外参会人员需提前在健康山东公众号上进行来鲁报备。</li>
            <p>扫描“健康山东”→点击“来鲁申报”→居委会信息请按图中内容填写。</p>
            <p style="text-align: center;"><img class="small_img" src="../../assets/yqfk/jiankangma.png"></p>
            <p style="text-align: center;"><img class="large_img" src="../../assets/yqfk/jiankangmaliucheng.png"></p>
            <li>第二步：填写“GDC 2022会议青岛市南区属地报备信息表”。</li>
            <p style="text-align: center;"><img class="middle_img" src="../../assets/yqfk/liuchengxinxibiao.png"></p>
          </ul>
          <li>所有参会人员原则上要完成新冠病毒疫苗全程接种，符合条件的实现加强针“应接尽接”。</li>
        </ol>
      </div>
    </div>

    <div>
      <div class="title">会议期间</div>
      <div>
        <ol>
          <li>
            所有参会人员要做到“三天两检”，会期期间组委会将于8月19日和8月21日在汇泉王朝饭店设置统一的核酸采集点，凭核酸检测券免费检测，请您合理安排时间进行核酸采集。其余时间如需检测，请自行前往市南区佛涛路7号采样点进行检测。
          </li>


          <ul>
            <li>汇泉王朝饭店核酸检测时间：</li>
            <ul>
              <li>8月19日：09：00-17：00</li>
              <li>8月21日：11：00-14：00</li>
            </ul>

            <li>离酒店最近的 “应检尽检”检测地点：</li>
            <p>市南区佛涛路7号采样点</p>
            <p>地址：市南区佛涛路7号乙</p>
            <p>电话：0532-82878386,0532-83882358</p>
            <p>采样时间：每天7:30-11:30,15:30-18:30</p>

          </ul>
          <li>参会嘉宾每日应开展自主健康监测，一旦发现异常情况应立即通知会务组工作人员，并及时到定点医院就诊。</li>
          <li>会议期间，参会嘉宾进入酒店需全程佩戴一次性医用口罩，并扫描青岛一码通场所码。</li>
          <li> 会务组在参会资料中为每位嘉宾提供1个防疫包，内含一次性医用口罩、消毒湿巾，请科学使用。</li>
          <li>参会嘉宾在参会期间，若出现体温> 37.3℃或新冠肺炎疑似症状，应主动报告并配合现场工作人员接受相应的措施。</li>
          <li>其他未尽事宜，按照本次大会疫情防控要求执行。</li>
        </ol>
      </div>
    </div>

    <div>
      <div class="title">注意事项</div>
      <div>
        <ul>
          <li>请随身携带身份证</li>
          <li>请您随时关注核酸时间是否过期，核酸检测要做到“三天两检”</li>
          <li>请您随时关注健康码和行程码是否为“绿码”</li>
          <li>请您在会场全程佩戴口罩，与他人保持适当的间距</li>
          <li>请您在接触公共用品后，及时进行消毒</li>
          <li>天气炎热，注意防暑，海边游玩，注意安全</li>
          <li>若有身体不适情况，请及时告知现场工作人员</li>
        </ul>
      </div>
    </div>


  </div>

</template>

<script>
export default {
  name: 'yqfk',
  mounted() {
    window.scrollTo(0, 0);
  }
}
</script>

<style>
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

.introduce>span {
  display: inline-block;
  margin-top: 10px;
  color: #898989;
  font-size: 15px;
}

.title {
  width: 300px;
  text-align: center;
  margin: 40px auto;
  font-size: 30px;
  font-weight: bold;
}

.small_img {
  width: 150px;
  height: 150px;

}

.middle_img {
  width: 200px;
  height: 200px;

}

.large_img {
  width: 400px;
  height: 400px;

}

ol>li {
  font-weight: bold;
  font-size:
}
</style>