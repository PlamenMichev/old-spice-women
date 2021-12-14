function toggleHamburger(element) {
    const mobileNavElements = document.getElementsByClassName('nav-links')[0];
    const mobileLogoElement = document.getElementById('nav-logo-mobile');
    const isActive = mobileNavElements.classList.contains('active')

    if (isActive) {
        mobileNavElements.classList.remove('active');
        mobileLogoElement.classList.remove('active');
        // document.body.style.overflowY = 'hidden'
    } else {
        mobileNavElements.classList.add('active');
        mobileLogoElement.classList.add('active');
        // document.body.style.overflowY = 'auto'
    }

    element.classList.toggle("change");
}