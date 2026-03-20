export const fadeInUpLeft = {
    hidden: {
        opacity: 0,
        x: -100,
        y: 80,
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration: 1.2,
            ease: [0.4, 0, 0.2, 1],
        },
    },
};

export const fadeInUpRight = {
    hidden: {
        opacity: 0,
        x: 100,
        y: 80,
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration: 1.2,
            ease: [0.4, 0, 0.2, 1],
        },
    },
};

// Contenedor para efecto cascada (stagger) en los textos
export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

export const imageFocusIn = {
    hidden: {
        opacity: 0,
        scale: 1.1, 
        filter: 'blur(4px)', 
    },
    visible: {
        opacity: 1,
        scale: 1, 
        filter: 'blur(0px)',
        x: 0,
        transition: {
            duration: 1.8, 
            ease: [0.34, 1.56, 0.64, 1], 
        },
    },
};
