$(document).ready(function(){

	var MUS=$('#music_bg').get(0);

	touch.on('.music_btn','tap',function(){
		if(	MUS.paused){

			$(".music_btn").addClass("animated");

			MUS.play();	
		}else{
			
			$(".music_btn").removeClass("animated");

			MUS.pause();
		}
	})

	//上下滑屏效果
	
  	var curIndex = 0;

    var pageNum = $('.page').length-1;
    touch.on('.main', 'swipeup', function(e){
        if(curIndex < pageNum){
            $('.page').eq(curIndex).addClass('pageUp'); 

            $('.page').eq(curIndex).find('.dh').addClass('hide'); 
            curIndex = curIndex + 1;
            $('.page').eq(curIndex).removeClass('pageDown');             
            $('.page').eq(curIndex).find('.dh').removeClass('hide');
        }     
    });
        touch.on('.main', 'swipedown', function(e){
            if(curIndex > 0){ 
                   
                $('.page').eq(curIndex).addClass('pageDown'); 
                $('.page').eq(curIndex).find('.dh').addClass('hide');
                curIndex = curIndex - 1;
                $('.page').eq(curIndex).removeClass('pageUp');
                 $('.page').eq(curIndex).find('.dh').removeClass('hide');
            }
       });

})