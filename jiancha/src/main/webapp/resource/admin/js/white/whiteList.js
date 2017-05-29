/**
 * Created by wangxiaye on 2016/10/12
 */

$(function() {
	$("#checkAll").click(function() {
		$("input[name='checkbox']:checkbox").prop("checked",$(this).is(":checked"));
	});
	$("input[name='checkbox']:checkbox").click(function() {
		var allBox = $("input[name='checkbox']:checkbox");
		$("#checkAll").prop("checked",allBox.length == allBox.filter(":checked").length ? true: false);
	});

	// 日期控件
	laydate({
		elem : '#startTime',
		format : 'YYYY-MM-DD hh:mm:ss',
		// min: laydate.now(), //设定最小日期为当前日期
		// max: '2099-06-16 23:59:59', //最大日期
		istime : true,
		istoday : true,
		choose : function(date) {
			// end.min = datas; //开始日选好后，重置结束日的最小日期
			// end.start = datas //将结束日的初始值设定为开始日
			// alert("startTime:" + date);
		}
	});

	laydate({
		elem : '#endTime',
		format : 'YYYY-MM-DD hh:mm:ss',
		// min: laydate.now(), //设定最小日期为当前日期
		// max: '2099-06-16 23:59:59', //最大日期
		istime : true,
		istoday : true,
		choose : function(date) {
			// end.min = datas; //开始日选好后，重置结束日的最小日期
			// end.start = datas //将结束日的初始值设定为开始日
			// alert("endTime:" + date);
		}
	});

	// 搜索
	$(".search_btn").unbind("click");
	$(".search_btn").bind("click", function() {
		var content = {};
		var startTime = $("#startTime").val();
		var endTime = $("#endTime").val();
		if (startTime.length != 0 && endTime.length == 0) {
			layer.msg('请输入结束时间！');
			return;
		} else if (startTime.length == 0 && endTime.length != 0) {
			layer.msg('请输入开始时间！');
			return;
		}
		if (startTime.length > 0 && endTime.length > 0) {
			var startDate = new Date(startTime.replace(/-/g, "/"));
			var endDate = new Date(endTime.replace(/-/g, "/"));
			if (startDate >= endDate) {
				// alert("截止时间必须大于开始时间");
				layer.msg('开始时间不能晚于结束时间！');
				return;
			}
			content.startTime = startTime;
			content.endTime = endTime;
		}

		var mergeSearch = $("#mergeSearch").val();
		if (mergeSearch != null && mergeSearch.trim().length != 0) {
			content.mergeSearch = mergeSearch.trim();
		}
		var limitType = $("#limitType").val();
		if (limitType != "" && limitType != null) {
			content.limitType = limitType;
		}

		content.search = true;
		$.ajax({
			url : contextPath + '/white/list',
			type : 'POST',
			dataType : 'html',
			async : false,
			data : {
				content : JSON.stringify(content)
			},
			success : function(data) {
				$(".data-table").empty();
				$(".data-table").append(data);
				$("#searchConditions").val(JSON.stringify(content));
			},
			error : function() {
				layer.msg('服务器异常');
			}
		});

	});
});

function setAccountId(obj) {
	var accountId = $(obj).attr("accountId");
	$(".saveBtnSty").attr("accountId", accountId);
}

function delWhiteById(obj) {
	layer.confirm("确定要将此人移出白名单吗？", {
		btn : [ '确定', '取消' ]
	}, function() {
		var id = $(obj).attr("accountId");
		$.ajax({
			url : contextPath + '/account/remove',
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
				}else{
					layer.msg(data.attach);
				}
			},
			error : function() {
				layer.msg("操作失败");
			}
		});
	}, function() {
		layer.close();
	});

}

function delWhite() {
	var ids = "";
	$("input[name='checkbox']:checked").each(function() {
		ids += $(this).val() + ",";
	});
	ids = ids.substring(0, ids.length - 1);
	if (ids == "") {
		layer.msg("请选择数据")
		return false;
	}

	layer.confirm("确定要将此人移出白名单吗？", {
		btn : [ '确定', '取消' ]
	}, function() {
		$.ajax({
			url : contextPath + '/account/remove',
			type : 'POST',
			dataType : 'json',
			data : {
				"id" : ids
			},
			success : function(data) {
				if (data.code == 1) {
					layer.msg("操作成功", {
						shade : [ 0.5, '#000' ],
						scrollbar : false,
						offset : '50%',
						time : 1000
					}, function() {
						refresh();
					});
				}else{
					layer.msg(data.attach);
				}
			},
			error : function() {
				layer.msg("操作失败");

			}
		});
	}, function() {
		layer.close();
	});
}

function refresh(page) {
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
		url : contextPath + '/white/list',
		type : 'POST',
		dataType : 'html',
		data : {
			content : searchConditions,
			page : page
		},
		success : function(data) {
			$(".data-table").empty();
			$(".data-table").append(data);
			
			$("#checkAll").click(function() {
				$("input[name='checkbox']:checkbox").prop("checked",$(this).is(":checked"));
			});
			$("input[name='checkbox']:checkbox").click(function() {
				var allBox = $("input[name='checkbox']:checkbox");
				$("#checkAll").prop("checked",allBox.length == allBox.filter(":checked").length ? true: false);
			});
		},
		error : function() {
			layer.msg('服务器异常');
		}
	});
}
