function useRequest(url) {
	return fetch(url)
		.then(response => response.json())
		.catch(() => {console.log('Ошибка запроса!')})
}

function displayContent(apiData){
    let cards = '';

    apiData.forEach(item => {
        const cardBlock = `
      <div class="card">
        <img src="${item.download_url}" alt="image">
      </div>`;
        cards = cards + cardBlock;
    });

    resultNode.innerHTML = cards;
}

function checkValidity(num) {
	if (Number.isInteger(num) && num >= 1 && num <= 10) {
		return true;
	}
}

const btn = document.querySelector('button');
const resultNode = document.querySelector('.result');

if (localStorage.resJSON) {
	let json = JSON.parse(localStorage.getItem('resJSON'));
	displayContent(json);
}

btn.addEventListener('click', async () => {
	const page = Number(document.querySelectorAll('input')[0].value);
	const limit = Number(document.querySelectorAll('input')[1].value);
	localStorage.clear();

	if (checkValidity(page) && checkValidity(limit)) {
		const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;
		const json = await useRequest(url);
		localStorage.setItem('resJSON', JSON.stringify(json));
		displayContent(json);
	} else if (checkValidity(page) && checkValidity(limit) != true) {
		console.log('Лимит вне диапазона от 1 до 10');
		resultNode.innerHTML = `<p>Лимит вне диапазона от 1 до 10</p>`;
	} else if (checkValidity(page) != true && checkValidity(limit)) {
		console.log('Номер страницы вне диапазона от 1 до 10');
		resultNode.innerHTML = `<p>Номер страницы вне диапазона от 1 до 10</p>`;
	} else {
		console.log('Номер страницы и лимит вне диапазона от 1 до 10');
		resultNode.innerHTML = `<p>Номер страницы и лимит вне диапазона от 1 до 10</p>`;
	}
})