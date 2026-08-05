import dayjs from "dayjs";

import { openingHours } from "../../utils/opening-hours.js";

export function hoursLoad({ date, dailySchedules }) {
  //Limpa os horários
  hours.innerHTML = "";

  //Obtem os horários ocupados.
  const unavailableHours = dailySchedules.map((schedule) =>
    dayjs(schedule.when).format("HH:mm"),
  );

  const opening = openingHours.map((hour) => {
    //Recupera somente a hora
    const [scheduleHour] = hour.split(":");

    //Adiciona a hora na data e verifica se está no passado
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

    const available = !unavailableHours.includes(hour) && !isHourPast;
    return {
      hour,
      available,
    };
  });

  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li");
    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");

    li.textContent = hour;
    hours.append(li);
  });
}
