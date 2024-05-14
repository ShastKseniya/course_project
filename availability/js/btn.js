var showInfoButton = document.getElementById('showInfoButton');
					var infoContainer = document.getElementById('infoContainer');
					var buttonContainer = document.getElementById('buttonContainer');
				
					showInfoButton.addEventListener('click', function() {
						infoContainer.classList.remove('hidden');
						buttonContainer.classList.add('hidden');
					});


					document.getElementById('scrollButton').addEventListener('click', function() {
						var element = document.getElementById('scrollToElement');
						element.scrollIntoView({ behavior: 'smooth' });
					  });


					  //заказ оформлен


					  const phoneInput = document.querySelector('.form__input1');

					  phoneInput.addEventListener('input', function(e) {
						const input = e.target.value.replace(/\D/g, '').substring(0, 13);
						const formattedInput = input.replace(/(\d{2})(\d{3})(\d{4})/, '+375($1)$2 $3');
						e.target.value = formattedInput;
					  });



					  const form = document.querySelector('.form');
const submitButton = document.querySelector('.form__btn');

submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // Предотвращает отправку формы по умолчанию
  alert('Заказ оформлен');
  form.reset(); // Очистка формы
});

					  
