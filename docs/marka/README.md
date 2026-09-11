# Marka One Good Engineer

Zrodlo prawdy: `public/favicon.svg` (znak), paleta z `app/globals.css`, kroj Geist.
`node docs/marka/generuj.mjs` renderuje caly zestaw do `wyniki/` (Playwright, czcionki z Google Fonts).

Znak: cztery kafelki, jeden zapalony. Jeden inzynier i trzy agenty ("& Co.").

| Plik | Do czego |
|---|---|
| `znak-*.svg` | wektor znaku: na ciemnym kafelku, na jasnym, przezroczysty |
| `logo-poziome-na-ciemne.png`, `-na-jasne.png` | logo z nazwa, tlo przezroczyste, 1600x400 |
| `awatar-400/720/1080.png` | OLX, Facebook, LinkedIn, wizytowka Google (logo, min 250x250) |
| `awatar-720-z-nazwa.png` | wariant z nazwa tam, gdzie sam znak jest za maly |
| `google-okladka-1024x576.png` | wizytowka Google, zdjecie w tle (16:9) |
| `facebook-okladka-820x312.png` | strona na Facebooku |
| `linkedin-baner-1584x396.png` | profil na LinkedIn |
| `og.png`, `og-pl.png` | podglad linku (kopia `og.png` lezy w `public/`) |
| `podpis-email-600x140.png` | stopka maila |

Wordmark w SVG nie istnieje (Geist trzeba by zamienic na krzywe). Tam, gdzie potrzebny jest wektor
z nazwa, uzyj PNG 1600x400 albo dolacz `znak-*.svg` i nazwe tekstem.
