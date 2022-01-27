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