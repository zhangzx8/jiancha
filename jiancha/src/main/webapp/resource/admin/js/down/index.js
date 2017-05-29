$(function(){
	fileDown.service.init();
});

var fileDown = {
	dao : {
			createSevenCenterHtml : function(arr){
				var totalCount = $("#totalOperatorCount").val();
				var html = '';
				for(var data in arr){
					var percent = (arr[data].count/totalCount).toPrecision(2)*100;
					html = html + '<div class="totalListWarp"><p class="totalListLabel fl">'+arr[data].center+'</p>';
					html = html + '<div class="progress fl MyProgress">';
					html = html + '<div class="progress-bar progress-bar-normal" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: '+percent+'%">';
					html = html + '</div><span class="progressNum fr">'+arr[data].count+'</span>';
					html = html + '</div></div>';
				}
				return html;
			}
	},
	service : {
		init : function(){
			fileDown.service.firstThreeCharts();
			fileDown.service.fourthCharts();
			fileDown.service.dealClick();
			fileDown.service.initPage();
			//fileDown.service.setForbidden();
			fileDown.service.setBlack();
			fileDown.service.setWhite();
		},
		initPage : function(){
			var dayType = $("#dayType").val();
			if(dayType == "WEEK"){
				$("#todayUserList").removeClass("currentTab");
				$("#weekUserList").addClass("currentTab");
			}
			var pageNo = $("#pageNo").val();
			fileDown.controller.getList(pageNo,"other");
		},
		firstThreeCharts : function(){
			fileDown.controller.getFirstThreeCharts();
		},
		fourthCharts : function(){
			fileDown.controller.getFourthCharts();
		},
		dealFirstThreeCharts : function(attach){
			var todayErrorCount = attach.todayErrorCount;
			var sevendDayErrorCount = attach.sevendDayErrorCount;
			var todayTotalCount = attach.todayTotalCount;
			var sevendDayTotalCount = attach.sevendDayTotalCount;
			var centerArray = attach.list;
			fileDown.service.dealChartOne(todayErrorCount, todayTotalCount);
			fileDown.service.dealChartTwo(sevendDayErrorCount, sevendDayTotalCount);
			fileDown.service.dealChartThree(centerArray);
			$("#todayError").html('<i class="fa fa-circle"></i>异常用户数：'+todayErrorCount);
			$("#todayNormal").html('<i class="fa fa-circle"></i>正常用户数：'+(todayTotalCount-todayErrorCount));
			$("#sevenErrorHidden").html('<i class="fa fa-circle"></i>异常用户数：'+sevendDayErrorCount);
			$("#sevenNormalHidden").html('<i class="fa fa-circle"></i>正常用户数：'+(sevendDayTotalCount-sevendDayErrorCount));
		},
		dealChartOne : function(errorCount, totalCount){
			 var y = (totalCount == 0 ? 0.0 : (errorCount/totalCount)*100).toFixed(1);
			 solidBigChart.series[0].data[0].y=parseFloat(y);
			 $("#solid_big").highcharts(solidBigChart);
			 
			 smallSolidChartHidden.series[0].data[0].y=parseFloat(y);
			 $("#solid_small_hidden").highcharts(smallSolidChartHidden);
		},
		dealChartTwo : function(errorCount, totalCount){
			var y = (totalCount == 0 ? 0.0 : (errorCount/totalCount)*100).toFixed(1);
			smallSolidChart.series[0].data[0].y=parseFloat(y);
			$("#solid_small").highcharts(smallSolidChart);
			
			solidBigChartHidden.series[0].data[0].y=parseFloat(y);
			$("#solid_big_hidden").highcharts(solidBigChartHidden);
		},
		dealChartThree : function(arr){
			$(".totalCountList").empty();
			var html = fileDown.dao.createSevenCenterHtml(arr);
			$(".totalCountList").append(html);
		},
		dealChartsFour : function(arr){
			var categories = [];
			var data1 = [];
			var data2 = [];
			for(var i in arr){
				categories.push(arr[i].time);
				data1.push(arr[i].errorCount);
				data2.push(arr[i].totalCount-arr[i].errorCount);
			}
			sevenUserAmountSplineChart.xAxis.categories = categories;
			sevenUserAmountSplineChart.series[0].data = data1;
			sevenUserAmountSplineChart.series[1].data = data2;
			$("#chartSpline").highcharts(sevenUserAmountSplineChart);
		},
		dealClick : function(){
			$(".addDateSelectWarp li").click(function(){
				$("#dayType").val($(this).attr("dayType"));
				fileDown.controller.getList(1,"other");
			});
			$(".toolbtn").click(function(){
				fileDown.controller.getList(1,"other");
			});
			$(".data-table").on("click",".fileDetail", function(){
				var pageNo = $(".page-number .active").text();//当前页码
				var searchName = encodeURIComponent(encodeURIComponent($("#hiddenSaerch").val()));
				var state = $("#hiddenState").val();
				var userType = $("#hiddenUserType").val();
				
				var userName = $(this).attr("userName");
				var dayType = $("#dayType").val();
				if(dayType == "DAY"){
					//window.open(contextPath+"/down/index/todayDetail?userName="+userName);
					window.location.href=contextPath+"/down/index/todayDetail?userName="+userName+"&pageNo="+pageNo+"&search="+searchName+"&state="+state+"&userType="+userType+"&dayType="+dayType;
				}else if(dayType == "WEEK"){
					//window.open(contextPath+"/down/index/detail?userName="+userName);
					window.location.href=contextPath+"/down/index/detail?userName="+userName+"&pageNo="+pageNo+"&search="+searchName+"&state="+state+"&userType="+userType+"&dayType="+dayType;
				}
				
			});
			
		    $(".data-table").on("click",".pageNumber", function(){
		    	var pageNo = $(this).attr("pageNo");
				fileDown.controller.getList(pageNo,"page");
		    });
		    
		    
		    $("#solid_small").click(function(){
		    	$("#chartOneShow").hide();
		    	$("#chartOneHidden").show();
		    });
		    
		    $("#solid_small_hidden").click(function(){
		    	$("#chartOneHidden").hide();
		    	$("#chartOneShow").show();
		    });
		    
		    
//			$(".data-table").on("click",".operatorBlack", function(){
//				$("#addBlackList").modal();
//			});
//			$(".data-table").on("click",".operatorWhite", function(){
//				$("#addWhiteList").modal();
//			});
			
		    $("#inputDept").on("input",function(){
		    	var addReason = $("#inputDept").val();
		    	if(addReason.length < 5 || addReason.length > 30){
		    		$(this).next().show();
		    	}else{
		    		$(this).next().hide();
		    	}
//		    	if(addReason == ""){
//		    		$(this).next().text("加入原因不能为空").show();
//		    	}else if(addReason.length < 5 || addReason.length > 30){
//		    		$(this).next().text("请输入5-30个字符").show();
//		    	}else if(/^\d+$/.test(addReason)){
//		    		$(this).next().text("不能输入纯数字").show();
//		    	}else if(/[#$%&\^*￥@]+/.test(addReason)){
//		    		$(this).next().text("不能包含特殊字符").show();
//		    	}else if(!/[\u4e00-\u9fa5]+/.test(addReason)){
//		    		$(this).next().text("必须包含中文").show();
//		    	}else{
//		    		$(this).next().hide();
//		    	}
		    });
		    
		    $("#setWhiteReason").on("input",function(){
		    	var addReason = $("#setWhiteReason").val();
		    	if(addReason.length < 5 || addReason.length > 30){
		    		$(this).next().show();
		    	}else{
		    		$(this).next().hide();
		    	}
//		    	if(addReason == ""){
//		    		$(this).next().text("加入原因不能为空").show();
//		    	}else if(addReason.length < 5 || addReason.length > 30){
//		    		$(this).next().text("请输入5-30个字符").show();
//		    	}else if(/^\d+$/.test(addReason)){
//		    		$(this).next().text("不能输入纯数字").show();
//		    	}else if(/[#$%&\^*￥@]+/.test(addReason)){
//		    		$(this).next().text("不能包含特殊字符").show();
//		    	}else if(!/[\u4e00-\u9fa5]+/.test(addReason)){
//		    		$(this).next().text("必须包含中文").show();
//		    	}else{
//		    		$(this).next().hide();
//		    	}
		    });

		},
		setForbidden : function(){
			$("#tableList").on("click","#operatorForbidden", function(){
				var userName = $(this).parent().attr("userName");
				$("#userRestrict #forbiddenUserName").val(userName);
			});
			$("#saveBtnForbidden").click(function(){
				var userName = $(this).prev().val();
				var forbiddenTime = $("#forbiddenTime").val();
				var forbiddenReason = $("#forbiddenReason").val();
				$(this).next().click();
				fileDown.controller.forbidden(userName,forbiddenTime,forbiddenReason);
			});
		},
		setBlack : function(){
			$(".data-table").on("click",".operatorBlack", function(){
				var userName = $(this).parent().attr("userName");
				var loginUserName = $("#loginUserName").val();
				if(loginUserName == userName){
					layer.msg("用户不能对自己进行操作");
					return false;
				}
				$("#addBlackList #blackUserName").val(userName);
				$("#inputDept").val("");
				$("#addBlackList .info_span").hide();
				$("#addBlackList").modal();
			});
			$("#saveBtnBlack").click(function(){
				var userName = $(this).prev().val();
				var addReason = $("#inputDept").val();
				if(addReason.length < 5 || addReason.length > 30){
					$(this).parent().prev().find(".info_span").show();
					return;
				}
				//var flag = fileDown.service.validateBlackAndWhite(addReason);
				//if(confirm("确定要对将此人加入黑名单吗？")){
					$(this).next().click();
					fileDown.controller.setUserType(userName,"black",addReason);
			//	}
			});
		},
		setWhite : function(){
			$(".data-table").on("click",".operatorWhite", function(){
				var userName = $(this).parent().attr("userName");
				var loginUserName = $("#loginUserName").val();
				if(loginUserName == userName){
					layer.msg("用户不能对自己进行操作");
					return false;
				}
				$("#addWhiteList #whiteUserName").val(userName);
				$("#setWhiteReason").val("");
				$("#addWhiteList .info_span").hide();
				$("#addWhiteList").modal();
			});
			$("#saveBtnWhite").click(function(){
				var userName = $(this).prev().val();
				var addReason = $("#setWhiteReason").val();
				if(addReason.length < 5 || addReason.length > 30){
					$(this).parent().prev().find(".info_span").show();
					return;
				}
				//var flag = fileDown.service.validateBlackAndWhite(addReason);
				//if(confirm("确定要对将此人加入白名单吗？")){
					$(this).next().click();
					fileDown.controller.setUserType(userName,"white",addReason);
				//}
			});
		},
		refreshPage : function(){
			fileDown.service.firstThreeCharts();//刷新前3个图表
			fileDown.service.fourthCharts();//刷新第四个图表
			var pageNo = $(".page-number .active").text();
			fileDown.controller.getList(pageNo,"page");//刷新列表
		},
		validateBlackAndWhite : function(addReason){
	    	if(addReason == ""){
	    		return false;
	    	}else if(addReason.length < 5 || addReason.length > 30){
	    		return false;
	    	}else if(/^\d+$/.test(addReason)){
	    		return false;
	    	}else if(/[#$%&\^*￥@]+/.test(addReason)){
	    		return false;
	    	}else if(!/[\u4e00-\u9fa5]+/.test(addReason)){
	    		return false;
	    	}else{
	    		return true;
	    	}
		}
		
	},	
	controller : {
		getFirstThreeCharts : function(){
			$.ajax({
				url:contextPath+'/common/ajax/firstThreeCharts',
				type:'POST',
				dataType : 'json',	
				data:{"busType":"down"},
				success:function(data){
					if(data.code == 1){
						fileDown.service.dealFirstThreeCharts(data.attach);
					}
				},
				error:function(){
					//alert("操作失败");
				}
			});
		},
		getFourthCharts : function(){
			$.ajax({
				url:contextPath+'/common/ajax/fourthCharts',
				type:'POST',
				dataType : 'json',	
				data:{"busType":"down"},
				success:function(data){
					if(data.code == 1){
						fileDown.service.dealChartsFour(data.attach);
					}
				},
				error:function(){
					//alert("操作失败");
				}
			});
		},
		getList : function(pageNo,type){
			var searchName = "";
			var state = "";
			var userType = "";
			if(type=="page"){
				var searchName = $("#hiddenSaerch").val();
				var state = $("#hiddenState").val();
				var userType = $("#hiddenUserType").val();
			}
			if(type=="other"){
				var searchName = $.trim($("#searchName").val());
				var state = $("#userState").val();
				var userType = $("#userType").val();
			}
			var dayType = $("#dayType").val();
			$.ajax({
				url:contextPath+'/down/index/table',
				type:'POST',
				dataType : 'html',	
				data:{"pageNo":pageNo,"pageSize":15,"dayType":dayType,"userType":userType,"state":state,"search":searchName},
				success:function(data){
					$(".data-table").empty();
					$(".data-table").append(data);
				},
				error:function(){
					//alert("操作失败");
				}
			});
		},
		forbidden : function(userName,limitTime,limitContent){
			$.ajax({
				url:contextPath+'/common/ajax/forbidden',
				type:'POST',
				dataType : 'json',	
				data:{"userName":userName,"type":1,"limitContent":limitContent,"limitTime":limitTime},
				success:function(data){
					if(data.code == 1){
						layer.msg("操作成功");
						//window.location.href=contextPath+"/address/index";
						//取消限制成功
						//刷新页面
						//var pageNo = $(".page-number .active").text();
						//var searchName = $("#hiddenSearchName").val();
						//var userType = $("#hiddenUserType").val();
						//var limitTime = $("#hiddenLimitTime").val();
						//forbiddenList.controller.getPage(pageNo,searchName,userType,limitTime);
					}
				},
				error:function(){
					//alert("操作失败");
				}
			});
		},
		setUserType : function(userName,userType,addReason){
			$.ajax({
				url:contextPath+'/common/ajax/setUserType',
				type:'POST',
				dataType : 'json',	
				data:{"userName":userName,"userType":userType,"limitType":"down","addReason":addReason},
				success:function(data){
					if(data.code == 1){
						layer.msg("操作成功");
						fileDown.service.refreshPage();
					}
				},
				error:function(){
					//alert("操作失败");
				}
			});
		}
		
	}
};


var solidBigChart = {
	    chart: {
	      //  renderTo:"renderToID",
	        type: 'solidgauge',
	        marginLeft:-26
	       //marginTop: -6
	    },
	    credits:{
	        enabled:false
	    },
	    title: {
	        text:null

	    },
	    legend: {
	        enabled:false
	    },
	    tooltip: {
	        enabled: false
	    },
	    pane: {
	        startAngle: 0,
	        endAngle: 360,
	        background: [{ // Track for Move
	            outerRadius: '112%',
	            innerRadius: '88%',
	            backgroundColor: Highcharts.Color("#1cc1fb").setOpacity(1).get(),
	            borderWidth: 0
	        }]
	    },
	    yAxis: {
	        min: 0,
	        max: 100,
	        lineWidth: 0,
	        tickPositions: []
	    },
	    plotOptions: {
	        solidgauge: {
	            borderWidth:'28px',
	            dataLabels: {
	                enabled: true,
	                borderRadius:'none',
	                borderWidth:'0',
	                //verticalAlign:'center',
	                rotation: -360,
	                x: 2,
	                y: 8,
	                style:{
	                    fontSize:'14px',
	                    color:"#a3a3a3",
	                    textShadow:'',
	                    textAlign:'center',
	                    fontWeight: "0",
	                    fontFamily:"Microsoft Yahei"
	                },
	                formatter:function(){
	                	var percent = '0.0';
	                	if(this.y != 0){
	                		percent = this.y;
	                	}
	                    return '<div>'+'<p style="color:#46517f;font-size:36px;font-weight: 600;">'+percent+'%'+'</p>'+
	                        '<br>'+''
	                        + '<p>'+'当天异常率'+'</p>'+'</div>'
	                }
	            },
	            linecap: 'round',
	            stickyTracking: false
	        }
	    },
	    series: [{
	        name: '当天异常率',
	        borderColor: "#ffde00",
	        data: [{
	            color: "#ffde00",
	            radius: '100%',
	            innerRadius: '100%',
	            y: 10.7
	        }]
	    }]

	};



var smallSolidChart = {
        chart: {
           // renderTo:renderToID,
            type: 'solidgauge',
           // marginTop: -6
        },
        credits:{
            enabled:false
        },
        title: {
            text:null

        },
        legend: {
            enabled:false
        },
        tooltip: {
            enabled: false
        },
        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{ // Track for Move
                outerRadius: '112%',
                innerRadius: '88%',
                backgroundColor: Highcharts.Color("#1cc1fb").setOpacity(1).get(),
                borderWidth: 0
            }]
        },
        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },
        plotOptions: {
            solidgauge: {
                borderWidth:'12px',
                dataLabels: {
                    enabled: true,
                    borderRadius:'none',
                    borderWidth:'0',
                    //verticalAlign:'center',
                    rotation: -360,
                    x: 2,
                    y: 8,
                    style:{
                        fontSize:'14px',
                        color:"#a3a3a3",
                        textShadow:'',
                        textAlign:'center',
                        fontWeight: "0",
                        fontFamily:"Microsoft Yahei"
                    },
                    formatter:function(){
	                	var percent = '0.0';
	                	if(this.y != 0){
	                		percent = this.y;
	                	}
                        return '<div>'+'<p style="color:#46517f;font-size:14px;">'+percent+'%'+'</p>'+ '<br>'+''
                        + '<p>'+'七天'+'</p>'+'</div>'
                    }
                },
                linecap: 'round',
                stickyTracking: false
            }
        },
        series: [{
            name: '七天异常率',
            borderColor: "#ffde00",
            data: [{
                color: "#ffde00",
                radius: '100%',
                innerRadius: '100%',
                y: 10.7
            }]
        }]

    };


var sevenUserAmountSplineChart = {
        colors: ["#ffde00","#1cc1fb"],
        chart: {
            //renderTo:renderToID,
            type: 'spline'
            //marginTop: -6
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        }, legend: {
            enabled: false
        },
        xAxis: {
            categories: [
                         '0.0',
                         '0.0',
                         '0.0',
                         '0.0',
                         '0.0',
                         '0.0',
                         '0.0'
                     ],
          //  type: 'datetime',
            labels:{
                enabled: true //不显示x轴上的label，数字标识
            },
            tickColor: '#1b262e',
            tickWidth: 0,//设置刻度宽度为0 不显示
            lineColor: '#dadada',//设置x轴线的颜色
            lineWidth: 0
        },
        yAxis: [{
            lineWidth: 1,
            lineColor: '#dadada',
            title: {
                text: ''
            },
            allowDecimals:false
        }, {
            lineWidth: 1,
            lineColor: '#dadada',
            opposite: true,
            title: {
                text: ''
            },
            allowDecimals:false
        }],
        tooltip: {
            valueSuffix: ' '
        },
        plotOptions: {
            spline: {
                lineWidth: 2,
                states: {
                    hover: {
                        lineWidth: 2
                    }
                },
                marker: {
                    enabled: false
                },
               // pointInterval: 3600000, // one hour
               // pointStart: Date.UTC(2009, 9, 6, 0, 0, 0)
            }
        },
        series: [{
            name: '异常用户数',
            data: [4.3, 5.1, 4.3, 5.2, 5.4, 4.7, 3.5, 4.1, 5.6, 7.4, 6.9]
        }, {
            name: '正常用户数',
            data: [0.0, 0.0, 0.67, 5.0, 3.0, 0.0, 0.0, 0.6, 0.1, 0.0, 0.3]
        }],
        navigation: {
            menuItemStyle: {
                fontSize: '10px'
            }
        }
    };

var solidBigChartHidden = {
	    chart: {
	      //  renderTo:"renderToID",
	        type: 'solidgauge',
	        marginLeft:-26
	       //marginTop: -6
	    },
	    credits:{
	        enabled:false
	    },
	    title: {
	        text:null

	    },
	    legend: {
	        enabled:false
	    },
	    tooltip: {
	        enabled: false
	    },
	    pane: {
	        startAngle: 0,
	        endAngle: 360,
	        background: [{ // Track for Move
	            outerRadius: '112%',
	            innerRadius: '88%',
	            backgroundColor: Highcharts.Color("#1cc1fb").setOpacity(1).get(),
	            borderWidth: 0
	        }]
	    },
	    yAxis: {
	        min: 0,
	        max: 100,
	        lineWidth: 0,
	        tickPositions: []
	    },
	    plotOptions: {
	        solidgauge: {
	            borderWidth:'28px',
	            dataLabels: {
	                enabled: true,
	                borderRadius:'none',
	                borderWidth:'0',
	                //verticalAlign:'center',
	                rotation: -360,
	                x: 2,
	                y: 8,
	                style:{
	                    fontSize:'14px',
	                    color:"#a3a3a3",
	                    textShadow:'',
	                    textAlign:'center',
	                    fontWeight: "0",
	                    fontFamily:"Microsoft Yahei"
	                },
	                formatter:function(){
	                	var percent = '0.0';
	                	if(this.y != 0){
	                		percent = this.y;
	                	}
	                    return '<div>'+'<p style="color:#46517f;font-size:36px;font-weight: 600;">'+percent+'%'+'</p>'+
	                        '<br>'+''
	                        + '<p>'+'七天异常率'+'</p>'+'</div>'
	                }
	            },
	            linecap: 'round',
	            stickyTracking: false
	        }
	    },
	    series: [{
	        name: '七天异常率',
	        borderColor: "#ffde00",
	        data: [{
	            color: "#ffde00",
	            radius: '100%',
	            innerRadius: '100%',
	            y: 10.7
	        }]
	    }]

	};



var smallSolidChartHidden = {
        chart: {
           // renderTo:renderToID,
            type: 'solidgauge',
           // marginTop: -6
        },
        credits:{
            enabled:false
        },
        title: {
            text:null

        },
        legend: {
            enabled:false
        },
        tooltip: {
            enabled: false
        },
        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{ // Track for Move
                outerRadius: '112%',
                innerRadius: '88%',
                backgroundColor: Highcharts.Color("#1cc1fb").setOpacity(1).get(),
                borderWidth: 0
            }]
        },
        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },
        plotOptions: {
            solidgauge: {
                borderWidth:'12px',
                dataLabels: {
                    enabled: true,
                    borderRadius:'none',
                    borderWidth:'0',
                    //verticalAlign:'center',
                    rotation: -360,
                    x: 2,
                    y: 8,
                    style:{
                        fontSize:'14px',
                        color:"#a3a3a3",
                        textShadow:'',
                        textAlign:'center',
                        fontWeight: "0",
                        fontFamily:"Microsoft Yahei"
                    },
                    formatter:function(){
	                	var percent = '0.0';
	                	if(this.y != 0){
	                		percent = this.y;
	                	}
                        return '<div>'+'<p style="color:#46517f;font-size:14px;">'+percent+'%'+'</p>'+ '<br>'+''
                        + '<p>'+'当天'+'</p>'+'</div>'
                    }
                },
                linecap: 'round',
                stickyTracking: false
            }
        },
        series: [{
            name: '当天异常率',
            borderColor: "#ffde00",
            data: [{
                color: "#ffde00",
                radius: '100%',
                innerRadius: '100%',
                y: 10.7
            }]
        }]

    };