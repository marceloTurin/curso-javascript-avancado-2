class ListaNegociacoes{

	constructor() {
		this._negociacoes = [];
		
	}

	adicionaLista(negociacao){
		
		//this._negociacoes = [].concat(this._negociacoes, negociacao)
		this._negociacoes.push(negociacao);
		
	}

	get negociacoes(){

		//Retorna uma cópia da lista original para que ninguém possa modificar a lista original
		return [].concat(this._negociacoes);
	}

	esvazia(){
		this._negociacoes = [];
	}

	get volumeTotal() {
		return this._negociacoes.reduce((total, n) => total + n.volume, 0.0);
	 }
}

