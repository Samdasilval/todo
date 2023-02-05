const selectCategory = document.querySelector("#category-container");
const categories = document.querySelectorAll(".category");

const selectText = document.querySelector("#input-todo");
const selectList = document.querySelector("#list");

const selectListLi = document.querySelectorAll("li");

const selectButton = document.querySelectorAll(".button-done");

selectCategory.addEventListener("click", (e) => {
    if(e.target.classList.contains("category")){
        categories.forEach((element) => {
            if (element !== e.target){
                element.dataset.selected = false;
            } else {
                element.dataset.selected = true;
            }
        })
    }
});

selectText.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
        const contenu = e.target.value;
        let categorySelected = "";
        categories.forEach((el) => {
            if (el.dataset.selected === "true") {
                categorySelected = el.dataset.category;
            }
        });
        const html = `<li data-category="${categorySelected}" data-done="false">${contenu}
        <div class="button-done">❌</div>
      </li>`;
        selectList.insertAdjacentHTML("afterbegin", html);
        e.target.value = "";
        e.target.blur();
    }
});

selectList.addEventListener("click", (e) => {
    if(e.target.dataset.done === "false"){
        e.target.dataset.done = "true"; 
    } else {
        e.target.dataset.done = "false"; 
    }

    if (e.target.classList.contains("button-done")){
        e.target.parentElement.remove();
    }
});

