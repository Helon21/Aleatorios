const readMoreBtn = document.querySelector('.read-more')
const description = document.querySelector('.anime-description')

readMoreBtn.addEventListener('click', function lerMais(){ 
    description.classList.toggle('show-more')
    if(description.classList.contains('show-more')){
        readMoreBtn.innerHTML = 'Read Less'
    } else{
        readMoreBtn.innerHTML = 'Read More'
    }
})