// const dotenv = require("dotenv").config({path: __dirname + ".env"})

// const {
//     DATABASE_NAME,
//     DATABASE_TYPE,
//     DATABASE_PORT,
//     DATABASE_HOST,
//     DATABASE_USERNAME,
//     DATABASE_PASSWORD,
// } = dotenv.parsed;

// const config = {
//     DATABASE_NAME,
//     DATABASE_TYPE,
//     DATABASE_PORT,
//     DATABASE_HOST,
//     DATABASE_USERNAME,
//     DATABASE_PASSWORD,
    
// }

// const convertStringToBooleanRecursively = (obj) => {
//     function recurse(obj) {
//       for (const key in obj) {
//         let value = obj[key];
//         if (value != undefined) {
//           if (value && typeof value === "object") {
//             recurse(value);
//           } else {
//             // Converting string values to boolean
//             if (value === "true" || value === "false") {
//               value = value === "true" ? true : false;
//             }
//             obj[key] = value;
//           }
//         }
//       }
//     }
//     recurse(obj);
//     return obj;
//   };
  
//   const convertedConfig = convertStringToBooleanRecursively(config);

// module.exports = convertedConfig;