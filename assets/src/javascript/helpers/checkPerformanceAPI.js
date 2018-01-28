export function getPerformanceAPI() {
  return (
    window.performance ||
    window.webkitPerformance ||
    window.msPerformance ||
    window.mozPerformance
  );
}

export function getPerformanceSupport() {
  const performance = getPerformanceAPI();

  return (typeof performance !== 'undefined' && typeof performance.timing !== 'undefined');
}
