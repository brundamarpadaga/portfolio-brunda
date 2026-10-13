"""Redact phone numbers from a resume PDF and publish it to assets/.

Usage:  python scripts/publish_resume.py "path/to/new_resume.pdf"
Requires: pip install pymupdf
"""
import re
import sys
from pathlib import Path

import pymupdf

OUTPUT = Path(__file__).resolve().parent.parent / "assets" / "brunda_resume.pdf"
PHONE = re.compile(r"(?:\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}")


def main(src):
    doc = pymupdf.open(src)
    found = 0
    for page in doc:
        for match in set(PHONE.findall(page.get_text())):
            for rect in page.search_for(match):
                page.add_redact_annot(rect, fill=(0.75, 0.75, 0.75))
                found += 1
        page.apply_redactions()

    if not found:
        sys.exit("No phone number found - nothing written. Check the PDF.")

    OUTPUT.parent.mkdir(exist_ok=True)
    doc.save(OUTPUT, garbage=4, deflate=True)

    leftover = [m for p in pymupdf.open(OUTPUT) for m in PHONE.findall(p.get_text())]
    if leftover:
        OUTPUT.unlink()
        sys.exit(f"Redaction failed, number still in file: {leftover}")
    print(f"Redacted {found} phone number(s) -> {OUTPUT}")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    main(sys.argv[1])
