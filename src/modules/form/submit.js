import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD");

//Selecionando a data mínima para o input date, que é a data atual
selectedDate.min = dayjs(new Date()).format("YYYY-MM-DD");

form.onsubmit = async (event) => {
  event.preventDefault();
};
