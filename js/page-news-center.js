$(document).ready(function(){
	var body = $('.body');
	var replace = null;
	var click = $('.nav-wrapper ul li');
	var str = null;
	var newsCenter = '<div class="news-center clearfix">'+
				'<section class="news-left">'+
					'<h1 class="fixMar">新闻中心</h1>'+
					'<hr />'+
					'<h6>集团新闻</h6>'+
					'<h6>下属产业动态</h6>'+
					'<h6>媒体关注</h6>'+
				'</section>'+
				'<section class="news-right">'+
					'<div class="title">'+
						'<h5>首页</h5>'+
						'<span class="title-arrow">&lt;</span>'+
						'<h5>新闻中心</h5>'+
					'</div>'+
					'<div class="industry-dynamic">'+
						'<div class="industry-info clearfix">'+
							'<div class="info-date">'+
								'<span class="day">07</span>'+
								'<h4 class="year-month">2017.07</h4>'+
							'</div>'+
							'<div class="details">'+
								'<h1>中外20余位专家学者莅临恒大健康参观指导</h1>'+
								'<h6>中健国银集团，总部位于北京，业务涵盖全国各大中城市。集团主要从事健康产业、保险金融业、文化传媒、医疗康复、医药保健产品、生物科技、国际贸易、冷链物流快递、农业种植、农副产品事健康产业、保险金融业、文化传媒、医疗康复、医药保健产品、生物科技、国际贸易、冷链物流快递、农业种植、农副产品</h6>'+
								'<span class="more-info">'+
									'more'+
								'</span>'+
							'</div>'+
						'</div>'+
						
						'<div class="industry-info clearfix">'+
							'<div class="info-date">'+
								'<span class="day">12</span>'+
								'<h4 class="year-month">2017.07</h4>'+
							'</div>'+
							'<div class="details">'+
								'<h1>中外20余位专家学者莅临恒大健康参观指导</h1>'+
								'<h6>中健国银集团，总部位于北京，业务涵盖全国各大中城市。集团主要从事健康产业、保险金融业、文化传媒、医疗康复、医药保健产品、生物科技、国际贸易、冷链物流快递、农业种植、农副产品事健康产业、保险金融业、文化传媒、医疗康复、医药保健产品、生物科技、国际贸易、冷链物流快递、农业种植、农副产品</h6>'+
								'<span class="more-info">'+
									'more'+
								'</span>'+
							'</div>'+
						'</div>'+
						'<div class="industry-info clearfix">'+
							'<div class="info-date">'+
								'<span class="day">23</span>'+
								'<h4 class="year-month">2017.07</h4>'+
							'</div>'+
							'<div class="details">'+
								'<h1>中外20余位专家学者莅临恒大健康参观指导</h1>'+
								'<h6>中健国银集团，总部位于北京，业务涵盖全国各大中城市。集团主要从事健康产业、保险金融业、文化传媒、医疗康复、医药保健产品、生物科技、国际贸易、冷链物流快递、农业种植、农副产品事健康产业、保险金融业、文化传媒、医疗康复、医药保健产品、生物科技、国际贸易、冷链物流快递、农业种植、农副产品</h6>'+
								'<span class="more-info">'+
									'more'+
								'</span>'+
							'</div>'+
						'</div>'+
						
						'<div class="industry-info clearfix">'+
							'<div class="info-date">'+
								'<span class="day">25</span>'+
								'<h4 class="year-month">2017.07</h4>'+
							'</div>'+
							'<div class="details">'+
								'<h1>中外20余位专家学者莅临恒大健康参观指导</h1>'+
								'<h6>中健国银集团，总部位于北京，业务涵盖全国各大中城市。集团主要从事健康产业、保险金融业、文化传媒、医疗康复、医药保健产品、生物科技、国际贸易、冷链物流快递、农业种植、农副产品事健康产业、保险金融业、文化传媒、医疗康复、医药保健产品、生物科技、国际贸易、冷链物流快递、农业种植、农副产品</h6>'+
								'<span class="more-info">'+
									'more'+
								'</span>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</section>'+
			'</div>';
	var hash = window.location.hash;
	click.eq(2).on('click', function() {
		hashchange()
	})
	
	function hashchange(){
		hash = "#news";
		window.onhashchange = function(){
			if(hash=="#news"){
				str = $('.news-center');
				if( $('.body .group-center')){
					replace = $('.body .group-center');
					replace.remove();
				}
				if($('.body .wraper')){
					replace =$('.body .wraper')
					replace.remove();
				}
			if(str) {
				str.remove();
			}
				
				body.prepend(newsCenter);
				var center = $('.news-center');
				backTopBox(center);
				newsChange();
			}
			
			
		}
	}
	
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
	click.on('click',function(){
		$(this).siblings().css('background-color','');
		$(this).css('background-color','#eeab36');
		
	})
	
	
	function newsChange(){
		var h6 = $('.news-left h6');
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
			title.html($(title.html()+h5));
			 selected=$('.selected');
			$(this).html($(this).html()+str);
			$(this).css('color','#eeab36');
			if($(this).siblings().find(selected)){
				selected.remove();
				
				$(this).siblings().css('color','');
			}
			 if(newsCon){
	        	newsCon.remove()
	        }
			getNewsContent()
	        newsCon =$('.news-content');
	       
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
	click.eq(3).on('click',function(){
		hash = "#group";
		
		window.onhashchange = function(){
			if(hash=="#group"){
				groupMission()
				if(str) {
					str.remove();
				}
				console.log($('.wraper'))
				if($('.wraper')){
					replace = $('.wraper')
					console.log(1)
					replace.remove()
				}
				console.log(replace)
				if($('.news-center')){
					replace = $('.news-center')
					replace.remove()
				}
				
				
				var groupCenter = $('.group-center');
				backTopBox(groupCenter);
				newsChange();
			}
			
			str = $('.group-center');
				
			
			
			
		}
	})
	function groupMission(){
		var group = '<div class=" clearfix group-center">'+
				'<section class="group-left">'+
					'<h1>集团业务</h1>'+
					'<hr />'+
					'<ul>'+
						'<li>'+
							'<h6>广东盖淘科技股份有限公司</h6>'+
						'</li>'+
						'<li>'+
							'<h6>广州正派人力资源有限公司</h6>'+
						'</li>'+
						'<li>'+
							'<h6>广东盖淘科技股份有限公司</h6>'+
						'</li>'+
						'<li>'+
							'<h6>广东盖淘科技股份有限公司</h6>'+
						'</li>'+
						'<li>'+
							'<h6>广东盖淘科技股份有限公司</h6>'+
						'</li>'+
						'<li>'+
							'<h6>广东盖淘科技股份有限公司</h6>'+
						'</li>'+
						'<li>'+
							'<h6>广东盖淘科技股份有限公司</h6>'+
						'</li>'+
						'<li>'+
							'<h6>广东盖淘科技股份有限公司</h6>'+
						'</li>'+
						'<li>'+
							'<h6>广东盖淘科技股份有限公司</h6>'+
						'</li>'+
						'<li>'+
							'<h6>广东盖淘科技股份有限公司</h6>'+
						'</li>'+
						'<li>'+
							'<h6>广东盖淘科技股份有限公司</h6>'+
						'</li>'+
					'</ul>'+	
				'</section>'+
				'<section class="group-right">'+
					'<div class="group-intro">'+
						'<p>集团简介</p>'+
					'</div>'+
					'<div class="group-pic">'+
						'<img src="img/building.png"/>'+
					'</div>'+
					'<div class="group-info">'+
						'<p>中健国银集团，总部位于北京，业务涵盖全国各大中城市。集团主要从事健康产业、保险金融业、文化传媒、医疗康复、医药保健产品、生物科技、国际贸易、冷链物流快递、农业种植、农副产品加工生产、生鲜果蔬、电子商务、连锁特许经营等等。中健国银自创立以来，在发展过程中，坚持以市场为导向，走科学化、制度化、规范化的企业管理之路，引进多元化的国际经营管理理念。集团依托雄厚的产业优势，不断地自主创新、开拓进取，逐渐建立和完善了一套与国际接轨、适应中国市场经济发展要求的现代化运营管理模式。</p>'+
						'<p>集团目前致力投身于崇高的人类健康事业，以尊重人的生命价值为己任。公司在弘扬“健康中国”的同时融入佛教、道教、儒教、身教、好教的五教体系，旨在弘扬中华民族的思想健康，道德健康，身心健康。未来，中健国银将一如既往地保持着诚信、优质、高效、务实的精神。用丰硕的成果回报社会，用持续的创新赢取尊重，用诚信的态度追求双赢！</p>'+
						'<p>中健国银深知成功的关键在团队，我们一贯注重团队建设，关注企业文化，激励持续创新，倡导快乐工作，信任和尊重员工的劳动与智慧，依靠团队精神实现公司的战略目标，我们甘愿为此目标百分之百的付出，以追求卓越的个人成就与最大的社会贡献。力求让团队中的每个成员都能在学习工作中和中健国银一起微笑！一起成长！</p>'+
						'<span>企业宗旨：</span>'+
						'<span>科技创造人类健康，责任建设和谐社会！</span>'+
						'<span>企业文化内涵：</span>'+
						'<span>愉悦生活，绿色生命！</span>'+
						'<span>企业使命：</span>'+
						'<span>合纵联盟，实现众蠃！</span>'+
						'<p>同一集团旗下还有广州正派人力资源有限公司，广东盖淘科技股份有限公司，外派员工1000余人。形成了集团化、网络化、规模化、品牌化经营的新格局。利用网络信息化平台实现客户服务的进一步现代化、规范化和标准化管理，加固人才梯队，提供人资应急保障，整体规划，多面完善，盛装起航，竭诚为广大客户提供最优质的服务。同时，在公司高效的发展中，将同步实现员工个人价值的提升，真正体现“以人为本”的企业文化。</p>'+
					'</div>'+
					'<div class="product clearfix">'+
						'<span></span>'+
						'<h3>公司产品</h3>'+
						'<ul>'+
							'<li>'+
								'<img src="img/product1.png" alt="深海鱼油" />'+
								'<p>深海鱼油</p>'+
							'</li>'+
							'<li>'+
								'<img src="img/product2.png" alt="健身器材" />'+
								'<p>健身器材</p>'+
							'</li>'+
							'<li>'+
								'<img src="img/product3.png" alt="肌肉康复器材" />'+
								'<p>肌肉康复器材</p>'+
							'</li>'+
							'<li>'+
								'<img src="img/product4.png" alt="保健药品" />'+
								'<p>保健药品</p>'+
							'</li>'+
							'<li>'+
								'<img src="img/product5.png" alt="保健药品" />'+
								'<p>保健药品</p>'+
							'</li>'+
							'<li>'+
								'<img src="img/product6.png" alt="保健药品" />'+
								'<p>保健药品</p>'+
							'</li>'+
						'</ul>'+
					'</div>'+
				'</section>'+
			'</div>'
		body.prepend(group);
	}
	
	
	
	
})
