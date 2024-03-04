function describeCity (city: string, country: string = 'Pakistan')  : void{
    console.log(city+' is in '+country)
}
describeCity('Karachi')
describeCity('Islamabad')
describeCity('Texas', 'USA')