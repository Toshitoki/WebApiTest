var request = new XMLHttpRequest();
 
request.open('GET', 'https://api.excelapi.org/wikipedia/summary2?word=あ', true);
request.responseType = 'json';

request.onload = function () {
  var data = this.response;
  console.log(data);
};

request.send();