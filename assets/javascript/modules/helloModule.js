const helloModule = {
  initialize() {
    const status = document.querySelector('.js-status');
    status.innerHTML = '👌 Javascript available';
  },
};

export default helloModule;
