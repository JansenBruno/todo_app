let btnEdita = document.querySelectorAll(".edita");

function atualizaTarefa(event) {
    

    btnEdita.forEach((btn) => {

        btn.addEventListener('click', () => {

            const form = document.querySelector('#Uptarefa');
            let card = btn.parentNode;
            let id = `${event.target.parentNode.dataset.idTarefa}`
            console.log(`clicou no ${id}`);
            let titulo = card.childNodes[0].nextSibling.innerText;
            let descricao = card.childNodes[2].nextSibling.innerText;
            let status = card.childNodes[4].nextSibling.innerText;

            form[1].value = id;
            form[2].value = titulo;
            form[3].value = descricao;
            form[4].value = status;
            form.action = `/tarefas/${id}`;
        })
    })
};