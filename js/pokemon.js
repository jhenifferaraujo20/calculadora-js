function onLoad(){
    let pokemon = parseInt(prompt("Quem é esse Pokémon? Digite 1 para Charmander, 2 para Squirtle, 3 para Pikachu e 4 para Nidorina"));

    if(pokemon == 1){
        document.querySelector("h2").innerHTML = "Errou, tente novamente";
    }else if(pokemon == 2){
        document.querySelector("h2").innerHTML = "Errou, tente novamente";
    }
    else if(pokemon == 3){
        document.querySelector("h2").innerHTML = "Parabéns, você acertou!";
    }
    else if(pokemon == 4){
        document.querySelector("h2").innerHTML = "Errou, tente novamente";
    };
};
  