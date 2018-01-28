const MAX_TIME = 50;

window.requestIdleCallback = window.requestIdleCallback || ((cb) => {
  const start = Date.now();

  return setTimeout(() => {
    cb({
      didTimeout: false,
      timeRemaining: () => (Math.max(0, MAX_TIME - (Date.now() - start))),
    });
  }, 1);
});

window.cancelIdleCallback = window.cancelIdleCallback || ((id) => {
  clearTimeout(id);
});
