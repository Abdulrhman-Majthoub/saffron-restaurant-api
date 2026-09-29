import { Injectable, OnModuleInit } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./entities/product.entity.js";

@Injectable()
export class ProductsService implements OnModuleInit {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}

  async onModuleInit() {
    const productsCount = await this.productsRepository.count();
if (productsCount > 0) {
  const additionalProducts = [
    {
      name: "Margherita Classica",
      category: "Pizza",
      description: "San Marzano tomato, mozzarella fior di latte, basil, and olive oil.",
      price: 10.5,
      imageUrl:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=85",
      isAvailable: true,
    },
    {
      name: "Truffle Mushroom Pizza",
      category: "Pizza",
      description: "Wild mushrooms, truffle cream, mozzarella, parmesan, and thyme.",
      price: 13.5,
      imageUrl:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1000&q=85",
      isAvailable: true,
    },
    {
      name: "Spicy Saffron Pizza",
      category: "Pizza",
      description: "Saffron chicken, roasted peppers, chili oil, mozzarella, and herbs.",
      price: 14.5,
      imageUrl:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=1000&q=85",
      isAvailable: true,
    },
    {
      name: "Saffron Old Fashioned",
      category: "The Bar",
      description: "Bourbon, saffron syrup, orange bitters, and a smoked citrus finish.",
      price: 9.5,
      imageUrl:
        "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=85",
      isAvailable: true,
    },
    {
      name: "Pomegranate Spritz",
      category: "The Bar",
      description: "Pomegranate, citrus, sparkling wine, and a rosemary perfume.",
      price: 8.5,
      imageUrl:
        "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1000&q=85",
      isAvailable: true,
    },
    {
      name: "Midnight Fig Sour",
      category: "The Bar",
      description: "Fig-infused gin, lemon, velvet foam, and aromatic bitters.",
      price: 9,
      imageUrl:
        "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=1000&q=85",
      isAvailable: true,
    },
  ];

  const existingProducts = await this.productsRepository.find({
    select: {
      name: true,
    },
  });

  const existingNames = new Set(
    existingProducts.map((product) => product.name),
  );

  const missingProducts = additionalProducts.filter(
    (product) => !existingNames.has(product.name),
  );

  if (missingProducts.length > 0) {
    await this.productsRepository.save(missingProducts);
  }

  return;
}

    await this.productsRepository.save([
      {
        name: "Burrata & Heirloom Tomatoes",
        category: "Starters",
        description: "Creamy burrata, seasonal tomatoes, basil oil, and aged balsamic.",
        price: 8.5,
        imageUrl:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=85",
      },
      {
        name: "Truffle Arancini",
        category: "Starters",
        description: "Crisp saffron risotto, black truffle, parmesan, and herb aioli.",
        price: 7.5,
        imageUrl:
          "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd6?auto=format&fit=crop&w=1000&q=85",
      },
      {
        name: "Whipped Feta",
        category: "Starters",
        description: "Whipped feta, roasted grapes, pistachio, and warm sourdough.",
        price: 6.5,
        imageUrl:
          "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=1000&q=85",
      },
      {
        name: "Charred Sea Bass",
        category: "Main Courses",
        description: "Mediterranean sea bass, lemon beurre blanc, greens, and capers.",
        price: 18.5,
        imageUrl:
          "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1000&q=85",
      },
      {
        name: "Saffron Chicken",
        category: "Main Courses",
        description: "Charcoal chicken, saffron rice, grilled vegetables, and jus.",
        price: 15.5,
        imageUrl:
          "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1000&q=85",
      },
      {
        name: "Slow-Cooked Lamb Shoulder",
        category: "Main Courses",
        description: "Tender lamb shoulder, smoked eggplant, pomegranate, and herbs.",
        price: 19.5,
        imageUrl:
          "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85",
      },
      {
        name: "Truffle Risotto",
        category: "Pasta & Risotto",
        description: "Carnaroli rice, parmesan, wild mushrooms, and black truffle.",
        price: 14.5,
        imageUrl:
          "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=85",
      },
      {
        name: "Wild Mushroom Tagliatelle",
        category: "Pasta & Risotto",
        description: "Fresh tagliatelle, forest mushrooms, thyme, and pecorino.",
        price: 13.5,
        imageUrl:
          "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1000&q=85",
      },
      {
        name: "Prawn Linguine",
        category: "Pasta & Risotto",
        description: "Linguine, king prawns, chili, garlic, tomato, and parsley.",
        price: 16.5,
        imageUrl:
          "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=1000&q=85",
      },
      {
        name: "Pistachio Tiramisu",
        category: "Desserts",
        description: "Espresso-soaked sponge, mascarpone, and roasted pistachio.",
        price: 7,
        imageUrl:
          "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1000&q=85",
      },
      {
        name: "Burnt Basque Cheesecake",
        category: "Desserts",
        description: "Caramelized cheesecake with berry compote and vanilla cream.",
        price: 7.5,
        imageUrl:
          "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1000&q=85",
      },
      {
        name: "Dark Chocolate Fondant",
        category: "Desserts",
        description: "Warm dark chocolate cake, salted caramel, and vanilla gelato.",
        price: 8,
        imageUrl:
          "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=85",
      },
    ]);
  }

  findAll() {
    return this.productsRepository.find({
      where: { isAvailable: true },
      order: {
        category: "ASC",
        id: "ASC",
      },
    });
  }
}