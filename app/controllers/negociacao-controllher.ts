import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  private inputData:HTMLInputElement;
  private inputQuantidade:HTMLInputElement;
  private inputValor:HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView('#negociacoesView');
  private mensagemView = new MensagemView('#mensagemView');

  constructor(){
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
    this.negociacoesView.update(this.negociacoes);
  }
  adiciona():void{
      const negociacao = this.criaRenegociacao();
      this.negociacoes.adiciona(negociacao);
     this.negociacoesView.update(this.negociacoes);
     this.mensagemView.update('Negociação adiconada com sucesso!');
      this.limparFormulario();
    }

    criaRenegociacao(): Negociacao{
      const exp = /-/g;
      const date = new Date(this.inputData.value.replace(exp, ","));
      const quantidade = parseInt(this.inputQuantidade.value)
      const valor = parseFloat(this.inputValor.value)
     return new Negociacao (date, quantidade, valor)
        
    }

    limparFormulario (): void {
      this.inputValor.value = "";
      this.inputData.value = "";
      this.inputQuantidade.value = "";
      this.inputData.focus();

    }

  }
