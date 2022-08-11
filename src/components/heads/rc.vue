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
                <td style="text-align: center; width: 40%"><b>报告题目</b></td>
                <td style="text-align: center; width: 25%"><b>讲者</b></td>
                <td style="text-align: center; width: 10%"><b>主持人</b></td>
            </tr>
            <tr>
                <td rowspan="2">14:00—17:00 </td>
                <td style="text-align: center">
                    <router-link to="/hq">会前课程1 计图框架入门与进阶</router-link>
                </td>
                <td rowspan="2" style="text-align: center">
                    庞宇飞 郑澎 雷娜 徐岗
                </td>
                <td rowspan="2" style="text-align: center">
                    徐岗
                </td>
            </tr>
            <tr>
                <td style="text-align: center">
                    <router-link to="/hq">会前课程2 网格生成</router-link>
                </td>
            </tr>

        </table>
        <table class="meeting_schedule">
            <tr>
                <th colspan="4">2022年8月20日 星期六</th>
            </tr>
            <tr>
                <td style="text-align: center; width: 15%"><b>时间</b></td>
                <td style="text-align: center; width: 40%"><b>报告题目</b></td>
                <td style="text-align: center; width: 25%"><b>讲者</b></td>
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
                    浙江大学 鲍虎军
                </td>
            </tr>
            <tr>
                <td>10:20—12:00</td>
                <td colspan="2" style="text-align: center">全国计算几何协作组四十周年暨苏步青先生诞辰120周年纪念特别论坛</td>

            </tr>

            <tr>
                <td>14:00—16:30</td>
                <td colspan="2" style="text-align: center">学科发展战略研讨会</td>

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
                <td style="text-align: center; width: 40%"><b>报告题目</b></td>
                <td style="text-align: center; width: 25%"><b>讲者</b></td>
                <td style="text-align: center; width: 10%"><b>主持人</b></td>
            </tr>
            <tr>
                <td>8:30—9:30</td>
                <td style="text-align: center">
                    <router-link to="/ty">特邀报告2 </router-link> &nbsp; &nbsp;
                </td>
                <td colspan="2" style="text-align: center">
                    北京大学 陈宝权
                </td>
            </tr>
            <tr>
                <td rowspan="2">9:50—11.30</td>
                <td style="text-align: center">
                    <router-link to="/ztlt">专题论坛1 国产CAD几何引擎</router-link>
                </td>
                <td style="text-align: center">

                    陈发来 李华
                    刘继红 汪国平 冯结青 梅敬成 银鸽
                </td>
                <td style="text-align: center">
                    贾晓红
                </td>
            </tr>
            <tr>

                <td style="text-align: center">
                    <router-link to="/ztlt">专题论坛2 数字孪生</router-link>
                </td>
                <td style="text-align: center">
                    徐凯 汪俊
                    刘斌 贾金原
                    刘红涛
                </td>
                <td style="text-align: center">
                    徐凯
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
                    中国科学院 高小山
                </td>
            </tr>
            <tr>
                <td>15:00—15:40</td>
                <td colspan="3" style="text-align: center">论文交流2</td>
            </tr>
            <tr>
                <td rowspan="2">15:40—17:20</td>
                <td style="text-align: center">
                    <router-link to="/ztlt">专题论坛3 开源工业软件</router-link>
                </td>
                <td style="text-align: center">
                    郭旭
                    何均宏
                    张文丰 崔涛 王伟
                    唐滨
                </td>
                <td style="text-align: center">
                    徐岗
                </td>
            </tr>


            <tr>
                <td style="text-align: center">
                    <router-link to="/ztlt">专题论坛4 深度几何学习</router-link>
                </td>
                <td style="text-align: center">

                    李昌健
                    李曼祎
                    李贤芝
                    张举勇
                </td>
                <td style="text-align: center">
                    胡瑞珍
                </td>
            </tr>
            <tr>
                <td>19:30—21:00</td>
                <td colspan="3" style="text-align: center">GDC青年学者之夜</td>
            </tr>

        </table>
        <table class="meeting_schedule">
            <tr>
                <th colspan="4">2022年8月22日 星期一</th>
            </tr>
            <tr>
                <td style="text-align: center; width: 15%"><b>时间</b></td>
                <td style="text-align: center; width: 40%"><b>报告题目</b></td>
                <td style="text-align: center; width: 25%"><b>讲者</b></td>
                <td style="text-align: center; width: 10%"><b>主持人</b></td>
            </tr>
            <tr>
                <td>8:30—10:00</td>
                <td colspan="3" style="text-align: center">产业特别论坛 </td>
            </tr>
            <tr>
                <td>10:10—11:50</td>
                <td style="text-align: center">
                    <router-link to="/ztlt">专题论坛5 增材制造</router-link>
                </td>
                <td style="text-align: center">

                    李好 刘继凯 王伟明 熊异 邹强
                </td>
                <td style="text-align: center">
                    吕琳
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