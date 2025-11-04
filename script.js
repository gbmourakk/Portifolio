document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');
    

    
    const toggleMenu = () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    };

    menuToggle.addEventListener('click', toggleMenu);

   
    links.forEach(link => {
        link.addEventListener('click', () => {
            
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                
                const headerHeight = document.querySelector('.header').offsetHeight;
                const offsetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
function darkmode(){
    document.body.classList.toggle("darkmode")
}

