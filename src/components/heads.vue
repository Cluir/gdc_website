<template>
  <!-- 头部 -->
  <div class="top">
    <div class="top_top">
      <!-- <img class="top_img" src="../assets/GDC2022.png" alt="" /> -->
      <ul class="top_ul">
        <li  @click="sy" :class="{'aa':index==a}" class="sye">首页</li>
        <li  @click="zz" :class="{'aa':index==b}">组织结构</li>
        <li  @click="hy" :class="{'aa':index==c}">会议征文</li>

        <li  @click="js" :class="{'aa':index==d}" style="width: 130px">计算几何四十年</li>
        <li  @click="rc" :class="{'aa':index==e}">会议日程</li>

        <li  @click="hq" :class="{'aa':index==f}">会前课程</li>
        <li  @click="ty" :class="{'aa':index==g}">特邀报告</li>
        <li  @click="ztlt" :class="{'aa':index==h}">专题论坛</li>
        <li  @click="zzqy" :class="{'aa':index==i}">赞助企业</li>
        <li  @click="jdjt" :class="{'aa':index==k}" style="width: 110px">酒店及交通</li>
        <li  @click="yqfk" :class="{'aa':index==l}">疫情防控</li>

      </ul>
      <div class="top_div">
        <span @click="chzc" :class="{'aa':index==j}"
          >参会注册 <b><img src="../assets/youjiantou.png" alt="" /></b
        ></span>
      </div>

    </div>
    <img src="../assets/toumingtiao.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "heads",
  data() {
    return {
      index:1,
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 0,
      g: 0,
      h: 0,
      i: 0,
      j: 0,
      k: 0,
      l: 0,
      arr:[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
    };
  },
  mounted(){
    this.a = 1
    // this.arr[0] = 1
    // console.log(this.arr);
    
  },
  methods: {
    hrefClick() {
       window.open("http://www.smartchair.org/GDC2022");
    },
    sy() {
      if(this.a == 0) this.a = 1
      this.b = 0; this.c = 0; this.d = 0; this.e = 0; this.f = 0;
      this.g = 0; this.h = 0; this.i = 0; this.k = 0; this.l = 0;
      this.$router.push("/subject");
    },
    zz() {
      this.a = 0
      this.b = 1; this.c = 0; this.d = 0; this.e = 0; this.f = 0;
      this.g = 0; this.h = 0; this.i = 0; this.k = 0; this.l = 0;
      //  for(let i of this.arr){
      //   console.log(i);
      //   if(this.arr[1]) this.arr[1] = 1
      //   else this.arr = -1
      // }
      // console.log(this.arr);
      this.$router.push("/zz");
    },
    chzc() {
      this.a = 0
      this.b = 0; this.c = 0; this.d = 0; this.e = 0; this.f = 0;
      this.g = 0; this.h = 0; this.i = 0; this.j = 1; this.k = 0; this.l = 0;
      this.$router.push("/chzc");
    },
    hy() {
      this.a = 0
      this.b = 0; this.c = 1; this.d = 0; this.e = 0; this.f = 0;
      this.g = 0; this.h = 0; this.i = 0; this.k = 0; this.l = 0;
      this.$router.push("/hy");
    },
    js() {
      this.a = 0
      this.b = 0; this.c = 0; this.d = 1; this.e = 0; this.f = 0;
      this.g = 0; this.h = 0; this.i = 0; this.k = 0; this.l = 0;
      this.$router.push("/js");
    },
    rc() {
       this.a = 0
       this.b = 0; this.c = 0; this.d = 0; this.e = 1; this.f = 0;
       this.g = 0; this.h = 0; this.i = 0; this.k = 0; this.l = 0;
       this.$router.push("/rc"); 
    },
    hq() {
       this.a = 0
       this.b = 0; this.c = 0; this.d = 0; this.e = 0; this.f = 1;
       this.g = 0; this.h = 0; this.i = 0; this.k = 0; this.l = 0;
       this.$router.push("/hq");
    },
    ty() {
       this.a = 0
       this.b = 0; this.c = 0; this.d = 0; this.e = 0; this.f = 0;
       this.g = 1; this.h = 0; this.i = 0; this.k = 0; this.l = 0;
       this.$router.push("/ty");
    },
    ztlt() {
       this.a = 0
       this.b = 0; this.c = 0; this.d = 0; this.e = 0; this.f = 0;
       this.g = 0; this.h = 1; this.i = 0; this.k = 0; this.l = 0;
       this.$router.push("/ztlt");
    },
    zzqy() {
       this.a = 0
       this.b = 0; this.c = 0; this.d = 0; this.e = 0; this.f = 0;
       this.g = 0; this.h = 0; this.i = 1; this.k = 0; this.l = 0;
       this.$router.push("/zzqy"); 
    },
    jdjt() {
       this.a = 0
       this.b = 0; this.c = 0; this.d = 0; this.e = 0; this.f = 0;
       this.g = 0; this.h = 0; this.i = 0; this.k = 1; this.l = 0;
       this.$router.push("/jdjt"); 
    },    
    yqfk() {
       this.a = 0
       this.b = 0; this.c = 0; this.d = 0; this.e = 0; this.f = 0;
       this.g = 0; this.h = 0; this.i = 0; this.k = 0; this.l = 1;
       this.$router.push("/yqfk"); 
    },


  },
};
</script>

<style scoped>
.aa{
  background: url(../assets/yuanjiao.png) no-repeat 0% 45%/100% 60%;
}
.top_ul li:hover {
  cursor: pointer;
  /* background: url(../assets/圆角矩形\ 2.png) no-repeat 0% 45%/100% 60%; */
}
.top {
  height: 70px;
  width: 100%;
  /* background-color: #3e70b5; */
  /* opacity: 0.5; */
  position: relative;
  z-index: 1;
}
.top > img {
  height: 70px;
  width: 100%;
}
.top > img {
  position: absolute;
  z-index: 2;
}
.top_top {
  position: absolute;
  left: 11%;
  z-index: 5;
}
.top_img {
  float: left;
  margin-top: 5px;
  margin-right: 500px;
  float: left;
}
.top_ul {
  float: left;
}

.top_ul li {
  list-style: none;
  display: inline-block;
  color: white;
  font-size: 18px;
  font-weight: bold;
  line-height: 65px;
  margin-left: 10px;
  text-align: center;

  width: 80px;
}


.top_div img {
  width: 25px;
  height: 25px;
  vertical-align: middle;
  margin-top: -5px;
  margin-left: -8px;
}

.top_div {
  float: right;
  width: 120px;
  line-height: 39px;
  padding-left: 12px;
  padding-top: 1px;
  color: #2b307b;
  background-color: white;
  border-radius: 50px;
  margin-top: 12px;
  margin-left: 10px;
  box-sizing: border-box;
  font-weight: 600;
  cursor: pointer;
}
.top_div b {
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: wheat;
  box-sizing: border-box;
  line-height: 31px;
  padding-left: 10px;
}
/* 兼容移动端 */
@media screen and (max-width:500px) {
 
.top_ul li:hover {
  cursor: pointer;
  /* background: url(../assets/圆角矩形\ 2.png) no-repeat 0% 45%/100% 60%; */
}
.top {
  height: 15vw;
  width: 100%;
  /* background-color: #3e70b5; */
  /* opacity: 0.5; */
  position: relative;
  z-index: 1;
  
}
.top > img {
  height: 15vw;
  width: 100%;
}
.top > img {
  position: absolute;
  z-index: 2;
}
.top_top {
  position: absolute;
  left: 0;
  z-index: 5;
  width: 100%;
  display: flex;
  height: 100%;
}
.top_img {
 width: 8%;
margin-top: 4vw;
height: 34%;
}
.top_ul {
width: 75%;
 display: flex;
}
.top_ul li {
  list-style: none;
 
  color: white;
  font-size: 1.5vw;
 margin-top: 3vw;
  line-height:3vw;
  margin-left: 1vw;
}
.top_ul .sye{
line-height: 7vw;
}

 .top_ul .aa{
  background: url(../assets/yuanjiao.png) no-repeat 0% 3%/100% 60%;
  
}

.top_div img {
  width: 6vw;
  height: 4vw;
  vertical-align: middle;
  margin-top: -12px;
  margin-left: -6px;
}

.top_div {
font-size: 3vw;
  line-height: 4vw;
 padding: 2vw;
  color: #2b307b;
  background-color: white;
  border-radius:6vw;
  margin-top: 1.5vw;
  box-sizing: border-box;
  height: 80%;
  cursor: pointer;
}
.top_div b {
  display: inline-block;
  width: 8vw;
  height:5vw;
  border-radius: 20%;
  background-color: wheat;
  box-sizing: border-box;
 margin-left: 2vw;
}
}
</style>