import dayjs from "dayjs";

import { schedulesNew } from "../../services/schedules-new.js";
import { schedulesDay } from "../schedules/load.js";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD");

//Selecionando a data mínima para o input date, que é a data atual
selectedDate.min = dayjs(new Date()).format("YYYY-MM-DD");

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    // Recuperando o nome do cliente
    const name = clientName.value.trim();
    if (!name) {
      return alert("Por favor, insira o nome do cliente");
    }

    // Recupera o horário selecionado
    const hourSelected = document.querySelector(".hour-selected");

    // Recupera o horário selecionado
    if (!hourSelected) {
      return alert("Por favor, selecione um horário");
    }

    const [hour] = hourSelected.innerText.split(":");

    // Insire a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour");
    console.log(when);

    const id = new Date().getTime();

    //Faz o agendamento.
    await schedulesNew({
      id,
      name,
      when,
    });

    //Recarrega o agendamento.
    await schedulesDay();

    //Limpa o input do nome do cliente
    clientName.value = "";
  } catch (error) {
    alert("Não foi possível realizar o agendamento");
    console.log(error);
  }
};
