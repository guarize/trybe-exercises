let linhaRainha = 3;
let colunaRainha = 4;

let linhaPeca = 8;
let colunaPeca = 7;

let ataqueBemSucedido = false; 

if (linhaPeca === linhaRainha || colunaPeca === colunaRainha) {
  ataqueBemSucedido = true;
} else if (Math.abs(linhaPeca - linhaRainha) == Math.abs(colunaPeca - colunaRainha)) {
  ataqueBemSucedido = true;
} else {
  ataqueBemSucedido = false;
}

console.log(ataqueBemSucedido);