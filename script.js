document.getElementsByClassName("js-oval-separator")[0].addEventListener('click', myFunction);

function myFunction() {
    document.getElementsByClassName("js-right")[0].classList.toggle('right-red');
    document.getElementsByClassName("js-left")[0].classList.toggle('left-red');
    document.getElementsByClassName("js-left")[0].classList.add('left-blue');
    document.getElementsByClassName("js-oval-separator")[0].classList.toggle('flip');
    
}