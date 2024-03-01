import state from "./state.js";
import * as elements from "./elements.js"
import * as timer from "./timer.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle("running");
    timer.countdown();
}

export function reset() {
    state.isRunning = false;
    document.documentElement.classList.remove("running");
}

export function addMinutes() {
    if(state.minutes + 5 > 60) {
        return;
    }
    state.minutes += 5;
    timer.updateDisplay();
}

export function decreaseMinutes() {
    if(state.minutes - 5 < 0) {
        return;
    }
    state.minutes -= 5;
    timer.updateDisplay();
}

export function toggleMusicFlorest(isSelected) {
    sounds.florest.play();
    sounds.florest.loop = true;

    if (!isSelected) {
        sounds.florest.pause();
        return;
    }
}

export function toggleMusicRain(isSelected) {
    sounds.rain.play();
    sounds.rain.loop = true;

    if (!isSelected) {
        sounds.rain.pause();
        return;
    }
}

export function toggleMusicCoffeeShop(isSelected) {
    sounds.coffeeShop.play();
    sounds.coffeeShop.loop = true;
    
    if (!isSelected) {
        sounds.coffeeShop.pause();
        return;
    }
}

export function toggleMusicFireplace(isSelected) {
    sounds.fireplace.play();
    sounds.fireplace.loop = true;

    if (!isSelected) {
        sounds.fireplace.pause();
        return;
    }
}
