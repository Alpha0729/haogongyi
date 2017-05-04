function map(){

	// 获取地图内容数据
	getMapData = function(callback){


		var tempData = '{"map_1":{"provinces":"北京","center":"北京和众泽益公益发展中心|北京市协作者社会工作发展中心","link":"http://baidu.com"},"map_2":{"provinces":"河北","center":"河北省社会工作促进会","link":"http://baidu.com"},"map_3":{"provinces":"山西","center":"老醯儿公益（太原市希望社会工作服务中心）","link":""},"map_4":{"provinces":"内蒙古","center":"鄂尔多斯市益启公益组织发展中心","link":""},"map_5":{"provinces":"辽宁","center":"辽宁省青年志愿者协会|沈阳市皇姑区利州社会工作服务中心","link":""},"map_6":{"provinces":"吉林","center":"长春心语志愿者协会","link":""},"map_7":{"provinces":"黑龙江","center":"黑龙江省大众社会工作服务中心","link":""},"map_8":{"provinces":"江苏","center":"南京市惠仁社会工作服务中心","link":""},"map_9":{"provinces":"浙江","center":"杭州市上城区明德公益事业发展中心","link":""},"map_10":{"provinces":"安徽","center":"安徽益和公益服务中心","link":""},"map_11":{"provinces":"福建","center":"福建省海峡青少年服务中心","link":""},"map_12":{"provinces":"江西","center":"南昌益心益意公益服务中心","link":""},"map_13":{"provinces":"山东","center":"潍坊市奎文区一家亲社会组织培育中心|爱山东公益创新平台(济南市市中区同心圆社会组织服务中心)","link":""},"map_14":{"provinces":"湖北","center":"","link":""},"map_15":{"provinces":"湖南","center":"湖南乐创公益慈善发展中心|长沙仁与公益组织发展与研究中心","link":""},"map_16":{"provinces":"广东","center":"广东省千禾社区公益基金会|江门市蓬江区社会工作协会","link":""},"map_17":{"provinces":"广西","center":"广西厚生社会工作服务中心","link":""},"map_18":{"provinces":"河南","center":"郑州市和勤青年志愿互助中心","link":""},"map_19":{"provinces":"四川","center":"四川协力公益发展中心","link":""},"map_20":{"provinces":"贵州","center":"贵阳市众益志愿者服务发展中心","link":""},"map_21":{"provinces":"云南","center":"云南连心社区照顾服务中心","link":""},"map_22":{"provinces":"西藏","center":"","link":""},"map_23":{"provinces":"陕西","center":"陕西众益社会组织服务中心","link":""},"map_24":{"provinces":"甘肃","center":"甘肃伊山伊水环境与社会发展中心","link":""},"map_25":{"provinces":"青海","center":"青海省社会工作协会","link":""},"map_26":{"provinces":"宁夏","center":"宁夏公益慈善事业促进会","link":""},"map_27":{"provinces":"新疆","center":"克拉玛依区志愿者联合会同心义工分会","link":""},"map_28":{"provinces":"天津","center":"","link":""},"map_29":{"provinces":"上海","center":"上海恩派社会创新发展中心","link":""},"map_30":{"provinces":"重庆","center":"重庆仁爱社会工作服务中心","link":""},"map_31":{"provinces":"香港","center":"","link":""},"map_32":{"provinces":"澳门","center":"","link":""},"map_33":{"provinces":"台湾","center":"","link":""},"map_34":{"provinces":"海南","center":"","link":""}}';

		var obj = JSON.parse(tempData);
		
		
		if (store.enabled) {
            
			store.set('mapData', obj);
        }else{
        	alert('浏览器不支持地图显示，请升级您的浏览器')
            return
        }

		callback();
		
	}

	// 鼠标出发事件，更改右侧内容显示
	setProvinces = function(params){


		var obj = store.get('mapData');

        var mapId = params.value;
		t = 'map_'+mapId;
		var provinces = obj[t]['provinces'];
		var center = obj[t]['center'];
        var link = obj[t]['link'];

        console.log(params);

        setProvincesHtml(provinces,center,link);
	}

    setProvincesHtml = function(provinces,center,link){

        var centerArr = center.split("|")

        //if(center==""){
        //    $("#map-content").fadeOut();
       // }else{
            $("#map-content").fadeIn();
            $(".map-provinces").text(provinces);
            if(centerArr.length > 1){
                var centerTemp = '';
                for (var i = 0 ; i < centerArr.length; i++) {
                    centerTemp += '<p>'+centerArr[i]+'</p>';
                };
                $(".map-center").html('<a href="'+link+'">'+centerTemp+'</a>')
            }else{
                $(".map-center").html('<a href="'+link+'">'+center+'</a>');
            }

        //}
    }

	// 配置Chart插件
	setChart = function(myChart){

		option = {
			title : {
				show:true,
				text:"枢纽机构名单",
				textStyle:{
					color:"#44505f",
					fontSize:"30",
				},
				//textAlign:"left",
				right:'70',
				top:'60',
			},
		    tooltip : {
		        show:false,
		        //trigger: 'item',
		        //formatter: '{b}',
		    },
		    series : [
		        {
		            name: '中国',
		            type: 'map',
		            mapType: 'china',
		            selectedMode : 'single',
		            backgroundColor:'#fff',
		           	left:90,
		           	top:60,
		            itemStyle:{

		                normal:{	//默认样式
		                	label:{show:false},
		                	borderWidth: 1,//区域边框宽度
                        	//borderColor: '#009fe8',//区域边框颜色
                        	areaColor:"#686868",//区域颜色
                        	opacity:0.7
		                },
		                emphasis:{	//鼠标激活样式
		                	label:{show:false},
		                	borderWidth: 1,//区域边框宽度
                        	//borderColor: '#009fe8',//区域边框颜色
                        	areaColor:"#d16467",//区域颜色
                        	opacity:0.7
		                },

		            },
		            data:[

		                //{name:'广东',selected:true}
		                {name:'北京',value:1,selected:true},
		                {name:'河北',value:2},
		                {name:'山西',value:3},
		                {name:'内蒙古',value:4},
		                {name:'辽宁',value:5},
		                {name:'吉林',value:6},
		                {name:'黑龙江',value:7},
		                {name:'江苏',value:8},
		                {name:'浙江',value:9},
		                {name:'安徽',value:10},
		                {name:'福建',value:11},
		                {name:'江西',value:12},
		                {name:'山东',value:13},
		                {name:'湖北',value:14},
		                {name:'湖南',value:15},
		                {name:'广东',value:16},
		                {name:'广西',value:17},
		                {name:'河南',value:18},
		                {name:'四川',value:19},
		                {name:'贵州',value:20},
		                {name:'云南',value:21},
		                {name:'西藏',value:22},
		                {name:'陕西',value:23},
		                {name:'甘肃',value:24},
		                {name:'青海',value:25},
		                {name:'宁夏',value:26},
		                {name:'新疆',value:27},
		                {name:'天津',value:28},
		                {name:'上海',value:29},
		                {name:'重庆',value:30},
		                {name:'香港',value:31},
		                {name:'澳门',value:32},
		                {name:'台湾',value:33},
		                {name:'海南',value:34}
		                
		            ]
		        }
		    ]
		};

		myChart.hideLoading();
        myChart.setOption(option); // 使用刚指定的配置项和数据显示图表。
        
        myChart.on('mouseover', function (params) {
                //setProvinces(params);
            });
        myChart.on('click', function (params) {
                setProvinces(params);
            });
	}

	// 初始化地图
	this.initChart = function(){

        setProvincesHtml('北京','北京和众泽益公益发展中心');

		var myChart = echarts.init(document.getElementById('map'));	//创建Chart
		myChart.showLoading();	//加载数据前显示的动画效果

		getMapData(function(){	
			
			setChart(myChart);	//获取数据后，配置Chart

		});

		
	}





}