import getData from '../src';

/**
 *
 * Remember to set the local env with:
 * for Linux:
 * export SHEET_URL=HERE THE URL
 * Check how to set the env in others SO
 *
 */

const sheet_url = process.env.SHEET_URL as string;

describe('GET a ARRAY of data from Google Sheets', () => {
  it('is array containing the values from the url sheet', async () => {
    const data = await getData(sheet_url);
    expect(data).toBeInstanceOf(Array);
  });
});
