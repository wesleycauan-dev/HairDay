import { apiConfig } from "./api-config.js";

export async function schedulesNew({ id, name, when }) {
  try {
    // faz a requesição para enviar os dados do agendamento.
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    });

    alert("Agendamento realizado com sucesso!");
  } catch (error) {
    console.log(error);

    alert("Não foi possível fazer o agendamento");
  }
}
