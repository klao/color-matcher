"use strict";

const left = document.getElementById("left");
const right = document.getElementById("right");

const randomComponent = () => Math.floor(Math.random() * 256);
const setColor = (elt, col) => {
    elt.style.backgroundColor = `rgb(${col.red},${col.green},${col.blue})`;
};

const rightColor = {
    red: randomComponent(),
    green: randomComponent(),
    blue: randomComponent(),
};
const leftColor = {
    red: 0, green: 0, blue: 0
};

setColor(left, leftColor);
setColor(right, rightColor);

const controls = document.querySelectorAll(".control");
controls[0].component = "red";
controls[1].component = "green";
controls[2].component = "blue";

const scrollColor = (ev) => {
    ev.preventDefault();
    const delta = ev.deltaY > 0 ? -1 : 1;
    const key = ev.currentTarget.component;
    leftColor[key] = Math.max(0, Math.min(255, leftColor[key] + delta));
    setColor(left, leftColor);
};

for (const elt of controls) {
    elt.addEventListener("wheel", scrollColor, { passive: false });
}
