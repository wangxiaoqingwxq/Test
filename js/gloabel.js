/*
Date:2016年7月5日
Author:wangxiaoqing
Discription:AOM系统自动化巡检软件
*/
//动态设置布局div的宽高
function Set_height(){
	var Body_height = $("body").height();//获取body的高7
	var C_R_height = $(".Center_right").height();//获取Center_right的高度
	$(".Center").css("height",Body_height-60);
	$("#Center_Table").css("height",Body_height-60);
	$(".Center_right").css({height:Body_height-60}); 
};

//把指定的静态页面显示在指定的容易内
function GoToUrl(url,id){
	$.ajax({
	   type: "get",
	   url: url,//url:"../bbgx.html"
	   data: "",//querycondition
	   success: function(msg){
		 $(id).html(msg);//工作区ID 
	   }
	});
};
//默认加载首页
function The_Content_Show(url,Showid){
	GoToUrl(url,Showid);//把指定的静态页面显示在指定的容器内
};
//设置业务视图详情布局的宽高
function Set_LayoutWH(){
	var W_layright = $("#Center_R_Box").width();
	var H_center = $("body").height()-90;
	$("#Center_TcBox").css({width:W_layright,height:H_center});
	$(".Details_Note").css({width:W_layright,height:H_center-45});
};

//菜单点击显示内容
function LeftMenuClick(ContentUrl,Contentshowdiv,obj){
	$(obj).addClass("On").parent().siblings().children().removeClass("On");
	$(obj).parent().siblings().children(".L_Nav0").children().children().removeClass("On");
	GoToUrl(ContentUrl,Contentshowdiv);//显示对应左侧二级菜单的内容静态页面
};

function The_First_load(url,Showid){
	GoToUrl('Index_sy.html','#Center_R_Box');//把指定的静态页面显示在指定的容器内
};
//显示详情层方法
function ShowCenter_TcBox(url,ShowId){
	GoToUrl(url,ShowId);//把指定的静态页面显示在指定的容器内
	$(ShowId).show().animate({left:"0px"},'slow');
};
function HideCenter_TcBox(obj){
	if($(obj).parent().parent().parent().css("left")=="0px"){
			$(obj).parent().parent().animate({left:-$("body").width()},'slow',function(){$(this).hide()});
		}else{
			$(obj).parent().parent().animate({left:($("body").width())},'slow',function(){$(this).hide()});
			}
	$(window.document).find("#BB_note").css("overflow-y","auto");
};
//把指定的页面路径赋值给id为IframCenter_TcBox的iframe
function showUrl_iframe(url){
	$(window.parent.document).find('#IframCenter_TcBox').attr("src",url);
}
//判断内容层的left定位坐标值
function Left_Center_TcBox(divid){
	var The_left = $(divid).css("left");
	if(The_left!="0px"){
		$(divid).css("left",$("body").width());
	}
};	
//弹出窗口
function Tc_boxShow(url,Contentid,ShowId,Width){
	$(ShowId).show();
	$(Contentid).width(Width);
	$(Contentid).html();
	GoToUrl(url,Contentid);//把指定的静态页面显示在指定的容器内
};
function Tc_boxHide(ShowId){
	$(ShowId).hide();
};























