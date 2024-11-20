<h1>Vefforritun1, 2024 - Hópverkefni 2</h1>

## Verkefnalýsing
Þetta verkefni snýst um að birta efni um vefforritun á mismunandi síðum, byggt á gefnum gögnum. Verkefnið er hannað til að styðja við vinnu í hóp og krefst útfærslu á ýmsum þáttum eins og routing, birtingu gagna og skalanlegu útliti.

Verkefnið felst í:
- Að birta forsíðu sem dregur saman efni verkefnisins.
- Að birta efni fyrir mismunandi flokka (HTML, CSS, JavaScript, Aðgengi) byggt á JSON gögnum.
- Að nota History API og JavaScript til að gera vefinn gagnvirkan án þess að hlaða nýjar síður.

---

## Uppsetning

### **Til að keyra verkefnið:**

1. Klónið repo-ið:
   ```bash
   git clone <repository_url>

2. Setjið upp nauðsynleg npm pakka:
<code>npm install</code>

3. Keyrið verkefnið í þróunarumhverfi:
<code>npm run dev</code>

4. Opnið vefinn í vafra á:
<code>http://localhost:5173/</code>

---

## Hvernig virkar þetta

1. <b>Routing:</b> Þegar notandi smellir á hlekk er History API notað til að uppfæra slóðina án þess að hlaða nýja síðu.
  - <code>/?type=html</code> sýnir efni fyrir HTML.
  - <code>/?type=html&content=lectures</code> sýnir fyrirlestur fyrir HTML.

2. <b>Gögn:</b> Verkefnið sækir efni úr JSON skrám í <code>public/data/</code> möppunni.

3. <b>Leiðsögukerfi:</b> Virkt leiðsögukerfi er byggt á gögnum úr <code>index.json</code>.

4. <b>Birting gagna:</b> Sérhannaðar síður birta námsefni, lykilhugtök og spurningar fyrir hvern flokk.


---

## Tæki og tól
### **Það sem notað var í verkefninu:**
- <b>Vite:</b> Fyrir þróunarumhverfi.
- <b>Sass:</b> Fyrir stílsnið.
- <b>Stylelint:</b> Til að staðla og yfirfara CSS.
- <b>ESLint:</b> Til að yfirfara JavaScript kóða.

### **Uppsetning**
Keyrið eftirfarandi skipanir til að keyra staðlar:
<code>npm run lint</code>





