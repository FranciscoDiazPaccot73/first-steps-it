import axios from "axios";
import Papa from "papaparse";

const INFORMATION = {
  sheet: "https://docs.google.com/spreadsheets/d/e/2PACX-1vStPiSkPaIg3WUmhOGVJN8U_uSywTOoiOcWC9XtAvyDclOU0gsiwtTpDCmm0Mxslh3MeYqnhFVDR7m_/pub?gid=0&single=true&output=csv"
};

export default {
  list: async () => {
    return axios
      .get(INFORMATION.sheet, {
        responseType: "blob",
      })
      .then(
        (response) =>
          new Promise((resolve, reject) => {
            Papa.parse(response.data, {
              header: true,
              complete: (results) => {
                const products = results.data;

                return resolve(
                  products.map((product) => ({
                    ...product,
                  })),
                );
              },
              error: (error) => reject(error.message),
            });
          }),
      );
  },
};
