//Criação da Classe Negociacao

// atributos com _ não pode ser aessado fora da classe
class Negociacao {
	//Criação do construtor onde colocamos os atributos da classe
	constructor(data,quantidade,valor){
		this._data = new Date(data.getTime());
		this._quantidade = quantidade;
		this._valor = valor;
		//Congela a variavel instanciada para que não seja alterada os valores dos atributos
		Object.freeze(this);
	}

	//get é um metodo de leitura

	//Metodo que calcula o volume
	get volume(){
		return this._quantidade * this._valor;
	}

	//Retorna a data
	get data(){
		//Cria um novo objeto de data evitando que alguem altere a data original
		return new Date(this._data.getTime());  //getTime retorna um numero long com a representação da data
	}

	//Retorna a quantidade
	get quantidade(){
		return this._quantidade;
	}

	//Retorna o valor
	get valor(){
		return this._valor;
	}
}