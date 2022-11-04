/**
 * Google sheets API documentation: https://googleapis.dev/nodejs/googleapis/latest/sheets/index.html
 *
 * Granting permission:
 * To push to a sheet you must grant the api permission by sharing the sheet with the google service account.
 */
import { google } from "googleapis";

import { getSecret } from "../getSecret";

const secret = JSON.parse(getSecret("google_credentials"));

// Request access to the spreadsheets API
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

const auth = new google.auth.GoogleAuth({
  // "Private key" and "Client email" credentials come from the services accounts credentials.json file
  credentials: {
    // Escape the new lines characters again
    private_key: secret.private_key,
    client_email: secret.client_email,
  },
  scopes: SCOPES,
});

const sheets = google.sheets({ version: "v4", auth });

/**
 * Count the number of rows in a sheet/tab.
 *
 * Appending rows to some sheets behaves oddly, the reason is unknown.
 * Not defining the row number in the range sometimes results in values starting
 * from a later column e.g. column J, even if column A is undefined and empty.
 * Explicitly defining the row number solves this.
 *
 * @example
 * googleSheets.countRows(sheetId, 'Sheet1');
 * // returns 10
 *
 * @param {string} spreadsheetId
 * @param {string} range
 * @returns {number}
 */
const getRowValues = async (
  spreadsheetId: string | undefined,
  range: string,
) => {
  const spreadsheetValuesRes = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });
  return spreadsheetValuesRes.data.values;
};

/**
 * @example
 * googleSheets.appendToSheet(sheetId, [
 * 	['Row 1 Col 1', 'Row 1 Col 2'],
 * 	['Row 2 Col 1', 'Row 2 Col 2'],
 * ],  'Sheet1!A:B');
 *
 * Example came from this Stack Overflow thread - https://stackoverflow.com/a/65910065
 *
 * @param {string} spreadsheetId
 * @param {string[][]} values
 * @param {string} range
 */
const appendToSheet = async (
  spreadsheetId: string,
  values: Array<Array<string>>,
  range: string,
) => {
  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: "USER_ENTERED",
    // https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/append#insertdataoption
    // Insert as a new row
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      majorDimension: "ROWS",
      values,
    },
  });

  return response;
};

export { appendToSheet, getRowValues };
