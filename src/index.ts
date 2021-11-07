import axios from 'axios';

const fetchData = async (url: string): Promise<any> => {
  return await new Promise(async (resolve, reject) => {
    try {
      const rules = /sheets|googleapis|spreadsheets|values|key/g;

      if (!url) return reject('The url is necessary');
      if (!rules.test(url))
        return reject('The URL is not a Google Sheet valid url');

      const response = await axios.get(url);
      resolve(response.data);
    } catch (e) {
      reject(e);
    }
  });
};

const getData = async (url: string) => {
  return await new Promise(async (resolve, reject) => {
    try {
      if (!url) return reject('The url is necessary');

      const data = await fetchData(url);

      let entries = data.values;
      if (!entries) {
      }
      let numFilas = entries.length;

      let campos: any = [];
      let jsonProcessed = [];
      for (let f = 0; f < numFilas; f++) {
        let fila = entries[f];

        let obj: any = {};
        for (let c = 0; c < fila.length; c++) {
          const celda = fila[c];
          if (f === 0) {
            campos.push(celda);
          } else {
            obj[campos[c]] = celda;
          }
        }
        if (f > 0) jsonProcessed.push(obj);
      }

      resolve(jsonProcessed);
    } catch (e) {
      reject(e);
    }
  });
};

export default getData;
