import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";

const selectedDate = document.getElementById("date");

export async function schedulesDay() {
  // obtem a data do input
  const date = selectedDate.value;

  //busca na api os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date });
  console.log(dailySchedules);

  // renderiza as horas disponiveis
  hoursLoad({ date });
}
