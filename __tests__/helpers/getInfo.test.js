//TODO: write a test that checks that the names are joining correctly
//More information can be found here: https://jestjs.io/docs/getting-started
//You might want to have a go at using some of Jest's other matchers: https://jestjs.io/docs/expect
import { getInfo } from "../../src/helpers/getInfo";
var very_import_objec = {
  spa: "Spanish",
  cat: "Catalan",
  eus: "Basque",
  glc: "Galician",
};

test("Espańa: Valido que objeto {clave:valor} recibido en getInfo() retorne solo valor en una lista", () => {
  const dataObj = getInfo(very_import_objec);
  expect(dataObj).toBe("Spanish, Catalan, Basque, Galician");
});

//TODO: write a test if no data is passed to the function (returns "none")

test("valido que si getInfo no recibe objeto, retorne cadena 'none'", () => {
  expect(getInfo()).toBe("none");
});
