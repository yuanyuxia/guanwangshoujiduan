

//产品切换
 $(function(){
	        $(".pic_tab").children().eq(0).show().siblings().hide();
		 	$(".introduce_item1 .intro1_left a").click(function(){
		 		var index=$(this).index();
		 		$(this).addClass("cur").siblings().removeClass("cur");
		 		$(".pic_tab ").children().eq(index).show().siblings().hide();
			 });
			 
		//切换右边按钮选中状态
			 $(".banner_btns span").click(function(){
				var index = $(this).index();
				$(".banner_btns span ").children("a").removeClass("on");
				$(".banner_btns span").eq(index).children("a").addClass("on");
				
			  }) ;  
	 
	})






//二维码切换
window.onload = function(){
	var erwms = document.querySelectorAll(".erwm");
	var banner_btns = document.querySelector(".banner_btns");
	var banas = banner_btns.querySelectorAll("a");
	for(var i=0;i<banas.length;i++){
		banas[i].index = i;
		banas[i].onclick=function(){
		console.log(this.index);
			for (var i = 0; i < erwms.length; i++) {
				erwms[0].children[i].style.display = "none";
				erwms[1].children[i].style.display = "none";
			}
			erwms[0].children[this.index].style.display = "block";
			erwms[1].children[this.index].style.display = "block";

		}
	}
}