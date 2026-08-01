# DERIVAÇÃO FR — o que muda quando o comprador é francês

> **O documento de par do SKU `FR → Espanha`.** Diz o que muda em relação ao `EN → Espanha` publicado e ao `DE → Espanha` recém-derivado, e por quê. Vai **junto** com toda tarefa de escrita das 36 partes, depois do `PRODUTO.md` e antes da `GRADE`.
> **Vigência:** 2026-07-28 · **Escopo:** SKU `curso-espanha-fr` · **Leitura obrigatória** de quem escreva parte, syllabus, quiz, card de consulta ou copy de loja deste SKU.

**Em conflito:** `PRODUTO.md` vence sempre · `slots.json` vence sobre texto · este documento vence sobre a `GRADE-36-ESPANHA.md` e sobre a `DERIVACAO-DE.md`, que são de **outros pares** e cujas linhas de par (âncora fonética, falso amigo, recalibragem de tratamento, roster de moldes) **não são fonte para este SKU**. A `DERIVACAO-DE.md` está no `docs/` deste projeto **como referência de MÉTODO e de FORMATO, jamais de conteúdo** — copiar uma linha dela para cá é o anti-padrão 9 (`PRODUTO` §10) em ato. O alemão não é o francês com outra bandeira.

**Régua de evidência (LEI, `PRODUTO` §preâmbulo):** **FATO** = medido no repo ou lido em fonte citada · **INFERÊNCIA** = projeção declarada · **NÃO CONFERIDO** = sem fonte externa nem revisor nativo. **Nada NÃO CONFERIDO vira áudio.** Toda projeção fonológica deste documento — o que o francês *produz* em espanhol — é INFERÊNCIA que exige um revisor com **francês L1 e espanhol peninsular** antes de virar áudio, mesmo quando o fenômeno de origem (o francês tem vogal nasal, o francês é oxítono) é fato de manual. Os fatos tipológicos do francês estão marcados CONFERIDO; as consequências no espanhol estão marcadas INFERÊNCIA / NÃO CONFERIDO, uma a uma.

---

## 0. A lei da portabilidade, aplicada ao caso mais próximo do catálogo

**LEI (`PRODUTO` §10, anti-padrão 9):** *porta-se a ESTRUTURA, nunca o TEXTO.* E este par é onde a lei mais pesa, porque francês e espanhol são **línguas irmãs**: ~75% do léxico é cognato, a sintaxe rima, e um agente apressado pode "derivar" o francês traduzindo o espanhol quase palavra por palavra e acertar por acidente na maior parte do tempo — **até o lugar onde a semelhança mente.** É exatamente esse o eixo do curso (§1.6, §4): a proximidade que engana.

### 0.1 O que se reusa, medido

**FATO, herdado da medição de `curso-espanha` em 2026-07-28** (a mesma biblioteca espanhola serve os três pares — é a economia de destino do `PRODUTO` §3.2 regra 5):

| camada | audioKeys únicos | destino no FR |
|---|---:|---|
| **fala espanhola** | **752** (Carmen 359 · Emilio 377 · Ivan 9 · Matilda 7) | **reuso verbatim, mesmo `audioKey`, custo de crédito ZERO** |
| **voz-guia** | **1.306** (Alice/George no EN, Juli/Thomas no DE) | **regrava inteiro em francês** — duas vozes-guia novas (uma feminina + um masculino de alertas), a definir no casting |
| **pesquisa de destino** | — | **reuso integral** de `pesquisa-espanha.md`: os fatos da Espanha são os mesmos |

> **Cuidado de leitura (mesma disciplina do `PRODUTO` §9, `chars/clipe`).** Os 752 são régua de **chave única**; a régua de **ocorrência** dá outro número. Ao citar, diga qual está usando.

**Estado do andaime deste SKU (FATO, conferido em disco 2026-07-28):** `curso-espanha-fr/src/lib/course/` hoje contém uma **cópia do projeto alemão** — `moldes.json` ainda declara `"sku": "DE → Espanha"` e os 36 `ep-*.json` trazem narração-guia **em alemão** (`ep-b11.json` = `"Anderthalb Sekunden am Tresen"`). Isso é o ponto de partida do scaffold, **não** conteúdo do par francês. A fala espanhola (`es`) dos steps é a definitiva e vem com os audioKeys do curso base; o que se re-deriva e se reescreve é a camada francesa. **Nenhuma linha de narração alemã pode sobreviver a uma parte francesa** — e o G14 (integridade voz × língua) continua PENDENTE no script, então isso é conferência humana obrigatória.

### 0.2 O que NÃO se reusa, e é o ponto

Quatro camadas se **re-derivam**, não se traduzem, porque são **ativo de PAR** (`slots.json` → `dono: par`; `PRODUTO` §3.2 regra 6):

1. **A âncora fonética e o programa motor de B01** — §1.
2. **O inventário de falso amigo de B10** — e ele **cresce** neste par em vez de encolher, ao contrário do que aconteceu no alemão (§1.6). É a inversão mais importante deste SKU.
3. **O roster de moldes inteiro** (`moldes.json`) — §2. A **ordem** muda menos que no alemão; a **camada de anotação** muda inteira (o alemão declara armadilha de leitura por molde; o francês declara **falso amigo** por molde).
4. **B04 e B05** colapsam pelo mesmo motivo do alemão — o francês é **cidadão da UE** e o conteúdo desses slots é sobre o **estatuto jurídico do comprador**, não sobre a Espanha (§4.1). O contrato não muda (o slot não some), o orçamento muda.

---

## 1. A REFORMULAÇÃO FONÉTICA — o par mais próximo do espanhol, e é isso que muda tudo

### 1.1 O francês é o comprador cuja boca já faz quase tudo — e cujo léxico o trai

O curso inglês trata o erro como **problema de boca** (o anglófono não produz a vogal pura, o tap, a jota). O curso alemão descobriu que o erro do alemão é do **olho** (a regra de leitura). **Para o francês, tanto a boca quanto o olho estão em melhor forma que em qualquer outro comprador do catálogo — e o erro migra para um terceiro lugar, o LÉXICO.**

> ### O erro nº 1 do comprador francês não é articulatório nem ortográfico. É de confiança.
> **O francês lê espanhol quase certo, pronuncia quase certo, e produz um espanhol fluente e seguro cheio de galicismos e falsos amigos — sem desconfiar de si uma única vez.** É a mesma categoria que tornou o `Sie`/`du` a armadilha mais cara do alemão (estrutura presente e mal calibrada custa mais que estrutura ausente), generalizada para a língua inteira.

Isso satisfaz o eixo *"Erro nº 1"* do `PRODUTO` §7. **Mas B01 é sobre a boca, não sobre o léxico** — e a boca do francês, embora boa, tem **três custos caros e específicos** que nenhum outro comprador tem exatamente assim: a **tônica oxítona rígida**, o apagamento de **sons finais** (a-`e` muda e o `-s`/`-r` final), e a **nasalização**. Esses três, mais o `r` uvular e o `u`=[y], são o que B01 ataca. O eixo do léxico (§1.6, §4) é ensinado ao longo do curso, grudado às cenas, exatamente como o alemão faz com as regras de leitura — **nunca numa lista lida em voz alta**, sob pena de estourar o G4.

### 1.2 A tabela, fenômeno a fenômeno

Legenda: **BRINDE** = já está na L1, custa ~0 · **BARATO** = existe em forma próxima · **CARO** = não existe ou aponta para o lugar errado · **NOVO** = o curso inglês/alemão não tem este item nesta forma.

**Marcação de evidência por linha:** os fatos tipológicos do francês são CONFERIDO (manual de fonética/fonologia do francês); toda **consequência no espanhol** é INFERÊNCIA que precisa do revisor FR-L1 + peninsular antes do áudio.

| # | fenômeno | no FRANCÊS (CONFERIDO) | consequência no espanhol (INFERÊNCIA) | veredito e slot |
|---|---|---|---|---|
| **1** | **As 5 vogais orais puras** | O francês tem monotongos puros e **não ditonga** (`i e ɛ a o ɔ u` presentes) | `no`, `sí`, `casa`, `me`, `tú` saem quase certos; zero ditongação anglófona | **BRINDE.** B01: o bloco de qualidade vocálica cai a ~1 min, como no alemão. O tempo vai para a tônica (linha 3) e para os finais (linhas 10–11) |
| **2** | **As vogais NASAIS** | O francês nasaliza vogal diante de nasal (`on ɔ̃`, `an ɑ̃`, `in ɛ̃`, `un œ̃`) e a nasal escrita pode não soar como consoante plena | Risco de nasalizar onde o espanhol **não** nasaliza: `bien`, `con`, `un`, `pan`, `jamón`, `también`, `vino`→ o `-n`/`-m` espanhol é **consoante plena, sempre**. `un` deve ser [un], não [œ̃] | **CARO, NOVO** (nem inglês nem alemão têm). Uma linha em B02 grudada a `un`/`con` e em B13 a `jamón`: *"o `n` espanhol soa sempre — a vogal antes dele não é de nariz."* **NÃO CONFERIDO: revisor.** |
| **3** | **A sílaba tônica — a oxítona rígida** | O francês **não tem acento lexical**: o acento é fixo, no fim do grupo rítmico. Ele puxa tudo para a **última sílaba** | **É o erro nº 1 articulatório do francês, e cria palavra errada:** `papa`→`papá`, `hablo`→`habló`, `esta`→`está`, `término`/`terminó`, `célebre`/`celebré`. E acha `hóla`, `grácias`, `Espáña` estranhos porque quer `holá`, `graciás`, `Españá` | **CARO, e é o motor central de B01.** Ao contrário do alemão, onde o soco foi **rebaixado** (o alemão acentua os latinismos certo: `Hospitál`), aqui o **soco é o programa que fica** — o francês desloca a tônica de **todas** as palavras. **Não existe "-o tax" francês** (ver §1.5); existe o oposto: tônica final compulsória. **NÃO CONFERIDO: revisor** para fechar a lista de pares mínimos |
| **4** | **O `h` mudo** | O francês tem `h muet`: `hôtel`, `homme`, `heure` — o `h` **nunca** soa | `hola`, `hotel`, `hay`, `hecho`, `ahora` saem naturais, com `h` mudo | **BRINDE — e aqui o francês ganha exatamente onde o alemão perde.** O alemão diz "Hai" por `¿Hay…?`; o francês diz `¿Hay…?` certo de graça. **Zero tempo de áudio.** É o primeiro sinal de que a tabela de leitura alemã **não porta** |
| **5** | **O encadeamento / a liaison** | O francês **liga as palavras** (enchaînement, liaison) e **não dá golpe de glote** antes de vogal | O espanhol ressilabifica obrigatoriamente (`los otros`→[lo-so-tros], `el hotel`→[e-lo-tel], `una hora`); o francês já faz isso | **BRINDE — o problema-motor nº 1 do alemão (o `Knacklaut`) NÃO existe para o francês.** O programa do deslize (que o alemão criou contra o golpe de glote) **não é necessário aqui.** Ressalva de reviso: a liaison francesa às vezes insere consoante (`les_amis`→[z]); conferir se o francês insere [z]/[t] espúrio em `más o menos`. **NÃO CONFERIDO** |
| **6** | **O `u` = [y]** | O francês escreve `u` = **[y]** (vogal anterior arredondada: `tu`, `lune`), som que o espanhol **não tem** | Risco de dizer [y] onde o espanhol quer [u]: `mucho`→"mücho", `tú`→[ty], `una`, `gusta`, `puedo`, `muy`, `un` (+ nasal) | **CARO, NOVO.** O alemão não tinha isto (o `u` alemão é [u]). O programa 2 (palma) ganha um alvo francês: *"o `u` espanhol é de fundo de boca, como em `tour`, nunca o `u` de `tu`."* **NÃO CONFERIDO: revisor** |
| **7** | **O `r`** | O francês padrão é **uvular [ʁ]** (como o alemão); o `r` francês final tende a enfraquecer | O espanhol quer o tap [ɾ] (`pero`, `caro`) e a vibrante; sem âncora no francês padrão | **CARO, como no alemão.** O programa 4 (flick) fica com **peso alto** e a dispensa do trill vale igual. Âncora regional possível: o francês do Midi teve `r` apical — oferecer *"se você é do Sul, talvez já tenha"*, nunca pressupor. **NÃO CONFERIDO: revisor** |
| **8** | **O `j` e o `g`+e/i** | O francês `j` = **[ʒ]** (`je`, `jour`) e `g`+e/i = **[ʒ]** (`gente`→[ʒ]); o francês **não tem [x]** | `jamón`→"zhamón", `gente`→"zhente", `girar`, `jefe`, `ajo`→"azho". O som velar/uvular [x] do espanhol peninsular **não existe** no francês | **CARO — e aqui o francês é PIOR que o alemão.** O alemão tem o som [x] (`Bach`) e erra só a letra; o francês **não tem o som** e produz [ʒ]. Não é regra de leitura, é **som novo**. Uma linha + um pouco de treino, grudada a `jamón` em B13 (frase de alergia — errar é caro). Âncora possível: aproximar pelo `r` uvular deles, já que é o mesmo ponto. **NÃO CONFERIDO: revisor** |
| **9** | **O `ch` = [ʃ]** | O francês `ch` = **[ʃ]** (`chat`, `chien`), nunca [tʃ] | `mucho`→"musho", `noche`→"noshe", `chico`→"shico", `hecho`, `chaqueta`, `derecha`. O espanhol quer [tʃ] (o "tch" de "tchau") | **CARO, NOVO, e é a leitura-armadilha francesa mais limpa.** Distinta do alemão (que lia `ch` como [x]). Uma linha grudada a `noche` (relógio de I01) e a `mucho`: *"o `ch` espanhol é o `tch` de `Tchad`, com um toque na frente — não o `ch` de `chat`."* **NÃO CONFERIDO: revisor** |
| **10** | **O ritmo — silábico** | O francês é **silábico** (isócrono de sílaba), como o espanhol, e **não** comprime as átonas como o inglês/alemão | O ritmo espanhol de sílabas iguais **vem de graça** | **BRINDE, e é o maior que o alemão NÃO teve.** O programa 1 (metrônomo) fica **leve** para o francês — ao contrário do alemão, onde ele ficou pesado (o alemão é acentual e reduz a schwa). **Não devolva esse tempo ao roteiro:** ele paga a tônica (linha 3). Ressalva: ver linha 11 |
| **11** | **O `e` mudo final e o apagamento de finais** | O francês apaga o **`e caduc`** final (`petite`→[ptit]) e **emudece consoantes finais** (`-s`, `-t`, `-r`, `-x`: `vous`→[vu], `petit`→[pti], `trois`→[tʁwa]) | **Dois custos NOVOS que o alemão não tinha:** (a) apagar o `-e` final: `noche`→"nosh", `tarde`→"tard", `grande`→"grand", `siete`→"siet"; (b) **apagar o `-s` e o `-r` finais:** `gracias`→"gracia", `dos`→"do", `más`→"ma", `por favor`→"por favó", `hablar`→"hablá" (o apagamento do `-r` é **mais forte no infinitivo**, por analogia com o `-er` francês mudo; **menos previsível** em `señor`/`favor`, cujo `-r` o francês às vezes mantém) | **CARO, NOVO.** O `-s` apagado mata o **plural** e a inteligibilidade (`más`→"ma", `dos`→"do"). O programa 2 (palma) muda de alvo: *"segure o último som — a vogal final e o `-s` que fecham a palavra existem, e o espanhol os pronuncia todos."* Nota irônica para A01: **o apagamento francês do `-s` imita o `-s` aspirado andaluz/canário** — o francês vai *soar* meridional. **NÃO CONFERIDO: revisor** |
| **12** | **`ñ`** | O francês tem **[ɲ]** nativo: `agneau`, `montagne`, `gagner` | `España`, `niño`, `mañana`, `señor` → perfeito | **BRINDE, melhor que o alemão** (que aproximava por [nj]). Zero tempo |
| **13** | **`b` × `v`** | O francês **distingue** `b` [b] de `v` [v] (labiodental) | `vino`→[vino] com [v], `vale`→[val], `vaso`. O espanhol não distingue (tudo [b]/[β]) | **CUSTO LEVE — e MATA a gag alemã.** O alemão lia `v`=[f] (`vino`→`fino`, um xerez pedível: a gag recorrente do SKU DE). O francês diz [v], que é **entendido** — `vino` continua `vino`. **A gag `vino`×`fino` NÃO porta.** O par mínimo do francês está em outro lugar (§1.4). Uma nota curta: *"o `v` espanhol soa como `b`"* — receptivo, baixo custo. **NÃO CONFERIDO** |
| **14** | **A distinción / `z` / `c`+e,i / `s` intervocálico** | O francês **não tem [θ]**; `z`=[z], `c`+e,i=[s]; e o francês **sonoriza `s` intervocálico** → [z] (`rose`→[ʁoz]) | `cerveza`→"cervesa/cerveza", `gracias`→"grasia(s)", `plaza`; e `casa`→"kaza", `cosa`→"koza", `mismo`, `pasaporte`→"pazaporte" | **CARO, mas menos que no alemão** (que produzia [ts], ininteligível). O francês produz [s]/[z] — inteligível. **Decisão de produto igual à do alemão:** modelo em **distinción** ([θ] é o alvo), **[s] aceito e de graça** (as Canárias são seseo, e §3.1 mostra que o francês é menos canário que o alemão, mas o seseo continua aceito), **[z] proibido** — o `s` sonoro do francês em `casa`→"kaza" é o eixo que dói. **NÃO CONFERIDO: revisor** |
| **15** | **`ll` / `y` (yeísmo)** | O francês `ll` é [l] (`ville`) ou [j] (`fille`); `y`=[i]/[j]. Sem [ʝ] estável | `llave`→"lave" ([l]) ou "yave" ([j]); `calle`, `pollo`, `tortilla` | **BARATO/variável.** O alvo yeísta [ʝ]~[j] às vezes sai por `fille`→[j], às vezes vira [l] por `ville`. Sem âncora limpa como o `ja` alemão. Uma linha: *"`ll` e `y` soam como o `y` de `yaourt`."* **NÃO CONFERIDO: revisor** |
| **16** | **`qu`** | O francês `qu` = **[k]** (`qui`, `que`, `quand`) | `quería`→[k]eria, `¿qué?`, `queso`, `¿quién?` → todos [k], certos | **BRINDE — e aqui o francês ganha de novo onde o alemão perdia.** O alemão lia `qu`=[kv] (`quería`→"kveria"): a segunda gag alemã. Para o francês, `quería` sai limpo. **Mais uma prova de que a tabela de leitura alemã não porta.** Zero tempo |
| **17** | **Consoante final sonora** | O francês emudece finais (linha 11); não há ensurdecimento fonológico ativo de `-d` | `Madrid`→ o francês tende a **apagar** o `-d`, não a ensurdecê-lo | **Diferente do alemão:** lá o `-d` ensurdecido era BRINDE (`usted`→"ustet" bate com o peninsular). Aqui o francês **apaga** (`usted`→"usté", `ciudad`→"ciudá") — o que, curiosamente, **coincide com o espanhol coloquial peninsular** (`usté`, `Madrí`). **BARATO/quase-brinde receptivo**, registrar no `aprofundar` |

**Saldo de B01 (INFERÊNCIA sobre a estrutura de `ep-b01`):** saem o bloco longo de vogais (brinde), o encadeamento (brinde), o `h`/`qu`/`ch`-como-leitura-de-tabela do alemão (o francês tem outro conjunto). Entram/engordam: **a tônica (o soco vira central)**, **os finais apagados (`-s`, `-e`)**, **o `u`=[y]**, **a jota como som novo** e **o `r`**. B01 continua com **4 programas motores** e ~16 min — outra fonética, mesmo formato.

### 1.3 O programa motor de B01 — os quatro do francês

**LEI (`PRODUTO` §3.4):** *toda língua ganha uma mão em B01; o gesto tem que **trair** o erro, não ilustrar a regra.* O número de programas não é lei; o componente é ativo de par e o `GestoRitmo.svelte` do EN **não se reusa como está**.

| # | programa | movimento | erro que ele trai | vs. EN/DE |
|---|---|---|---|---|
| **1** | **metrônomo** | batidas iguais | (pouco) — o francês já é silábico | **MANTIDO, peso LEVE.** Ao contrário do alemão, o francês não comprime átonas. Absorve a nota de que a tônica é mais **forte**, não mais longa |
| **2** | **palma plana (hold)** | palma segura na **última** sílaba | **comer o final:** o `-e` mudo, o `-s` do plural, o `-r` do infinitivo — e o `u`=[y] no meio | **MANTIDO, alvo trocado.** No EN travava a ditongação; no DE, a átona-schwa; aqui, o **apagamento de finais** e o `u` |
| **3** | **o soco** | soco na sílaba tônica | **a oxítona compulsória:** o francês soca sempre a última; o soco tem de cair onde o espanhol manda (`PA-pa` × `pa-PÁ`) | **PROMOVIDO a central.** É a inversão exata do alemão: lá o soco foi rebaixado (o alemão acentua certo); aqui é o programa que carrega o erro nº 1 |
| **4** | **flick** | um toque | o `r` uvular e a jota [ʒ]/[x] (mesmo ponto de articulação) | **MANTIDO, peso ALTO.** O flick pode fazer trabalho duplo: o tap do `r` e a chamada de atenção para a jota, que sai do mesmo fundo de boca |

**A troca declarada, para ninguém ler como perda:** *sai o **deslize** (o programa que o alemão criou contra o golpe de glote), entra o **soco** de volta ao centro.* O francês encadeia naturalmente (§1.2 linha 5), então o deslize **não tem erro para trair** neste par. Um programa sai porque o erro dele não existe no francês; o soco volta ao centro porque a oxítona é o erro nº 1. **Isso é derivação, não herança.**

**O reuso de A01 sobrevive e muda de sentido:** enquanto a voz espanhola encadeia a fala rápida, o francês **já ouve o encadeamento como natural** (ele faz liaison) — então A01, para o francês, não é sobre "descolar as palavras coladas" (isso era o alemão), é sobre **o que some no fim** (o `-s` aspirado andaluz/canário), que é justamente o som que o próprio francês tende a apagar. É a virada de A01 neste par: *"eles comem o `-s` no fim como você — por isso vocês se entendem, e por isso você tem que devolver o `-s` quando é você que fala."*

**Componente:** arquivo novo (`GestoRitmoFR.svelte` ou equivalente), com os três requisitos duros do original — trair o erro, `role="img"` + `aria-label`, `prefers-reduced-motion` respeitado.

### 1.4 A gag recorrente — `vino`×`fino` não porta, e o par mínimo francês é outro

**ORIENTAÇÃO, com o motivo escrito.** O INV-17 pede que o erro fatal previsível seja **piada antes de acidente**. A gag alemã (`v`=[f], `vino`→`fino`) **morre aqui** (§1.2 linha 13): o francês diz [vino]. Os candidatos franceses, em ordem de força, e todos **NÃO CONFERIDOS contra o manifesto** (a fala espanhola nova é a única linha de crédito espanhol deste SKU — §5 — e não se escreve gag fingindo que o clipe existe):

1. **`embarazada` — a gag icônica do par, e é social/médica, não de balcão.** Uma francesa que quer dizer *"que embaraço/que vergonha"* (`embarrassée`) e diz `estoy embarazada` **anuncia que está grávida**. É o falso amigo mais famoso do espanhol-para-francófono, entrega uma coisa errada real, é falsificável e engraçado. **Casa em I07/B17/social.** É o equivalente funcional do `vino`/`fino` alemão: a piada que ancora o eixo do curso (o falso amigo — §1.6). Limitação honesta: é de gênero (só morde a compradora) e não é cena de balcão diária.
2. **`largo` no café — o candidato de balcão diário.** `largo` = **comprido** em espanhol; `large` = **largo/largura** em francês. Um `café largo` na Espanha é um café **mais aguado/estirado** (coisa real e pedível); o francês pede pensando "grande/largo" e recebe outra bebida. Falsificável na primeira manhã, entrega a coisa errada — o desenho exato do `vino`/`fino`. **Casa candidata em B11/I02.**
3. **`demandar` no balcão.** `demandar` = **processar** (jurídico) em espanhol; `demander` = **pedir** em francês. O reflexo de dizer `le demando un café` ("eu lhe *peço* um café", pensa o francês) sai como *"eu o processo por um café"*. Forte e engraçado; ressalva: o francês provavelmente usa `quería`/`pedir`, então o reflexo pode não disparar tanto. Bom item de apoio, não de bandeira.

**Recomendação:** ancorar o eixo com **`embarazada`** como a piada memorável (icônica, alto recall) e usar **`largo`** como a gag recorrente de balcão, se o clipe existir ou puder ser gravado. **A escolha final do par de balcão e a conferência de qual clipe está no acervo dos 752 são pendência de §5 — não presuma.**

### 1.5 O que os cursos EN e DE fazem e este NÃO deve fazer

- **Não portar a tabela de leitura alemã.** `h`, `qu` e o `v`=[f] são **brindes ou não-problemas** para o francês (§1.2 linhas 4, 16, 13). Copiá-los é o anti-padrão 9.
- **Não escrever o "-o tax" (GUIRI ALERT do inglês) nem sua ausência alemã.** O francês não diz `HOSpital` (inglês) nem já acerta `Hospitál` (alemão): ele diz `hospitál` **também**, mas por outro motivo (a oxítona), e a cena é a mesma por acidente. O enquadramento é **a tônica móvel**, não o latinismo.
- **Não chamar a distinción de "brinde" nem de [ts]-catástrofe.** Para o francês é custo médio: [s]/[z], inteligível (§1.2 linha 14).
- **Não prometer que "as vogais são de graça" sem ressalva.** São, na qualidade e no ritmo; **não** nos finais (o `-e` mudo, o `-s` apagado — linha 11) nem no `u` (linha 6).
- **Não usar o deslize contra golpe de glote.** O francês não dá golpe de glote (§1.2 linha 5).
- **Não portar `vino`×`fino`.** Ver §1.4.

### 1.6 B10 — o inventário de falso amigo CRESCE, e vira o eixo

**Esta é a inversão mais importante do SKU, e é o espelho exato do que aconteceu no alemão.** No alemão, B10 quase esvaziou (`embarazada` não existe em alemão, `Karte`/`Menü` batem certo): o inventário de falso amigo do inglês **não portava** e havia pouco para repor. **No francês acontece o oposto: como as línguas são irmãs, os falsos amigos se MULTIPLICAM.** B10 não é reescrita — **é NOVA e mais densa que a do inglês.**

`slots.json` marca B10 `dono: par` e `condicional` (escrita transparente → placa de falso amigo e convenção). Os falsos amigos FR→ES, na cena de viagem, em ordem de perigo (**todos NÃO CONFERIDOS — precisam de revisor FR-L1; a lista é de candidatos, não manifesto de áudio**):

| falso amigo | o francês vê/quer dizer | o que significa em espanhol | cena / consequência |
|---|---|---|---|
| **`embarazada`** | `embarrassée` = envergonhada | **grávida** | I07/B17 — anuncia gravidez. A gag do §1.4 |
| **`constipado/a`** | `constipé` = com prisão de ventre | **resfriado** | **B17, médico, perigoso** — pede o remédio errado na farmácia. Sobrevive do inglês/alemão e é ainda mais traiçoeiro no francês por ser cognato quase idêntico |
| **`salir` / `salida`** | `salir` = **sujar**; `sale` = sujo | **sair / saída** | B09/B08 — o francês hesita diante de `SALIDA` (associa a "sujo") ou evita dizer `salir`. Receptivo, alta frequência em placa |
| **`largo`** | `large` = largo, largura | **comprido** | B11/B15/B16 — `café largo`, `cama larga`. A gag de balcão do §1.4 |
| **`nombre`** | `nombre` = número | **nome** | B05/B16 — `una reserva a nombre de…`; o francês pode dar/entender um número. Cena de check-in |
| **`demandar`** | `demander` = pedir | **processar (jurídico)** | B11/B12 — "peço" vira "processo". Item de balcão |
| **`quitar`** | `quitter` = deixar/abandonar | **tirar/remover** | B15/B16 — `quítese`, `¿le quito esto?` |
| **`atender` / `esperar`** | `attendre` = esperar; `espérer` = ter esperança | **atender = servir; esperar = aguardar** | B11 — `¿me atiende?` (me serve) o francês lê "espere"; e `espero` (aguardo) o francês cruza com "tenho esperança" |
| **`entender`** | `entendre` = **ouvir** (e, arcaico, compreender) | **compreender** (ouvir = `oír`) | **B03/B08/farmácia — alto valor.** `No entiendo` é a frase de sobrevivência nº 1 do curso; o francês pode cruzá-la com "não ouço" e, pior, **confiar** que `entender`=ouvir e não pedir que repitam. Receptivo E produtivo, altíssima frequência — o briefing pediu este e ele estava fora |
| **`en absoluto`** | `absolument` = absolutamente (sim) | **de jeito nenhum (não)** | I05/M2 receptivo — **sentido oposto.** `—¿Te molesta? —En absoluto` = "não me incomoda nada"; o francês entende "sim, muito". Item de conversa |
| **`gato`** | `gâteau` = bolo | **gato** | B12/café — pede um "gato" (bolo, pensa) e pede um felino. Meio fonético (`gato`/`gâteau`), meio léxico |
| **`vaso`** | `vase` = vaso de flor | **copo** | B11 — `un vaso de agua`; o francês pensa "jarro/vaso" |
| **`contestar`** | `contester` = contestar/disputar | **responder** | apoio, B03/social |

**E o brinde-espelho, que o alemão também teve mas por outro motivo:** `la carta` = **`la carte`** francês (que **é** o cardápio!) e `el menú` = **`le menu`** francês (que **é** a refeição fechada, `menu du jour` = `menú del día`). **Os dois batem certo** — o falso amigo diário do inglês (`carta`≠"card") **não existe** para o francês. `B12`/`I03` economizam o aviso. Registrar como brinde, não gastar áudio.

**Consequência:** **B10 é NOVA e mais rica que a do inglês** — a linha de orçamento do slot é "parte nova com inventário grande", não "reescrita". **É aqui que o eixo do curso mora fisicamente** (§4).

---

## 2. O ROSTER DE MOLDES SE RE-DERIVA — mas a ordem muda MENOS que no alemão

**LEI (`PRODUTO` §3.2 regra 5, `moldes.json` → `_regras.ativo_de_par`):** *o roster é ativo de PAR; a cada comprador novo ele se RE-DERIVA, não se traduz.* O que muda é o **preço** de cada molde, e preço muda ranking, encaixes e tempo de ensino.

### 2.1 A pergunta do briefing: o `Quería` cai como caiu no alemão? — Só em parte.

**O francês tem `tu`/`vous` nativo, como o alemão tem `du`/`Sie`.** Então o argumento que fazia `QUERIA` ser o nº 1 no inglês — *"é o único que NÃO codifica interlocutor; o anglófono decide a decisão tú/usted no escuro porque o inglês perdeu o T/V no século XVII"* — **também perde força aqui**, pelo mesmo motivo do alemão: o francês **tem** a máquina do tratamento e a roda todo dia.

**MAS a calibragem francesa é diferente da alemã, e o resultado no roster é diferente:**

- **O alemão erra num sentido só e com força:** `Sie` é o default rígido com qualquer adulto, a transição para `du` é um evento marcado, e ele mantém `usted` com o garçom jovem durante doze dias — **frieza consistente por convicção.** Por isso o alemão promoveu `ME-PONE` a nº 1: a recalibragem `Sie`≠`usted` era o erro mais caro dele.
- **O francês erra de forma mais mole e BIDIRECIONAL.** O `vous` francês também é default com estranho/garçom/balconista (França é cultura de vouvoiement), então há **o mesmo excesso de `usted`** — mas atenuado: o francês passa a `tu` com mais facilidade que o alemão (mais jovem, mais casual, e o Midi mediterrâneo é menos formal), e — este é o ponto — **o erro nº 1 do francês não é o tratamento, é o léxico** (§1.1). Há ainda um segundo sentido de erro que o alemão não tem: por **proximidade cultural e por não estudar** (§3.2), o francês pode **sub-formalizar** — cair no `tú`/na familiaridade em balcão institucional onde o `usted` é devido.

> **O alemão decide o tratamento com confiança e erra num sentido. O francês decide o léxico inteiro com confiança e erra em toda parte — e o tratamento, para ele, é um erro de segunda ordem, mole e nos dois sentidos.**

**As três consequências:**

1. **`QUERIA` NÃO cai tanto quanto no alemão.** Perde o mesmo argumento de venda (a fuga da decisão tú/usted não é benefício para quem tem a máquina), mas conserva os outros (brevidade, registro local, abre qualquer balcão) — e como o tratamento **não é** o erro nº 1 do francês, não há um `ME-PONE` puxando `QUERIA` para baixo com a mesma força. **`QUERIA` fica em nº 1 ou nº 2**, com o argumento reescrito (§2.3). Diferença declarada do alemão, onde caiu a nº 3.

2. **`ME-PONE` sobe, mas MENOS que no alemão.** A recalibragem `vous`→`usted` é real e `ME-PONE` (`¿me pone?`/`¿me pones?`) é o lugar barato de instalá-la — mas o beat é **mais leve** (o francês recalibra com menos custo) e **bidirecional** (inclui a advertência inversa: no banco/Guardia Civil/médico o `usted` é o certo, contra a familiaridade excessiva). **`ME-PONE` a ~nº 2/nº 3**, não a nº 1.

3. **A recalibragem `vous`≠`usted` entra como beat, NÃO como molde e NÃO como pedágio** — igual ao alemão: falha em P1 (buraco preenchido por decisão do sistema) e o acabamento de tratamento é dizível-sem-decidir no espanhol turístico. **X-POLIDEZ continua NÃO ativada; 36 partes exatas.** A diferença é o conteúdo do beat: bidirecional, e subordinado ao eixo do falso amigo.

**Nota estrutural:** a re-derivação francesa **muda menos a ORDEM** e **muda mais a CAMADA DE ANOTAÇÃO** — onde o alemão declara `armadilhas` de leitura por molde, o francês declara `falsos_amigos` por molde (§2.3). É a mesma prova/contraexemplo do alemão por outro caminho: mudou a L1 inteira, e ainda assim nenhum molde entra ou sai.

### 2.2 Molde a molde — o veredito

| molde | preço para o FRANCÊS | veredito |
|---|---|---|
| **QUERIA** | médio; sem galicismo perigoso na casca | **FICA. nº 1 ou nº 2** (não nº 3 como no DE). Argumento novo: brevidade + local; sai a fuga da decisão |
| **ME-PONE** | barato no mecanismo (`vous`/`tu` nativo) | **FICA, SOBE a ~nº 2/3** (não nº 1). Beat de recalibragem **leve e bidirecional** |
| **HAY** | **BARATÍSSIMO.** `il y a` = `hay` traço a traço; e `hay` começa com **`h` mudo, que o francês acerta de graça** (§1.2 linha 4) | **FICA, entre os mais baratos.** Sem a nota do ⟨h⟩ do alemão — aqui o ⟨h⟩ é brinde. Segue o contorno canônico do subjuntivo |
| **PUEDO** | **BARATO, e mais que no alemão.** `pouvoir` cobre "poder" e "ter licença" num verbo só — o francês **não separa** `können`/`dürfen` | **FICA.** A dispensa alemã (`können`/`dürfen`, "puedo cobre os dois") **encolhe quase a zero** — `pouvoir` já é um verbo só. Delta declarado do DE |
| **SIN-CON-PARA** | **O MAIS BARATO.** `sans`/`avec`/`pour` um-a-um; `para llevar` = `à emporter` | **FICA.** ⚠️ **Perde `sin conversión`** (§3.3): a França é Eurozona, cartão em euros, **o DCC não existe** — igual ao alemão. Repõe com `con tarjeta`, mas o argumento é mais fraco que no DE (o francês já usa cartão — §3.3) |
| **LLEVA** | barato na estrutura (`contient`/`il y a`) | **FICA, B13.** A jota de `jamón` sai [ʒ] ("zhamón") — som novo, não só letra (§1.2 linha 8); frase de alergia, custo alto de errar |
| **DONDE** | **BARATO, par de graça.** `où est le…?` × `où y a-t-il un…?` — o contraste definido×qualquer é nativo | **FICA, B08.** O tempo do par colapsa e vai para a escotilha/escuta, como no DE. Falso amigo de apoio: `salida`/`salir` (§1.6) |
| **ME-PUEDE** | **BARATO.** `pouvez-vous me…?` = `¿me puede…?` | **FICA.** Heroína do kit anti-pânico. Falso amigo: `atender`≠`attendre` (§1.6) |
| **OTRA** | **BARATÍSSIMO.** `encore un(e)` = `otro/otra`; `encore une bière` é a frase de balcão francesa | **FICA.** Gênero: o francês tem **2 gêneros** (un/une) mais próximos que os 3 do alemão — **mas `le`/`la` ≠ `el`/`la`** em muitas palavras (`la leche`=le lait, `el color`=la couleur, `la sangre`=le sang). Mesma nota "cole o artigo, não traduza o seu", com 2 gêneros |
| **YA-ESTA** | **BARATO.** `c'est déjà payé/fait/réservé` — `déjà`=`ya`, particípio no lugar | **FICA, fechado.** `hecho` carrega o `ch`=[ʃ] (§1.2 linha 9), não o ⟨ch⟩ alemão |
| **SOY-ESTOY** | ser/estar **igual de opaco** (o francês só tem `être`) | **FICA, FECHADO.** **Carrega a carga de falso amigo mais pesada do roster:** `estar` + adjetivo é onde moram `estoy embarazada` (§1.4/§1.6) e `estoy caliente` (`j'ai chaud`→"tengo calor", não "estoy caliente"). Brinde: `Soy vegetariano` sem artigo, como `Je suis végétarien`. Armadilha que vira **brinde**: o francês diz `allergique **à**`, cuja preposição **coincide** com o espanhol `alérgico **a**` — onde o alemão errava com `gegen`. **NÃO CONFERIDO: revisor** |
| **ME-HE-DEJADO** | **BARATO, brinde grande.** O francês falado usa `passé composé` com `avoir` (`j'ai laissé/oublié`) — mesmo desenho do `he dejado` peninsular | **FICA, B07.** O bloco de gramática encolhe a uma linha, como no DE. Mas ver I06 na tabela: o francês **superusa** o perfeito (quase não usa `passé simple`), então `ayer` → dirá `he ido` onde o espanhol quer `fui` — trap forte |
| **APRECIACION** (social) | estrutura barata; **e o REGISTRO é mais barato que no alemão** | **FICA, I07.** O alemão achava o `-ísimo` exagero (fala contida). **O registro francês do elogio à comida é caloroso** e a mesa é assunto de conversa (cultura gastronômica) — ⚠️ **G6:** atribuir ao registro/à mesa, **nunca** escrever "o francês é expressivo"; mais perto do registro espanhol, a permissão custa menos. O risco vira o **falso amigo dentro do elogio** (`rico`=gostoso ≠ `riche`) e a gag `embarazada` mora ao lado |
| **ELECCION** (social) | **BARATO.** `que me recommandez-vous: A ou B?`; `recomendar`=`recommander` | **FICA, I03.** Sem mudança de linha |
| **PREFERENCIA** (social) | **BRINDE.** A inversão de `gustar` é nativa do francês via **`plaire`**: `ça me plaît` = experienciador no dativo, coisa como sujeito | **FICA, I05, mais aberto.** Igual ao alemão (`gefallen`), com a âncora `plaire` — INV-7, cinco palavras, sem jargão. Tempo liberado vai para encaixes |

### 2.3 A lista do que muda — a entrega pedida

**Edições a fazer no `moldes.json` do FR (que hoje é uma cópia do arquivo alemão — §0.1):**

1. **`sku`:** `"DE → Espanha"` → **`"FR → Espanha"`**. E apagar o `_changelog` alemão; escrever o francês do zero.
2. **Campo novo `falsos_amigos` por molde** (substitui o `armadilhas` de leitura do alemão como a camada que faz este roster ser do PAR). Cada molde declara os falsos amigos que carrega na casca ou nos encaixes: `SOY-ESTOY` → `embarazada`, `caliente`; `ME-PUEDE` → `atender`, `entender` (o `no entiendo` do kit anti-pânico); `DONDE` → `salir`/`salida`; `LLEVA`/`SIN-CON-PARA` → `largo` no encaixe; etc.
3. **Camada fonética por molde:** trocar as 7 armadilhas de leitura alemãs pelo conjunto francês (tônica oxítona, `-s`/`-e` finais, `u`=[y], `j`=[ʒ], `ch`=[ʃ]) — e **remover** as notas de `h`, `qu`, `v`=[f], que são brindes/não-problemas do francês.
4. **Ordem:** `QUERIA` fica **nº 1 ou nº 2** (não nº 3); `ME-PONE` a **~nº 2/3** (não nº 1); `HAY` e `SIN-CON-PARA`/`OTRA` seguem baratíssimos. **A ordem muda MENOS que no alemão — e isso é resultado, não preguiça:** a força que reorganizou o roster alemão (a recalibragem cara) é mais fraca aqui.
5. **`QUERIA.porque_o_numero_1`:** reescrever. Sai a fuga da decisão tú/usted; entra brevidade + local. **Não traduzir a frase antiga nem a alemã.**
6. **`ME-PONE`:** recalibragem `vous`→`usted` como beat **leve e bidirecional** (inclui o `usted` devido em banco/médico contra a sub-formalização).
7. **`PUEDO`:** a dispensa `können`/`dürfen` **encolhe** — `pouvoir` cobre os dois nativamente; manter uma nota mínima, não o bloco alemão.
8. **`SIN-CON-PARA.exemplos`:** **remover `sin conversión`** (DCC inexistente — §3.3), repor com `con tarjeta`, mas com o argumento francês (cartão já é hábito — mais fraco que o alemão).
9. **`SOY-ESTOY`:** anotar o brinde novo — `alérgico **a**` = `allergique **à**` (o francês **acerta** a preposição, onde o alemão errava com `gegen`); e a carga de falso amigo (`embarazada`, `caliente`).
10. **`ME-HE-DEJADO`:** brinde do `passé composé` com `avoir`; e anotar em I06 o trap `ayer` → `fui` ≠ `he ido` (o francês superusa o perfeito).
11. **`APRECIACION`:** o problema **não** é permissão de volume (o francês é expressivo), é o falso amigo dentro do elogio.
12. **`PREFERENCIA`:** âncora `plaire`; abrir encaixes.
13. **`OTRA`:** nota de gênero com 2 gêneros e o `le`/`la`≠`el`/`la`.
14. **`cortados`:** `Me gustaría` **continua cortado**, motivo reescrito de novo — para o francês o problema não é o acolchoamento (alemão) nem o registro britânico; corta-se por ser mais longo que `quería` e porque o equivalente `Je voudrais` traduz para um registro um tom acima. `GRAU` e `subjuntivo em subordinada` seguem cortados (motivos de destino/língua-alvo).
15. **`ensinados_mas_nao_declarados`:** a lista dos cinco **porta inteira** (motivos de teto e cena). O que muda de preço: `¿Tengo que…?` = `Est-ce que je dois…?` (não tão um-a-um quanto o `Muss ich…?` alemão, mas próximo) — reabrir teto só com G9 abaixo do piso, com dado.
16. **Teto:** **12 operacionais + 3 sociais = 15.** Não mexe.
17. **Nenhum molde entra, nenhum sai.** Os quinze sobrevivem à re-derivação — a evidência mais forte de que a espinha está certa.

---

## 3. O DELTA CULTURAL — o vizinho que atravessa a fronteira e não se prepara

> **Aviso (o mais importante):** `PRODUTO` §5.3 e o portão **G6** proíbem **adjetivo de povo**: gentílico + cópula = **0 ocorrências.** *"Os franceses são…"* é a categoria de frase que o produto existe para não escrever. Tudo abaixo é **comportamento com consequência**, na Ficha de 6 Campos, e **todo item traz onde a regra não vale.** Onde falta o campo 6, o item está marcado incompleto e **não vai ao áudio.**

### 3.1 Quem é este comprador (FATO, com fonte)

| medida | valor | fonte |
|---|---|---|
| chegadas francesas à Espanha, 2024 | **12,9 milhões (2º mercado emissor, à frente da Alemanha, 11,9 M)** | INE / FRONTUR, dez. 2024, dados provisórios |
| chegadas francesas, 2025 | **~12,8 milhões (−1,0% vs. 2024), segue 2º** | INE / FRONTUR, ano 2025, dados provisórios |
| destino, por comunidade (2024) | **Cataluña 30% · C. Valenciana 17% · Andalucía 11%** — e os franceses são **19,6%** de todos os internacionais que a Catalunha recebe | Turespaña, ficha executiva Francia (dados FRONTUR/INE) |
| tipo de destino | **costa 44% · campo 28% · cidade 24%** | idem |
| **meio de chegada** | **65% se desloca por CARRETERA (carro)** | Turespaña, ficha executiva Francia |
| viagens internacionais dos franceses, 2024 | 35,7 milhões (+11,5% a/a) | idem (contexto) |
| proficiência em inglês (comprador) | **França 38º, 539, faixa MODERADA** — e a França **acabou de ultrapassar a Espanha** em 2025 (+11 posições); sub-nota de *fala* **456** (baixa) | EF EPI 2025 |
| proficiência em inglês (anfitrião) | **Espanha ~faixa moderada, ~540** — praticamente **empatada** com a França | EF EPI (2024/2025) ⚠️ reconferir a posição exata da Espanha em 2025 |

**A leitura de produto, em quatro linhas (INFERÊNCIA declarada sobre os FATOS acima):**

1. **É um comprador de LITORAL CONTINENTAL, não de arquipélago.** Onde o alemão está em UM arquipélago (Baleares 42%), o francês está na **costa mediterrânea continental que se alcança de carro**: Catalunha (30%) e Valência (17%) primeiro, a fronteira logo ali. **Isso muda o que "a Espanha" significa em cada cena:** não é o resort de ilha, é a Costa Brava, a estrada, a segunda casa, a travessia de fim de semana.

2. **É vizinho e frequente — 65% chega de carro.** O alemão pega avião e fica ~8 noites concentradas; o francês **atravessa a fronteira de carro**, muitos têm casa, muitos repetem. Isso favorece — mais ainda que no alemão — os slots de **relação continuada** (I05, I08, A08) e o de **estrada/aluguel de carro** (B07, e a ZBE de veículo é pendência de §4.1). **NÃO CONFERIDO:** a taxa de repetição/segunda residência em fonte primária — sustentada pela proximidade, pelo carro e pela concentração litorânea, não medida.

3. **A fronteira é CULTURALMENTE contígua.** Catalão fala-se no **Rosselló/Roussillon** francês (Pyrénées-Orientales); o **basco** é a mesma língua dos dois lados. Para este comprador, **catalão e basco não são línguas estrangeiras — são línguas de parentesco transfronteiriço.** Isso reescreve **A05** (§4.3): o francês do Sul pode ter herança catalã; o `Bon dia` não é exótico, é quase de casa.

4. **Ele NÃO tem escotilha de fuga — e este é o delta mais forte contra o alemão.** O alemão fala inglês em nível **muito alto** e tem **rede em alemão** em Mallorca: dois idiomas de fuga. O francês fala inglês em nível **moderado** (EF 38º, e *fala* em 456 — baixo), **empatado com o anfitrião espanhol**, e **não tem rede em francês** fora da faixa fronteiriça/catalã. **O francês está sozinho com o espanhol de um jeito que o alemão não está** — o que **fortalece a promessa do produto** e **muda o tom** (§3.2).

### 3.2 O TOM que este par pede — "vale a pena tentar", não "você vai se virar"

**Comportamento com consequência, com fonte (EF EPI + o meio de chegada), nunca adjetivo de povo:**

*SINAL:* o comprador chega esperando se comunicar em francês, ou desistindo de tentar antes de começar, porque atravessou a fronteira num fim de semana sem se preparar (65% de carro, viagem curta e frequente — FATO) e porque o inglês dele é moderado, não uma tábua de salvação (EF 38º, fala 456 — FATO).
*O QUE É ALI:* fora da faixa catalã e dos balcões muito turísticos, **o espanhol médio não atende em francês, e o inglês dos dois lados é mediano** — a conversa acontece em espanhol ou não acontece.
*O QUE VOCÊ FAZ:* tentar. Uma frase curta em espanhol muda o balcão inteiro.
*O QUE MELHORA (ganho):* onde o alemão em Mallorca "se vira" no circuito em alemão, o francês que tenta **entra num lugar onde ninguém ia atendê-lo** — o retorno da primeira frase é maior justamente porque ele não tinha rede.

**A consequência de redação, e ela é o inverso do tom alemão:**
- O curso **inglês** diz *"você vai se virar sozinho"* (sobrevivência).
- O curso **alemão** desloca o peso para M2/M3, porque em Mallorca o M1 é eficiência (ele já se vira).
- O curso **francês** volta a apostar em M1 **como produção, não como sobrevivência**, com o registro da **permissão e do convite**: *"vale a pena tentar; a tentativa é recompensada; você está mais perto do espanhol do que qualquer outro turista, use isso."* É o INV-11 pagando (*briefing só de proibição produz turista paralisado*) — e o eixo do falso amigo (§4) entra exatamente aqui: *a proximidade é a sua vantagem e a sua armadilha ao mesmo tempo.*

**⚠️ G6:** a reputação de "o francês não faz esforço com línguas" **não pode virar frase.** Ela entra **só** como o comportamento observável acima (chega sem preparo, espera francês) com a fonte (viagem curta de carro + inglês moderado) e o **ganho** (a tentativa recompensada). O *espelho* (trava C) é obrigatório: *o turista que exige a própria língua no balcão do outro é o mesmo em toda fronteira, e o espanhol faz igual em Paris.*

### 3.3 O que ele NÃO sabe e o curso inglês nem menciona (e o que difere do alemão)

1. **O DCC não existe para ele — a França é Eurozona.** Como o alemão: paga em euros com cartão em euros, a maquininha não oferece conversão. **B14 perde o coração** (o markup de 10–13%, os €80 em €600, `sin conversión`). **Diferença do alemão:** o argumento de reposição (`con tarjeta` como surpresa invertida) é **mais fraco** — o francês **já usa cartão** com naturalidade (a França é um país de cartão, ao contrário dos 45% em espécie da Alemanha). Então B14 se reconstrói em torno de: o **suplemento de terraza** e o cartaz de preços; a **sobretaxa do caixa Euronet** contra o banco de rua; a **`hoja de reclamaciones`** — e o **canal de consumo intra-UE** (o francês lesado aciona a rede de Centros Europeus do Consumidor, que o britânico perdeu). Moldura de poder, não de perda.

2. **A inversão dos numerais NÃO existe para o francês — brinde onde o alemão penava.** O alemão diz `einundzwanzig` (um-e-vinte) e anota o preço trocado. O francês diz `vingt et un` (vinte-e-um) — **mesma ordem do espanhol** `veintiuno`. **B09/B14 não herdam a armadilha receptiva de numeral do alemão.** Ressalva francesa própria, menor: `soixante-dix` (60+10) e `quatre-vingts` (4×20) são a aritmética francesa dos números altos, mas o **espanhol é mais simples** (`setenta`, `ochenta`) — então o francês **sobe** para números regulares, sem perda. Brinde líquido.

3. **`halb zehn` não existe — outro brinde onde o alemão penava.** O francês diz a meia hora como o espanhol: `neuf heures et demie` = `las nueve y media` = 9h30. **I01 não herda o trap de "uma hora errada" do alemão.** Delta declarado.

4. **A defasagem do jantar é MENOR que a do alemão, não maior.** O jantar francês (~19h30–20h30) é mais tardio que o alemão (~18h30) e mais perto do espanhol (21h+): a defasagem cai de ~2h30 (alemão) para **~1h–1h30**. E a **mesa longa como evento** é compartilhada — a cultura gastronômica francesa não estranha a refeição demorada. **I01 fica MAIS LEVE que no alemão** (o oposto do delta alemão), mas continua sendo a parte mais upbeat, com o contraexemplo obrigatório (*o jantar é elástico; o trem, o museu e a consulta não são*). O que sobra de choque é a **siesta / o horário partido** e o **almoço às 14h–15h**, mais tardio que o francês.

5. **`Salud`/`Santé` e o brinde.** O francês diz `Santé!` e, como o espanhol, o protocolo do olhar não é a regra rígida que é na Alemanha. Menos delta que no alemão. **⚠️ campo 6 pendente — não vai ao áudio sem ele.**

6. **O falso amigo — e é o eixo (§4).** É o que o francês não sabe que não sabe, porque a semelhança o convence de que sabe. Ver §1.6 e §4.

### 3.4 Atrito social — comportamento com consequência

**Quatro itens, cada um com sinal, ação, ganho e onde não vale.**

**1. O `bonjour`/`hola` ao entrar — e aqui o francês está em casa.**
*SINAL:* você entra numa `panadería` pequena e há um silêncio à espera.
*O QUE É ALI:* na França, **entrar num comércio sem dizer `Bonjour` é falta grave e codificada** — talvez mais que na Alemanha. Na Espanha, `Hola`/`Buenas` ao entrar e `Adiós`/`Hasta luego` ao sair é a mesma norma.
*O QUE VOCÊ FAZ:* cumprimente ao entrar e ao sair — você **já faz isso em casa**, funciona igual, e aqui não é opcional.
*O QUE MELHORA:* o balcão te trata como gente da casa, não como turista.
*ESPELHO:* o silêncio de quem entra sem cumprimentar soa igual de mal em Barcelona e em Lyon.
*ONDE NÃO VALE:* balcão de estação lotado, onde a saudação encolhe para um `Buenas`.
**B02 economiza o bloco: é reconhecimento, não instrução — e este comprador reconhece ainda mais rápido que o alemão.**

**2. O tratamento, nos dois sentidos.**
*SINAL:* você `vousvoie` (usa `usted`) um garçom de 25 anos por reflexo; ou, sentindo-se em casa no Mediterrâneo, você o `tutoie` (usa `tú`) num banco.
*O QUE É ALI:* na Espanha o `tú` é o default em bar, loja e balcão; o `usted` com o garçom jovem soa distante. **Mas** em banco, Guardia Civil, médico e com pessoa claramente mais velha em contexto formal, o `usted` é o certo.
*O QUE VOCÊ FAZ:* no balcão amigável, **`tú` e suba o volume**; no institucional e com quem é claramente mais velho, **`usted`**.
*O QUE MELHORA:* servido mais rápido no bar, levado a sério no banco.
*ESPELHO:* manter `usted` com o garçom jovem é o mesmo excesso que o espanhol comete ao `vousvoyer` um garçom em Paris; e o `tú` no banco é o mesmo deslize ao contrário.
*ONDE NÃO VALE:* ver a lista institucional acima.
**Diferença do alemão, declarada:** o remédio alemão é num sentido só (tira o `usted`); o francês é **bidirecional** e **mais leve** — porque o tratamento é erro de segunda ordem para ele (§2.1). **Copiar o bloco anti-`Sie` do curso alemão aqui é o anti-padrão 9.**

**3. Pagar a conta e rachar — atrito menor que no alemão.**
*SINAL:* seis pessoas, uma conta.
*O QUE É ALI:* o cálculo item a item por pessoa é controvérsia doméstica **alemã**; o francês está **mais perto do default espanhol** — dividir `a partes iguales` é comum na mesa mediterrânea. **⚠️ RESSALVA DE FONTE:** assimetria observável, **sem fonte quantitativa** — rotular **CONSENSO**, nunca "estudos mostram".
*O QUE VOCÊ FAZ:* se quiser separado, `¿Podemos pagar por separado?` **ao pedir a conta**; senão, `a partes iguales`.
*O QUE MELHORA:* a mesa não trava no fim.
*ONDE NÃO VALE:* bar de balcão, onde se paga por rodada com `invita` alternado.
**I04/I10:** o item central do alemão (`getrennt zahlen`) **desce de peso** aqui.

**4. A gorjeta — como no alemão, o conflito britânico/americano some.**
*SINAL:* você calcula 10–15%.
*O QUE É ALI:* na França o `pourboire` é arredondar / pequeno (o serviço já vem incluído por lei — `service compris`); na Espanha é arredondar / opcional. **Os dois batem.**
*O QUE VOCÊ FAZ:* arredonde; não calcule percentagem.
*O QUE MELHORA:* você para de pagar a mais por reflexo.
*ONDE NÃO VALE:* restaurante de mais categoria, onde uns euros a mais são normais.
**I10 perde o conflito principal (como no alemão) e se reconstrói em torno de rachar e do preço fixo.**

### 3.5 A ressalva comercial honesta — e ela é inversa à do alemão

**FATO:** EF EPI 2025 põe a França em 38º (539, moderada), **empatada com a Espanha e recém à frente dela**; a *fala* francesa está em 456. **A leitura, sem maquiagem:** ao contrário do alemão — que em Mallorca tinha inglês forte e rede em alemão —, **o francês não tem escotilha.** O inglês dele não é melhor que o do anfitrião, e não há rede em francês fora da faixa catalã.

**Três consequências, e a primeira é o oposto da do alemão:**
1. **A promessa "sem isto você não se vira" é MAIS verdadeira para o francês do que para qualquer outro comprador** — e mesmo assim o produto não a usa, porque a régua é sempre *`Isto torna a viagem mais proveitosa?`*. O francês se vira menos que o alemão, então o valor de M1 **sobe** (inverso do alemão) e o valor de M2/M3 continua sendo sair do circuito.
2. **O peso do produto NÃO se desloca para M2/M3 como no alemão** — M1 volta a carregar valor real de produção, e a copy de loja pode prometer o balcão com honestidade.
3. **A escada de reparo de B03:** o degrau universal é `¿Hay alguien que hable inglés?` (molde `HAY`, já no acervo) — **mas com a ressalva de que o inglês do interlocutor pode não salvar** (empate de proficiência). Onde há faixa catalã/fronteiriça, `¿Hay alguien que hable francés?` funciona; tratá-lo como fato local (dito em I09/A05), nunca como estratégia do Básico — instalar a fuga para o francês dentro do kit anti-pânico é ensinar o aluno a não usar o curso.

---

## 4. OS SLOTS AFETADOS — e o EIXO do curso

**A espinha é LEI: 36 slots, mesma ordem, mesmas funções, nenhum excluído/renomeado/reordenado.** `slots.json` não muda uma vírgula. **Zero extensões** — X-POLIDEZ não ativa (§2.1). **36 partes exatas.**

### 4.0 O EIXO — o falso amigo, a língua-irmã que engana

**Como "a regra de leitura" organizou o alemão, "o falso amigo" organiza o francês.** É a coisa que dá unidade ao curso inteiro:

- **É o erro nº 1** (§1.1): a proximidade que engana, o espanhol que o francês acha que já sabe.
- **É a categoria mais cara da derivação** — estrutura/léxico presente e mal calibrado custa mais que ausente, porque o aluno **não desconfia** (o mesmo princípio do `Sie`/`du` alemão, generalizado ao vocabulário).
- **Mora fisicamente em B10** (inventário novo e denso — §1.6), **reaparece como gag em I07/B17** (`embarazada`), **reaparece no balcão** (`largo`, `demandar`), **reaparece na conversa** (`en absoluto`, sentido oposto), **reaparece na farmácia** (`constipado`, perigoso), **reaparece no pedido de socorro** (`entender`=compreender, não "ouvir" — a frase-âncora `no entiendo`).
- **O eixo é a TRANSPARÊNCIA FALSA, não só o léxico.** O falso amigo lexical (`embarazada`, `largo`, `entender`) é a sua forma mais nítida e a sua casa física (B10) — mas a mesma proximidade que engana também produz **calque** (`estoy caliente` por `j'ai chaud` — §2.2, B16), **excesso do perfeito** (`ayer he ido` por `fui` — I06) e **sentido invertido** (`en absoluto`). Briefar "falso amigo" como se fosse só vocabulário deixa esses três de fora — e são os que o próprio revisor mais deixa passar, porque a frase "soa espanhola".
- **É a moldura do tom** (§3.2): *a sua proximidade é a sua vantagem — e a sua armadilha. Você entende quase tudo; treine os poucos lugares onde "quase" é o problema.*

Regra de redação (a mesma que segura o G4): **um falso amigo por parte, grudado à cena onde ele morde, nunca uma lista lida em voz alta.** O `embarazada` em I07, o `constipado` em B17, o `largo` em B11, o `salida` em B08 — cada um na sua cena, depois de o aluno já ter produzido a frase.

### 4.1 A descoberta estrutural: B04 e B05 (igual ao alemão, por ser cidadão da UE)

O francês é **cidadão da UE** — B04 e B05, marcados `dono: destino`, colapsam porque o conteúdo é sobre o **estatuto jurídico do comprador**, não sobre a Espanha.

**B04** perde: **ETIAS, EES e as digitais, a regra 90/180, o passaporte de terceiro país, o eSIM** (roaming intra-UE tarifa como em casa). Entra, com prazo físico: **o cartão EHIC** (a `Carte Européenne d'Assurance Maladie` — CEAM em francês — está no verso do cartão Vitale, tem prazo de emissão); **o seguro-viagem complementar** (a EHIC não cobre repatriação nem resgate; complemento barato, contratar antes); **documento de identidade válido** (a **carte nationale d'identité** basta, não precisa de passaporte — brinde intra-UE); **caução e cartão em nome do condutor** na locadora; **ecotaxa balear** só se for às ilhas (menos provável que o alemão). ⚠️ **A ZBE para veículo de placa ESTRANGEIRA é PENDÊNCIA e pesa MAIS neste par** — 65% chega de carro (FATO), muitos com placa francesa, e o distintivo da DGT só existe para placa espanhola. **Não afirmar nada sem fonte.**

**B05** perde: **num voo/estrada Schengen interno não há controle de fronteira.** A função (*motivo, tempo, onde você fica*) **sobrevive** e migra para o **check-in do hotel** (RD 933/2021 — *não é golpe, é lei desde 2021*) e o **balcão da locadora**. Bônus: o falso amigo `nombre`≠"número" (§1.6) cai aqui, onde alguém pede o nome da reserva.

**Orçamento:** B04 e B05 saem de reuso integral e entram como **reescrita total** — como no alemão.

### 4.2 A tabela dos 36

Escala: **TOTAL** = re-derivação · **GRANDE** = mais da metade muda · **MÉDIA** = um bloco entra/sai · **PEQUENA** = ajustes/notas.

| slot | mudança | o que muda, em uma linha |
|---|---|---|
| **B01** | **TOTAL** | outra fonética: 4 programas com o **soco central** (oxítona), finais apagados, `u`=[y], jota [ʒ], `r`; caem os brindes `h`/`qu`/vogais |
| **B02** | **GRANDE** | o `bonjour`/`hola` vira reconhecimento (ainda mais forte que no DE); recalibragem `vous`→`usted` **leve e bidirecional**; nasal em `un`/`con`; `-s` de `gracias` |
| **B03** | **PEQUENA** | `ME-PUEDE` barato; escada de reparo com a ressalva de §3.5 (o inglês pode não salvar); `entender`≠`entendre` — `no entiendo` é a frase-âncora, o francês pode cruzá-la com "não ouço" |
| **B04** | **TOTAL** | §4.1 — perde ETIAS/EES/90-180/passaporte/eSIM; ganha EHIC/CEAM + seguro + carte d'identité |
| **B05** | **TOTAL** | §4.1 — sem fronteira Schengen; função migra ao hotel/locadora; falso amigo `nombre` |
| **B06** | **MÉDIA** | eSIM sai (roaming UE); caixa de banco × Euronet; `¿Dónde hay un cajero?` mantém a prévia; cartão já é hábito (menos surpresa que no DE) |
| **B07** | **MÉDIA (por peso)** | **o carro sobe** — 65% chega de estrada; táxi/VTC/locadora; `ME-HE-DEJADO` barato (`avoir`); ZBE de placa estrangeira pendente |
| **B08** | **MÉDIA** | par `está el`×`hay un` nativo (`où est`/`où y a-t-il`) → tempo colapsa para escotilha/escuta; **`h` de `¿Hay…?` é BRINDE** (nada a ensinar, ao contrário do DE); falso amigo `salida`/`salir` |
| **B09** | **MÉDIA (para menos)** | **numerais NÃO invertem — brinde** (§3.3 item 2); some o `halb`/relógio; Renfe/metrô portam; `-s` do plural em risco |
| **B10** | **TOTAL — parte NOVA e mais densa** | §1.6/§4.0 — o inventário de falso amigo **cresce**; é onde o eixo mora |
| **B11** | **PEQUENA/MÉDIA** | `OTRA` = `encore un` de graça; `ME-PONE` chega; gag `largo` no café; `vaso`≠"vase" |
| **B12** | **MÉDIA** | `la carta`=`la carte` e `menú`=`menu` **batem** (brinde); `sin/con/para` baratíssimo; `Quería` re-enquadrado; `demandar`≠"pedir"; jota em ingrediente |
| **B13** | **MÉDIA** | brinde `alérgico **a**`=`allergique **à**` (o DE errava com `gegen`); a jota de `jamón` é **som novo** [ʒ], não só letra; nasal em `jamón`. **INTOCÁVEL** (LEI) |
| **B14** | **TOTAL** | §3.3 item 1 — **DCC não existe**; entra terraza/Euronet/`hoja`/canal intra-UE; `con tarjeta` (argumento mais fraco que no DE) |
| **B15** | **PEQUENA** | `largo`≠"large" (cama/roupa); `quitar`≠"quitter"; `ropa`≈"robe" nota de compra |
| **B16** | **PEQUENA** | estruturas baratas; `ll` em `la llave`; `nombre` de reserva; `largo` (cama) |
| **B17** | **MÉDIA** | `Apotheke`? não — mas `¿Quién es el último?` porta; **`constipado`≠"constipé" perigoso** (§1.6); EHIC/CEAM; golpes portam |
| **B18** | **PEQUENA** | `Me he dejado` barato; despedida porta |
| **I01** | **MÉDIA (para menos)** | **a defasagem de jantar é MENOR** (§3.3 item 4, inverso do DE); **`halb`/`y media` é brinde**; `sobremesa` porta e vale |
| **I02** | **MÉDIA** | recalibragem leve e bidirecional (não o bloco anti-`Sie` alemão); a direção do pedido curto já é certa |
| **I03** | **PEQUENA** | `menú del día`=`menu du jour` de graça; `ELECCION` porta; `rico`≠"riche" no elogio |
| **I04** | **MÉDIA (para menos)** | rachar a conta **desce de peso** (o francês está perto do default espanhol); botellón/Costa Brava sobem |
| **I05** | **MÉDIA** | `PREFERENCIA` brinde (`plaire`); `en absoluto` (sentido oposto) na escuta; visitante que **repete** e às vezes tem casa |
| **I06** | **MÉDIA** | perfeito nativo (`avoir`) → explicação encolhe; **mas o francês superusa o perfeito**: `ayer` pede `fui`, não `he ido` — trap forte (pior que no DE, que ao menos alterna) |
| **I07** | **MÉDIA** | `APRECIACION` **mais barata** (o francês é expressivo — §2.2); a gag `embarazada` mora aqui |
| **I08** | **PEQUENA** | votos congelados portam; `Santé`/olhar (⚠️ campo 6 pendente) |
| **I09** | **MÉDIA** | Costa Brava/Catalunha em vez de Playa de Palma; as normas de "turismo de excessos" pesam menos (o francês é menos balear); o que sobe é a estrada/segunda casa |
| **I10** | **GRANDE** | gorjeta sem conflito (arredondar já é hábito); reconstruído em torno de rachar e preço fixo |
| **A01** | **TOTAL** | §4.3 — o ouvido muda de mapa; o `-s` que some **imita o próprio apagamento francês** |
| **A02** | **PEQUENA** | `dono: destino`, porta |
| **A03** | **PEQUENA + pesquisa obrigatória** | porta como destino, **mas a relação França–Espanha tem carga própria** (rivalidade histórica leve, futebol, compra de imóvel na fronteira, o clichê recíproco). **Não escrever nada sem pesquisa e revisor** — exposição a G6 |
| **A04** | **PEQUENA** | porta; `discutir`≠`discuter` é candidato de apoio (ES `discutir`=brigar) |
| **A05** | **GRANDE** | §4.3 — catalão e basco são **transfronteiriços** para este comprador, não estrangeiros |
| **A06** | **MÉDIA** | agosto porta; as férias francesas (`grandes vacances`, julho–agosto, com o clivê **juillettistes**/**aoûtiens**) colidem com `CERRADO POR VACACIONES` e o calor; o **pont**/feriado de maio é janela de travessia curta |
| **A07** | **PEQUENA/MÉDIA** | `dos besos` porta — **e é quase idêntico à `bise` francesa** (brinde de reconhecimento), com a disciplina de rotulagem (**CONSENSO**); `guiri` não é insulto |
| **A08** | **PEQUENA** | porta; ganha peso pelo visitante que volta e tem casa |

**Contagem, fecha em 36:** **TOTAL 6** (B01, B04, B05, B10, B14, A01) · **GRANDE 3** (B02, I10, A05) · **MÉDIA 14** (B06, B07, B08, B09, B12, B13, B17, I01, I02, I04, I05, I06, I07, I09, A06 — 15 na verdade; ver nota) · **PEQUENA** o restante. *(Nota: a distribuição fina é indicativa; o que é LEI é que nenhum slot tem mudança zero — a narração é toda francesa e a camada de par re-deriva.)*

### 4.3 A01 e A05 — o ouvido muda de mapa, e a fronteira é de casa

O par EN aponta o ouvido para a **Andaluzia** (destino britânico); o alemão, para as **Baleares/Canárias**. **O francês desembarca na Catalunha (30%), Valência (17%) e Andaluzia (11%) — litoral continental.**

**A01 (ear module, `dono: par`):**
- os quatro fenômenos por frequência (`-s` aspirado, seseo, `-d-` caído, `-r`/`-l` abrandado) **portam**;
- **o `-s` aspirado ganha um sentido novo:** o próprio francês **apaga o `-s` final** (§1.2 linha 11), então ele **já ouve e já faz** o que o andaluz faz — a virada de A01 é *"eles comem o fim como você; devolva-o quando é você que fala"*;
- os **quinze moldes ouvidos em velocidade real** portam com os **mesmos audioKeys**, custo zero;
- **o deslize (programa 3 do alemão) NÃO entra aqui** — o francês encadeia naturalmente; o programa novo dele é o **soco** (oxítona), que é de produção, não de escuta;
- **restrição herdada:** Ivan e Matilda são as únicas vozes peninsulares da biblioteca, nenhuma verificadamente regional — A01 **não alega sotaque de região.** Se um dia houver voz **catalã/valenciana verificada**, a prioridade de casting deste SKU passa a ser o **Levante/Catalunha**, não Sevilha nem as ilhas.

**A05 (a outra língua, `dono: destino` — porta o conteúdo, muda o peso):**
- **o catalão sobe ao topo** — não como curiosidade, mas porque é a língua de 30% do destino **e transfronteiriça** (Rosselló). `Bon dia`, `Si us plau`, `Gràcies`, `Adéu` e as placas (`obert/tancat`, `sortida`, `estirar/empènyer`) portam, e para este comprador **muitas já são familiares**;
- **o basco** ganha um parágrafo que nenhum outro par precisa: é a mesma língua dos dois lados da fronteira, e o comprador do Sudoeste pode tê-la em casa;
- **`ustedes` no informal** (Canárias, Andaluzia ocidental): o par EN põe `vosotros` como destrava de ouvido; para o francês, cujo `vous` **já é** singular-formal **e** plural, o `vosotros` peninsular é o que mais lhe custa distinguir de `ustedes` — a parte entrega os dois, e o onboarding sabe o destino.

---

## 5. Custo, casting e pendências que bloqueiam

**Herança de graça (FATO, §0.1):** 752 audioKeys de fala espanhola (16 do ear module inclusos) e todo o acervo de pesquisa de destino.

**O que paga:**
1. **1.306 clipes de narração-guia em francês** (duas vozes novas). É a linha dominante — e **não é tradução**: seis partes são re-derivação total e três são grandes (§4.2), então uma fração relevante é **escrita nova**, não versão.
2. **Fala espanhola NOVA, e ela existe:** a gag de balcão (`largo`, se escolhida — §1.4), eventuais clipes de `embarazada`/`constipado` que a cena peça se não estiverem entre os 752, os falsos amigos de B10, os encaixes novos dos moldes baratos, e o que B04/B05/B14 pedirem reescritos. **INFERÊNCIA: dezenas, não centenas. Confira cada frase contra o manifesto antes de escrever — a fala espanhola nova é a única linha de crédito espanhol do SKU.** É o anti-padrão 21.
3. **Componente de gesto novo** (`GestoRitmoFR.svelte`, §1.3).
4. **Quizzes** — a intro da guia refaz-se inteira em francês; o diálogo em língua-alvo reusa.

**Pendências que bloqueiam:**
- **O scaffold ainda é o projeto ALEMÃO** (§0.1): `moldes.json` diz `"DE → Espanha"` e as 36 narrações estão em alemão. **Item nº 1 da Onda 0:** re-derivar `moldes.json` para FR (a lista de edições é §2.3) e apagar a narração alemã. Nenhuma parte francesa é despachada antes.
- **G14 (integridade voz × língua) PENDENTE:** a guia (francesa) nunca fala espanhol; Carmen/Emilio nunca falam francês. E este repositório já teve o acidente do mp3 na língua errada. **Conferência humana obrigatória em toda entrega.**
- **A revisão nativa da fonética:** tudo em §1 marcado INFERÊNCIA/NÃO CONFERIDO precisa de um revisor **FR-L1 + espanhol peninsular** antes do áudio. **Nada disso vira áudio antes.**

---

## 6. O que este documento NÃO decidiu

Nomeado para que ninguém suponha resolvido:

1. **A grade dos 36 para o FR** (`GRADE-36-FR.md`) — este documento diz o que muda; a grade, linha a linha, é o próximo artefato.
2. **O `moldes.json` do FR** — §2.3 é a lista de edições, não o arquivo. A camada `falsos_amigos` por molde tem de ser construída e conferida.
3. **A revisão nativa da fonética** — todo o §1.
4. **A escolha final da gag de balcão** (`largo` × outra) e a **conferência dos clipes espanhóis** contra o manifesto (§1.4/§5).
5. **A ZBE para placa estrangeira** (§4.1) — pesa mais neste par (65% de carro) e continua sem fonte.
6. **A carga da relação França–Espanha em A03** (§4.2) — pesquisa própria + revisor obrigatórios; exposição a G6.
7. **O campo 6 do item `Santé`/olhar** (§3.3 item 5).
8. **A taxa de repetição e a segunda residência do visitante francês** (§3.1 item 2) — NÃO CONFERIDO; sustentada por proximidade, carro e concentração litorânea, sem fonte direta.
9. **A posição exata da Espanha no EF EPI 2025** (§3.1) — a França ultrapassou a Espanha; reconferir o número do anfitrião.

---

## Fontes citadas

- INE / FRONTUR, Movimientos Turísticos en Fronteras, dez. 2024 e ano 2025 (dados provisórios) — chegadas francesas 12,9 M (2024, 2º mercado) / ~12,8 M (2025, −1,0%).
- Turespaña, ficha ejecutiva Francia — distribuição por comunidade (Cataluña 30%, C. Valenciana 17%, Andalucía 11%), tipo de destino (costa 44%, campo 28%, cidade 24%), **65% por carretera**.
- EF EPI 2025 — França 38º, 539 (moderada), fala 456; França ultrapassa a Espanha.
- `pesquisa-espanha.md` (reuso integral) — fatos do destino.
