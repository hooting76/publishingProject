// 메인배너 기능
// 자동재생 + 양쪽arr버튼(하단버튼 미완 / 페이지 이동에 따라 css변환 추가+ 하단 버튼 클릭시 이동은 아직 미구현)
let moving = $('.banner_inner>ul');
let timer;
let wid=moving.find('li').width();
let arrowRight = $('.right_Btn');
let arrowLeft = $('.left_Btn');
let current=0;
let pager=$('.pager span');
// console.log(wid); 

pager.eq(0).addClass('on');

slide();
function slide(){
    timer = setInterval(function(){
        moving.fadeOut(500, function(){
            $(this).find('li:first').insertAfter($(this).find('li:last'));
            $(this).fadeIn().css({left:0});

            current++;
            $(this).find('.pager').find('span').removeClass('on').eq(current).addClass('on');
            if(current==pager.size()){current=0; pager.eq(0).addClass('on')};
        });
    },4000);
};

$(moving).hover(function(){
    clearInterval(timer);
},function(){
    slide();
});
$(arrowRight).hover(function(){
    clearInterval(timer);
},function(){
    slide();
});
$(arrowLeft).hover(function(){
    clearInterval(timer);
},function(){
    slide();
});

// 양쪽 arr버튼 관련
$(arrowRight).click(function(){
    moving.fadeOut(500, function(){
        $(this).find('li:first').insertAfter($(this).find('li:last'));
        $(this).fadeIn().css({left:0});

        current++;
        $(this).find('.pager').find('span').removeClass('on').eq(current).addClass('on');
        if(current==pager.size()){current=0; pager.eq(0).addClass('on')};
    });
});
$(arrowLeft).click(function(){
    moving.fadeOut(function(){
        moving.find('li:last').insertBefore(moving.find('li:first'));
        moving.fadeIn().css({left:0});

        current--;
        $(this).find('.pager').find('span').removeClass('on').eq(current).addClass('on');
        if(current==-pager.size()){current=0; pager.eq(0).addClass('on')};
    });
}); 

// 배너 하단 버튼 관련

slideDotBtn()
function slideDotBtn(){
    let dotBtns = $('.pager span');
    
    if(dotBtns.className() =="on"){
        return false;
    }else{
        
    }
};



// 보도자료 관련 변수
var pressTitle = document.getElementById("pressTitle");
var jobTitle = document.getElementById("jobTitle");
var pressMain = document.getElementById("pressMain");
var jobMain = document.getElementById("jobMain");
var yellowBar1 = document.querySelector(".pressMainC");
var yellowBar2 = document.querySelector(".jobMainC");

pressTitle.addEventListener('click', () => {
    pressMain.style.display = 'block';
    jobMain.style.display = 'none';
    yellowBar1.style.borderBottom = '3px solid #fcd204';
    yellowBar1.style.color = '#222';
    yellowBar2.style.borderBottom = 'none';
    yellowBar2.style.color = 'gray';
    return false;
});

jobTitle.addEventListener('click', () => {
    pressMain.style.display = 'none';
    jobMain.style.display = 'block';
    yellowBar1.style.borderBottom = 'none';
    yellowBar1.style.color = 'gray';
    yellowBar2.style.borderBottom = '3px solid #fcd204';
    yellowBar2.style.color = '#222';
    return false;
}); // 보도자료 내용 변경을 위함


// 푸터영역 관련사이트 목록기능
var related_site_list = document.getElementById('link_list_box1');
var fire_school_list = document.getElementById('link_list_box2');
var closeBtn1 = document.getElementById('closeBtn1');
var closeBtn2 = document.getElementById('closeBtn2');
var related_site_list_title = document.getElementById('downtown_fire');
var fire_school_list_title = document.getElementById('local_fire');

related_site_list_title.addEventListener('click', () => {
    related_site_list.style.display = 'block';
})

closeBtn1.addEventListener('click', () => {
    related_site_list.style.display='none';
    return false;
});

fire_school_list_title.addEventListener('click', () => {
    fire_school_list.style.display = 'block';
})

closeBtn2.addEventListener('click', () => {
    fire_school_list.style.display='none';
    return false;
});

