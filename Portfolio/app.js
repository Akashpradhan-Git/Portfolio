
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);


const navSlide = () => {

    const burger = document.querySelector('.burger');
    console.log(burger);
    const nav = document.querySelector('.nav_list');
    console.log(nav);
    
    //togol nav
    burger.addEventListener('click',() => {
      nav.classList.toggle('nav_active');
    });

}


navSlide();