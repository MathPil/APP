let metas = {
  value:false,
  meta:'Ler um livro'
}


function checarMeta(meta){
  let valor = metas.value;
  if(valor){
    return console.log('Leu o livro');
  }else{
    return console.log('Não leu o livro')
  }
}
checarMeta();