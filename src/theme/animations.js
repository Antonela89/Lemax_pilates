const commonTransition = {
    duration: 1.4,
    ease: [0.4, 0, 0.2, 1],
};

export const fadeInUpLeft = {
    hidden: { opacity: 0, x: -60, y: 40 }, 
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: commonTransition,
    },
};

export const fadeInUpRight = {
    hidden: { opacity: 0, x: 60, y: 40 },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: commonTransition,
    },
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0, 
        },
    },
};

export const imageEntry = (isDarkMode) => ({
    hidden: {
        opacity: 0,
        x: 60,
        y: 40,
        scale: 1.1,
        filter: `blur(8px) brightness(${isDarkMode ? 0.8 : 1}) contrast(${isDarkMode ? 1.1 : 1})`,
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: `blur(0px) brightness(${isDarkMode ? 0.8 : 1}) contrast(${isDarkMode ? 1.1 : 1})`,
        transition: commonTransition,
    },
});
