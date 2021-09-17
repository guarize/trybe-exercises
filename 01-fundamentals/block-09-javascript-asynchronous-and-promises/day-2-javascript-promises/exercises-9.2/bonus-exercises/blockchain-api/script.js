const btcSpan = document.getElementById('btc-value');

const fetchBtc = () => {
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(obj => btcSpan.innerText = obj.USD.buy)
}

setInterval(fetchBtc, 30000);

fetchBtc();
