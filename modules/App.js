export default class App {
    constructor(elems) {
        this.items = elems
    }

    animatedOnScroll() {
        if (this.items.length == 0) return
        this.animatedItems()
        const animatedItems = this.animatedItems.bind(this)
        window.addEventListener('scroll', animatedItems)
    }

    animatedItems() {
        for (let item of this.items) {

            let windowHeight = window.innerHeight
            let animationPoint = windowHeight - item.elemHeight / 4
            let scrollTop = window.scrollY
            item.elemOffsetY = this.offset(item.elem).top

            if (item.elemHeight > windowHeight) {
                animationPoint = windowHeight - windowHeight / 4
            }

            if ((scrollTop > item.elemOffsetY - animationPoint) && scrollTop < item.elemOffsetY + item.elemHeight) {
                item.elem.classList.add('_active')
            } else {
                console.log(`scrollTop: ${scrollTop}`, `elemcoords: ${item.elemOffsetY}`, `animationPoint: ${animationPoint}`, `elem height: ${item.elemHeight}`)
                item.elem.classList.remove('_active')
            }
        }
    }


    offset(el) {
        let coords = el.getBoundingClientRect()
        return { top: coords.top + window.scrollY, left: coords.left + window.scrollX }
    }

}