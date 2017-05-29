/**
 * Created by wangxiaye on 2016/08/31
 */

$(function() {
	search();
	//根据名称查询用户信息,回车事件
	$(".inputSetValue").keypress(function(e) { // 这里给function一个事件参数命名为e，叫event也行，随意的，e就是IE窗口发生的事件。
		var key = e.which; // e.which是按键的值
		if (key == 13) {
			var id=$(this).attr("id");
			var value  = $(this).val();
			update(id,value);
		}
	});
	
	
	
	$(".inputSetValue").focus(function() {
		$("#tmpValue").val($(this).val());
	});
	$(".inputSetValue").blur(function() {
		var tmpValue = $("#tmpValue").val();
		if(!(tmpValue==null||tmpValue.trim().length==0)){
			$(this).val(tmpValue);
		}
	});
});

function update(id,value){
	var content = {};
	content.id=id;
	content.value=value.trim();
	var flag1 = /^\d+$/.test(value.trim());
	if((!flag1)||parseInt(value.trim())>200){
		$("#"+id).val($("#tmpValue").val());
		alert("阈值必须为数字且必须为0~200之间的整数，请重新修改");
		return;
	}
	
	var currentInputs =  $("#"+id).parent().parent().parent().find(".inputSetValue");
	var currentAddress = $("#"+id).parent().parent().parent().parent().find(".currentThreshold").find(".inputSetValue");
	var weekAddress = $("#"+id).parent().parent().parent().parent().find(".sevenDayThreshold").find(".inputSetValue");
	var flag2 = parseInt(currentInputs[2].value)>parseInt(currentInputs[0].value);
	var flag3 = parseInt(currentInputs[0].value)>parseInt(currentInputs[1].value);
	if(!(flag3&&flag2)){
		$("#"+id).val($("#tmpValue").val());
		alert("阈值大小不符合要求，阈值大小应遵循以下规则：\r\n①黑名单用户阈值<普通用户阈值<白名单用户阈值；\r\n②当天阈值<七天阈值；");
		return;
	}
	if(parseInt(currentAddress[0].value)>=parseInt(weekAddress[0].value)
			||parseInt(currentAddress[1].value)>=parseInt(weekAddress[1].value)
			||parseInt(currentAddress[2].value)>=parseInt(weekAddress[2].value)){
		$("#"+id).val($("#tmpValue").val());
		alert("阈值大小不符合要求，阈值大小应遵循以下规则：\r\n①黑名单用户阈值<普通用户阈值<白名单用户阈值；\r\n②当天阈值<七天阈值；");
		return;
	}
	
	$.ajax({
		url : contextPath + '/alarmRange/updateValue',
		type : 'POST',
		dataType : 'json',
		data : {
			content : JSON.stringify(content)
		},
		success : function(data) {
			$("#"+id).css('color','#1cc1fb');
			$("#tmpValue").val("");
			$("#"+id).blur();
			if (data.code == 1) {
				layer.msg("修改成功", {
					shade : [ 0.5, '#000' ],
					scrollbar : false,
					offset : '50%',
					time : 1000
				});
			}
		},
		error : function() {
			layer.msg("操作失败");
		}
	});
}

function search(){
	$.ajax({
		url :contextPath + '/alarmRange/list',
		type : 'POST',
		dataType : 'json',
		success : function(data) {
			var alarmRangeList = data.alarmRangeList;
			for(var i=0;i!=alarmRangeList.length;i++){
				var alarmRange = alarmRangeList[i];
				id=alarmRange.id;
				$("#"+id).val(alarmRange.value)
			}
		},
		error : function() {
			layer.msg('服务器异常');
		}
	});
}

