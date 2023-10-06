function handleResponse(data) {
  console.log(data);
}

var script = document.createElement('script');
script.src = 'https://api.excelapi.org/wikipedia/summary2?word=あ';
document.body.appendChild(script);