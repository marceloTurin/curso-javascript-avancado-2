class ProxyFactory{

    static create(objeto,props,acao){
        return new Proxy(objeto,{
            //target objeto original,prop propriedade acessada,value o valor colacado, receiver referencia do proxy
           get (target, prop, receiver){
                //Verifica a propriedade no nosso array e se essa propriedade é uma função
                if(props.includes(prop) && ProxyFactory._ehFuncao(target[prop]) ){

                    //Troca a chamada da função por isso aqui 
                    return function(){
						console.log(`a propriedade ${prop} foi interceptada`);
						let retorno = Reflect.apply(target[prop],target,arguments);
                        acao(target);
                        return retorno;
                    }
                }
                return Reflect.get(target,prop,receiver)
           },

           set(target, prop, value, receiver) {

                let retorno = Reflect.set(target, prop, value, receiver);
                if(props.includes(prop)) acao(target);    // só executa acao(target) se for uma propriedade monitorada
                return retorno; 
            }
        })

    }

    static _ehFuncao(func){
        return typeof(func) == typeof(Function)
    }
}