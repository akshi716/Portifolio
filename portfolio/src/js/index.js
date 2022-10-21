/*
objetivo-quando clicarmos na aba temos que mostra
o conteudo da aba que foi clocada pelo usuario e 
esconder o conteudo da aba anterior
*/

const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {

  aba.addEventListener("click", function () {

    if (aba.classList.contains("selecionado")) {
      return;
    }
    const abaSelecionada = document.querySelector(
      ".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    aba.classList.add("selecionado");

   const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");
     
      const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
     
      const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
      informacaoASerMostrada.classList.add("selecionado")


  });
});