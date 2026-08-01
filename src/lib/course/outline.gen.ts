import type { ModuloOutline } from '../types';

// ┌──────────────────────────────────────────────────────────────────────────┐
// │  ARQUIVO GERADO — não edite à mão.                                       │
// │  Fonte: os ep-*.json (título) + slots.json (ordem e módulo).             │
// │  Regenerar: npm run outline   ·   Conferir: npm run outline:conferir     │
// │                                                                          │
// │  O título vivia aqui E no episódio. Duas canônicas para a mesma string   │
// │  é o defeito que fez duas partes reescritas aparecerem na tela com o     │
// │  título antigo e duas partes novas não aparecerem. Agora deriva.         │
// └──────────────────────────────────────────────────────────────────────────┘

export const outline: ModuloOutline[] = [
  {
    nivel: 'basico',
    nome: 'Base · Me la cavo',
    descricao: 'The Spanish that gets the day done: arriving, ordering, paying, moving, and getting help.',
    cor: 'terracota',
    licoes: [
      { id: 'b01', titulo: 'Dici quasi tutto giusto — tranne un suono', pronta: true },
      { id: 'b02', titulo: 'Dieci parole, e il tu si gioca in una vocale', pronta: true },
      { id: 'b03', titulo: 'Un\'altra volta, più lentamente, e su un pezzo di carta', pronta: true },
      { id: 'b04', titulo: 'La lista con una scadenza: il documento, la tessera, l\'assicurazione, le tre prenotazioni', pronta: true },
      { id: 'b05', titulo: 'Le tre domande non sono del doganiere', pronta: true },
      { id: 'b06', titulo: 'La prima ora: la valigia, la porta e i contanti', pronta: true },
      { id: 'b07', titulo: 'Trentatré euro fino alla tua porta', pronta: true },
      { id: 'b08', titulo: 'Quattro per cento di batteria, e la via non è lì', pronta: true },
      { id: 'b09', titulo: 'La stazione è un piccolo aeroporto', pronta: true },
      { id: 'b10', titulo: '«SALIDA» non vuol dire «salita»', pronta: true },
      { id: 'b11', titulo: 'Un secondo e mezzo al bancone', pronta: true },
      { id: 'b12', titulo: 'Senza ghiaccio — e uno di quelli', pronta: true },
      { id: 'b13', titulo: 'Cosa c\'è nei fagiolini', pronta: true },
      { id: 'b14', titulo: 'Il conto e le sei parole', pronta: true },
      { id: 'b15', titulo: 'Non toccare — e il cinquanta non passa', pronta: true },
      { id: 'b16', titulo: 'Un piano più su, sul lato tranquillo', pronta: true },
      { id: 'b17', titulo: 'Prima la farmacia — e la tessera, ce l\'hai già', pronta: true },
      { id: 'b18', titulo: 'Mezzogiorno fuori, alle otto l\'aereo — e la giacca è rimasta nel taxi', pronta: true },
    ]
  },
  {
    nivel: 'intermediario',
    nome: 'Intermedio · Me la godo',
    descricao: 'Eat where they eat, when they eat, at the price they pay.',
    cor: 'oliva',
    licoes: [
      { id: 'i01', titulo: 'L\'orologio di qui', pronta: true },
      { id: 'i02', titulo: 'L\'ordine al banco, quello che non si vede', pronta: true },
      { id: 'i03', titulo: 'Il piatto che non avresti ordinato', pronta: true },
      { id: 'i04', titulo: 'La serata comincia più tardi di quanto credi', pronta: true },
      { id: 'i05', titulo: 'Le cinque domande che ti fanno', pronta: true },
      { id: 'i06', titulo: 'Dove eravate ieri, e dove lui vi manda domani', pronta: true },
      { id: 'i07', titulo: 'Due parole, e il cuoco esce dalla cucina', pronta: true },
      { id: 'i08', titulo: 'Essere invitato a una tavola spagnola', pronta: true },
      { id: 'i09', titulo: 'Fare quello che fanno loro', pronta: true },
      { id: 'i10', titulo: 'Nessuno fa i conti a tavola', pronta: true },
    ]
  },
  {
    nivel: 'avancado',
    nome: 'Avanzato · Leggo la sala',
    descricao: 'The humour, the pride, the old argument, and what their silence means.',
    cor: 'indigo',
    licoes: [
      { id: 'a01', titulo: 'Come parlano quando non è a te che parlano', pronta: true },
      { id: 'a02', titulo: 'Di che cosa ridono — e la battuta che potete fare voi', pronta: true },
      { id: 'a03', titulo: 'Quello che credono di essere', pronta: true },
      { id: 'a04', titulo: 'La vecchia lite', pronta: true },
      { id: 'a05', titulo: 'Bon dia, kaixo, bo día', pronta: true },
      { id: 'a06', titulo: 'Agosto, il santo e la settimana che è della strada', pronta: true },
      { id: 'a07', titulo: 'I segni che non si pronunciano', pronta: true },
      { id: 'a08', titulo: 'Il congedo che dura dieci minuti — e le parole da tenere', pronta: true },
    ]
  },
];

// Gerado de static/img/ — a home só pede imagem que existe.
export const COM_IMAGEM = new Set(["a01","a02","a03","a04","a05","a06","a07","a08","b01","b02","b03","b04","b05","b06","b07","b08","b09","b10","b11","b12","b13","b14","b15","b16","b17","b18","c01","c02","c03","e01","e02","e03","e04","e05","e06","e07","e08","i01","i02","i03","i04","i05","i06","i07","i08","i09","i10"]);
