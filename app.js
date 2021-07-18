let addBtn = document.querySelector("#addToDo");
let toDoContainer = document.querySelector("#toDoContainer");
let input = document.querySelector("#inputF");
let form1 = document.querySelector("#form1")

addBtn.setAttribute("type", "submit");  
addBtn.setAttribute("form", "form1");

/* -------------------------- on *enter* input data ------------------------- */
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    // addBtn.click();
  }
});
/* -------------------------------- add task -------------------------------- */
addBtn.addEventListener("click", () => {
  var scndCont = document.createElement("div");
  scndCont.classList.add("scndCont");

  if (input.value === "") {
    alert("You must write something!");
  } else {
    toDoContainer.appendChild(scndCont);
  }
  

  /* -------------------------------- check btn ------------------------------- */
  var check = document.createElement("button");
  check.classList.add("check");
  scndCont.appendChild(check);
  check.innerHTML = '<i class="fal fa-circle"></i>';
  // eventlistner
  check.addEventListener("click", () => {
    check.classList.toggle("check");
    check.classList.toggle("checked");

    if (check.classList.contains("checked")) {
      check.innerHTML = '<i class="fal fa-check-circle"></i>';
      para.style.textDecoration = "line-through";
      para.style.color = "black";
      scndCont.style.backgroundColor = "darkgray"
      editBtn.style.color="black"
      del.style.color="black"
    } else {
      check.innerHTML = '<i class="fal fa-circle"></i>';
      para.style.textDecoration = "none";
      para.style.color = "#654";
      scndCont.style.backgroundColor = "white"
      editBtn.style.color=""
      del.style.color=""
    }
  });

  /* ---------------------- para to show task from input ---------------------- */
  var para = document.createElement("p");
  scndCont.appendChild(para);
  para.innerText = input.value;
  para.classList.add("para");
  
  /* --------------------------- scnd input for edit -------------------------- */
  var scndinput= document.createElement("input");
  scndinput.setAttribute("type", "text")
  scndinput.classList.add("hideEdit")
  scndinput.disabled = true;
  scndCont.appendChild(scndinput);
  scndinput.setAttribute("value", para.textContent)
  
  /* ------------------------------- edit button ------------------------------ */
  var editBtn = document.createElement("button");
  
  editBtn.innerHTML = '<i class="far fa-edit"></i>';
  scndCont.appendChild(editBtn);
  editBtn.classList.add("editBtn");
  
  editBtn.addEventListener("click", () => {
    para.textContent = scndinput.value;
    scndinput.classList.toggle("edit");
    scndinput.classList.toggle("hideEdit");

    if (scndinput.classList.contains("edit")) {
      scndinput.disabled = false;
      para.style.opacity="0";
    } else {
      scndinput.disabled = true;
      para.style.opacity="1";
      scndinput.opacity="none"
    }
  })  
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

  /* ------------------- erase input value after submitting ------------------- */
  var frm = document.getElementsByName('task')[0];
  frm.submit(); // Submit the form
  frm.reset();  // Reset all form data
  return false; // Prevent page refresh
});


