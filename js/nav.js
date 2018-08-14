//适配
window.onload = function () {
    /*让文字和标签的大小随着屏幕的尺寸做变话 等比缩放*/
    var html = document.getElementsByTagName('html')[0];
  //  console.log(html);
    /*取到屏幕的宽度*/
    var width = window.innerWidth;
   // console.log(width);
    // if (width > 750) {
    //     width = 750
    // } 
    /* 640 100  320 50 */
    var fontSize = 100 / 750 * width;
   // console.log(fontSize);
    /*设置fontsize*/

    html.style.fontSize = fontSize + 'px';
    window.onresize = function () {
        var html = document.getElementsByTagName('html')[0];
       // console.log(html);
        /*取到屏幕的宽度*/
        var width = window.innerWidth;
      //  console.log(width);
        // if (width > 750) {
        //     width = 750
        // } 
        /* 640 100  320 50 */
        var fontSize = 100 / 750 * width;
      //  console.log(fontSize);
        /*设置fontsize*/
        html.style.fontSize = fontSize + 'px';

    }
}



//小屏幕导航栏 显示和隐藏
$(function(){
   
    $(".small_mini").hide();
    //点击隐藏图标 显示竖向导航栏 横向隐藏
    $(".nav_hd_mini > .nav_icon").on("click",function(){     
        $(".small_mini").fadeToggle();
    });
    $(".small").hide();
    //点击隐藏图标 显示竖向导航栏 横向隐藏
    $(".nav_hd > .nav_icon").on("click",function(){     
        $(".small").slideToggle();
    }); 

    //    一键返回顶部
    $(".toTop").on("click",function(){
        $('html,body').animate({
            scrollTop: '0'             
        },500);
    })
})






