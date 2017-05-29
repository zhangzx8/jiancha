/**
 * Created by wangxiaye on 2016/10/12
 */


$(function() {
	// 搜索
	$(".search_btn").unbind("click");
	$(".search_btn").bind("click", function() {
		var content = {};
		var code = $("#code").val();
		if (code != "" && code != null) {
			content.code = code;
		}
		
		var name = $("#name").val();
		if (name != "" && name != null) {
			content.name = name;
		}
		content.search = true;
		$.ajax({
			url :contextPath + '/oamDic/list',
			type : 'POST',
			dataType : 'html',
			data : {
				content : JSON.stringify(content)
			},
			success : function(data) {
				$(".list_table").empty();
				$(".list_table").append(data);
				$("#searchConditions").val(JSON.stringify(content));
			},
			error : function() {
				layer.msg('服务器异常');
			}
		});
	});
});

function changeValue() {
	var id = $("#hiddenRangeId").val();
	var rangeValue = $("#rangeValue").val();
	if(isNull(rangeValue)){
		layer.msg("输入不能为空");
		return;
	}
	var content = {};
	content.id = id;
	content.value = rangeValue;
	$.ajax({
		url : contextPath + '/oamDic/update',
		type : 'POST',
		dataType : 'json',
		data : {
			content : JSON.stringify(content)
		},
		success : function(data) {
			if (data.code == 1) {
				layer.msg("修改成功", {
					shade : [ 0.5, '#000' ],
					scrollbar : false,
					offset : '50%',
					time : 1000
				}, function() {
					refresh();
				});
			}
		},
		error : function() {
			layer.msg("操作失败");
		}
	});
}

function addAlarmRange(){
	var content = {};
	var businessType = $("#add_businessType").val();
	if (businessType != "" && businessType != null) {
		content.businessType = businessType;
	}else{
		layer.msg("模块不能为空");
		return;
	}
	
	var type = $("#add_type").val();
	if (type != "" && type != null) {
		content.type = type;
	}else{
		layer.msg("类型不能为空");
		return;
	}
	
	var level_one = $("#level_one").val();
	if (level_one != "" && level_one != null) {
		content.level_one = level_one;
	}
	var level_two = $("#level_two").val();
	if (level_two != "" && level_two != null) {
		content.level_two = level_two;
	}
	var level_three = $("#level_three").val();
	if (level_three != "" && level_three != null) {
		content.level_three = level_three;
	}
	if(isNull(level_one)&&isNull(level_two)&&isNull(level_three)){
		layer.msg("阈值不能全为空");
		return;
	}
	$.ajax({
		url : contextPath + '/oamDic/add',
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
					refresh();
				});
			}
		},
		error : function() {
			layer.msg("操作失败");
		}
	});
	$("#addForm")[0].reset();
}


function delAlarmRange(obj){
	if(confirm("确定要删除吗，删除后不可恢复")){
		var id = $(obj).attr("rangeId");
		$.ajax({
			url : contextPath + '/oamDic/del',
			type : 'POST',
			dataType : 'json',
			data : {
				id : id
			},
			success : function(data) {
				if (data.code == 1) {
					layer.msg("删除成功", {
						shade : [ 0.5, '#000' ],
						scrollbar : false,
						offset : '50%',
						time : 1000
					}, function() {
						refresh();
					});
				}
			},
			error : function() {
				layer.msg("操作失败");
			}
		});
	}
	
}

function refresh() {
//	var page = $("#pagination-digg").find(".active").text();
	if (typeof (page) == "undefined") {
		page = null;
	}
	var searchConditions = $("#searchConditions").val();
	if (searchConditions == "") {
		var content = {};
		content.search = true;
		searchConditions = JSON.stringify(content);
	}
	$.ajax({
		url : contextPath +'/oamDic/list',
		type : 'POST',
		dataType : 'html',
		data : {
			content : searchConditions
//			page : page
		},
		success : function(data) {
			$(".list_table").empty();
			$(".list_table").append(data);
		},
		error : function() {
			layer.msg('服务器异常');
		}
	});
}

function changeBusinessType(from){
	var businessType ;
	var typeObj;
	if(from=="list"){
		typeObj = $("#type");
		businessType = $("#businessType").val();
	}else{
		typeObj = $("#add_type")
		businessType = $("#add_businessType").val();
	}
	$.ajax({
		url : contextPath +'/oamDic/getTypeByBusiness',
		type : 'POST',
		dataType : 'json',
		data : {
			businessType : businessType
		},
		success : function(data) {
			typeObj.empty();
			typeObj.append("<option value=''>请选择</option>");
			if(typeof(data.responsesDTO)!="undefied"&&data.responsesDTO!=null){
				var alarmRangeList = data.responsesDTO.attach;
				for(var i=0;i<alarmRangeList.length;i++){
					var range = alarmRangeList[i];
					typeObj.append("<option value="+range.type+">"+range.type+"</option>");
				}
			}
		},
		error : function() {
			layer.msg('服务器异常');
		}
	});
}

function changeType(obj){
	$(obj).attr("title",$(obj).val());
}

function showAddTypeDiv(){
	var businessType = $("#add_businessType").val();
	if(isNull(businessType)){
		layer.msg("模块不能为空");
		return;
	}
	$("#rangeTypeTextDiv").css({
		  "display":"block",
		  "white-space":"nowrap"});
}

function addTypeToSelect(){
	var rangeTypeText = $("#add_type_text").val();
	if(isNull(rangeTypeText)){
		layer.msg("输入不能为空");
		return;
	}
	var returnFlag=false;
	$("#add_type").find("option").each(function(){
		var temp = $(this).html();
		if(temp==rangeTypeText){
			returnFlag = true;
			return false;
		}
	});
	if(returnFlag){
		layer.msg("输入类型重复");
		return;
	}
	$("#add_type").append("<option value=\""+rangeTypeText+"\">"+rangeTypeText+"</option>"); 
	$("#rangeTypeTextDiv").hide();
}

function AddAlarmRangeModal(){
	$("#rangeTypeTextDiv").hide();
	$("#addForm")[0].reset();
}

function isNotNull(str){
	var flag = false;
	if(str!=null&&str.trim().length!=0){
		flag=true;
	}
	return flag;
}
function isNull(str){
	var flag = false;
	if(str==null||str.trim().length==0){
		flag=true;
	}
	return flag;
}