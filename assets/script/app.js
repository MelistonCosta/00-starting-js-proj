import { apiKey } from "./util.js";
import title from "./util.js"

import * as details from "./myDetails.js"

console.log (title);
console.log (`My Imported API Key: ${apiKey}`);

console.log ("\nBelow are my details:")
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