import img1 from './imgs/1.png'
import img2 from './imgs/2.png'
import img3 from './imgs/3.png'
import img4 from './imgs/4.png'
import img5 from './imgs/5.png'
import img6 from './imgs/6.png'
import img7 from './imgs/7.png'
import img8 from './imgs/8.png'
import img9 from './imgs/9.png'

import './style.css'

$(document).ready(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

});

document.getElementById('1').src = img1
document.getElementById('2').src = img2
document.getElementById('3').src = img3
document.getElementById('4').src = img4
document.getElementById('5').src = img5
document.getElementById('6').src = img6
document.getElementById('7').src = img7
document.getElementById('8').src = img8
document.getElementById('9').src = img9