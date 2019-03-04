class ListaNegociacoes{

	constructor(contexto,armadilha) {
		this._negociacoes = [];
		this._armadilha = armadilha;
		this._contexto = contexto;
	}

	adicionaLista(negociacao){
		this._negociacoes.push(negociacao);
		//this._armadila(this);
		Reflect.apply(this._armadilha,this._contexto,[this]);
	}

	get negociacoes(){

		//Retorna uma cópia da lista original para que ninguém possa modificar a lista original
		return [].concat(this._negociacoes);
	}

	esvazia(){
		this._negociacoes = [];
		//this._armadila(this);
		Reflect.apply(this._armadilha,this._contexto,[this]);
	}
}

