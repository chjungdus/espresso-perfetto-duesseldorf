# Espresso Perfetto Bar – Website (Nexuzo)

Eigenständiges Projekt. Ein Claude-Code-Chat pro Website: In diesem Chat geht es nur um diese Seite.

## Kunde

- Espresso Perfetto Bar, Friedrichstraße 40a, 40217 Düsseldorf (Friedrichstadt)
- Google Maps: https://maps.google.com/maps?cid=6343381354609917483
- Bewertung laut Google: 4,8 von 5, 459 Bewertungen
- Öffnungszeiten: Mo–Fr 7–18 Uhr, Sa 8–18 Uhr, So 10–16 Uhr
- Laut Tafel und Vitrine (Fotos): Espresso, Macchiato, Caffè Creme, Cappuccino, Caffè Latte, Latte Macchiato, Americano, Cortado, Flat White, Kakao, Moccachino, Chai, Matcha, Tees, Iced Coffee/Latte, Freddo, Coffee Mousse, frischer O-Saft, Ciabatta, Focaccia, Schiffchen, Müsli-Becher, Quiche, Cornetti, Sfogliatelle, Cannoli, Macarons, Brownies, Kuchen, Pistazien-Ball (selbstgemacht). Hafer-, Soja-, laktosefreie Milch auf Wunsch.
- Angebot (laut Google-Profil und Bewertungen): italienisch geprägter Kaffee (Espresso Macchiato, Latte Macchiato, Cappuccino, Matcha Latte mit Erdbeersirup), Frühstück/Brunch, Quiche, Sandwiches, vegetarische Gerichte, Cannoli, hausgemachter Kuchen, Nussriegel, Kaffeebohnen zum Mitnehmen
- Besonderheiten: keine Reservierung, kostenloses WLAN, Hunde erlaubt, Plätze drinnen und draußen, Mitnehmen möglich

## Stil (Redesign Oktober 2026)

Editorial-Aufbau (Logo mittig, geteilter Hero, Laufband, Karte, Bildstreifen). Farbwelt seit 16.10.2026 aus den echten Fotos der Bar: Rosa der Decke (#ec8fa3), Schwarz der Kreidetafel (#1d1b1d), Orange der Tafellinien (#e8692b), Weiß. Die Karte ist wie die Tafel gestaltet (schwarz mit orangen Linien). Logo in schmaler, fetter Schrift mit „la cultura del caffè“ wie auf der Tafel. Bewusst anders als Kiosk Erbil und frittenliebe-bilk.de.

- Farben und Schriften stehen oben in `style.css` (`:root`). Keine Webfonts, nur Systemschriften.
- Mateo wollte ausdrücklich eigenständige Designs, nicht die Vorlage von frittenliebe-bilk.de kopieren.

## Regeln (human-website-design)

- Nur HTML, CSS, JavaScript. Kein TypeScript, kein React, kein Build-Tool.
- Keine Emojis im Seiteninhalt. Icons nur als Inline-SVG im selben Strichstil.
- `border-radius` auf Karten und Buttons maximal 8px (Pillen für Status und Chips ausgenommen).
- Keine erfundenen Zahlen, Zitate oder Bewertungstexte. Nur belegte Daten (Google-Profil, Angaben des Inhabers).
- Zentrierter Text nur in der Hero-Headline.
- Fotos: nur echte Fotos der Bar (von Mateo, Oktober 2026) aus `assets/photos/`. Keine Unsplash-Bilder mehr.
- Neue Korrekturwünsche von Mateo, die generell gelten, als kurze Lehre in `/mnt/skills/plugins/human-website-design/references/learnings.md` festhalten (falls Claude Code den Skill lokal hat).

## Bilder

Echte Fotos von Mateo in `assets/photos/` (auf max. 1600px und unter 400 KB komprimiert). Das Foto der Außenbank mit Kissen ist bewusst nicht eingebaut.

## Offene Punkte

- Telefonnummer und Instagram-Name vom Inhaber holen (nicht erfunden, deshalb noch nicht auf der Seite)
- Preise für Kaffee und Heißgetränke stammen von der Tafel (Foto). Preise für kalte Getränke und Speisen waren auf dem Foto nicht sicher lesbar, deshalb nur Namen
- Impressum und Datenschutz: Platzhalter (gelb markiert) ausfüllen, rechtlich prüfen lassen
- Probe-Leiste und Footer-Hinweis entfernen, sobald der Kunde die Seite übernimmt (HTML-Kommentare „PROBE-HINWEIS")

## Veröffentlichen (Nexuzo-Workflow)

Ein GitHub-Repo pro Prospect, Auslieferung über GitHub Pages (Account `chjungdus`). Vorschlag für den Repo-Namen: `espresso-perfetto-duesseldorf`. Danach Link als Probe-Website an den Inhaber schicken. Eigene Domain erst nach Zusage.

## Dateien

```
index.html      Startseite (alle Sektionen)
impressum.html  Platzhalter-Vorlage
datenschutz.html  Vorlage für statische Seite ohne Tracking
style.css       komplettes Styling inkl. Tokens und Hintergrundmotiven
script.js       Menü, Öffnungsstatus (HOURS oben im Skript), FAQ, Lightbox, Karte
assets/         fonts/ und photos/
```
