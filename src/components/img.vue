<template>
  <!-- 图片 -->
  <div class="bottimg">
    <!-- <div class="introduce">
      <h3>会议相关</h3>
      <span>相关信息</span>
    </div>
    <div class="g-rep tupian">
      <div class="a_url"  @click="click_jdyd">
        <div>
          <img src="../assets/index_14.png" alt=""/>
          <span>酒店预定</span>
        </div>
      </div>
      
      <div class="a_url"  @click="click_hyjt">
        <div>
          <img src="../assets/index_16.png" alt="" />
          <span>会议交通</span>
        </div>
      </div>

      <div class="a_url"  @click="click_yqfk">
      <div>
        <img src="../assets/index_18.png" alt="" />
        <span>疫情防控</span>
      </div>
      </div>
    </div> -->
  </div>
</template>

<script >
export default {
  name: "img",
  methods: {
    click_jdyd() {
      this.$router.push("/jdyd");
    },
    click_hyjt() {
      this.$router.push("/hyjt");
    },
    click_yqfk() {
      this.$router.push("/yqfk");
    }
  }
}
</script>

<style scoped>
.a_url{
  display: inline-block;
  cursor: pointer;
  /* margin */
}
.bottimg {
  margin-top: 145px;
}
.tupian img {
  width: 305px;
}
.a_url:nth-child(2) {
  margin: 0 17px;
}
.a_url > div {
  display: inline-block;
  position: relative;
}
.tupian span {
  position: absolute;
  top: 89px;
  left: 107px;
  font-size: 25px;
  color: white;
}
@media screen and (max-width:500px){
  .a_url{
  display: inline-block;
  cursor: pointer;
  /* margin */
}
.bottimg {
  margin-top: 25vw;
}
.introduce {
    width:100%;
    text-align: center;
    margin: auto;
    font-size:7vw;
}
.g-rep{
  width: 100%;
 display: flex;
 
}

.tupian img {
  width: 100%;
  height: 100%;
}
.a_url:nth-child(2) {
  margin: 0 2vw;
}
.a_url > div {
  display: inline-block;
  position: relative;
}
.tupian span {
  position: absolute;
  top: 7vw;
  left: 8vw;
  font-size: 4vw;
  color: white;
}
}
</style>