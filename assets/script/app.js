import { apiKey } from "./util.js";
import title from "./util.js"

import * as details from "./myDetails.js"

console.log (title);
console.log (`My Imported API Key: ${apiKey}`);

console.log ("\n\n")
console.log ("Below are my details:")
// console.log (details.default)
// console.log (details.designation)
// console.log (details.experience)
// console.log (details.based)
// console.log (details.availability)

console.log(`Name: ${details.default} 
Designation: ${details.designation}
Experience: ${details.experience}
Based: ${details.based}
Availability: ${details.availability}`);


console.log ("\n\n")
console.log ("Math Exercise:")
function combine(value1, value2, value3) {
    const result = value1 * value2 / value3;
    console.log(`${value1} x ${value2} / ${value3} = ${result}` );
    return result;
}

combine("18","25","5");
combine("4","245","35");
combine("222","2222","222");
combine("345","5","25");
combine("500","800","200");