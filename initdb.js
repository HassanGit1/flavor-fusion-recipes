const sql = require('better-sqlite3');
const db = sql('meals.db');

const dummyMeals = [
    {
      title: 'Avocado',
      slug: 'avocado',
      image: '/images/avocado.jpg',
      summary: 'This dish features a fresh avocado, perfect for salads or spreads.',
      instructions: `
        1. Slice the avocado in half and remove the pit.
        2. Scoop out the flesh and slice it.
        3. Serve fresh on toast or in a salad.
      `,
      creator: 'John Doe',
      creator_email: 'johndoe@example.com',
    },
    {
      title: 'Biryani',
      slug: 'biryani',
      image: '/images/biryani.jpg',
      summary: 'A flavorful biryani, rich with spices and tender meat.',
      instructions: `
        1. Prepare your rice and meat with spices.
        2. Layer them in a pot and cook slowly.
        3. Serve with raita or salad.
      `,
      creator: 'Max Schwarz',
      creator_email: 'max@example.com',
    },
    {
      title: 'Coffee',
      slug: 'coffee',
      image: '/images/coffee.jpg',
      summary: 'Rich and aromatic coffee, perfect for any time of the day.',
      instructions: `
        1. Brew coffee using your preferred method.
        2. Serve hot with milk or sugar as desired.
      `,
      creator: 'Emily Chen',
      creator_email: 'emilychen@example.com',
    },
    {
      title: 'Butter Chicken',
      slug: 'butter-chicken',
      image: '/images/butterchicken.jpg',
      summary: 'Creamy butter chicken with aromatic spices, a true delight.',
      instructions: `
        1. Marinate chicken in spices and yogurt.
        2. Cook with butter and cream until tender.
        3. Serve with naan or rice.
      `,
      creator: 'Laura Smith',
      creator_email: 'laurasmith@example.com',
    },
    {
      title: 'Pizza',
      slug: 'pizza',
      image: '/images/pizza.jpg',
      summary: 'Authentic pizza topped with fresh ingredients and cheese.',
      instructions: `
        1. Prepare the dough and let it rise.
        2. Add sauce, cheese, and toppings.
        3. Bake until golden and serve hot.
      `,
      creator: 'Mario Rossi',
      creator_email: 'mariorossi@example.com',
    },
    {
      title: 'Salad',
      slug: 'salad',
      image: '/images/salad.jpg',
      summary: 'A fresh salad with a mix of greens and vibrant colors.',
      instructions: `
        1. Chop fresh vegetables.
        2. Toss with dressing and serve chilled.
      `,
      creator: 'Franz Huber',
      creator_email: 'franzhuber@example.com',
    },
    {
      title: 'Ice Cream',
      slug: 'ice-cream',
      image: '/images/icecream.jpg',
      summary: 'Creamy ice cream, the perfect dessert for any occasion.',
      instructions: `
        1. Serve scoops of ice cream in bowls.
        2. Add toppings like chocolate sauce or sprinkles.
      `,
      creator: 'Sophia Green',
      creator_email: 'sophiagreen@example.com',
    },
  ];
  

db.prepare(`
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();