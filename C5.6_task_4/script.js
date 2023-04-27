function useRequest(url) {
	return fetch(url)
		.then(response => response.blob())
		.then(blob => URL.createObjectURL(blob))
		.catch(() => {console.log('Ошибка запроса!')})
}

const btn = document.querySelector('button');
const resultNode = document.querySelector('.result');

function checkValidity(num) {
	if (Number.isInteger(num) && num >= 100 && num <= 300) {
		return true;
	}
}

btn.addEventListener('click', async () => {
	const width = Number(document.querySelectorAll('input')[0].value);
	const hight = Number(document.querySelectorAll('input')[1].value);

	if (checkValidity(width) && checkValidity(hight)) {
		const url = `https://picsum.photos/${width}/${hight}`;
		const res_url = await useRequest(url);
		resultNode.innerHTML = `<img class='card' src='${res_url}'>`;
	} else {
		console.log('Одно из чисел вне диапазона от 100 до 300');
		resultNode.innerHTML = `Одно из чисел вне диапазона от 100 до 300`;
	}
})