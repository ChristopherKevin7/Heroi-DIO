let partidas = [
    { Resultado: "Vitoria", pontos: 300 },
    { Resultado: "Vitoria", pontos: 280 },
    { Resultado: "Derrota", pontos: -100 },
    { Resultado: "Vitoria", pontos: 500 },
    { Resultado: "Empate", pontos: 40 },
    { Resultado: "Vitoria", pontos: 250 },
    { Resultado: "Derrota", pontos: -80 },
    { Resultado: "Empate", pontos: 20 },
    { Resultado: "Vitoria", pontos: 420 },
    { Resultado: "Vitoria", pontos: 300 },
    { Resultado: "Derrota", pontos: -150 },
    { Resultado: "Vitoria", pontos: 350 },
    { Resultado: "Vitoria", pontos: 200 },
    { Resultado: "Empate", pontos: 30 },
    { Resultado: "Vitoria", pontos: 500 },
    { Resultado: "Derrota", pontos: -90 },
    { Resultado: "Vitoria", pontos: 320 },
    { Resultado: "Vitoria", pontos: 280 },
    { Resultado: "Vitoria", pontos: 260 },
    { Resultado: "Empate", pontos: 40 },
    { Resultado: "Vitoria", pontos: 310 },
    { Resultado: "Derrota", pontos: -110 },
    { Resultado: "Vitoria", pontos: 450 },
    { Resultado: "Empate", pontos: 50 },
    { Resultado: "Vitoria", pontos: 320 },
    { Resultado: "Derrota", pontos: -70 },
    { Resultado: "Vitoria", pontos: 300 },
    { Resultado: "Vitoria", pontos: 240 },
    { Resultado: "Empate", pontos: 35 },
    { Resultado: "Vitoria", pontos: 400 },
    { Resultado: "Derrota", pontos: -120 },
    { Resultado: "Vitoria", pontos: 500 },
    { Resultado: "Vitoria", pontos: 260 },
    { Resultado: "Empate", pontos: 25 },
    { Resultado: "Vitoria", pontos: 290 },
    { Resultado: "Derrota", pontos: -90 },
    { Resultado: "Vitoria", pontos: 340 },
    { Resultado: "Vitoria", pontos: 320 },
    { Resultado: "Empate", pontos: 30 },
    { Resultado: "Vitoria", pontos: 370 },
    { Resultado: "Derrota", pontos: -100 },
    { Resultado: "Vitoria", pontos: 280 },
    { Resultado: "Empate", pontos: 40 },
    { Resultado: "Vitoria", pontos: 500 },
    { Resultado: "Derrota", pontos: -130 },
    { Resultado: "Vitoria", pontos: 330 },
    { Resultado: "Empate", pontos: 20 },
    { Resultado: "Vitoria", pontos: 410 },
    { Resultado: "Derrota", pontos: -80 },
    { Resultado: "Vitoria", pontos: 290 },
    { Resultado: "Vitoria", pontos: 340 }
];


let heroi = {
    "nome": "Kevin",
    "xp": 0,
    "rank": "ferro"
}

//O heroi é submetido a uma lista de partidas onde ele aumenta seu rank
for(let i = 0; i < partidas.length; i++){
    heroi.xp += partidas[i].pontos
    if(partidas[i].Resultado == "Vitoria"){
        console.log("O heroi " + heroi.nome + " ganhou a partida")
    }
    else if(partidas[i].Resultado == "Empate"){
        console.log("O heroi " + heroi.nome + " empatou a partida")
    }
    else{
        console.log("O heroi " + heroi.nome + " perdeu a partida")
    }
    if (heroi.xp < 1000) {
        heroi.rank = "Ferro";
        console.log("Rank: " + heroi.rank)
    } else if (heroi.xp >= 1001 && heroi.xp <= 2000) {
        heroi.rank = "Bronze";
        console.log("Rank: " + heroi.rank)
    } else if (heroi.xp >= 2001 && heroi.xp <= 5000) {
        heroi.rank = "Prata";
        console.log("Rank: " + heroi.rank)
    } else if (heroi.xp >= 6001 && heroi.xp <= 7000) {
        heroi.rank = "Ouro";
        console.log("Rank: " + heroi.rank)
    } else if (heroi.xp >= 7001 && heroi.xp <= 8000) {
        heroi.rank = "Platina";
        console.log("Rank: " + heroi.rank)
    } else if (heroi.xp >= 8001 && heroi.xp <= 9000) {
        heroi.rank = "Ascendente";
        console.log("Rank: " + heroi.rank)
    } else if (heroi.xp >= 9001 && heroi.xp <= 10000) {
        heroi.rank = "Imortal";
        console.log("Rank: " + heroi.rank)
    } else if (heroi.xp >= 10001) {
        heroi.rank = "Radiante";
        console.log("Rank: " + heroi.rank)
    } else {
        heroi.rank = "Nível inválido";
    }
    console.log("XP: " + heroi.xp)
}