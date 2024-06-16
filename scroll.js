window.addEventListener('scroll',() => {
    let Y = window.scrollY;
    let header;
    header = document.querySelector('header');
    let section1 = document.querySelector('#section1');
    if(Y > 250){
        section1.style.transform = 'scale(0)';
        section1.style.opactiy = '0';
    }
    else {
        header.style.backgroundColor ='#222';
        section1.style.transform = 'scale(1)';
        section1.style.opacity = '1';
    }
    
})