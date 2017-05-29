<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>在线报名</title>
<link href="/resource/style/style.css" rel=stylesheet type="text/css" />
<style type="text/css">
  tr,td,input,a,img,li,ul{margin:0px;padding:0px;list-style:none;}
   li.lyul{float:right;margin-right:50px;}
  #one{ font-size:20px;}
  tr{text-align:center; font-size:15px;  height:32px;}
  #sl{width:98%;height:100%;}
  #s2{width:98%;height:100%;}
  #sex,#mz,#jg{width:60px;height:32px;}


</style>
</head>
<!--[if lte IE 6]> 
<script type="text/javascript" src="/resource/js/PNG.js"></script> 
<script> nput
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
<div class="z_title"><div class="title_left"><img src="/resource/images/index_title_zhin.jpg" /></div></div>
<div class="z_list">
    <form action="/baoming/filesUpload" method="post" name="regform" enctype="multipart/form-data" id="regform"  onsubmit="return checkFrom();">
        <input type="hidden" name="ok" value="ok" />
        <table border="1"   cellpadding="1" cellspacing="0" bordercolor=gray  align="center">
           <caption id="one"><b>河南检察职业学院2017年招聘报名登记表</b></caption>
            <tbody>
              <tr>
                    <td>姓名</td>
                    <td><input id="sl" type="text" name="userName" /></td>
					<td id="sex">性别</td>
                    <td> <input  type="radio" name="sex" value="1" checked="checked" />男 <input type="radio" name="sex" value="2" />女</td>
					<td rowspan="3"> &nbsp;&nbsp; 照片 &nbsp;&nbsp;上传</td>
                    <td rowspan="3"><input id="sl" type="file" name="pic" /></td>
              </tr>
			  <tr>
                    <td>出生日期</td>
                    <td><input id="sl" type="text" name="birthDay" /></td>
					<td id="mz">年龄</td>
                    <td><input id="sl" type="text" name="age" /></td>
              </tr>
			  <tr>
                    <td>身份证号</td>
                    <td><input id="sl" type="text" name="idCart" /></td>
					<td id="mz">民族</td>
                    <td><input id="sl" type="text" name="mz" /></td>
              </tr>
			  
              <tr>
                    <td>政治面貌</td>
                    <td colspan="2"><input  id="sl" type="text" name="zzmm" /></td>
					<td id="jg ">籍贯</td>
                    <td colspan="2"><input id="sl" type="text" name="jg" /></td>
              </tr>
			  <tr>
                    <td>应聘岗位</td>
                    <td colspan="2"><input id="sl" type="text" name="ypgw" /></td>
					<td>联系方式</td>
                    <td colspan="2"><input id="sl" type="text" name="phone" /></td>
              </tr>
			   <tr>
                    <td>全日制本科毕业院校及时间</td>
                    <td colspan="2"><input id="s2" type="text" name="school" /></td>
					<td>专业</td>
                    <td colspan="2"><input id="s2" type="text" name="major" /></td>
              </tr>
			   <tr>
                    <td>全日制硕士毕业院校及时间</td>
                    <td colspan="2"><input id="s2" type="text" name="school2" /></td>
					<td>专业及方向</td>
                    <td colspan="2"><input id="s2" type="text" name="major2" /></td>
              </tr>
			   <tr>
                    <td>全日制博士毕业院校及时间</td>
                    <td colspan="2"><input id="s2" type="text" name="school3" /></td>
					<td>专业及方向</td>
                    <td colspan="2"><input id="s2" type="text" name="major3" /></td>
              </tr>
			   
			  <tr>
                    <td>上传身份证</td>
                    <td colspan="5"><input id="sl" type="file" name="picimg" /></td>		
              </tr>
			  <tr>
                    <td>上传简历</td>
                    <td colspan="5"><input id="sl" type="file" name="picimg1" /></td>		
              </tr>
			  <tr>
                    <td>上传毕业证</td>
                    <td colspan="5"><input id="sl" type="file" name="picimg2" /></td>		
              </tr>
			  <tr>
                    <td>上传资格证书</td>
                    <td colspan="5"><input id="sl" type="file" name="picimg3" /></td>		
              </tr>
			  <tr>
                    <td>上传其它证书</td>
                    <td colspan="5"><input id="sl" type="file" name="picimg4" /></td>		
              </tr>  
            </tbody>
            <tfoot>
              <tr>
                    <td colspan="6" align="center">
                    <input type="hidden" value="0" id="resubmit"/>
                    <input type="submit" name="submit" value="注册"  style="width:60px; height:30px;" />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="reset" name="reset" value="重写"  style="width:60px; height:30px;"/> 
                    </td>
              </tr>
            </tfoot>
        </table>
        </form>
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
//<script type="text/javascript">
//var path = "/baoming/filesUpload";
//$(function(){
//	$("#formSubmit").click(function(){
//		$('#regform').attr("action", path).submit();;
//	})
//});


//</script> 
//</script>
<script type="text/javascript">
function checkFrom(){
	var userName = $("input[name='userName']").val();
	var idChart = $("input[name='idCart']").val();
	if(userName = "" || idChart == ""){
		alert("请输入姓名和身份证号");
		return false;
	}
	return true;
}

</script> 