$(function() {
	//复选框操作\处理
	// 以_ALL结束
	$(":checkbox[id$='_ALL']").each(function(index,allBox){
		$(allBox).click(function(){
			var check = allBox.checked;
			$(allBox).parent().find("input[type=checkBox]").each(function(){
				this.checked=check;
			});
		});
		
		$(allBox).parent().find(".childMenus").find("input[type=checkBox]").click(function(){
			var check = $(this)[0].checked;
			if(check){
				$(this).parent().parent().children("input")[0].checked=check;
			}else{
				var count = $(allBox).parent().find(".childMenus").find("input[type=checkBox]:checked").length;
				if(count==0){
					$(this).parent().parent().children("input")[0].checked=check;
				}
			}
		});
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
				$("label[name=userNameTip]").hide()
				$(obj).val(account.realName);
				$("#userName").val(account.userName);
				$("#centre").val(account.centre);
				$("#department").val(account.department)
			}else{
				$("label[name=userNameTip]").show()
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
	var permission = "";
	$('input[type=checkbox]:checked').each(function(){
		if($(this).val().trim().length!=0){
			permission = permission+$(this).val()+",";
		}
	});
	var content = {};
	var realName = $("#realName").val();
	if (realName != "" && realName != null) {
		content.realName = realName;
	}else{
		layer.msg("姓名不能为空");
		return;
	}
	
	if (permission.trim().length!=0) {
		permission = permission.substring(0, permission.length-1);
		content.permission = permission;
	}else{
		layer.msg("操作失败，请勾选权限");
		return;
	}
	
	var userId = $("#userId").val();
	if (userId != "" && userId != null) {
		content.id = userId;
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
	$.ajax({
		url : contextPath + '/user/save',
		type : 'POST',
		dataType : 'json',
		data : {
			content : JSON.stringify(content)
		},
		success : function(data) {
			if (data.code == 1) {
				layer.msg("保存成功", {
					shade : [ 0.5, '#000' ],
					scrollbar : false,
					offset : '50%',
					time : 1000
				}, function() {
					window.location.href=contextPath + '/user/list';
				});
			}else{
				layer.msg(data.attach);
			}
		},
		error : function() {
			layer.msg("操作失败");
		}
	});
}