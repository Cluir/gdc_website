<template>
    <div class="g-rep">
        <div class="introduce">
            <h3>会议日程</h3>
            <!-- <span>第十四届全国几何设计与计算学术会议</span> -->
        </div>
        <table class="meeting_schedule">
            <tr>
                <th colspan="4">2022年8月19日 星期五 全天会议注册</th>
            </tr>
            <tr>
                <td style="text-align: center; width: 15%"><b>时间</b></td>
                <td style="text-align: center; width: 35%"><b>报告题目</b></td>
                <td style="text-align: center; width: 30%"><b>讲者</b></td>
                <td style="text-align: center; width: 10%"><b>主持人</b></td>
            </tr>
            <tr>
                <td rowspan="8">14:00—17:00 </td>
                <td rowspan="4" style="text-align: center">
                    <router-link to="/hq">会前课程1 计图入门与可视媒体生成编辑进阶</router-link>
                </td>
                <td rowspan="1" style="text-align: center">
                    李相利 清华大学
                </td>
                <td rowspan="4" style="text-align: center">
                    李曼祎 <br>山东大学

                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    杨国炜 清华大学
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    袁宇杰 中科院计算所
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    刘锋林 中科院计算所
                </td>
            </tr>
            <tr>
                <td rowspan="4" style="text-align: center">
                    <router-link to="/hq">会前课程2 网格生成</router-link>
                </td>
                <td rowspan="1" style="text-align: center">
                    庞宇飞 中国空气动力与发展中心
                </td>
                <td rowspan="4" style="text-align: center">

                    徐岗 <br>杭州电子科技大学
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    郑澎 中物院高性能数值模拟软件中心
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    雷娜 大连理工大学
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    徐岗 杭州电子科技大学
                </td>
            </tr>


        </table>
        <table class="meeting_schedule">
            <tr>
                <th colspan="4">2022年8月20日 星期六</th>
            </tr>
            <tr>
                <td style="text-align: center; width: 15%"><b>时间</b></td>
                <td style="text-align: center; width: 35%"><b>报告题目</b></td>
                <td style="text-align: center; width: 30%"><b>讲者/主持人</b></td>
            </tr>
            <tr>
                <td>8:30—9:00</td>
                <td colspan="3" style="text-align: center">开幕式</td>
            </tr>
            <tr>
                <td>9:00—10:00</td>
                <td style="text-align: center">
                    <router-link to="/ty">特邀报告1：神经隐式三维重建与绘制技术 </router-link>
                </td>
                <td style="text-align: center">
                    鲍虎军 浙江大学
                </td>
            </tr>
            <tr>
                <td rowspan="2">10:20—12:00</td>
                <td rowspan="2" colspan="1" style="text-align: center">全国计算几何协作组四十周年暨苏步青先生诞辰120周年纪念特别论坛</td>
                <td style="text-align: center">
                    胡事民 清华大学
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    吕琳 山东大学
                </td>
            </tr>
            <tr>
                <td>14:00—16:30</td>
                <td colspan="1" style="text-align: center">学科发展战略研讨会</td>
                <td rowspan="1" style="text-align: center">
                    汪国平 北京大学

                </td>
            </tr>
            <tr>
                <td>16:50—17:20</td>
                <td colspan="2" style="text-align: center">论文快放1</td>

            </tr>
            <tr>
                <td>17:20—18:00</td>
                <td colspan="2" style="text-align: center">论文交流1</td>

            </tr>
            <tr>
                <td>18:00—20:00</td>
                <td colspan="2" style="text-align: center">晚宴</td>
            </tr>
            <tr>
                <td>20:30—21:30</td>
                <td colspan="2" style="text-align: center">专委会会议</td>
            </tr>
        </table>
        <table class="meeting_schedule">
            <tr>
                <th colspan="4">2022年8月21日 星期日</th>
            </tr>
            <tr>
                <td style="text-align: center; width: 15%"><b>时间</b></td>
                <td style="text-align: center; width: 35%"><b>报告题目</b></td>
                <td style="text-align: center; width: 30%"><b>讲者</b></td>
                <td style="text-align: center; width: 10%"><b>主持人</b></td>
            </tr>
            <tr>
                <td>8:30—9:30</td>
                <td style="text-align: center">
                    <router-link to="/ty">特邀报告2：数字几何的获取、计算与理解 </router-link> &nbsp; &nbsp;
                </td>
                <td colspan="2" style="text-align: center">
                    北京大学 陈宝权
                </td>
            </tr>
            <tr>
                <td rowspan="12">9:50—11.30</td>
                <td rowspan="7" style="text-align: center">
                    <router-link to="/ztlt">专题论坛1 国产CAD几何引擎</router-link>
                </td>
                <td style="text-align: center">
                    陈发来 中国科学技术大学
                </td>
                <td rowspan="7" style="text-align: center">
                    贾晓红 <br>中科院数学与系统科学研究院
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    李华 中国科学院计算技术研究所
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    刘继红 北京航空航天大学
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    汪国平 北京大学
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    冯结青 浙江大学
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    梅敬成 华云三维科技有限公司
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    银鸽 广州中望龙腾软件股份有限公司
                </td>
            </tr>
            <tr>

                <td rowspan="5" style="text-align: center">
                    <router-link to="/ztlt">专题论坛2 数字孪生</router-link>
                </td>
                <td style="text-align: center">
                    徐凯 国防科技大学
                </td>
                <td rowspan="5" style="text-align: center">
                    徐凯 <br>国防科技大学
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    汪俊 南京航空航天大学
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    刘斌 山东大学
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    贾金原 同济大学
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    刘红涛 北京圜晖科技有限公司
                </td>
            </tr>
            <tr>
                <td>11:30—12:00</td>
                <td colspan="3" style="text-align: center">论文快放2</td>
            </tr>
            <tr>
                <td>14:00—15:00</td>
                <td style="text-align: center">
                    <router-link to="/ty">特邀报告3：数控加工最优路径规划 </router-link>
                </td>
                <td colspan="2" style="text-align: center">
                    高小山 中科院数学与系统科学研究院
                </td>
            </tr>
            <tr>
                <td>15:00—15:40</td>
                <td colspan="3" style="text-align: center">论文交流2</td>
            </tr>
            <tr>
                <td rowspan="10">15:40—17:20</td>
                <td rowspan="6" style="text-align: center">
                    <router-link to="/ztlt">专题论坛3 开源工业软件</router-link>
                </td>
                <td style="text-align: center">
                    郭旭 大连理工大学
                </td>
                <td rowspan="6" style="text-align: center">
                    徐岗 <br>杭州电子科技大学
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    何均宏 openCAX
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    张文丰 航天八院
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    崔涛 中科院数学与系统科学研究院
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    王伟 北京航空航天大学
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    唐滨 哈尔滨工程大学
                </td>
            </tr>

            <tr>
                <td rowspan="4" style="text-align: center">
                    <router-link to="/ztlt">专题论坛4 深度几何学习</router-link>
                </td>
                <td style="text-align: center">

                    李昌健 英国爱丁堡大学
                </td>
                <td rowspan="4" style="text-align: center">
                    胡瑞珍 <br>深圳大学
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    李曼祎 山东大学
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    李贤芝 华中科技大学
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    张举勇 中国科学技术大学
                </td>
            </tr>
            <tr>
                <td rowspan="6">19:30—21:00</td>
                <td colspan="1" rowspan="6" style="text-align: center">GDC青年学者之夜</td>
                <td rowspan="1" style="text-align: center">
                    姚贺源 北京大学
                </td>
                <td rowspan="6" style="text-align: center">
                    辛士庆 山东大学
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    张博闻 西安交通大学
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    郭俊甫 中国科学技术大学
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    刘亦林 深圳大学
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    余奇晋 国防科技大学
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    徐瑞 山东大学
                </td>
            </tr>
        </table>
        <table class="meeting_schedule">
            <tr>
                <th colspan="4">2022年8月22日 星期一</th>
            </tr>
            <tr>
                <td style="text-align: center; width: 15%"><b>时间</b></td>
                <td style="text-align: center; width: 35%"><b>报告题目</b></td>
                <td style="text-align: center; width: 30%"><b>讲者</b></td>
                <td style="text-align: center; width: 10%"><b>主持人</b></td>
            </tr>
            <tr>
                <td rowspan="5">8:30—10:00</td>
                <td rowspan="5" colspan="1" style="text-align: center">产业特别论坛 </td>
                <td rowspan="1" style="text-align: center">
                    金小刚 浙江大学
                </td>
                <td rowspan="5" style="text-align: center">
                    赵宇波 <br>山东产业技术研究院(青岛)
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    孙伟 中山大学
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    刘红涛 北京圜晖科技有限公司
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    银鸽 广州中望龙腾软件股份有限公司
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    张晓武 浙江霖研精密科技有限公司
                </td>
            </tr>
            <tr>
                <td rowspan="5">10:10—11:50</td>
                <td rowspan="5" style="text-align: center">
                    <router-link to="/ztlt">专题论坛5 增材制造</router-link>
                </td>
                <td style="text-align: center">

                    李好 华中科技大学
                </td>
                <td rowspan="5" style="text-align: center">
                    吕琳 山东大学
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    刘继凯 山东大学
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    王伟明 大连理工大学
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    熊异 南方科技大学
                </td>
            </tr>
            <tr>
                <td rowspan="1" style="text-align: center">
                    邹强 浙江大学
                </td>
            </tr>
            <tr>
                <td>11:50—12:00</td>
                <td colspan="3" style="text-align: center">闭幕式</td>
            </tr>
        </table>

    </div>
</template>

<script>
export default {
    name: 'rc'
}
</script>

<style>
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

.meeting_schedule {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

.meeting_schedule td,
.meeting_schedule th {
    border: 1px solid #ddd;
    padding: 8px;
}

.meeting_schedule tr:nth-child(even) {
    background-color: #f2f2f2;
}

.meeting_schedule tr:hover {
    background-color: #ddd;
}

.meeting_schedule th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #2E4D8E;
    color: white;
    text-align: center;
}
</style>