from flask import Blueprint, jsonify
import pandas as pd
import os
import re

members_bp = Blueprint('members_bp', __name__)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
EXCEL_FILE = os.path.join(BASE_DIR, 'society_data.xlsx')

def make_drive_link_direct(link):
    if not isinstance(link, str):
        return ""
    
    # Extract the file ID from the Google Drive link
    match = re.search(r'/d/([a-zA-Z0-9_-]+)', link)
    if match:
        file_id = match.group(1)
        # Use the hidden thumbnail endpoint and set width to 400px
        return f"https://drive.google.com/thumbnail?id={file_id}&sz=w400"
    
    return link

@members_bp.route('/api/members', methods=['GET'])
def get_members():
    if not os.path.exists(EXCEL_FILE):
        return jsonify({"error": "Excel file not found."}), 404
    try:
        # Read the first sheet by its exact name
        df = pd.read_excel(EXCEL_FILE, sheet_name='Form responses 1').fillna("")
        df = df.rename(columns={
            'Timestamp': 'timestamp', 'Name': 'name', 'Roll no.': 'roll_no',
            'Domain': 'domain', 'Email': 'email', 'Photo [google drive link]': 'photo_url',
            'LinkedIn': 'linkedin', 'GitHub': 'github', 'Insta': 'instagram',
            '30-50 words intro about you': 'intro'
        })
        df['photo_url'] = df['photo_url'].apply(make_drive_link_direct)
        df['domain'] = df['domain'].apply(lambda x: [d.strip() for d in str(x).split(',') if d.strip()])
        return jsonify(df.to_dict(orient='records')), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500