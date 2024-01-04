const btnMobile = document.getElementById ('btn-mobile');

function teggeMenu (event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById ('nav');
    nav.classList.toggle('active');


    const active = nav.classList.contains('active');
    // falaremos com o event--

    event.currentTarget.setAtribute('aria-expanded', active );
}

btnMobile.addEventListener('click', teggeMenu);
 
btnMobile.addEventListener('touchstart', teggeMenu);  //Normalmente usado em mobile
