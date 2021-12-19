let image1=0;
let image2=0;
let image3=0;
let image4=0;
let image5=0;
let image6=0;
let image7=0;
let image8=0;
let image9=0;
function change1() {
    image1=image1+1;
    if(image1%2===0){
        document.getElementById('image1').src = 'img/1_1.png';
    } else {
        document.getElementById('image1').src = 'img/2_1.png';
    }
    setTimeout(result1,100)
}

function change2() {
    image2=image2+1;
    if(image2%2===0){
        document.getElementById('image2').src = 'img/2_2.png';
    } else {
        document.getElementById('image2').src = 'img/1_2.png';
    }
    setTimeout(result1,100)
}

function change3() {
    image3=image3+1;
    if(image3%2===0){
        document.getElementById('image3').src = 'img/1_3.png';
    } else {
        document.getElementById('image3').src = 'img/2_3.png';
    }
    setTimeout(result1,100)
}

function change4() {
    image4=image4+1;
    if(image4%2===0){
        document.getElementById('image4').src = 'img/2_4.png';
    } else {
        document.getElementById('image4').src = 'img/1_4.png';
    }
    setTimeout(result1,100)
}

function change5() {
    image5=image5+1;
    if(image5%2===0){
        document.getElementById('image5').src = 'img/1_5.png';
    } else {
        document.getElementById('image5').src = 'img/2_5.png';
    }
    setTimeout(result1,100)
}

function change6() {
    image6=image6+1;
    if(image6%2===0){
        document.getElementById('image6').src = 'img/2_6.png';
    } else {
        document.getElementById('image6').src = 'img/1_6.png';
    }
    setTimeout(result1,100)
}

function change7() {
    image7=image7+1;
    if(image7%2===0){
        document.getElementById('image7').src = 'img/1_7.png';
    } else {
        document.getElementById('image7').src = 'img/2_7.png';
    }
    setTimeout(result1,100)
}

function change8() {
    image8=image8+1;
    if(image8%2===0){
        document.getElementById('image8').src = 'img/2_8.png';
    } else {
        document.getElementById('image8').src = 'img/1_8.png';
    }
    setTimeout(result1,100)
}

function change9() {
    image9=image9+1;
    if(image9%2===0){
        document.getElementById('image9').src = 'img/2_9.png';
    } else {
        document.getElementById('image9').src = 'img/1_9.png';
    }
    setTimeout(result1,100)
}

function result1() {
    if(image1%2!==image2%2 && image2%2!==image3%2 && image3%2!==image4%2 && image4%2!==image5%2 && image5%2!==image6%2 && image6%2!==image7%2 && image7%2!==image8%2 && image8%2===image9%2) {
        document.getElementById('result').innerText='Chúc mừng bạn đã ghép hình thành công';
    } else {
        document.getElementById('result').innerText='Sai rồi bạn ơi! Xin hãy thử lại'
    }
}