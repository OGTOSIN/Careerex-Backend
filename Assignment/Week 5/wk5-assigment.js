// Assignment Instructions
// Assigned

// Instructions:


// Copy the array below and paste it into your JavaScript assignment file.

// You will use this array to answer all the questions that follow.



// Use JavaScript concepts we've learned in class:

// map()

// filter()

// forEach()

// if/else statements

// comparison operators (==, ===)

// functions

// ! (negation)





// When you're done:

// Push your file to GitHub and share the GitHub repository URL






const drugs = [

    {
        id: 1,
        name: "Amoxicillin",
        category: "Antibiotic",
        dosageMg: 500,
        isPrescriptionOnly: true,
        stock: 120,
        manufacturer: "Pfizer"
    },

    {
        id: 2,
        name: "Paracetamol",
        category: "Analgesic",
        dosageMg: 1000,
        isPrescriptionOnly: false,
        stock: 200,
        manufacturer: "GSK"
    },

    {
        id: 3,
        name: "Ibuprofen",
        category: "Analgesic",
        dosageMg: 400,
        isPrescriptionOnly: false,
        stock: 150,
        manufacturer: "Bayer"
    },

    {
        id: 4,
        name: "Chloroquine",
        category: "Antimalarial",
        dosageMg: 250,
        isPrescriptionOnly: true,
        stock: 80,
        manufacturer: "Sanofi"
    },

    {
        id: 5,
        name: "Ciprofloxacin",
        category: "Antibiotic",
        dosageMg: 500,
        isPrescriptionOnly: true,
        stock: 70,
        manufacturer: "Pfizer"
    },

    {
        id: 6,
        name: "Loratadine",
        category: "Antihistamine",
        dosageMg: 10,
        isPrescriptionOnly: false,
        stock: 160,
        manufacturer: "Novartis"
    },

    {
        id: 7,
        name: "Metformin",
        category: "Antidiabetic",
        dosageMg: 850,
        isPrescriptionOnly: true,
        stock: 140,
        manufacturer: "Teva"
    },

    {
        id: 8,
        name: "Artemether",
        category: "Antimalarial",
        dosageMg: 20,
        isPrescriptionOnly: true,
        stock: 60,
        manufacturer: "Roche"
    },

    {
        id: 9,
        name: "Aspirin",
        category: "Analgesic",
        dosageMg: 300,
        isPrescriptionOnly: false,
        stock: 180,
        manufacturer: "Bayer"
    },

    {
        id: 10,
        name: "Omeprazole",
        category: "Antacid",
        dosageMg: 20,
        isPrescriptionOnly: true,
        stock: 90,
        manufacturer: "AstraZeneca"
    },

    {
        id: 11,
        name: "Azithromycin",
        category: "Antibiotic",
        dosageMg: 250,
        isPrescriptionOnly: true,
        stock: 50,
        manufacturer: "Pfizer"
    },

    {
        id: 12,
        name: "Cetirizine",
        category: "Antihistamine",
        dosageMg: 10,
        isPrescriptionOnly: false,
        stock: 110,
        manufacturer: "Novartis"
    },

    {
        id: 13,
        name: "Insulin",
        category: "Antidiabetic",
        dosageMg: 100,
        isPrescriptionOnly: true,
        stock: 30,
        manufacturer: "Novo Nordisk"
    },

    {
        id: 14,
        name: "Artemisinin",
        category: "Antimalarial",
        dosageMg: 100,
        isPrescriptionOnly: true,
        stock: 50,
        manufacturer: "GSK"
    },

    {
        id: 15,
        name: "Codeine",
        category: "Analgesic",
        dosageMg: 30,
        isPrescriptionOnly: true,
        stock: 20,
        manufacturer: "Teva"
    },

    {
        id: 16,
        name: "Vitamin C",
        category: "Supplement",
        dosageMg: 500,
        isPrescriptionOnly: false,
        stock: 300,
        manufacturer: "Nature’s Bounty"
    },

    {
        id: 17,
        name: "Ranitidine",
        category: "Antacid",
        dosageMg: 150,
        isPrescriptionOnly: false,
        stock: 90,
        manufacturer: "Sanofi"
    },

    {
        id: 18,
        name: "Doxycycline",
        category: "Antibiotic",
        dosageMg: 100,
        isPrescriptionOnly: true,
        stock: 40,
        manufacturer: "Pfizer"
    },

    {
        id: 19,
        name: "Tramadol",
        category: "Analgesic",
        dosageMg: 50,
        isPrescriptionOnly: true,
        stock: 45,
        manufacturer: "Teva"
    },

    {
        id: 20,
        name: "Folic Acid",
        category: "Supplement",
        dosageMg: 5,
        isPrescriptionOnly: false,
        stock: 250,
        manufacturer: "Nature’s Bounty"
    }

];




// 1. Get all drugs that are antibiotics.

console.log("1. ");
console.log(" ");

//A forEach method is used to loop through the drugs array and return the name of the drugs that are antibiotics.
drugs.forEach( (drug) => {

    if (drug.category === "Antibiotic"){

        //The output of the drug names that are antibiotics
        console.log(drug.name);

    };
    
});

console.log(" ");



// 2. Return an array of drug names in lowercase.

console.log("2. ");
console.log(" ");

// The map method is used to create a new array with the drug names in lowercase.
arrayedDrugs = drugs.map( (drug) => {

    return drug.name.toLowerCase();

});

// The output of the drug names in lowercase
console.log(arrayedDrugs);
console.log(" ");



// 3. Write a function that accepts a category and returns all drugs under that category.

console.log("3. ");
console.log(" ");

//A function that accepts a category and returns all drugs under that category.
categoriesDrugFinder = (category) => {
    
    drugFound = drugs.filter ((drug) => {

        if (drug.category === category) {

            //The filtered return of the drug names that are under the category
            return drug.name;

        };
    
    }).map((drug) => {

        //The mapped return of the drug names that are under the category
        return drug.name;
    })

};

categoriesDrugFinder("Antimalarial");
//The output of the drug names that are under the category
console.log(drugFound);
console.log(" ");




// 4. Log each drug’s name and its manufacturer.

console.log("4. ");
console.log(" ");

//A forEach method is used to loop through the drugs array and return the name of the drugs and their manufacturer.
drugs.forEach( (drug) => {

    //The output of the drug names and their manufacturer
    console.log(`Name: ${drug.name} (Manufacturer: ${drug.manufacturer})`);

});

console.log(" ");



// 5. Return all drugs that require a prescription.

console.log("5. ");
console.log(" ");

//A filter and map method can be used to get the name of the drugs that are prescription only.
filteredDrugs = drugs.filter( (drug) => {

  return drug.isPrescriptionOnly == true ;

}).map((drug) => {

    return( drug.name);
})

//The output of the drug names that are prescription only
console.log(filteredDrugs);
console.log(" ");



// 6. Return a new array, each item should follow the format: "Drug: [name] - [dosageMg]mg".

console.log("6. ");
console.log(" ");

//A map method is used to create a new array with the drug names and their dosage in mg.
formatDrugs = drugs.map( (drug) => {

    return `Drug: [${drug.name}] - [${drug.dosageMg}]mg `;

});

//The output of the drug names and their dosage in mg
console.log(formatDrugs);
console.log(" ");



// 7. Write a function that returns all drugs with a stock less than 50.


console.log("7. ");
console.log(" ");

//A function that returns all drugs with a stock less than 50.
drugStock = ((reorderLevel) => {

    stockCount = drugs.filter ((drug) => {

      if (drug.stock < reorderLevel) {

        //The filtered return of the drug names that are under the reorder level
        return drug.name;

      };

    }).map((drug) => {     

        //The mapped return of the drug names that are under the reorder level
        return drug.name;
    });

});

//The function is called with a reorder level of 50.
drugStock(50);

//The output of the drug names that are under the reorder level
console.log(stockCount);
console.log(" ");



// 8. Return all drugs that are not prescription-only.

console.log("8. ");
console.log(" ");

//A filter and map method can be used to get the name of the drugs that are not prescription only.
nonPDrugs = drugs.filter( (drug) => {

    //The filter method is used to get the drugs that are not prescription only.
    return !drug.isPrescriptionOnly === true ;

}).map((drug) => {

    //The map method is used to get the name of the drugs that are not prescription only.
    return( drug.name);

})

//The output of the drug names that are not prescription only
console.log(nonPDrugs);
console.log(" ");



// 9. Write a function that takes a manufacturer name and returns how many drugs are from that company.

console.log("9. ");
console.log(" ");

//A function that takes a manufacturer name and returns how many drugs are from that company
manufacturerCount = (manufacturer) => {

    let count = 0;
    
    companyDrugs = drugs.map( (drug) => {

        if (drug.manufacturer === manufacturer){

            count++;

        };

    });
 
    //The output of the number of drugs that are from the manufacturer
    console.log(`The number of drugs from ${manufacturer} is ${count}.`);

};

manufacturerCount("Nature’s Bounty");
console.log(" ");


// 10. Use forEach() to count how many drugs are Analgesics.

console.log("10. ");
console.log(" ");

//A forEach method is used to loop through the drugs array and count the number of drugs that are Analgesics.
let analgesicDrugs = 0;

drugs.forEach( (drug) => {

    if (drug.category === "Analgesic"){

        analgesicDrugs++

    };
    
});

//The output of the number of drugs that are Analgesics
console.log(analgesicDrugs); 
console.log(" ");


//Give me a great commit for this file
    //"Completed the assignment for week 5 on Higher Array Methods with all the required tasks and functions implemented successfully."