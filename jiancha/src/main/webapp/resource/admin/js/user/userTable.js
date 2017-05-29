/**
 * Created by wangxiaye on 2016/08/31
 */
$(function() {
	// 分页搜索
	$(".pageNumber").unbind("click");
	$(".pageNumber").bind("click", function() {
		var page = $(this).attr("pageNo");
		refresh(page);
	});

	$("a[name='edit_table']").unbind("click");
	$(".list_table").on(
			"click",
			"a[name='edit_table']",
			function() {
				$("#rangeValue").css("color", '#d2d6de');
				var rangeId = $(this).attr("rangeId");
				$("#hiddenRangeId").val(rangeId);
				var rangeValue = $(this).parent().parent().find(
						"td[name=rangeValue]").html();
				$("#rangeValue").val(rangeValue);
			});

	$("#rangeValue").unbind("focus");
	$("#rangeValue").focus(function() {
		var color = $(this).css("color");
		if (color == 'rgb(210, 214, 222)') {
			$(this).css("color", "#555");
			$(this).val("");
		}
	});
});

function editPermission(obj) {
	var userId = $(obj).parent().parent().find("td[name=userId]").html();
	window.location.href = contextPath + '/user/toAdd?id=' + userId;
}

function delUser(obj) {

	layer.confirm("确定要移除选中用户吗？移除后不可恢复", {
		btn : [ '确定', '取消' ]
	}, function() {
		var id = $(obj).attr("userId");
		$.ajax({
			url : contextPath + '/user/del',
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
				} else {
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
