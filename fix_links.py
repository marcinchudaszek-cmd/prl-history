"""
Replace generic homepage URLs in entries.ts with specific search/collection URLs.
Each resource gets a meaningful URL based on its ID and title.
"""
import re
import urllib.parse

# ─── Specific known URLs (resource ID → exact URL) ────────────────────────────
SPECIFIC = {
    # Wolne Lektury – specific author pages
    'milosz-1':   'https://wolnelektury.pl/katalog/autor/milosz-czeslaw/',
    'milosz':     'https://wolnelektury.pl/katalog/autor/milosz-czeslaw/',
    'herbert-1':  'https://wolnelektury.pl/katalog/autor/herbert-zbigniew/',
    'herbert':    'https://wolnelektury.pl/katalog/autor/herbert-zbigniew/',
    'szym-1':     'https://wolnelektury.pl/katalog/autor/szymborska-wislawa/',
    'szymborska': 'https://wolnelektury.pl/katalog/autor/szymborska-wislawa/',
    'lem-1':      'https://wolnelektury.pl/katalog/autor/lem-stanislaw/',
    'lem':        'https://wolnelektury.pl/katalog/autor/lem-stanislaw/',
    'kapus-1':    'https://wolnelektury.pl/katalog/autor/kapuscinski-ryszard/',
    'kapuscinski':'https://wolnelektury.pl/katalog/autor/kapuscinski-ryszard/',
    'kultura-p-3':'https://wolnelektury.pl/katalog/autor/herling-grudzinski-gustaw/',
    'kult-2':     'https://wolnelektury.pl/szukaj/?q=czarna+ksi%C4%99ga+cenzury',

    # Ninateka – specific known collections / films
    'sw-5':       'https://ninateka.pl/film/przesluchanie',
    'sb-3':       'https://ninateka.pl/film/przesluchanie',
    'nh-1':       'https://ninateka.pl/kolekcja/polska-kronika-filmowa',
    'pkf-1':      'https://ninateka.pl/kolekcja/polska-kronika-filmowa',
    'plan6-3':    'https://ninateka.pl/kolekcja/polska-kronika-filmowa',
    'kult-3':     'https://ninateka.pl/kolekcja',
    'anim-1':     'https://ninateka.pl/kolekcja/polska-animacja',
    'psf-1':      'https://ninateka.pl/szukaj?q=polska+szko%C5%82a+filmowa',
    'kmn-1':      'https://ninateka.pl/szukaj?q=kino+moralnego+niepokoju',
    'kiesl-1':    'https://ninateka.pl/szukaj?q=Kie%C5%9Blowski',
    'wajda-3':    'https://ninateka.pl/szukaj?q=Wajda',
    'jazz-1':     'https://ninateka.pl/szukaj?q=Jazz+Jamboree',
    'pop-3':      'https://ninateka.pl/szukaj?q=Popie%C5%82uszko',
    'wron-3':     'https://ninateka.pl/szukaj?q=Jaruzelski+przemówienie+1981',
    'tvp-1':      'https://ninateka.pl/szukaj?q=Dziennik+Telewizyjny+PRL',
    'tvp-ninateka':'https://ninateka.pl/szukaj?q=TVP+archiwum',
    'tischner-1': 'https://ninateka.pl/szukaj?q=Tischner',
    'radio-prl-1':'https://ninateka.pl/szukaj?q=Polskie+Radio+archiwum',
    'muz-pow-1':  'https://ninateka.pl/szukaj?q=muzyka+powa%C5%BCna+Polska',
    'kisiel-3':   'https://ninateka.pl/szukaj?q=Kisielewski+radio',

    # ECS – European Solidarity Centre
    'sol-4':      'https://ecs.gda.pl/title/cyfrowe-archiwum-solidarnosci',
    'wal-1':      'https://ecs.gda.pl/title/porozumienia-sierpniowe',
    'sier-1':     'https://ecs.gda.pl/title/porozumienia-sierpniowe',

    # Przystanek Historia – specific topic pages (confirmed from existing data)
    'gosp-2':         'https://przystanekhistoria.pl/pa2/tematy/gospodarka-prl,106.html',
    'plan6-2':        'https://przystanekhistoria.pl/pa2/tematy/gospodarka-prl,106.html',
    'rwpg-3':         'https://przystanekhistoria.pl/pa2/tematy/gospodarka-prl,106.html',
    'zc-1':           'https://przystanekhistoria.pl/pa2/tematy/gospodarka-prl,106.html',
    'kolektyw-2':     'https://przystanekhistoria.pl/pa2/tematy/wies-i-rolnictwo-prl,109.html',
    'wies-2':         'https://przystanekhistoria.pl/pa2/tematy/wies-i-rolnictwo-prl,109.html',
    'obieg-2':        'https://przystanekhistoria.pl/pa2/tematy/drugi-obieg,104.html',
    'wyszynski-2':    'https://przystanekhistoria.pl/pa2/tematy/prymas-stefan-wyszynski,107.html',
    'pkwn-pki-1':     'https://przystanekhistoria.pl/pa2/tematy/palac-kultury-i-nauki,110.html',
    'palac-kultury':  'https://przystanekhistoria.pl/pa2/tematy/palac-kultury-i-nauki,110.html',
    'wybory-1989-historia': 'https://przystanekhistoria.pl/pa2/tematy/wybory-4-czerwca-1989,108.html',
    'kino-2':         'https://przystanekhistoria.pl/pa2/tematy/polska-szkola-filmowa,113.html',
}

# ─── Polish stop words (for keyword extraction) ────────────────────────────────
STOP = {
    'i', 'w', 'z', 'do', 'na', 'ze', 'od', 'po', 'się', 'jest', 'są',
    'ten', 'ta', 'to', 'że', 'jak', 'nie', 'ale', 'przez', 'przy',
    'dla', 'jego', 'jej', 'ich', 'oraz', 'a', 'o', 'o,', 'jako',
    'akta', 'dokumenty', 'materiały', 'zbiory', 'zasoby', 'zasobach',
    'archiwalnych', 'archiwalne', 'dotyczące', 'archiwum',
    'edukacyjne', 'materiał', 'opracowanie', 'serwis', 'portal',
    'historia', 'polska', 'polskie', 'polskich', 'prl',
    'ipn', 'ninateka', 'polona', 'szukaj',
}

def keywords(title: str, n: int = 3) -> str:
    """Extract n meaningful keywords from a resource title."""
    # Strip quotes and dashes
    title = re.sub(r'[„"–\-\(\)\[\]«»]', ' ', title)
    words = [w.strip('.,!?:;') for w in title.split()]
    chosen = [w for w in words if w.lower() not in STOP and len(w) > 2][:n]
    return ' '.join(chosen)


def make_url(resource_id: str, orig_url: str, title: str) -> str:
    """Return the best URL for this resource."""
    if resource_id in SPECIFIC:
        return SPECIFIC[resource_id]

    kw = keywords(title)
    enc = urllib.parse.quote(kw)

    if 'inwentarz.ipn.gov.pl' in orig_url:
        return f'https://inwentarz.ipn.gov.pl/searchInTree?search={enc}'

    if 'szukajwarchiwach.gov.pl' in orig_url:
        return f'https://szukajwarchiwach.gov.pl/szukaj?q={enc}'

    if 'ninateka.pl' in orig_url:
        return f'https://ninateka.pl/szukaj?q={enc}'

    if 'polona.pl' in orig_url:
        return f'https://polona.pl/search/?query={enc}'

    if 'przystanekhistoria.pl' in orig_url:
        # Prefer keyword search on the site
        return f'https://przystanekhistoria.pl/results?q={enc}'

    if 'wolnelektury.pl' in orig_url:
        return f'https://wolnelektury.pl/szukaj/?q={enc}'

    if 'ecs.gda.pl' in orig_url:
        return 'https://ecs.gda.pl/title/cyfrowe-archiwum-solidarnosci'

    if 'edukacja.ipn.gov.pl' in orig_url:
        return f'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search={enc}'

    return orig_url  # fallback: keep original


# ─── Parse and replace in entries.ts ──────────────────────────────────────────
GENERIC_URLS = {
    'https://inwentarz.ipn.gov.pl/',
    'https://szukajwarchiwach.gov.pl/',
    'https://ninateka.pl/',
    'https://polona.pl/',
    'https://przystanekhistoria.pl/',
    'https://wolnelektury.pl/',
    'https://ecs.gda.pl/',
    'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne',
}

with open('src/data/entries.ts', encoding='utf-8') as f:
    src = f.read()

# We'll match each resource block and replace its url field when needed
# Pattern: id: 'X', ... url: 'Y' within a resource object
# We process block-by-block to know the id when replacing the url

def replace_urls(text: str) -> tuple[str, int]:
    """Replace generic URLs in resource blocks. Returns (new_text, count)."""
    count = 0

    # Find each resource block (8-space indent id field = resource inside entry)
    # Resources have 8 spaces: "        id: 'sw-4',"
    # We'll scan for id at 8-space indent and then find the url field
    pattern = re.compile(
        r"(        id: '([^']+)',.*?url: ')([^']+)(')",
        re.DOTALL
    )

    def replacer(m: re.Match) -> str:
        nonlocal count
        prefix = m.group(1)   # "        id: 'sw-4',\n        title: '...',\n        type: '...',\n        url: '"
        res_id = m.group(2)
        orig_url = m.group(3)
        suffix = m.group(4)   # closing quote

        if orig_url not in GENERIC_URLS:
            return m.group(0)  # not a generic URL – keep as-is

        # Extract title from the prefix block
        title_m = re.search(r"title: '([^']+)'", prefix)
        title = title_m.group(1) if title_m else ''

        new_url = make_url(res_id, orig_url, title)
        if new_url != orig_url:
            count += 1
        return prefix + new_url + suffix

    new_text = pattern.sub(replacer, text)
    return new_text, count


new_src, replaced = replace_urls(src)

with open('src/data/entries.ts', 'w', encoding='utf-8') as f:
    f.write(new_src)

print(f'Done. Replaced {replaced} generic URLs with specific ones.')
