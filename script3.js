var m = [],mn = [], w, img, W;
w = ["Интерес","Дружба","Дом","Банкет","Граница","Волнение","Жизнь","Зависть","Расчёт","Страх"];
wn = ["Страх","Расчёт","Зависть","Жизнь","Волнение","Граница","Банкет","Дом","Дружба","Интерес",0]
W = document.getElementById('Word');
x = ['yes',9,8,7,6,5,4,3,2,1];
var i = 1000;

function Word(){
if(mn.length <= 1){    
    if(m.length < 10)
        {
            W.innerHTML = w[9-m.length];
        }
    else if(m.length == 10){
        localStorage.setItem('Choice1', m);
        document.getElementById("Word").style.display = 'none';
        document.getElementById('delet').style.display = 'none';
        document.getElementById("ok2").style.display = '';
        document.getElementById("ok3").style.display = '';
        }
    }
}

function word2(){
    if(m.length == 10)
    {
        if(mn.length < 11)
        {
        W.innerHTML = wn[10-mn.length];
        }
        else if(mn.length == 11)
        {
            end();    
        }
    }
}

function GOODEND(){
    document.getElementById("ok5").style.display = '';
    document.getElementById("ok6").style.display = '';
    document.getElementById("home").style.display = '';
}

function BADEND(){
    document.getElementById("ok7").style.display = '';
    document.getElementById("home").style.display = '';
}

function end(){
    document.getElementById("Word").style.display = 'none';
    document.getElementById('delet').style.display = 'none';
    if(mn[10] == m[0] && mn[9] == m[1] && mn[8] == m[2] && mn[7] == m[3] && mn[6] == m[4] && mn[5] == m[5] && mn[4] == m[6] && mn[3] == m[7] && mn[2] == m[8] && mn[1] == m[9]){
        GOODEND();
    }
    else{
        BADEND();
    }
}

function choose(clicked_id){
    if(m.length < 10){
        m.push(img);
        console.log (m);
        document.getElementById(img).style.display = 'none';
    }
}

function img_id(clicked_id){
    img = clicked_id;   
}

function bu(){
    time30();
    document.getElementById("ok").style.display = '';
    document.getElementById("ok1").style.display = '';
    document.getElementById("ok2").style.display = 'none';
    document.getElementById("ok3").style.display = 'none';  
}

function choose2(clicked_id){
    if(m.length == 10){
        mn.push(img);
        console.log(mn);
        document.getElementById(img).style.display = 'none';
    }
}
function time30(){
    document.getElementById("ok").innerHTML = "30";
    setTimeout(time29, i);
}
function time29(){
    document.getElementById("ok").innerHTML = "29";
    setTimeout(time28, i);
}
function time28(){
    document.getElementById("ok").innerHTML = "28";
    setTimeout(time27, i);
}
function time27(){
    document.getElementById("ok").innerHTML = "27";
    setTimeout(time26, i);
}

function time26(){
    document.getElementById("ok").innerHTML = "26";
    setTimeout(time25, i);
}

function time25(){
    document.getElementById("ok").innerHTML = "25";
    setTimeout(time24, i);
}
function time24(){
    document.getElementById("ok").innerHTML = "24";
    setTimeout(time23, i);
}
function time23(){
    document.getElementById("ok").innerHTML = "23";
    setTimeout(time22, i);
}
function time22(){
    document.getElementById("ok").innerHTML = "22";
    setTimeout(time21, i);
}
function time21(){
    document.getElementById("ok").innerHTML = "21";
    setTimeout(time20, i);
}
function time20(){
    document.getElementById("ok").innerHTML = "20";
    setTimeout(time19, i);
}
function time19(){
    document.getElementById("ok").innerHTML = "19";
    setTimeout(time18, i);
}
function time18(){
    document.getElementById("ok").innerHTML = "18";
    setTimeout(time17, i);
}
function time17(){
    document.getElementById("ok").innerHTML = "17";
    setTimeout(time16, i);
}

function time16(){
    document.getElementById("ok").innerHTML = "16";
    setTimeout(time15, i);
}

function time15(){
    document.getElementById("ok").innerHTML = "15";
    setTimeout(time14, i);
}

function time14(){
    document.getElementById("ok").innerHTML = "14";
    setTimeout(time13, i);
}

function time13(){
    document.getElementById("ok").innerHTML = "13";
    setTimeout(time12, i);
}

function time12(){
    document.getElementById("ok").innerHTML = "12";
    setTimeout(time11, i);
}

function time11(){
    document.getElementById("ok").innerHTML = "11";
    setTimeout(time10, i);
}

function time10(){
    document.getElementById("ok").innerHTML = "10";
    setTimeout(time9, i);
}

function time9(){
    document.getElementById("ok").innerHTML = "9";
    setTimeout(time8, i);
}

function time8(){
    document.getElementById("ok").innerHTML = "8";
    setTimeout(time7, i);
}

function time7(){
    document.getElementById("ok").innerHTML = "7";
    setTimeout(time6, i);
}

function time6(){
    document.getElementById("ok").innerHTML = "6";
    setTimeout(time5, i);
}
function time5(){
    document.getElementById("ok").innerHTML = "5";
    setTimeout(time4, i);
}

function time4(){
    document.getElementById("ok").innerHTML = "4";
    setTimeout(time3, i);
}

function time3(){
    document.getElementById("ok").innerHTML = "3";
    setTimeout(time2, i);
}

function time2(){
    document.getElementById("ok").innerHTML = "2";
    setTimeout(time1, i);
}

function time1(){
    document.getElementById("ok").innerHTML = "1";
    setTimeout(last, i)
}

function last(){
    document.getElementById("ok").style.display = 'none';
    document.getElementById("ok1").style.display = 'none';
    document.getElementById("img1").style.display = '';
    document.getElementById("img2").style.display = '';
    document.getElementById("img3").style.display = '';
    document.getElementById("img4").style.display = '';
    document.getElementById("img5").style.display = '';
    document.getElementById("img6").style.display = '';
    document.getElementById("img7").style.display = '';
    document.getElementById("img8").style.display = '';
    document.getElementById("img9").style.display = '';
    document.getElementById("img10").style.display = '';
    document.getElementById("delet").style.display = '';
    document.getElementById("Word").style.display = '';
    word2();
}
