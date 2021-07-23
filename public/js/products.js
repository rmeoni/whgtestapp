//products array of objects
let products = [
  {
    "sku": "CBD-GOL-MIL-240",
    "itemName": "Goldbar-Milk Chocolate/CBD/240mg",
    "itemVariety": "Edibles",
    "itemType": "CBD",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Low",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000642021.png",
    "salesDescription": "This decadent cannabis-infused chocolate bar made of silky imported Belgian chocolate is our flagship product. Our lab-tested Goldbar sets a gold standard in artisan cannabis chocolate. 12 square doses per bar with 20mg each of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "CBD-GUM-STR-40M",
    "itemName": "Gummies-Strawberry-prosecco/CBD/40mg",
    "itemVariety": "Edibles",
    "itemType": "CBD",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Middle",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000894075.png",
    "salesDescription": "Traditional and toothsome German gummies for your adult taste buds. 10 pieces with 40mg each of our own potent sun-grown cannabis oil per package."
  },
  {
    "sku": "THC-BON-GIN-10M",
    "itemName": "Bonbons-Ginger/THC/10mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Middle",
    "isVegan": "Vegan",
    "imgURL": "DocTemplates_ItemImage_2356153000000616171.png",
    "salesDescription": "This discreet, tiny container of 20 European-style hard candy bonbons is perfect for on-the-go relief. Each candy contains 10mg of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "THC-BON-GRA-10M",
    "itemName": "Bonbons-Grapefruit/THC/10mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Middle",
    "isVegan": "Vegan",
    "imgURL": "DocTemplates_ItemImage_2356153000000894117.png",
    "salesDescription": "This discreet, tiny container of 20 European-style hard candy bonbons is perfect for on-the-go relief. Each candy contains 10mg of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "THC-BON-LEM-10M",
    "itemName": "Bonbons-Lemon/THC/10mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Middle",
    "isVegan": "Vegan",
    "imgURL": "DocTemplates_ItemImage_2356153000000616191.png",
    "salesDescription": "This discreet, tiny container of 20 European-style hard candy bonbons is perfect for on-the-go relief. Each candy contains 10mg of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "THC-BON-MIN-10M",
    "itemName": "Bonbons-Mint/THC/10mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Middle",
    "isVegan": "Vegan",
    "imgURL": "DocTemplates_ItemImage_2356153000000894087.png",
    "salesDescription": "This discreet, tiny container of 20 European-style hard candy bonbons is perfect for on-the-go relief. Each candy contains 10mg of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "THC-COC-OIL-120",
    "itemName": "Coconut Oil/THC/120mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Low",
    "isVegan": "Vegan",
    "imgURL": "DocTemplates_ItemImage_2356153000000602007.png",
    "salesDescription": "Organic, refined, cannabis-infused. 120mg THC per 4oz jar. Please pre-order, thank you!"
  },
  {
    "sku": "THC-GOL-BLU-240",
    "itemName": "Goldbar-Blueberry/THC/240mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Middle",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000260027.png",
    "salesDescription": "This decadent cannabis-infused chocolate bar made of silky imported Belgian chocolate is our flagship product. 12 square doses per bar with 20mg each of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "THC-GOL-COO-240",
    "itemName": "Goldbar-Cookies & Cream/THC/240mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Middle",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000260071.png",
    "salesDescription": "This decadent cannabis-infused chocolate bar made of silky imported Belgian chocolate is our flagship product. 12 square doses per bar with 20mg each of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "THC-GOL-DAR-240",
    "itemName": "Goldbar-Dark Chocolate/THC/240mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Middle",
    "isVegan": "Vegan",
    "imgURL": "DocTemplates_ItemImage_2356153000000642051.png",
    "salesDescription": "This decadent cannabis-infused chocolate bar made of silky imported Belgian chocolate is our flagship product. 12 square doses per bar with 20mg each of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "THC-GOL-ESS-240",
    "itemName": "Goldbar-Espresso/THC/240mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Middle",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000001014001.png",
    "salesDescription": "It's time to wake up and Espresso Yourself! This decadent cannabis-infused chocolate bar made of silky imported Belgian chocolate and Guatemalan coffee beans will make you happy! 12 square doses per bar with 20mg each of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "THC-GOL-MIT-240",
    "itemName": "Goldbar-Milk & Toffee/THC/240mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Middle",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000676039.png",
    "salesDescription": "This decadent cannabis-infused chocolate bar made of silky imported Belgian chocolate is our flagship product. 12 square doses per bar with 20mg each of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "THC-GOL-MIL-240",
    "itemName": "Goldbar-Milk Chocolate/THC/240mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Middle",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000667045.png",
    "salesDescription": "This decadent cannabis-infused chocolate bar made of silky imported Belgian chocolate is our flagship product. 12 square doses per bar with 20mg each of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "THC-GOL-MIN-240",
    "itemName": "Goldbar-Mint/THC/240mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Middle",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000642103.png",
    "salesDescription": "This decadent cannabis-infused chocolate bar made of silky imported Belgian chocolate is our flagship product. 12 square doses per bar with 20mg each of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "THC-GOL-ORA-240",
    "itemName": "Goldbar-Orange/THC/240mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Middle",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000260266.png",
    "salesDescription": "This decadent cannabis-infused chocolate bar made of silky imported Belgian chocolate is our flagship product. 12 square doses per bar with 20mg each of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "THC-GOL-RAS-240",
    "itemName": "Goldbar-Raspberry/THC/240mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Middle",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_23561530000002603042.png",
    "salesDescription": "This decadent cannabis-infused chocolate bar made of silky imported Belgian chocolate is our flagship product. 12 square doses per bar with 20mg each of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "THC-GOL-SAL-240",
    "itemName": "Goldbar-Salted Toffee/THC/240mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Middle",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000260304.png",
    "salesDescription": "This decadent cannabis-infused dark chocolate bar made of silky imported Belgian chocolate is our flagship product. 12 square doses per bar with 20mg each of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "THC-GOL-TRI-240",
    "itemName": "Goldbar-Triple Berry/THC/240mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Middle",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000672049.png",
    "salesDescription": "This decadent cannabis-infused chocolate bar made of silky imported Belgian chocolate is our flagship product. 12 square doses per bar with 20mg each of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "THC-GUM-BLU-10M",
    "itemName": "Gummies-Blueberry-mango/THC/10mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Low",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000616127.png",
    "salesDescription": "Traditional and toothsome German gummies for your adult taste buds. 10 pieces with 10mg each of our own potent sun-grown cannabis oil per package."
  },
  {
    "sku": "THC-GUM-CHE-10M",
    "itemName": "Gummies-Cherry-lime/THC/10mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Low",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000616421.png",
    "salesDescription": "Traditional and toothsome German gummies for your adult taste buds. 10 pieces with 10mg each of our own potent sun-grown cannabis oil per package."
  },
  {
    "sku": "THC-GUM-ORA-10M",
    "itemName": "Gummies-Orange-pear/THC/10mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Low",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000616051.png",
    "salesDescription": "Traditional and toothsome German gummies for your adult taste buds. 10 pieces with 10mg each of our own potent sun-grown cannabis oil per package."
  },
  {
    "sku": "THC-GUM-RAS-10M",
    "itemName": "Gummies-Raspberry-lemon/THC/10mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Low",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000616009.png",
    "salesDescription": "Traditional and toothsome German gummies for your adult taste buds. 10 pieces with 10mg each of our own potent sun-grown cannabis oil per package."
  },
  {
    "sku": "THC-GUM-STR-10M",
    "itemName": "Gummies-Strawberry-prosecco/THC/10mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Low",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000609227.png",
    "salesDescription": "Traditional and toothsome German gummies for your adult taste buds. 10 pieces with 10mg each of our own potent sun-grown cannabis oil per package."
  },
  {
    "sku": "THC-MAP-KIC-10",
    "itemName": "Maple Kicks THC 10 mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Inactive",
    "toleranceLevel": "Low",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000197000.png",
    "salesDescription": "10mg THC per Maple Kick, 4 candies per bag. Please pre-order, thank you!"
  },
  {
    "sku": "THC-MAP-SYR-80M",
    "itemName": "Maple Syrup/THC/80mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Low",
    "isVegan": "Vegan",
    "imgURL": "DocTemplates_ItemImage_2356153000000718029.png",
    "salesDescription": "Organic Maple Syrup Maine made with our Full-Spectrum cannabis oil. Contains 80mg of THC."
  },
  {
    "sku": "THC-OLI-OIL-80M",
    "itemName": "Olive Oil/THC/80mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Low",
    "isVegan": "Vegan",
    "imgURL": "DocTemplates_ItemImage_2356153000000718001.png",
    "salesDescription": "Sicilian extra virgin Olive Oil infused with our full-spectrum cannabis oil. Contains 80mg of THC."
  },
  {
    "sku": "",
    "itemName": "White Widow Pre-Rolls",
    "itemVariety": "Flower",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Middle",
    "isVegan": "Vegan",
    "imgURL": "DocTemplates_ItemImage_2356153000001442001.png",
    "salesDescription": "Our prerolls contain 1 gram of our hand trimmed, sunshine grown, A-grade flower, tightly sealed in childproof and recyclable glass containers. We use only high quality buds from the tops of our favorite indica, sativa, and hybrid strains. "
  },
  {
    "sku": "THC-GOL-MIL-240-RHB 7008",
    "itemName": "Goldbar-Red, High and Blue Chocolate/THC/240mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Indica",
    "status": "Active",
    "toleranceLevel": "Middle",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000001297008.png",
    "salesDescription": "Summer is here and we would like to celebrate that with you! We made a special Summer Goldbar with white Belgian chocolate, Maine blueberries, strawberries AND for the first time strain specific oil from our Blueberry cannabis plants. Enjoy those long dreamy summer nights with a piece of red, high and blue.12 square doses per bar with 20mg each."
  },
  {
    "sku": "",
    "itemName": "Blueberry Pre-Rolls",
    "itemVariety": "Flower",
    "itemType": "THC",
    "cannabisType": "Indica",
    "status": "Active",
    "toleranceLevel": "Middle",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000001181010.png",
    "salesDescription": "Our prerolls contain 1 gram of our hand trimmed, sunshine grown, A-grade flower, tightly sealed in childproof and recyclable glass containers. We use only high quality buds from the tops of our favorite indica, sativa, and hybrid strains. "
  },
  {
    "sku": "",
    "itemName": "Mandarin Jack Pre-Rolls",
    "itemVariety": "Flower",
    "itemType": "THC",
    "cannabisType": "Sativa",
    "status": "Active",
    "toleranceLevel": "Middle",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000001442009.png",
    "salesDescription": "Our prerolls contain 1 gram of our hand trimmed, sunshine grown, A-grade flower, tightly sealed in childproof and recyclable glass containers. We use only high quality buds from the tops of our favorite indica, sativa, and hybrid strains. "
  },
  {
    "sku": "THC-GUM-GRA-10M",
    "itemName": "Gummies-Grape-apricot /THC/10mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Indica",
    "status": "Active",
    "toleranceLevel": "Low",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000894003.png",
    "salesDescription": "Traditional and toothsome German gummies for your adult taste buds. 10 pieces with 10mg each of our own potent sun-grown cannabis oil per package."
  },
  {
    "sku": "THC-GUM-MIM-10M",
    "itemName": "Gummies-Mimosa /THC/10mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Sativa",
    "status": "Active",
    "toleranceLevel": "Low",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000616083.png",
    "salesDescription": "Traditional and toothsome German gummies for your adult taste buds. 10 pieces with 10mg each of our own potent sun-grown cannabis oil per package."
  },
  {
    "sku": "50-GOL-DAR-120",
    "itemName": "Goldbar-Dark Chocolate/50-50/120mg",
    "itemVariety": "Edibles",
    "itemType": "50/50",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Low",
    "isVegan": "Vegan",
    "imgURL": "DocTemplates_ItemImage_23561530000006420412.png",
    "salesDescription": "This decadent cannabis-infused chocolate bar made of silky imported Belgian chocolate is our flagship product. 12 square doses per bar with 10mg each of our own potent sun-grown cannabis oil. 50% THC and 50% CBD."
  },
  {
    "sku": "CBD-BON-CHE-20M",
    "itemName": "Bonbons-Cherry/CBD/20mg",
    "itemVariety": "Edibles",
    "itemType": "CBD",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Low",
    "isVegan": "Vegan",
    "imgURL": "DocTemplates_ItemImage_2356153000000616163.png",
    "salesDescription": "This discreet, tiny container of 20 European-style hard candy bonbons is perfect for on-the-go relief. Each candy contains 20mg of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "CBD-BON-MIN-20M",
    "itemName": "Bonbons-Mint/CBD/20mg",
    "itemVariety": "Edibles",
    "itemType": "CBD",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Low",
    "isVegan": "Vegan",
    "imgURL": "DocTemplates_ItemImage_2356153000000486045.png",
    "salesDescription": "This discreet, tiny container of 20 European-style hard candy bonbons is perfect for on-the-go relief. Each candy contains 20mg of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "CBD-GOL-COO-240",
    "itemName": "Goldbar-Cookies & Cream/CBD/240mg",
    "itemVariety": "Edibles",
    "itemType": "CBD",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Low",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000642001.png",
    "salesDescription": "This decadent cannabis-infused chocolate bar made of silky imported Belgian chocolate is our flagship product. 12 square doses per bar with 20mg each of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "CBD-GOL-DAR-240",
    "itemName": "Goldbar-Dark Chocolate/CBD/240mg",
    "itemVariety": "Edibles",
    "itemType": "CBD",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Low",
    "isVegan": "Vegan",
    "imgURL": "DocTemplates_ItemImage_2356153000000642011.png",
    "salesDescription": "This decadent cannabis-infused chocolate bar made of silky imported Belgian chocolate is our flagship product. Our lab-tested Goldbar sets a gold standard in artisan cannabis chocolate. 12 square doses per bar with 20mg each of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "CBD-GUM-BLU-20M",
    "itemName": "Gummies-Blueberry-mango/CBD/20mg",
    "itemVariety": "Edibles",
    "itemType": "CBD",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Low",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000894043.png",
    "salesDescription": "Traditional and toothsome German gummies for your adult taste buds. 10 pieces with 20mg each of our own potent sun-grown cannabis oil per package."
  },
  {
    "sku": "CBD-GUM-RAS-20M",
    "itemName": "Gummies-Raspberry-lemon/CBD/20mg",
    "itemVariety": "Edibles",
    "itemType": "CBD",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Low",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000616017.png",
    "salesDescription": "Traditional and toothsome German gummies for your adult taste buds. 10 pieces with 20mg each of our own potent sun-grown cannabis oil per package."
  },
  {
    "sku": "CBD-GUM-STR-20M",
    "itemName": "Gummies-Strawberry-prosecco/CBD/20mg",
    "itemVariety": "Edibles",
    "itemType": "CBD",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Low",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000894063.png",
    "salesDescription": "Traditional and toothsome German gummies for your adult taste buds. 10 pieces with 20mg each of our own potent sun-grown cannabis oil per package."
  },
  {
    "sku": "THC-BON-TUT-5MG",
    "itemName": "Bonbons-Tutti Frutti/THC/5mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Low",
    "isVegan": "Vegan",
    "imgURL": "DocTemplates_ItemImage_2356153000000616199.png",
    "salesDescription": "This discreet, tiny container of 20 European-style hard candy bonbons is perfect for on-the-go relief. Each candy contains 5mg of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "THC-GOL-BLU-120",
    "itemName": "Goldbar-Blueberry/THC/120mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Low",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000260027.png",
    "salesDescription": "This decadent cannabis-infused chocolate bar made of silky imported Belgian chocolate is our flagship product. 12 square doses per bar with 10mg each of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "THC-GOL-COO-120",
    "itemName": "Goldbar-Cookies & Cream/THC/120mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Low",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000260071.png",
    "salesDescription": "This decadent cannabis-infused chocolate bar made of silky imported Belgian chocolate is our flagship product. 12 square doses per bar with 10mg each of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "THC-GOL-DAR-120",
    "itemName": "Goldbar-Dark Chocolate/THC/120mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Low",
    "isVegan": "Vegan",
    "imgURL": "DocTemplates_ItemImage_2356153000000642041.png",
    "salesDescription": "This decadent cannabis-infused chocolate bar made of silky imported Belgian chocolate is our flagship product. 12 square doses per bar with 10mg each of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "THC-GOL-MIL-120",
    "itemName": "Goldbar-Milk Chocolate/THC/120mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Low",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000667045.png",
    "salesDescription": "This decadent cannabis-infused chocolate bar made of silky imported Belgian chocolate is our flagship product. Our lab-tested Goldbar sets a gold standard in artisan cannabis chocolate. 12 square doses per bar with 10mg each of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "THC-GOL-MIN-120",
    "itemName": "Goldbar-Mint/THC/120mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Low",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000642103.png",
    "salesDescription": "This decadent cannabis-infused chocolate bar made of silky imported Belgian chocolate is our flagship product. 12 square doses per bar with 10mg each of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "THC-GOL-ORA-120",
    "itemName": "Goldbar-Orange/THC/120mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Low",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000260266.png",
    "salesDescription": "This decadent cannabis-infused chocolate bar made of silky imported Belgian chocolate is our flagship product. 12 square doses per bar with 10mg each of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "THC-GOL-RAS-120",
    "itemName": "Goldbar-Raspberry/THC/120mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Low",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000260304.png",
    "salesDescription": "This decadent cannabis-infused chocolate bar made of silky imported Belgian chocolate is our flagship product. 12 square doses per bar with 10mg each of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "THC-GOL-TRI-120",
    "itemName": "Goldbar-Triple Berry/THC/120mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Low",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000260336.png",
    "salesDescription": "This decadent cannabis-infused chocolate bar made of silky imported Belgian chocolate is our flagship product. 12 square doses per bar with 10mg each of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "THC-MED-MEN-40",
    "itemName": "Medicated Salve-Menthol/THC/40mg",
    "itemVariety": "Topicals",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Low",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000672011.png",
    "salesDescription": "Stubborn aches and pains don't stand a chance with this salve, infused with St. John's Wort, Arnica, and 40mg of our own potent sun-grown cannabis oil. "
  },
  {
    "sku": "THC-MED-REG-40",
    "itemName": "Medicated Salve-Regular/THC/40mg",
    "itemVariety": "Topicals",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Low",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000602031.png",
    "salesDescription": "Stubborn aches and pains don't stand a chance with this salve, infused with St. John's Wort, Arnica, and 40mg of our own potent sun-grown cannabis oil. "
  },
  {
    "sku": "THC-GOL-BLU-420",
    "itemName": "Goldbar-Blueberry/THC/420mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "High",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000260027.png",
    "salesDescription": "This decadent cannabis-infused chocolate bar made of silky imported Belgian chocolate is our flagship product. 12 square doses per bar with 35mg each of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "THC-GOL-DAR-420",
    "itemName": "Goldbar-Dark Chocolate/THC/420mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "High",
    "isVegan": "Vegan",
    "imgURL": "DocTemplates_ItemImage_2356153000000642063.png",
    "salesDescription": "This decadent cannabis-infused chocolate bar made of silky imported Belgian chocolate is our flagship product. 12 square doses per bar with 35mg each of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "THC-GOL-MIT-420",
    "itemName": "Goldbar-Milk & Toffee/THC/420mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "High",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000676039.png",
    "salesDescription": "This decadent cannabis-infused chocolate bar made of silky imported Belgian chocolate is our flagship product. 12 square doses per bar with 35mg each of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "THC-GOL-MIL-420",
    "itemName": "Goldbar-Milk Chocolate/THC/420mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "High",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000667045.png",
    "salesDescription": "This decadent cannabis-infused chocolate bar made of silky imported Belgian chocolate is our flagship product. 12 square doses per bar with 35mg each of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "THC-GOL-MIN-420",
    "itemName": "Goldbar-Mint/THC/420mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "High",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000642103.png",
    "salesDescription": "This decadent cannabis-infused chocolate bar made of silky imported Belgian chocolate is our flagship product. 12 square doses per bar."
  },
  {
    "sku": "THC-GOL-MIL-420-SPR",
    "itemName": "Goldbar-Spring Fling Milk Chocolate /THC/420mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Inactive",
    "toleranceLevel": "High",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000921008.png",
    "salesDescription": "Let's have a spring fling! This decadent cannabis-infused chocolate bar made of silky imported Belgian chocolate is our flagship product. 12 square doses per bar with 35mg each of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "THC-GOL-TRI-420",
    "itemName": "Goldbar-Triple Berry/THC/420mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "High",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000260336.png",
    "salesDescription": "This decadent cannabis-infused chocolate bar made of silky imported Belgian chocolate is our flagship product. 12 square doses per bar with 35mg each of our own potent sun-grown cannabis oil."
  },
  {
    "sku": "THC-GUM-CHE-20M",
    "itemName": "Gummies-Cherry-lime/THC/20mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Middle",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000616155.png",
    "salesDescription": "Traditional and toothsome German gummies for your adult taste buds. 10 pieces with 20mg each of our own potent sun-grown cannabis oil per package."
  },
  {
    "sku": "THC-GUM-PEA-20M",
    "itemName": "Gummies-Orange-pear/THC/20mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Middle",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000616067.png",
    "salesDescription": "Traditional and toothsome German gummies for your adult taste buds. 10 pieces with 20mg each of our own potent sun-grown cannabis oil per package."
  },
  {
    "sku": "THC-GUM-RAS-20M",
    "itemName": "Gummies-Raspberry-lemon/THC/20mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Middle",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000616001.png",
    "salesDescription": "Traditional and toothsome German gummies for your adult taste buds. 10 pieces with 20mg each of our own potent sun-grown cannabis oil per package."
  },
  {
    "sku": "THC-GUM-STR-20M",
    "itemName": "Gummies-Strawberry-prosecco/THC/20mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Hybrid",
    "status": "Active",
    "toleranceLevel": "Middle",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000609219.png",
    "salesDescription": "Traditional and toothsome German gummies for your adult taste buds. 10 pieces with 20mg each of our own potent sun-grown cannabis oil per package."
  },
  {
    "sku": "THC-GUM-GRA-20M",
    "itemName": "Gummies-Grape-apricot/THC/20mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Indica",
    "status": "Active",
    "toleranceLevel": "Middle",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000894023.png",
    "salesDescription": "Traditional and toothsome German gummies for your adult taste buds. 10 pieces with 20mg each of our own potent sun-grown cannabis oil per package."
  },
  {
    "sku": "THC-GUM-BLU-20M",
    "itemName": "Gummies-Blueberry-mango/THC/20mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Sativa",
    "status": "Active",
    "toleranceLevel": "Middle",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000001155044.png",
    "salesDescription": "Traditional and toothsome German gummies for your adult taste buds. 10 pieces with 20mg each of our own potent sun-grown cannabis oil per package."
  },
  {
    "sku": "THC-GUM-MIM-20M",
    "itemName": "Gummies-Mimosa /THC/20mg",
    "itemVariety": "Edibles",
    "itemType": "THC",
    "cannabisType": "Sativa",
    "status": "Active",
    "toleranceLevel": "Middle",
    "isVegan": "",
    "imgURL": "DocTemplates_ItemImage_2356153000000616093.png",
    "salesDescription": "Traditional and toothsome German gummies for your adult taste buds. 10 pieces with 20mg each of our own potent sun-grown cannabis oil per package."
  }
 ];


//the product filter logic
const displayProductsFiltered = (responseTest) => {
  //the heading of the recommendation
  const container = document.createElement('section');
  container.setAttribute('id','suggestionContainer');

  let header = document.createElement('h2');
  header.setAttribute('id','heading');
  header.innerText = 'Our recommendation to YOU!';
  container.appendChild(header);


  const productsContainer = document.createElement('div');
  productsContainer.setAttribute('id','productsContainer');
  productsContainer.setAttribute('class','flex-container');
  container.appendChild(productsContainer);
  const suggestion = [];
  
  //to sort the suggestion array of objects by cannabisType (Indica or Sativa first, then Hybrid)
  function compare( a, b ) {
    if ( a.cannabisType < b.cannabisType ){
      return 1;
    }
    if ( a.cannabisType > b.cannabisType ){
      return -1;
    }
    return 0;
  }

  const sortSuggestion = (products, i) => {
    suggestion.push({'itemName': products[i].itemName, 'imgURL': products[i].imgURL, 'cannabisType' : products[i].cannabisType });
    suggestion.sort(compare)
  }
  
  //the rendering of matched products
  const renderProducts = () => {
    for(let i=0; i < suggestion.length; i++) {
      let objectValues = Object.values(suggestion[i]);
      let productDiv = document.createElement('div');
      productDiv.setAttribute('class','productDiv');

         
      let productImage = document.createElement('div');
      productImage.setAttribute('class','productImage');
      productImage.innerHTML = `<img src="public/images/product-images/${suggestion[i].imgURL}" alt="${suggestion[i].itemName.replaceAll(/\/|-/ig,' ')}" aria-label="${suggestion[i].itemName.replaceAll(/\/|-/ig,' ')} ${suggestion[i].cannabisType}" />`;
      productDiv.appendChild(productImage);
  
      let productText = document.createElement('div');
      productText.setAttribute('class','productText');
      productText.innerHTML = `<p id="image-label">${suggestion[i].cannabisType}</p> <p>${suggestion[i].itemName.replaceAll(/\/|-/ig,' ')}</p>` ;
      productDiv.appendChild(productText);
      
      productsContainer.appendChild(productDiv);
      //adding an extra div if the suggestion is not divisible by 3, to fix the spacing
    }if ((suggestion.length % 3) != 0 && suggestion.length != 1 && suggestion.length != 2) {
      let productDiv = document.createElement('div');
      productDiv.setAttribute('class', 'emptyProductDiv');
      productsContainer.appendChild(productDiv);
    }
  }
  
  if(responseTest[1] === 'Flower'){
    for(let i=0; i < products.length;i++) {
      let objectValues = Object.values(products[i]);
      if(objectValues.includes(responseTest[0]) && objectValues.includes(responseTest[1]) && objectValues.includes(responseTest[2])) {
        sortSuggestion(products,i)
      }
    }renderProducts();
  }else if(responseTest[1] === 'Edibles') {
    for(let i=0; i < products.length;i++) {
      let objectValues = Object.values(products[i]);
      //if Active, Edibles, cannabisType, toleranceLevel and isVegan
      if(objectValues.includes(responseTest[0]) && objectValues.includes(responseTest[1]) && objectValues.includes(responseTest[2]) && objectValues.includes(responseTest[4]) && objectValues.includes(responseTest[5]) ) {
        sortSuggestion(products,i);
        //if Active, Edibles, toleranceLevel, Hybrid and isVegan
      }else if(objectValues.includes(responseTest[0]) && objectValues.includes(responseTest[1]) && objectValues.includes('Hybrid') && objectValues.includes(responseTest[4]) && objectValues.includes(responseTest[5])){
        sortSuggestion(products,i);
      }
    }renderProducts();

  }else if(responseTest[1] === 'Topicals') {
    for(let i=0; i < products.length;i++) {
      let objectValues = Object.values(products[i]);
      //if Active and Topicals
      if(objectValues.includes(responseTest[0])&& objectValues.includes(responseTest[1])) {
        sortSuggestion(products,i);
      }
    }renderProducts();
  }else if(responseTest[1] === 'Active') {
    for(let i=0; i < products.length;i++) {
      let objectValues = Object.values(products[i]);
      //if Active, Active, cannabisType, toleranceLevel and Vegan
      if(objectValues.includes(responseTest[0]) && objectValues.includes(responseTest[1]) && objectValues.includes(responseTest[2]) && objectValues.includes(responseTest[4]) && objectValues.includes(responseTest[5])) {
        sortSuggestion(products,i);
      //if Active, Active, toleranceLevel, Hybrid and Vegan
      }else if(objectValues.includes(responseTest[0]) && objectValues.includes(responseTest[1]) && objectValues.includes('Hybrid') && objectValues.includes(responseTest[4]) && objectValues.includes(responseTest[5])) {
        sortSuggestion(products,i);
      }
    }renderProducts();
  };

  //If there was no suggestion render the sorry text
  if(suggestion.length < 1) {
    let sorryDiv = document.createElement('div');
    sorryDiv.setAttribute('id','sorryDiv');
    let sorryText = document.createElement('p');
    sorryDiv.setAttribute('id','sorryText');
    sorryText.innerText = "We are truly sorry but we couldn't find a product to recommend you based on your response. Please try again.";

    sorryDiv.appendChild(sorryText);
    document.querySelector('main').appendChild(sorryDiv);
    console.log("no recommendation");
  }

  for(let i= 0; i < suggestion.length;i++) {
    console.log(`the suggestion is ${suggestion[i].cannabisType}`);
  }
  document.querySelector('main').prepend(container);

    //Fixing the spacing for the products showned according to the suggestion length, so it's always centered
    if(suggestion.length === 1){
      document.querySelector("#productsContainer").style.maxWidth = '158px';
      document.querySelector("#productsContainer").style.overflow = 'hidden';
      document.querySelector("#productsContainer").style.padding = '0px';
      document.querySelector('.productDiv').style.marginRight = '0px';
    }else if(suggestion.length === 2){
      document.querySelector("#productsContainer").style.maxWidth = '352px';
      document.querySelector("#productsContainer").style.overflow = 'hidden';
      document.querySelector("#productsContainer").style.padding = '0px';
    } else if(suggestion.length === 3) {
      document.querySelector("#productsContainer").style.maxWidth = '522px';
      document.querySelector("#productsContainer").style.padding = '0px';

    }else if(suggestion.length === 4) {
      document.querySelector("#productsContainer").style.maxWidth = '692px';
      document.querySelector("#productsContainer").style.padding = '0px';

    }else if(suggestion.length === 5) {
      document.querySelector("#productsContainer").style.maxWidth = '862px';
      document.querySelector("#productsContainer").style.padding = '0px';

    }
    /*
    //if suggestion is bigger than 2 add right margin
    if(suggestion.length > 2) {
      document.querySelector(".productDiv").style.marginRight = '12px';
    }*/

}