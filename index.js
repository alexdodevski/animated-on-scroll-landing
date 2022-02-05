import AnimatedElement from "./modules/AnimatedElement.js"
import App from "./modules/App.js"


function getItems() {
    const items = document.querySelectorAll('._anim_items')
    let elemsArr = []

    for (let i = 0; i < items.length; i++) {
        let item = new AnimatedElement(items[i])
        elemsArr.push(item)
    }
    return elemsArr

}

function init() {
    const app = new App(getItems())
    app.animatedOnScroll()
}

init()