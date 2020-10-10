const openButton = document.querySelector("#openOverlay");
const body = document.body;
const successMobal = createModal("The message has been sent, thank you!");

openButton.addEventListener("click", e => {
    body.appendChild(successMobal);
})

function createModal(content) {
    const overlayElement = document.createElement("div");
    overlayElement.classList.add("overlay");

    const template = document.querySelector("#overlayTemplate")

    overlayElement.innerHTML = template.innerHTML;
    overlayElement.addEventListener("click", e => {
        if (e.target === overlayElement) {
            closeElement.click();
        }
    })

    const closeElement = overlayElement.querySelector(".close");
    closeElement.addEventListener("click", e => {
        e.preventDefault();
        body.removeChild(overlayElement);
    })

    const contentElement = overlayElement.querySelector(".content");
    contentElement.innerHTML = content;

    return overlayElement;
}