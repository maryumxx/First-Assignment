"use strict";
function storeCarInfo(manufacturer, modelName, ...options) {
    console.log(`Manufacturer: ` + manufacturer);
    console.log(`Model: ` + modelName);
    for (const key in options) {
        console.log(key + options[key]);
    }
}
storeCarInfo('Toyota', 'Corolla', 'Black', 'Navigation', 'Maryam');
