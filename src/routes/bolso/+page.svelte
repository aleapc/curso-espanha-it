<script lang="ts">
  import { browser } from '$app/environment';
  import { curso } from '$lib/curso.config';

  type Currency = (typeof curso.homeCurrencies)[number];
  type Rates = Record<string, number>;

  const embedded = { date: '2026-07-27', rates: { GBP: 0.85524, USD: 1.1389 } };
  const storageKey = `dime-rates-${curso.destCurrency}`;
  const labels: Record<string, { flag: string; locale: string }> = {
    EUR: { flag: '🇪🇺', locale: 'en-GB' },
    GBP: { flag: '🇬🇧', locale: 'en-GB' },
    USD: { flag: '🇺🇸', locale: 'en-US' }
  };

  let rates = $state<Rates>({ ...embedded.rates });
  let rateDate = $state(embedded.date);
  let source = $state<'saved' | 'online' | 'embedded'>('embedded');
  let baseAmount = $state(10);
  let texts = $state<Record<string, string>>({});
  let editing = $state<string | null>(null);

  function parse(raw: string): number {
    let value = raw.trim().replace(/[^\d.,]/g, '');
    if (!value) return 0;
    if (value.includes(',') && value.includes('.')) {
      value = value.lastIndexOf(',') > value.lastIndexOf('.')
        ? value.replace(/\./g, '').replace(',', '.')
        : value.replace(/,/g, '');
    } else if (value.includes(',')) {
      value = value.replace(',', '.');
    } else if (value.includes('.')) {
      const parts = value.split('.');
      if (parts.length > 2 || (parts.length === 2 && parts[1].length === 3 && parts[0].length <= 3)) {
        value = parts.join('');
      }
    }
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  function format(currency: string, amount: number) {
    return amount.toLocaleString(labels[currency]?.locale ?? 'en-GB', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  function valueIn(currency: string) {
    return currency === curso.destCurrency ? baseAmount : baseAmount * (rates[currency] ?? 1);
  }

  function onInput(currency: string, raw: string) {
    editing = currency;
    texts[currency] = raw;
    const amount = parse(raw);
    baseAmount = currency === curso.destCurrency ? amount : amount / (rates[currency] ?? 1);
  }

  function loadSavedRates() {
    if (!browser) return;
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) ?? 'null');
      if (saved?.date && saved?.rates && curso.homeCurrencies.every((c) => saved.rates[c] > 0)) {
        rates = saved.rates;
        rateDate = saved.date;
        source = 'saved';
      }
    } catch {
      // Embedded rates remain available offline.
    }
  }

  async function refreshRates() {
    if (!browser || curso.homeCurrencies.length === 0 || !navigator.onLine) return;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 3500);
    try {
      const currencies = curso.homeCurrencies.join(',');
      const response = await fetch(
        `https://api.frankfurter.app/latest?from=${curso.destCurrency}&to=${currencies}`,
        { signal: controller.signal }
      );
      if (!response.ok) return;
      const data = await response.json();
      if (!data?.date || !curso.homeCurrencies.every((c) => data.rates?.[c] > 0)) return;
      rates = data.rates;
      rateDate = data.date;
      source = 'online';
      localStorage.setItem(storageKey, JSON.stringify({ date: rateDate, rates }));
    } catch {
      // Offline/timeout: keep the saved or embedded rates without blocking the page.
    } finally {
      clearTimeout(timer);
    }
  }

  $effect(() => {
    loadSavedRates();
    void refreshRates();
  });

  $effect(() => {
    for (const currency of [curso.destCurrency, ...curso.homeCurrencies]) {
      if (editing !== currency) texts[currency] = format(currency, valueIn(currency));
    }
  });

  const fieldClass = 'w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-right text-lg font-semibold outline-none focus:border-terracota';
</script>

<svelte:head><title>Tasca del viaggiatore · ¡Dime!</title></svelte:head>

<div class="mx-auto max-w-lg space-y-6 pb-8">
  <header>
    <p class="text-xs font-bold uppercase tracking-widest text-terracota">La Spagna in un colpo d’occhio</p>
    <h1 class="mt-1 text-2xl font-extrabold">Tasca del viaggiatore</h1>
    <p class="mt-1 text-sm text-carvao/65">L’essenziale resta disponibile anche in modalità aereo.</p>
  </header>

  <section>
    <h2 class="mb-2 text-lg font-bold">💱 Convertitore di valuta</h2>
    {#if curso.homeCurrencies.length > 0}
      <div class="card space-y-3 p-4">
        {#each [curso.destCurrency, ...curso.homeCurrencies] as currency (currency)}
          <label class="flex items-center gap-3">
            <span class="w-24 text-sm font-semibold text-carvao/70">{labels[currency]?.flag} {currency}</span>
            <input
              class={fieldClass}
              inputmode="decimal"
              aria-label={`Amount in ${currency}`}
              value={texts[currency] ?? ''}
              oninput={(event) => onInput(currency, (event.target as HTMLInputElement).value)}
              onfocus={() => (editing = currency)}
              onblur={() => (editing = null)}
            />
          </label>
        {/each}
        <div class="border-t border-black/5 pt-3 text-xs text-carvao/55">
          <p>1 EUR = {rates.GBP?.toFixed(5)} GBP · {rates.USD?.toFixed(4)} USD</p>
          <p>Rate date: {rateDate} · {source === 'online' ? 'updated online' : source === 'saved' ? 'saved on this phone' : 'offline reference'}.</p>
          <p class="mt-1">Reference only. Check your card or bank rate before spending.</p>
        </div>
      </div>
    {:else}
      <div class="card p-4 text-sm">Spagna e Italia usano l’euro: non serve alcuna conversione.</div>
    {/if}
  </section>

  <section>
    <h2 class="mb-2 text-lg font-bold">🔌 Prese & corrente</h2>
    <div class="card p-4 text-sm leading-relaxed">
      La Spagna usa <strong>prese di tipo C e F</strong> a <strong>230 V / 50 Hz</strong>. Le spine italiane di tipo C sono compatibili; per quelle di tipo L può servire un adattatore.
    </div>
  </section>

  <section>
    <h2 class="mb-2 text-lg font-bold">🆘 Emergenza</h2>
    <a href="tel:112" class="card flex items-center justify-between p-4">
      <span><strong>112</strong><span class="ml-2 text-sm text-carvao/65">Polizia, ambulanza o vigili del fuoco in tutta l’UE</span></span>
      <span class="text-terracota">Chiama →</span>
    </a>
  </section>

  <section>
    <h2 class="mb-2 text-lg font-bold">💡 Da sapere</h2>
    <ul class="card divide-y divide-black/5 px-4 text-sm leading-relaxed">
      <li class="py-3">🚰 L’acqua del rubinetto è potabile in tutta la Spagna.</li>
      <li class="py-3">🍽️ La mancia è facoltativa. Per un buon servizio è gradito circa il 5–10%.</li>
      <li class="py-3">🧾 Il rimborso IVA è riservato ai visitatori residenti fuori dall’UE.</li>
    </ul>
  </section>
</div>
