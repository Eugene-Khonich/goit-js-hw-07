const form = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault();
  const formData = {
    email: form.elements.email.value.trim(),
    password: form.elements.password.value.trim(),
  };
  if (formData.email === '' || formData.password === '') {
    return alert('Всі поля мають бути заповнені');
  }
  form.reset();
  console.log(formData);
};

form.addEventListener('submit', onFormSubmit);
