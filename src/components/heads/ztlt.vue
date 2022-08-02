<template>

  <div class="g-rep">

    <div class="introduce">
      <h3>主题论坛</h3>
      <!-- <span>第十四届全国几何设计与计算学术会议</span> -->
    </div>

    <div class="content-main">
      <div class="formu-list" style="font-size: 23px; margin-bottom: 20px;">
        <h2>论坛列表</h2>
        <ul>
          <li><b><a href="#panel_1">国产CAD几何引擎</a></b></li>
          <li><b><a href="#panel_2">数字孪生</a></b></li>
          <li><b><a href="#panel_3">开源工业软件</a></b></li>
          <li><b><a href="#panel_4">深度几何学习</a></b></li>
          <li><b><a href="#panel_5">增材制造</a></b></li>
        </ul>
      </div>

      <div id="panel_1"></div>
      <div class="forum">
        <h2>国产CAD几何引擎</h2>
        <p><b>论坛简介</b></p>
        <p style="text-indent: 2em; margin-top: 5px;">
          几何引擎是CAD软件的核心模块。我国的CAD软件在系统稳定性和生态完整性上与国际先进水平尚有一定差距，特别是在自主产权的CAD几何引擎上呈现卡脖子和研究断档态势，链条式地影响到航空、航天、国防等核心制造领域。近年来，国家重启了对CAD几何引擎和CAD软件研发的战略部署，本论坛将邀请到我国CAD学术和工业界的资深人士，共谈国产CAD几何引擎的过去、现状和未来。
        </p>

        <!--
        <p class="teacher"><b>论坛召集人</b></p>
        <table style="width: 90%; margin: auto">
          <tbody>
            <tr>
              <td style="width: 75%; padding-right: 20px">
                <p style="text-align: justify"><b>贾晓红</b>，
                  中国科学院数学与系统科学研究院研究员，中科院数学机械化中心副主任、中国数学会计算机数学专委会副主任委员。
                  主持国家重点研发计划“自由曲线曲面设计与求交理论与方法”青年科学家项目、国家基金委优秀青年基金项目。
                  曾获第五届中国工业与应用数学学会应用数学青年科技奖、第二届全国“几何设计与计算”青年学者奖、入选中科院数学院陈景润未来之星、首届海外优秀青年人才计划等。
                  研究方向为曲面求交、碰撞检测、奇点计算、拓扑判定等。</p>
                邮箱：<span style="color:rgb(52, 152, 221)">xhjia@amss.ac.cn</span>
              </td>
              <td style="width: 25%; vertical-align: top">
                <img src="../../assets/ztlt/jxh.png" style="display: block; margin: 10px; width: 80%"
                  onclick="window.open('http://www.mmrc.iss.ac.cn/~xhjia/')" title="查看主页">
              </td>
            </tr>
          </tbody>
        </table>
        <hr style="width: 95%; margin: auto">

        <p class="teacher"><b>论坛讲者1</b></p>
        <table style="width: 90%; margin: auto">
          <tbody>
            <tr>
              <td style="width: 75%; padding-right: 20px">
                <p style="text-align: justify"><b>陈发来</b>，
                  中国科学技术大学数学科学学院教授、博导。曾担任中国工业应用数学学会常务理事（2004-2016），中国工业应用数学学会几何设计与计算专委会主任（2015-1019），中国计算数学学会常务理事（2004—2012），安徽省数学会秘书长（2003-2019），国务院学位委员会数学学科评审组成员（2009-2019），教育部高等学校数学与统
                  计学教学指导委员会委员（2006-2022），第十二、十三届国家自然科学基金委员会数学学科评委，《Computer Aided Geometric Design》,《Visual
                  Computer》，《Numerical Mathematics: Theory, Methods and
                  Applications》，《计算机辅助设计与图形学学报》编委。曾于1997年，2001年两次获国家级教学成果二等奖。2001年获教育部高校青年教师奖，
                  2002年获国家“杰出青年”科学基金资助，2003年获宝钢优秀教师奖特等奖，2008年获中国计算机图形学杰出奖， 2009年获冯康科学计算奖，2010年获全国百篇优博论文指导教师奖，
                  2016年获中组部“万人计划”教学名师。
                  研究方向为计算机辅助几何设计与几何建模。近来感兴趣的研究课题包括：曲面隐式化的动曲面方法，曲面求交，T网格上的样条曲面，等几何分析及其在拓扑优化中的应用，基于稀疏优化的几何处理等。
                </p>
                邮箱：<span style="color:rgb(52, 152, 221)">chenfl@ustc.edu.cn</span>
              </td>
              <td style="width: 25%; vertical-align: top">
                <img src="../../assets/ztlt/cfl.jpg" style="display: block; margin: 10px; width: 80%"
                  onclick="window.open('http://staff.ustc.edu.cn/~chenfl/ ')" title="查看主页">
              </td>
            </tr>
          </tbody>
        </table>
        <hr style="width: 95%; margin: auto">

        <p class="teacher"><b>论坛讲者2</b></p>
        <table style="width: 90%; margin: auto">
          <tbody>
            <tr>
              <td style="width: 75%; padding-right: 20px">
                <p style="text-align: justify"><b>李华</b>，中科院计算所研究员，中国科学院大学岗位教授。1982.2毕业于北京航空学院，1986.2
                  在北航获硕士学位，唐荣锡指导；1989.3在中科院计算所获博士学位，刘慎权指导；随后留学德国费劳恩霍菲学会图形与数据处理研究所，Encarnacao指导。1991.4开始在计算所从事CAD、图形图像及可视化研究，1994.10研究员；曾任中科院计算所CAD开放实验室主任，CCF
                  CAD与图形学专委会主任，获得过国家科技进步奖；参与过国产飞机的外形设计；《CAD与图形学学报》副主编；CSIAM 终身会员。
                </p>
                邮箱：<span style="color:rgb(52, 152, 221)">lihua@ict.ac.cn </span>
              </td>
              <td style="width: 25%; vertical-align: top">
                <img src="../../assets/ztlt/lh.jpg" style="display: block; margin: 10px; width: 80%"
                  onclick="window.open('https://people.ucas.ac.cn/http:/people.ucas.ac.cn/~_lihua')" title="查看主页">
              </td>
            </tr>
          </tbody>
        </table>
        <hr style="width: 95%; margin: auto">

        <p class="teacher"><b>论坛讲者3</b></p>
        <table style="width: 90%; margin: auto">
          <tbody>
            <tr>
              <td style="width: 75%; padding-right: 20px">
                <p style="text-align: justify">
                  <b>刘继红</b>，北京航空航天大学机械工程及自动化学院教授、博士生导师。1996年取得日本东京都立大学机械工程工学博士学位。
                  1996-2004年任职于华中科技大学机械科学与工程学院，曾担任国家CAD支撑软件工程技术研究中心（武汉）副主任
                  主要从事复杂产品数字化设计制造、现代设计理论与方法、知识管理与知识工程、智能制造与工业互联网等方向的研究教学工作。
                  中国机械工程学会机械工业自动化分会副主任委员，《计算机辅助设计与图形学学报》副主编，国家重点研发计划网络协同制造和智能工厂重点专项总体专家组成员。
                </p>
                邮箱：<span style="color:rgb(52, 152, 221)">ryukeiko@buaa.edu.cn</span>
              </td>
              <td style="width: 25%; vertical-align: top">
                <img src="../../assets/ztlt/ljh.jpg" style="display: block; margin: 10px; width: 80%">
              </td>
            </tr>
          </tbody>
        </table>
        <hr style="width: 95%; margin: auto">

        <p class="teacher"><b>论坛讲者4</b></p>
        <table style="width: 90%; margin: auto">
          <tbody>
            <tr>
              <td style="width: 75%; padding-right: 20px">
                <p style="text-align: justify">
                  <b>汪国平</b>，北京大学博雅特聘教授，从事计算机图形学和虚拟仿真等研究，1997年6月获得复旦大学理学博士学位，2002年8月受聘北京大学信息学院教授，现任北京大学北京市虚拟仿真与可视化工程中心主任，北大图形与交互技术实验室主任。主持研发了特征驱动的三维离散造型设计与优化系统PUM、物理仿真引擎Physika、分布式虚拟仿真支撑平台ViWo、基于图像的三维重建系统i23D、虚实融合系统VVF等，在国防军事、工程设计和数字城市等行业领域有良好应用。曾获教育部科技进步一等奖、中国图像图形学会科技进步奖等，2009年获得国家杰出青年基金资助，2010年获国务院政府特殊津贴，2020年获得中国计算机图形学杰出奖，发表学术论文200余篇，国家发明专利50余项，多项专利获得商业转让。现任中国计算机学会 CADCG专委会主任，CSIAM GDC专委会主任、中国指挥与控制学会虚拟现实与人机交互专委会主任，中国图象图形学会副理事长，中国图学会常务理事，中国计算机学会理事，军委科技委智能领域专家，军委科技委深圳快响小组成员、装发陆军智能应用专业组专家、国家信息标准化委员会专家委员，国家信息标准化委员会SC24分委会副主任委员，图学学报主编和VR&IH副主编等。

                </p>
                邮箱：<span style="color:rgb(52, 152, 221)">wgp@graphics.pku.edu.cn</span>
              </td>
              <td style="width: 25%; vertical-align: top">
                <img src="../../assets/ztlt/wgp.jpg" style="display: block; margin: 10px; width: 80%">
              </td>
            </tr>
          </tbody>
        </table>
        <hr style="width: 95%; margin: auto">


        <p class="teacher"><b>论坛讲者5</b></p>
        <table style="width: 90%; margin: auto">
          <tbody>
            <tr>
              <td style="width: 75%; padding-right: 20px">
                <p style="text-align: justify">
                  <b>冯结青</b>，浙江大学CAD&CG国家重点实验室教授，博士生导师。1992年毕业于国防科技大学系统工程与应用数学系，获工学学士学位；1997年毕业于浙江大学应用数学系，获计算几何与图形学博士学位。1997～1999年先后在法国斯特拉斯堡大学计算机科学系和香港中文大学计算机科学与工程学系从事访问研究。1999.2年加入浙江大学CAD&CG国家重点实验室，2003.12晋升研究员，2005.1遴选为博士生导师，2011.1转聘为教授。冯结青一直从事计算机图形学和计算机视觉的基础与应用基础研究，研究工作曾获2009年教育部自然科学奖一等奖、CASA2014和CAD/Graphics2019大会最佳论文奖，指导研究生先后四次获CCF
                  CAD/CG优秀学生论文奖。2010年入选教育部“新世纪优秀人才支持计划”。目前担任《图学学报》副主编、《计算机辅助设计与图形学学报》编委、《Visual Computing for Industry,
                  Biomedicine and
                  Art》编委、《计算机科学》编委、CSIAM第四、五届几何设计与计算专业委员会副主任、CCF第九届计算机辅助设计与图形学专业委员会副主任、中国图象图形学学会第七、八届理事会理事、中国图学会第八届理事会理事等。
                </p>
                邮箱：<span style="color:rgb(52, 152, 221)">jqfeng@cad.zju.edu.cn</span>
              </td>
              <td style="width: 25%; vertical-align: top">
                <img src="../../assets/ztlt/fjq.jpg" style="display: block; margin: 10px; width: 80%"
                  onclick="window.open('http://www.cad.zju.edu.cn/home/jqfeng/')" title="查看主页">
              </td>
            </tr>
          </tbody>
        </table>
        <hr style="width: 95%; margin: auto">

        <p class="teacher"><b>论坛讲者6</b></p>
        <table style="width: 90%; margin: auto">
          <tbody>
            <tr>
              <td style="width: 75%; padding-right: 20px">
                <p style="text-align: justify">
                  <b>梅敬成</b>，法国国立工艺学院机械工程博士，归国前曾就职法国马特拉资讯、达索系统等世界知名CAD软件公司，参与Euclid、CATIA、OpenCasCade等产品和内核的研发。
                  2011年初回国全职加入山东山大华天软件有限公司，担任首席技术官, 带领团队研发具有自主知识产权的国产三维CAD软件SINOVATION、三维模型轻量化浏览器SView。
                  2019年在华天软件的大力支持下，创办山东华云三维科技有限公司，出任总经理，致力于国内首款、完全自主的基于云架构的三位CAD平台CrownCAD的研发和应用推广。
                </p>
                邮箱：<span style="color:rgb(52, 152, 221)">jingcheng_mei@163.com</span>
              </td>
              <td style="width: 25%; vertical-align: top">
                <img src="../../assets/ztlt/mjc.jpg" style="display: block; margin: 10px; width: 80%">
              </td>
            </tr>
          </tbody>
        </table>
        <hr style="width: 95%; margin: auto">

        <p class="teacher"><b>论坛讲者7</b></p>
        <table style="width: 90%; margin: auto">
          <tbody>
            <tr>
              <td style="width: 75%; padding-right: 20px">
                <p style="text-align: justify">
                  <b>陈志杨</b>，杭州新迪数字工程系统有限公司CTO，长期从事三维CAD软件研发，具有丰富CAD软件理论和开发实践经验。浙江大学机械工程学院博士、浙江大学计算机科学与技术学院博士后。中国图学会理事、中国图学会企业工作委员会副主任委员、浙江工业软件产业技术联盟副理事长、东南大学机械工程学院硕士生导师（校外）、全国信息技术标准化技术委员会云计算标准工作组（CCWG）技术专家。
                </p>
                邮箱：<span style="color:rgb(52, 152, 221)">chen.zhiyang@newdimchina.com</span>
              </td>
              <td style="width: 25%; vertical-align: top">
                <img src="../../assets/ztlt/czy.png" style="display: block; margin: 10px; width: 80%">
              </td>
            </tr>
          </tbody>
        </table>
        
        <hr style="width: 95%; margin: auto">
         -->
      </div>

      <div id="panel_2"></div>
      <div class="forum">

        <h2>数字孪生</h2>
        <p><b>论坛简介</b></p>
        <p style="text-indent: 2em; margin-top: 5px;">
          待更新...
        </p>

      </div>

      <div id="panel_3"></div>
      <div class="forum">
        <div id="panel_3"></div>
        <h2>开源工业软件</h2>
        <p><b>论坛简介</b></p>
        <p style="text-indent: 2em; margin-top: 5px;">
          “开源+软件”
          组合是实现专业领域软件技术腾飞的重要途径。开源工业软件及其商业发行版、商业解决方案，将成为提升工业发展质量和效益的基础工具。在当今的开源浪潮下，推进开源与工业软件充分融合，发挥庞大的开源社区的力量，聚众人之智、众人之力，完善工业软件产业链，对整个工业领域的发展起着重要作用。本论坛将邀请业内著名专家学者，对工业软件开源社区openCAX的建设进展进行介绍，分享结构拓扑优化、等几何分析、偏微分方程数值求解器、基于模型的系统工程、开源CAE框架等方向的最新软件成果。
        </p>
        <!--
        <p class="teacher"><b>论坛召集人</b></p>
        <table style="width: 90%; margin: auto">
          <tbody>
            <tr>
              <td style="width: 75%; padding-right: 20px">
                <p style="text-align: justify"><b>徐岗</b>
                ，杭州电子科技大学教授，博导，计算机学院副院长，CCF杰出会员，主要研究方向为几何计算、等几何分析及工业软件研发。2003年本科毕业于山东大学，2008年博士毕业于浙江大学，2008-2010年在法国INRIA
                  Sophia-Antipolis
                  从事博士后研究。曾获得全国首届“几何设计与计算”青年学者奖，陆增镛CAD&CG高科技奖二等奖，入选浙江省杰青、浙江省“万人计划”及浙江省首批高校创新领军人才。以负责人身份主持在研或完成国家自然科学基金项目7项（重点项目2项，面上项目3项），主持国家重点研发计划课题1项，中物院挑战计划专题项目1项，国家数值风洞重大工程课题1项，浙江省重点研发计划项目1项，并主持研发了面向天枢人工智能平台的深度学习可视化系统。
                </p>
                邮箱：<span style="color:rgb(52, 152, 221)">gxu@hdu.edu.cn</span>
              </td>
              <td style="width: 25%; vertical-align: top">
                <img src="../../assets/ztlt/xg.jpg" style="display: block; margin: 10px; width: 80%"
                  onclick="window.open('http://mypage.hdu.edu.cn/xugang')" title="查看主页">
              </td>
            </tr>
          </tbody>
        </table>
        <hr style="width: 95%; margin: auto">

        <p class="teacher"><b>论坛讲者1</b></p>
        <table style="width: 90%; margin: auto">
          <tbody>
            <tr>
              <td style="width: 75%; padding-right: 20px">
                <p style="text-align: justify"><b>郭旭</b>，
                大连理工大学工程力学系主任、openCAX工委会主席、工业装备结构分析国家重点实验室副主任、中国力学学会副理事长、计算力学专委会主任、国际结构与多学科优化学会执委、国务院力学学科评议组成员、教育部教学指导委员会（力学）成员、国家杰出青年基金获得者、长江学者特聘教授、自然科学基金委创新研究群体负责人。主要从事计算力学、结构优化和固体力学研究。曾2次获得国家自然科学二等奖、2次获得教育部自然科学一等奖。还曾获全国创新争先奖、中国青年科技奖、钱令希计算力学成就奖、亚洲结构与多学科优化学会成就奖等。
                </p>
              </td>
              <td style="width: 25%; vertical-align: top">
                <img src="../../assets/ztlt/gx.jpg" style="display: block; margin: 10px; width: 80%">
              </td>
            </tr>
          </tbody>
        </table>
        <hr style="width: 95%; margin: auto">

        <p class="teacher"><b>论坛讲者2</b></p>
        <table style="width: 90%; margin: auto">
          <tbody>
            <tr>
              <td style="width: 75%; padding-right: 20px">
                <p style="text-align: justify"><b>何均宏</b>
                  ，openCAX工委会联合主席，研究领域：开源三维几何建模、约束求解引擎、结构化网格生成和拓扑优化、等几何分析，开源工业软件平台体系架构设计、虚拟化容器网络、并行文件系统/图形数据库。openDACS开源EDA工具链联合发起人，芯片设计验证及测试综合、逻辑综合及高层综合、物理设计建模及物理验证、器件模型与参数提取、工艺模型及
                  PDK、印刷线路板（PCB）设计&验证 及后摩尔、AIenEDA、云平台等领域；2020-2023年CCFTCI委；2021-2025年CCFDAC执委；2022-2026年CCF CAD&CG执委。
                </p>
                邮箱：<span style="color:rgb(52, 152, 221)">hejunhong@openatom.org</span>
              </td>
              <td style="width: 25%; vertical-align: top">
                <img src="../../assets/ztlt/hjh.png" style="display: block; margin: 10px; width: 80%">
              </td>
            </tr>
          </tbody>
        </table>
        <hr style="width: 95%; margin: auto">

        <p class="teacher"><b>论坛讲者3</b></p>
        <table style="width: 90%; margin: auto">
          <tbody>
            <tr>
              <td style="width: 75%; padding-right: 20px">
                <p style="text-align: justify"><b>张文丰</b>，
                中组部国家特聘专家，重点研发计划首席科学家，92*数字化专家组专家。上海宇航系统工程研究所，科技委常委。新一代运载火箭总师助理，数字化副总师。自2018年人才引进回国后，牵引全所MBSE一体化研制模式转型工作，并在火箭、卫星和探月等型号开展试点实践。长期从事基于模型的系统工程、数字孪生、基于模型定义和复杂系统建模与仿真研究。主持和参与科技部重点研发计划、装发预研、国防基础科研、日产和丰田全车型等十余个项目，获得教育部自然科学一等奖、日产“行家风范奖”、本田“最佳合作伙伴奖”等奖项。
                </p>
              </td>
              <td style="width: 25%; vertical-align: top">
                <img src="../../assets/ztlt/zwf.jpg" style="display: block; margin: 10px; width: 80%">
              </td>
            </tr>
          </tbody>
        </table>
        <hr style="width: 95%; margin: auto">

        <p class="teacher"><b>论坛讲者4</b></p>
        <table style="width: 90%; margin: auto">
          <tbody>
            <tr>
              <td style="width: 75%; padding-right: 20px">
                <p style="text-align: justify"><b>崔涛</b>，
                  中国科学院数学与系统科学研究院研究员，博士生导师，入选“国家特支计划”青年拔尖人才，2018年荣获中国工业与应用数学第四届应用数学青年科技奖。担任中国工业与应用数学学会高性能计算与数学软件专业委员会副秘书长。主要从事大规模并行自适应算法设计及其数学理论分析、并行自适应软件研究，在集成电路EDA仿真算法与工具、并行自适应有限元软件平台等方面取得了一系列原创性成果。承担及参与国家重点研发计划项目、973计划项目、863计划项目及国家自然科学基金等，并完成多家应用单位的委托研究项目，取得显著应用实效。
                </p>
              </td>
              <td style="width: 25%; vertical-align: top">
                <img src="../../assets/ztlt/ct.jpg" style="display: block; margin: 10px; width: 80%">
              </td>
            </tr>
          </tbody>
        </table>
        <hr style="width: 95%; margin: auto">

        <p class="teacher"><b>论坛讲者5</b></p>
        <table style="width: 90%; margin: auto">
          <tbody>
            <tr>
              <td style="width: 75%; padding-right: 20px">
                <p style="text-align: justify"><b>王伟</b>，
                  北京航空航天大学机械工程及自动化学院副教授，于2001在北京航空航天大学飞行器制造工程专业获学士学位，2008年在北京航空航天大学航空宇航制造工程专业获博士学位。主要研究领域为计算机辅助几何设计、等几何分析、非结构化样条理论、工业软件核心技术等，主持并参与自然科学基金等国家级项目多项，发表学术论文40余篇，曾获中航工业集团科学技术奖一等（2014）、二等（2019）奖励，2020年获CCF计算机辅助设计与图形学专委图形开源软件提名奖。
                </p>
                邮箱：<span style="color:rgb(52, 152, 221)">jrrt@buaa.edu.cn</span>
              </td>
              <td style="width: 25%; vertical-align: top">
                <img src="../../assets/ztlt/ww.jpg" style="display: block; margin: 10px; width: 80%"
                  onclick="window.open('http://shi.buaa.edu.cn/publius')" title="查看主页">
              </td>
            </tr>
          </tbody>
        </table>
        <hr style="width: 95%; margin: auto">

        <p class="teacher"><b>论坛讲者6</b></p>
        <table style="width: 90%; margin: auto">
          <tbody>
            <tr>
              <td style="width: 75%; padding-right: 20px">
                <p style="text-align: justify"><b>唐滨</b>
                  ，哈尔滨工程大学副教授，硕士生导师，科学计算软件研发体系专家。主要从事自主工业仿真软件，大规模科学计算研发体系，开源工业仿真软件集成平台研究。累计申请专利5项，发表论文11篇（其中SCI收录5篇）。担任《计算机集成制造系统》理事会理事，中国力学学会产学研工作委员会委员，软件学报专刊特约编辑等。主持及参与国家级项目15项，涵盖科技部重点研发计划、工信部两机专项、科工局军工软件等重大专项。带领团队自主研发的FastCAE开源平台，致力于帮助国产工业仿真软件快速产品化，解决在该领域被国外卡脖子问题，已应用12个领域领域，服务国产CAE软件230余例，覆盖高校、研究所、企业等40余家单位。
                </p>
              </td>
              <td style="width: 25%; vertical-align: top">
                <img src="../../assets/ztlt/tb.png" style="display: block; margin: 10px; width: 80%">
              </td>
            </tr>
          </tbody>
        </table>
        <hr style="width: 95%; margin: auto">
        -->
      </div>


      <div id="panel_4"></div>
      <div class="forum">
        <h2>深度几何学习</h2>
        <p><b>论坛简介</b></p>
        <p style="text-indent: 2em; margin-top: 5px;">
          三维几何模型是描述三维空间内物体的表面或内部的数学表达，是计算机图形学的主要研究对象。几何数据的生成和处理是构建真实世界数字化三维表达的关键，是图形学的核心研究内容，在国防军事、智慧城市、智能制造、生活医疗、机器人等领域都有重大的应用需求。近些年来，随着人工智能技术的快速发展，同时伴随着大量三维数据的出现，给三维几何数据的生成和处理技术革新带来了机遇和挑战。围绕“深度几何学习”这一主题，本论坛邀请到学术界多位青年教师分享他们在几何配准、重建、表达、处理、分析与合成等方面的最新研究进展，并就其中的相关问题展开讨论。
        </p>

      </div>

      <div id="panel_5"></div>
      <div class="forum">

        <h2>增材制造</h2>
        <p><b>论坛简介</b></p>
        <p style="text-indent: 2em; margin-top: 5px;">
          增材制造是一种快速发展的新型制造技术，在高几何复杂度、多功能性需求的产品制造中具有显著优势。目前增材制造已在航空航天、医疗器械、个性化消费品等领域开展了初步应用并展现出广阔的前景。研究如何通过几何与拓扑结构的巧妙设计和精准制造，达成传统结构所不具备的优良物理性质，已成为多学科交叉的研究热点。本论坛邀请到来自数学、计算力学、机械科学与工程、计算机科学等多个领域从事增材制造相关研究的一线专家学者，就增材制造中的几何与拓扑优化、超材料设计等几何计算的最新研究进展和关键问题进行探讨。
        </p>

      </div>
      
    </div>

  </div>
</template>

<script>
export default {
    name:'ztlt'
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

.content-main{
    /* --main-color: #3498db;
    --minor-color: #1c1f88;
    --main-width: 1000px;
    --small-width: 760px;
    --border-color: #e8e8e8;
    --header-height: 80px; */
    color: var(--font-color);
    margin: 20px 0 0 0;
    padding: 10px 0 8px 0;
    font-size: 16px;

}

.forum{
  margin-top: 20px;
}
h2{
  margin-bottom: 10px;
}

.teacher{
  margin-top: 20px;
}
</style>