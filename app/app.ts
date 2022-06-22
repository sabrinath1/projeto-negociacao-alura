import { Negociacao } from './models/negociacao.js'
import { NegociacaoController } from './controllers/negociacao-controllher.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
  event.preventDefault();
  controller.adiciona();
})
