document.addEventListener("DOMContentLoaded", function() {
    var questions = document.querySelectorAll(".title__question");

    function toggleContent(element) {
      var content = element.nextElementSibling;
      content.style.display = (content.style.display === "block") ? "none" : "block";
    }

    questions.forEach(function(question) {
      question.addEventListener("click", function() {
        toggleContent(this);
      });
    });
  });



//движение картинок
  const itemImgWrappers = document.querySelectorAll('.why-lease__item-img-wrapper');

  itemImgWrappers.forEach(wrapper => {
      const img = wrapper.querySelector('.why-lease__item-img');
  
      wrapper.addEventListener('mouseenter', () => {
          img.style.transform = 'rotateY(180deg)';
      });
  
      wrapper.addEventListener('mouseleave', () => {
          img.style.transform = 'rotateY(0deg)';
      });
  });



  const questions = document.querySelectorAll('.textcols-item');

questions.forEach(question => {
  question.addEventListener('mouseover', () => {
    question.classList.add('active');
  });

  question.addEventListener('mouseout', () => {
    question.classList.remove('active');
  });
});

//валидация емайла
function validateForm() {
  const emailInput = document.getElementById('email');
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    alert('Пожалуйста, введите корректный email адрес.');
    emailInput.focus();
    return false;
  }
  return true;
}





