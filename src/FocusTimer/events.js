import * as elements from "./elements.js";
import * as actions from "./actions.js";
import state from "./state.js";
import { updateDisplay } from "./timer.js";

export function registerControls() {
    elements.controls.addEventListener("click", (event) => {
        const action = event.target.dataset.action;
        if (typeof actions[action] != "function") {
            return;
        }
        actions[action]();
    })
}

export function registerSoundsControls() {
    elements.soundsControls.addEventListener("click", (event) => {
        const action = event.target.dataset.action;
        const isSelected = event.target.classList.toggle("selected");
        if (typeof actions[action] == "function") {
            actions[action](isSelected);
        }
        
    })
}

export function setMinutes() {
    elements.minutes.addEventListener("click", () => {
        elements.minutes.textContent = "";
        elements.minutes.setAttribute("contenteditable", true)
        elements.minutes.focus();
    })

    elements.minutes.onkeypress = (event) => /\d/.test(event.key)

    elements.minutes.addEventListener("blur", (event) => {
        console.log(event)
        let time = Number(event.currentTarget.textContent);
        time = time > 60 ? 60 : time;

        state.minutes = time;
        state.seconds = 0;

        updateDisplay();
        elements.minutes.removeAttribute("contenteditable");
    })
}