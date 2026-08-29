import { schedulesDay } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel.js";

const periods = document.querySelectorAll(".period");

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      const item = event.target.closest("li");

      //Pega o ID do agendamento para remover
      const { id } = item.dataset;

      //Confirma que o ID foi selecionado
      if (id) {
        //Confirma se o usuário deseja cancelar o agendamento
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar este agendamento?",
        );

        if (isConfirm) {
          //Faz a requisição na API para cancelar.
          await scheduleCancel({ id });

          //Recarrega os agendamentos.
          schedulesDay();
        }
      }
    }
  });
});
