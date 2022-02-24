// 메인배너 기능
// 자동재생 + 양쪽arr버튼(하단버튼 미완 / 페이지 이동에 따라 css변환 추가+ 하단 버튼 클릭시 이동은 아직 미구현)
let moving = $('.banner_inner>ul');
let moving2 = $('.banner_inner ul li');
let arrowRight = $('.right_Btn');
let arrowLeft = $('.left_Btn');
let current=0;
let timer;
let pager=$('.pager span');
// console.log(wid); 

pager.eq(0).addClass('on');

slide();
function slide(){
    timer = setInterval(function(){
        let prev = moving2.eq(current);
        let arrowLeft = pager.eq(current);
        prev.fadeOut(300);
        arrowLeft.removeClass('on');
        current++;
    
        if(current ==moving2.size()){
            current=0;
        }
    
        let next = moving2.eq(current);
        let arrowRight = pager.eq(current);
        next.fadeIn(300);
        arrowRight.addClass('on');
    },4000);
};
$('.banner').hover(function(){
    clearInterval(timer);
}, function(){
    slide();
});
// 양쪽 arr버튼 관련
arrowRight.click(function(){
    let prev = moving2.eq(current);
    let arrowLeft = pager.eq(current);
    prev.fadeOut(300);
    arrowLeft.removeClass('on');
    current++;

    if(current ==moving2.size()){
        current=0;
    }

    let next = moving2.eq(current);
    let arrowRight = pager.eq(current);
    next.fadeIn(300);
    arrowRight.addClass('on');
});

arrowLeft.click(function(){
    let prev = moving2.eq(current);
    let arrowLeft = pager.eq(current);
    prev.fadeOut(300);
    arrowLeft.removeClass('on');
    current--;

    if(current == -moving2.size()){
        current=0;
    }

    let next = moving2.eq(current);
    let arrowRight = pager.eq(current);
    next.fadeIn(300);
    arrowRight.addClass('on');
});


// 배너 하단 버튼 관련

function slideDotBtn1(i){
    // 현재랑 같다면 아무것도 안함.
    if(current==i) return;

    let currentEl = moving2.eq(current);
    let nextEl = moving2.eq(i);

    console.log(nextEl);

    currentEl.fadeOut(500);
    nextEl.fadeIn(500);
    current=i;
};

function slideDotBtn2(i){
    // 현재랑 같다면 아무것도 안함.
    if(current==i) return;

    let currentEl = moving2.eq(current);
    let nextEl = moving2.eq(i);

    currentEl.fadeOut(500);
    nextEl.fadeIn(500);
    current=i;
};

pager.click(function(){
    let tg = $(this);
    let i = tg.index();

    pager.removeClass('on');
    tg.addClass('on');

    if(current>i){
        slideDotBtn1(i);
    }else{
        slideDotBtn2(i);
    }
});

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
});

jobTitle.addEventListener('click', () => {
    pressMain.style.display = 'none';
    jobMain.style.display = 'block';
    yellowBar1.style.borderBottom = 'none';
    yellowBar1.style.color = 'gray';
    yellowBar2.style.borderBottom = '3px solid #fcd204';
    yellowBar2.style.color = '#222';
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

// back to top
let btt = document.getElementById('back_to_top');
let docEl = document.documentElement; //문서 자체를 html가져와서 변수대입
let offset; //값 미정된 스크롤양
let scrollPos; //스크롤양
let docHeight; //문서의 높이값

scrollPos = docEl.scrollTop;
console.log(scrollPos);

docHeight=Math.max(docEl.offsetHeight, docEl.scrollHeight);
if(docHeight !=0){
    offset = docHeight/4; //끝까지 스크롤 되지않고 1/4만 스크롤
}
window.addEventListener('scroll', function(){
    scrollPos = docEl.scrollTop;
    if(scrollPos > offset){
        btt.className="visible";
    }else{
        btt.className ="";
    }
});
btt.addEventListener("click", function(e){
    e.preventDefault(); //링크 본연의 기능을 막아주는 역할
    scrollToTop()
});

function scrollToTop(){
    let scrollInterval = setInterval(function(){
        if(scrollPos !=0){
            window.scrollBy(0,-55)
        }else{
            clearInterval(scrollInterval);
        }
    }, 20)
}