import type { Folha, Tile } from './tipos';

// TAXONOMIA DO MODO CONSULTA — ¡Dime! FR → Espanha
//
// O turista chega com uma de duas consultas: "estou em X" (sabe onde o corpo está,
// em zero segundo) ou "acabou de acontecer Y" (cauda longa, infinita). A segunda
// NÃO é enumerável, e é por onde a deriva defensiva entra: se cada lugar ganhar um
// galho "quando dá errado", o índice reproduz os 46% de moldura de perda que o
// curso levou meses para tirar.
//
// Por isso: nível 1 = LUGAR (12 fixos) · nível 2 = INTENÇÃO, na ordem do arco da
// cena, com "algo deu errado" como UMA FOLHA no fim — nunca um galho. O reativo
// puro fica num único tile de doze (8%).
//
// POR QUE DOZE, e a razão é física: 375×812, header ~90 px, safe-area ~80 px →
// ~640 px úteis. Tile legível a braço estendido sob sol = 92 px + 10 px de gap =
// 102 px por linha. Seis linhas × duas colunas = 12 tiles, tela cheia, zero
// rolagem. E o rótulo francês é MAIS LONGO que o inglês — «Pharmacie & petits
// maux» contra «Chemist & feeling rough» — então três colunas continuam fora de
// questão e o rótulo é o item que se encurta, nunca a contagem.
//
// ── O QUE É IDÊNTICO EM TODO SKU, E O QUE NÃO É ─────────────────────────────
// NÍVEL 1 É IDÊNTICO: os mesmos 12 tiles, com os MESMOS `id`, a MESMA `ordem` e
// o MESMO `icone` do curso inglês. Um por um, nada entra, nada sai, nada troca de
// lugar. É memória muscular entre destinos e é o ativo de cross-sell: quem comprou
// o da Espanha reconhece o da Itália no primeiro toque, porque "pagar" continua
// sendo o quarto tile. A ORDEM É FIXA PARA SEMPRE DEPOIS DO LANÇAMENTO — quem
// decorou a posição não pode ser realfabetizado por uma refatoração.
//
// O `rotulo` é a SUPERFÍCIE do tile, não a identidade dele, e vai para o francês
// junto com o resto do app. Deixá-lo em inglês num produto francês não preservaria
// identidade nenhuma: quebraria justamente o cross-sell, porque o comprador que
// reconhece o tile é um comprador que lê francês. Identidade = id + ordem + ícone
// + significado; rótulo = tradução. Se a intenção do contrato for outra — rótulo
// literalmente congelado em inglês nos 12 —, é uma linha por tile para desfazer.
//
// NÍVEL 2 é local (tapa vs ración só aqui; os cinco tons só no Phûut!) e também
// em francês. Duas folhas ganharam recheio próprio deste SKU, e ambas estão
// declaradas como ANDAIME lá embaixo: elas nomeiam a decisão do par, não a do
// destino, e quem escrever B02/I02/I10 confirma ou troca.

export const TILES: Tile[] = [
  { id: 'chegar', ordem: 1, rotulo: 'Ciao & arrivederci', icone: 'porta' },
  { id: 'mesa', ordem: 2, rotulo: 'Bar & Ristorante', icone: 'garfo' },
  { id: 'dieta', ordem: 3, rotulo: 'Non lo sopporto', icone: 'escudo' },
  { id: 'pagar', ordem: 4, rotulo: 'Pagare', icone: 'cartao' },
  { id: 'taxi', ordem: 5, rotulo: 'Taxi & auto', icone: 'carro' },
  { id: 'transporte', ordem: 6, rotulo: 'Metro & treno', icone: 'trilho' },
  { id: 'quarto', ordem: 7, rotulo: 'Hotel & camera', icone: 'cama' },
  { id: 'compras', ordem: 8, rotulo: 'Negozi & mercato', icone: 'sacola' },
  { id: 'saude', ordem: 9, rotulo: 'Farmacia & piccoli malanni', icone: 'cruz' },
  { id: 'simpatia', ordem: 10, rotulo: 'Parole gentili', icone: 'brinde' },
  { id: 'reparo', ordem: 11, rotulo: 'Non ho capito', icone: 'ouvido' },
  { id: 'apuro', ordem: 12, rotulo: 'È andata storta', icone: 'alerta' }
];

// Nível 2 — LOCAL da Espanha, rótulos em francês. `reativa: true` marca a folha de
// "deu errado": sempre a última do tile, e contada pelo G8 (teto de 15% dos cards).
export const FOLHAS: Folha[] = [
  // 1 · chegar
  { id: 'chegar/entrar', tile: 'chegar', rotulo: 'Entrare' },
  { id: 'chegar/balcao', tile: 'chegar', rotulo: 'Farsi servire al banco' },
  { id: 'chegar/ultimo', tile: 'chegar', rotulo: '« Chi è l’ultimo? »' },
  { id: 'chegar/sair', tile: 'chegar', rotulo: 'Uscire' },
  // ANDAIME. No SKU inglês esta folha é «Tú or usted, in one line» — o anglófono
  // não tem a máquina T/V e decide no escuro. O comprador francês TEM tu/vous e a
  // roda calibrada para a França, onde vous é o default no balcão; na Espanha o
  // default é `tú`. O problema muda de "escolher" para "recalibrar", e o rótulo
  // segue essa mudança. Confirmar ao escrever B02/I02.
  { id: 'chegar/tu-usted', tile: 'chegar', rotulo: 'Il « Lei » non è usted: tú al banco' },

  // 2 · mesa
  { id: 'mesa/mesa', tile: 'mesa', rotulo: 'Un tavolo' },
  { id: 'mesa/carta', tile: 'mesa', rotulo: 'Il menù' },
  { id: 'mesa/bebida', tile: 'mesa', rotulo: 'Qualcosa da bere' },
  { id: 'mesa/comida', tile: 'mesa', rotulo: 'Da mangiare' },
  { id: 'mesa/tamanho', tile: 'mesa', rotulo: 'Tapa, ración o media' },
  { id: 'mesa/agua-pao', tile: 'mesa', rotulo: 'Acqua & pane' },
  { id: 'mesa/conta', tile: 'mesa', rotulo: 'Il conto' },
  { id: 'mesa/errado', tile: 'mesa', rotulo: 'Non è quello che ho ordinato', reativa: true },

  // 3 · dieta
  { id: 'dieta/dizer', tile: 'dieta', rotulo: 'Dirlo (i tre livelli)' },
  { id: 'dieta/cartao', tile: 'dieta', rotulo: 'Mostrare la scheda' },
  { id: 'dieta/o-que-tem', tile: 'dieta', rotulo: 'Cosa c’è dentro?' },
  { id: 'dieta/sem', tile: 'dieta', rotulo: 'Senza carne / senza maiale / senza glutine' },
  { id: 'dieta/nao-levam-a-serio', tile: 'dieta', rotulo: 'Non mi prendono sul serio', reativa: true },
  { id: 'dieta/acontecendo', tile: 'dieta', rotulo: 'Sta succedendo', reativa: true },

  // 4 · pagar
  { id: 'pagar/pedir', tile: 'pagar', rotulo: 'Chiedere il conto' },
  // ANDAIME. No SKU inglês: «Card — and "en euros"», porque o britânico paga em
  // libras e a maquininha oferece DCC. O comprador da zona do euro paga em euros
  // com Carte en euros: o DCC NÃO EXISTE para ele e `sin conversión` sai do curso.
  // O que sobra de caro no cartão aqui é outra coisa — ver B14. Confirmar ao
  // escrever B14; esta folha pode acabar mudando de recheio inteiro.
  { id: 'pagar/cartao', tile: 'pagar', rotulo: 'Pagare con la carta' },
  { id: 'pagar/dinheiro', tile: 'pagar', rotulo: 'Contanti & la banconota da cinquanta' },
  { id: 'pagar/gorjeta', tile: 'pagar', rotulo: 'La mancia' },
  { id: 'pagar/rachar', tile: 'pagar', rotulo: 'Pagare separatamente' },
  { id: 'pagar/errado', tile: 'pagar', rotulo: 'Conto sbagliato, resto sbagliato', reativa: true },

  // 5 · taxi
  { id: 'taxi/destino', tile: 'taxi', rotulo: 'Dire dove andare' },
  { id: 'taxi/taximetro', tile: 'taxi', rotulo: 'Tassametro & prezzo' },
  { id: 'taxi/parar', tile: 'taxi', rotulo: 'Fermarsi qui / la ricevuta' },
  { id: 'taxi/locadora', tile: 'taxi', rotulo: 'Il banco dell’autonoleggio' },
  { id: 'taxi/estacionar', tile: 'taxi', rotulo: 'Parcheggiare & la telecamera ZBE' },
  { id: 'taxi/errado', tile: 'taxi', rotulo: 'Niente carta / direzione sbagliata', reativa: true },

  // 6 · transporte
  { id: 'transporte/bilhete', tile: 'transporte', rotulo: 'Il biglietto giusto' },
  { id: 'transporte/qual-trem', tile: 'transporte', rotulo: 'Metro, cercanías o Renfe' },
  { id: 'transporte/plataforma', tile: 'transporte', rotulo: 'Binario & accesso' },
  { id: 'transporte/bagagem', tile: 'transporte', rotulo: 'Bagagli & scanner' },
  { id: 'transporte/placas', tile: 'transporte', rotulo: 'I cartelli che costano caro' },
  { id: 'transporte/perdi', tile: 'transporte', rotulo: 'L’ho perso', reativa: true },

  // 7 · quarto
  { id: 'quarto/checkin', tile: 'quarto', rotulo: 'Il check-in' },
  { id: 'quarto/pedir', tile: 'quarto', rotulo: 'Chiedere qualcosa' },
  { id: 'quarto/nao-funciona', tile: 'quarto', rotulo: '« No funciona »' },
  { id: 'quarto/mala', tile: 'quarto', rotulo: 'Lasciare la valigia' },
  { id: 'quarto/checkout', tile: 'quarto', rotulo: 'Il check-out & la tassa di soggiorno' },

  // 8 · compras
  { id: 'compras/balcao', tile: 'compras', rotulo: 'Al banco' },
  { id: 'compras/quanto', tile: 'compras', rotulo: 'Quanto / che taglia' },
  { id: 'compras/so-olhando', tile: 'compras', rotulo: 'Sto solo guardando' },
  { id: 'compras/pagar', tile: 'compras', rotulo: 'Pagare & lo scontrino' },
  { id: 'compras/devolver', tile: 'compras', rotulo: 'Restituire un articolo', reativa: true },

  // 9 · saude
  { id: 'saude/algo-para', tile: 'saude', rotulo: '« Qualcosa contro… »' },
  { id: 'saude/receita', tile: 'saude', rotulo: 'Con o senza ricetta' },
  { id: 'saude/minha-alergia', tile: 'saude', rotulo: 'La mia allergia, il mio farmaco' },
  { id: 'saude/guardia', tile: 'saude', rotulo: 'Farmacia de guardia' },
  { id: 'saude/112', tile: 'saude', rotulo: '112 & l’ospedale', reativa: true },

  // 10 · simpatia — a folha que o G8 protege com um piso de 8 cards.
  // É onde a viagem fica boa, e é exatamente a que a deriva defensiva esvazia:
  // nas 252 frases-alvo do curso antigo, a ÚNICA fala de apreciação que o aluno
  // produzia era «¿Qué me recomienda?».
  { id: 'simpatia/elogiar-comida', tile: 'simpatia', rotulo: 'Fare i complimenti per il cibo' },
  { id: 'simpatia/elogiar-lugar', tile: 'simpatia', rotulo: 'Fare i complimenti per il posto' },
  { id: 'simpatia/agradecer', tile: 'simpatia', rotulo: 'Grazie & arrivederci' },
  { id: 'simpatia/brindar', tile: 'simpatia', rotulo: 'Brindare' },
  { id: 'simpatia/puxar-conversa', tile: 'simpatia', rotulo: 'Attaccare bottone' },
  { id: 'simpatia/convite', tile: 'simpatia', rotulo: 'Accettare o rifiutare un invito' },

  // 11 · reparo
  { id: 'reparo/devagar', tile: 'reparo', rotulo: 'Più lentamente / ancora una volta' },
  { id: 'reparo/escreve', tile: 'reparo', rotulo: 'Scrivilo / fammelo vedere' },
  // ANDAIME. Fica no INGLÊS como degrau universal de propósito: em Mallorca
  // «¿Hay alguien que hable francés?» funciona e em Sevilha não, e instalar a fuga
  // para o francês dentro do kit de reparo é ensinar o aluno a não usar o curso.
  // O francês como fato local sai uma vez, em I09/A05. Confirmar ao escrever B03.
  { id: 'reparo/ingles', tile: 'reparo', rotulo: 'Parli inglese? (e se no)' },
  { id: 'reparo/como-se-diz', tile: 'reparo', rotulo: 'Come si dice…?' },
  { id: 'reparo/apontar', tile: 'reparo', rotulo: 'Indicare e ottenere' },

  // 12 · apuro — o único tile reativo. Um de doze: 8%.
  { id: 'apuro/roubo', tile: 'apuro', rotulo: 'Mi hanno derubato', reativa: true },
  { id: 'apuro/perdi', tile: 'apuro', rotulo: 'Ho perso qualcosa / qualcuno', reativa: true },
  { id: 'apuro/denuncia', tile: 'apuro', rotulo: 'Polizia & denuncia', reativa: true },
  { id: 'apuro/112', tile: 'apuro', rotulo: '112', reativa: true },
  { id: 'apuro/golpes', tile: 'apuro', rotulo: 'Le truffe, chiamate per nome', reativa: true },
  { id: 'apuro/reclamacoes', tile: 'apuro', rotulo: 'Hoja de reclamaciones', reativa: true }
];

// Cards com JANELA DE DATA: aeroporto, fronteira e pré-embarque são eventos de UMA
// VEZ SÓ. Um tile permanente para algo usado num único dia custa 1/12 da tela por
// doze dias. Estes não têm tile: são empurrados pela faixa "Maintenant" nos 7 dias
// antes do voo e no dia, e continuam alcançáveis pela busca.
//
// ANDAIME na janela `fronteira`: num voo Schengen interno não há controle de
// fronteira nenhum para este comprador. A janela NÃO some (ela é do produto, não
// do par), mas o que ela empurra muda de balcão — quem faz as três perguntas aqui
// é o check-in do hotel e o balcão da locadora. Confirmar ao escrever B05.
export const JANELAS = [
  { id: 'antes-de-voar', de: -7, ate: -1, rotulo: 'Prima della partenza' },
  { id: 'fronteira', de: 0, ate: 0, rotulo: 'Arrivo & il primo sportello' },
  { id: 'volta', de: 'ultimo-dia', ate: 'ultimo-dia', rotulo: 'Il ritorno' }
] as const;
