export default class AnimatedElement {
    constructor(elem) {
        this.elem = elem
        this.elemHeight = elem.offsetHeight
        this.animationStart = 4
    }

    offset(el) {
        let coords = el.getBoundingClientRect()
        return { top: coords.top + window.scrollY, left: coords.left + window.scrollX }
    }
}