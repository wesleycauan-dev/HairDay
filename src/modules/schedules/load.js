import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { schedulesShow } from "../schedules/show.js";
import { hoursLoad } from "../form/hours-load.js";

const selectedDate = document.getElementById("date");

export async function schedulesDay() {
  //   Obtem a data do input
  const date = selectedDate.value;

  // Buscar na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date });
  //   Exibe os agendamentos
  schedulesShow({ dailySchedules });
}
schedulesShow({ dailySchedules });

//   Renderiza os horários disponíveis
hoursLoad({ date, dailySchedules });
