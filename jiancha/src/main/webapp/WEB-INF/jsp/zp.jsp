<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
<link href="/resource/style/style.css" rel=stylesheet type="text/css" />
<style type="text/css">
   a,img,li,ul{margin:0px;padding:0px;list-style:none;}
   li.lyul{float:right;margin-right:50px;}
   #one{font-size:22px;}
   #t1{text-align:right;}
   tr{width:120px;height:100px;}
   #t2{width:100%;height:80%;}

</style>
</head>
<!--[if lte IE 6]> 
<script type="text/javascript" src="/resource/js/PNG.js"></script> 
<script> 
PNG.fix('*'); 
</script> 
<![endif]-->
<body>
<div class="content">

<div class="head">
<div class="head_1">
<div class="logo"><img src="/resource/images/logo.jpg" /></div>
<div class="tel"><img src="/resource/images/head_tel.jpg" /></div>
</div>
<div class="nav">
<div class="nav_1">
<ul>
<li><a href="/index">学院首页</a></li>
<li><img src="/resource/images/menu_line.jpg" /></li>
<li><a href="/xueyuan">学院概况</a></li>
<li><img src="/resource/images/menu_line.jpg" /></li>
<li><a href="/zhaokao">招考信息</a></li>
<li><img src="/resource/images/menu_line.jpg" /></li>
<li><a href="/baoming/add">在线报名</a></li>
<li><img src="/resource/images/menu_line.jpg" /></li>
<li><a href="/chaxun">报名查询</a></li>
<li><img src="/resource/images/menu_line.jpg" /></li>
<li><a href="/xinwen">学院新闻</a></li>
<li><img src="/resource/images/menu_line.jpg" /></li>
<li><a href="/liuyan">留言咨询</a></li>
<li><img src="/resource/images/menu_line.jpg" /></li>
<Li><a href="/lianxiwomen">联系我们</a></Li>
</ul>
</div>
</div>

<div class="banner">
<div class="banner_1">
<script type="text/javascript" src="/resource/js/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="/resource/js/index.js"></script>
      <div class="mainbanner">
        <div class="mainbanner_window">
          <ul id="slideContainer">
            <li><a href="#"><img src="/resource/images/banner1.jpg" width="1600" /></a></li>
            <li><a href="#"><img src="/resource/images/banner2.jpg" width="1600" /></a></li>
            <li><a href="#"><img src="/resource/images/banner3.jpg" width="1600"/></a></li>
          </ul>
        </div>
        <ul class="mainbanner_list">
          <li><a href="javascript:void(0);">1</a></li>
          <li><a href="javascript:void(0);">2</a></li>
          <li><a href="javascript:void(0);">3</a></li>
        </ul>
      </div>


</div>
</div>

</div>

<div class="main">

<div class="main_1">

<div class="left">
<div class="left_1">
<div class="left_title"><div class="title_left"><img src="/resource/images/title_fwxm.jpg" /></div><div class="title_right"><a href="fuwu.html"><img src="/resource/images/more.jpg" /></a></div></div>
<div class="left_list">
<ul>
<li><a href="/index">学院首页</a></li>
<li><a href="/xueyuan">学院概况</a></li>
<li><a href="/zhaokao">招考信息</a></li>
<li><a href="/baoming/add">在线报名</a></li>
<li><a href="/chaxun">报名查询</a></li>
<li><a href="/xinwen">学院新闻</a></li>
<li><a href="/liuyan">留言咨询</a></li>
<Li><a href="/lianxiwomen">联系我们</a></Li>
</ul>
</div>
</div>


</div>

<div class="right">

<div class="z_right">
<div class="z_title"><div class="title_left"><img src="/resource/images/index_title_news.jpg" /></div></div>
<div class="z_list_1">
<ul>
<c:forEach items="${page.list}" var="newss" varStatus="vs">  
	<li><a href="/news/get?id=${newss.id}"><span class="time">${newss.createTimeStr}</span>${newss.title}</a></li>  
</c:forEach>  
</ul>
<div style="clear:both"></div>
             <div class="cpzs_foot">
              <table width="200" height="30" border="0" cellspacing="0" cellpadding="2">
              <!--  
                <tr>
                  <td><a href="#">首页</a></td>
                  <td><a href="#">上一页</a></td>
                  <td><a href="#">下一页</a></td>
                  <td><a href="#">尾页</a></td>
                </tr>-->
              </table>
            </div>
</div>
</div>

</div>
</div>

</div>

<div class="footer">
<div class="footer_1">

<div style="text-align:left;background-color:#e8f4ff;"><b>友情链接</b></div>
<hr>
<br/>
  <ul>
     <li class="lyul"><img src="#" style="width:88px;height:31px;"></li>
	 <li class="lyul"><img src="#" style="width:88px;height:31px;"></li>
	 <li class="lyul"><img src="#" style="width:88px;height:31px;"></li>
	 <li class="lyul"><img src="#" style="width:88px;height:31px;"></li>
	 <li class="lyul"><img src="#" style="width:88px;height:31px;"></li>
	 <li class="lyul"><img src="#" style="width:88px;height:31px;"></li>
	 <li class="lyul"><img src="#" style="width:88px;height:31px;"></li>
  </ul>
</div>
<div style="margin-top:45px;">技术服务 | 联系我们 | 学校概况 | 版权声明 | 校长寄语 | 招聘启事 | 录用公告 | 感动中国
河南检察职业学院人事考试报名查询系统 2007-2017 @ All Rights Reserved ICP备00000000号
邮件：XXXi@XXX.com 联系电话：0371-69970071　 地址：郑州市新郑龙湖大学园区双湖大道1号</div>
</div>

</div>
</body>
</html>
