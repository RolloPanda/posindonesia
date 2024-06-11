const container = document.querySelector('.gallery');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelector('.thumb');

container.addEventListener('click', function(e){
    
    //cek apakah yang diklik adalah thumb
    if (e.target.className == 'thumb') {
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function(){
            jumbo.classList.remove('fade');
        },500);

        e.target.classList.add('active')
    }
});