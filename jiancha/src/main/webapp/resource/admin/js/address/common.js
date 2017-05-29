$(function(){
	oaConnom.service.init();
	
});

var oaConnom = {
		service : {
			init : function(){
				oaConnom.service.setForbidden();
				oaConnom.service.setUserType();
			},
			setForbidden : function(){
				$("#tableList").on("click","#operatorForbidden", function(){
					var userName = $(this).parent().attr("userName");
					$("#userRestrict #forbiddenUserName").val(userName);
				});
				$(".saveBtnSty").click(function(){
					var userName = $(this).prev().val();
					var forbiddenTime = $("#forbiddenTime").val();
					var forbiddenReason = $("#forbiddenReason").val();
					$(".cancelSty").click();
					oaConnom.controller.forbidden(userName,forbiddenTime,forbiddenReason);
				});
			},
			setUserType : function(){
				
			}
		},
		controller : {
			cancelForbidden : function(userName,forbiddenTime,addReason){
				var busType = $("#busType").val();
				
			},
			forbidden : function(userName,limitTime,limitContent){
				$.ajax({
					url:contextPath+'/common/ajax/forbidden',
					type:'POST',
					dataType : 'json',	
					data:{"userName":userName,"type":1,"limitContent":limitContent,"limitTime":limitTime},
					success:function(data){
						if(data.code == 1){
							//取消限制成功
							//刷新页面
							var pageNo = $(".page-number .active").text();
							var searchName = $("#hiddenSearchName").val();
							var userType = $("#hiddenUserType").val();
							var limitTime = $("#hiddenLimitTime").val();
							forbiddenList.controller.getPage(pageNo,searchName,userType,limitTime);
						}
					},
					error:function(){
						//alert("操作失败");
					}
				});
			},
			getPage : function(pageNo,searchName,state,userType){
				var dayType = $(".currentTab").attr("dayType");
				$.ajax({
					url:contextPath+'/address/index/table',
					type:'POST',
					dataType : 'html',	
					data:{"pageNo":pageNo,"pageSize":15,"dayType":dayType,"userType":userType,"state":state,"searchName":searchName},
					success:function(data){
						$("#tableList").empty();
						$("#tableList").append(data);
					},
					error:function(){
						//alert("操作失败");
					}
				});
			}
		}
}