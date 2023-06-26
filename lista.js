function addClient() {
  const name = document.getElementById("name").value;
  const time = document.getElementById("time").value;
  const number = document.getElementById("number").value;
  const text = document.getElementById("text").value;

  const confirmation = confirm(
    "Nome do cliente: " +
      name +
      "\nDia e horário de chegada:" +
      time +
      "\nNúmero de identificação: " +
      number +
      "\nResumo do consumo: " +
      text
  );

  if (confirmation) {
    const clientList = document.getElementById("client-list");
    const resumeByClient = document.createElement("li");
    resumeByClient.id = "client-" + number;
    resumeByClient.innerText =
      "Nome do cliente: " +
      name +
      "\nDia e horário: " +
      time +
      "\nNúmero de identificação: " +
      number +
      "\nConsumo:" +
      text;
    clientList.appendChild(resumeByClient);

    document.getElementById("name").value = "";
    document.getElementById("time").value = "";
    document.getElementById("number").value = "";
    document.getElementById("text").value = "";
  }
}
