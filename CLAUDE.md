# Espresso Perfetto Bar – Website (Nexuzo)

Eigenständiges Projekt. Ein Claude-Code-Chat pro Website: In diesem Chat geht es nur um diese Seite.

## Kunde

- Espresso Perfetto Bar, Friedrichstraße 40a, 40217 Düsseldorf (Friedrichstadt)
- Google Maps: https://maps.google.com/maps?cid=6343381354609917483
- Bewertung laut Google: 4,8 von 5, 459 Bewertungen
- Öffnungszeiten: Mo–Fr 7–18 Uhr, Sa 8–18 Uhr, So 10–16 Uhr
- Angebot (laut Google-Profil und Bewertungen): italienisch geprägter Kaffee (Espresso Macchiato, Latte Macchiato, Cappuccino, Matcha Latte mit Erdbeersirup), Frühstück/Brunch, Quiche, Sandwiches, vegetarische Gerichte, Cannoli, hausgemachter Kuchen, Nussriegel, Kaffeebohnen zum Mitnehmen
- Besonderheiten: keine Reservierung, kostenloses WLAN, Hunde erlaubt, Plätze drinnen und draußen, Mitnehmen möglich

## Stil (Redesign Oktober 2026)

Editorial: helles Marmorgrau, Serifenschrift (Systemschriften), Logo mittig in der Navigation, geteilter Hero, Laufband, Speisekarte im Kartenlayout, horizontaler Bildstreifen, Italien-Dreiklang Grün/Weiß/Rot. Bewusst anders als Kiosk Erbil und frittenliebe-bilk.de.

- Farben und Schriften stehen oben in `style.css` (`:root`). Keine Webfonts, nur Systemschriften.
- Mateo wollte ausdrücklich eigenständige Designs, nicht die Vorlage von frittenliebe-bilk.de kopieren.

## Regeln (human-website-design)

- Nur HTML, CSS, JavaScript. Kein TypeScript, kein React, kein Build-Tool.
- Keine Emojis im Seiteninhalt. Icons nur als Inline-SVG im selben Strichstil.
- `border-radius` auf Karten und Buttons maximal 8px (Pillen für Status und Chips ausgenommen).
- Keine erfundenen Zahlen, Zitate oder Bewertungstexte. Nur belegte Daten (Google-Profil, Angaben des Inhabers).
- Zentrierter Text nur in der Hero-Headline.
- Fotos: Mateo hat Gratisbilder (Unsplash) als Platzhalter erlaubt. Sie werden direkt von images.unsplash.com geladen. Vor Livegang durch echte Fotos des Ladens ersetzen und Datenschutz Abschnitt 4 anpassen.
- Neue Korrekturwünsche von Mateo, die generell gelten, als kurze Lehre in `/mnt/skills/plugins/human-website-design/references/learnings.md` festhalten (falls Claude Code den Skill lokal hat).

## Bilder

Platzhalter von Unsplash, direkt per URL in `index.html` eingebunden. Echte Fotos in `assets/photos/` ablegen und die `src`-Adressen austauschen.

## Offene Punkte

- Telefonnummer und Instagram-Name vom Inhaber holen (nicht erfunden, deshalb noch nicht auf der Seite)
- Preise der Karte eintragen (HTML-Kommentar „PREISE EINTRAGEN" in `index.html`)
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
