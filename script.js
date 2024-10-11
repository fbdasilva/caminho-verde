let showingAnswer = false;


function mudarBotaoCard(n) {
  const content = document.getElementById(`card${n}-content`);
  const button = document.getElementById(`card${n}-button`);


  const perguntas = ['O que é coleta seletiva?', 'O que é educação ambiental?', 'Como o desmatamento afeta a vida na terra?', 'Por que proteger os recursos hídricos?', 'Quais as categorias de descarte de lixo segundo o CONAMA?'
  ]
  const respostas = ['Por meio da coleta seletiva recolhe-se resíduos por meio de características em comum, tal como papel, plástico, metal e vidro.',
    'A educação ambiental é importante para garantir que as pessoas aprendam sobre os principais problemas ambientais e sobre as formas de agir para proteção do meio ambiente e desenvolvimento sustentável.',
    'O desmatamento é responsável por destruir habitats causando perda de biodiversidade e extinção de espécies. O desmatamento também pode causar mudanças climáticas e desastres ambientais.',
    'A água potável é a água em condições de qualidade para consumo humano. Embora o planeta terra seja abundante em água, a água potável é um recurso limitado. O desperdício e a poluição de reservatórios pode causar a escassez de água e diversos problemas para a população.',
    'O conama estabele 10 categorias: Vermelho para plástico, azul para papel, verde para vidro, amarela para metais, laranja para pilhas e baterias, branca para lixo hospitalar, preta para madeira, roxa para lixo radioativo, marrom para lixo orgânico e cinza para lixo não recicável.'
  ]
  
  if (!showingAnswer) {
    content.innerHTML = respostas[n-1];
    button.innerHTML = "Fechar Resposta";
    button.style.backgroundColor = `rgb(224, 110, 110)`
  } else {
    content.innerHTML = perguntas[n-1];
    button.innerHTML = "Ver Resposta";
    button.style.backgroundColor = `rgb(38, 117, 53)`
  }

  showingAnswer = !showingAnswer;
}
