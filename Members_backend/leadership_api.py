from flask import Blueprint, jsonify
import pandas as pd
import os
import re

leadership_bp = Blueprint('leadership_bp', __name__)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
EXCEL_FILE = os.path.join(BASE_DIR, 'society_data.xlsx')

def make_drive_link_direct(link):
    if not isinstance(link, str) or link == "":
        return ""
    # Look for the File ID in the Google Drive URL
    match = re.search(r'/d/([a-zA-Z0-9_-]+)', link)
    if match:
        file_id = match.group(1)
        # Convert it to a direct thumbnail link
        return f"https://drive.google.com/thumbnail?id={file_id}&sz=w400"
    return link

@leadership_bp.route('/api/leadership', methods=['GET'])
def get_leadership():
    if not os.path.exists(EXCEL_FILE):
        return jsonify({"error": "Excel file not found."}), 404
    try:
        # Read the sheet and fill empty cells
        df = pd.read_excel(EXCEL_FILE, sheet_name='Sheet1').fillna("")
        
        df.columns = [
            'domain',               # Column 1
            'lead_1',               # Column 2
            'lead_1_ph',            # Column 3
            'lead_1_photo',         # Column 4
            'lead_2',               # Column 5
            'lead_2_ph',            # Column 6
            'lead_2_photo',         # Column 7
            'asst_lead_1',          # Column 8
            'asst_lead_1_ph',       # Column 9
            'asst_lead_1_photo',    # Column 10
            'asst_lead_2',          # Column 11
            'asst_lead_2_ph',       # Column 12
            'asst_lead_2_photo'     # Column 13
        ]

        df['lead_1_photo'] = df['lead_1_photo'].apply(make_drive_link_direct)
        df['asst_lead_1_photo'] = df['asst_lead_1_photo'].apply(make_drive_link_direct)

        return jsonify(df.to_dict(orient='records')), 200
    except Exception as e:
        
        return jsonify({"error": str(e)}), 500