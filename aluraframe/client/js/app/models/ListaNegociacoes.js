class ListaNegociacoes{

	constructor() {
		this._negociacoes = [];
	}

	adicionaLista(negociacao){
		this._negociacoes.push(negociacao);
	}

	get negociacoes(){

		//Retorna uma cópia da lista original para que ninguém possa modificar a lista original
		return [].concat(this._negociacoes);
	}

	esvazia(){
		this._negociacoes = [];
	}
}

