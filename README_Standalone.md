# Save-GS-as-CSV-In-G-Drive
Save Google Spread Sheet as CSV file In Google Drive Folder

Use this Google App Script as Standalone Script

## Usage

1. Go to https://script.google.com/home
2. Select Create a New Project
3. Copy this Script and Paste it there
4. Replace {googlespreadSheetId} with your Google Spread Sheet ID
5. Replace {googleDriveFolderId} with your folder ID
6. Replace {sheetId} with your sheet tab ID
7. Replace {savedCsvFileName} with the name you want your csv to save as
8. On Left Pan Click '+' to Add Services to Script. Add Drive and DriveActivity
9. Save & Run

(You can add Triggers to run this script automatically)

### Step 4 (HELP)
The Spreadsheet ID can be found in the URL of the spreadsheet.
Example URL: https://docs.google.com/spreadsheets/d/1W2S4re7zNaPk9vqv6_CqOpPdm_mDEqmLmzjVe7Nb9WM/edit#gid=0 - in this URL, the 1W2S4re7zNaPk9vqv6_CqOpPdm_mDEqmLmzjVe7Nb9WM is the spreadsheet-id.

### Step 5 (HELP)
The G Drive Folder ID can be found in the URL of the Drive Folder.
Example go to https://drive.google.com/drive/my-drive and open the folder you need. After you open the folder, the URL changes to something like this: "https://drive.google.com/drive/folders/{folder-id}". The Folder looks like "1erCjLjJqqchkdTcy7bxJdHA74lUKXCX1".

### Step 6 (HELP)
The sheet ID can be found in the URL of the spreadsheet.
Example URL: https://docs.google.com/spreadsheets/d/1W2S4re7zNaPk9vqv6_CqOpPdm_mDEqmLmzjVe7Nb9WM/edit#gid=1234567890 - in this URL, the 1234567890 is the sheet-id.
