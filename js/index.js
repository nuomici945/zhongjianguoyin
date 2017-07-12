$(document).ready(function(){
	var body = $('.body')
	var click = $('.nav-wrapper ul li');
	var home = null;
	var index= '<div class="wraper">'+
				'<div class="pic">'+
					'<ul>'+
						'<li class="show-on"><img src="img/carousel.jpg" alt="" /></li>'+
						'<li><img src="img/carousel.jpg" alt="" /></li>'+
						'<li><img src="img/carousel.jpg" alt="" /></li>'+
						'<li><img src="img/carousel.jpg" alt="" /></li>'+
						'<li><img src="img/carousel.jpg" alt="" /></li>'+
					'</ul>'+
				'</div>'+
				'<div class="pic-btn">'+
					'<div class="pic-btn-box clearfix">'+
						'<div class="pic-btn-left btn">'+
							'<a href="javascript:;">&lt;</a>'+
						'</div>'+
						'<div class="pic-btn-right btn">'+
						'<a href="javascript:;">&gt;</a>'+
						'</div>'+
					'</div>'+
					'<div class="pic-circle clearfix">'+
						'<ul>'+
							'<li><i class="empty active"></i></li>'+
							'<li><i class="empty"></i></li>'+
							'<li><i class="empty"></i></li>'+
							'<li><i class="empty"></i></li>'+
							'<li><i class="empty"></i></li>'+
						'</ul>'+
					'</div>'+
				'</div>'+

			'</div>';
	var str =null;		
	var replace = $('.news-center');
	click.eq(0).on('click',function(){
		indexHash()
        
	})
	function indexHash(){
		hash = "#index";
		window.onhashchange = function(){
			if(hash=="#index"){
				
				if($('.news-center')){
					str = $('.news-center');
					str.remove()
				}
				if($('.group-center')){
					str = $('.group-center');
					str.remove()
				}
				
				 home = $('.wraper');
		   
			if(home){
				home.remove()
			}	
			body.prepend(index);
			carouselChange()
			}
			
		}
	}

//	轮播图
 carouselChange()
  function carouselChange(){
  	var btn = $('.pic-btn-box .btn');
	var i = 0;
	var pic = $('.pic ul li')
	var circle = $('.empty').parent('li');
	function move() {
		if(pic.eq(i).hasClass('show-on')){
			
		}
            pic.eq(i).addClass('show-on').siblings().removeClass('show-on')
            pic.eq(i).fadeIn(300).siblings().fadeOut(300);
           circle.find('i').removeClass('active');
            circle.find('i').eq(i).addClass('active');

        }
	btn.eq(1).on('click',function(){
		i++;
            if (i == 5) {
                i = 0;
            }
		move()
		
		
	});
	btn.eq(0).on('click',function(){
		i--;
		if(i<0){
			i=4
		}
		move()
	})
    circle.on('click',function(){
    	i=$(this).index();
    	 pic.eq($(this).index()).addClass('show-on').siblings().removeClass('show-on')
            pic.eq($(this).index()).fadeIn(300).siblings().fadeOut(300);
             circle.find('i').removeClass('active');
            circle.find('i').eq($(this).index()).addClass('active');
    	
    })
    //tab切换
    
    var tab = $('.news ul li')
    var tabSwitch = $('.tab-switch')
    tab.on('click',function(){
    	tab.find('a').removeAttr('id')
    	$(this).find('a').attr('id','active2');
    	tabSwitch.css('display','none');
    	tabSwitch.eq($(this).index()).css('display','block')
    	
    })
  }
    
    
    

	
	
})
