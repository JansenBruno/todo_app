function deletaTarefa(event) {

  const req_id = event.target.parentNode.dataset.idTarefa;

  console.log(`Tarefa ${req_id} foi apagada do banco de dados`)

  fetch(`http://localhost:3000/tarefas/${req_id}`, {
    method: "DELETE",
    headers: {
      'Accept': ' aplication/json',
      'Contente-Type': 'aplication/json'}
  })
    .then(() => { event.target.parentNode.remove() })
    .catch(err => console.log(err));
}