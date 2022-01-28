var pressTitle = document.getElementById("pressTitle");
var jobTitle = document.getElementById("jobTitle");
var pressMain = document.getElementById("pressMain");
var jobMain = document.getElementById("jobMain");
var yellowBar1 = document.querySelector(".pressMainC");
var yellowBar2 = document.querySelector(".jobMainC");

var related_site_list = document.getElementById('link_list_box1');
var fire_school_list = document.getElementById('link_list_box2');

var closeBtn1 = document.getElementById('closeBtn1');
var closeBtn2 = document.getElementById('closeBtn2');

var related_site_list_title = document.getElementById('downtown_fire');
var fire_school_list_title = document.getElementById('local_fire');

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