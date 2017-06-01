<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %> 
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>报名详情</title>
<!-- Tell the browser to be responsive to screen width -->
<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
<!-- Bootstrap 3.3.4 -->
<link href="/resource/admin/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
<!-- FontAwesome 4.3.0 -->
<link href="/resource/admin/libs/font-awesome-4.4.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
<!-- Theme style -->
<link href="/resource/admin/libs/css/AdminLTE.min.css" rel="stylesheet" type="text/css" />
<!-- AdminLTE Skins. Choose a skin from the css/skins folder instead of downloading all of them to reduce the load. -->
<link href="/resource/admin/libs/css/skins/_all-skins.min.css" rel="stylesheet" type="text/css" />
	<link rel="stylesheet" href="/resource/admin/css/style.css" type="text/css">
<link rel="stylesheet" href="/resource/admin/css/base.css" type="text/css" />
<link rel="stylesheet" href="/resource/admin/css/common.css" type="text/css">
    <!---中间部分的样式控制文件-->
<link rel="stylesheet" href="/resource/admin/css/content.css" type="text/css">

<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
        <script src="/resource/admin/libs/js/html5shiv.js" type="text/javascript"></script>
        <script src="/resource/admin/libs/js/respond.js" type="text/javascript"></script>
    <![endif]-->
</head>
<body class="sidebar-mini skin-black-light oam-web">
	<div class="wrapper">

		<!-- Left side column. contains the logo and sidebar -->
		<aside class="main-sidebar">
			<section class="sidebar">
				<!--菜单栏-->
				<ul class="sidebar-menu">
					<li class="treeview">
						<a href="/admin/index">
							<i class="icon-home iconSty"></i><span>报名审核</span>
						</a>
					</li>
					<li class="treeview">
						<a href="/admin/liuyan/list">
							<i class="icon-home iconSty"></i><span>留言回复</span>
						</a>
					</li>
										<li class="treeview">
						<a href="/news/admin/add">
							<i class="icon-home iconSty"></i><span>添加首页信息</span>
						</a>
					</li>
				</ul>
			</section>
		</aside>

		<!-- Content Wrapper. Contains page content -->
		<div class="content-wrapper">
			<section class="content-header">
				
			</section>
			<section class="content">
				<div class="accountContainer">
					<div class="data-table">
						<table border="1"   cellpadding="1" cellspacing="0" bordercolor=gray  align="center">
           <caption id="one"><b>河南检察职业学院2017年招聘报名登记表</b></caption>
            <tbody>
              <tr>
                    <td>姓名</td>
                    <td><input id="sl" type="text" name="userName" value="${baoMing.userName}"/></td>
					<td id="sex">性别</td>
					<td>
						<c:if test="${baoMing.sex == '1'}">
						男
						</c:if>
						<c:if test="${baoMing.sex == '2'}">
						女
						</c:if>
					 
					</td>
                    <td rowspan="3"> &nbsp;&nbsp; 照片 &nbsp;&nbsp;上传</td>
                    <td rowspan="3"><img src="${baoMing.picStr}" /></td>
              </tr>
			  <tr>
                    <td>出生日期</td>
                    <td><input id="sl" type="text" name="birthDay" valyue="${baoMing.birthDay}"/></td>
					<td id="mz">年龄</td>
                    <td><input id="sl" type="text" name="age" value="${baoMing.age}"/></td>
              </tr>
			  <tr>
                    <td>身份证号</td>
                    <td><input id="sl" type="text" name="idCart" value="${baoMing.idCart}"/></td>
					<td id="mz">民族</td>
                    <td><input id="sl" type="text" name="mz" value="${baoMing.mz}"/></td>
              </tr>
			  
              <tr>
                    <td>政治面貌</td>
                    <td colspan="2"><input  id="sl" type="text" name="zzmm" value="${baoMing.zzmm}"/></td>
					<td id="jg ">籍贯</td>
                    <td colspan="2"><input id="sl" type="text" name="jg" value="${baoMing.jg}"/></td>
              </tr>
			  <tr>
                    <td>应聘岗位</td>
                    <td colspan="2"><input id="sl" type="text" name="ypgw" value="${baoMing.ypgw}"/></td>
					<td>联系方式</td>
                    <td colspan="2"><input id="sl" type="text" name="phone" value="${baoMing.phone}"/></td>
              </tr>
			   <tr>
                    <td>全日制本科毕业院校及时间</td>
                    <td colspan="2"><input id="s2" type="text" name="school" value="${baoMing.school}"/></td>
					<td>专业</td>
                    <td colspan="2"><input id="s2" type="text" name="major" value="${baoMing.major}"/></td>
              </tr>
			   <tr>
                    <td>全日制硕士毕业院校及时间</td>
                    <td colspan="2"><input id="s2" type="text" name="school2" value="${baoMing.school2}"/></td>
					<td>专业及方向</td>
                    <td colspan="2"><input id="s2" type="text" name="major2" value="${baoMing.major2}"/></td>
              </tr>
			   <tr>
                    <td>全日制博士毕业院校及时间</td>
                    <td colspan="2"><input id="s2" type="text" name="school3" value="${baoMing.school3}"/></td>
					<td>专业及方向</td>
                    <td colspan="2"><input id="s2" type="text" name="major3" value="${baoMing.major3}"/></td>
              </tr>
			   
			  <tr>
                    <td>身份证</td>
                    <td colspan="5"><a href="${baoMing.picimg}">点击下载</a></td>		
              </tr>
			  <tr>
                    <td>简历</td>
                    <td colspan="5"><a href="${baoMing.picimg1}">点击下载</a></td>		
              </tr>
			  <tr>
                    <td>毕业证</td>
                    <td colspan="5"><a href="${baoMing.picimg2}">点击下载</a></td>		
              </tr>
			  <tr>
                    <td>资格证书</td>
                    <td colspan="5"><a href="${baoMing.picimg3}">点击下载</a></td>		
              </tr>
			  <tr>
                    <td>其它证书</td>
                    <td colspan="5"><a href="${baoMing.picimg4}">点击下载</a></td>		
              </tr>  
            </tbody>
            <tfoot>
            </tfoot>
        </table>
					</div>
				</div>
			</section>
		</div>
		<!-- /.content-wrapper -->
	</div>
	<!-- ./wrapper -->

	<!-- jQuery 2.1.3 -->
	<script src="/resource/admin/js/jQuery/jQuery-2.1.3.min.js"></script>
	<!-- Bootstrap 3.3.2 JS -->
	<script src="/resource/admin/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
	<!-- AdminLTE App -->
	<script src="/resource/admin/libs/js/app.min.js" type="text/javascript"></script>
	<script src="/resource/admin/js/common/commonUtils.js"></script>
	<script src="/resource/admin/js/plugins/laydate-v1.1/laydate/laydate.js" type="text/javascript"></script>
	<script src="/resource/admin/js/plugins/layer/layer.js" type="text/javascript"></script>
	<script src="/resource/admin/js/bounced/bouncedLayer.js" type="text/javascript"/></script>
</body>
</html>
<script type="text/javascript">
 	$(function(){
 		$("#seatchBtn").click(function(){
 			var name = $(".accountinput").val();
 			var status = $("#selectStatus").val();
 			window.location.href="/admin/index?userName="+name+"&status="+status;
 		});
 		$("#shenhebaoming").click(function(){
 			var ids = "";
 			$("input[name='checkbox']:checked").each(function() {
 				ids += $(this).val() + ",";
 			});
 			
 			ids = ids.substring(0, ids.length - 1);
 			if (ids == "") {
 				layer.msg("请选择数据")
 				return false;
 			}
 			$.ajax({
 				url : '/admin/shenhe',
 				type : 'POST',
 				dataType : 'json',
 				data : {
 					"id" : ids
 				},
 				success : function(data) {
 					if (data.code == 0) {
 						window.location.href="/admin/index";
 					}else{
 						layer.msg(data.attach);
 					}
 				},
 				error : function() {
 					layer.msg("操作失败");

 				}
 			});
 		});
 	});
</script>
