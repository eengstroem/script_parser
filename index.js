const fs = require('fs');
const pdf = require('pdf-parse');
let getDataFromPDF = fs.readFileSync('test_script.pdf');
pdf(getDataFromPDF).then(function(data)
{
    console.log(data.numpages);
    // for (i = 0; i < data.numpages.Length(); i++)
    // {

    // }
    console.log(data.info);
    console.log(data.numpages.toString());
});
