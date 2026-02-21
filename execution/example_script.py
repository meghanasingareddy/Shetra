"""
example_script.py
-----------------
A minimal example execution script demonstrating Layer 3 conventions.

Usage:
    python execution/example_script.py

Guidelines:
    1. Load secrets from .env
    2. Keep the script focused on a single task
    3. Return structured output (dict / JSON) when possible
"""

import os
import json
from pathlib import Path
from dotenv import load_dotenv

# ── Load environment ──────────────────────────
load_dotenv()

TMP_DIR = Path(".tmp")
TMP_DIR.mkdir(exist_ok=True)


def main():
    """Entry-point for the example script."""
    print("✅ example_script.py ran successfully")

    result = {
        "status": "ok",
        "message": "Hello from the execution layer!",
    }

    # Persist intermediate result to .tmp/
    output_path = TMP_DIR / "example_output.json"
    output_path.write_text(json.dumps(result, indent=2))
    print(f"Output written to {output_path}")

    return result


if __name__ == "__main__":
    main()
