letras=["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
metodo=document.value2.querySelector("#met")
mensagem= document.querySelector("#texto")
chave= document.querySelector("#chav")
x= (chave)
botao=document.querySelector("#btn")
botao.onclick= function(){

crip=[]
for (i=0;i<mensagem.length;i++){
    if(mensagem[i]!=' '){
        for(j=0;j<letras.length;j++){
            if(mensagem[i]== letras[j]){
                crip[i]=letras[(j+x)%letras.length]
                break
            }
        }
    }


    else{
    crip[i]= ' '
    }
}

}
document.form1.resultado.value=crip

