# Execution Scripts

This folder contains deterministic Python scripts (Layer 3 of the 3-layer architecture).

## Guidelines

1. **One responsibility per script** – each script should do one thing well.
2. **Well-commented** – explain *why*, not just *what*.
3. **Testable** – scripts should be runnable independently with clear inputs/outputs.
4. **No secrets in code** – read API keys and tokens from `.env` via `python-dotenv`.

## Naming Convention

```
<verb>_<noun>.py
```

Examples: `scrape_single_site.py`, `upload_to_sheets.py`, `process_images.py`
