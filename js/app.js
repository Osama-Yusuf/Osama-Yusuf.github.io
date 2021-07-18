let toDoContainer = document.querySelector("#toDoContainer");
let input = document.querySelector("#inputF");
let form1 = document.querySelectorAll("#form" + count);
let head = document.querySelector("head");
let link = document.createElement("link");
link.setAttribute("rel", "stylesheet")
link.setAttribute("href", "css/all.min.css")
head.appendChild(link);

/* ------------------------------- theme gear ------------------------------- */
// select the div with class "h-btns"
let hBtn = document.querySelector(".h-btns");

// select element with gear class
let gear = document.querySelector(".gear");

gear.addEventListener("click", () => {
  hBtn.classList.toggle("g-Open");
  hBtn.classList.toggle("h-btns");
})

/* --------------------------- input to edit title -------------------------- */
let hTxt = document.querySelector(".hTxt");
let header1 = document.querySelector(".header1");

let Tinput = document.createElement("input");
Tinput.setAttribute("type", "text");
Tinput.classList.add("hideEdit");
Tinput.disabled = true;
header1.appendChild(Tinput);
Tinput.setAttribute("value", hTxt.textContent);

/* --------------------------- click to edit title -------------------------- */
let chList = document.querySelector(".list");

chList.addEventListener("click", () => {
  hTxt.textContent = Tinput.value;
  Tinput.classList.toggle("Tinput");
  Tinput.classList.toggle("hideEdit");

  if (Tinput.classList.contains("Tinput")) {
    Tinput.disabled = false;
    hTxt.style.opacity = "0";
  } else {
    Tinput.disabled = true;
    hTxt.style.opacity = "1";
    Tinput.opacity = "none";
  }
});

/* -------------------------- on *enter* input data ------------------------- */
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    // addBtn.click();
  }
});
/* -------------------------------- add task -------------------------------- */
let addBtn = document.querySelector("#addToDo");
addBtn.setAttribute("type", "submit");
addBtn.setAttribute("form", "form" + count);
addBtn.addEventListener("click", () => {
  event.preventDefault(); // to prevent form from reloding the page on enter

  let scndCont = document.createElement("div");
  scndCont.classList.add("scndCont");

  if (input.value === "") {
    alert("You must write something!");
  } else {
    toDoContainer.appendChild(scndCont);
  }

  /* -------------------------------- check btn ------------------------------- */
  let check = document.createElement("button");
  check.classList.add("check");
  scndCont.appendChild(check);
  check.innerHTML = '<i class="fal fa-circle"></i>';

  check.addEventListener("click", () => {
    check.classList.toggle("check");
    check.classList.toggle("checked");

    if (check.classList.contains("checked")) {
      check.innerHTML = '<i class="fal fa-check-circle"></i>';
      para.style.textDecoration = "line-through";
      para.style.color = "black";
      scndCont.style.backgroundColor = "darkgray";
      editBtn.style.color = "black";
      del.style.color = "black";
    } else {
      check.innerHTML = '<i class="fal fa-circle"></i>';
      para.style.textDecoration = "none";
      para.style.color = "#654";
      scndCont.style.backgroundColor = "white";
      editBtn.style.color = "";
      del.style.color = "";
    }
  });

  /* ---------------------- para to show task from input ---------------------- */
  let para = document.createElement("p");
  scndCont.appendChild(para);
  para.innerText = input.value;
  para.classList.add("para");

  /* --------------------------- scnd input for edit -------------------------- */
  let scndinput = document.createElement("input");
  scndinput.setAttribute("type", "text");
  scndinput.classList.add("hideEdit");
  scndinput.disabled = true;
  scndCont.appendChild(scndinput);
  scndinput.setAttribute("value", para.textContent);

  /* ------------------------------- edit button ------------------------------ */
  let editBtn = document.createElement("button");

  editBtn.innerHTML = '<i class="far fa-edit"></i>';
  scndCont.appendChild(editBtn);
  editBtn.classList.add("editBtn");

  editBtn.addEventListener("click", () => {
    para.textContent = scndinput.value;
    scndinput.classList.toggle("edit");
    scndinput.classList.toggle("hideEdit");

    if (scndinput.classList.contains("edit")) {
      scndinput.disabled = false;
      para.style.opacity = "0";
    } else {
      scndinput.disabled = true;
      para.style.opacity = "1";
      scndinput.opacity = "none";
    }
  });
  /* --------------------------------- del btn -------------------------------- */
  let del = document.createElement("button");

  del.innerHTML = '<i class="fal fa-trash-alt"></i>';
  scndCont.appendChild(del);
  del.classList.add("del");

  del.addEventListener("click", () => {
    scndCont.removeChild(para);
    scndCont.removeChild(del);
    toDoContainer.removeChild(scndCont);
  });

  /* ------------------- erase input value after submitting ------------------- */
  let frm = document.getElementsByName("task" + count)[0];
  frm.reset(); // Reset all form data
  return false; // Prevent page refresh
});

const dragArea = document.querySelector(".to-dos");
new Sortable(dragArea, {
  animation: 350,
});

/* ----------------- dark mode styleing with js and checkbox ---------------- */
const checkbox = document.querySelector(".checkbox");
const cbInput = document.querySelector(".cbInput");
const cbContainer = document.querySelector(".cbContainer");
const body = document.querySelector("body");
const credit = document.querySelector(".credit");
const plusBtn = document.querySelector("#addToDo");
const addList = document.querySelector("#addList");
credit.classList.toggle("white-T");
addList.classList.toggle("white-T");

checkbox.addEventListener("click", () => {
  if ((checkbox.checked = true)) {
    addList.classList.toggle("white-T");
    addList.classList.toggle("white-yellow");

    gear.classList.toggle("white-yellow");

    body.classList.toggle("white");
    body.classList.toggle("dark");

    credit.classList.toggle("dark-T");
    credit.classList.toggle("white-T");

    hTxt.classList.toggle("txtsh");
    hTxt.classList.toggle("hTxt");

    plusBtn.classList.toggle("white-T");

    form1[0].classList.toggle("frmsh");
    form1[0].classList.toggle("form1");

    chList.classList.toggle("txtsh");
  }
});