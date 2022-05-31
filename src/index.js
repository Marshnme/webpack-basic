import _ from "lodash";
import myName from "./myName";
import "./style.css"

function component() {
    const element = document.createElement("div");

    // lodash, now imported by this script
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.textContent = myName("Joshua")
    element.classList.add("hello")
    return element
}


document.body.appendChild(component());