$(document).ready(function(){
	var group = $('.group-center');
	var news = $('.news-center');
	backTopBox(news)
	backTopBox(group)
	function backTopBox(obj){
	
	var component = '<div class="back">'+
					'<div class="back-icon">'+
						'<a href="javascript:;"><img src="img/形状-3-副本.png"/></a>'+
					'</div>'+
					'<div class="back-text">'+
						'<a href="javascript:;">回到顶部</a>'+
					'</div>'+
				'</div>';
	obj.append(component);
	top($('.back-icon a'));
	top($('.back-text a'));
	}
	
	function top(obj){
		obj.click(function() {
            $('body').animate({
                scrollTop: '0'             
            },400);
        });
	}
	
	
})
