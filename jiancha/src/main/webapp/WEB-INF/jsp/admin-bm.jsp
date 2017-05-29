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
					
				</ul>
			</section>
		</aside>

		<!-- Content Wrapper. Contains page content -->
		<div class="content-wrapper">
			<section class="content-header">
				
			</section>
			<section class="content">
				<div class="accountContainer">
					<div class="toolbarWarp">
						<div class="toolSelect">
							<div class="toolgroup">
								<label>搜索</label>
								<input type="text" class="accountinput" placeholder="姓名">
							</div><!--toolgroup end-->
							<!--  
							<div class="toolgroup">
								<label>更新时间</label>
								<input type="text" class="laydate-icon" id="start" style="width:200px; margin-right:10px;"  onclick="laydate({elem: '#hello1'});">
								<span class="span-info" style="margin-left: -4px;">至</span>
								<input type="text" class="laydate-icon" id="end" style="width:200px; ">
							</div>
							--><!--toolgroup end-->
							<div class="toolgroup">
								<label>审核状态</label>
								<select id="selectStatus">
									<option value="0">全部</option>
									<option value="1">审核中</option>
									<option value="2">审核通过</option>
								</select>
							</div><!--toolgroup end-->
							<div class="toolgroup">
								<div class="toolbtn fl" id="seatchBtn"><i class="fa fa-search"></i></div>
							</div><!--toolgroup end-->
						</div><!--toolSelect end-->
						<div class="toolgroup" style="float: right;margin: 3px;">
							<a class="toolbtn fl" style="margin-right: 20px;" data-toggle="modal" data-target="shenhebaoming" id="shenhebaoming">审核</a>
							<!-- <a  class="toolbtn fl"  data-toggle="modal" data-target="#removeWhiteList">移除白名单</a> -->
						</div>
					</div>
					<div class="data-table">
						<table class="table  table_data">
							<thead>
							<tr>
								<th></th>
								<th>序号</th>
								<th>姓名</th>
								<th>审核状态</th>
							</tr>
							</thead>

							<tbody>
							
					            <c:forEach items="${page.list}" var="baoming" varStatus="vs">  
					              <tr>
					             		<td><input type="checkbox" name='checkbox' value="${baoming.id}"/></td>
					              		<td>${vs.index + 1}</td>
					                    <td >${baoming.userName}</td>
					                    <td >
										<c:choose>
										    <c:when test="${baoming.status == '1'}">
										       	   审核中
										    </c:when>
										    <c:when test="${baoming.status == '2'}">
									     		   审核通过
										    </c:when>
										    <c:otherwise>
										       
										    </c:otherwise>
										</c:choose>
					                    </td>		
					              </tr>  
								</c:forEach>  
							</tbody>
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
