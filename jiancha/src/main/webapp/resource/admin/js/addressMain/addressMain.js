/**
 * Created by hanpan on 2016/12/6.
 */
$(function () {
   drowSolid('solid_big','28px');
   drowSolid_small('solid_small','12px');
   drowchartSpline("chartSpline");
    drowsearchareaspline("searchareaspline");

    //表格日期选择切换

    $(".addDateSelectWarp li").each(function(){
         $(this).click(function(){

             $(this).addClass("currentTab").siblings("li").removeClass("currentTab");
         });
    });

    //查看通讯记录详情操作

   address_searchDetial(1);

    //返回操作
$("#addressReturn").click(function(){
    $("#addressMain").show();
    $("#addressSearchDetial").hide();
});




});
//绘制大环形图
function drowSolid(renderToID,borderWidth){
    // 去掉这里的注释就是类似 Apple Watch 上的效果了
    if (!Highcharts.theme) {
        Highcharts.setOptions({
            chart: {
                backgroundColor: 'transparent'

            },
            colors: ["#ffde00","#1cc1fb"]
        });
    }
    chart = new Highcharts.Chart({
        chart: {
            renderTo:renderToID,
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
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(1).get(),
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
                borderWidth:borderWidth,
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
                        return '<div>'+'<p style="color:#46517f;font-size:36px;font-weight: 600;">'+this.y+'%'+'</p>'+
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
            borderColor: Highcharts.getOptions().colors[0],
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '100%',
                innerRadius: '100%',
                y: 10.7
            }]
        }]

    });
}

//绘制小环形图
function drowSolid_small(renderToID,borderWidth){
    // 去掉这里的注释就是类似 Apple Watch 上的效果了
    if (!Highcharts.theme) {
        Highcharts.setOptions({
            chart: {
                backgroundColor: 'transparent'
            },
            colors: ["#ffde00","#1cc1fb"]
        });
    }
    chart = new Highcharts.Chart({
        chart: {
            renderTo:renderToID,
            type: 'solidgauge'
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
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(1).get(),
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
                borderWidth:borderWidth,
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
                        return '<div>'+'<p style="color:#46517f;font-size:14px;">'+this.y+'</p>'+ '</div>'
                    }
                },
                linecap: 'round',
                stickyTracking: false
            }
        },
        series: [{
            name: '当天异常率',
            borderColor: Highcharts.getOptions().colors[0],
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '100%',
                innerRadius: '100%',
                y: 10.7
            }]
        }]

    });
}


//绘制折线图
function drowchartSpline(renderToID){
    colors=["#ffde00","#1cc1fb"];
        chart = new Highcharts.Chart({
            colors: ["#ffde00","#1cc1fb"],
            chart: {
                renderTo:renderToID,
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
                type: 'datetime',
                labels:{
                    enabled: false //不显示x轴上的label，数字标识
                },
                //tickColor: '#1b262e',
                tickWidth: 0,//设置刻度宽度为0 不显示
                lineColor: '#dadada',//设置x轴线的颜色
                lineWidth: 0
            },
            yAxis: [{
                lineWidth: 1,
                lineColor: '#dadada',
                title: {
                    text: ''
                }
            }, {
                lineWidth: 1,
                lineColor: '#dadada',
                opposite: true,
                title: {
                    text: ''
                }
            }],
            tooltip: {
                valueSuffix: ' m/s'
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
                    pointInterval: 3600000, // one hour
                    pointStart: Date.UTC(2009, 9, 6, 0, 0, 0)
                }
            },
            series: [{
                name: 'Hestavollane',
                data: [4.3, 5.1, 4.3, 5.2, 5.4, 4.7, 3.5, 4.1, 5.6, 7.4, 6.9]
            }, {
                name: 'Voll',
                data: [0.0, 0.0, 0.67, 5.0, 3.0, 0.0, 0.0, 0.6, 0.1, 0.0, 0.3]
            }],
            navigation: {
                menuItemStyle: {
                    fontSize: '10px'
                }
            }
        });

}

//绘制面积折线图
function drowsearchareaspline(renderToID){
    colors=["#ffde00","#1cc1fb"];
    chart = new Highcharts.Chart({
        chart: {
            renderTo:renderToID,
            type: 'areaspline'
            //marginTop: -6
        },
        title: {
            text: ''
        }, credits:{
            enabled:false
        },
        exporting: {
            enabled: false
        },
        legend: {
            //layout: 'center',
            align: 'center',
            verticalAlign: 'bottom',
            //x: 150,
            y: 20,
            style:{

            },
            itemStyle: {
                fontSize:'14px',
                color:'#a2a2a2'
            },
            //floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            symbolWidth:12,
            symbolRadius:6
        },
        xAxis: {
            categories: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            tickWidth: 0,//设置刻度宽度为0 不显示
            lineColor: '#dadada',//设置x轴线的颜色
            lineWidth: 1
        },
        yAxis: [{
            lineWidth: 1,
            lineColor: '#dadada',
            title: {
                text: ''
            }
        }, {
            lineWidth: 1,
            lineColor: '#dadada',
            opposite: true,
            title: {
                text: ''
            }
        }],
        tooltip: {
            shared: true,
            valueSuffix: ' units',
            crosshairs: {
                width: 1,
                color: '#1cc1fb',
                dashStyle: 'solid'
            }
        }, credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'John',
            data: [3, 4, 3, 5, 4, 10, 12]
        }, {
            name: 'Jane',
            data: [1, 3, 4, 3, 3, 5, 4]
        }]

    });
}


/****
 * 作用：表格查看详情操作
 * 传参：改行记录的标识，可以自行根据后台需要的内容传参此处只是模拟
 * 作者：韩盼
 * 日期：2016-12-09
 *此处的操作方式是点击这个 查看详情，隐藏当前前所见的 .content-wrapper  id为：#addressMain 的内容，
 * 显示查看详情的内容  id为：addressSearchDetial
 * 这样操作是为了传参方便，如果感觉不妥，可以自行调整， 查看详情页面项目中有 名称为address_serchDetial.html
 * ***/
function address_searchDetial(recordId){
    var recordId=recordId;
      $(".address_searchDetial").click(function(){
          $("#addressMain").hide();
          $("#addressSearchDetial").show();
      });

}
