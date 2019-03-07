class NegociacaoController {


	//Criação do contrutor onde é criado o atributo de instancia com o this
	constructor(){
		//Criação da variavel $ que liga o querySelector ao document
		let $ = document.querySelector.bind(document);

		//Selecão dos input do formulário
		this._inputData = $("#data");
		this._inputQuantidade = $("#quantidade");
		this._inputValor = $("#valor");
		
		this._listaNegociacoes = new Bind(
			new ListaNegociacoes(),
			new NegociacoesView($("#negociacoesView")),
			'adicionaLista','esvazia'
		);	
		this._mensagem = new Bind(
			new Mensagem(),
			new MensagemView($('#mensagemView')),
			'texto'
		);	
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

	importaNegociacoes(){

		let xhr = new XMLHttpRequest();
		xhr.open('GET','negociacoes/semana');

		xhr.onreadystatechange = ()=>{
			if(xhr.readyState == 4){
				if(xhr.status == 200){
					JSON.parse(xhr.responseText)
					.map(objeto =>new Negociacao(new Date(objeto.data),objeto.quantidade,objeto.valor))
					.forEach(negociacao => this._listaNegociacoes.adicionaLista(negociacao))

					this._mensagem.texto = 'Negociações importadas com sucesso';
				}
				else{
					console.log(xhr.responseText);
					this._mensagem.texto = 'Não foi possivel obter negociações da semana';
				}
			}
		}

		xhr.send();


	}

	

}