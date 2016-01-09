function privateMethod () {
  return 'Initialize helloModule';
}

const helloModule = {
  initialize () {
    console.log(privateMethod());

    const status = document.querySelector('.js-status');
    status.innerHTML = '👌 Javascript available';
  }
};

export default helloModule;
