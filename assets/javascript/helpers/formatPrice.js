export default function (num, places = 2, symbol = '&euro; ', thousand = '.', decimal = ',') {
  let number = num;
  const negative = number < 0 ? '-' : '';
  const i = `${parseInt(number = Math.abs(+number || 0).toFixed(places), 10)}`;
  const l = i.length;
  const j = (l > 3) ? l % 3 : 0;

  // eslint-disable-next-line
  return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
}
