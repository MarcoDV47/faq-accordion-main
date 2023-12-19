const items = document.querySelectorAll("li.item");
console.log(items);
items.forEach(li => {
    li.addEventListener("click", () => {
        const activeItem = document.querySelector(".active");
        if (activeItem) {
            activeItem.classList.remove("active");
        }

        li.classList.add("active");
        if (activeItem === li) {
            li.classList.remove("active");
        }
    })
});