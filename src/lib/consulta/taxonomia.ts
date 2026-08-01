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
  { id: 'chegar', ordem: 1, rotulo: 'Bonjour & au revoir', icone: 'porta' },
  { id: 'mesa', ordem: 2, rotulo: 'Bar & Restaurant', icone: 'garfo' },
  { id: 'dieta', ordem: 3, rotulo: 'Je ne supporte pas', icone: 'escudo' },
  { id: 'pagar', ordem: 4, rotulo: 'Payer', icone: 'cartao' },
  { id: 'taxi', ordem: 5, rotulo: 'Taxi & voiture', icone: 'carro' },
  { id: 'transporte', ordem: 6, rotulo: 'Métro & train', icone: 'trilho' },
  { id: 'quarto', ordem: 7, rotulo: 'Hôtel & chambre', icone: 'cama' },
  { id: 'compras', ordem: 8, rotulo: 'Boutiques & marché', icone: 'sacola' },
  { id: 'saude', ordem: 9, rotulo: 'Pharmacie & petits maux', icone: 'cruz' },
  { id: 'simpatia', ordem: 10, rotulo: 'Des mots gentils', icone: 'brinde' },
  { id: 'reparo', ordem: 11, rotulo: 'Pas compris', icone: 'ouvido' },
  { id: 'apuro', ordem: 12, rotulo: 'Ça a mal tourné', icone: 'alerta' }
];

// Nível 2 — LOCAL da Espanha, rótulos em francês. `reativa: true` marca a folha de
// "deu errado": sempre a última do tile, e contada pelo G8 (teto de 15% dos cards).
export const FOLHAS: Folha[] = [
  // 1 · chegar
  { id: 'chegar/entrar', tile: 'chegar', rotulo: 'Entrer' },
  { id: 'chegar/balcao', tile: 'chegar', rotulo: 'Se faire servir au comptoir' },
  { id: 'chegar/ultimo', tile: 'chegar', rotulo: '« C’est qui le dernier ? »' },
  { id: 'chegar/sair', tile: 'chegar', rotulo: 'Sortir' },
  // ANDAIME. No SKU inglês esta folha é «Tú or usted, in one line» — o anglófono
  // não tem a máquina T/V e decide no escuro. O comprador francês TEM tu/vous e a
  // roda calibrada para a França, onde vous é o default no balcão; na Espanha o
  // default é `tú`. O problema muda de "escolher" para "recalibrar", e o rótulo
  // segue essa mudança. Confirmar ao escrever B02/I02.
  { id: 'chegar/tu-usted', tile: 'chegar', rotulo: 'Le « vous » n’est pas usted : tú au comptoir' },

  // 2 · mesa
  { id: 'mesa/mesa', tile: 'mesa', rotulo: 'Une table' },
  { id: 'mesa/carta', tile: 'mesa', rotulo: 'La carte' },
  { id: 'mesa/bebida', tile: 'mesa', rotulo: 'Quelque chose à boire' },
  { id: 'mesa/comida', tile: 'mesa', rotulo: 'À manger' },
  { id: 'mesa/tamanho', tile: 'mesa', rotulo: 'Tapa, ración ou media' },
  { id: 'mesa/agua-pao', tile: 'mesa', rotulo: 'Eau & pain' },
  { id: 'mesa/conta', tile: 'mesa', rotulo: 'L’addition' },
  { id: 'mesa/errado', tile: 'mesa', rotulo: 'Ce n’est pas ce que j’ai commandé', reativa: true },

  // 3 · dieta
  { id: 'dieta/dizer', tile: 'dieta', rotulo: 'Le dire (les trois niveaux)' },
  { id: 'dieta/cartao', tile: 'dieta', rotulo: 'Montrer la carte' },
  { id: 'dieta/o-que-tem', tile: 'dieta', rotulo: 'Qu’est-ce qu’il y a dedans ?' },
  { id: 'dieta/sem', tile: 'dieta', rotulo: 'Sans viande / sans porc / sans gluten' },
  { id: 'dieta/nao-levam-a-serio', tile: 'dieta', rotulo: 'On ne me prend pas au sérieux', reativa: true },
  { id: 'dieta/acontecendo', tile: 'dieta', rotulo: 'C’est en train d’arriver', reativa: true },

  // 4 · pagar
  { id: 'pagar/pedir', tile: 'pagar', rotulo: 'Demander l’addition' },
  // ANDAIME. No SKU inglês: «Card — and "en euros"», porque o britânico paga em
  // libras e a maquininha oferece DCC. O comprador da zona do euro paga em euros
  // com Carte en euros: o DCC NÃO EXISTE para ele e `sin conversión` sai do curso.
  // O que sobra de caro no cartão aqui é outra coisa — ver B14. Confirmar ao
  // escrever B14; esta folha pode acabar mudando de recheio inteiro.
  { id: 'pagar/cartao', tile: 'pagar', rotulo: 'Payer par carte' },
  { id: 'pagar/dinheiro', tile: 'pagar', rotulo: 'Espèces & le billet de cinquante' },
  { id: 'pagar/gorjeta', tile: 'pagar', rotulo: 'Le pourboire' },
  { id: 'pagar/rachar', tile: 'pagar', rotulo: 'Payer séparément' },
  { id: 'pagar/errado', tile: 'pagar', rotulo: 'Mauvaise addition, mauvaise monnaie', reativa: true },

  // 5 · taxi
  { id: 'taxi/destino', tile: 'taxi', rotulo: 'Dire où aller' },
  { id: 'taxi/taximetro', tile: 'taxi', rotulo: 'Taximètre & prix' },
  { id: 'taxi/parar', tile: 'taxi', rotulo: 'Arrêtez-vous ici / le reçu' },
  { id: 'taxi/locadora', tile: 'taxi', rotulo: 'Le comptoir de location' },
  { id: 'taxi/estacionar', tile: 'taxi', rotulo: 'Se garer & la caméra ZBE' },
  { id: 'taxi/errado', tile: 'taxi', rotulo: 'Pas de carte / mauvaise direction', reativa: true },

  // 6 · transporte
  { id: 'transporte/bilhete', tile: 'transporte', rotulo: 'Le bon billet' },
  { id: 'transporte/qual-trem', tile: 'transporte', rotulo: 'Métro, cercanías ou Renfe' },
  { id: 'transporte/plataforma', tile: 'transporte', rotulo: 'Quai & accès' },
  { id: 'transporte/bagagem', tile: 'transporte', rotulo: 'Bagages & scanner' },
  { id: 'transporte/placas', tile: 'transporte', rotulo: 'Les panneaux qui coûtent cher' },
  { id: 'transporte/perdi', tile: 'transporte', rotulo: 'Je l’ai raté', reativa: true },

  // 7 · quarto
  { id: 'quarto/checkin', tile: 'quarto', rotulo: 'Le check-in' },
  { id: 'quarto/pedir', tile: 'quarto', rotulo: 'Demander quelque chose' },
  { id: 'quarto/nao-funciona', tile: 'quarto', rotulo: '« No funciona »' },
  { id: 'quarto/mala', tile: 'quarto', rotulo: 'Laisser la valise' },
  { id: 'quarto/checkout', tile: 'quarto', rotulo: 'Le check-out & la taxe de séjour' },

  // 8 · compras
  { id: 'compras/balcao', tile: 'compras', rotulo: 'Au comptoir' },
  { id: 'compras/quanto', tile: 'compras', rotulo: 'Combien / quelle taille' },
  { id: 'compras/so-olhando', tile: 'compras', rotulo: 'Je regarde seulement' },
  { id: 'compras/pagar', tile: 'compras', rotulo: 'Payer & le ticket de caisse' },
  { id: 'compras/devolver', tile: 'compras', rotulo: 'Rapporter un article', reativa: true },

  // 9 · saude
  { id: 'saude/algo-para', tile: 'saude', rotulo: '« Quelque chose contre… »' },
  { id: 'saude/receita', tile: 'saude', rotulo: 'Avec ou sans ordonnance' },
  { id: 'saude/minha-alergia', tile: 'saude', rotulo: 'Mon allergie, mon médicament' },
  { id: 'saude/guardia', tile: 'saude', rotulo: 'Farmacia de guardia' },
  { id: 'saude/112', tile: 'saude', rotulo: '112 & l’hôpital', reativa: true },

  // 10 · simpatia — a folha que o G8 protege com um piso de 8 cards.
  // É onde a viagem fica boa, e é exatamente a que a deriva defensiva esvazia:
  // nas 252 frases-alvo do curso antigo, a ÚNICA fala de apreciação que o aluno
  // produzia era «¿Qué me recomienda?».
  { id: 'simpatia/elogiar-comida', tile: 'simpatia', rotulo: 'Complimenter le repas' },
  { id: 'simpatia/elogiar-lugar', tile: 'simpatia', rotulo: 'Complimenter l’endroit' },
  { id: 'simpatia/agradecer', tile: 'simpatia', rotulo: 'Merci & au revoir' },
  { id: 'simpatia/brindar', tile: 'simpatia', rotulo: 'Trinquer' },
  { id: 'simpatia/puxar-conversa', tile: 'simpatia', rotulo: 'Engager la conversation' },
  { id: 'simpatia/convite', tile: 'simpatia', rotulo: 'Accepter ou décliner une invitation' },

  // 11 · reparo
  { id: 'reparo/devagar', tile: 'reparo', rotulo: 'Plus lentement / encore une fois' },
  { id: 'reparo/escreve', tile: 'reparo', rotulo: 'Écrivez-le / montrez-le-moi' },
  // ANDAIME. Fica no INGLÊS como degrau universal de propósito: em Mallorca
  // «¿Hay alguien que hable francés?» funciona e em Sevilha não, e instalar a fuga
  // para o francês dentro do kit de reparo é ensinar o aluno a não usar o curso.
  // O francês como fato local sai uma vez, em I09/A05. Confirmar ao escrever B03.
  { id: 'reparo/ingles', tile: 'reparo', rotulo: 'Parlez-vous anglais ? (et sinon)' },
  { id: 'reparo/como-se-diz', tile: 'reparo', rotulo: 'Comment on dit… ?' },
  { id: 'reparo/apontar', tile: 'reparo', rotulo: 'Montrer et obtenir' },

  // 12 · apuro — o único tile reativo. Um de doze: 8%.
  { id: 'apuro/roubo', tile: 'apuro', rotulo: 'On m’a volé', reativa: true },
  { id: 'apuro/perdi', tile: 'apuro', rotulo: 'J’ai perdu quelque chose / quelqu’un', reativa: true },
  { id: 'apuro/denuncia', tile: 'apuro', rotulo: 'Police & plainte', reativa: true },
  { id: 'apuro/112', tile: 'apuro', rotulo: '112', reativa: true },
  { id: 'apuro/golpes', tile: 'apuro', rotulo: 'Les arnaques, par leur nom', reativa: true },
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
  { id: 'antes-de-voar', de: -7, ate: -1, rotulo: 'Avant le départ' },
  { id: 'fronteira', de: 0, ate: 0, rotulo: 'Arrivée & le premier guichet' },
  { id: 'volta', de: 'ultimo-dia', ate: 'ultimo-dia', rotulo: 'Le retour' }
] as const;
