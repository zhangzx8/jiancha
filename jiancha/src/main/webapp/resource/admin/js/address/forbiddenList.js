$(function(){
	forbiddenList.service.init();
});


var forbiddenList = {
	service : {
		init : function(){
			forbiddenList.service.initPage();
			forbiddenList.service.dealClick();
		},
		initPage : function(){
			forbiddenList.controller.getPage(1,"","",0);
		},
		dealClick : function(){
			forbiddenList.service.searchClick();
			forbiddenList.service.pageClick();
			forbiddenList.service.cancelForbiddenClick();
		},
		searchClick : function(){
			$(".toolbtn").click(function(){
				var searchName = $.trim($("#searchName").val());
				var userType = $("#userType").val();
				var limitTime = $("#forbiddenlength").val();
				forbiddenList.controller.getPage(1,searchName,userType,limitTime);
			});
		},
		pageClick : function(){
		    $(".data-table").on("click",".pageNumber", function(){
		    	var pageNo = $(this).attr("pageNo");
				var searchName = $("#hiddenSearchName").val();
				var userType = $("#hiddenUserType").val();
				var limitTime = $("#hiddenLimitTime").val();
				forbiddenList.controller.getPage(pageNo,searchName,userType,limitTime);
		    });
		},
		cancelForbiddenClick : function(){
			$(".data-table").on("click",".canccelForbidden", function(){
				var userName = $(this).attr("userName");
				var loginUserName = $("#loginUserName").val();
				if(loginUserName == userName){
					layer.msg("用户不能对自己进行操作");
					return false;
				}
				$("#unfreeze #hiddenForbiddenUserName").val(userName);
				//$("#unfreeze").modal();
			});
			
			$(".saveBtnSty").click(function(){
				var userName = $(this).prev().val();
				if(userName == ""){
					return;
				}
				$(".cancelSty").click();
				forbiddenList.controller.cancelForbidden(userName);
			});
		}
		
	},
	controller : {
		getPage : function(pageNo,searchName,userType,limitTime){
			$.ajax({
				url:contextPath+'/address/forbiddenListTable',
				type:'POST',
				dataType : 'html',	
				data:{"pageNo":pageNo,"pageSize":15,"userType":userType,"limitTime":limitTime,"searchName":searchName},
				success:function(data){
					$(".data-table").empty();
					$(".data-table").append(data);
				},
				error:function(){
					//alert("操作失败");
				}
			});
		},
		cancelForbidden : function(userName){
			$.ajax({
				url:contextPath+'/address/ajax/cancelForbidden',
				type:'POST',
				dataType : 'json',	
				data:{"userName":userName},
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
		}
	}

};