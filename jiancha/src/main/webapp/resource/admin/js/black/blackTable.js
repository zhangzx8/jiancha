$(function() {
	//根据名称查询用户信息,回车事件
	$("#realName").keypress(function(e) { // 这里给function一个事件参数命名为e，叫event也行，随意的，e就是IE窗口发生的事件。
		var key = e.which; // e.which是按键的值
		if (key == 13) {
			getUserInfo($(this)[0])
		}
	});
	$(".pageNumber").unbind("click");
	$(".pageNumber").bind("click", function() {
		var page = $(this).attr("pageNo");
		refresh(page);
	});
});

function getUserInfo(obj) {
	var userName = $(obj).val();
	$.ajax({
		url : contextPath + '/user/getAccountByUserName',
		type : 'POST',
		dataType : 'json',
		async : false,
		data : {
			userName : userName
		},
		success : function(data) {
			var account = data.account;
			if(typeof(account)!="undefined"&&account!=null){
				$(obj).val(account.realName);
				$("#userName").val(account.userName);
				$("#centre").val(account.centre);
				$("#department").val(account.department)
				$("#limitType_add").val(account.department)
				$("#addReason").val(account.department)
			}else{
				$("#realName").val("");
				$("#userName").val("");
				$("#centre").val("");
				$("#department").val("")
				$("#limitType_add").val("")
				$("#addReason").val("")
			}
		},
		error : function() {
			layer.msg('服务器异常');
		}
	});
}

function openBlackDetail(userName,limitType){
	var content = $("#searchConditions").val();
	var page = $("#pagination-digg").find(".active").html();
	window.location.href = contextPath+"/"+limitType+"/index/detail?type=black&userName="+userName+"&content="+content+"&page="+page;
}

