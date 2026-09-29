window.onload = addBoxes;

function addBoxes() {
    const scene = document.querySelector("a-scene");
    let boxes = 0;

    while (boxes < 100) {
        const box = document.createElement("a-box");
        const attr = randomAttr();
console.log(attr);
        box.setAttribute("scale", attr.size);
        box.setAttribute("position", attr.pos);
        box.setAttribute("rotation", `0 ${randomInRange(0, 90)} 0`);
        box.setAttribute("color", "dimgrey");
        box.setAttribute("roughness", "1");

        scene.append(box);
        boxes++;
    }
}

function randomAttr() {
    const dx = randomInRange(0, 25) * randomSign();
    const dz = randomInRange(0, 25) * randomSign();
    const dist = Math.sqrt(dx ** 2 + dz ** 2);

    if (dist < 6 || dist > 25) {
        return randomAttr();
    }

    const sx = 1 + Math.random();
    const sy = 1 + Math.random() * 3;
    const sz = 1 + Math.random();
    const dy = sy / 2;

    return {
        size: `${sx} ${sy} ${sz}`,
        pos: `${dx} ${dy} ${dz}`
    };
}

function randomSign() {
    return Math.random() > 0.5 ? 1 : -1;
}

function randomInRange(min, max) {
    return min + (Math.random() * (max - min));
}
