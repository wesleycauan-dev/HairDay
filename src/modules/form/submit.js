import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new.js";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD");

//Selecionando a data mínima para o input date, que é a data atual
selectedDate.min = dayjs(new Date()).format("YYYY-MM-DD");

form.onsubmit = async (event) => {
  // Previne o comportamento padrão de recarregar a pagina
  event.preventDefault();

  try {
    // Recuperando o nome do cliente
    const name = clientName.value.trim();

    if (!name) {
      return alert("Informe o nome do cliente!");
    }

    // Recuperando o horario selecionado

    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      return alert("Selecione a hora.");
    }

    // Recupera somente a hora
    const [hour] = hourSelected.innerText.split(":");

    //Insere a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour");

    // Gera um id
    const id = new Date().getTime();

    await scheduleNew({ name, id, when });
  } catch (error) {
    alert("Não foi possível realizar o agendamento.");
    console.log(error);
  }
};
