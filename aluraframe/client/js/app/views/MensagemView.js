class MensagemView extends View {

    
    constructor(elemento){
       //O comando super manda o atributo alemento para a classe pai 
       super(elemento);
    }
    
    template(model){
        return model.texto ? `<p class="alert alert-info"> ${model.texto}</p>` : '<p></p>';
    }

}