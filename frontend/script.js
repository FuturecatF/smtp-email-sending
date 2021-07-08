const popup = document.querySelector('.popup');
const form = popup.querySelector('.popup__form');
const btnClose = popup.querySelector('.popup__close');
const btnForm = popup.querySelector('.popup__button');

const api = new Api({
	baseUrl: 'http://localhost:3001',
	headers: {
		'Content-type': 'application/json',
	},
});
function getProductName(title) {
	form.querySelector('#title').value = title.trim();
}

function requestLoading(btn, isLoading, text) {
	if (isLoading) {
		btn.setAttribute('disabled', true);
		btn.textContent = text;
	} else {
		btn.removeAttribute('disabled', false);
		btn.textContent = text;
	}
}

function sendEmail(evt) {
	evt.preventDefault();
	requestLoading(btnForm, true, 'Отправка...');
	const data = {
		name: form.querySelector('#name').value,
		phone: form.querySelector('#phone').value,
		email: form.querySelector('#email').value,
		title: form.querySelector('#title').value,
	};

	api
		.postFormData(data)
		.then((res) => console.log(res))
		.catch((err) => {
			console.log(err);
		})
		.then(() => closePopup())
		.finally(() => requestLoading(btnForm, false, 'Заказать'))
}

function closePopup() {
	popup.classList.remove('popup_opened');
	btnClose.removeEventListener('click', closePopup);
	form.removeEventListener('submit', sendEmail);
	form.reset();
}

function openPopup(e) {
	const element = e.target.closest('.element');
	const title = element.querySelector('.element__title').textContent;
	getProductName(title);
	btnClose.addEventListener('click', closePopup);
	form.addEventListener('submit', sendEmail);
	popup.classList.add('popup_opened');
}

const btnBuy = Array.from(document.querySelectorAll('.element__button'));
btnBuy.forEach((item) => {
	item.addEventListener('click', (e) => openPopup(e));
});
