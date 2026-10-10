# Espresso Perfetto Bar – Website (Nexuzo)

Eigenständiges Projekt. Ein Claude-Code-Chat pro Website: In diesem Chat geht es nur um diese Seite.

## Kunde

- Espresso Perfetto Bar, Friedrichstraße 40a, 40217 Düsseldorf (Friedrichstadt)
- Google Maps: https://maps.google.com/maps?cid=6343381354609917483
- Bewertung laut Google: 4,8 von 5, 459 Bewertungen
- Öffnungszeiten: Mo–Fr 7–18 Uhr, Sa 8–18 Uhr, So 10–16 Uhr
- Angebot (laut Google-Profil und Bewertungen): italienisch geprägter Kaffee (Espresso Macchiato, Latte Macchiato, Cappuccino, Matcha Latte mit Erdbeersirup), Frühstück/Brunch, Quiche, Sandwiches, vegetarische Gerichte, Cannoli, hausgemachter Kuchen, Nussriegel, Kaffeebohnen zum Mitnehmen
- Besonderheiten: keine Reservierung, kostenloses WLAN, Hunde erlaubt, Plätze drinnen und draußen, Mitnehmen möglich

## Stil

Vorlage ist frittenliebe-bilk.de (gleiche Struktur und Gefühl): sticky Navigation mit Hamburger-Menü, dunkler Hero mit Overlay, Öffnungsstatus-Pille, USP-Leiste, Über-uns mit schräg gedrehtem Foto-Rahmen, Karten, Galerie mit Lightbox, Bewertungen, FAQ-Akkordeon, Kontakt mit Öffnungszeiten-Tabelle und Zwei-Klick-Karte, dunkler Footer. Jede Sektion hat ein eigenes Hintergrundmotiv (Kaffee-Icons als SVG-Muster, Papierstruktur, Punktraster).

- Farben (siehe `:root` in `style.css`): Karamell `#a4531f` als Akzent, Espresso-Braun `#2e1c12` als Text, Creme-Flächen, Grün `#2f5d46` nur sparsam
- Schriften: Fraunces (Überschriften), Inter (Fließtext), lokal über `@font-face`. Die woff2-Dateien gehören nach `assets/fonts/` (`fraunces-latin-wght-normal.woff2`, `inter-latin-wght-normal.woff2`). Solange sie fehlen, greift Georgia bzw. die Systemschrift. Keine Google-Fonts-Einbindung (DSGVO).

## Regeln (human-website-design)

- Nur HTML, CSS, JavaScript. Kein TypeScript, kein React, kein Build-Tool.
- Keine Emojis im Seiteninhalt. Icons nur als Inline-SVG im selben Strichstil.
- `border-radius` auf Karten und Buttons maximal 8px (Pillen für Status und Chips ausgenommen).
- Keine erfundenen Zahlen, Zitate oder Bewertungstexte. Nur belegte Daten (Google-Profil, Angaben des Inhabers).
- Zentrierter Text nur in der Hero-Headline.
- Keine Stock-Fotos. Nur echte Fotos des Ladens.
- Neue Korrekturwünsche von Mateo, die generell gelten, als kurze Lehre in `/mnt/skills/plugins/human-website-design/references/learnings.md` festhalten (falls Claude Code den Skill lokal hat).

## Bilder

Mateo liefert die Fotos. Dateien in `assets/photos/` ablegen, genau mit diesen Namen (oder die `src` im HTML anpassen):

- `hero.jpg` (Querformat, ca. 1920x1080)
- `hero-hochformat.jpg` (4:5)
- `ueber-uns.jpg` (4:5)
- `galerie-1.jpg` bis `galerie-5.jpg`

Fotos vorher auf ca. 1600px Kantenlänge und unter 400 KB komprimieren. Fehlt eine Datei, zeigt die Seite automatisch das Kaffee-Muster (Logik in `script.js`).

## Offene Punkte

- Telefonnummer und Instagram-Name vom Inhaber holen (nicht erfunden, deshalb noch nicht auf der Seite)
- Preise der Karte eintragen (HTML-Kommentar „PREISE EINTRAGEN" in `index.html`)
- Satz „seit 1999" im Über-uns-Text mit dem Inhaber abstimmen
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
