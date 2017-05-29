/**
 * Created by wangxiaye on 2016/10/12
 */

$(function() {
	// 搜索
	$(".search_btn").unbind("click");
	$(".search_btn").bind("click", function() {
		var content = {};
		var mergeSearch = $("#mergeSearch").val();
		if (mergeSearch != "" && mergeSearch != null) {
			content.mergeSearch = mergeSearch;
		}
		content.search = true;
		$.ajax({
			url : contextPath + '/serverInfo/list',
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

	$("#checkAll").click(
			function() {
				$("input[name='checkbox']:checkbox").prop("checked",
						$(this).is(":checked"));
			});
	$("input[name='checkbox']:checkbox")
			.click(
					function() {
						var allBox = $("input[name='checkbox']:checkbox");
						$("#checkAll")
								.prop(
										"checked",
										allBox.length == allBox
												.filter(":checked").length ? true
												: false);
					});

});

function changeValue() {
	var id = $("#hiddenRangeId").val();
	var rangeValue = $("#rangeValue").val();
	if (isNull(rangeValue)) {
		layer.msg("输入不能为空");
		return;
	}
	var content = {};
	content.id = id;
	content.value = rangeValue;
	$.ajax({
		url : contextPath + '/serverInfo/update',
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

function addServerInfo() {
	var content = {};

	var ip = $("#ip").val();
	if (isNotNull(ip)) {
		content.ip = ip;
	} else {
		layer.msg("ip不能为空");
		return;
	}

	var osType = $("#add_type").val();
	content.osType = osType;

	var projectName = $("#projectName").val();
	if (isNotNull(projectName)) {
		content.projectName = projectName;
	}

	var projectLeader = $("#projectLeader").val();
	if (isNotNull(projectLeader)) {
		content.projectLeader = projectLeader;
	}

	var applicationName = $("#applicationName").val();
	if (isNotNull(applicationName)) {
		content.applicationName = applicationName;
	}

	var applicationLeader = $("#applicationLeader").val();
	if (isNotNull(applicationLeader)) {
		content.applicationLeader = applicationLeader;
	}
	$.ajax({
		url : contextPath + '/serverInfo/add',
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

function delServerInfoById(obj) {
	if (confirm("确定要删除吗，删除后不可恢复")) {
		var id = $(obj).attr("serverInfoId");
		$.ajax({
			url : contextPath + '/serverInfo/del',
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

function delServerInfo() {
	var ids = "";
	$("input[name='checkbox']:checkbox").each(function() {
		if ($(this).is(":checked")) {
			ids += $(this).val() + ",";
		}
	});
	ids = ids.substring(0, ids.length-1);
	if (ids == "") {
		layer.msg("请选择数据")
		return false;
	}
	layer.confirm("确定要删除吗?，删除后不可恢复", {
		btn : [ '确定', '取消' ]
	}, function() {
		layer.close();
		$.ajax({
			url : contextPath + '/serverInfo/del',
			type : 'POST',
			dataType : 'json',
			data : {
				"id" : ids
			},
			success : function(data) {
				if (data.code == 1) {
					layer.msg("删除成功", {
						shade : [ 0.5, '#000' ],
						scrollbar : false,
						offset : '50%',
						time : 1000
					},
							function() {
								window.location.href = contextPath
										+ "/serverInfo/list";
							});
				}
			},
			error : function() {
				layer.msg("删除失败");

			}
		});
	}, function() {
		layer.close();
	});

}

function refresh() {
	// var page = $("#pagination-digg").find(".active").text();
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
		url : contextPath + '/serverInfo/list',
		type : 'POST',
		dataType : 'html',
		data : {
			content : searchConditions
		// page : page
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

function changeBusinessType(from) {
	var businessType;
	var typeObj;
	if (from == "list") {
		typeObj = $("#type");
		businessType = $("#businessType").val();
	} else {
		typeObj = $("#add_type")
		businessType = $("#add_businessType").val();
	}
	$.ajax({
		url : contextPath + '/serverInfo/getTypeByBusiness',
		type : 'POST',
		dataType : 'json',
		data : {
			businessType : businessType
		},
		success : function(data) {
			typeObj.empty();
			typeObj.append("<option value=''>请选择</option>");
			if (typeof (data.responsesDTO) != "undefied"
					&& data.responsesDTO != null) {
				var alarmRangeList = data.responsesDTO.attach;
				for (var i = 0; i < alarmRangeList.length; i++) {
					var range = alarmRangeList[i];
					typeObj.append("<option value=" + range.type + ">"
							+ range.type + "</option>");
				}
			}
		},
		error : function() {
			layer.msg('服务器异常');
		}
	});
}

function changeType(obj) {
	$(obj).attr("title", $(obj).val());
}

function showAddTypeDiv() {
	var businessType = $("#add_businessType").val();
	if (isNull(businessType)) {
		layer.msg("模块不能为空");
		return;
	}
	$("#rangeTypeTextDiv").css({
		"display" : "block",
		"white-space" : "nowrap"
	});
}

function addTypeToSelect() {
	var rangeTypeText = $("#add_type_text").val();
	if (isNull(rangeTypeText)) {
		layer.msg("输入不能为空");
		return;
	}
	var returnFlag = false;
	$("#add_type").find("option").each(function() {
		var temp = $(this).html();
		if (temp == rangeTypeText) {
			returnFlag = true;
			return false;
		}
	});
	if (returnFlag) {
		layer.msg("输入类型重复");
		return;
	}
	$("#add_type").append(
			"<option value=\"" + rangeTypeText + "\">" + rangeTypeText
					+ "</option>");
	$("#rangeTypeTextDiv").hide();
}

function AddAlarmRangeModal() {
	$("#rangeTypeTextDiv").hide();
	$("#addForm")[0].reset();
}

function isNotNull(str) {
	var flag = false;
	if (str != null && str.trim().length != 0) {
		flag = true;
	}
	return flag;
}
function isNull(str) {
	var flag = false;
	if (str == null || str.trim().length == 0) {
		flag = true;
	}
	return flag;
}