class AnimatedElement {
    constructor(elem) {
        this.elem = elem
        this.elemClass = elem.classList[0]
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
        document.addEventListener('scroll', animatedItems)
    }

    animatedItems() {
        this.items.forEach(element => {
            element.elem.classList.add('_active')
        });

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
    console.log(app)
}

getItems()