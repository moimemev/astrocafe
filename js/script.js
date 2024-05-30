
$(document).ready(function(){

  //===================================================
  // 스와이퍼 설정 
  //===================================================
  const swiper_main = new Swiper('#main_slide', {
    loop: false,
    centeredSlides: true,   //가운데 배치
    autoplay: {             //자동재생
        delay: 2000,        //전환간격
        disableOnInteraction: true, //사용자가 마우스 클릭 시 자동재생 멈춤        
    },
    pagination: {
      el: '#main_slide .swiper-pagination',
      clickable: true,  // 버튼 클릭 여부
      type: 'bullets', // 버튼 모양 결정 "bullets", "fraction" 
    },

    navigation: {
      nextEl: '#main_slide .swiper-button-next',
      prevEl: '#main_slide .swiper-button-prev',
    },
  });

  //스와이퍼 다시 재생
  $('.swiper-slide').on('mouseover', function () {
    swiper_main.autoplay.stop();
  });
  $('.swiper-slide').on('mouseout', function () {
    swiper_main.autoplay.start();
  });

  //===================================================
  // 헤더 gnb
  //===================================================
  $('#header').mouseenter(function(){    
    $('#header').addClass('on');
    $('#gnb > li .depth_wrap').stop().show();
  })

  $('#header').mouseleave(function(){
    $('#header').removeClass('on');
    $('#gnb > li .depth_wrap').stop().hide();
  })

//===================================================
// 소식알림 탭 메뉴
//===================================================
const tabLi = $('#news .tab_menu li');
const tabMn = tabLi.children('a');

tabLi.click(function(e){
  //a href 클릭 방지
  e.preventDefault();
  
  //클릭한 li>a의 href 정보 가져오기
  let activeCon = $(this).children('a').attr('href'); /* #con1, #con2 */

  //모든 콘텐츠 숨기기
  $('.tab_con .con').hide();

  //선택 탭의 콘텐츠 보이기
  $(activeCon).show();

  //모든 탭 비활성 표시
  tabLi.removeClass('on');

  // 탭모양 활성표시
  $(this).addClass('on');
})

//===================================================
// 퀵 메뉴
//===================================================
$('.quick_menu .quick_button').click(function(){
  $('.quick_menu').toggleClass('close');

  const condition1 = $('.quick_menu').hasClass('close');
  const condition2 = $(this).children('span').text() == '퀵메뉴 닫기';

  if(condition2){
    $('.quick_menu .quick_button span').text('퀵메뉴 열기');
  }else{
    $('.quick_menu .quick_button span').text('퀵메뉴 닫기');
  }
})
}) //end of ready