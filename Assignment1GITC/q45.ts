function storeCarInfo(manufacturer: string, modelName: string, ...options: any ): void {
    console.log(`Manufacturer: ` + manufacturer);
    console.log(`Model: ` + modelName);
    for (const key in options) {
        console.log(key+ options[key]);
    }
}


storeCarInfo('Toyota', 'Corolla',  'Black',  'Navigation','Maryam' );




