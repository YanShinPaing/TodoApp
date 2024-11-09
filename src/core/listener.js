import { addList, listGroupHandler } from "./handlers.js";
import { addBtn, listGroup, textInput } from "./selectors.js";

const listener = () => {
  addBtn.addEventListener("click", addList);
  textInput.addEventListener("keyup", (event) => {
    event.key === "Enter" && addList();
  });
  listGroup.addEventListener("click", listGroupHandler);
};

export default listener;
