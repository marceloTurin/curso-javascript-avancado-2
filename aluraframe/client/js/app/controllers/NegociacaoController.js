class NegociacaoController {


	//Criação do contrutor onde é criado o atributo de instancia com o this
	constructor(){
		//Criação da variavel $ que liga o querySelector ao document
		let $ = document.querySelector.bind(document);

		//Selecão dos input do formulário
		this._inputData = $("#data");
		this._inputQuantidade = $("#quantidade");
		this._inputValor = $("#valor");
		this._listaNegociacoes = new ListaNegociacoes(function(model){
			this._negociacoesView.update(this._listaNegociacoes);
		});

		//Seleciona a div onde será criado o model da view
		this._negociacoesView = new NegociacoesView($("#negociacoesView"));

		//Atualiza a div conforme a quantidade de negociações na lista
		this._negociacoesView.update(this._listaNegociacoes);

		this._mensagem = new Mensagem();
		this._mensagemView = new MensagemView($('#mensagemView'))
		this._mensagemView.update(this._mensagem);
	}

	apaga(){
		this._listaNegociacoes.esvazia();
		this._mensagem.texto = 'Negociações apagada com sucesso';
		this._mensagemView.update(this._mensagem);
	}

	//Pega as informações do formulario e cria uma negociação da classe Negociacao
	_criaNegociacao(){
		return new Negociacao(
			DateHelper.textoParaData(this._inputData.value),
			this._inputQuantidade.value,
			this._inputValor.value
			);

	}


	//Limpa o formulário depois de inserir
	_limpaFormulario(){
		this._inputData.value = '';
		this._inputValor.value = 0.0;
		this._inputQuantidade.value = 1;
		this._inputData.focus();
	}

	adiciona(event){
		event.preventDefault();
		
		//Adiciona as negociacoes na Lista de Negociações da Classe ListaNegociacoes
		this._listaNegociacoes.adicionaLista(this._criaNegociacao());


		this._mensagem.texto = 'Negociação adicionada com sucesso';
		this._mensagemView.update(this._mensagem);

		//Limpa o formulário
		this._limpaFormulario();
		//console.log(this._listaNegociacoes.negociacoes);
	}

	

}