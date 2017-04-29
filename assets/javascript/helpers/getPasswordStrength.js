let characters = 0;
let capitalletters = 0;
let loweletters = 0;
let number = 0;
let special = 0;

const upperCase = new RegExp('[A-Z]');
const lowerCase = new RegExp('[a-z]');
const numbers = new RegExp('[0-9]');
const specialchars = new RegExp('([!,%,&,@,#,$,^,*,?,_,~])');

const MIN_CHARACTERS = 6;
const DEFAULT_RETURN = -1;
const MISMATCH_PENALTY = -1;

export default (thisval) => {
  characters = (thisval.length > MIN_CHARACTERS) ? 1 : MISMATCH_PENALTY;
  capitalletters = (thisval.match(upperCase)) ? 1 : 0;
  loweletters = (thisval.match(lowerCase)) ? 1 : 0;
  number = (thisval.match(numbers)) ? 1 : 0;
  special = (thisval.match(specialchars)) ? 1 : 0;

  const total = characters + capitalletters + loweletters + number + special;

  if (!thisval.length) {
    return DEFAULT_RETURN;
  }

  return total;
};
