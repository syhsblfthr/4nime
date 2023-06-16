/* Header Progress Bar */
(async () => {
    const header = document.querySelector('header');
    const headerWidth = header.clientWidth;
    const headerProgress = header.lastElementChild;
    console.log(headerWidth);
    const main = document.querySelector('main');

    main.addEventListener('scroll', () => {
        headerProgress.style.width = (headerWidth * (main.scrollTop / ((main.scrollHeight - main.clientHeight)))) + 'px';
        console.log(main.scrollTop, main.scrollHeight, main.clientHeight, headerWidth);
    });
})();