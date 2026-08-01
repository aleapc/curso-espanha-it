# Checklist de derivação — o que NÃO herda automaticamente do curso-base

Derivar um SKU copiando de outro herda o estado do curso-base **no momento da
cópia**. Se o curso-base evoluiu depois, as correções não retroagem. Estes são os
pontos que já foram esquecidos e têm que ser conferidos em TODO curso novo:

## Infraestrutura de front-end (agnóstica de língua — portar do inglês, que é o mais atual)

- [ ] `scripts/gera-outline.mjs` tem o bloco `COM_IMAGEM` (exporta o Set de ids com foto).
      Sem ele, a home não sabe quais cards têm imagem → 0 fotos ou 404 em massa.
- [ ] `src/routes/+page.svelte` importa `COM_IMAGEM` e o `<img>` está dentro de
      `{#if COM_IMAGEM.has(ep.id)}`. Sem o guard: 404 por card sem foto.
- [ ] A rota `/kit` existe (6 arquivos: `+page`, `[tile]/`, `[tile]/[folha]/`).
      O `consulta.json` é só o DADO; a TELA é separada e foi esquecida no alemão.
- [ ] A home linka o `/kit` (o `<a>` flutuante no rodapé) — em texto da língua do comprador.
- [ ] `scripts/build-consulta.mjs` tem a desambiguação de **id de card**
      (bloco "IDENTIDADE ÚNICA DOS CARDS" + a guarda). O id do card é o `audioKey`;
      como o SKU derivado REUSA o mesmo clipe espanhol em episódios diferentes,
      dois steps consulta-marcados colidem no mesmo id → o `{#each (card.id)}`
      aborta na hidratação e a folha renderiza VAZIA no cliente (verde no build,
      quebrada no bolso). O inglês não colide; o alemão colidiu em 24 folhas e foi
      ao ar assim. **Quanto mais próximo do espanhol, mais reuso, mais colisão — o
      IT é o pior caso.** Sem o fix no gerador, TODA folha colidida quebra.
- [ ] `build-consulta.mjs` grava `sku: 'XX → Espanha'` com a SIGLA CERTA
      (o scaffold vem com 'DE → Espanha').

## Imagens — COPIAR do destino, nunca regerar por comprador

- [ ] `cp` do set canônico de imagens do destino para `static/img/` do SKU novo
      (Espanha: 47, o superset está no `curso-espanha-de`). A imagem é ativo do
      DESTINO — a mesma varanda em Sevilha para o aluno EN/DE/FR/IT. NÃO mandar
      pedido pro Mac de uma variante de comprador; o Mac/ponte só geram para um
      DESTINO NOVO. (Erro cometido e corrigido em 2026-07-28.)

## Portões que leem a língua do SKU (conferir que a língua está coberta)

- [ ] `scripts/lib/g6-gentilico.mjs` tem regra para a língua da NARRAÇÃO (guiaLingua).
      Sem ela, o G6 dá verde sem verificar estereótipo.
- [ ] `scripts/lib/g14-voz-lingua.mjs` — a config `_g14` do audio.config declara
      guiaLingua/alvoLingua corretos.
- [ ] `moldes.json._regras.vocabulario_molde` tem o termo da língua (o G15 o lê).

## Interface (traduzir para a língua do comprador — NÃO o que vem de dados)

- [ ] Toda string fixa de `+page.svelte`, `episodio/[id]/+page.svelte`,
      `quiz/`, `kit/`, `QuizPlayer.svelte` em texto do comprador.
- [ ] `app.html` `lang`, o manifest do PWA, o `types.ts` (comentários de voz).
- [ ] NÃO traduzir: os rótulos que vêm do `consulta.json`/`taxonomia.ts` (já na língua)
      nem a fala-alvo espanhola (é o conteúdo).

## Herança morta a apagar

- [ ] `src/lib/course/_superado/` (quizzes/docs antigos que vieram no clone).
- [ ] rota `/vozes` (página de escolha de voz em português — resíduo do Hablá).
- [ ] `mede-reuso.mjs` com o set GUIA errado (nomes de voz do curso-base).
