class Mensagem{

	//Podemos definir uma mensagem padrão no metodo construtor
	constructor(texto=''){

		this._texto = texto;
	}

	get texto(){
		return this._texto;
	}

	set texto(texto){
		this._texto = texto;
	}
}

