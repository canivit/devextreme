import csvToJson from "convert-csv-to-json";

const inFile = "data.csv";
const outFile = "data.json";
csvToJson
  .formatValueByType()
  .fieldDelimiter(",")
  .generateJsonFileFromCsv(inFile, outFile);
