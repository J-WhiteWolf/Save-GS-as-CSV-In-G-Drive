# Save-GS-as-CSV-In-G-Drive
Save Google Spread Sheet as CSV file In Google Drive Folder

Use this Google App Script as Container Bound Script

## Usage

1. Open your Google Spread Sheet, Select Extensions and then select App Script
2. Copy saveCSV_containerBound.gs Script and Paste it there
3. Replace {SheetTabName} with your Google Sheet Name (NOT SPREADSHEET NAME)
4. Create a Folder in your Google Drive
5. Replace {gDriveFolderId} with your folder ID
6. On Left Pan Click '+' to Add Services to Script. Add Drive and DriveActivity
7. Save & Run

(You can add Triggers to run this script automatically)

### Step 5 (HELP)
The G Drive Folder ID can be found in the URL of the Drive Folder.
Example go to https://drive.google.com/drive/my-drive and open the folder you need. After you open the folder, the URL changes to something like this: "https://drive.google.com/drive/folders/{folder-id}". The Folder looks like "1erCjLjJqqchkdTcy7bxJdHA74lUKXCX1".
