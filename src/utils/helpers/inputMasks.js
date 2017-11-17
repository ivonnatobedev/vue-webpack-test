export function phone(val) {
  //var thenum = thestring.replace( /^\D+/g, '');
  const value = val.split('-').join('').replace(/^\D+/g, '');
  if (value.length < 4) {
    return value;
  } else if (value.length < 7) {
    const test = `${value.substring(0, 3)}-${value.substring(3, 6)}`;
    return test;
  } else if (value.length < 9) {
    return `${value.substring(0, 3)}-${value.substring(3, 6)}-${value.substring(6, 8)}`;
  } else {
    return `${value.substring(0, 3)}-${value.substring(3, 6)}-${value.substring(6, 8)}`;
  }
}
