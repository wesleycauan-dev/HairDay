import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function scheduleFetchByDay({ date }) {
  try {
    //Fazendo a requisição
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    // Converte para JSON
    const data = await response.json();

    // Filtrando os agendamentos pelo dia selecionado
    const scheduleDay = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "day"),
    );
    return scheduleDay;
  } catch (error) {
    console.log(error);
    alert("Erro ao buscar agendamentos do dia. Tente novamente mais tarde.");
  }
}
