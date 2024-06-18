const apiBtc =  'https://www.mercadobitcoin.net/api/BTC/ticker/';
const apiLtc =  'https://www.mercadobitcoin.net/api/LTC/ticker/';
const apiEth =  'https://www.mercadobitcoin.net/api/ETH/ticker/';
const apiDoge =  'https://www.mercadobitcoin.net/api/DOGE/ticker/';

async function fetchData(){
    try{
        var responseBtc = await fetch(apiBtc);
        var responseLtc = await fetch(apiLtc);
        var responseEth = await fetch(apiEth);
        var responseDoge = await fetch(apiDoge);
        if(!responseBtc.ok || !responseDoge.ok || !responseEth.ok || !responseLtc.ok){
            throw new Error('Erro:${response.statusText}');
        }

        const data = await responseBtc.json();
        var valor = data.ticker.sell;
        var valorFormatado = "R$" + parseFloat(valor).toFixed(2);
        document.getElementById('bit').innerHTML = valorFormatado;


        const data2 = await responseLtc.json();
        var valorLtc = data2.ticker.sell;
        var valorFormatado2 = "R$" + parseFloat(valorLtc).toFixed(2);
        document.getElementById('lite').innerHTML = valorFormatado2;

        const data3 = await responseEth.json();
        var valorEth = data3.ticker.sell;
        var valorFormatado3 = "R$" + parseFloat(valorEth).toFixed(2);
        document.getElementById('th').innerHTML = valorFormatado3;

        const data4 = await responseDoge.json();
        var valorDoge = data4.ticker.sell;
        var valorFormatado4 = "R$" + parseFloat(valorDoge).toFixed(2);
        document.getElementById('doge').innerHTML = valorFormatado4;

    }catch(error){
        console.error("Erro JSON",error);
    }
}
window.addEventListener('load', fetchData);
setInterval(fetchData, 5000);