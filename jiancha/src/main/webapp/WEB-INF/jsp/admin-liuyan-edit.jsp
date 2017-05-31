<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %> 
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>报名审核</title>
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
					<br>留言标题:${liuy.title}</br>
					<br>回复内容:</br>
					    <form action="">
					    <input type="hidden" value="${liuy.id}" id="hiddenid"/>
					    <textarea style="width:200px; height:100px" id="huifuContent"></textarea><br>
					    <div class="toolgroup" style="float: left;margin: 3px;">
							<a class="toolbtn fl" style="margin-right: 20px;" data-toggle="modal" data-target="shenhebaoming" id="subbtn">提交</a>
							<!-- <a  class="toolbtn fl"  data-toggle="modal" data-target="#removeWhiteList">移除白名单</a> -->
						</div>
					    </form>
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
 		$("#subbtn").click(function(){
 			var hiddenid = $("#hiddenid").val();
 			var content = $("#huifuContent").val();
 			$.ajax({
 				url : '/admin/liuyan/huifu',
 				type : 'POST',
 				dataType : 'json',
 				data : {
 					"id" : hiddenid,
 					"huifuContent" : content
 				},
 				success : function(data) {
 					if (data.code == 0) {
 						layer.msg("操作成功");
 					}
 				},
 				error : function() {
 					layer.msg("操作失败");

 				}
 			});
 		});
 	});
</script>
