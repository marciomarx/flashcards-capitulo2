const flashcards = [
  { question: "1. Qual o objetivo da fisiologia?", answer: "Explicar os mecanismos físicos e químicos responsáveis pela origem, desenvolvimento e progressão da vida." },
  { question: "2. O que a fisiologia humana busca explicar?", answer: "Explicar as características e mecanismos específicos do corpo humano, que o tornam mais que a soma de suas partes." },
  { question: "3. Qual é a unidade viva básica do corpo?", answer: "A célula." },
  { question: "4. Quantas células existem aproximadamente no corpo humano?", answer: "Cerca de 35 a 40 trilhões." },
  { question: "5. Apesar das diferenças, o que as células têm em comum?", answer: "A maneira de produzir e usar energia e de se dividir." },
  { question: "6. O que constitui um tecido ou órgão?", answer: "Um agregado de muitas células diferentes mantidas juntas por estruturas intercelulares." },
  { question: "7. O que é a microbiota?", answer: "O conjunto de microrganismos que vivem no corpo, ajudando na digestão, nutrição, imunidade, entre outras funções." },
  { question: "8. Qual porcentagem do corpo é composta por líquidos?", answer: "Entre 50% e 70%." },
  { question: "9. Onde está a maior parte dos líquidos do corpo?", answer: "Dentro das células (líquido intracelular)." },
  { question: "10. O que caracteriza o líquido intracelular (LIC)?", answer: "Contém altos níveis de potássio, magnésio e fósforo, com mecanismos de transporte que mantêm diferenças de concentração." },
  { question: "11. O que caracteriza o líquido extracelular (LEC)?", answer: "Está em constante movimento, contém muitos íons cloreto e sódio e nutrientes." },
  { question: "12. Quem criou o termo 'homeostase' e quando?", answer: "Walter Cannon, em 1929." },
  { question: "13. O que é homeostase?", answer: "A manutenção de condições quase constantes no meio interno." },
  { question: "14. Como o corpo mantém suas funções normais?", answer: "Através de ações integradas de células, tecidos, órgãos e sistemas de controle (nervoso, hormonal e local)." },
  { question: "15. O que são compensações homeostáticas?", answer: "Mecanismos que mantêm as funções vitais mesmo diante de doenças, embora possam causar outras anormalidades a longo prazo." },
  { question: "16. Dê um exemplo de compensação homeostática.", answer: "Disfunção renal que leva à hipertensão, a qual, com o tempo, pode causar lesão tecidual." },
  { question: "17. Qual é a primeira função do sistema de transporte do LEC?", answer: "Movimentar o sangue através dos vasos sanguíneos." },
  { question: "18. Qual é a segunda função do sistema de transporte do LEC?", answer: "Movimentar o líquido entre os capilares sanguíneos e os espaços intercelulares." },
  { question: "19. O que ocorre nas paredes dos capilares?", answer: "A difusão de moléculas entre o plasma e o líquido intersticial." },
  { question: "20. Como se mantém a homogeneidade do LEC?", answer: "Pela contínua mistura entre o plasma e o líquido intersticial." },
  { question: "21. Qual o papel do sistema respiratório no LEC?", answer: "O sangue capta oxigênio nos alvéolos pulmonares por difusão." },
  { question: "22. Qual o papel do trato gastrointestinal na homeostase?", answer: "Absorver nutrientes dos alimentos para o LEC." },
  { question: "23. Qual é a função do fígado e de outros órgãos metabólicos?", answer: "Processar substâncias para uso celular, armazenar e eliminar resíduos." },
  { question: "24. Qual é a função do sistema musculoesquelético na homeostase?", answer: "Permitir o movimento para obtenção de alimentos e proteção contra ambientes adversos." },
  { question: "25. Como o corpo remove o dióxido de carbono?", answer: "Através dos pulmões, onde o CO2 é transferido do sangue para os alvéolos e eliminado na expiração." },
  { question: "26. Qual a função dos rins na remoção de resíduos?", answer: "Filtrar o plasma, reabsorver substâncias úteis e eliminar resíduos como ureia e ácido úrico." },
  { question: "27. Como o trato gastrointestinal contribui para a remoção de resíduos?", answer: "Eliminando material não digerido e resíduos nas fezes." },
  { question: "28. Qual a função do fígado na remoção de produtos tóxicos?", answer: "Realizar a destoxificação e eliminar fármacos e produtos químicos através da bile." },
  { question: "29. Como o sistema nervoso regula as funções do corpo?", answer: "Controlando atividades musculares, secretoras e integrando informações sensoriais." },
  { question: "30. Quais partes compõem o sistema nervoso mencionado no texto?", answer: "O sistema nervoso central (encéfalo e medula espinhal) e o sistema nervoso autônomo." },
  { question: "31. Qual a função do sistema endócrino?", answer: "Regular funções metabólicas por meio de hormônios." },
  { question: "32. O que são glândulas endócrinas?", answer: "Órgãos e tecidos que secretam hormônios para regular a função celular." },
  { question: "33. Como o sistema imunológico protege o corpo?", answer: "Defendendo contra agentes estranhos e diferenciando células próprias de nocivas." },
  { question: "34. Qual a função do sistema tegumentar?", answer: "Proteger os tecidos e órgãos profundos, funcionando como barreira entre o meio interno e o externo." },
  { question: "35. Qual é o papel da reprodução na homeostase da espécie?", answer: "Gerar novos indivíduos para substituir os que morrem, mantendo a continuidade da espécie." },
  { question: "36. O que são sistemas de controle do corpo?", answer: "Mecanismos (genéticos, locais e integrados) que regulam as funções dos órgãos." },
  { question: "37. O que é feedback negativo em sistemas de controle?", answer: "Um mecanismo que corrige desvios, retornando as condições a um valor médio para manter a homeostase." },
  { question: "38. Qual o papel dos barorreceptores na regulação da pressão arterial?", answer: "Detectar o estiramento das paredes arteriais e iniciar mecanismos de feedback negativo para ajustar a pressão." },
  { question: "39. O que pode ocorrer se o feedback positivo se tornar excessivo?", answer: "Leva à instabilidade, ciclos viciosos e, em casos extremos, à morte." },
  { question: "40. O que significa 'automaticidade' no contexto do corpo humano?", answer: "A capacidade do corpo de manter funções vitais de forma automática e integrada, garantindo a homeostase." }
];

let currentCardIndex = 0;

// Seleção de elementos
const startButton = document.getElementById("startButton");
const welcomeScreen = document.getElementById("welcomeScreen");
const flashcardScreen = document.getElementById("flashcardScreen");

const flashcardElement = document.getElementById("flashcard");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");

const prevButton = document.getElementById("prevButton");
const resetButton = document.getElementById("resetButton");
const nextButton = document.getElementById("nextButton");

// Exibe o flashcard atual
function showCard(index) {
  questionElement.textContent = flashcards[index].question;
  answerElement.textContent = flashcards[index].answer;
  flashcardElement.classList.remove("flipped");
}

// Inicia os flashcards
function startFlashcards() {
  welcomeScreen.style.display = "none";
  flashcardScreen.style.display = "flex";
  showCard(currentCardIndex);
}

// Exibe o próximo flashcard
function nextCard() {
  if (currentCardIndex < flashcards.length - 1) {
    currentCardIndex++;
    showCard(currentCardIndex);
  }
}

// Exibe o flashcard anterior
function prevCard() {
  if (currentCardIndex > 0) {
    currentCardIndex--;
    showCard(currentCardIndex);
  }
}

// Reinicia os flashcards
function resetCards() {
  currentCardIndex = 0;
  showCard(currentCardIndex);
}

// Vira o flashcard
function flipCard() {
  flashcardElement.classList.toggle("flipped");
}

// Atribuição de eventos
startButton.addEventListener("click", startFlashcards);
nextButton.addEventListener("click", nextCard);
prevButton.addEventListener("click", prevCard);
resetButton.addEventListener("click", resetCards);
flashcardElement.addEventListener("click", flipCard);
