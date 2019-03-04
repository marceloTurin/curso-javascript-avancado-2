class View {
    
    //Classe pai que recebe o elemento das classes filhas
    constructor(elemento){
        this._elemento = elemento;
    }

    template(){

        throw new Error('O método template deve ser implementado');
    }

    update(model){
		this._elemento.innerHTML = this.template(model);
	}
}