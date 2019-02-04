;
((d) => {
    d.addEventListener('DOMContentLoaded', e => {
        M.AutoInit()

        const sliders = d.querySelectorAll('.slider')

        M.Slider.init(sliders, {
            indicators: true,
            duration: 1000
        })
    })
})(document);