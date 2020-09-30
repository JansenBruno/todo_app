let btnEdita = document.querySelectorAll(".editTask");

function atualizaTarefa(event) {
    

    btnEdita.forEach((btn) => {

        btn.addEventListener('click', () => {

            const form = document.querySelector('#Uptarefa');
            let card = btn.parentNode;
            let id = `${event.target.parentNode.dataset.idTarefa}`
            console.log(`clicou no ${id}`);
            let titleTask = card.childNodes[0].nextSibling.innerText;
            let descTask = card.childNodes[2].nextSibling.innerText;
            let statusTask = card.childNodes[4].nextSibling.innerText;

            form[1].value = id;
            form[2].value = titleTask;
            form[3].value = descTask;
            form[4].value = statusTask;
            form.action = `/tarefas/${id}`;
        })
    })
};