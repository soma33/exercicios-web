//BLOCO 1 
{
    const banda = "oasis"

    console.log(banda.charAt(3)) //retorna caractere de indice '3'
    
    console.log(banda.charCodeAt(2)) 
    // retorna caractere de indice 2, convertido na tabela unicode/tabela ask
    
    console.log(banda.indexOf("a")) // retorna o indice associado ao caractere

    console.log(banda.substring(0))
    console.log(banda.substring(1))
    console.log(banda.substring(2, 5))
    
    console.log(banda.replace('o', "g"))// substitui um dado por outro.

    console.log("a melhor banda do mundo:", banda, "!!!!!")
    console.log("a melhor banda do mundo: " + banda + "!!!!!" )
    
    console.log("3" + 2)
    
    console.log();
        
}


//BLOCO2

//Template String

{
    let trecho1 = "supersonic" 

    let textoTemplateString = `
    I need to be myself...
    I cant be no one else...
    i'm feeling ${trecho1}...

    `
    console.log(textoTemplateString,);
}

//usando 'template string' é possivel quebrar linhas...