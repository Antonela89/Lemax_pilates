export const fadeInUpLeft = {
    hidden: {
        opacity: 0,
        x: -60,
        y: 60,
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.6, 0.05, 0.01, 0.9], // Cubic bezier para un movimiento elegante
        },
    },
};

export const fadeInUpRight = {
    hidden: {
        opacity: 0,
        x: 60,
        y: 60,
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.6, 0.05, 0.01, 0.9],
        },
    },
};

// Variantes para que los hijos aparezcan uno tras otro
export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Retraso entre cada elemento hijo
        },
    },
};
