/* useful function */
function getCookie(name) {
  let value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return value? value[2] : null;
}
function setCookie(name, value, exp) {
  let date = new Date();
  date.setTime(date.getTime() + exp*24*60*60*1000);
  document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
}
function tempObj(obj) {
  return JSON.parse(JSON.stringify(obj));
}