document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('form').onsubmit= function(){
      var myHeaders = new Headers();
myHeaders.append("apikey", "yxDnvw79zW6qXmE4x9eLRgCAf4SshtIM");

var requestOptions = {
method: 'GET',
redirect: 'follow',
headers: myHeaders
};


fetch("https://api.apilayer.com/exchangerates_data/latest?", requestOptions)
.then(response => response.json())
.then(data => {
const base = document.getElementById('base').value;//.toUpperCase();
const currency = document.getElementById('target').value;//.toUpperCase();
const pre = data.rates[base];
const rate = data.rates[currency];
const amnt = document.getElementById('amount').value;
const conversion = (amnt / pre ) * rate;
const conv = conversion.toFixed(4);
if(rate !== undefined){
document.getElementById('display').innerHTML = amnt +' '+ base + ' is equal to '+ conv + ' '+ currency;
}else{
document.getElementById('display').innerHTML = 'Invalid Currency!';
}
})
.catch(error => console.log('error', error));
return false;


    }
})