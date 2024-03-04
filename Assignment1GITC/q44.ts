function sandwich(...sandwichItems: string[]) : void{
sandwichItems.forEach(Item => console.log(' -'+ Item))
}
console.log('Regular Sandwich')
sandwich('Iceberg', 'Pattie', 'Lettuce')
console.log('Tikka Sandwich')
sandwich('Mayo', 'Tikka', 'Garlic Sauce')
console.log('Turkey Sandwich')
sandwich('Turkey', 'Swiss Cheese')
