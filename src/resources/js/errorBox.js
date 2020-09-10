const hideError = () => {
  const errorBox = document.querySelector('div.error-box');
  const errorBoxClassList = errorBox.classList;

  const isHidden = errorBoxClassList.contains('hidden');

  if (!isHidden) errorBoxClassList.add('hidden');
};

const displayError = (errorMessage) => {
  const errorBox = document.querySelector('div.error-box');
  const errorTextElement = errorBox.querySelector('small');

  errorTextElement.innerText = errorMessage;
  errorBox.classList.remove('hidden');

  setTimeout(hideError, 3000);
};

this.displayError = displayError;
this.hideError = hideError;
