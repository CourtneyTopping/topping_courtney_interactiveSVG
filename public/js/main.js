(() => {

    const svgGraphic = document.querySelector(".svg-wrapper");

    svgGraphic.addEventListener("click", () => {
        console.log(this.querySelector('.svg-graphic'));
    })
})();