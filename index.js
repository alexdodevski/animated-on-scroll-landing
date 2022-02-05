class AnimatedElement {
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

class App {

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
            item.elemOffsetY = item.offset(item.elem).top

            if (item.elemHeight > windowHeight) {
                animationPoint = windowHeight - windowHeight / 4
            }

            if ((scrollTop > item.elemOffsetY - animationPoint) && scrollTop < item.elemOffsetY + item.elemHeight) {
                item.elem.classList.add('_active')
            }
        }
    }

}

function getItems() {
    const items = document.querySelectorAll('._anim_items')
    let elemsArr = []

    for (let i = 0; i < items.length; i++) {
        let item = new AnimatedElement(items[i])
        elemsArr.push(item)
    }

    const app = new App(elemsArr)
    app.animatedOnScroll()
}

getItems()