export const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
        const offset = 85; // Altura de tu Navbar
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};