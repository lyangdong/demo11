
$(function(){
        $('.box').mouseenter(function(){
            var x =  $(this).position().left
            var y =$(this).find('ul').width();
            if(x+y >$('.nav').innerWidth()){
                $(this).find('li').css('float','right')
                $(this).find('ul').css('right',0)
            }
        })

    });
//for(var i=0;i<$('.nav div').length;i++){
//    $('.nav div').eq(i).css('left',i*100);
//    var x =$('.nav div').eq(i).position().left+$('.nav div').eq(i).find('span').innerWidth()+20;
//    if(x+$('.nav div').eq(i).find('ul').innerWidth() > $('.nav').outerWidth()){
//        $('.nav div').eq(i).find('li').css('float','right')
//        $('.nav div').eq(i).find('ul').css('right',0)
//    }
//}
//for(var i= 0,len = 0;i<$('.nav div').length;i++) {
//    len += $('.nav div').eq(i).find('span').outerWidth();
//    $('.nav div').eq(i+1).css('left',len);
//    if(len + $('.nav div').eq(i+1).find('span').outerWidth() >$('.nav').innerWidth()){
//        $('.nav div').eq(i+1).css('left', len - $('.nav').innerWidth()+8);
//        $('.nav div').eq(i+1).css('top',30)
//    }
//}
