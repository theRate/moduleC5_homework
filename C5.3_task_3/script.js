function useRequest(url, callback) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);

	xhr.onload = function() {
		if (xhr.status != 200) {
			console.log('Статус ответа: ', xhr.status)
		} else {
			const result = JSON.parse(xhr.response);
			if (callback) {
				callback(result);
			}
		}
	}

	xhr.onerror = function() {
		console.log('Ошибка! ', xhr.status);
	}

	xhr.send();
}

const value = document.querySelector('input').value;
console.log(value);
const btn = document.querySelector('button');
const resultNode = document.querySelector('.result')

const url = 'https://picsum.photos/v2/list?limit=' + value;

function displayResult(apiData) {
	let cards = '';

	apiData.forEach(item => {
		const cardBlock = `
			<div class='card'>
				<img src="${item.download_url}">
			</div>
		`;
		cards += cardBlock;
	})
	resultNode.innerHTML = cards;
}

btn.addEventListener('click', () => {
	const value = Number(document.querySelector('input').value);

	if (Number.isInteger(value) && value >= 1 && value <= 10) {
		const url = 'https://picsum.photos/v2/list?limit=' + value;
		useRequest(url, displayResult);
	} else {
		console.log('Число вне диапазона от 1 до 10');
		resultNode.innerHTML = `Число вне диапазона от 1 до 10`;
	}
})