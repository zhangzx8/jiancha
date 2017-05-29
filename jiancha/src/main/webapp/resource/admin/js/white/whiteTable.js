/**
 * Created by wangxiaye on 2016/08/31
 */
$(function() {
	$(".pageNumber").unbind("click");
	$(".pageNumber").bind("click", function() {
		var page = $(this).attr("pageNo");
		refresh(page);
	});
	
	//根据名称查询用户信息,回车事件
	$("#realName").keypress(function(e) { // 这里给function一个事件参数命名为e，叫event也行，随意的，e就是IE窗口发生的事件。
		var key = e.which; // e.which是按键的值
		if (key == 13) {
			getUserInfo($(this)[0])
		}
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
				$("label[name=realNameTip]").hide();
				$(obj).val(account.realName);
				$("#userName").val(account.userName);
				$("#centre").val(account.centre);
				$("#department").val(account.department)
			}else{
				$("label[name=realNameTip]").html("请输入正确的域账户");
				$("label[name=realNameTip]").show();
				$("#realName").val("");
				$("#userName").val("");
				$("#centre").val("");
				$("#department").val("")
			}
		},
		error : function() {
			layer.msg('服务器异常');
		}
	});
}

function save(){
	var content = {};
	
	var realName = $("#realName").val();
	if (realName != "" && realName != null) {
		content.realName = realName;
	}else{
		$("label[name=realNameTip]").html("请输入用户");
		$("label[name=realNameTip]").show()
		return;
	}
	
	var userName = $("#userName").val();
	if (userName != "" && userName != null) {
		content.userName = userName;
	}
	var centre = $("#centre").val();
	if (centre != "" && centre != null) {
		content.centre = centre;
	}
	var department = $("#department").val();
	if (department != "" && department != null) {
		content.department = department;
	}
	
	var limitType_add = $("#limitType_add").val();
	if (limitType_add != "" && limitType_add != null) {
		content.limitType = limitType_add;
	}
	
	var addReason = $("#addReason").val();
	var addReasonLen = addReason.trim().length;
	if (addReason != "" && addReason != null&&addReasonLen>=5&&addReasonLen<=30) {
		content.addReason = addReason;
		$("label[name=addReasonTip]").hide();
	}else{
		$("label[name=addReasonTip]").show();
		return;
	}
	
	$.ajax({
		url : contextPath + '/white/save',
		type : 'POST',
		dataType : 'json',
		data : {
			content : JSON.stringify(content)
		},
		success : function(data) {
			if (data.code == 1) {
				$("#addUser").hide();
				layer.msg("保存成功", {
					shade : [ 0.5, '#000' ],
					scrollbar : false,
					offset : '50%',
					time : 1000
				}, function() {
					refresh();
				});
			}else{
				//显示错误提示信息
				layer.msg(data.attach);
			}
		},
		error : function() {
			layer.msg("操作失败");
		}
	});
}

function openWhiteDetail(userName,limitType){
	var content = $("#searchConditions").val();
	var page = $("#pagination-digg").find(".active").html();
	window.location.href = contextPath+"/"+limitType+"/index/detail?type=white&userName="+userName+"&content="+content+"&page="+page;;
}

function showAddWhite(){
	$("label[name=addReasonTip]").hide();
	$("label[name=realNameTip]").hide();
	$("#realName").val("");
	$("#userName").val("");
	$("#centre").val("");
	$("#department").val("")
	$("#addReason").val("")
}