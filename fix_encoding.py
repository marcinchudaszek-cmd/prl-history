"""
Fix double-encoded Polish text in component files.
The files were originally UTF-8, then mis-read as Windows-1252 and re-saved as UTF-8.
This creates garbled sequences like Ä… for ą, Å‚ for ł, â€" for –, ðŸ" for emoji.

Fix: read garbled UTF-8 → encode as cp1252 → decode as UTF-8 → correct original text.

Note: Windows-1252 has undefined byte positions 0x81, 0x8D, 0x8F, 0x90, 0x9D.
Python maps these to their raw Unicode code points (U+0081 etc.) when decoding cp1252.
We pass them through as their raw byte values when re-encoding.
"""
import os

# Windows-1252 special char mappings (chars > 0xFF in Unicode → cp1252 bytes)
WIN1252_SPECIAL = {
    0x20AC: 0x80,  # €
    0x201A: 0x82,  # ‚
    0x0192: 0x83,  # ƒ
    0x201E: 0x84,  # „
    0x2026: 0x85,  # …
    0x2020: 0x86,  # †
    0x2021: 0x87,  # ‡
    0x02C6: 0x88,  # ˆ
    0x2030: 0x89,  # ‰
    0x0160: 0x8A,  # Š
    0x2039: 0x8B,  # ‹
    0x0152: 0x8C,  # Œ
    0x017D: 0x8E,  # Ž
    0x2018: 0x91,  # '
    0x2019: 0x92,  # '
    0x201C: 0x93,  # "
    0x201D: 0x94,  # "
    0x2022: 0x95,  # •
    0x2013: 0x96,  # –
    0x2014: 0x97,  # —
    0x02DC: 0x98,  # ˜
    0x2122: 0x99,  # ™
    0x0161: 0x9A,  # š
    0x203A: 0x9B,  # ›
    0x0153: 0x9C,  # œ
    0x017E: 0x9E,  # ž
    0x0178: 0x9F,  # Ÿ
}

# Undefined cp1252 bytes passed through as their raw value
CP1252_UNDEFINED = {0x81, 0x8D, 0x8F, 0x90, 0x9D}

def to_cp1252_bytes(content):
    """
    Encode a string to cp1252 bytes with:
    - Pass-through for C1 control chars that are undefined in cp1252 (0x81/0x8D/0x8F/0x90/0x9D)
    - Return None if any char can't be encoded (→ file is already correctly encoded)
    """
    result = bytearray()
    for ch in content:
        code = ord(ch)
        if code <= 0x7F:
            result.append(code)
        elif code in CP1252_UNDEFINED or (0x80 <= code <= 0xFF and code not in CP1252_UNDEFINED):
            # Direct byte value (Latin-1 range including cp1252 undefined positions)
            result.append(code)
        elif code in WIN1252_SPECIAL:
            result.append(WIN1252_SPECIAL[code])
        else:
            # Character not representable in cp1252 → file has correctly encoded chars → skip
            return None
    return bytes(result)


files_to_fix = [
    'src/App.tsx',
    'src/main.tsx',
    'src/components/AboutPage.tsx',
    'src/components/ArchivesPage.tsx',
    'src/components/EncyclopediaPage.tsx',
    'src/components/EntryPage.tsx',
    'src/components/Footer.tsx',
    'src/components/Header.tsx',
    'src/components/HomePage.tsx',
    'src/utils/cn.ts',
]

for filepath in files_to_fix:
    if not os.path.exists(filepath):
        print(f'SKIP (not found): {filepath}')
        continue

    with open(filepath, 'rb') as f:
        raw = f.read()

    # Strip BOM if present
    has_bom = raw.startswith(b'\xef\xbb\xbf')
    if has_bom:
        raw = raw[3:]

    # Decode as UTF-8
    try:
        content = raw.decode('utf-8')
    except UnicodeDecodeError as e:
        print(f'SKIP (not valid UTF-8): {filepath} — {e}')
        continue

    # Attempt to encode as cp1252 bytes (with pass-through for undefined bytes)
    original_bytes = to_cp1252_bytes(content)

    if original_bytes is None:
        print(f'SKIP (already correctly encoded): {filepath}')
        continue

    # Decode those cp1252 bytes as UTF-8 to recover original content
    try:
        fixed = original_bytes.decode('utf-8')
    except UnicodeDecodeError as e:
        print(f'ERROR (recovered bytes not valid UTF-8): {filepath} — {e}')
        continue

    # Sanity check: fixed should have actual Polish or emoji chars
    polish_chars = 'ąćęłńóśźżĄĆĘŁŃÓŚŹŻ'
    has_polish = any(c in fixed for c in polish_chars)

    # Write back as UTF-8 without BOM
    with open(filepath, 'w', encoding='utf-8', newline='') as f:
        f.write(fixed)

    print(f'FIXED: {filepath} (has Polish: {has_polish})')

print('\nDone.')
