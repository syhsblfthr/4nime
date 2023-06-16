/* Intersection Observer */
(async () => {
    const intersectionObserverCallback = (entries, observer) => {
        for (const entry of entries) {
            const intersectionThreshold = entry.target.getAttribute('transition');
            if (entry.intersectionRatio >= intersectionThreshold) {
                const target = entry.target;
                target.classList.add('transition');
                observer.unobserve(target);
            }
        }
    };

    const intersectionObserver = new IntersectionObserver(intersectionObserverCallback, {
        root: document.querySelector('main'),
        threshold: [
            0.25,
            0.5
        ]
    });

    const elements = document.querySelectorAll('[transition]');
    elements.forEach((el) => { intersectionObserver.observe(el); });
    console.log(elements);
})();