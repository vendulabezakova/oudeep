# Oudeep

Web pro Nikoletu Vitovskou Tirmazi, strategickou partnerku pro rozvoj lidí a týmů (Gallup CliftonStrengths). Slovenská verze běží na **[oudeep.com](https://www.oudeep.com)**, tento repozitář obsahuje **statický prototyp**, ze kterého web vznikl.

**Ukázka prototypu:** [vendulabezakova.github.io/oudeep](https://vendulabezakova.github.io/oudeep/)

## O projektu

Cílem bylo nahradit jednostránkový web s kotvami vícestránkovým webem, který klientka umí sama spravovat. Postup:

1. **Prototyp** ve statickém HTML, CSS a JavaScriptu (tento repozitář), schválený klientkou.
2. **Převod do WordPressu** podle prototypu 1:1, s texty a fotkami upravitelnými v administraci bez kódu.

## Stránky

- Úvodní stránka
- Tři programy: Team Deep Dive, Lead with Strengths, The Full Return
- Rozvojové programy na míru
- O mně
- Reference s rozbalovacím oknem na celé texty

## Co je v repozitáři

```text
index.html, team-deep-dive.html, lead-with-strengths.html,
the-full-return.html, programy-na-mieru.html, o-mne.html, referencie.html
css/style.css    design systém (proměnné, komponenty, responzivita)
js/main.js       navigace, rozbalovací menu, mobilní menu, modal s referencemi
media/           loga a fotografie
```

## Technické řešení

**Prototyp**
- čisté HTML, CSS a JavaScript bez frameworků
- design systém v CSS proměnných (barvy, typografická škála, mezery)
- responzivní rozvržení s breakpointy 900 px a 600 px
- písma Red Hat Mono a Nunito

**Reference (modal)**
- celé texty referencí jsou rovnou v HTML, JavaScript je jen zobrazí, takže jsou čitelné i pro vyhledávače
- procházení mezi referencemi šipkami, zavření klávesou Esc nebo kliknutím mimo okno
- ovládání z klávesnice, na mobilu se okno otevírá jako panel zdola

**WordPress verze**
- téma GeneratePress s vlastním child themem, vlastní šablony pro každou stránku
- editace obsahu přes ACF: každá sekce má vlastní pole, sdílené skupiny polí tam, kde je obsah stejného typu na více stránkách
- vícejazyčnost přes Polylang: slovenština jako výchozí jazyk bez předpony, čeština pod `/cs/`, jazyky nezávislé na sobě
- tlačítka a odkazy na rezervační kalendář sjednocené do jednoho cíle

## Moje práce

- návrh struktury webu a prototyp
- CSS design systém a responzivita
- JavaScript pro navigaci a modal
- child theme, šablony stránek, ACF pole, nastavení Polylangu
- nasazení na produkci, ladění po spuštění

## Stav

Slovenská verze je nasazená, česká mutace se připravuje.
