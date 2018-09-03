$(function () {
    paintMap1();
});
 
function paintMap1() {
    var myData = [

        {name: '海门', value: [121.15, 31.89, 90]},
          {name: '鄂尔多斯', value: [109.781327, 39.608266, 120]},
          {name: '招远', value: [120.38, 37.35, 142]},
        {name: '舟山', value: [122.207216, 29.985295, 123]},
    ];
    var mapChart = echarts.init($('#mapDemo1')[0]);
    var option = {
        geo: { //定义地理坐标系组件内容
            map: 'china',
    
            itemStyle: {					// 定义样式
                normal: {					// 普通状态下的样式
                    areaColor: '#323c48',
                    borderColor: '#111'
                },
                emphasis: {					// 高亮状态下的样式
                    areaColor: '#2a333d'
                }
            }
        },
         visualMap: {
            type: 'continuous', // 连续型
            min: 0,       		// 值域最小值，必须参数
            max: 200,			// 值域最大值，必须参数
            calculable: true,	// 是否启用值域漫游
            inRange: {
                     color: ['#50a3ba','#eac736','#d94e5d']
                                 // 指定数值从低到高时的颜色变化
              },
            textStyle: {
                color: '#fff'	// 值域控件的文本颜色
            }
             },
        backgroundColor: '#404a59',  		// 图表背景色
        series: [
            {
                name: '销量',
                type: 'scatter',
                coordinateSystem: 'geo', //指定使用geo组件类型
    
                data: myData // series数据内容
            }
        ]
    }
    
    $.get('china.json', function (chinaJson) {
        console.log(111);
        echarts.registerMap('china', chinaJson);
        mapChart.setOption(option);
    });
}
