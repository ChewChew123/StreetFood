const recipes =
  [
    {
      id: 'nasiLemak',
      name: 'Nasi Lemak',
      image: 'img/recipes/nasilemak.jpg',//https://www.pexels.com/photo/close-up-of-a-dish-with-rice-and-eggs-served-on-a-leaf-11912814/
      cuisine: 'Malay',
      type: 'Food',
      time: '30-60 min',
      popularity: 9143,
      rating: 4,
      level: 'Medium',
      url: "recipe_detail.html?id=nasiLemak", 
      description: "A fragrant rice dish cooked in coconut milk and pandan leaf, served with a spicy sambal, fried anchovies, peanuts, and a boiled or fried egg. The rice is aromatic, fluffy, and rich, making it the perfect base for the savory and sweet sambal.",
      ingredients: [
        "2 cups rice",
        "400ml coconut milk",
        "2 cups water",
        "2 pandan leaves, knotted",
        "1 tsp salt",
        "1 inch ginger, sliced",
        "For Sambal: 15 dried chilies (soaked), 5 shallots, 2 cloves garlic, 1 tbsp tamarind paste, 1/4 cup sugar, Salt to taste",
        "Accompaniments: Fried anchovies, roasted peanuts, sliced cucumber, hard-boiled eggs"
      ],
      instructions: [
        "1. Cook the rice: Add the rice, coconut milk, pandan leaves, lemongrass, and salt to a rice cooker or pot. Stir and cook until the rice is fluffy and the liquid is absorbed.",
        "2. Make the sambal: Blend the chilies, shallots, garlic, and shrimp paste into a smooth paste. Sauté the paste in hot oil until fragrant. Add the sugar, tamarind, and a little of the chili soaking liquid. Simmer on low heat until the oil separates and the sambal thickens. Stir in the fried anchovies and sliced onions.",
        "3. Serve: Fluff the rice with a fork. Serve with a generous spoonful of sambal, roasted peanuts, sliced cucumber, fried anchovies, and a hard-boiled or fried egg."
      ],
      video: "https://www.youtube.com/embed/IUIs4C86Ilo?si=MEbMH04oQBbWSflY"
    },
    {
      id: 'rotiCanai',
      name: 'Roti Canai',
      image: 'img/recipes/roticanai.jpg',//https://www.istockphoto.com/photo/roti-parata-or-roti-canai-with-lamb-curry-sauce-popular-malaysian-breakfast-gm1296798642-390107907
      cuisine: 'Indian',
      type: 'Food',
      time: 'Over 60 min',
      popularity: 3541,
      rating: 4.8,
      level: 'Hard',
      url: "recipe_detail.html?id=rotiCanai",
      description: "A flaky, soft, and crispy flatbread that is a Malaysian breakfast staple. It is traditionally made by repeatedly folding the dough with butter or ghee to create thin, layered pockets of air. It's best served hot with a side of savory curry or sweet sugar.",
      ingredients: [
        "3 1/2 cups all-purpose flour",
        "1 1 / 2 tsp salt",
        "1 tsp granulated sugar",
        "3 / 4 cup ghee or softened butter",
        "1 large egg, beaten",
        "3 / 4 cup whole milk",
        "1 / 2 cup water",
        "Additional ghee / oil for cooking"
      ],
      instructions: [
        "1. Make the dough: In a stand mixer, combine flour, salt, sugar, and 1/4 cup of ghee. Mix until it forms clumps. Add the egg, milk, and water and knead for 8-10 minutes until a smooth, elastic dough forms.",
        "2. Rest the dough: Divide the dough into 8 equal balls. Coat each ball generously with ghee. Place on a plate, cover with a damp cloth, and let rest at room temperature for at least 6 hours or overnight.",
        "3. Stretch the dough: On a ghee-coated surface, use your palm to flatten a dough ball into a thin disc. Use your fingertips to gently stretch the dough from the center outwards until it is paper-thin.",
        "4. Fold and cook: Fold the stretched dough into a multi-layered square or spiral shape. Heat a griddle or pan over medium-low heat. Flatten the folded dough and cook for 3-4 minutes on each side until golden brown.",
        "5. Serve: Once cooked, use a gentle clapping motion to fluff the layers. Serve immediately with curry or sugar."
      ]
    },
    {
      id: 'charKueyTeow',
      name: 'Char Kuey Teow',
      image: 'img/recipes/charkueyteow.jpg',//https://www.istockphoto.com/photo/char-kuey-teow-gm1569333987-527817748
      cuisine: 'Chinese',
      type: 'Food',
      time: 'Under 15 min',
      popularity: 1654,
      rating: 4,
      level: 'Medium',
      url: "recipe_detail.html?id=charKueyTeow",
      description: "A popular Malaysian street food dish of stir-fried rice noodles. It is known for its smoky 'wok hei' flavor, which is achieved by frying the noodles over very high heat with a savory sauce, prawns, Chinese sausage, egg, and chives.",
      ingredients: [
        "600g fresh flat rice noodles",
        "12 extra-large prawns, peeled and deveined",
        "1 Chinese sausage (lap cheong), thinly sliced",
        "4 cloves garlic, minced",
        "4 eggs",
        "2 cups fresh bean sprouts",
        "1/2 cup garlic chives, cut into 1 1/2-inch pieces",
        "Oil for frying",
        "1 tbsp light soy sauce",
        "1 tsp dark soy sauce",
        "1 tsp oyster sauce",
        "1/4 tsp sugar",
        "1/4 tsp white pepper"
      ],
      instructions: [
        "1. Prepare ingredients: Bring fresh noodles to room temperature. Mix all the sauce ingredients in a small bowl. Prepare the prawns, sliced sausage, and chopped garlic chives.",
        "2. Stir-fry: Heat a wok over very high heat. Add some oil and sauté minced garlic for a few seconds. Add the prawns and Chinese sausage and stir-fry for 1-2 minutes.",
        "3. Add noodles: Add a portion of the noodles to the wok, along with the premixed sauce. Stir-fry for 2-3 minutes, tossing continuously to prevent sticking and to achieve a slight char on the noodles.",
        "4. Finish the dish: Add the bean sprouts and chives, stir-frying until they are just wilted. Make a well in the center of the wok, add a drop of oil, and crack an egg into it. Scramble the egg and then mix it into the noodles. Serve immediately."
      ]
    },
    {
      id: 'abc',
      name: 'ABC',
      image: 'img/recipes/abc.jpg',//https://www.istockphoto.com/photo/ais-malaysia-dessert-with-sweet-syrup-and-ice-gm479790096-68228803
      cuisine: 'Malay',
      type: 'Dessert',
      time: 'Under 15 min',
      popularity: 752,
      rating: 4,
      level: 'Easy',
      url: "recipe_detail.html?id=abc",
      description: "A classic Malaysian shaved ice dessert, also known as Air Batu Campur (mixed ice). It features a mountain of finely shaved ice topped with sweet syrups, evaporated milk, and various toppings like red beans, sweet corn, and jellies.",
      ingredients: [
        "Finely shaved ice",
        "Rose syrup",
        "Palm sugar syrup (gula melaka)",
        "Evaporated milk",
        "Cooked sweet red beans",
        "Creamed sweet corn",
        "Roasted crushed peanuts",
        "Grass jelly or nata de coco",
        "Palm seeds (attap chee)"
      ],
      instructions: [
        "1. Prepare syrups: Simmer palm sugar with water and a knotted pandan leaf until the sugar dissolves and the syrup thickens. Let cool.",
        "2. Assemble: Place a generous amount of cooked red beans, sweet corn, and jellies in the bottom of a bowl. Pile a mound of finely shaved ice on top. Drizzle with rose syrup and palm sugar syrup, then top with evaporated milk. Garnish with crushed peanuts and other desired toppings. Serve immediately."
      ]
    },
    {
      id: 'cendol',
      name: 'Cendol',
      image: 'img/recipes/cendol.jpg',//https://www.istockphoto.com/photo/cendol-is-a-malaysian-dessert-made-of-shaved-ice-coconut-milk-green-pandan-jelly-gm2193205289-611452495
      cuisine: 'Malay',
      type: 'Dessert',
      time: 'Under 15 min',
      popularity: 4168,
      rating: 4,
      level: 'Easy',
      url: "recipe_detail.html?id=cendol",
      description: "A popular dessert in Southeast Asia, particularly in Malaysia and Singapore. It consists of green rice flour jelly (cendol) served with a sweet base of coconut milk and palm sugar syrup, often with shaved ice.",
      ingredients: [
        "1 cup rice flour",
        "2 tbsp tapioca flour",
        "2 3/4 cups water",
        "1/2 tsp salt",
        "1 tsp pandan paste or pandan juice",
        "1 3/4 cups palm sugar",
        "3/4 cup + 2 tbsp water",
        "1 pandan leaf, knotted",
        "1 2/3 cups coconut milk",
        "1 1/4 cups water",
        "1 pandan leaf, knotted",
        "Shaved ice"
      ],
      instructions: [
        "1. Make the syrup: In a saucepan, combine palm sugar, water, and knotted pandan leaf. Simmer until the sugar dissolves and the mixture thickens slightly. Let it cool.",
        "2. Make the cendol: Mix the rice flour, tapioca flour, and salt in a bowl with some water to form a smooth paste. In a separate pot, boil the remaining water with pandan paste. Add the flour mixture to the boiling water, stirring constantly until it becomes a thick, sticky paste.",
        "3. Shape the cendol: Press the hot paste through a cendol maker or a colander with large holes, directly into a large bowl of ice water. The strands will harden instantly.",
        "4. Prepare the coconut milk: Simmer the coconut milk with water and a knotted pandan leaf until fragrant. Let it cool.",
        "5. Assemble: In a serving bowl, add a spoonful of cendol jelly, pour in the prepared coconut milk and palm sugar syrup. Top with shaved ice and serve."
      ]
    },
    {
      id: 'keropokLekor',
      name: 'Keropok Lekor',
      image: 'img/recipes/keropoklekor.jpg',//https://www.istockphoto.com/photo/keropok-lekor-isolated-on-wooden-background-gm896625906-247568356
      cuisine: 'Malay',
      type: 'Snack',
      time: 'Under 15 min',
      popularity: 156,
      rating: 3,
      level: 'Medium',
      url: "recipe_detail.html?id=keropokLekor",
      description: "A traditional Malaysian fish cracker snack from the state of Terengganu. It is made from a mixture of fresh fish, sago starch, and salt, which is rolled into sausage-like shapes and then boiled and deep-fried until golden and crispy.",
      ingredients: [
        "400g fresh mackerel or sardines, deboned and skinned",
        "200g tapioca flour",
        "1 1/2 tsp fine sea salt",
        "1/2 tsp ground white pepper",
        "1 tsp sugar",
        "1-2 tbsp cold water (as needed)",
        "Oil for deep frying"
      ],
      instructions: [
        "1. Prepare the fish paste: Blend the deboned and skinned fish in a food processor until it forms a smooth paste. Transfer the paste to a bowl.",
        "2. Form the dough: Add the tapioca flour, salt, pepper, and sugar to the fish paste. Mix with your hands until a sticky, cohesive dough forms. Add a little cold water if the dough is too dry.",
        "3. Shape and boil: Lightly dust your hands with flour. Divide the dough into portions and roll them into logs about 15cm long. Gently drop the logs into a pot of simmering water. Simmer for 8-10 minutes, or until they float to the surface.",
        "4. Fry: Remove the boiled logs and let them cool completely. Cut the logs into diagonal slices. Heat oil in a wok and deep-fry the slices in batches until they are golden brown and crispy.",
        "5. Serve: Drain the excess oil and serve hot with a side of sweet chili sauce."
      ],
      video: "https://www.youtube.com/embed/sco2LD8AA-Y?si=MQRdKgg6osEa67_v"
    },
    {
      id: 'nasiBiryani',
      name: 'Nasi Biryani',
      image: 'img/recipes/nasibiryani.jpg',//https://www.istockphoto.com/photo/serving-plate-of-nasi-biryani-ayam-or-briyani-rice-with-chicken-fried-onion-pickled-gm2188381897-606906184
      cuisine: 'Indian',
      type: 'Food',
      time: 'Over 60 min',
      popularity: 984,
      rating: 4,
      level: 'Hard',
      url: "recipe_detail.html?id=nasiBiryani",
      description: "A flavorful rice dish with Indian-Muslim origins, popular in Malaysia and often served at special occasions. The rice is aromatic, fluffy, and fragrant with spices, ghee, and evaporated milk. It is a rich and decadent main course.",
      ingredients: [
        "1kg Basmati rice, washed",
        "125ml ghee",
        "4 cardamoms",
        "6 cloves",
        "2 star anise",
        "1 large onion, minced",
        "1 inch ginger, sliced thin",
        "2 pandan leaves, knotted",
        "750ml chicken stock",
        "250ml evaporated milk",
        "1 tsp saffron",
        "4 tbsp rosewater",
        "Salt to taste"
      ],
      instructions: [
        "1. Sauté the spices: In a large pot or pan, heat the ghee and sauté the cardamom, cloves, and star anise until fragrant. Add the onion, ginger, and pandan leaves, and continue to sauté for a few minutes.",
        "2. Add liquids: Pour in the chicken stock, evaporated milk, and saffron. Bring the mixture to a boil.",
        "3. Cook the rice: Add salt and the washed rice to the boiling liquid. Stir once, then let it simmer until the rice is cooked and the liquid is absorbed. Reduce the heat, cover the pot, and let it steam for 10 minutes.",
        "4. Finish and serve: Drizzle the rosewater over the rice, stir gently, and cook for another 5 minutes. Serve hot, garnished with fried onions if desired."
      ],
      video: "https://www.youtube.com/embed/95BCU1n268w?si=HUSnWTcQtuxpDfZy"
    },
    {
      id: 'bakKutTeh',
      name: 'Bak Kut Teh',
      image: 'img/recipes/bakkutteh.jpg',//https://www.istockphoto.com/photo/group-of-pork-cooked-in-broth-bak-kut-teh-gm1862460865-552583364
      cuisine: 'Chinese',
      type: 'Food',
      time: 'Over 60 min',
      popularity: 1530,
      rating: 4,
      level: 'Medium',
      url: "recipe_detail.html?id=bakKutTeh",
      description: "A Chinese-Malaysian herbal soup with a rich, savory broth and tender pork ribs. The name translates to 'pork bone tea,' and it is often made with a special blend of herbs and spices that simmer for hours to create a deeply flavorful soup.",
      ingredients: [
        "500g pork ribs",
        "500g pork belly",
        "2 liters water",
        "1 packet of bak kut teh herbs and spices",
        "2 bulbs of garlic",
        "1 tbsp dark soy sauce",
        "1 tbsp light soy sauce",
        "1 tsp sugar",
        "Salt to taste",
        "Fried tofu puffs and mushrooms (optional)",
        "Lettuce for serving"
      ],
      instructions: [
        "1. Blanch the pork: Bring a large pot of water to a boil and add the pork ribs and pork belly. Blanch for 5-10 minutes to remove impurities. Rinse the pork under cold water.",
        "2. Make the broth: In a clean pot, bring 2 liters of water to a boil. Add the blanched pork, the bak kut teh spice packet, and the whole garlic bulbs. Lower the heat to a simmer, cover, and let it cook for at least 1.5 hours, or until the pork is very tender.",
        "3. Season and serve: Skim off any fat from the surface of the soup. Add the dark soy sauce, light soy sauce, and sugar to the broth. Add the fried tofu puffs or mushrooms and let them cook for a few minutes. Serve the hot soup with lettuce, rice, and a side of chili padi with soy sauce for dipping."
      ]
    },
    {
      id: 'satay',
      name: 'Satay',
      image: 'img/recipes/satay.jpg',//https://www.istockphoto.com/photo/cropped-image-of-man-preparing-satay-on-barbecue-gm1439471787-479733164
      cuisine: 'Malay',
      type: 'Food',
      time: '30–60 min',
      popularity: 2100,
      rating: 5,
      level: 'Medium',
      url: "recipe_detail.html?id=satay",
      description: "A popular Malaysian street food of skewered and grilled meat served with a rich peanut sauce, rice cakes (ketupat), and cucumber-onion salad.",
      ingredients: [
        "500g chicken or beef (cut into cubes)",
        "2 tbsp turmeric powder",
        "1 tbsp coriander powder",
        "2 cloves garlic (minced)",
        "2 shallots (minced)",
        "2 tbsp cooking oil",
        "1 tbsp sugar",
        "Salt to taste",
        "Bamboo skewers (soaked in water)",
        "Peanut sauce, ketupat, cucumber, and onion for serving"
      ],
      instructions: [
        "1. Marinate the meat: Mix turmeric, coriander, garlic, shallots, oil, sugar, and salt. Coat the meat cubes and marinate for at least 2 hours or overnight.",
        "2. Skewer and grill: Thread the marinated meat onto bamboo skewers. Grill over charcoal until cooked and slightly charred, basting with oil as needed.",
        "3. Serve: Plate with peanut sauce, ketupat (rice cakes), cucumber, and onion."
      ]
    },
    {
      id: 'laksa',
      name: 'Laksa',
      image: 'img/recipes/laksa.jpg',//https://www.istockphoto.com/photo/laksa-lemak-is-a-noodle-dish-from-malaysia-and-singapore-gm2192104946-610403773
      cuisine: 'Malay',
      type: 'Food',
      time: '30–60 min',
      popularity: 1850,
      rating: 5,
      level: 'Hard',
      url: "recipe_detail.html?id=laksa",
      description: "A spicy noodle soup with a coconut milk base, often topped with shrimp, chicken, tofu puffs, and bean sprouts. One of Malaysia’s iconic comfort foods.",
      ingredients: [
        "200g rice vermicelli or egg noodles",
        "200g prawns",
        "150g chicken breast (sliced)",
        "200ml coconut milk",
        "1 tbsp curry paste",
        "2 tbsp chili paste",
        "2 stalks lemongrass",
        "4 cups chicken stock",
        "Tofu puffs, bean sprouts, boiled egg, lime, mint leaves"
      ],
      instructions: [
        "1. Prepare broth: In a pot, sauté curry paste and chili paste with lemongrass until fragrant. Add chicken stock and bring to boil.",
        "2. Add protein: Add chicken slices and prawns. Pour in coconut milk and simmer for 10–15 minutes.",
        "3. Assemble: Cook noodles separately. Serve noodles in a bowl, ladle broth over, and top with tofu puffs, bean sprouts, egg, lime, and mint."
      ]
    },
    {
      id: 'rendang',
      name: 'Beef Rendang',
      image: 'img/recipes/rendang.jpg',//https://www.istockphoto.com/photo/rendang-pork-gm2161659672-582090562
      cuisine: 'Malay',
      type: 'Food',
      time: 'Over 60 min',
      popularity: 2400,
      rating: 5,
      level: 'Hard',
      url: "recipe_detail.html?id=rendang",
      description: "A slow-cooked dry curry, famous for its tender beef and aromatic blend of coconut milk and spices. Often served with rice or lemang.",
      ingredients: [
        "1kg beef (cubed)",
        "400ml coconut milk",
        "100g grated coconut (toasted and ground)",
        "2 stalks lemongrass",
        "4 kaffir lime leaves",
        "5 cloves garlic",
        "6 shallots",
        "2cm ginger",
        "2cm galangal",
        "2 tbsp chili paste",
        "Salt and sugar to taste"
      ],
      instructions: [
        "1. Blend garlic, shallots, ginger, galangal, and chili paste into a spice paste.",
        "2. In a pot, cook the paste with lemongrass until fragrant. Add beef, coconut milk, and lime leaves.",
        "3. Simmer for 2–3 hours, stirring occasionally, until beef is tender and sauce thickens into a dry curry.",
        "4. Add toasted grated coconut (kerisik) and season to taste. Serve hot with rice."
      ],
      video: "https://www.youtube.com/embed/l76CNoIYFkQ?si=P0FGKg0wKWaBx8EE"
    },
    {
      id: 'rojak',
      name: 'Rojak',
      image: 'img/recipes/rojak.jpg',//https://www.istockphoto.com/photo/rojak-gm512966384-87382311
      cuisine: 'Indian',
      type: 'Food',
      time: '15–30 min',
      popularity: 1100,
      rating: 4,
      level: 'Easy',
      url: "recipe_detail.html?id=rojak",
      description: "A Malaysian fruit and vegetable salad with a bold, sweet, and spicy dressing made from tamarind or shrimp paste, topped with crushed peanuts.",
      ingredients: [
        "200g pineapple (cubed)",
        "200g cucumber (sliced)",
        "100g jicama (yam bean, cubed)",
        "100g bean sprouts",
        "100g fried tofu (cubed)",
        "3 tbsp tamarind juice or shrimp paste",
        "2 tbsp sugar",
        "1 tbsp chili paste",
        "2 tbsp lime juice",
        "Crushed peanuts for topping"
      ],
      instructions: [
        "1. Prepare dressing: Mix tamarind juice (or shrimp paste), sugar, chili paste, and lime juice until smooth.",
        "2. Toss salad: Combine fruits, vegetables, and tofu in a large bowl. Pour dressing and mix well.",
        "3. Serve: Sprinkle with crushed peanuts before serving."
      ]
    },
    {
      id: 'tehtarik',
      name: 'Teh Tarik',
      image: 'img/recipes/tehtarik.jpg',//https://www.istockphoto.com/photo/teh-tarik-malaysian-hot-milk-tea-served-in-glass-mug-isolated-on-marble-background-gm2203828838-621338034
      cuisine: 'Indian',
      type: 'Drink',
      time: 'Under 15 min',
      popularity: 1750,
      rating: 5,
      level: 'Easy',
      url: "recipe_detail.html?id=tehtarik",
      description: "Malaysia’s famous pulled tea, made by pouring strong tea with condensed milk back and forth between two containers to create a frothy top.",
      ingredients: [
        "2 tbsp black tea leaves or 2 tea bags",
        "200ml hot water",
        "3 tbsp condensed milk",
        "2 tbsp evaporated milk"
      ],
      instructions: [
        "1. Brew tea: Steep tea leaves in hot water for 5 minutes.",
        "2. Mix: Add condensed and evaporated milk, stirring well.",
        "3. Pull: Pour tea between two mugs several times until frothy. Serve hot."
      ]
    },
    {
      id: 'hainaneserice',
      name: 'Hainanese Chicken Rice',//https://www.istockphoto.com/photo/hainanese-chicken-rice-with-soup-and-three-sauces-on-dark-wood-table-texture-gm1219833146-356939919
      image: 'img/recipes/hainanese_chicken_rice.jpg',
      cuisine: 'Chinese',
      type: 'Food',
      time: '30–60 min',
      popularity: 2200,
      rating: 5,
      level: 'Medium',
      url: "recipe_detail.html?id=hainaneserice",
      description: "Steamed or poached chicken served with fragrant rice cooked in chicken fat and broth, paired with chili sauce and ginger paste. A Malaysian-Chinese classic.",
      ingredients: [
        "1 whole chicken",
        "4 cups chicken broth",
        "2 cups jasmine rice",
        "2 tbsp chicken fat or oil",
        "3 cloves garlic",
        "2 slices ginger",
        "Salt to taste",
        "Chili sauce, ginger paste, soy sauce for serving"
      ],
      instructions: [
        "1. Poach chicken: Simmer whole chicken in water with ginger and garlic until cooked. Reserve the broth.",
        "2. Cook rice: Fry garlic and ginger in chicken fat, add rice and broth, cook until fluffy.",
        "3. Serve: Slice chicken, drizzle with soy sauce, and serve with rice, chili, and ginger paste."
      ]
    },
    {
      id: 'wantonmee',
      name: 'Wanton Mee',
      image: 'img/recipes/wantonmee.jpg',//https://www.istockphoto.com/photo/wanton-mee-gm186329265-27907026
      cuisine: 'Chinese',
      type: 'Food',
      time: '30–60 min',
      popularity: 1700,
      rating: 4,
      level: 'Medium',
      url: "recipe_detail.html?id=wantonmee",
      description: "Egg noodles tossed in savory soy sauce mix, served with char siu, leafy greens, and wantons (dumplings). A Malaysian hawker staple.",
      ingredients: [
        "200g egg noodles",
        "150g char siu (roast pork)",
        "6 wantons (pork or prawn filling)",
        "2 tbsp soy sauce",
        "1 tbsp oyster sauce",
        "1 tsp sesame oil",
        "Choy sum (blanched)",
        "Spring onions for garnish"
      ],
      instructions: [
        "1. Make wantons: Wrap pork or prawn filling in wonton skins and boil until cooked.",
        "2. Prepare noodles: Blanch noodles, toss with soy sauce, oyster sauce, and sesame oil.",
        "3. Assemble: Serve noodles with char siu, wantons, and blanched greens."
      ]
    },
    {
      id: 'meeSiam',
      name: 'Mee Siam',
      image: 'img/recipes/meesiam.jpg',//https://www.istockphoto.com/photo/mee-siam-or-siamese-noodle-a-traditional-thai-style-noodle-gm1832717763-550883445
      cuisine: 'Malay',
      type: 'Food',
      time: '30–60 min',
      popularity: 1400,
      rating: 4,
      level: 'Medium',
      url: "recipe_detail.html?id=meeSiam",
      description: "Rice vermicelli stir-fried in a tangy, spicy tamarind-based sauce, served with boiled egg, tofu, and sambal. A Malay favourite for breakfast or lunch.",
      ingredients: [
        "200g rice vermicelli",
        "100g fried tofu (sliced)",
        "2 tbsp chili paste",
        "2 tbsp tamarind juice",
        "2 cloves garlic",
        "2 shallots",
        "2 eggs (boiled)",
        "Bean sprouts and chives for garnish"
      ],
      instructions: [
        "1. Blend chili, garlic, and shallots into a paste, fry until fragrant.",
        "2. Add tamarind juice and seasonings, then stir-fry noodles with tofu.",
        "3. Garnish with egg, bean sprouts, and sambal before serving."
      ],
      video: "https://www.youtube.com/embed/xrCmJ-0juaU?si=-dTL0_bT9LWQX1Mq"
    },
    {
      id: 'thosai',
      name: 'Thosai',
      image: 'img/recipes/thosai.jpg',//https://www.istockphoto.com/photo/cheese-masala-dosa-recipe-with-sambar-and-chutney-selective-focus-gm1156896083-315480891
      cuisine: 'Indian',
      type: 'Food',
      time: '30–60 min',
      popularity: 1600,
      rating: 4,
      level: 'Medium',
      url: "recipe_detail.html?id=tosai",
      description: "A fermented rice and lentil crepe, crispy on the outside and soft inside, usually served with dhal curry, chutney, or sambal.",
      ingredients: [
        "2 cups rice",
        "1 cup urad dal (black gram)",
        "1 tsp fenugreek seeds",
        "Salt to taste",
        "Oil for cooking",
        "Dhal curry and coconut chutney for serving"
      ],
      instructions: [
        "1. Soak rice, dal, and fenugreek for 6 hours. Grind into smooth batter and ferment overnight.",
        "2. Heat a flat pan, spread batter thin, drizzle oil, and cook until crispy.",
        "3. Serve with dhal curry, chutney, or sambal."
      ]
    },
    {
      id: 'murtabak',
      name: 'Murtabak',
      image: 'img/recipes/murtabak.jpg',//https://www.istockphoto.com/photo/plate-of-delectable-minced-beef-stuffed-roti-mataba-or-murtabak-gm2148806127-570003732
      cuisine: 'Indian',
      type: 'Food',
      time: '30–60 min',
      popularity: 1800,
      rating: 5,
      level: 'Hard',
      url: "recipe_detail.html?id=murtabak",
      description: "A pan-fried stuffed flatbread filled with spiced minced meat, onions, and egg. A popular Indian-Muslim street food in Malaysia.",
      ingredients: [
        "4 roti canai dough balls",
        "300g minced beef or chicken",
        "1 onion (diced)",
        "2 cloves garlic",
        "2 eggs (beaten)",
        "1 tsp curry powder",
        "Salt and pepper to taste",
        "Oil for frying"
      ],
      instructions: [
        "1. Cook filling: Fry onion, garlic, curry powder, and minced meat until cooked. Let cool slightly, mix with beaten eggs.",
        "2. Stuff: Flatten dough, place filling inside, fold into square.",
        "3. Fry: Cook on oiled pan until golden brown. Serve hot with curry."
      ],
      video: "https://www.youtube.com/embed/fW4VIfsZM44?si=0GDeDHnZ3BsRM7l-"
    },

    {
      id: 'pisanggoreng',
      name: 'Pisang Goreng',
      image: 'img/recipes/pisanggoreng.jpg', //https://media.istockphoto.com/id/2182789106/photo/crispy-fried-banana-or-known-as-pisang-goreng-for-local-famous-snack-in-malaysia.jpg?s=612x612&w=0&k=20&c=304nk_UTMYj9M5rdPJ2VHL-GRQ1AHHkdhs-UH8RRZ-w=
      cuisine: 'Malay',
      type: 'Snack',
      time: '15-30 min',
      popularity: 1656,
      rating: 5,
      level: 'Easy',
      url: "recipe_detail.html?id=pisanggoreng",
      description: "Crispy Malaysian-style fried bananas, known as Pisang Goreng, are a popular street snack with a crunchy golden coating and soft sweet inside.",
      ingredients: [
        "6 ripe bananas (pisang raja or pisang awak preferred)",
        "1 cup all-purpose flour",
        "2 tbsp rice flour",
        "2 tbsp corn flour (optional)",
        "1 tbsp sugar",
        "1/4 tsp salt",
        "1/2 tsp baking powder",
        "3/4 cup water (adjust as needed)",
        "Oil for deep frying"
      ],
      instructions: [
        "1. Peel the bananas and cut them into halves or thirds.",
        "2. In a bowl, mix flour, rice flour, corn flour, sugar, salt, and baking powder.",
        "3. Gradually add water until you get a smooth, slightly thick batter.",
        "4. Heat oil in a deep pan (170–180°C).",
        "5. Dip banana pieces into the batter and coat evenly.",
        "6. Fry until golden brown and crispy, about 2–3 minutes per side.",
        "7. Drain on paper towels and serve hot."
      ],
    }
  ];
