import {} from "../../modules/page-load.js";
import { schedulesDay } from "../schedules/load.js";

const selectedDate = document.getElementById("date");

// Recarrega o input de data quando o horario mudar

selectedDate.onchange = () => schedulesDay();
