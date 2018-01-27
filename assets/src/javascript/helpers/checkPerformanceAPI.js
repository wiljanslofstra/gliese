export default () => {
  const performance = (
    window.performance ||
    window.webkitPerformance ||
    window.msPerformance ||
    window.mozPerformance
  );

  return (typeof performance !== 'undefined' && typeof performance.timing !== 'undefined');
};
