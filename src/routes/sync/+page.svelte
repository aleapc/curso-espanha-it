<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import { decodeSync, importSync } from '$lib/sync';

  // 'fora' = link aberto no navegador (não no PWA instalado): no iOS o storage é
  // SEPARADO — importar aqui gravava no lugar errado e mostrava sucesso falso.
  let estado = $state<'lendo' | 'preview' | 'ok' | 'erro' | 'fora'>('lendo');
  let detalhe = $state('');
  let codigo = $state('');
  let previa = $state<{ ale: number; dea: number } | null>(null);
  let copiado = $state(false);

  onMount(() => {
    const m = window.location.hash.match(/s=(IT1.[A-Za-z0-9_-]+)/);
    if (!m) {
      estado = 'erro';
      detalhe = 'Nessun codice in questo link. Chiedine uno nuovo.';
      return;
    }
    codigo = m[1];
    const data = decodeSync(codigo);
    if (!data) {
      estado = 'erro';
      detalhe = 'Codice non valido — chiedine uno nuovo.';
      return;
    }
    const standalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (navigator as unknown as { standalone?: boolean }).standalone === true;
    if (!standalone) {
      estado = 'fora';
      return;
    }
    // Dentro do app: mostra o que vai entrar e ESPERA confirmação (merge é
    // irreversível — união sem undo).
    previa = { ale: data.ale.length, dea: data.dea.length };
    estado = 'preview';
  });

  function confirmar() {
    const r = importSync(codigo);
    if (r) {
      estado = 'ok';
      detalhe = `Uniti: +${r.ale} e +${r.dea}. 🎉`;
    } else {
      estado = 'erro';
      detalhe = 'Codice non valido.';
    }
  }

  async function copiar() {
    try {
      await navigator.clipboard.writeText(codigo);
      copiado = true;
    } catch {
      /* iOS antigo sem clipboard API — o textarea abaixo permite copiar na mão */
    }
  }
</script>

<div class="mt-10 text-center">
  {#if estado === 'lendo'}
    <p>Lettura del codice…</p>
  {:else if estado === 'preview'}
    <h1 class="text-2xl font-extrabold">Sincronizzare? 🔄</h1>
    <p class="mt-2 text-carvao/70">
      Questo codice contiene {previa?.ale ?? 0} + {previa?.dea ?? 0} parti completate. L'importazione
      unisce tutto e non cancella nulla.
    </p>
    <button class="btn-primary mt-4" onclick={confirmar}>Importa adesso</button>
  {:else if estado === 'ok'}
    <h1 class="text-2xl font-extrabold text-salvia">Fatto ✅</h1>
    <p role="status" class="mt-2 text-carvao/70">{detalhe}</p>
  {:else if estado === 'fora'}
    <h1 class="text-2xl font-extrabold">Quasi fatto 📲</h1>
    <p class="mx-auto mt-2 max-w-sm text-carvao/70">
      Questo link si è aperto nel tuo <b>browser</b> — ma i tuoi progressi sono nell'<b>app ¡Dime!</b>
      sulla tua schermata Home. Copia il codice e incollalo lì:
    </p>
    <ol class="mx-auto mt-3 max-w-sm space-y-1 text-left text-sm text-carvao/70">
      <li>1. Tocca <b>Copia il codice</b> qui sotto</li>
      <li>2. Apri l'app <b>¡Dime!</b> sulla tua schermata Home (su computer: la pagina iniziale del corso)</li>
      <li>3. In <b>Sync</b>, incollalo e importa</li>
    </ol>
    <button class="btn-primary mt-4" onclick={copiar}>
      {copiado ? '✅ Copiato' : '📋 Copia il codice'}
    </button>
    <textarea
      class="mx-auto mt-3 block w-full max-w-sm rounded-xl border border-black/10 bg-white p-2 text-[10px] text-carvao/60"
      rows="3"
      readonly
      onclick={(e) => (e.currentTarget as HTMLTextAreaElement).select()}>{codigo}</textarea
    >
  {:else}
    <h1 class="text-2xl font-extrabold text-terracota">Hmm… 🤔</h1>
    <p role="status" class="mt-2 text-carvao/70">{detalhe}</p>
  {/if}
  <a href="{base}/" class="btn-primary mt-6 inline-block">Vai al corso</a>
</div>
