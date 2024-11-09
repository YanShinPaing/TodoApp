import Swal from "sweetalert2";
import { createListUi, updateCounter } from "./functions.js";
import { listGroup, textInput } from "./selectors.js";

export const addList = () => {
  listGroup.append(createListUi(textInput.value));
  textInput.value = null;
  updateCounter();
};

export const doneList = (event) => {
  const listText = event.target.nextElementSibling;
  listText.classList.toggle("line-through");
  updateCounter();
};

// export const deleteList = (event) => {
//   const list = event.target.closest(".list");
//   if (confirm("Are u sure to delete ?")) {
//     list.classList.remove("animate__fadeInDown");
//     list.classList.add("animate__hinge");
//     list.addEventListener("animationend", () => {
//       list.remove();
//       updateCounter();
//     });
//   }
// };

export const deleteList = (event) => {
  const list = event.target.closest(".list");

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#FCDF78",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      list.classList.remove("animate__fadeInDown");
      list.classList.add("animate__fadeOutDown");
      list.addEventListener("animationend", () => {
        list.remove();
        updateCounter();
      });
    }
  });
};

const editList = (event) => {
  const list = event.target.closest(".list");
  const listText = list.querySelector(".list-text");
  const input = document.createElement("input");
  input.className = "border border-secondary text-secondary px-2 focus-visible:outline-none";
  listText.after(input);
  input.value = listText.innerText;
  listText.classList.toggle("hidden");
  input.focus();
  input.addEventListener("blur", updateList);
};

const updateList = (event) => {
  //   console.log(event.target.value);
  const currentList = event.target.value;
  const list = event.target.closest(".list");
  const listText = list.querySelector(".list-text");

  listText.innerText = currentList;
  event.target.remove();
  listText.classList.toggle("hidden");
};

export const listGroupHandler = (event) => {
  if (event.target.classList.contains("list-del-btn")) {
    deleteList(event);
  } else if (event.target.classList.contains("list-checkbox")) {
    doneList(event);
  } else if (event.target.classList.contains("list-edit-btn")) {
    editList(event);
  }
};
