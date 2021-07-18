const add_list = document.querySelector("#addList");
const de_cont = document.querySelector(".de-cont");
var count = 0;
add_list.addEventListener("click", () => {
  let seperate = document.createElement("div");
  seperate.classList.add("seperate");
  de_cont.appendChild(seperate);

  let div = document.createElement("div");
  de_cont.appendChild(div);
  div.classList.add("section");
  /* --------------------------------- header1 -------------------------------- */
  let h1 = document.createElement("h1");
  h1.classList.add("header1");
  // h1.innerHTML = '<span class="hTxt">TO DO LIST</span><span class="list"><i class="fal fa-clipboard-list-check"></i></span>'

  div.appendChild(h1);

  let spanhT = document.createElement("span");
  let spanlI = document.createElement("span");

  spanhT.classList.add("hTxt");
  spanhT.innerText = "TO DO LIST";

  spanlI.classList.add("list");
  spanlI.innerHTML = '<i class="fal fa-clipboard-list-check"></i>';

  h1.appendChild(spanhT);
  h1.appendChild(spanlI);

  /* ------------------------ div with class container ------------------------ */
  let divCo = document.createElement("div");
  divCo.classList.add("container");

  div.appendChild(divCo);

  let form = document.createElement("form");
  // form.setAttribute("name", "task");
  form.setAttribute("method", "POST");
  form.setAttribute("action", "#");
  form.classList.add("form1");
  divCo.appendChild(form);

  // for loop
  let form_1 = document.getElementsByClassName("form1");
  for (var count = 0; count < form_1.length; count++) {
    // console.log(count)
    form_1[count].setAttribute("id", "form" + count)
    form_1[count].setAttribute("name", "task" + count)
  }
 
 let divFrst = document.createElement("div");
 divFrst.classList.add("frstcont");
 
 form.appendChild(divFrst);

  let input_f = document.createElement("input");
  input_f.setAttribute("id", "inputF");
  input_f.setAttribute("type", "text");
  input_f.setAttribute("placeholder", "Task...");

  divFrst.appendChild(input_f);

  let btn_addToDo = document.createElement("button");
  btn_addToDo.setAttribute("id", "addToDo");

  divFrst.appendChild(btn_addToDo);

  // btn_addToDo.innerHTML('<i class="far fa-plus"></i>');

  let icon = document.createElement("i");
  icon.classList.add("far");
  icon.classList.add("fa-plus");

  btn_addToDo.appendChild(icon);

  let div_toDoCon = document.createElement("div");
  div_toDoCon.classList.add("to-dos");
  div_toDoCon.setAttribute("id", "toDoContainer");

  divCo.appendChild(div_toDoCon);

  /* -------------------------- button to submit form ------------------------- */

  // let postData = document.createElement("button");
  // postData.classList.add("postData");
  // postData.innerText = "Post Data";
  // div_toDoCon.appendChild(postData);

  // postData.addEventListener("click", () => {
  //   let frm = document.getElementsByName("task")[0];
  //   frm.submit(); // Submit the form
  // });

  /* -------------------------- on *enter* input data ------------------------- */
  input_f.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  });

  /* -------------------------------- add task -------------------------------- */
  btn_addToDo.setAttribute("type", "submit");
  btn_addToDo.addEventListener("click", () => {
    // to prevent form from reloding the page on enter
    event.preventDefault();

    let sub_scndCont = document.createElement("div");
    sub_scndCont.classList.add("scndCont");

    if (input_f.value === "") {
      alert("You must write something!");
    } else {
      div_toDoCon.appendChild(sub_scndCont);
    }

    /* -------------------------------- check btn ------------------------------- */
    let check = document.createElement("button");
    check.classList.add("check");
    sub_scndCont.appendChild(check);
    check.innerHTML = '<i class="fal fa-circle"></i>';

    check.addEventListener("click", () => {
      check.classList.toggle("check");
      check.classList.toggle("checked");

      if (check.classList.contains("checked")) {
        check.innerHTML = '<i class="fal fa-check-circle"></i>';
        para.style.textDecoration = "line-through";
        para.style.color = "black";
        sub_scndCont.style.backgroundColor = "darkgray";
        editBtn.style.color = "black";
        del.style.color = "black";
      } else {
        check.innerHTML = '<i class="fal fa-circle"></i>';
        para.style.textDecoration = "none";
        para.style.color = "#654";
        sub_scndCont.style.backgroundColor = "white";
        editBtn.style.color = "";
        del.style.color = "";
      }
    });

    /* ---------------------- para to show task from input ---------------------- */
    let para = document.createElement("p");
    sub_scndCont.appendChild(para);
    para.innerText = input_f.value;
    para.classList.add("para");

    /* --------------------------- scnd input for edit -------------------------- */
    let scndinput = document.createElement("input");
    scndinput.setAttribute("type", "text");
    scndinput.classList.add("hideEdit");
    scndinput.disabled = true;
    sub_scndCont.appendChild(scndinput);
    scndinput.setAttribute("value", para.textContent);

    /* ------------------------------- edit button ------------------------------ */
    let editBtn = document.createElement("button");

    editBtn.innerHTML = '<i class="far fa-edit"></i>';
    sub_scndCont.appendChild(editBtn);
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
    sub_scndCont.appendChild(del);
    del.classList.add("del");

    del.addEventListener("click", () => {
      sub_scndCont.removeChild(para);
      sub_scndCont.removeChild(del);
      div_toDoCon.removeChild(sub_scndCont);
    });

    /* ------------------- erase input value after submitting ------------------- */
    form.reset(); // Reset all form data
    return false; // Prevent page refresh
  }); // add task end curly

  const dragArea = div_toDoCon;
  new Sortable(dragArea, {
    animation: 350,
  });

  // const dragArea_a = de_cont;
  // new Sortable(dragArea_a, {
  //   animation: 350,
  // });

  /* ---------- these methods doesn't allow me to manipulate it's dom --------- */
  /*
  section.innerHTML = '<h1 class="header1"><span class="hTxt">TO DO LIST</span><span class="list"><i class="fal fa-clipboard-list-check"></i></span></h1><div class="container"><form name="task" action="#" method="POST" id="form1" class="form1"><div class="frstcont"><input type="text" id="inputF" placeholder="Task..."><button id="addToDo"><i class="far fa-plus"></i></button></div></form><div class="to-dos" id="toDoContainer"></div></div>'
  div.insertAdjacentHTML(
    "afterbegin",
    '<h1 class="header1"><span class="hTxt">TO DO LIST</span><span class="list"><i class="fal fa-clipboard-list-check"></i></span></h1><div class="container"><form name="task" action="#" method="POST" id="form1" class="form1"><div class="frstcont"><input type="text" id="inputF" placeholder="Task..."><button id="addToDo"><i class="far fa-plus"></i></button></div></form><div class="to-dos" id="toDoContainer"></div></div>'
  );
*/

  /* ----------------- dark mode styleing with js and checkbox ---------------- */

  const checkbox = document.querySelector(".checkbox");

  checkbox.addEventListener("click", () => {
    if ((checkbox.checked = true)) {
      spanhT.classList.toggle("txtsh");
      spanhT.classList.toggle("hTxt");

      spanlI.classList.toggle("txtsh");

      form_1.classList.toggle("form1");
      form_1.classList.toggle("frmsh");

      // postData.classList.toggle("txtsh");
    }
  });

  /* --------------------------- input to edit title -------------------------- */
  let T2input = document.createElement("input");
  T2input.setAttribute("type", "text");
  T2input.classList.add("hideEdit");
  T2input.disabled = true;
  h1.appendChild(T2input);
  T2input.setAttribute("value", hTxt.textContent);

  /* --------------------------- click to edit title -------------------------- */

  spanlI.addEventListener("click", () => {
    spanhT.textContent = T2input.value;
    T2input.classList.toggle("Tinput");
    T2input.classList.toggle("hideEdit");

    if (T2input.classList.contains("Tinput")) {
      T2input.disabled = false;
      spanhT.style.opacity = "0";
    } else {
      T2input.disabled = true;
      spanhT.style.opacity = "1";
      T2input.opacity = "none";
    }
  });
});
