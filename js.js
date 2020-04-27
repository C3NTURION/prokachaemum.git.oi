var result=0;
var y=0;
function sum(){
    if(document.getElementById('worb1').value=='высоту' ){
        result++;
    }
    if(document.getElementById('worb1').value=='скорость' ){
        result=result+0.5;
    }
    if(document.getElementById('word2').value=='грозу' ){
        result++;
    }
    if(document.getElementById('word2').value=='шторм' ){
        result=result+0.5;}
    if(document.getElementById('word3').value=='самолет' ){
            result++;}
    if(document.getElementById('word3').value=='птица' ){
            result=result+0.25;}
    if(document.getElementById('word3').value=='аэроплан' ){
            result=result+0.5;}
    if(document.getElementById('word4').value=='летчик' ){
            result++;}
    if(document.getElementById('word4').value=='пилот' ){
            result=result+0.5;} 
    if(document.getElementById('word4').value=='ас' ){
            result=result+0.5;}  
    if(document.getElementById('word5').value=='земля' ){
            result++;}      
    if(document.getElementById('word5').value=='суша' ){
            result=result+0.5;} 
    if(document.getElementById('word5').value=='поверхность' ){
            result=result+0.5;}  
    if(result>=2.5){
       alert("Запомните "+result);
    }
    else if (result==0){
       alert("Запомните "+result)
    }
    else if (result<=2.5 && result>=1.5){
       alert("Запомните "+result)
    }
    else if (result<=1.5 && result>=1){
        alert("Запомните "+result)
     }
}
function sum1(){
    if(document.getElementById('wor1').value=='генерал' ){
        result++;
    }if(document.getElementById('wor1').value=='граф' ){
        result=result+0.5;
    }if(document.getElementById('wor1').value=='лорд' ){
        result=result+0.5;
    }if(document.getElementById('wor1').value=='дворянин' ){
        result=result+0.5;
    }if(document.getElementById('wor2').value=='сыновья' ){
        result++;
    }if(document.getElementById('wor2').value=='дочери' ){
        result=result+0.5;
    }if(document.getElementById('wor2').value=='дети' ){
        result=result+0.5;
    }if(document.getElementById('wor2').value=='близких' ){
        result=result+0.5;
    }if(document.getElementById('wor3').value=='судьба' ){
        result++;
    }if(document.getElementById('wor3').value=='жизнь' ){
        result=result+0.5;
    }if(document.getElementById('wor3').value=='будущие' ){
        result=result+0.5;
    }if(document.getElementById('wor4').value=='Сибирь' ){
        result++;
    }if(document.getElementById('wor4').value=='заполярье' ){
        result=result+0.5;
    }if(document.getElementById('wor4').value=='заполярье' ){
        result=result+0.5;
    }if(document.getElementById('wor4').value=='ссылку' ){
        result=result+0.5;
    }if(document.getElementById('wor5').value=='Пушкин' ){
        result++;
    }if(document.getElementById('wor5').value=='пушкин' ){
        result++;
    }if(document.getElementById('wor5').value=='поэт' ){
        result=result+0.5;
    }if(document.getElementById('wor5').value=='писатель' ){
        result=result+0.5;
    }if(document.getElementById('wor6').value=='взрослыми' ){
        result++;
    }if(document.getElementById('wor6').value=='зрелыми' ){
        result=result+0.5;
    }if(document.getElementById('wor6').value=='старше' ){
        result=result+0.5;
    }if(document.getElementById('wor7').value=='Раевских' ){
        result++;
    }if(document.getElementById('wor7').value=='лодов' ){
        result=result+0.5;
    }if(document.getElementById('wor7').value=='бояров' ){
        result=result+0.5;
    }if(document.getElementById('wor7').value=='дворян' ){
        result=result+0.5;
    }if(document.getElementById('wor8').value=='краткость' ){
        result++;
    }if(document.getElementById('wor8').value=='недолгосрочность' ){
        result=result+0.5;
    }if(document.getElementById('wor8').value=='быстроту' ){
        result=result+0.5;
    }
    if(result<=8){
        alert(result);
    }else if(result<=7){
        alert(result);
    }else if(result<=6){
        alert(result);
    }else if(result<=5){
        alert(result);
    }else if(result<=4){
        alert(result);
    }else if(result<=3){
        alert(result);
    }else if(result<=2){
        alert(result);
    }else if(result<=1){
        alert(result);
    }
}
function sum2(){
    if(document.getElementById('wo1').value=='жилья' ){
        result++;
    }if(document.getElementById('wo1').value=='дома' ){
        result=result+0.5;
    }if(document.getElementById('wo1').value=='хижины' ){
        result=result+0.5;
    }if(document.getElementById('wo1').value=='ночлега' ){
        result=result+0.5;
    }if(document.getElementById('wo1').value=='избы' ){
        result=result+0.5;
    }if(document.getElementById('wo1').value=='палатки' ){
        result=result+0.5;
    }if(document.getElementById('wo2').value=='огне' ){
        result++;
    }if(document.getElementById('wo2').value=='огниве' ){
        result=result+0.5;
    }if(document.getElementById('wo2').value=='пламене' ){
        result=result+0.5;
    }if(document.getElementById('wo2').value=='пожаре' ){
        result=result+0.5;
    }if(document.getElementById('wo3').value=='человеку' ){
        result++;
    }if(document.getElementById('wo3').value=='существу' ){
        result=result+0.5;
    }if(document.getElementById('wo3').value=='индивиду' ){
        result=result+0.5;
    }if(document.getElementById('wo3').value=='людям' ){
        result=result+0.5;
    }if(document.getElementById('wo3').value=='обществу' ){
        result=result+0.5;
    }if(document.getElementById('wo4').value=='богами' ){
        result++;
    }if(document.getElementById('wo4').value=='божествами' ){
        result=result+0.5;
    }if(document.getElementById('wo4').value=='всевышними' ){
        result=result+0.5;
    }if(document.getElementById('wo4').value=='гефестом' ){
        result=result+0.5;
    }if(document.getElementById('wo5').value=='Прометей' ){
        result++;
    }if(document.getElementById('wo5').value=='прометей' ){
        result++;
    }if(document.getElementById('wo5').value=='герой' ){
        result=result+0.5;
    }if(document.getElementById('wo5').value=='полубог' ){
        result=result+0.5;
    }if(document.getElementById('wo5').value=='бог' ){
        result=result+0.5;
    }if(document.getElementById('wo5').value=='титан' ){
        result=result+0.5;
    }if(document.getElementById('wo6').value=='муки' ){
        result++;
    }if(document.getElementById('wo6').value=='страдания' ){
        result=result+0.5;
    }if(document.getElementById('wo6').value=='мучения' ){
        result=result+0.5;
    }if(document.getElementById('wo6').value=='бремя' ){
        result=result+0.5;
    }if(document.getElementById('wo6').value=='испытания' ){
        result=result+0.5;
    }if(document.getElementById('wo7').value=='признаком' ){
        result++;
    }if(document.getElementById('wo7').value=='атрибутом' ){
        result=result+0.5;
    }if(document.getElementById('wo7').value=='сигналом' ){
        result=result+0.5;
    }if(document.getElementById('wo7').value=='путником' ){
        result=result+0.5;
    }if(document.getElementById('wo8').value=='знал' ){
        result++;
    }if(document.getElementById('wo8').value=='думал' ){
        result=result+0.5;
    }if(document.getElementById('wo8').value=='понмал' ){
        result=result+0.5;
    }if(document.getElementById('wo8').value=='догадывался' ){
        result=result+0.5;
    }if(document.getElementById('wo8').value=='осозновал' ){
        result=result+0.5;
    }if(document.getElementById('wo9').value=='дома' ){
        result++;
    }if(document.getElementById('wo9').value=='хижину' ){
        result=result+0.5;
    }if(document.getElementById('wo9').value=='ночьлежку' ){
        result=result+0.5;
    }if(document.getElementById('wo9').value=='хибару' ){
        result=result+0.5;
    }if(document.getElementById('wo9').value=='шалаш' ){
        result=result+0.5;
    }if(document.getElementById('wo9').value=='избу' ){
        result=result+0.5;
    }if(document.getElementById('wo9').value=='шатер' ){
        result=result+0.5;
    }if(document.getElementById('wo9').value=='лачугу' ){
        result=result+0.5;
    }if(document.getElementById('wo9').value=='терем' ){
        result=result+0.5;
    }if(document.getElementById('wo9').value=='хоромы' ){
        result=result+0.5;
    }if(document.getElementById('wo10').value=='зверя' ){
        result++;
    }if(document.getElementById('wo10').value=='врагов' ){
        result=result+0.5;
    }if(document.getElementById('wo10').value=='животных' ){
        result=result+0.5;
    }if(document.getElementById('wo10').value=='вредителей' ){
        result=result+0.5;
    }if(document.getElementById('wo11').value=='блага' ){
        result++;
    }if(document.getElementById('wo11').value=='пользы' ){
        result=result+0.5;
    }if(document.getElementById('wo12').value=='бедой' ){
        result++;
    }if(document.getElementById('wo12').value=='угрозой' ){
        result=result+0.5;
    }if(document.getElementById('wo12').value=='трагедией' ){
        result=result+0.5;
    }if(document.getElementById('wo12').value=='несчастьем' ){
        result=result+0.5;
    }if(document.getElementById('wo12').value=='катастрофой' ){
        result=result+0.5;
    }if(document.getElementById('wo12').value=='гибелью' ){
        result=result+0.5;
    }if(document.getElementById('wo12').value=='драммой' ){
        result=result+0.5;
    }if(document.getElementById('wo12').value=='ударом' ){
        result=result+0.5;
    }if(document.getElementById('wo13').value=='жадные' ){
        result++;
    }if(document.getElementById('wo13').value=='корыстные' ){
        result=result+0.5;
    }if(document.getElementById('wo13').value=='алочные' ){
        result=result+0.5;
    }if(document.getElementById('wo13').value=='ненасытные' ){
        result=result+0.5;
    }if(document.getElementById('wo13').value=='мелочные' ){
        result=result+0.5;
    }if(document.getElementById('wo14').value=='породил' ){
        result++;
    }if(document.getElementById('wo14').value=='создал' ){
        result=result+0.5;
    }if(document.getElementById('wo14').value=='сформировал' ){
        result=result+0.5;
    }if(document.getElementById('wo14').value=='пробудил' ){
        result=result+0.5;
    }if(document.getElementById('wo14').value=='повлек' ){
        result=result+0.5;
    }if(document.getElementById('wo14').value=='зародил' ){
        result=result+0.5;
    }
    if(result<=14){
        alert(result);
    }else if(result<=13){
        alert(result);
    }else if(result<=12){
        alert(result);
    }else if(result<=11){
        alert(result);
    }else if(result<=10){
        alert(result);
    }else if(result<=9){
        alert(result);
    }else if(result<=8){
        alert(result);
    }else if(result<=7){
        alert(result);
    }else if(result<=6){
        alert(result);
    }else if(result<=5){
        alert(result);
    }else if(result<=4){
        alert(result);
    }else if(result<=3){
        alert(result);
    }else if(result<=2){
        alert(result);
    }else if(result<=1){
        alert(result);
    }
}
function sum3(){
    if(document.getElementById('w1').value=='н' ){
        result++;
    }if(document.getElementById('w2').value==',' ){
        result++;
    }if(document.getElementById('w3').value=='н' ){
        result++;
    }if(document.getElementById('w4').value==',' ){
        result++;
    }if(document.getElementById('w5').value=='и' ){
        result++;
    }if(document.getElementById('w6').value=='' ){
        result++;
    }if(document.getElementById('w7').value=='ь' ){
        result++;
    }if(document.getElementById('w8').value=='' ){
        result++;
    }
    if(result<=8){
        alert(result);
    }else if(result<=7){
        alert(result);
    }else if(result<=6){
        alert(result);
    }else if(result<=5){
        alert(result);
    }else if(result<=4){
        alert(result);
    }else if(result<=3){
        alert(result);
    }else if(result<=2){
        alert(result);
    }else if(result<=1){
        alert(result);
    }
}
function sum4(){
    if(document.getElementById('v1').value=='н' ){
        result++;
    }if(document.getElementById('v2').value==',' ){
        result++;
    }if(document.getElementById('v3').value=='и' ){
        result++;
    }if(document.getElementById('v4').value=='-' ){
        result++;
    }if(document.getElementById('v5').value=='н' ){
        result++;
    }if(document.getElementById('v6').value=='н' ){
        result++;
    }if(document.getElementById('v7').value=='а' ){
        result++;
    }if(document.getElementById('v8').value==',' ){
        result++;
    }if(document.getElementById('v9').value=='и' ){
        result++;
    }if(document.getElementById('v10').value=='е' ){
        result++;
    }if(document.getElementById('v11').value==',' ){
        result++;
    }if(document.getElementById('v12').value=='н' ){
        result++;
    }if(document.getElementById('v13').value==',' ){
        result++;
    }if(document.getElementById('v14').value==',' ){
        result++;
    }
    if(result<=14){
        alert(result);
    }else if(result<=13){
        alert(result);
    }else if(result<=12){
        alert(result);
    }else if(result<=11){
        alert(result);
    }else if(result<=10){
        alert(result);
    }else if(result<=9){
        alert(result);
    }else if(result<=8){
        alert(result);
    }else if(result<=7){
        alert(result);
    }else if(result<=6){
        alert(result);
    }else if(result<=5){
        alert(result);
    }else if(result<=4){
        alert(result);
    }else if(result<=3){
        alert(result);
    }else if(result<=2){
        alert(result);
    }else if(result<=1){
        alert(result);
    }
}
function sum5(){
    if(document.getElementById('d1').value==',' ){
        result++;
    } if(document.getElementById('d2').value==',' ){
        result++;
    }if(document.getElementById('d3').value=='и' ){
        result++;
    }if(document.getElementById('d4').value==',' ){
        result++;
    }if(document.getElementById('d5').value=='ы' ){
        result++;
    }if(document.getElementById('d6').value=='н' ){
        result++;
    }if(document.getElementById('d7').value=='н' ){
        result++;
    }if(document.getElementById('d8').value==',' ){
        result++;
    }if(document.getElementById('d9').value=='о' ){
        result++;
    }if(document.getElementById('d10').value=='е' ){
        result++;
    }if(document.getElementById('d11').value=='и' ){
        result++;
    }if(document.getElementById('d12').value==',' ){
        result++;
    }if(document.getElementById('d13').value==',' ){
        result++;
    }if(document.getElementById('d14').value=='и' ){
        result++;
    }if(document.getElementById('d15').value==',' ){
        result++;
    }if(document.getElementById('d16').value==';' ){
        result++;
    }if(document.getElementById('d17').value=='е' ){
        result++;
    }if(document.getElementById('d18').value=='и' ){
        result++;
    }if(document.getElementById('d19').value==',' ){
        result++;
    }if(document.getElementById('d20').value=='и' ){
        result++;
    }
    if(result<=20){
        alert(result);
    }else if(result<=19){
        alert(result);
    }else if(result<=18){
        alert(result);
    }else if(result<=17){
        alert(result);
    }else if(result<=16){
        alert(result);
    }else if(result<=15){
        alert(result);
    }else if(result<=14){
        alert(result);
    }else if(result<=13){
        alert(result);
    }else if(result<=12){
        alert(result);
    }else if(result<=11){
        alert(result);
    }else if(result<=10){
        alert(result);
    }else if(result<=9){
        alert(result);
    }else if(result<=8){
        alert(result);
    }else if(result<=7){
        alert(result);
    }else if(result<=6){
        alert(result);
    }else if(result<=5){
        alert(result);
    }else if(result<=4){
        alert(result);
    }else if(result<=3){
        alert(result);
    }else if(result<=2){
        alert(result);
    }else if(result<=1){
        alert(result);
    }
}
