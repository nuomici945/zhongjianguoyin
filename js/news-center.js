$(document).ready(function(){
	newsChange()
	function newsChange(){
		var h6 = $('.news-left ul li p');
		var str = '<span class="selected">&nbsp;&nbsp;&nbsp;&gt;</span>';
        var selected = null;
        var h5 = '';
        var arrow = '';
        var title = $('.news-right .title');
        var newsCon = null;
		h6.on('click',function(){
			h5 ='<span class="title-arrow">&lt;</span><h5>'+$(this).text()+'</h5>';
			arrow =$('.title-arrow');
			if($('.title h5').eq(2)){
				$('.title h5').eq(2).remove();
				arrow.eq(1).remove();
			}
//			title.html($(title.html()+h5));
//			 selected=$('.selected');
//			$(this).children('a').html($(this).text()+str);
			$(this).children('a').css('color','#eeab36');
//			console.log($(this).parent().children('p'))
			if($(this).parent().children('p').children('a').find(selected)){
				selected.remove();
				
				$(this).parent().siblings().children('p').children('a').css('color','');
			}
//			 if(newsCon){
//	        	newsCon.remove()
//	        }
//			getNewsContent()
//	        newsCon =$('.news-content');
	       
		});
		
		
		
	}

	function getNewsContent(){
		var newsRight = $('.news-right');
		var industryD=$('.industry-dynamic');
		industryD.remove();
		var str ='<div class="news-content">'+
						'<h1 class="subtitle">中外20余位专家学者莅临恒大健康参观指导</h1>'+
						'<h6>——2017年7月7日</h6>'+
						'<div class="new-pic">'+
							'<img src="img/news.png" />'+
						'</div>'+
						'<div class="news-info-text">'+
							'<p>中健国银集团，总部位于北京，业务涵盖全国各大中城市。集团主要从事健康产业、保险金融业、文化传媒、医疗康复、医药保健产品、生物科技、国际贸易、冷链物流快递、农业种植、农副产品加工生产、生鲜果蔬、电子商务、连锁特许经营等等。中健国银自创立以来，在发展过程中，坚持以市场为导向，走科学化、制度化、规范化的企业管理之路，引进多元化的国际经营管理理念。集团依托雄厚的产业优势，不断地自主创新、开拓进取，逐渐建立和完善了一套与国际接轨、适应中国市场经济发展要求的现代化运营管理模式。</p>'+
							'<p>集团目前致力投身于崇高的人类健康事业，以尊重人的生命价值为己任。公司在弘扬“健康中国”的同时融入佛教、道教、儒教、身教、好教的五教体系，旨在弘扬中华民族的思想健康，道德健康，身心健康。未来，中健国银将一如既往地保持着诚信、优质、高效、务实的精神。用丰硕的成果回报社会，用持续的创新赢取尊重，用诚信的态度追求双赢！</p>'+
							'<p> 中健国银深知成功的关键在团队，我们一贯注重团队建设，关注企业文化，激励持续创新，倡导快乐工作，信任和尊重员工的劳动与智慧，依靠团队精神实现公司的战略目标，我们甘愿为此目标百分之百的付出，以追求卓越的个人成就与最大的社会贡献。力求让团队中的每个成员都能在学习工作中和中健国银一起微笑！一起成长！ </p>'+
						'</div>'+
					'</div>';
		
		newsRight.append(str);

	}
	
})
