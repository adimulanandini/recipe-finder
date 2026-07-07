const RECIPES_DATA = [
  // BREAKFAST
  {
    id: 1,
    name: "Fluffy Blueberry Pancakes",
    category: "Breakfast",
    prepTime: "10 mins",
    cookTime: "15 mins",
    difficulty: "Easy",
    servings: 4,
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=600&auto=format&fit=crop",
    ingredients: [
      "1 1/2 cups all-purpose flour",
      "3 1/2 teaspoons baking powder",
      "1 teaspoon salt",
      "1 tablespoon white sugar",
      "1 1/4 cups milk",
      "1 egg",
      "3 tablespoons butter, melted",
      "1 cup fresh blueberries",
      "Maple syrup, for serving"
    ],
    instructions: [
      "In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.",
      "Heat a lightly oiled griddle or frying pan over medium-high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.",
      "Drop a few blueberries onto the top of each cooking pancake.",
      "Brown on both sides and serve hot with butter and maple syrup."
    ]
  },
  {
    id: 2,
    name: "Avocado Toast with Poached Eggs",
    category: "Breakfast",
    prepTime: "5 mins",
    cookTime: "10 mins",
    difficulty: "Easy",
    servings: 2,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=600&auto=format&fit=crop",
    ingredients: [
      "2 slices of sourdough bread",
      "1 ripe avocado",
      "2 fresh eggs",
      "1 teaspoon lemon juice",
      "1/2 teaspoon red pepper flakes",
      "Salt and freshly ground black pepper",
      "1 tablespoon white vinegar (for poaching)"
    ],
    instructions: [
      "Bring a pot of water to a gentle simmer and add the vinegar. Crack eggs individually into small cups and slide them gently into the simmering water. Poach for 3-4 minutes until whites are set but yolks are runny.",
      "While eggs poach, toast the bread slices to your desired level of crispiness.",
      "Mash the avocado in a small bowl with lemon juice, salt, and black pepper.",
      "Spread the mashed avocado evenly over the toasted bread.",
      "Gently place a poached egg on top of each slice. Season with additional black pepper, salt, and red pepper flakes."
    ]
  },
  {
    id: 3,
    name: "Belgian Waffles with Berries",
    category: "Breakfast",
    prepTime: "15 mins",
    cookTime: "15 mins",
    difficulty: "Medium",
    servings: 4,
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=600&auto=format&fit=crop",
    ingredients: [
      "2 cups all-purpose flour",
      "1 teaspoon salt",
      "4 teaspoons baking powder",
      "2 tablespoons white sugar",
      "2 eggs, yolks and whites separated",
      "1 1/2 cups warm milk",
      "1/3 cup butter, melted",
      "1 teaspoon vanilla extract",
      "Fresh strawberries and raspberries",
      "Whipped cream and powdered sugar"
    ],
    instructions: [
      "In a large bowl, mix together flour, salt, baking powder, and sugar.",
      "In a separate medium bowl, beat egg yolks, warm milk, melted butter, and vanilla extract. Whisk egg whites in another clean dry bowl until stiff peaks form.",
      "Blend the milk mixture into the dry flour mixture. Gently fold in the stiff egg whites using a spatula.",
      "Preheat your waffle iron. Spray with non-stick cooking spray, ladle batter on, and cook until golden brown.",
      "Serve warm topped with fresh berries, whipped cream, and a dusting of powdered sugar."
    ]
  },
  {
    id: 4,
    name: "Spinach & Feta Omelette",
    category: "Breakfast",
    prepTime: "5 mins",
    cookTime: "10 mins",
    difficulty: "Easy",
    servings: 1,
    image: "https://images.unsplash.com/photo-151062780277d-3d98c9dda79b?q=80&w=600&auto=format&fit=crop",
    ingredients: [
      "2 large eggs",
      "1 cup fresh spinach leaves",
      "2 tablespoons crumbled feta cheese",
      "1 tablespoon olive oil",
      "Salt and freshly ground black pepper to taste",
      "A pinch of garlic powder"
    ],
    instructions: [
      "Heat olive oil in a non-stick skillet over medium heat. Add fresh spinach and cook until wilted (about 1-2 minutes). Remove spinach and set aside.",
      "Whisk the eggs in a bowl with salt, pepper, and garlic powder until frothy.",
      "Pour egg mixture into the skillet. As eggs set around the edge of the pan, use a spatula to push cooked portions toward the center.",
      "When the top is almost set, place the cooked spinach and crumbled feta cheese on one half of the omelette.",
      "Fold the omelette in half, cook for 1 more minute until cheese is warm, and slide onto a plate."
    ]
  },

  // LUNCH
  {
    id: 5,
    name: "Caesar Salad with Grilled Chicken",
    category: "Lunch",
    prepTime: "15 mins",
    cookTime: "10 mins",
    difficulty: "Easy",
    servings: 2,
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=600&auto=format&fit=crop",
    ingredients: [
      "1 skinless, boneless chicken breast",
      "1 head of Romaine lettuce, chopped",
      "1/2 cup croutons",
      "1/4 cup grated Parmesan cheese",
      "3 tablespoons Caesar dressing",
      "1 tablespoon olive oil",
      "Salt, pepper, and garlic powder for seasoning"
    ],
    instructions: [
      "Season chicken breast on both sides with salt, pepper, and garlic powder.",
      "Heat olive oil in a grill pan or skillet over medium-high heat. Grill the chicken for 5-6 minutes per side, or until cooked through. Let it rest for 3 minutes, then slice.",
      "In a large salad bowl, toss the chopped romaine lettuce with Caesar dressing and half of the Parmesan cheese.",
      "Top the tossed greens with the sliced grilled chicken, croutons, and the remaining Parmesan cheese.",
      "Garnish with a crack of fresh black pepper and serve immediately."
    ]
  },
  {
    id: 6,
    name: "Caprese Grilled Cheese",
    category: "Lunch",
    prepTime: "5 mins",
    cookTime: "8 mins",
    difficulty: "Easy",
    servings: 1,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=600&auto=format&fit=crop",
    ingredients: [
      "2 slices of thick crusty bread",
      "4 slices of fresh mozzarella cheese",
      "3-4 slices of ripe tomato",
      "4-5 fresh basil leaves",
      "1 tablespoon basil pesto",
      "1 tablespoon butter, softened at room temperature"
    ],
    instructions: [
      "Spread the basil pesto on one side of a bread slice.",
      "Layer two slices of mozzarella cheese, followed by the tomato slices, basil leaves, and the remaining mozzarella cheese over the pesto. Top with the second bread slice.",
      "Butter the outer sides of the sandwich evenly.",
      "Place sandwich in a skillet over medium heat. Toast for 3-4 minutes per side until the bread is golden brown and crispy, and the cheese is fully melted."
    ]
  },
  {
    id: 7,
    name: "Mediterranean Quinoa Bowl",
    category: "Lunch",
    prepTime: "10 mins",
    cookTime: "15 mins",
    difficulty: "Easy",
    servings: 2,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop",
    ingredients: [
      "1 cup dry quinoa (cooked in 2 cups water)",
      "1 cup cherry tomatoes, halved",
      "1 cucumber, diced",
      "1/2 cup Kalamata olives, pitted",
      "1/2 cup crumbled feta cheese",
      "1/2 cup canned chickpeas, rinsed and drained",
      "2 tablespoons extra virgin olive oil",
      "1 tablespoon fresh lemon juice",
      "Dried oregano, salt, and pepper to taste"
    ],
    instructions: [
      "Rinse quinoa and cook in water according to package instructions. Let cool slightly.",
      "In a small jar, whisk olive oil, lemon juice, dried oregano, salt, and pepper to make the dressing.",
      "Divide the cooked quinoa into two serving bowls.",
      "Arrange the cherry tomatoes, diced cucumber, Kalamata olives, chickpeas, and crumbled feta cheese on top of the quinoa.",
      "Drizzle the dressing over the bowls and toss lightly before eating."
    ]
  },
  {
    id: 8,
    name: "Creamy Tomato Basil Soup",
    category: "Lunch",
    prepTime: "10 mins",
    cookTime: "20 mins",
    difficulty: "Easy",
    servings: 4,
    image: "https://images.unsplash.com/photo-1547592165-e1d17fed6005?q=80&w=600&auto=format&fit=crop",
    ingredients: [
      "2 tablespoons olive oil",
      "1 yellow onion, chopped",
      "3 cloves garlic, minced",
      "1 can (28 ounces) crushed tomatoes",
      "2 cups vegetable broth",
      "1/2 cup heavy cream (or coconut milk)",
      "1/2 cup fresh basil leaves, packed",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Heat olive oil in a medium pot over medium heat. Add chopped onion and sauté for 4-5 minutes until translucent. Add garlic and cook for 1 minute more.",
      "Pour in the crushed tomatoes and vegetable broth. Bring to a simmer and cook for 15 minutes.",
      "Remove pot from heat. Stir in the fresh basil leaves.",
      "Using an immersion blender, blend the soup until smooth. Stir in the heavy cream and season with salt and pepper.",
      "Simmer for another 2 minutes and serve warm with crusty bread."
    ]
  },

  // DINNER
  {
    id: 9,
    name: "Creamy Tuscan Garlic Chicken",
    category: "Dinner",
    prepTime: "10 mins",
    cookTime: "20 mins",
    difficulty: "Medium",
    servings: 4,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=600&auto=format&fit=crop",
    ingredients: [
      "1 1/2 lbs boneless skinless chicken breasts (thin sliced)",
      "2 tablespoons olive oil",
      "1 cup heavy cream",
      "1/2 cup chicken broth",
      "1 teaspoon garlic powder",
      "1 cup parmesan cheese, grated",
      "1 cup spinach, fresh",
      "1/2 cup sun-dried tomatoes"
    ],
    instructions: [
      "In a large skillet, add olive oil and cook the chicken over medium-high heat for 3-5 minutes on each side, or until brown and cooked through. Remove chicken and set aside.",
      "In the same skillet, add the heavy cream, chicken broth, garlic powder, and parmesan cheese. Whisk over medium-high heat until the sauce starts to thicken.",
      "Add the spinach and sun-dried tomatoes to the skillet and let simmer until the spinach starts to wilt.",
      "Add the chicken back into the skillet, spoon the cream sauce over the chicken, and simmer for another 2-3 minutes. Serve hot."
    ]
  },
  {
    id: 10,
    name: "Garlic Butter Herb Salmon",
    category: "Dinner",
    prepTime: "10 mins",
    cookTime: "12 mins",
    difficulty: "Medium",
    servings: 2,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=600&auto=format&fit=crop",
    ingredients: [
      "2 salmon fillets (6 ounces each)",
      "2 tablespoons butter, melted",
      "2 cloves garlic, minced",
      "1 tablespoon fresh dill, chopped",
      "1 tablespoon fresh parsley, chopped",
      "1/2 lemon, sliced into rounds",
      "Salt and freshly cracked black pepper"
    ],
    instructions: [
      "Preheat oven to 400°F (200°C). Line a baking sheet with foil and grease lightly.",
      "In a small bowl, mix together the melted butter, minced garlic, parsley, dill, and a pinch of salt.",
      "Pat salmon fillets dry with paper towels and place them on the baking sheet. Season with salt and pepper.",
      "Brush the garlic butter mixture generously over the salmon fillets. Top each fillet with a lemon slice.",
      "Bake for 12-15 minutes until the salmon is flaky and cooked through."
    ]
  },
  {
    id: 11,
    name: "Classic Beef Lasagna",
    category: "Dinner",
    prepTime: "25 mins",
    cookTime: "50 mins",
    difficulty: "Hard",
    servings: 6,
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=600&auto=format&fit=crop",
    ingredients: [
      "12 lasagna noodles (oven-ready or boiled)",
      "1 lb ground beef",
      "1 small onion, diced",
      "2 cloves garlic, minced",
      "1 jar (24 ounces) marinara sauce",
      "15 ounces ricotta cheese",
      "1 egg",
      "3 cups shredded mozzarella cheese",
      "1/2 cup grated parmesan cheese",
      "Salt, pepper, and Italian seasoning"
    ],
    instructions: [
      "In a large skillet over medium heat, cook ground beef with onion and garlic until browned. Drain excess fat. Stir in the marinara sauce and simmer for 5 minutes. Season with salt, pepper, and Italian seasoning.",
      "In a bowl, combine ricotta cheese, egg, 1/2 cup of mozzarella, and 1/4 cup of parmesan cheese.",
      "Spread a thin layer of meat sauce in the bottom of a 9x13 inch baking dish.",
      "Layer with 3-4 lasagna noodles, 1/3 of the ricotta mixture, and 1/3 of the remaining mozzarella. Repeat layers, ending with meat sauce and a final layer of mozzarella and parmesan.",
      "Cover with foil and bake at 375°F (190°C) for 25 minutes. Remove foil and bake for an additional 20-25 minutes until bubbling and golden."
    ]
  },
  {
    id: 12,
    name: "Sweet Potato & Chickpea Curry",
    category: "Dinner",
    prepTime: "15 mins",
    cookTime: "25 mins",
    difficulty: "Easy",
    servings: 4,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600&auto=format&fit=crop",
    ingredients: [
      "1 tablespoon coconut oil",
      "1 medium onion, chopped",
      "2 cloves garlic, minced",
      "1 tablespoon ginger, grated",
      "2 tablespoons yellow curry powder",
      "1 large sweet potato, peeled and cubed",
      "1 can (15 ounces) chickpeas, rinsed",
      "1 can (14 ounces) light coconut milk",
      "1 can (14 ounces) diced tomatoes",
      "2 cups fresh spinach",
      "Salt and lime juice to taste"
    ],
    instructions: [
      "Heat coconut oil in a large pot over medium heat. Sauté onion, garlic, and ginger until fragrant (about 3 minutes).",
      "Stir in curry powder and cook for 1 minute to toast spices.",
      "Add cubed sweet potatoes, rinsed chickpeas, coconut milk, and diced tomatoes. Bring to a boil, then reduce heat to low, cover, and simmer for 20 minutes (until sweet potatoes are tender).",
      "Stir in the fresh spinach and let it wilt in the hot curry for 2 minutes.",
      "Season with salt and a squeeze of fresh lime juice. Serve with basmati rice."
    ]
  },

  // SNACKS
  {
    id: 13,
    name: "Crispy Garlic Parmesan Wings",
    category: "Snacks",
    prepTime: "10 mins",
    cookTime: "40 mins",
    difficulty: "Medium",
    servings: 3,
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=600&auto=format&fit=crop",
    ingredients: [
      "2 lbs chicken wings, split",
      "1 tablespoon baking powder (for crispiness)",
      "1 teaspoon salt",
      "1/2 cup grated Parmesan cheese",
      "4 tablespoons butter, melted",
      "3 cloves garlic, finely minced",
      "1/2 teaspoon black pepper",
      "1 tablespoon fresh parsley, finely chopped"
    ],
    instructions: [
      "Pat wings completely dry with paper towels. Toss them in a bowl with baking powder and salt until evenly coated.",
      "Arrange wings on a wire rack set inside a baking sheet. Bake at 425°F (220°C) for 35-40 minutes, flipping halfway, until crispy and golden.",
      "While wings bake, whisk melted butter, minced garlic, grated Parmesan cheese, black pepper, and chopped parsley in a large bowl.",
      "Toss the hot baked wings in the garlic-Parmesan mixture until fully coated. Serve immediately."
    ]
  },
  {
    id: 14,
    name: "Homemade Guacamole & Chips",
    category: "Snacks",
    prepTime: "10 mins",
    cookTime: "0 mins",
    difficulty: "Easy",
    servings: 4,
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=600&auto=format&fit=crop",
    ingredients: [
      "3 ripe avocados",
      "1 ripe Roma tomato, seeded and diced",
      "1/2 red onion, finely minced",
      "1/2 cup fresh cilantro, chopped",
      "1 jalapeno pepper, seeded and minced",
      "2 tablespoons fresh lime juice",
      "1/2 teaspoon salt",
      "Tortilla chips for serving"
    ],
    instructions: [
      "Slice avocados in half, remove pits, and scoop the flesh into a medium mixing bowl.",
      "Use a fork to mash the avocado to your desired consistency (chunky or smooth).",
      "Fold in the diced tomato, minced onion, chopped cilantro, minced jalapeno, and lime juice.",
      "Season with salt to taste. Serve chilled with a side of crispy tortilla chips."
    ]
  },
  {
    id: 15,
    name: "Caprese Salad Skewers",
    category: "Snacks",
    prepTime: "10 mins",
    cookTime: "0 mins",
    difficulty: "Easy",
    servings: 4,
    image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?q=80&w=600&auto=format&fit=crop",
    ingredients: [
      "1 pint cherry tomatoes",
      "8 ounces fresh mozzarella pearls",
      "1 bunch fresh basil leaves",
      "2 tablespoons balsamic glaze",
      "1 tablespoon extra virgin olive oil",
      "Toothpicks or wooden skewers",
      "Coarse sea salt and cracked black pepper"
    ],
    instructions: [
      "Thread a cherry tomato, a folded basil leaf, and a mozzarella ball onto each toothpick.",
      "Arrange the completed skewers on a clean serving platter.",
      "Drizzle extra virgin olive oil and balsamic glaze over the skewers.",
      "Sprinkle with coarse sea salt and freshly cracked black pepper right before serving."
    ]
  },
  {
    id: 16,
    name: "Roasted Garlic Hummus",
    category: "Snacks",
    prepTime: "10 mins",
    cookTime: "10 mins",
    difficulty: "Easy",
    servings: 6,
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=600&auto=format&fit=crop",
    ingredients: [
      "1 can (15 ounces) chickpeas, drained (reserve 2 tbsp liquid)",
      "1/3 cup tahini",
      "1 head of garlic (roasted)",
      "3 tablespoons fresh lemon juice",
      "2 tablespoons extra virgin olive oil",
      "1/2 teaspoon ground cumin",
      "Salt to taste",
      "Paprika and pine nuts for garnish"
    ],
    instructions: [
      "To roast garlic: cut top off garlic head, drizzle with olive oil, wrap in foil, and bake at 400°F for 30 minutes until soft. Squeeze out cloves.",
      "In a food processor, combine tahini and lemon juice. Process for 1 minute until creamy.",
      "Add chickpea liquid, olive oil, roasted garlic cloves, cumin, and salt. Process until smooth.",
      "Add the drained chickpeas half at a time, blending until extremely smooth and creamy. Add a splash of water if too thick.",
      "Transfer to a bowl, drizzle with olive oil, sprinkle with paprika and pine nuts, and serve with pita bread."
    ]
  },

  // DESSERTS
  {
    id: 17,
    name: "Chocolate Lava Cakes",
    category: "Desserts",
    prepTime: "15 mins",
    cookTime: "13 mins",
    difficulty: "Hard",
    servings: 2,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop",
    ingredients: [
      "4 ounces high-quality semi-sweet chocolate, chopped",
      "1/4 cup unsalted butter",
      "1 whole egg + 1 egg yolk",
      "2 tablespoons white sugar",
      "1 pinch of salt",
      "2 tablespoons all-purpose flour",
      "Powdered sugar and vanilla ice cream for serving"
    ],
    instructions: [
      "Preheat oven to 425°F (218°C). Butter two small ramekins and dust the insides with cocoa powder.",
      "Microwave the chopped chocolate and butter in a bowl in 20-second increments, stirring until completely melted and smooth.",
      "In a medium bowl, whisk egg, yolk, sugar, and salt together until pale and thick.",
      "Fold the chocolate mixture and flour gently into the eggs using a spatula. Do not overmix.",
      "Divide batter between the ramekins. Bake for 12-14 minutes until edges are firm but center is soft. Cool for 1 minute, invert onto plates, dust with powdered sugar, and serve with ice cream."
    ]
  },
  {
    id: 18,
    name: "Classic New York Cheesecake",
    category: "Desserts",
    prepTime: "30 mins",
    cookTime: "60 mins",
    difficulty: "Hard",
    servings: 8,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=600&auto=format&fit=crop",
    ingredients: [
      "1 1/2 cups graham cracker crumbs",
      "1/4 cup unsalted butter, melted",
      "24 ounces cream cheese, softened at room temp",
      "1 cup granulated sugar",
      "1 cup sour cream",
      "1 teaspoon vanilla extract",
      "3 large eggs",
      "Fresh strawberry sauce for serving"
    ],
    instructions: [
      "Combine graham cracker crumbs and melted butter. Press firmly into the bottom of a 9-inch springform pan. Bake at 325°F (163°C) for 10 minutes, then cool.",
      "Beat cream cheese and sugar in a large bowl until smooth and fluffy. Blend in sour cream and vanilla extract.",
      "Add eggs one at a time, mixing on low speed just until combined.",
      "Pour batter over the cooled crust. Wrap the outside of the pan in foil and place in a larger roasting pan filled with 1 inch of hot water.",
      "Bake at 325°F for 60-70 minutes until center is slightly jiggly. Turn off oven, crack the door open, and let cool inside for 1 hour. Chill in refrigerator for 4+ hours."
    ]
  },
  {
    id: 19,
    name: "Warm Apple Crisp",
    category: "Desserts",
    prepTime: "15 mins",
    cookTime: "35 mins",
    difficulty: "Easy",
    servings: 6,
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=600&auto=format&fit=crop",
    ingredients: [
      "6 cups apples (peeled, cored, and sliced)",
      "2 tablespoons granulated sugar",
      "1 1/2 teaspoons ground cinnamon, divided",
      "1 cup rolled oats",
      "1/2 cup all-purpose flour",
      "1/2 cup brown sugar, packed",
      "1/2 cup cold butter, cut into small cubes"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C). Grease an 8x8 inch baking dish.",
      "Toss sliced apples with granulated sugar and 1/2 teaspoon of cinnamon in a large bowl. Spread evenly in the baking dish.",
      "In another bowl, combine oats, flour, brown sugar, and remaining 1 teaspoon of cinnamon.",
      "Add cubed cold butter to the dry oat mixture. Use your fingers to press and rub the butter in until the mixture resembles coarse crumbs.",
      "Scatter the crumb topping evenly over the apples. Bake for 30-35 minutes until the topping is golden brown and the apples are bubbling. Serve warm."
    ]
  },
  {
    id: 20,
    name: "Fudgy Chocolate Brownies",
    category: "Desserts",
    prepTime: "10 mins",
    cookTime: "22 mins",
    difficulty: "Easy",
    servings: 9,
    image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?q=80&w=600&auto=format&fit=crop",
    ingredients: [
      "1/2 cup unsalted butter, melted",
      "1 cup granulated sugar",
      "2 large eggs",
      "1 teaspoon vanilla extract",
      "1/3 cup unsweetened cocoa powder",
      "1/2 cup all-purpose flour",
      "1/4 teaspoon salt",
      "1/4 teaspoon baking powder",
      "1/2 cup chocolate chips"
    ],
    instructions: [
      "Preheat oven to 350°F (175°C). Grease and line an 8x8 inch square baking pan with parchment paper.",
      "In a medium bowl, whisk melted butter, sugar, eggs, and vanilla extract until well combined.",
      "Sift in cocoa powder, flour, salt, and baking powder. Fold gently with a spatula just until dry ingredients disappear.",
      "Fold in the chocolate chips.",
      "Spread the batter evenly into the prepared pan. Bake for 20-22 minutes. The center should be set but slightly soft. Let cool completely before slicing."
    ]
  },
  {
    id: 21,
    name: "Chicken Idli",
    category: "Breakfast",
    prepTime: "20 mins",
    cookTime: "25 mins",
    difficulty: "Medium",
    servings: 4,
    image: "https://media.foodiaq.com/wp-content/uploads/2025/10/Chicken-gassi-and-idli.jpg",
    ingredients: [
      "12 idlis (prepared)",
      "250g boneless chicken, finely chopped",
      "1 medium onion, finely chopped",
      "2 green chilies, chopped",
      "1 teaspoon ginger-garlic paste",
      "1 teaspoon red chili powder",
      "1/2 teaspoon turmeric powder",
      "1 teaspoon garam masala",
      "1 tablespoon oil",
      "Curry leaves",
      "2 tablespoons coriander leaves, chopped",
      "Salt to taste"
    ],
    instructions: [
      "Steam the idlis and cut them into bite-sized pieces. Set aside.",
      "Heat oil in a pan and add curry leaves, chopped onions, and green chilies. Sauté until onions turn golden brown.",
      "Add ginger-garlic paste and cook for 1 minute until the raw smell disappears.",
      "Add chopped chicken, turmeric powder, red chili powder, garam masala, and salt. Cook until the chicken is fully cooked and tender.",
      "Add the idli pieces to the cooked chicken mixture and gently toss until well combined.",
      "Cook for 2-3 minutes so the flavors blend together.",
      "Garnish with chopped coriander leaves and serve hot."
    ]
  },
  {
    id: 22,
    name: "Veg Hakka Noodles",
    category: "Snacks",
    prepTime: "15 mins",
    cookTime: "15 mins",
    difficulty: "Easy",
    servings: 4,
    image: "https://images.unsplash.com/photo-1617622141675-d3005b9067c5?q=80&w=600&auto=format&fit=crop",
    ingredients: [
      "200g Hakka noodles",
      "2 tablespoons oil",
      "4 cloves garlic, minced",
      "1 teaspoon ginger, finely chopped",
      "1 small onion, sliced",
      "1/2 cup cabbage, shredded",
      "1/2 cup carrot, julienned",
      "1/2 cup capsicum, thinly sliced",
      "2 spring onions, chopped",
      "1 tablespoon soy sauce",
      "1 teaspoon chili sauce",
      "1 teaspoon vinegar",
      "1/2 teaspoon black pepper",
      "Salt to taste"
    ],
    instructions: [
      "Boil the Hakka noodles according to the package instructions. Drain and rinse with cold water. Toss with a little oil to prevent sticking.",
      "Heat oil in a wok over high heat. Add garlic and ginger, and sauté for about 30 seconds until fragrant.",
      "Add onions, carrots, cabbage, and capsicum. Stir-fry for 2–3 minutes while keeping the vegetables slightly crunchy.",
      "Add the cooked noodles to the wok, followed by soy sauce, chili sauce, vinegar, salt, and black pepper.",
      "Toss everything together over high heat until the noodles are evenly coated with the sauces.",
      "Garnish with chopped spring onions and serve hot."
    ]
  }
];
