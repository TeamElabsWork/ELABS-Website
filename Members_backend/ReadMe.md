## What I Built

* **Upgraded the Architecture:** Replaced a hacky Google Sheets frontend fetch with a proper Python REST API.
* **Data Parsing:** Used Pandas to read `society_data.xlsx`, clean out empty cells (`fillna("")`), and map human-readable Excel columns to strict API keys.
* **Link Conversion:** Wrote a Regex function to strip Google Drive File IDs and convert them into direct image links so the React frontend can render them.

## How to Run My Local Environment

1. Open the backend directory.
2. Activate virtual environment (if used) and install dependencies: `pip install -r requirements.txt`
3. Start the Flask server: `python app.py`
4. Leave it running at `http://127.0.0.1:5000`.

## Deployment Reminder (The "Gotcha")

When the frontend is deployed to production, it cannot point to `127.0.0.1` (localhost).

* **Action Required:** The Flask app must be hosted (e.g., Render, Railway).
* **Frontend Update:** Once hosted, change the hardcoded `127.0.0.1:5000` strings in `useGoogleSheetMembers.js` and `RunningText.jsx` to the new live server URL.
