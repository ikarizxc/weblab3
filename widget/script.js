const input = document.getElementsByClassName('vacancy-input')[0];

input.addEventListener('input', ()=>searchVacancy());

async function searchVacancy(page = 1) {

    const vacancy = await fetch(`https://api.hh.ru/vacancies?text=${input.value}&per_page=100&page=${page}`)
                         .then(res => res.json()).then(res => res.items);

    renderVacancy(vacancy)
}

function renderVacancy(vacancy) {

    const vacancyContainer = document.getElementsByClassName('vacancies')[0];
    vacancyContainer.innerHTML = '';

    vacancy.forEach(element => {
        const div = document.createElement('div');

        div.className = 'vacancy';
        div.innerHTML =
        `
            <a href="${element.alternate_url}" target="_blank">
                <b>${element.name}</b>
            </a>
            <p class="area">${element.area.name}</p>
            <p class="experience">Опыт: ${element.experience.name}</p>
        `
        
        vacancyContainer.append(div);
    });
}