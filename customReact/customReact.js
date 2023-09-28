
function renderElement(reactElement, container){
    const domElem= document.createElement(reactElement.type);
    domElem.innerHTML= reactElement.children
    // domElem.href= reactElement.props.href
    // domElem.target= reactElement.props.target

    domElem.setAttribute('href', reactElement.props.href)
    domElem.setAttribute('target', reactElement.props.target)

    container.appendChild(domElem)
}

const reactElement= {
    type: 'a',
    props: {
        href : 'https://mia-khalifa.netlify.app',
        target: "_blank"
    },

    children: "click to go "

}

const root= document.getElementById('root')
// root.innerHTML= "hi this is Ankit"

renderElement(reactElement, root)


