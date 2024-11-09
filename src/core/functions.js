import { doneList, listTemplate, totalList } from "./selectors.js";

export const createListUi = (text) => {
  const list = listTemplate.content.cloneNode(true);
  const listText = list.querySelector(".list-text");
  listText.innerText = text;

  return list;
};

export const countListTotal = () => {
  return document.querySelectorAll(".list").length;
};

export const countDoneList = () => {
  return document.querySelectorAll(".list .list-checkbox:checked").length;
};

export const updateCounter = () => {
  totalList.innerText = countListTotal();
  doneList.innerText = countDoneList();
};
