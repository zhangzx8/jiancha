//退出遮罩层
function clouseMask(){

	$(".mask_layer").hide();
	$(".mask").hide();
	
	//url:removeFloat
	$.ajax({
			url:contextPath+'/removeFloat',
			type:"POST",  
	        dataType: 'html',	
			data:{},
			success:function(data){
				
			},
			error:function(){
				//alert("操作失败");
				
			}
			
			
		});
	
}

//通过首尔弹窗去往一级报警记录列表
function toAlarmListOneAnd(){

	$(".mask_layer").remove();
	$(".mask").remove();
	window.location.href=contextPath+"/alarm/toList?level=1&change=1"
	
}

//通过消息提示去往一级报警记录列表
function toAlarmListOne(){

	$(".mask_layer").remove();
	$(".mask").remove();
	window.location.href=contextPath+"/alarm/toList?level=1&change=2"
	
}

//去往二级报警记录列表
function toAlarmListTwo(){

	window.location.href=contextPath+"/alarm/toList?level=2"
	
}

//去往三级报警记录列表
function toAlarmListThree(){

	window.location.href=contextPath+"/alarm/toList?level=3"
	
}

//悬浮告警提示条 关闭
function clouseDiv(){
	
	$(".float-alarm").hide();
	
	//url:removeMessage
	$.ajax({
			url:contextPath+'/removeMessage',
			type:"POST",  
	        dataType: 'html',	
			data:{},
			success:function(data){
				
			},
			error:function(){
				//alert("操作失败");
				
			}
			
			
		});
}