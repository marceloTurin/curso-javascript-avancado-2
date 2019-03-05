class NegociacaoController {


	//Criação do contrutor onde é criado o atributo de instancia com o this
	constructor(){
		//Criação da variavel $ que liga o querySelector ao document
		let $ = document.querySelector.bind(document);

		//Selecão dos input do formulário
		this._inputData = $("#data");
		this._inputQuantidade = $("#quantidade");
		this._inputValor = $("#valor");
		
		//Seleciona a div onde será criado o model da view
		this._negociacoesView = new NegociacoesView($("#negociacoesView"));
		//Cria a proxy da lista de negociacao chamando a view quando for chamado o adicionaLista ou o esvazia
		this._listaNegociacoes = new Bind(
			new ListaNegociacoes(),
			this._negociacoesView,
			['adicionaLista','esvazia']);	
		
		this._mensagemView = new MensagemView($('#mensagemView'));
		this._mensagem = new Bind(
			new Mensagem(),
			this._mensagemView,
			['texto']);	
	}

	apaga(){
		this._listaNegociacoes.esvazia();
		this._mensagem.texto = 'Negociações apagada com sucesso';
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

		//Limpa o formulário
		this._limpaFormulario();
		//console.log(this._listaNegociacoes.negociacoes);
	}

	

}