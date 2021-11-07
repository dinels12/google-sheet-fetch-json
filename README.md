# Google Sheet Guide

Quick Solution to fetch a Google Spreadshet URL, without passing params or tokens.

## How To Use



```ts
// you only have to pass a SHEET_URL

// https://sheets.googleapis.com/v4/spreadsheets/<SHEET_ID>/values/<TABLE_NAME>?key=<GOOGLE_TOKEN>

 const data = await getDataFromSheetURL(sheet_url);

// The response is a Array containing all the rows from the sheet :D


```

## Simple NPM Module

Thanks for using.