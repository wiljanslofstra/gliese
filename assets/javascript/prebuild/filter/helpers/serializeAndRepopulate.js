/**
 * Serializes and repopulates form inputs
 * Stolen but modified from: http://stackoverflow.com/a/1490431/1653079
 * @param  {Node}   ref  Element to search for input elements in
 * @param  {Object} data If included, will populate all child controls.
 * @return {Object}      Object with values, or empty if repopulating
 */
export default (ref, data) => {
    let els = ref.querySelectorAll('input, select, textarea');
    els = Array.prototype.slice.call(els);

    if (typeof data !== 'object') {
        // return all data
        const responseData = {};

        els.forEach((el) => {
            if (el.name && !el.disabled && (el.checked
                || /select|textarea/i.test(el.nodeName)
                || /text|hidden|password/i.test(el.type))) {
                if (el.value !== '') {
                    responseData[el.name] = el.value;
                }
            }
        });

        return responseData;
    } else {
        els.forEach((el) => {
            if (el.name && data[el.name]) {
                if (el.type === 'checkbox' || el.type === 'radio') {
                    el.checked = (data[el.name] === $(el).val());
                } else {
                    el.value = data[el.name];
                }
            }
        });

        return {};
    }
};
