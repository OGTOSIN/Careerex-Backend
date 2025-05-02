const express = require("express");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 6100;

app.listen(PORT, () => {
  console.log(`Server is currently running on port: ${PORT}`);
});

const drugs = [
  {
    id: 1,
    name: "Amoxicillin",
    category: "Antibiotic",
    dosageMg: 500,
    isPrescriptionOnly: true,
    stock: 120,
    manufacturer: "Pfizer",
  },

  {
    id: 2,
    name: "Paracetamol",
    category: "Analgesic",
    dosageMg: 1000,
    isPrescriptionOnly: false,
    stock: 200,
    manufacturer: "GSK",
  },

  {
    id: 3,
    name: "Ibuprofen",
    category: "Analgesic",
    dosageMg: 400,
    isPrescriptionOnly: false,
    stock: 150,
    manufacturer: "Bayer",
  },

  {
    id: 4,
    name: "Chloroquine",
    category: "Antimalarial",
    dosageMg: 250,
    isPrescriptionOnly: true,
    stock: 80,
    manufacturer: "Sanofi",
  },

  {
    id: 5,
    name: "Ciprofloxacin",
    category: "Antibiotic",
    dosageMg: 500,
    isPrescriptionOnly: true,
    stock: 70,
    manufacturer: "Pfizer",
  },

  {
    id: 6,
    name: "Loratadine",
    category: "Antihistamine",
    dosageMg: 10,
    isPrescriptionOnly: false,
    stock: 160,
    manufacturer: "Novartis",
  },

  {
    id: 7,
    name: "Metformin",
    category: "Antidiabetic",
    dosageMg: 850,
    isPrescriptionOnly: true,
    stock: 140,
    manufacturer: "Teva",
  },

  {
    id: 8,
    name: "Artemether",
    category: "Antimalarial",
    dosageMg: 20,
    isPrescriptionOnly: true,
    stock: 60,
    manufacturer: "Roche",
  },

  {
    id: 9,
    name: "Aspirin",
    category: "Analgesic",
    dosageMg: 300,
    isPrescriptionOnly: false,
    stock: 180,
    manufacturer: "Bayer",
  },

  {
    id: 10,
    name: "Omeprazole",
    category: "Antacid",
    dosageMg: 20,
    isPrescriptionOnly: true,
    stock: 90,
    manufacturer: "AstraZeneca",
  },

  {
    id: 11,
    name: "Azithromycin",
    category: "Antibiotic",
    dosageMg: 250,
    isPrescriptionOnly: true,
    stock: 50,
    manufacturer: "Pfizer",
  },

  {
    id: 12,
    name: "Cetirizine",
    category: "Antihistamine",
    dosageMg: 10,
    isPrescriptionOnly: false,
    stock: 110,
    manufacturer: "Novartis",
  },

  {
    id: 13,
    name: "Insulin",
    category: "Antidiabetic",
    dosageMg: 100,
    isPrescriptionOnly: true,
    stock: 30,
    manufacturer: "Novo Nordisk",
  },

  {
    id: 14,
    name: "Artemisinin",
    category: "Antimalarial",
    dosageMg: 100,
    isPrescriptionOnly: true,
    stock: 50,
    manufacturer: "GSK",
  },

  {
    id: 15,
    name: "Codeine",
    category: "Analgesic",
    dosageMg: 30,
    isPrescriptionOnly: true,
    stock: 20,
    manufacturer: "Teva",
  },

  {
    id: 16,
    name: "Vitamin C",
    category: "Supplement",
    dosageMg: 500,
    isPrescriptionOnly: false,
    stock: 300,
    manufacturer: "Nature’s Bounty",
  },

  {
    id: 17,
    name: "Ranitidine",
    category: "Antacid",
    dosageMg: 150,
    isPrescriptionOnly: false,
    stock: 90,
    manufacturer: "Sanofi",
  },

  {
    id: 18,
    name: "Doxycycline",
    category: "Antibiotic",
    dosageMg: 100,
    isPrescriptionOnly: true,
    stock: 40,
    manufacturer: "Pfizer",
  },

  {
    id: 19,
    name: "Tramadol",
    category: "Analgesic",
    dosageMg: 50,
    isPrescriptionOnly: true,
    stock: 45,
    manufacturer: "Teva",
  },

  {
    id: 20,
    name: "Folic Acid",
    category: "Supplement",
    dosageMg: 5,
    isPrescriptionOnly: false,
    stock: 250,
    manufacturer: "Nature’s Bounty",
  },
];

app.get("/", (req, res) => {
  res.json("Welcome to Week 6 Assignment Server");
});



// 1. GET /drugs/antibiotics

// Return all drugs where category is "Antibiotic".

const getAntibDrugs = drugs

  .filter((drug) => drug.category === "Antibiotic")
  .map((drug) => drug.name);

app.get("/drugs/antibiotics", (req, res) => {
  const result = getAntibDrugs;
  res.json(result);
});



// 2.GET /drugs/names

// Return an array of all drug names converted to lowercase.

const getDrugsName = drugs.map((drug) => {
  return drug.name.toLowerCase();
});

app.get("/drugs/names", (req, res) => {
  const result = getDrugsName;

  res.json(result);
});



// 3.POST /drugs/by-category

// Accept a category in the body and return all drugs under that category.
// Example body: { "category": "Antibiotic" }

// A function that accepts a category and returns all drugs under that category.
const categoriesDrugFinder = (category) => {
  return drugs
    .filter((drug) => drug.category === category) // Filter drugs by category
    .map((drug) => drug.name); // Map to drug names
};

// Get a list of all valid categories
const validCategories = [...new Set(drugs.map((drug) => drug.category))];

app.post("/drugs/by-category", (req, res) => {
  const category = req.body.category;

  // Validate that the category is provided
  if (!category) {
    return res.status(400).json({ error: "Category is required" });
  }

  // Validate that the category is valid
  if (!validCategories.includes(category)) {
    return res.status(400).json({ error: "Invalid category provided" });
  }

  // Get the drugs for the given category
  const result = categoriesDrugFinder(category);

  // Handle case where no drugs are found
  if (!result || result.length === 0) {
    return res
      .status(404)
      .json({ message: "No drugs found for the given category" });
  }

  // Send the result
  res.json(result);
});



// 4.GET /drugs/names-manufacturers

// Return an array of objects showing each drug’s name and manufacturer.

const allDrugs = drugs.map(
  (drug) => `Name: ${drug.name} (Manufacturer: ${drug.manufacturer})` //The output of the drug names and their manufacturer
);

app.get("/drugs/names-manufacturers", (req, res) => {
  const result = allDrugs;
  res.json(result);
});



// 5.GET /drugs/prescription

// Return all drugs where isPrescriptionOnly is true.

//A filter and map method can be used to get the name of the drugs that are prescription only.
const filteredDrugs = drugs

  .filter((drug) => drug.isPrescriptionOnly == true)
  .map((drug) => drug.name);

app.get("/drugs/prescription", (req, res) => {
  const result = filteredDrugs;
  res.json(result);
});



// 6. GET /drugs/formatted

// Return a new array where each item is a string like:
// "Drug: [name] - [dosageMg]mg"

const formatDrugs = drugs.map(
  (drug) => `Drug: [${drug.name}] - [${drug.dosageMg}]mg `
);

app.get("/drugs/formatted", (req, res) => {
  const result = formatDrugs;
  res.json(result);
});



// 7.GET /drugs/low-stock

// Return all drugs where stock is less than 50.

//A function that returns all drugs with a stock less than 50.
const drugStock = (reorderLevel) => {
  return drugs

    .filter((drug) => drug.stock < reorderLevel)
    .map((drug) => drug.name);
};

app.get("/drugs/low-stock", (req, res) => {
  const result = drugStock(50);
  res.json(result);
});



// 8.GET /drugs/non-prescription

// Return all drugs where isPrescriptionOnly is false.

const nonPDrugs = drugs

  .filter(
    (drug) =>
      //The filter method is used to get the drugs that are not prescription only.
      !drug.isPrescriptionOnly === true
  )
  .map(
    (drug) =>
      //The map method is used to get the name of the drugs that are not prescription only.
      drug.name
  );

app.get("/drugs/non-prescription", (req, res) => {
  const result = nonPDrugs;
  res.json(result);
});



// 9.POST /drugs/manufacturer-count

// Accept a manufacturer in the body and return how many drugs are produced by that manufacturer.
// Example body: { "manufacturer": "Pfizer" }

//A function that takes a manufacturer name and returns how many drugs are from that company
const manufacturerCount = (manufacturer) => {
  let count = 0;

  companyDrugs = drugs.map((drug) => {
    if (drug.manufacturer === manufacturer) {
      count++;
    }
  });

  //The output of the number of drugs that are from the manufacturer
  return count;
};

app.post("/drugs/manufacturer-count", (req, res) => {
  const manufacturer = req.body.manufacturer;
  const result = manufacturerCount(manufacturer);
  res.json({ result });
});



// 10. GET /drugs/count-analgesics

// Count and return how many drugs have the category "Analgesic".

//A forEach method is used to loop through the drugs array and count the number of drugs that are Analgesics.
let analgesicDrugs = 0;

drugs.forEach((drug) => {
  if (drug.category === "Analgesic") {
    analgesicDrugs++;
  }
});

app.get("/drugs/count-analgesics", (req, res) => {
  const result = analgesicDrugs;
  res.json({ result });
});
