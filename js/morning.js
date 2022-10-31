$(document).ready(function(){
	
	//상단메뉴 마우스오버시_ 각항목별 하위메뉴 슬라이드
	$(".mainMenu").on("mouseenter click" , function(){
		$(".mainMenu").removeClass("active");
		$("#white").stop().animate({height: "80px"});
		//위로 서서히 올라간 후 {display:none;}
		//$(".subMenu").stop().slideUp();
		//모든 하위메뉴가 슬라이드다운된다.
		$(".subMenu").stop().slideDown();
	});
	/*하위메뉴에 마우스 갖다댈때_ 메인메뉴 활성유지 */
	$(".subMenu").mouseenter(function(){
		$(".mainMenu").removeClass("active");
		$(this).prev().addClass("active");
		
	});
	
	/*하위메뉴 마우스아웃시_ 올라간다*/
	$("header>nav").mouseleave(function(){
			menu();
	});
	
	//메뉴 마지막 항목이 포커스를 잃을때,
	$(".last").blur(function(){
			menu();
	});
	
	function menu(){
		$(".mainMenu").removeClass("active");
		$(".subMenu").stop().slideUp();
		$("#white").stop().animate({height : 0 });
	}
	
	
	
	///////////////////////////
	//왼쪽방향 자동 슬라이드
	setInterval(leftMove, 2000);
	function leftMove(){
		$("#sliding div").stop().animate({left:"-1100px"}, 1000,function(){
			$(this).append( $(this).children().first() );
			$(this).css("left" , 0);
		});		
	}
	
	//공지사항 보이기
	$(".show").click(function(){
		$("#popup").fadeIn();
	});
	
	//공지사항 닫기
	$("#popup button").click(function(){
		$("#popup").fadeOut();
	});
	
	//키보드자판에서 어떤키를 눌렀는지 감지한다.
	$(document).keydown(function(event){		
		if(event.key === "Escape"){
			//alert("ddd");
			$("#popup").fadeOut();
		}
	});
		
		
});////////////////마지막 부분







