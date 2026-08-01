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
    nome: 'Get by',
    descricao: 'The Spanish that gets the day done: arriving, ordering, paying, moving, and getting help.',
    cor: 'terracota',
    licoes: [
      { id: 'b01', titulo: 'Vous dites un mot, il en sort un autre', pronta: true },
      { id: 'b02', titulo: 'Dix mots, et le « tu » tient à une lettre', pronta: true },
      { id: 'b03', titulo: 'Encore une fois, plus lentement, et sur un bout de papier', pronta: true },
      { id: 'b04', titulo: 'La liste avec un délai : la pièce, la carte, l\'assurance, les trois réservations', pronta: true },
      { id: 'b05', titulo: 'Les trois questions ne sont pas du douanier', pronta: true },
      { id: 'b06', titulo: 'La première heure : la valise, la porte et l\'argent liquide', pronta: true },
      { id: 'b07', titulo: 'Trente-trois euros jusqu\'à votre porte', pronta: true },
      { id: 'b08', titulo: 'Quatre pour cent de batterie, et la rue n\'est pas là', pronta: true },
      { id: 'b09', titulo: 'La gare est un petit aéroport', pronta: true },
      { id: 'b10', titulo: '«SALIDA» ne veut pas dire «sale»', pronta: true },
      { id: 'b11', titulo: 'Une seconde et demie au comptoir', pronta: true },
      { id: 'b12', titulo: 'Sans glace — et un de ceux-là', pronta: true },
      { id: 'b13', titulo: 'Ce qu\'il y a dans les haricots verts', pronta: true },
      { id: 'b14', titulo: 'L\'addition et les six mots', pronta: true },
      { id: 'b15', titulo: 'Ne pas toucher — et le cinquante ne passe pas', pronta: true },
      { id: 'b16', titulo: 'Un étage plus haut, côté cour', pronta: true },
      { id: 'b17', titulo: 'D\'abord la pharmacie — et la carte, vous l\'avez déjà', pronta: true },
      { id: 'b18', titulo: 'Midi dehors, huit heures l\'avion — et la veste est restée dans le taxi', pronta: true },
    ]
  },
  {
    nivel: 'intermediario',
    nome: 'Get the good stuff',
    descricao: 'Eat where they eat, when they eat, at the price they pay.',
    cor: 'oliva',
    licoes: [
      { id: 'i01', titulo: 'L\'horloge d\'ici', pronta: true },
      { id: 'i02', titulo: 'L\'ordre au comptoir, celui qu\'on ne voit pas', pronta: true },
      { id: 'i03', titulo: 'Le plat que vous n\'auriez pas commandé', pronta: true },
      { id: 'i04', titulo: 'La soirée commence plus tard que vous ne croyez', pronta: true },
      { id: 'i05', titulo: 'Les cinq questions qu\'ils posent', pronta: true },
      { id: 'i06', titulo: 'Où vous étiez hier, et où il vous envoie demain', pronta: true },
      { id: 'i07', titulo: 'Deux mots, et le cuisinier sort de sa cuisine', pronta: true },
      { id: 'i08', titulo: 'Être invité à une table espagnole', pronta: true },
      { id: 'i09', titulo: 'Faire ce qu\'ils font', pronta: true },
      { id: 'i10', titulo: 'Personne ne calcule à table', pronta: true },
    ]
  },
  {
    nivel: 'avancado',
    nome: 'Read the room',
    descricao: 'The humour, the pride, the old argument, and what their silence means.',
    cor: 'indigo',
    licoes: [
      { id: 'a01', titulo: 'Comment ils parlent quand ce n\'est pas à vous qu\'ils parlent', pronta: true },
      { id: 'a02', titulo: 'De quoi ils rient — et la blague que vous, vous pouvez faire', pronta: true },
      { id: 'a03', titulo: 'Ce qu\'ils croient être', pronta: true },
      { id: 'a04', titulo: 'La vieille querelle', pronta: true },
      { id: 'a05', titulo: 'Bon dia, kaixo, bo día', pronta: true },
      { id: 'a06', titulo: 'Août, le saint et la semaine qui est à la rue', pronta: true },
      { id: 'a07', titulo: 'Les signes qu\'on ne prononce pas', pronta: true },
      { id: 'a08', titulo: 'L\'au revoir qui dure dix minutes — et les huit mots à garder', pronta: true },
    ]
  },
];

// Gerado de static/img/ — a home só pede imagem que existe.
export const COM_IMAGEM = new Set(["a01","a02","a03","a04","a05","a06","a07","a08","b01","b02","b03","b04","b05","b06","b07","b08","b09","b10","b11","b12","b13","b14","b15","b16","b17","b18","c01","c02","c03","e01","e02","e03","e04","e05","e06","e07","e08","i01","i02","i03","i04","i05","i06","i07","i08","i09","i10"]);
