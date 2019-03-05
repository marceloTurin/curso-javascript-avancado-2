class ProxyFactory{

    static create(objeto,props,acao){
        return new Proxy(objeto,{
            //target objeto original,prop propriedade acessada,value o valor colacado, receiver referencia do proxy
           get (target, prop, receiver){
                //Verifica a propriedade no nosso array e se essa propriedade é uma função
                if(props.includes(prop) && typeof(target[prop]) == typeof(Function)){

                    //Troca a chamada da função por isso aqui 
                    return function(){
						console.log(`a propriedade ${prop} foi interceptada`);
						Reflect.apply(target[prop],target,arguments);
						return acao(target);
                    }
                }
                return Reflect.get(target,prop,receiver)
           }
        })

    }
}