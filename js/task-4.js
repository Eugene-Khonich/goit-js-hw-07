const form = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault();
  const formData = {
    email: form.elements.email.value.trim(),
    password: form.elements.password.value.trim(),
  };
  form.reset();
  console.log(formData);
};

form.addEventListener('submit', onFormSubmit);
