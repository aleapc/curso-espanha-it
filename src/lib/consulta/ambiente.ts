// A FAIXA "NOW" — a cultura virando ambiente, com zero toque.
//
// Saber que a cozinha só acorda às oito e meia NÃO é fala: não vira card e não
// compete por tile (PRODUTO.md §6). Vira isto — uma linha no topo da tela que a
// pessoa lê sem pedir, na hora exata em que a informação morde.
//
// O REGISTRO É UPBEAT, e é a regra que importa aqui: *"you're early, not late"*,
// nunca *"you missed it"*. As mesmas horas que em c01a ("The Spanish clock is a
// gift") — café e torrada antes das nove, o cortado das onze, la comida das duas
// às três e meia, a merienda das seis, a cozinha acordando às oito e meia, la
// cena a partir das nove, últimos pedidos lá pelas onze e meia.
//
// Nada aqui é datado nem regional: é o relógio do país, que é o mesmo em julho e
// em janeiro. Nada de "hoje é domingo, tudo fechado" — isso varia por cidade e
// entraria como inferência vestida de fato.
//
// O texto de cada faixa vai para o francês junto com o resto do app (o comprador
// é francês). Registro cortês e caloroso ("vous"), upbeat.

export interface Ambiente {
  /** HH:MM na Espanha peninsular. */
  hora: string;
  /** Minutos desde a meia-noite, para decidir a faixa. */
  minutos: number;
  /** A linha de contexto. Uma frase, dita a quem está de pé no meio da rua. */
  linha: string;
}

/** Hora peninsular. Se o aparelho não tiver as zonas do ICU, cai na hora local. */
function horaEmEspanha(d: Date): { hora: string; minutos: number } {
  try {
    const partes = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Madrid',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).formatToParts(d);
    const h = Number(partes.find((p) => p.type === 'hour')?.value);
    const m = Number(partes.find((p) => p.type === 'minute')?.value);
    if (Number.isFinite(h) && Number.isFinite(m)) {
      return {
        hora: `${String(h % 24).padStart(2, '0')}:${String(m).padStart(2, '0')}`,
        minutos: (h % 24) * 60 + m
      };
    }
  } catch {
    /* sem base de fusos → hora do aparelho */
  }
  const h = d.getHours();
  const m = d.getMinutes();
  return {
    hora: `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`,
    minutos: h * 60 + m
  };
}

// Faixas do dia, do começo de cada uma. A última cobre a virada da meia-noite.
const FAIXAS: { de: number; linha: string }[] = [
  { de: 0, linha: 'Les cuisines sont fermées, les bars non. Demandez l’addition avant qu’on vous la réclame.' },
  { de: 5 * 60, linha: 'Rien n’est encore ouvert. Les premiers cafés lèvent le rideau vers sept heures.' },
  { de: 7 * 60, linha: 'Le petit-déjeuner, c’est un café et une tartine, debout au comptoir. Rien de plus.' },
  { de: 10 * 60 + 30, linha: 'En milieu de matinée, toute la rue s’arrête pour un cortado et une petite chose à grignoter.' },
  { de: 12 * 60, linha: 'Trop tôt pour déjeuner. Un vermouth et une tapa, c’est exactement l’heure.' },
  { de: 14 * 60, linha: 'C’est l’heure du déjeuner, et le menú del día est le meilleur rapport qualité-prix d’Espagne.' },
  { de: 15 * 60 + 30, linha: 'La sobremesa : la table est à vous tant que vous ne demandez pas l’addition. Personne ne vous presse.' },
  { de: 16 * 60 + 30, linha: 'Les cuisines changent d’équipe. Un bar vous servira quand même une tapa.' },
  { de: 18 * 60, linha: 'La merienda — un café et quelque chose de sucré. Le dîner, c’est encore dans trois heures.' },
  { de: 20 * 60, linha: 'Les cuisines se réveillent. Réservez pour neuf heures et demie, et vous serez à l’heure espagnole.' },
  { de: 21 * 60, linha: 'Partout les cuisines sont ouvertes. Pour dîner, vous êtes en avance, pas en retard.' },
  { de: 22 * 60 + 30, linha: 'Ici, dix heures du soir, c’est le cœur de la soirée. Les dernières commandes passent vers onze heures et demie.' }
];

export function ambienteAgora(d: Date = new Date()): Ambiente {
  const { hora, minutos } = horaEmEspanha(d);
  let linha = FAIXAS[0].linha;
  for (const f of FAIXAS) if (minutos >= f.de) linha = f.linha;
  return { hora, minutos, linha };
}
