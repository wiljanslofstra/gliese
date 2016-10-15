export default (toWrap, wrapper) => {
  const wrap = wrapper || document.createElement('div');

  if (toWrap.nextSibling) {
    toWrap.parentNode.insertBefore(wrap, toWrap.nextSibling);
  } else {
    toWrap.parentNode.appendChild(wrap);
  }

  return wrap.appendChild(toWrap);
};
