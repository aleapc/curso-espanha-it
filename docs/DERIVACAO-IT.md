# DERIVAÇÃO IT — o que muda quando o comprador é italiano

> **O documento de par do SKU `IT → Espanha`.** Diz o que muda em relação ao `EN → Espanha` publicado, ao `DE → Espanha` e ao `FR → Espanha` derivados, e por quê. Vai **junto** com toda tarefa de escrita das 36 partes, depois do `PRODUTO.md` e antes da `GRADE`.
> **Vigência:** 2026-07-31 · **Escopo:** SKU `curso-espanha-it` · **Leitura obrigatória** de quem escreva parte, syllabus, quiz, card de consulta ou copy de loja deste SKU.

**Em conflito:** `PRODUTO.md` vence sempre · `slots.json` vence sobre texto · este documento vence sobre a `GRADE-36-IT.md`. As `DERIVACAO-DE.md` e `DERIVACAO-FR.md` estão no `docs/` **como referência de MÉTODO e de FORMATO, jamais de conteúdo** — copiar uma linha delas para cá é o anti-padrão 9 (`PRODUTO` §10) em ato. O francês não é o italiano com outra bandeira, mesmo sendo os dois românicos: os falsos amigos IT↔ES são **outros** que os FR↔ES, e a fonética italiana é **ainda mais brinde** que a francesa.

**Régua de evidência (LEI):** **FATO** = medido no repo ou lido em fonte citada · **INFERÊNCIA** = projeção declarada · **NÃO CONFERIDO** = sem fonte externa nem revisor nativo. **Nada NÃO CONFERIDO vira áudio.** Toda projeção fonológica e todo falso amigo deste documento é INFERÊNCIA que exige um revisor com **italiano L1 e espanhol peninsular** antes de virar áudio, mesmo quando o fenômeno de origem é fato de manual.

---

## 0. A lei da portabilidade, aplicada ao caso MAIS próximo do catálogo

**LEI (`PRODUTO` §10, anti-padrão 9):** *porta-se a ESTRUTURA, nunca o TEXTO.* E este par leva a lei ao seu ponto de máxima tensão, porque **o italiano é a língua mais próxima do espanhol de todo o catálogo** — ~82% de similaridade lexical (acima do francês, ~75%), mesma sintaxe SVO, cinco vogais puras iguais, ritmo silábico partilhado, tônica paroxítona default partilhada, ⟨h⟩ mudo nos dois. Um agente apressado pode "derivar" o italiano traduzindo o espanhol quase palavra por palavra e acertar por acidente **na maior parte do tempo** — até o lugar onde a semelhança mente. É exatamente esse o eixo (§1, §4): **a proximidade que engana, no máximo.**

### 0.1 O que se reusa, medido

**FATO, herdado da medição de `curso-espanha`** (a mesma biblioteca espanhola serve os quatro pares — economia de destino, `PRODUTO` §3.2 regra 5):

| camada | destino no IT |
|---|---|
| **fala espanhola** (~752 audioKeys) | **reuso verbatim, mesmo `audioKey`, custo de crédito ZERO** |
| **voz-guia** | **regrava inteiro em italiano** — duas vozes-guia novas (feminina + masculino de alertas), a definir no casting |
| **pesquisa de destino** | **reuso integral** de `pesquisa-espanha.md` |

**Estado do andaime deste SKU (FATO, conferido em disco 2026-07-31):** `src/lib/course/` é hoje uma **cópia do projeto FRANCÊS** — `moldes.json` dizia `"sku": "FR → Espanha"` e os 36 `ep-*.json` trazem narração-guia **em francês** (`ep-b11.json` = `"Une seconde et demie au comptoir"`, strings `pt` em francês). Isso é o scaffold, **não** conteúdo italiano. A fala espanhola (`es`) dos steps é a definitiva; o que se re-deriva é a camada italiana. O **G14** (integridade voz × língua) continua PENDENTE — conferência humana obrigatória (o repositório já teve o acidente do mp3 na língua errada).

### 0.2 O que NÃO se reusa, e é o ponto

Quatro camadas se **re-derivam**, não se traduzem:

1. **A âncora fonética e o programa motor de B01** — §1. E aqui há a maior surpresa: **B01 fica o mais LEVE de todos os pares.**
2. **O inventário de falso amigo de B10** — re-derivado IT↔ES do zero (§1.6). **Cresce ainda mais que no francês.**
3. **O roster de moldes inteiro** (`moldes.json`) — §2. A **ordem** muda **ZERO** lugares vs o francês; a **camada de anotação** (falso amigo + fonética) muda inteira.
4. **B04 e B05** colapsam pelo mesmo motivo do FR/DE — o italiano é **cidadão da UE** (§4.1).

---

## 1. A REFORMULAÇÃO FONÉTICA — a boca que já faz quase tudo

### 1.1 O italiano é o comprador cuja boca precisa de menos, e cujo léxico o trai mais

O curso inglês trata o erro como **problema de boca**; o alemão descobriu que é do **olho** (regra de leitura); o francês, que migra para o **léxico** com a boca ainda com três custos caros (tônica oxítona, finais apagados, nasalização). **Para o italiano, a boca está em melhor forma que a de qualquer outro comprador — e quase todo o custo migra para o léxico.**

> ### O erro nº 1 do comprador italiano é de confiança, elevado ao máximo.
> **O italiano lê espanhol quase certo, pronuncia quase certo, e é ~80% entendido mesmo falando italiano — e por isso produz um espanhol fluente e seguro cheio de italianismos e falsos amigos sem desconfiar de si uma única vez.** É o mesmo erro do francês, num par ainda mais cognato: onde o francês tem 75%, o italiano tem 82%, e a tentação de "só falar italiano" é uma **escotilha-armadilha** que nenhum outro par tem nesta forma.

### 1.2 A TABELA DE INTERFERÊNCIA, fenômeno a fenômeno

Legenda: **BRINDE** = já está na L1, custa ~0 · **BARATO** = existe em forma próxima · **CARO** = não existe ou aponta para o lugar errado · **NOVO** = o item nesta forma.

**Marcação de evidência:** os fatos tipológicos do italiano são CONFERIDO; toda **consequência no espanhol** é INFERÊNCIA que precisa do revisor IT-L1 + peninsular antes do áudio.

| # | fenômeno | no ITALIANO (CONFERIDO) | consequência no espanhol (INFERÊNCIA) | veredito e slot |
|---|---|---|---|---|
| **1** | **5 vogais orais puras** | monotongos puros `a e i o u`, sem ditongar | `no`, `sí`, `casa`, `tú` saem quase certos | **BRINDE.** Como no francês |
| **2** | **Tônica — paroxítona default** | o italiano é `piano` por default (penúltima), **igual ao espanhol**; e tem acento lexical (não fixo) | `gracias`, `España`, `hola`, `quería` caem certo | **BRINDE — e é a maior inversão vs o francês.** O «soco»/oxítona que era o **motor central** do B01 francês **não tem erro a trair aqui**. Divergências IT×ES de tônica existem mas são poucas e quase nenhuma de viagem. **NÃO CONFERIDO:** revisor para a lista curta de divergências |
| **3** | **Finais** | o italiano pronuncia **toda vogal final** e não apaga `-s`/`-r`/`-e` como o francês | `noche`, `gracias`, `dos`, `más`, `hablar` saem inteiros | **BRINDE.** O plural `-s` espanhol é ending novo (o italiano pluraliza por vogal: `gatto`/`gatti`), mas **não some** — o italiano não come finais. Cai o programa 2 francês |
| **4** | **O `u`** | `u`=[u] (`tu`, `luna`) | `mucho`, `tú`, `gusta` limpos | **BRINDE.** O `u`=[y] francês não existe |
| **5** | **Nasalização** | o italiano **não nasaliza** vogal; `n`/`m` são consoante plena | `jamón`, `con`, `sin`, `pan` sem nariz | **BRINDE.** O custo NOVO do francês evapora |
| **6** | **O `r`** | **tap [ɾ] e vibrante [r] NATIVOS** (`caro`/`carro`, `Roma`) | `pero`, `perro`, `caro` de graça | **BRINDE — o MAIOR ganho vs francês E alemão**, que tinham o uvular [ʁ] sem âncora e pagavam o programa 4 caro. Aqui o `r` custa zero |
| **7** | **A jota `j` / `g`+e,i** | o italiano **não tem [x]**; lê ⟨j⟩=[j] (`ieri`) e puxa ⟨g+e,i⟩ para [dʒ] (`gente`→"djente") | `jamón`→"khamón" vira "yamón"/"djamón", `mejor`, `ajo`, `gente` | **CARO, NOVO, e é o erro nº 1 articulatório.** PIOR que o francês num aspecto: o francês ancorava pelo `r` uvular (mesmo ponto); o italiano **não tem uvular**. Âncora só regional: a **gorgia toscana** ([h]/[x] de `la casa`→"la hasa"). Uma linha + treino, em `jamón` (B13). **NÃO CONFERIDO** |
| **8** | **`z` / `c`+e,i** | o italiano lê ⟨z⟩=[ts]/[dz] (`grazie`, `zero`) e ⟨c+e,i⟩=[tʃ] (`cena`, `ciao`) | `cerveza`→"chervetsa", `gracias`→"grachas", `plaza`→"platsa", `cinco`→"chinco" | **CARO, NOVO.** Distinto do alemão ([ts] ininteligível) e do francês ([s]/[z]). Decisão: modelo em distinción [θ], **[s] seseo aceito**, **[ts]/[tʃ] proibidos**. In-joke: `cena`=jantar nos dois, [θena] × [tʃena]. **NÃO CONFERIDO** |
| **9** | **O `ch`** | o italiano lê ⟨ch⟩=**[k]** (`che`→"ke", `chiesa`→"kieza") | `noche`→"noke", `leche`→"leke", `chorizo`→"koritso", `hecho`→"eko" | **CARO, NOVO, e ITALIANÍSSIMO.** O espanhol quer [tʃ], que **é nativo do italiano** (o `ci` de `ciao`) — o problema é só a LETRA. Âncora limpa: "⟨ch⟩ = o `ci` de `ciao`, nunca o `ch` de `chiesa`". Note o cruzamento com a linha 8: o ⟨c⟩ está quase **invertido** entre as duas línguas. **NÃO CONFERIDO** |
| **10** | **O `ll`** | o italiano lê ⟨ll⟩ como **geminada [ll]** (`bello`); mas tem [ʎ] via ⟨gl⟩+i (`figlio`, `aglio`) | `llave`→"l-lave", `calle`→"kal-le", `pollo`, `tortilla`, `Sevilla` | **BARATO.** O SOM [ʎ] existe — âncora **`figlio`**, mais limpa que a do francês (que não tinha). "⟨ll⟩ soa como o `gl` de `figlio`" |
| **11** | **`ñ`** | **[ɲ] NATIVO** via ⟨gn⟩ (`bagno`, `ogni`) | `España`, `niño`, `mañana` perfeitos | **BRINDE.** Só a LETRA difere (⟨ñ⟩ × ⟨gn⟩), nota receptiva de zero áudio |
| **12** | **`qu`** | `qu`=[k] (`questo`, `qui`) | `quería`, `¿qué?`, `queso` limpos | **BRINDE.** O alemão penava ("kveria"); o italiano acerta |
| **13** | **`h` mudo** | `h muto` (`ho`, `hotel`) | `hay`, `hola`, `hecho`, `harina` com `h` mudo | **BRINDE.** O alemão dizia "Hai" por `¿Hay?`; o italiano acerta de graça |
| **14** | **Encadeamento** | o italiano liga e ainda **gemina na fronteira** (`raddoppiamento sintattico`); **não** dá golpe de glote | `los otros`→[lo-so-tros] natural | **BRINDE.** O `Knacklaut` alemão não existe; o **deslize** (programa 3 do DE) não é necessário |
| **15** | **`b` × `v`** | o italiano **distingue** `b` [b] de `v` [v] | `vino`→[vino] com [v], entendido | **CUSTO LEVE — e MATA a gag alemã `vino`×`fino`.** Como o francês |
| **16** | **`s` intervocálico** | variável: **Norte sonoriza [z]** (`casa`→"kaza"), Centro/Sul [s] | `casa`, `cosa`, `mismo`, `pasaporte`→"pazaporte" | **CARO parcial (regional).** Menos sistemático que no francês (que era geral). [s] aceito, [z] o eixo que dói. Item `doppie`. **NÃO CONFERIDO** |
| **17** | **Geminadas (doppie)** | fonêmicas: `pizza`, `sette`, `attenzione`, `professore`, `possibile` | `atención`→"attención", `profesor`→"professor", `posible`→"possible", `oficina`→"officina" | **CARO, NOVO, 100% deste par.** Nem inglês, nem alemão, nem francês têm. Não quebra inteligibilidade — "soa italiano", é o resíduo depois de tudo o mais ser brinde |

**Saldo de B01 (INFERÊNCIA):** saem o bloco de vogais (brinde), o encadeamento (brinde), **a tônica** (brinde, ao contrário do francês onde era central), **os finais** (brinde), **o `u`** (brinde), **a nasal** (brinde), **o `r`** (brinde nativo). Entram, e só: **a jota** (som novo), o **`ce_ci_z`**, o **`ch`=[k]**, o **`ll`** e as **doppie**. **B01 fica o mais LEVE do catálogo** — provavelmente com menos de 4 programas motores, porque quase nenhum erro de produção sobrou.

### 1.3 O programa motor de B01 — o mais enxuto do catálogo

**LEI (`PRODUTO` §3.4):** *toda língua ganha uma mão em B01; o gesto tem que **trair** o erro.* O número de programas **não** é lei. Para o italiano, a maioria dos erros que os outros pares traíam **não existe**:

| programa | erro que ele trairia | vale para o italiano? |
|---|---|---|
| **metrônomo** (ritmo) | compressão de átona | **quase não** — o italiano é silábico. Peso mínimo |
| **palma plana** (finais) | comer o final | **NÃO** — o italiano não come finais. **Cai** |
| **soco** (tônica) | oxítona | **NÃO** — a tônica italiana já bate. **Cai** (o oposto do francês, onde era central) |
| **flick** (o `r`) | uvular | **NÃO** — o `r` é nativo. **Cai** |
| **[NOVO] a jota** | o [x] sem âncora | **SIM** — é o único erro de produção que sobra, mais o `ce_ci_z` |

**A troca declarada:** o italiano não precisa dos programas de tônica, finais, `u`, nasal nem `r` — **o único gesto que trai um erro real é o da jota** (o som novo) e, em segundo lugar, o do `ce_ci_z`. É uma derivação de **subtração**: B01 vira uma parte curta cujo único drama articulatório é a jota. **Isso é resultado, não preguiça** — a boca italiana simplesmente já faz o resto.

### 1.4 A GAG-ÂNCORA — `burro` (manteiga → jumento)

**ORIENTAÇÃO, com o motivo escrito.** O INV-17 pede que o erro fatal previsível seja **piada antes de acidente**. A gag deste par é **`burro`**:

- **`burro` = MANTEIGA em italiano → em espanhol JUMENTO/asno** (e, no insulto, "idiota"). O italiano, ao café da manhã, pede `burro` para a torrada e **pede um jumento** (a manteiga é `mantequilla`). É o equivalente exato do `vino`/`fino` alemão e do `embarazada` francês: entrega uma coisa errada **real**, é falsificável na primeira manhã, é cômica.
- **Duas vantagens sobre o francês:** é **gênero-neutra** (o `embarazada` só morde a compradora) e tem **crédito espanhol PARCIAL** — `burro`=jumento **já está gravado** no andaime como insulto (`¡Pero qué burro eres, tío!`, ep-a02, a02-burro-e). A cena da manteiga (`mantequilla`, `¿me pone burro?`) é clipe novo/citação (a manteiga não está no andaime: `mantequilla`=0), mas a palavra "jumento" o aluno já ouve na voz espanhola.
- **Casa:** ME-PONE (o balcão do café), com eco em QUERIA. Gag de balcão **secundária**: `largo` (café largo = comprido/aguado, não largura) e `vaso` (= copo, não vaso de flor) — ambos clipes novos.

**NÃO usar `vino`×`fino`:** o italiano distingue b/v e diz `[vino]` certo (§1.2 linha 15).

### 1.5 O que os cursos EN/DE/FR fazem e este NÃO deve fazer

- **Não portar a tabela de leitura alemã.** `h`, `qu`, `v`=[f], numerais invertidos, `halb zehn` — todos brindes/não-problemas para o italiano.
- **Não portar os três custos de boca do francês.** A **tônica oxítona**, os **finais apagados** e a **nasalização** — os três motores caros do B01 francês — são **brindes** para o italiano. Escrevê-los é o anti-padrão 9.
- **Não escrever o "-o tax" (GUIRI ALERT inglês) nem o «soco» francês.** O italiano não desloca a tônica; ela já bate.
- **Não portar os falsos amigos do francês como se fossem os do italiano.** `nombre`=número (FR) → em italiano `nome`=NOME, brinde. `entender`=ouvir (FR) → em italiano `intendere`≈compreender, brinde. `quitar` (FR quitter=deixar) → não há `quitare` em italiano. `gato`=bolo (FR gâteau) → em italiano `gatto`=gato, brinde. `salir`=sujar (FR) → em italiano `salire`=**subir**, um trap DIFERENTE (§1.6).
- **Não usar o deslize contra golpe de glote.** O italiano encadeia naturalmente.

### 1.6 B10 — o inventário de falso amigo CRESCE ainda mais, e é o eixo

**A inversão mais importante do SKU, mais forte que a do francês.** Como as línguas são as mais irmãs do catálogo, os falsos amigos **se multiplicam** — e são **outros** que os do francês. `slots.json` marca B10 `dono: par` e `condicional`. Os falsos amigos IT→ES, na cena de viagem, em ordem de perigo (**todos NÃO CONFERIDOS — precisam de revisor IT-L1**; a lista é de candidatos):

| falso amigo | o italiano vê/quer dizer | o que significa em espanhol | cena / crédito |
|---|---|---|---|
| **`burro`** | `burro` = manteiga | **jumento/asno** (insulto: idiota) | ME-PONE/QUERIA, café da manhã. A gag-âncora. `burro`=jumento GRAVADO (ep-a02); `mantequilla` não |
| **`aceite`** | `aceto` = vinagre | **óleo/azeite** | à mesa, PERIGOSO por inversão. `aceite` NÃO gravado |
| **`caldo`** | `caldo` = quente | **caldo/sopa** | cardápio; ancora o calque `ho caldo`. GRAVADO `caldo de pescado` (ep-b13) |
| **`constipado/a`** | `costipato` = prisão de ventre | **resfriado** | **B17, farmácia, PERIGOSO.** GRAVADO (ep-b17) |
| **`salir`/`salida`** | `salire` = subir; `salita` = subida | **sair / saída** | placa, alta frequência. GRAVADO `la salida`. RE-DERIVADO (no FR era "sujar") |
| **`subir`** | `subire` = sofrer; `salire` = subir | **subir (ir para cima)** | `subir con esta maleta` (PUEDO). O eixo vertical escramblado |
| **`embarazada`** | `imbarazzata` = envergonhada | **grávida** | I07/B17 gag, gênero-limitada. Clipe novo (não gravado) |
| **`oficina`** | `officina` = oficina mecânica | **escritório** | `oficina de turismo`. Receptivo |
| **`guardar`** | `guardare` = olhar/assistir | **guardar/conservar** | `guarde esto`, `guardarropa`. Receptivo |
| **`largo`** | `largo` = largo/largura | **comprido** | `café largo`, `cama larga`. Gag de balcão secundária. Não gravado |
| **`rico`** | `ricco` = rico (dinheiro) | **gostoso** (elogio à comida) | dentro do elogio (I07). GRAVADO `¡Qué rico!` |
| **`pronto`** | `pronto` = pronto; `Pronto!` = alô | **cedo/logo/rápido** | telefone, tempo. Apoio |
| **`vaso`** | `vaso` = vaso de flor | **copo** | `un vaso de agua` (B11). Não gravado |
| **`atender`/`esperar`** | `attendere` = esperar; `sperare` = ter esperança | **atender = servir; esperar = aguardar** | `¿me atiende?` (B03). Apoio |
| **`demandar`** | `domandare` = pedir/perguntar | **processar (jurídico)** | B12. Conceitual |
| **`en absoluto`** | `assolutamente` = absolutamente (sim, enfático) | **de jeito nenhum (não)** | I05 receptivo — **sentido oposto** |
| **`discutir`** | `discutere` = conversar/discutir | **brigar** | A04 |
| **`contestar`** | `contestare` = contestar/disputar | **responder** | apoio, B03/social |

**O calque, e ele é a transparência falsa em ação:** o italiano diz `ho caldo` ("tenho calor") e pode produzir `estoy caliente` (= excitado) ou, mais cômico e mais real, **`tengo caldo`** (= "tenho caldo/sopa") — o certo é `tengo calor`. Cruza o falso amigo `caldo`. E o **excesso do perfeito**: o italiano do Norte/padrão superusa o `passato prossimo` (o `passato remoto` é meridional/literário), então `ayer` → dirá `he ido` onde o espanhol quer `fui` (I06, mesmo trap do francês).

**E o brinde-espelho:** `la carta`=`la carta`/`alla carta` e `el menú`=`il menù`/`menù del giorno`=`menú del día` **batem certo** (o `carta`≠"card" inglês não existe). A inversão de `gustar` é nativa via **`piacere`** (`mi piace`); `¿me recomienda?`≈`mi consiglia?` (âncora `consigliare`, **não** `raccomandare`). `a nombre de` é brinde gravado (`nombre`=`nome`).

**Consequência:** **B10 é NOVA e a mais densa dos quatro pares.** É aqui que o eixo mora fisicamente (§4).

---

## 2. O ROSTER SE RE-DERIVA — e a ordem muda ZERO lugares vs o francês

**LEI (`PRODUTO` §3.2 regra 5, `moldes.json` → `_regras.ativo_de_par`):** *o roster é ativo de PAR; a cada comprador novo ele se RE-DERIVA, não se traduz.* O que muda é o **preço** de cada molde.

### 2.1 A pergunta do briefing: o `Quería` cai? — Não, e ME-PONE não sobe. Como no francês.

**O italiano tem `tu`/`Lei` nativo** (e o `voi` formal do Sul). Então o argumento que fazia `QUERIA` ser o nº 1 no inglês — a fuga da decisão tú/usted — **perde força**, como no alemão e no francês. Mas a **calibragem** italiana é a francesa, não a alemã:

- **O alemão erra num sentido só e com força** (`Sie` rígido) — por isso promoveu `ME-PONE` a nº 1.
- **O italiano erra de forma mole e BIDIRECIONAL:** o `Lei` também é default com estranho (excesso de `usted`), mas o italiano passa a `tu` com facilidade (cultura mediterrânea informal), e — este é o ponto — **o erro nº 1 do italiano não é o tratamento, é o léxico**, com mais força ainda que no francês.

> **O alemão decide o tratamento com confiança e erra num sentido. O italiano decide o léxico inteiro com confiança e erra em toda parte — e o tratamento é erro de segunda ordem, mole, bidirecional.**

**Consequência:** `QUERIA` fica **nº 1** (`Vorrei` traduz para um registro um tom acima, como `Je voudrais`); `ME-PONE` fica **nº 3** (recalibragem fraca e bidirecional), mas ganha o peso de **hospedar a gag-âncora `burro`**. A recalibragem `Lei`≠`usted` entra como **beat leve e bidirecional** (B02, I02), NÃO como molde e NÃO como pedágio — **X-POLIDEZ continua NÃO ativada; 36 partes exatas.**

### 2.2 Molde a molde — o veredito

| molde | preço para o ITALIANO | veredito |
|---|---|---|
| **QUERIA** | médio; casca limpa | **FICA, nº 1.** `Vorrei` é registro acima; sai a fuga da decisão. Eco da gag `burro` |
| **HAY** | **BARATÍSSIMO.** `c'è`/`ci sono`=`hay`; `h` mudo brinde | **FICA, nº 2** |
| **ME-PONE** | barato no mecanismo (`Lei`/`tu` nativo) | **FICA, nº 3.** Beat leve/bidirecional + **casa da gag-âncora `burro`** |
| **PUEDO** | **BARATO.** `potere` cobre poder+licença (dispensa alemã = zero) | **FICA, nº 4.** ⚠️ O argumento do **carro** do francês **NÃO porta** (Itália não faz fronteira; avião/ferry — §3.1); sustentado pelo improviso de cidade/praia + o falso amigo `subir`/`subire` |
| **SIN-CON-PARA** | **O MAIS BARATO.** `senza`/`con`/`per`; `para llevar`=`da asporto` | **FICA.** ⚠️ Perde `sin conversión` (§3.3); repõe `con tarjeta`, argumento MÉDIO (Itália usa mais espécie que a França) |
| **OTRA** | **BARATÍSSIMO.** `un altro`/`un'altra`; `un'altra birra` é a frase de balcão | **FICA.** Gênero: 2 gêneros, mas `il`/`la`≠`el`/`la` (`la leche`=il latte, `la sangre`=il sangue). "Cole o artigo, não traduza o seu" |
| **ME-PUEDE** | **BARATO.** `mi può…?`=`¿me puede…?` | **FICA.** ⚠️ O falso amigo `entender` do FR **NÃO porta** (`intendere`≈compreender); fica `atender`/`attendere` |
| **DONDE** | **BARATO, par de graça.** `dov'è il…?`×`dove c'è un…?` | **FICA, B08.** Falso amigo RE-DERIVADO: `salir`/`salida` (=subir, não sujar) |
| **LLEVA** | barato na estrutura | **FICA, B13.** **O molde fonético mais caro:** jota de `jamón` (som novo) + `ch`=[k] de `chorizo`/`leche`; falso amigo `caldo` gravado |
| **YA-ESTA** | **BARATO.** `è già pagato/fatto` (`già`=`ya`) | **FICA, fechado.** `hecho` carrega o `ch`=[k] ("eko"), item de ensino |
| **SOY-ESTOY** | ser/estar opaco (o italiano tem `essere`/`stare` mas reparte diferente) | **FICA, FECHADO. A maior carga de falso amigo:** `embarazada`, `constipado`, o calque `caldo`/`caliente`. Brinde: `allergico **a**`=`alérgico **a**` (o DE errava com `gegen`) |
| **ME-HE-DEJADO** | **BARATO, brinde grande.** `ho lasciato/dimenticato` (passato prossimo com `avere`) | **FICA, B07.** I06: o italiano superusa o perfeito → `ayer` pede `fui`, não `he ido` |
| **APRECIACION** (social) | **A MAIS BARATA de todas.** Registro expressivo + `-ísimo` NATIVO (`buonissimo`) | **FICA, I07.** A permissão custa quase nada; o risco é só o falso amigo `rico`≠`ricco` |
| **ELECCION** (social) | **BARATO.** `quale mi consiglia: A o B?` | **FICA, I03.** Âncora `consigliare`, não `raccomandare` |
| **PREFERENCIA** (social) | **BRINDE.** `gustar` via `piacere` (`mi piace`) | **FICA, I05.** Casca foneticamente vazia; falso amigo `en absoluto` (sentido oposto) |

### 2.3 A lista do que muda — a entrega feita

Edições feitas no `moldes.json` do IT (que era cópia do arquivo francês):

1. **`sku`:** `"FR → Espanha"` → **`"IT → Espanha"`**; `_changelog` reescrito do zero.
2. **`falsos_amigos` por molde RE-DERIVADO IT↔ES** (não a lista francesa): `QUERIA`→`burro`,`demandar`; `ME-PONE`→`burro`,`largo`,`vaso`; `PUEDO`→`subir_subire`; `DONDE`→`salir_salida`,`oficina`; `LLEVA`→`caldo`,`aceite`; `SOY-ESTOY`→`embarazada`,`constipado`,`caliente_caldo`; `ME-PUEDE`→`atender_esperar`; `APRECIACION`→`rico`; `PREFERENCIA`→`en_absoluto`.
3. **Camada fonética por molde:** trocar as cinco interferências francesas pelo conjunto italiano (`jota`, `ce_ci_z`, `ch`, `ll`, `doppie`); **remover** tônica/finais/`u`/nasal/`r`, que são brindes.
4. **Ordem:** ZERO swaps vs o francês (QUERIA 1, HAY 2, ME-PONE 3, PUEDO 4). O francês moveu UM lugar vs o alemão; o italiano move NENHUM.
5. **`QUERIA.porque_o_numero_1`:** reescrito (`Vorrei` registro acima; fuga da decisão não é benefício).
6. **`ME-PONE`:** recalibragem `Lei`→`usted` leve e bidirecional; casa da gag `burro`.
7. **`PUEDO`:** argumento do carro removido (Itália não faz fronteira); `potere` cobre os dois; falso amigo `subir`/`subire`.
8. **`SIN-CON-PARA`:** remover `sin conversión`; `con tarjeta` com argumento italiano (espécie média).
9. **`SOY-ESTOY`:** brinde `allergico **a**`; carga de falso amigo `embarazada`/`constipado`/calque `caldo`.
10. **`ME-HE-DEJADO`:** brinde do passato prossimo com `avere`; trap I06 (`ayer`→`fui`).
11. **`APRECIACION`:** o problema é o falso amigo `rico`, não a permissão (registro + `-issimo` nativo = brinde).
12. **`PREFERENCIA`:** âncora `piacere`; `en absoluto` (sentido oposto).
13. **`OTRA`:** nota de gênero com 2 gêneros e `il`/`la`≠`el`/`la`.
14. **`cortados`:** `Me gustaría` cortado, motivo reescrito (`Vorrei`/`Mi piacerebbe` sobe o registro). `GRAU` e `subjuntivo` seguem cortados (destino/língua-alvo). `¡Salud!`=`Salute!`, olhar não rígido.
15. **`ensinados_mas_nao_declarados`:** os cinco portam. `¿Tengo que…?`=`Devo…?` fica **baratíssimo** (mais um-a-um que o FR, como o DE) — reabrir teto só com G9 abaixo do piso.
16. **Teto:** **12 + 3 = 15.** Não mexe.
17. **Nenhum molde entra, nenhum sai.** Os quinze sobrevivem — a evidência mais forte de todas (quarto caminho, idioma mais cognato).

---

## 3. O DELTA CULTURAL — o vizinho latino que se acha em casa

> **Aviso (o mais importante):** `PRODUTO` §5.3 e o portão **G6** proíbem **adjetivo de povo**: gentílico + cópula = **0 ocorrências.** *"Os italianos são…"* é a categoria de frase que o produto existe para não escrever. Tudo abaixo é **comportamento com consequência**, com onde a regra não vale.

### 3.1 Quem é este comprador (o que é FATO × o que falta)

⚠️ **PENDÊNCIA DE PESQUISA:** este documento **não** tem a ficha executiva Turespaña-Italia com os números medidos (chegadas, distribuição por comunidade, meio de chegada, EF EPI exato). O que segue é **INFERÊNCIA geográfica declarada**, não FATO com fonte — e o §6 a lista como bloqueio.

1. **Como chega:** a Itália **não faz fronteira com a Espanha** (a França está no meio). Ao contrário do francês (65% de carro, FATO Turespaña-França), **o italiano chega majoritariamente de AVIÃO** (voos baratos para Barcelona, Madrid, Baleares, Valência) e, em menor grau, de ferry. **Consequência dura para o roster:** o argumento do carro que sustentava `PUEDO` no nº 4 francês **não porta** — `PUEDO` fica em 4º por outro motivo (§2.2). **NÃO CONFERIDO.**
2. **Onde vai:** provável litoral mediterrâneo continental + ilhas + cidades culturais (Barcelona, Madrid). **NÃO CONFERIDO** sem a ficha.
3. **Escotilha de idioma:** o inglês italiano é **moderado**, empatado com o do anfitrião espanhol (EF EPI, ⚠️ posição exata a reconferir) — **como o francês, sem escotilha de inglês forte.** MAS tem a escotilha PRÓPRIA: falar italiano devagar e ser ~80% entendido — a mais forte de todos os pares, e a mais perigosa (§1.1, §4.0).

### 3.2 O TOM que este par pede — "você já é quase entendido; treine o ‘quase’"

**Comportamento com consequência, nunca adjetivo de povo:**

*SINAL:* o comprador atravessa para a Espanha esperando ser entendido no próprio italiano — e, na maior parte do tempo, é.
*O QUE É ALI:* a proximidade é real (~82% cognato) e o italiano de fato se faz entender no essencial. **Mas os poucos lugares onde a semelhança mente entregam a coisa errada com toda a confiança** — um jumento no café, vinagre no lugar do azeite, o remédio errado na farmácia.
*O QUE VOCÊ FAZ:* usar o espanhol nos **poucos** pontos onde "quase" trai — o falso amigo. É o eixo do curso.
*O QUE MELHORA:* você para de pedir um jumento e passa a ser entendido nos 20% que importam.

**A consequência de redação, e é o inverso do alemão:** como o francês, o italiano **não tem escotilha de idioma forte**, então M1 carrega valor real de produção. Mas o argumento de venda é próprio: **não** "sem isto você não se vira" (o italiano se vira demais), e sim **"você já se vira quase todo; o curso é para o ‘quase’"**. A proximidade é a vantagem **e** a armadilha — INV-11 pagando.

**⚠️ G6:** a reputação recíproca latina ("italianos e espanhóis se entendem", "os dois são calorosos") **não pode virar frase.** Entra só como o comportamento observável acima, com o **espelho** (trava C): *o italiano que fala italiano no balcão espanhol é o mesmo turista de toda fronteira, e o espanhol faz igual em Roma.*

### 3.3 O que ele NÃO sabe (e o que difere do francês)

1. **O DCC não existe — a Itália é Eurozona.** Paga em euros com cartão em euros. `B14` perde o coração (o markup, `sin conversión`). **Diferença do francês:** a Itália usa **mais espécie** que a França (país de cartão), então o argumento de reposição `con tarjeta` é **mais forte** que no francês, **mais fraco** que no alemão. B14 reconstrói em torno de terraza/Euronet/`hoja de reclamaciones` + canal de consumo intra-UE.
2. **Numerais não invertem — brinde.** O italiano diz `ventuno` (vinte-e-um), mesma ordem de `veintiuno`. Sem a armadilha alemã.
3. **`le nove e mezza` = `las nueve y media` = 9h30 — brinde.** Sem o trap `halb zehn`.
4. **A defasagem do jantar:** o jantar italiano (~20h–21h) é **o mais próximo do espanhol** de todos os pares (mais que o francês) — a `cena` das 21h+ quase não choca. **I01 fica ainda mais leve.** O que sobra é a **siesta / horário partido** e o almoço às 14h–15h.
5. **`Salute!` e o brinde:** o italiano diz `Salute!`/`Cin cin` e o protocolo do olhar não é a regra rígida alemã. Menos delta. ⚠️ campo 6 pendente.
6. **O falso amigo — o eixo (§4).** É o que o italiano não sabe que não sabe, porque a semelhança máxima o convence de que sabe.

### 3.4 Atrito social — comportamento com consequência (resumo)

- **`buongiorno`/`hola` ao entrar:** o italiano cumprimenta ao entrar no comércio (`buongiorno`/`salve`), norma partilhada — **reconhecimento, não instrução**; B02 economiza o bloco.
- **O tratamento, nos dois sentidos:** `Lei` reflexo com o garçom jovem (excesso de `usted`) × `tú` no banco (sub-formalização). Remédio **bidirecional e leve** (não o bloco anti-`Sie` alemão). ⚠️ anti-padrão 9 se copiar o DE.
- **Rachar a conta:** o italiano está **perto do default espanhol** (dividir `a partes iguales` é comum na mesa mediterrânea) — rachar **desce de peso**, como no francês. ⚠️ rotular CONSENSO, sem fonte quantitativa.
- **Gorjeta:** arredondar / pequeno (`coperto` já cobre o serviço), bate com o espanhol — o conflito britânico/americano some.

---

## 4. OS SLOTS AFETADOS — e o EIXO

**A espinha é LEI: 36 slots, mesma ordem, nenhum excluído/renomeado/reordenado.** `slots.json` não muda. **Zero extensões — 36 partes exatas.**

### 4.0 O EIXO — o falso amigo, a língua-irmã que engana AO MÁXIMO

**Como "a regra de leitura" organizou o alemão e "o falso amigo" o francês, aqui o falso amigo organiza o italiano com força máxima** — é o par mais cognato do catálogo:

- **É o erro nº 1** (§1.1): a proximidade que engana, elevada ao extremo.
- **É a categoria mais cara da derivação** — léxico presente e mal calibrado custa mais que ausente, e aqui há mais léxico "presente" que em qualquer par.
- **Mora fisicamente em B10** (§1.6), **reaparece como gag em ME-PONE/QUERIA** (`burro`), **à mesa** (`caldo`, `aceite`), **na farmácia** (`constipado`), **na placa** (`salida`→subir, `oficina`→oficina mecânica), **no elogio** (`rico`), **na conversa** (`en absoluto`, sentido oposto).
- **É a TRANSPARÊNCIA FALSA, não só o léxico** — a mesma proximidade produz **calque** (`tengo caldo` por "tenho calor"), **excesso do perfeito** (`he ido` por `fui`) e **sentido invertido** (`en absoluto`). E produz a **escotilha-armadilha** única deste par: falar italiano e ser 80% entendido.

Regra de redação (a que segura o G4): **um falso amigo por parte, grudado à cena onde ele morde, nunca uma lista lida em voz alta.**

### 4.1 B04 e B05 colapsam (cidadão da UE)

O italiano é **cidadão da UE** — B04 e B05 colapsam porque o conteúdo é sobre o **estatuto jurídico do comprador**, não sobre a Espanha. **B04** perde ETIAS/EES/90-180/passaporte-de-terceiro-país/eSIM (roaming intra-UE tarifa como em casa); entra o **cartão TEAM/EHIC** (a *Tessera Europea di Assicurazione Malattia*, no verso da Tessera Sanitaria italiana), seguro complementar, `carta d'identità` válida (basta, brinde intra-UE), caução na locadora. **B05** perde o controle de fronteira Schengen; a função migra ao check-in do hotel (RD 933/2021) e à locadora. Bônus: aqui **NÃO** cai o falso amigo `nombre` do francês — `nombre`=`nome` é brinde.

### 4.2 A tabela dos 36 (indicativa — nenhum slot tem mudança zero)

| slot | mudança | uma linha |
|---|---|---|
| **B01** | **TOTAL** | outra fonética, e a MAIS LEVE do catálogo: só jota + `ce_ci_z`; caem tônica/finais/`u`/nasal/`r` (todos brindes) |
| **B02** | **GRANDE** | `buongiorno`/`hola` reconhecimento; recalibragem `Lei`→`usted` leve/bidirecional |
| **B03** | **PEQUENA** | `ME-PUEDE` barato; `entender`**≈**`intendere` (NÃO é falso amigo — brinde, ao contrário do FR) |
| **B04/B05** | **TOTAL** | §4.1 — cidadão UE; TEAM/EHIC; sem fronteira Schengen |
| **B06** | **MÉDIA** | caixa de banco × Euronet; cartão hábito médio (mais espécie que a França) |
| **B07** | **MÉDIA** | ⚠️ **carro NÃO domina** (Itália sem fronteira — avião/ferry); táxi/VTC/locadora; `ME-HE-DEJADO` barato |
| **B08** | **MÉDIA** | par `está el`×`hay un` nativo; `h` de `¿Hay?` BRINDE; falso amigo `salida`→**subir** |
| **B09** | **MÉDIA (menos)** | numerais NÃO invertem; sem `halb`; `¿Tengo que?`=`Devo?` baratíssimo |
| **B10** | **TOTAL — parte NOVA e a mais densa dos 4 pares** | §1.6/§4.0 — o eixo mora aqui |
| **B11** | **PEQUENA/MÉDIA** | `OTRA`=`un altro`; `ME-PONE` chega; **gag-âncora `burro`**; `largo`/`vaso` secundários |
| **B12** | **MÉDIA** | `la carta`/`menú` batem (brinde); `sin/con/para` baratíssimo; `demandar`≠"pedir" |
| **B13** | **MÉDIA** | jota de `jamón` som novo + `ch`=[k] de `chorizo`/`leche`; `caldo`≠quente; `allergico **a**` brinde. **INTOCÁVEL** |
| **B14** | **TOTAL** | §3.3 — DCC não existe; `con tarjeta` (argumento médio) |
| **B15/B16** | **PEQUENA** | `largo`≠largura; `guardar`≠olhar; `ll` em `la llave`; `nombre`=nome brinde |
| **B17** | **MÉDIA** | `¿Quién es el último?` porta; **`constipado`≠"costipato" PERIGOSO**; TEAM/EHIC |
| **B18** | **PEQUENA** | `Me he dejado` barato; despedida porta |
| **I01** | **MÉDIA (menos)** | **a defasagem de jantar é a MENOR de todos**; `y media` brinde |
| **I02** | **MÉDIA** | recalibragem leve/bidirecional; pedido curto já certo |
| **I03** | **PEQUENA** | `menù del giorno` de graça; `ELECCION` porta (`consigliare`); `rico`≠"ricco" |
| **I04** | **MÉDIA (menos)** | rachar desce de peso (perto do default espanhol) |
| **I05** | **MÉDIA** | `PREFERENCIA` brinde (`piacere`); `en absoluto` sentido oposto |
| **I06** | **MÉDIA** | perfeito nativo; **mas superusa o perfeito**: `ayer` pede `fui`, não `he ido` |
| **I07** | **MÉDIA** | `APRECIACION` a MAIS barata (registro + `-issimo` nativo); gag `embarazada`; risco só `rico` |
| **I08** | **PEQUENA** | votos congelados portam; `Salute!`/olhar (⚠️ campo 6) |
| **I09/I10** | **PEQUENA/GRANDE** | gorjeta sem conflito; I10 reconstruído em rachar/preço fixo |
| **A01** | **TOTAL** | §4.3 — o ouvido volta a treinar a lenição (o italiano NÃO come finais, ao contrário do FR) |
| **A02–A08** | **PEQUENA a GRANDE** | catalão/basco não são transfronteiriços como no FR (a Itália não faz fronteira); a relação Itália–Espanha em A03 pede pesquisa (⚠️ G6) |

### 4.3 A01 — o ouvido muda de mapa, e é o INVERSO do francês

O par EN aponta o ouvido para a Andaluzia; o alemão, para Baleares/Canárias; o francês, para o litoral catalão-continental. Para o italiano, sem a ficha Turespaña (⚠️ §6), a distribuição fica em aberto — mas o **mecanismo de A01 é o inverso do francês**: o francês **apaga o `-s` final** e por isso "come o fim como o andaluz" (a virada era "devolva o que você come"); **o italiano NÃO apaga finais e é muito consonantal**, então a lenição meridional (o `-s` aspirado, o `-d-` caído, o `-r`/`-l` abrandado) lhe é **genuinamente estranha** — A01 volta a ser **treino de escuta** da lenição, como no caso base, não reconhecimento. O programa do deslize **não entra** (o italiano encadeia), e nenhum programa de tônica entra (a tônica já bate).

---

## 5. Comparação explícita com o francês — o que muda

| eixo | no FRANCÊS | no ITALIANO |
|---|---|---|
| **similaridade lexical** | ~75% cognato | **~82% — o par mais próximo do catálogo** |
| **fonética (B01)** | boca boa, mas **três custos caros**: tônica oxítona (motor central), finais apagados, nasalização; + `u`=[y], jota, `r` uvular | **quase toda BRINDE**: tônica paroxítona bate, finais plenos, sem nasal, `u`=[u], `r` **tap nativo**. Sobram só **a jota** (sem âncora uvular) e o **`ce_ci_z`**; entram o **`ch`=[k]** e as **doppie** (italianíssimas). **B01 é o mais leve do catálogo** |
| **peso do léxico** | eixo do curso, pesado | **eixo do curso, AINDA mais pesado** — mais cognato = mais falso amigo |
| **gag-âncora** | `embarazada` (gênero-limitada, não gravada) | **`burro`** (manteiga→jumento; gênero-neutra; `burro`=jumento GRAVADO ep-a02) |
| **falsos amigos** | `entender`/`nombre`/`quitar`/`gato`/`salir`(=sujar) | **re-derivados:** `burro`, `aceite`, `caldo`, `subir`/`subire`, `oficina`, `guardar`, `pronto`; `salir`=**subir** (não sujar). Os do FR **não portam** |
| **ordem do roster** | UM swap vs o alemão (QUERIA volta a 1, ME-PONE a 3) | **ZERO swaps vs o francês** — QUERIA 1, HAY 2, ME-PONE 3, PUEDO 4 |
| **PUEDO** | sustentado pelo **carro** (65% de carro, FATO) | carro **não porta** (Itália sem fronteira, avião/ferry); sustentado pelo improviso + `subir`/`subire` |
| **jantar (I01)** | defasagem ~1h–1h30 | **a menor de todos** (~0–30 min) |
| **escotilha** | sem inglês forte; M1 carrega produção | idem, **+ a escotilha-armadilha própria**: falar italiano e ser 80% entendido |

**A frase que resume:** no francês a fonética já era quase brinde e o léxico pesava; **no italiano a fonética é AINDA mais brinde (o `r` nativo, a tônica que bate, os finais plenos) e o léxico pesa AINDA mais (82% cognato)** — a "proximidade que engana, no máximo".

---

## 6. O que este documento NÃO decidiu (bloqueios)

1. **A GRADE-36-IT.md**, linha a linha.
2. **A revisão nativa da fonética** — todo o §1 é INFERÊNCIA; precisa de revisor **IT-L1 + espanhol peninsular** antes do áudio.
3. **A ficha executiva Turespaña-Italia** (§3.1) — **FATO ausente**: chegadas, distribuição por comunidade, **meio de chegada** (afeta PUEDO/B07), estadia, EF EPI exato. Sem ela, o "avião, não carro" é INFERÊNCIA geográfica.
4. **A conferência dos clipes espanhóis** contra o manifesto: GRAVADOS `burro`/`caldo`/`constipado`/`la salida`/`¡Qué rico!`/`No entiendo`/`a nombre de`/`agua caliente`/`aceituna`; NÃO gravados `mantequilla`/`aceite`/`vaso`/`café largo`/`embarazada`/`en absoluto`.
5. **A voz-guia ITALIANA** (casting) — placeholder.
6. **A carga da relação Itália–Espanha em A03** — pesquisa + revisor, exposição ao G6.
7. **O campo 6 do item `Salute`/olhar** (§3.4).

---

## Fontes citadas

- Medição de `curso-espanha` (reuso de fala espanhola e pesquisa de destino) — herdada dos SKUs EN/DE/FR.
- `pesquisa-espanha.md` (reuso integral) — fatos do destino.
- ⚠️ **Turespaña, ficha ejecutiva Italia — PENDENTE** (não consultada neste documento; §6 item 3).
- ⚠️ **EF EPI (posição da Itália) — a reconferir** (§3.1).
