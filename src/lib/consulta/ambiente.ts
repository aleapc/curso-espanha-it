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
// O texto de cada faixa vai para o italiano junto com o resto do app (o comprador
// é italiano). Registro caloroso e informal ("tu"), upbeat.

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
  { de: 0, linha: 'Le cucine sono chiuse, i bar no. Chiedi il conto prima che te lo chiedano loro.' },
  { de: 5 * 60, linha: 'Non è ancora aperto niente. I primi bar alzano la saracinesca verso le sette.' },
  { de: 7 * 60, linha: 'La colazione è un caffè e pane tostato, in piedi al bancone. Niente di più.' },
  { de: 10 * 60 + 30, linha: 'A metà mattina tutta la strada si ferma per un cortado e qualcosa da sgranocchiare.' },
  { de: 12 * 60, linha: 'Troppo presto per pranzo. Un vermut e una tapa: è proprio l’ora giusta.' },
  { de: 14 * 60, linha: 'È l’ora di pranzo, e il menú del día è il miglior rapporto qualità-prezzo di Spagna.' },
  { de: 15 * 60 + 30, linha: 'La sobremesa: il tavolo è tuo finché non chiedi il conto. Nessuno ti mette fretta.' },
  { de: 16 * 60 + 30, linha: 'Le cucine cambiano turno. Un bar ti servirà comunque una tapa.' },
  { de: 18 * 60, linha: 'La merienda — un caffè e qualcosa di dolce. Alla cena mancano ancora tre ore.' },
  { de: 20 * 60, linha: 'Le cucine si svegliano. Prenota per le nove e mezza e sarai in orario spagnolo.' },
  { de: 21 * 60, linha: 'Le cucine sono aperte ovunque. Per la cena sei in anticipo, non in ritardo.' },
  { de: 22 * 60 + 30, linha: 'Qui le dieci di sera sono il cuore della serata. Le ultime ordinazioni si fanno verso le undici e mezza.' }
];

export function ambienteAgora(d: Date = new Date()): Ambiente {
  const { hora, minutos } = horaEmEspanha(d);
  let linha = FAIXAS[0].linha;
  for (const f of FAIXAS) if (minutos >= f.de) linha = f.linha;
  return { hora, minutos, linha };
}
