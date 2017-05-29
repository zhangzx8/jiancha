$(function(){
	addressDeatilToday.service.init();
});


var addressDeatilToday = {
		service : {
			init : function(){
				addressDeatilToday.service.dealClick();
				addressDeatilToday.controller.getPage(1);
			},
			dealClick : function(){
			    $(".data-table").on("click",".pageNumber", function(){
			    	var pageNo = $(this).attr("pageNo");
			    	addressDeatilToday.controller.getPage(pageNo);
			    });
			    
			    $("#fileDownTodayReturn").click(function(){
			    	var params= window.location.search;
//			    	if(confirm("确定要关闭吗")){
//			    		window.close();
//			    	}
			    	var type=$(this).attr("type");
			    	if(type=="black"){
			    		window.location.href=contextPath+"/black/list"+params;
			    	}else if(type=="white"){
			    		window.location.href=contextPath+"/white/list"+params;
			    	}else{
			    		window.location.href=contextPath+"/address/index"+params;
			    	}
			    });
			}
		},
		controller : {
			getPage : function(pageNo){
				var userName = $("#userName").val();
				$.ajax({
					url:contextPath+'/address/index/todayDetailTable',
					type:'POST',
					dataType : 'html',	
					data:{"pageNo":pageNo,"pageSize":15,"userName":userName},
					success:function(data){
						$(".data-table").empty();
						$(".data-table").append(data);
					},
					error:function(){
						//alert("操作失败");
					}
				});
			}
		}
		
		
		
};