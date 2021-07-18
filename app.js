let addBtn = document.querySelector("#addToDo");
let toDoContainer = document.querySelector("#toDoContainer");
let input = document.querySelector("#inputF");

addBtn.addEventListener("click", () => {
  var scndCont = document.createElement("div");
  scndCont.classList.add("scndCont");
  // scndCont.style.borderBottom="1px solid black"..

  if (input.value === "") {
    alert("You must write something!");
  } else {
    toDoContainer.appendChild(scndCont);
  }

  /* -------------------------------- check btn ------------------------------- */
  var check = document.createElement("button");
  check.classList.add("check");
  scndCont.appendChild(check);
  // eventlistner
  check.addEventListener("click", () => {
    check.classList.toggle("check")
    check.classList.toggle("checked")

    if (check.classList.contains('checked')) {
      para.style.textDecoration = "line-through";
      para.style.color = "grey";
    } else {
      para.style.textDecoration = "none";
      para.style.color = "cadetblue";
  }

  });

  /* ---------------------- para to show task from input ---------------------- */
  var para = document.createElement("p");
  scndCont.appendChild(para);
  para.innerText = input.value;
  para.classList.add("para")

  /* --------------------------------- del btn -------------------------------- */
  var del = document.createElement("button");
  del.innerHTML = '<i class="fal fa-trash-alt"></i>';
  scndCont.appendChild(del);
  del.classList.add("del");

  del.addEventListener("click", () => {
    scndCont.removeChild(para);
    scndCont.removeChild(del);
    toDoContainer.removeChild(scndCont);
  });
});
