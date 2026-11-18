export type AudienceTag = 'iniciante' | 'tradicional' | 'kids' | 'bebidas';

export interface DishVariation {
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  basePrice: number;
  imageUrl: string;
  variations: DishVariation[];
  cupOptions: string[];
  checkoutUrl: string;
  category: string;
  categorySlug: string;
  audience: AudienceTag[];
}

export interface MenuCategory {
  name: string;
  slug: string;
  items: MenuItem[];
}

export const STORE_INFO = {
  brand: 'Nypo Sushi',
  city: 'Palmitos, SC',
  address: 'Av. Brasil, 859 — Centro, Palmitos / SC',
  openingHours: 'Terça a Domingo, das 18:30 às 23:00 (Segunda-feira: Fechado)',
  whatsappNumber: '554936477073',
  whatsappDisplay: '+55 (49) 3647-7073',
  deliwayUrl: 'https://www.deliway.com.br/nypo-sushi-delivery-palmitos-sc',
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    "name": "ENTRADAS",
    "slug": "entradas",
    "items": [
      {
        "id": "entradas-1",
        "name": "Sunomono",
        "description": "200gr pepino japonês.",
        "price": "R$ 18,00",
        "basePrice": 18.0,
        "imageUrl": "/src/assets/images/menu/entradas-1.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/JGZz2L0NZD",
        "category": "ENTRADAS",
        "categorySlug": "entradas",
        "audience": [
          "iniciante",
          "tradicional"
        ]
      },
      {
        "id": "entradas-2",
        "name": "Sunomono da Casa",
        "description": "100gr de pepino, 50gr de salmão, 25gr de camarão, 25gr de kani, molho da casa e gergelim moído.",
        "price": "R$ 25,00",
        "basePrice": 25.0,
        "imageUrl": "/src/assets/images/menu/entradas-2.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/7vExWxvO4J",
        "category": "ENTRADAS",
        "categorySlug": "entradas",
        "audience": [
          "iniciante",
          "tradicional"
        ]
      },
      {
        "id": "entradas-3",
        "name": "Nacho de Salmão",
        "description": "6 unidades casquinha crocante com patê de salmão,cream cheese,geleia de pimenta,tare e laminas doritos trituradas",
        "price": "R$ 32,00",
        "basePrice": 32.0,
        "imageUrl": "/src/assets/images/menu/entradas-3.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/rKEjjm9MED",
        "category": "ENTRADAS",
        "categorySlug": "entradas",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "entradas-4",
        "name": "Ceviche Salmão",
        "description": "100gr de salmão, 30gr de cebola roxa, coentro, pimenta dedo de moça, molho da casa e uma pitada de sal.",
        "price": "R$ 35,00",
        "basePrice": 35.0,
        "imageUrl": "/src/assets/images/menu/entradas-4.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/61Qkk0KBQ2",
        "category": "ENTRADAS",
        "categorySlug": "entradas",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "entradas-5",
        "name": "Ceviche Especial da Casa",
        "description": "100gr de salmão, 30gr de camarão, 20gr de tilápia, 20gr de kani, 30gr de cebola roxa, coentro, pimenta dedo de moça e uma pitada de sal ajinomoto.",
        "price": "R$ 40,00",
        "basePrice": 40.0,
        "imageUrl": "/src/assets/images/menu/entradas-5.jpg",
        "variations": [
          {
            "name": "Ceviche Especial da Casa - Molho Fuji",
            "price": 40.0
          },
          {
            "name": "Ceviche Especial da Casa - Molho Tigre",
            "price": 40.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/XlQBWaez4q",
        "category": "ENTRADAS",
        "categorySlug": "entradas",
        "audience": [
          "iniciante",
          "tradicional"
        ]
      },
      {
        "id": "entradas-6",
        "name": "Ceviche de Peixe Branco",
        "description": "100gr de tilápia, 30gr de cebola roxa, coentro, pimenta dedo de moça e uma pitada de sal.",
        "price": "R$ 35,00",
        "basePrice": 35.0,
        "imageUrl": "/src/assets/images/menu/entradas-6.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/xAZdoX2qEK",
        "category": "ENTRADAS",
        "categorySlug": "entradas",
        "audience": [
          "iniciante",
          "tradicional"
        ]
      },
      {
        "id": "entradas-7",
        "name": "Carpáccio de Salmão",
        "description": "Salmão",
        "price": "R$ 49,00",
        "basePrice": 49.0,
        "imageUrl": "/src/assets/images/menu/entradas-7.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/w04PmavPEk",
        "category": "ENTRADAS",
        "categorySlug": "entradas",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "entradas-8",
        "name": "Harumaki de Camarão",
        "description": "Dupla de rolinho de crocantes, com recheio de camarão.",
        "price": "R$ 27,00",
        "basePrice": 27.0,
        "imageUrl": "/src/assets/images/menu/entradas-8.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/ov4JV8go4z",
        "category": "ENTRADAS",
        "categorySlug": "entradas",
        "audience": [
          "iniciante",
          "tradicional"
        ]
      },
      {
        "id": "entradas-9",
        "name": "Harumaki de Legumes",
        "description": "O harumaki de legumes é um rolinho crocante de massa fina frita ou assada, recheado com uma mistura leve e temperada de vegetais fatiados, como repolho e cenoura com 2 unidades",
        "price": "R$ 20,00",
        "basePrice": 20.0,
        "imageUrl": "/src/assets/images/menu/entradas-9.png",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/O7Q3WveoQe",
        "category": "ENTRADAS",
        "categorySlug": "entradas",
        "audience": [
          "iniciante",
          "tradicional"
        ]
      },
      {
        "id": "entradas-10",
        "name": "POKE TRADICIONAL",
        "description": "arroz, alho poró, couve frita, camarão, kani, sonomono, salmão.",
        "price": "R$ 60,00",
        "basePrice": 60.0,
        "imageUrl": "/src/assets/images/menu/entradas-10.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/a0QamXPDQ3",
        "category": "ENTRADAS",
        "categorySlug": "entradas",
        "audience": [
          "iniciante",
          "tradicional"
        ]
      },
      {
        "id": "entradas-11",
        "name": "POKE FILADELPHIA",
        "description": "ARROZ, CAMARÃO, ALHO PORÓ,CREAM CHEESE, KANI, SALMÃO, COM GERGELIM.",
        "price": "R$ 62,00",
        "basePrice": 62.0,
        "imageUrl": "/src/assets/images/menu/entradas-11.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/a34omXP2ZM",
        "category": "ENTRADAS",
        "categorySlug": "entradas",
        "audience": [
          "iniciante",
          "tradicional"
        ]
      }
    ]
  },
  {
    "name": "URAMAKI",
    "slug": "uramaki",
    "items": [
      {
        "id": "uramaki-1",
        "name": "Uramaki Filadélfia",
        "description": "Sushi enrolado ao contrário com alga, arroz, gergelim, recheio de salmão e cream cheese.",
        "price": "R$ 20,00 - R$ 32,00",
        "basePrice": 20.0,
        "imageUrl": "/src/assets/images/menu/uramaki-1.jpg",
        "variations": [
          {
            "name": "Uramaki Filadélfia - 05 unid.",
            "price": 20.0
          },
          {
            "name": "Uramaki Filadélfia - 10 unid.",
            "price": 32.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/Aw46NPxK49",
        "category": "URAMAKI",
        "categorySlug": "uramaki",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "uramaki-2",
        "name": "Uramaki Tomate Seco e Rúcula",
        "description": "Sushi enrolado ao contrário com alga, arroz, gergelim, recheio de tomate seco, rúcula e cream cheese. 08 unid.",
        "price": "R$ 28,00",
        "basePrice": 28.0,
        "imageUrl": "/src/assets/images/menu/uramaki-2.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/YGEbV7RKEd",
        "category": "URAMAKI",
        "categorySlug": "uramaki",
        "audience": [
          "iniciante",
          "tradicional"
        ]
      },
      {
        "id": "uramaki-3",
        "name": "Uramaki Kani",
        "description": "Sushi enrolado ao contrário com alga, arroz, gergelim, kani e cream cheese. 08 unid.",
        "price": "R$ 25,00",
        "basePrice": 25.0,
        "imageUrl": "/src/assets/images/menu/uramaki-3.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/OW4AYPoj4R",
        "category": "URAMAKI",
        "categorySlug": "uramaki",
        "audience": [
          "iniciante",
          "tradicional"
        ]
      },
      {
        "id": "uramaki-4",
        "name": "Uramaki Skin",
        "description": "Sushi enrolado ao contrário com alga, arroz, gergelim, recheio de pele de salmão frita e cream cheese.",
        "price": "R$ 16,00 - R$ 26,00",
        "basePrice": 16.0,
        "imageUrl": "/src/assets/images/menu/uramaki-4.jpg",
        "variations": [
          {
            "name": "Uramaki Skin - 5 unid.",
            "price": 16.0
          },
          {
            "name": "Uramaki Skin - 10 unid.",
            "price": 26.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/a34oYDyDZM",
        "category": "URAMAKI",
        "categorySlug": "uramaki",
        "audience": [
          "iniciante",
          "tradicional"
        ]
      },
      {
        "id": "uramaki-5",
        "name": "Uramaki Camarão",
        "description": "Sushi enrolado ao contrário com alga, arroz, gergelim, recheio de camarão cozido ou frito e cream cheese.",
        "price": "R$ 18,00 - R$ 32,00",
        "basePrice": 18.0,
        "imageUrl": "/src/assets/images/menu/uramaki-5.jpg",
        "variations": [
          {
            "name": "Uramaki Camarão - 05 unid.",
            "price": 18.0
          },
          {
            "name": "Uramaki Camarão - 10 unid.",
            "price": 32.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/7vExWxpa4J",
        "category": "URAMAKI",
        "categorySlug": "uramaki",
        "audience": [
          "iniciante",
          "tradicional"
        ]
      },
      {
        "id": "uramaki-6",
        "name": "Uramaki Atum",
        "description": "Uramaki de atum envolto com lâminas de atum, mel crispe de gengibre e amêndoas.",
        "price": "R$ 22,00 - R$ 40,00",
        "basePrice": 22.0,
        "imageUrl": "/src/assets/images/menu/uramaki-6.jpg",
        "variations": [
          {
            "name": "Uramaki Atum - 05 unid.",
            "price": 22.0
          },
          {
            "name": "Uramaki Atum - 10 unid.",
            "price": 40.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/VAENrW2XER",
        "category": "URAMAKI",
        "categorySlug": "uramaki",
        "audience": [
          "tradicional"
        ]
      }
    ]
  },
  {
    "name": "URAMAKI ESPECIAL",
    "slug": "uramaki-especial",
    "items": [
      {
        "id": "uramaki-especial-1",
        "name": "Uramaki Especial - Nypo",
        "description": "Uramaki com lâminas de salmão sobrepostas.",
        "price": "R$ 22,00 - R$ 40,00",
        "basePrice": 22.0,
        "imageUrl": "/src/assets/images/menu/uramaki-especial-1.jpg",
        "variations": [
          {
            "name": "Uramaki Especial - Nypo - 05 unid.",
            "price": 22.0
          },
          {
            "name": "Uramaki Especial - Nypo - 10 unid.",
            "price": 40.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/xvQp0g5kQg",
        "category": "URAMAKI ESPECIAL",
        "categorySlug": "uramaki-especial",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "uramaki-especial-2",
        "name": "Uramaki Especial - Tropical",
        "description": "Uramaki filadélfia, laminado com salmão massaricado com geléia de abacaxi com pimenta, com raspa de limão siciliano.",
        "price": "R$ 22,00 - R$ 40,00",
        "basePrice": 22.0,
        "imageUrl": "/src/assets/images/menu/uramaki-especial-2.jpg",
        "variations": [
          {
            "name": "Uramaki Especial - Tropical - 05 unid.",
            "price": 22.0
          },
          {
            "name": "Uramaki Especial - Tropical - 10 unid.",
            "price": 40.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/elE5NPONZ2",
        "category": "URAMAKI ESPECIAL",
        "categorySlug": "uramaki-especial",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "uramaki-especial-3",
        "name": "Uramaki Especial - Amendoas",
        "description": "Uramaki filadélfia, laminado com salmão, geléia de pimenta e amêndoas.",
        "price": "R$ 22,00 - R$ 40,00",
        "basePrice": 22.0,
        "imageUrl": "/src/assets/images/menu/uramaki-especial-3.jpg",
        "variations": [
          {
            "name": "Uramaki Especial - Amendoas - 05 unid.",
            "price": 22.0
          },
          {
            "name": "Uramaki Especial - Amendoas - 10 unid.",
            "price": 40.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/LwE8NPRyQ3",
        "category": "URAMAKI ESPECIAL",
        "categorySlug": "uramaki-especial",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "uramaki-especial-4",
        "name": "Uramaki Especial - Avocado (Abacate)",
        "description": "Camarão empanado, alface, com lâminas de avocado com molho de mostarda e mel e ovas masago.",
        "price": "R$ 26,00 - R$ 42,00",
        "basePrice": 26.0,
        "imageUrl": "/src/assets/images/menu/uramaki-especial-4.jpg",
        "variations": [
          {
            "name": "Uramaki Especial - Avocado (Abacate) - 05 unid.",
            "price": 26.0
          },
          {
            "name": "Uramaki Especial - Avocado (Abacate) - 10 unid.",
            "price": 42.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/vVZlJGkB42",
        "category": "URAMAKI ESPECIAL",
        "categorySlug": "uramaki-especial",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "uramaki-especial-5",
        "name": "Uramaki Especial - Coalho",
        "description": "Uramaki filadélfia com lâminas de queijo coalho massaricado e melado de cana.",
        "price": "R$ 22,00 - R$ 38,00",
        "basePrice": 22.0,
        "imageUrl": "/src/assets/images/menu/uramaki-especial-5.jpg",
        "variations": [
          {
            "name": "Uramaki Especial - Coalho - 05 unid.",
            "price": 22.0
          },
          {
            "name": "Uramaki Especial - Coalho - 10 unid.",
            "price": 38.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/MPZwy1Dr4o",
        "category": "URAMAKI ESPECIAL",
        "categorySlug": "uramaki-especial",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "uramaki-especial-6",
        "name": "URAMAKI EBI",
        "description": "uramaki involto de couve cozido no vapor com camarão ao molho, finalizado com crysp de alho poró-",
        "price": "R$ 26,00 - R$ 44,00",
        "basePrice": 26.0,
        "imageUrl": "/src/assets/images/menu/uramaki-especial-6.jpg",
        "variations": [
          {
            "name": "URAMAKI EBI 5uni",
            "price": 26.0
          },
          {
            "name": "URAMAKI EBI 10uni",
            "price": 44.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/qGQVg9gB48",
        "category": "URAMAKI ESPECIAL",
        "categorySlug": "uramaki-especial",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "uramaki-especial-7",
        "name": "URAMAKI CRYSP COUVE",
        "description": "",
        "price": "R$ 22,00 - R$ 37,00",
        "basePrice": 22.0,
        "imageUrl": "/src/assets/images/menu/uramaki-especial-7.jpg",
        "variations": [
          {
            "name": "URAMAKI CRYSP COUVE 5 un",
            "price": 22.0
          },
          {
            "name": "URAMAKI CRYSP COUVE 10 un",
            "price": 37.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/0V4g5Yd8Zj",
        "category": "URAMAKI ESPECIAL",
        "categorySlug": "uramaki-especial",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "uramaki-especial-8",
        "name": "URAMAKI CRYSP ALHO PORO",
        "description": "",
        "price": "R$ 26,00 - R$ 43,00",
        "basePrice": 26.0,
        "imageUrl": "/src/assets/images/menu/uramaki-especial-8.jpg",
        "variations": [
          {
            "name": "URAMAKI CRYSP ALHO PORO 5 UN",
            "price": 26.0
          },
          {
            "name": "URAMAKI CRYSP ALHO PORO 10 UN",
            "price": 43.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/qGQVg9Je48",
        "category": "URAMAKI ESPECIAL",
        "categorySlug": "uramaki-especial",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "uramaki-especial-9",
        "name": "URAMAKI DORITOS",
        "description": "",
        "price": "R$ 20,00 - R$ 36,00",
        "basePrice": 20.0,
        "imageUrl": "/src/assets/images/menu/uramaki-especial-9.jpg",
        "variations": [
          {
            "name": "URAMAKI DORITOS 5 UN",
            "price": 20.0
          },
          {
            "name": "URAMAKI DORITOS 10 UN",
            "price": 36.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/Aw46k0eaE9",
        "category": "URAMAKI ESPECIAL",
        "categorySlug": "uramaki-especial",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "uramaki-especial-10",
        "name": "URAMAKI FRESH",
        "description": "",
        "price": "R$ 26,00 - R$ 42,00",
        "basePrice": 26.0,
        "imageUrl": "/src/assets/images/menu/uramaki-especial-10.jpg",
        "variations": [
          {
            "name": "URAMAKI FRESH 5 UN",
            "price": 26.0
          },
          {
            "name": "URAMAKI FRESH 10 UN",
            "price": 42.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/YGEbkrD2Zd",
        "category": "URAMAKI ESPECIAL",
        "categorySlug": "uramaki-especial",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "uramaki-especial-11",
        "name": "DRAGON FRYER",
        "description": "",
        "price": "R$ 24,00 - R$ 40,00",
        "basePrice": 24.0,
        "imageUrl": "/src/assets/images/menu/uramaki-especial-11.jpg",
        "variations": [
          {
            "name": "DRAGON FRYER 5 UN",
            "price": 24.0
          },
          {
            "name": "DRAGON FRYER 10 UN",
            "price": 40.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/OW4A3bJxZR",
        "category": "URAMAKI ESPECIAL",
        "categorySlug": "uramaki-especial",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "uramaki-especial-12",
        "name": "URAMAKI SKIN RED",
        "description": "",
        "price": "R$ 22,00 - R$ 40,00",
        "basePrice": 22.0,
        "imageUrl": "/src/assets/images/menu/uramaki-especial-12.jpg",
        "variations": [
          {
            "name": "URAMAKI SKIN RED 5 UNI",
            "price": 22.0
          },
          {
            "name": "URAMAKI SKIN RED 10 UNI",
            "price": 40.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/WG4mDD2qQz",
        "category": "URAMAKI ESPECIAL",
        "categorySlug": "uramaki-especial",
        "audience": [
          "iniciante",
          "tradicional"
        ]
      },
      {
        "id": "uramaki-especial-13",
        "name": "DRAGON GOLD",
        "description": "uramaki camarão com laminas de salmão, folha de ouro e ovas",
        "price": "R$ 36,00 - R$ 62,00",
        "basePrice": 36.0,
        "imageUrl": "/src/assets/images/menu/uramaki-especial-13.jpg",
        "variations": [
          {
            "name": "DRAGON GOLD 4 UNI",
            "price": 36.0
          },
          {
            "name": "DRAGON GOLD 8 UNI",
            "price": 62.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/yV4DrrmxZB",
        "category": "URAMAKI ESPECIAL",
        "categorySlug": "uramaki-especial",
        "audience": [
          "tradicional"
        ]
      }
    ]
  },
  {
    "name": "HOSSOMAKI",
    "slug": "hossomaki",
    "items": [
      {
        "id": "hossomaki-1",
        "name": "Hossomaki Salmão",
        "description": "Enrolado fino de arroz, com alga por fora e recheio de salmão. 08 unid.",
        "price": "R$ 22,00",
        "basePrice": 22.0,
        "imageUrl": "/src/assets/images/menu/hossomaki-1.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/O7Q3pPXL4e",
        "category": "HOSSOMAKI",
        "categorySlug": "hossomaki",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "hossomaki-2",
        "name": "Hossomaki Kani",
        "description": "Enrolado fino de arroz, com alga por fora e recheio de kani. 08 unid.",
        "price": "R$ 20,00",
        "basePrice": 20.0,
        "imageUrl": "/src/assets/images/menu/hossomaki-2.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/p2Q9eP0bQg",
        "category": "HOSSOMAKI",
        "categorySlug": "hossomaki",
        "audience": [
          "iniciante",
          "tradicional"
        ]
      },
      {
        "id": "hossomaki-3",
        "name": "Hossomaki Camarão",
        "description": "Enrolado fino de arroz, com alga por fora e recheio de camarão empanado. 08 unid.",
        "price": "R$ 22,00",
        "basePrice": 22.0,
        "imageUrl": "/src/assets/images/menu/hossomaki-3.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/j2Z2aPXbEX",
        "category": "HOSSOMAKI",
        "categorySlug": "hossomaki",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "hossomaki-4",
        "name": "Hossomaki Pepino",
        "description": "Enrolado fino de arroz, com alga por fora e recheio de pepino japonês. 08 unid.",
        "price": "R$ 18,00",
        "basePrice": 18.0,
        "imageUrl": "/src/assets/images/menu/hossomaki-4.png",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/934RGWMNEp",
        "category": "HOSSOMAKI",
        "categorySlug": "hossomaki",
        "audience": [
          "iniciante",
          "tradicional"
        ]
      }
    ]
  },
  {
    "name": "NIGUIRI TRADICIONAL",
    "slug": "niguiri-tradicional",
    "items": [
      {
        "id": "niguiri-tradicional-1",
        "name": "Niguiri Salmão",
        "description": "Arroz com lâmina de salmão sobreposta.",
        "price": "R$ 5,00",
        "basePrice": 5.0,
        "imageUrl": "/src/assets/images/menu/niguiri-tradicional-1.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/9MZOgPM9Z7",
        "category": "NIGUIRI TRADICIONAL",
        "categorySlug": "niguiri-tradicional",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "niguiri-tradicional-2",
        "name": "Niguiri Salmão Selado",
        "description": "Arroz com tira de salmão selada sobreposta.",
        "price": "R$ 7,00",
        "basePrice": 7.0,
        "imageUrl": "/src/assets/images/menu/niguiri-tradicional-2.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/Pz4nkNd1E9",
        "category": "NIGUIRI TRADICIONAL",
        "categorySlug": "niguiri-tradicional",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "niguiri-tradicional-3",
        "name": "Niguiri Kani",
        "description": "Arroz com kani sobreposto.",
        "price": "R$ 5,00",
        "basePrice": 5.0,
        "imageUrl": "/src/assets/images/menu/niguiri-tradicional-3.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/WG4mdrBXQz",
        "category": "NIGUIRI TRADICIONAL",
        "categorySlug": "niguiri-tradicional",
        "audience": [
          "iniciante",
          "tradicional"
        ]
      },
      {
        "id": "niguiri-tradicional-4",
        "name": "Niguiri Skin",
        "description": "Arroz com pele de salmão frita sobreposta.",
        "price": "R$ 5,00",
        "basePrice": 5.0,
        "imageUrl": "/src/assets/images/menu/niguiri-tradicional-4.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/vO4KXDBJEa",
        "category": "NIGUIRI TRADICIONAL",
        "categorySlug": "niguiri-tradicional",
        "audience": [
          "iniciante",
          "tradicional"
        ]
      }
    ]
  },
  {
    "name": "NIGUIRI ESPECIAL",
    "slug": "niguiri-especial",
    "items": [
      {
        "id": "niguiri-especial-1",
        "name": "Niguiri Especial - White Lemon",
        "description": "Arroz, peixe branco, lâmina de limão, geléia de pimenta e raspas de limão siciliano.",
        "price": "R$ 7,00",
        "basePrice": 7.0,
        "imageUrl": "/src/assets/images/menu/niguiri-especial-1.png",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/GX4GGPMw4D",
        "category": "NIGUIRI ESPECIAL",
        "categorySlug": "niguiri-especial",
        "audience": [
          "tradicional"
        ]
      }
    ]
  },
  {
    "name": "JOY",
    "slug": "joy",
    "items": [
      {
        "id": "joy-1",
        "name": "Joy Salmão",
        "description": "Arroz envolto com lâmina de salmão, patê, cebolinha e gergelim. Porção 04 unid.",
        "price": "R$ 28,00",
        "basePrice": 28.0,
        "imageUrl": "/src/assets/images/menu/joy-1.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/qV4voWrGEJ",
        "category": "JOY",
        "categorySlug": "joy",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "joy-2",
        "name": "Joy Camarão",
        "description": "Camarão empanado com lâmina de salmão, cream cheese, cebolinha e molho tarê. Porção 04 unid.",
        "price": "R$ 38,00",
        "basePrice": 38.0,
        "imageUrl": "/src/assets/images/menu/joy-2.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/Pn4eyRox46",
        "category": "JOY",
        "categorySlug": "joy",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "joy-3",
        "name": "Joy Brie",
        "description": "Camarão empanado, lâmina de salmão, cream gorgonzola, massaricado com queijo brie, geléia de pimenta e molho pesto Porção 04 unid.",
        "price": "R$ 35,00",
        "basePrice": 35.0,
        "imageUrl": "/src/assets/images/menu/joy-3.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/JGZz2jvJZD",
        "category": "JOY",
        "categorySlug": "joy",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "joy-4",
        "name": "Joy Fresh",
        "description": "Arroz, camarão cozido e raspas de limão siciliano. Porção 04 unid.",
        "price": "R$ 30,00",
        "basePrice": 30.0,
        "imageUrl": "/src/assets/images/menu/joy-4.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/qGQVGjyK48",
        "category": "JOY",
        "categorySlug": "joy",
        "audience": [
          "iniciante",
          "tradicional"
        ]
      },
      {
        "id": "joy-5",
        "name": "Joy Ebi",
        "description": "Arroz, lâmina de salmão, cream cheese, camarão ao molho especial com crispy de alho poró. Porção 04 unid.",
        "price": "R$ 30,00",
        "basePrice": 30.0,
        "imageUrl": "/src/assets/images/menu/joy-5.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/Aw46NPRK49",
        "category": "JOY",
        "categorySlug": "joy",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "joy-6",
        "name": "Joy Furai",
        "description": "Lâminas de peixe branco defumado, camarão empanado, molho de mostarda e mel, crispy de alho poró. Porção 04 unid.",
        "price": "R$ 30,00",
        "basePrice": 30.0,
        "imageUrl": "/src/assets/images/menu/joy-6.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/YGEbV7lKEd",
        "category": "JOY",
        "categorySlug": "joy",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "joy-7",
        "name": "Joy Explosão",
        "description": "Arroz envolto com lâmina de salmão com creme de gorgonzola massaricado com tarê. Porção 04 unid.",
        "price": "R$ 30,00",
        "basePrice": 30.0,
        "imageUrl": "/src/assets/images/menu/joy-7.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/5V403x5aQM",
        "category": "JOY",
        "categorySlug": "joy",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "joy-8",
        "name": "JOY SALMAO BRIE",
        "description": "",
        "price": "R$ 30,00",
        "basePrice": 30.0,
        "imageUrl": "/src/assets/images/menu/joy-8.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/qV4vJkmA4J",
        "category": "JOY",
        "categorySlug": "joy",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "joy-9",
        "name": "JOY SENSAÇAO",
        "description": "",
        "price": "R$ 28,00",
        "basePrice": 28.0,
        "imageUrl": "/src/assets/images/menu/joy-9.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/JGZzA5RNED",
        "category": "JOY",
        "categorySlug": "joy",
        "audience": [
          "tradicional"
        ]
      }
    ]
  },
  {
    "name": "SASHIMI TRADICIONAL",
    "slug": "sashimi-tradicional",
    "items": [
      {
        "id": "sashimi-tradicional-1",
        "name": "Sashimi Salmão",
        "description": "Salmão fatiado em pedaços pequenos. Porção 04 unid.",
        "price": "R$ 22,00",
        "basePrice": 22.0,
        "imageUrl": "/src/assets/images/menu/sashimi-tradicional-1.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/w04Pmo6aEk",
        "category": "SASHIMI TRADICIONAL",
        "categorySlug": "sashimi-tradicional",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "sashimi-tradicional-2",
        "name": "Sashimi Peixe Branco",
        "description": "Peixe Branco fatiado em pedaços pequenos Porção 04 unid.",
        "price": "R$ 22,00",
        "basePrice": 22.0,
        "imageUrl": "/src/assets/images/menu/sashimi-tradicional-2.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/gVZqVv8PQ0",
        "category": "SASHIMI TRADICIONAL",
        "categorySlug": "sashimi-tradicional",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "sashimi-tradicional-3",
        "name": "Haddok",
        "description": "Sashimi Chouva Negra Defumada Porção 04 unid.",
        "price": "R$ 25,00",
        "basePrice": 25.0,
        "imageUrl": "/src/assets/images/menu/sashimi-tradicional-3.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/L2EYBdx1Zz",
        "category": "SASHIMI TRADICIONAL",
        "categorySlug": "sashimi-tradicional",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "sashimi-tradicional-4",
        "name": "Sashimi Polvo",
        "description": "Polvo fatiado em pedaços pequenos. Porção 04 unid.",
        "price": "R$ 25,00",
        "basePrice": 25.0,
        "imageUrl": "/src/assets/images/menu/sashimi-tradicional-4.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/a34oYDpDZM",
        "category": "SASHIMI TRADICIONAL",
        "categorySlug": "sashimi-tradicional",
        "audience": [
          "tradicional"
        ]
      }
    ]
  },
  {
    "name": "SASHIMI ESPECIAL",
    "slug": "sashimi-especial",
    "items": [
      {
        "id": "sashimi-especial-1",
        "name": "Sashimi Ussuzukuri Massago",
        "description": "Lâminas bem finas de salmão, crispy de batata doce, ovas massago, molho de ostra.",
        "price": "R$ 32,00 - R$ 60,00",
        "basePrice": 32.0,
        "imageUrl": "/src/assets/images/menu/sashimi-especial-1.jpg",
        "variations": [
          {
            "name": "Sashimi Ussuzukuri Massago - 10 unid.",
            "price": 32.0
          },
          {
            "name": "Sashimi Ussuzukuri Massago - 20 unid.",
            "price": 60.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/y9ZWmkY14e",
        "category": "SASHIMI ESPECIAL",
        "categorySlug": "sashimi-especial",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "sashimi-especial-2",
        "name": "Sashimi Shaquerará",
        "description": "Sashimi de torô de salmão com crispy de batata doce e raspas de limão siciliano, finalizado com molho Nypo.",
        "price": "R$ 32,00 - R$ 60,00",
        "basePrice": 32.0,
        "imageUrl": "/src/assets/images/menu/sashimi-especial-2.jpg",
        "variations": [
          {
            "name": "Sashimi Shaquerará - 10 unid.",
            "price": 32.0
          },
          {
            "name": "Sashimi Shaquerará - 20 unid.",
            "price": 60.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/7vExWxXa4J",
        "category": "SASHIMI ESPECIAL",
        "categorySlug": "sashimi-especial",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "sashimi-especial-3",
        "name": "Sashimi Torô",
        "description": "Sashimi de torô de salmão, salsa trufada, azeite trufado, ovas, cebolinha, finalizado com molho Nypo.",
        "price": "R$ 42,00 - R$ 75,00",
        "basePrice": 42.0,
        "imageUrl": "/src/assets/images/menu/sashimi-especial-3.jpg",
        "variations": [
          {
            "name": "Sashimi Torô - 10 unid.",
            "price": 42.0
          },
          {
            "name": "Sashimi Torô - 20 unid.",
            "price": 75.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/ov4JwPMjEz",
        "category": "SASHIMI ESPECIAL",
        "categorySlug": "sashimi-especial",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "sashimi-especial-4",
        "name": "SASHIMI CREME MASSAGO",
        "description": "",
        "price": "R$ 38,00",
        "basePrice": 38.0,
        "imageUrl": "/src/assets/images/menu/sashimi-especial-4.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/a0QagGbvE3",
        "category": "SASHIMI ESPECIAL",
        "categorySlug": "sashimi-especial",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "sashimi-especial-5",
        "name": "SASHIMI ICE",
        "description": "",
        "price": "R$ 35,00",
        "basePrice": 35.0,
        "imageUrl": "/src/assets/images/menu/sashimi-especial-5.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/a34o9o5mZM",
        "category": "SASHIMI ESPECIAL",
        "categorySlug": "sashimi-especial",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "sashimi-especial-6",
        "name": "Sashimi Ussuzukuri de polvo",
        "description": "10 laminas finas de polvo, molho a base de limão e azeite trufado e finalizado com cebolinha.",
        "price": "R$ 60,00",
        "basePrice": 60.0,
        "imageUrl": "/src/assets/images/menu/sashimi-especial-6.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/Aw46XoqAZ9",
        "category": "SASHIMI ESPECIAL",
        "categorySlug": "sashimi-especial",
        "audience": [
          "tradicional"
        ]
      }
    ]
  },
  {
    "name": "TARTAR",
    "slug": "tartar",
    "items": [
      {
        "id": "tartar-1",
        "name": "Tartar de Salmão",
        "description": "Salmão em cubos, pasta de guacamole, crispy de batata doce e finalizado com molho Nypo.",
        "price": "R$ 42,00",
        "basePrice": 42.0,
        "imageUrl": "/src/assets/images/menu/tartar-1.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/rKEjjmJ6ED",
        "category": "TARTAR",
        "categorySlug": "tartar",
        "audience": [
          "tradicional"
        ]
      }
    ]
  },
  {
    "name": "COMBINADOS",
    "slug": "combinados",
    "items": [
      {
        "id": "combinados-1",
        "name": "Combinado - 15 Peças",
        "description": "05 Uramaki Filadélfia. 04 Niguiri Salmão. 02 Joy Salmão. 04 Hossomaki Salmão.",
        "price": "R$ 65,00",
        "basePrice": 65.0,
        "imageUrl": "/src/assets/images/menu/combinados-1.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/eqE1RPpKZk",
        "category": "COMBINADOS",
        "categorySlug": "combinados",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "combinados-2",
        "name": "Combinado - 17 Peças",
        "description": "- 05 Uramaki Filadélfia. - 04 Niguiri Salmão. - 04 Hossomaki Salmão. - 02 Joy Salmão. - 02 Joy Camarão.",
        "price": "R$ 85,00",
        "basePrice": 85.0,
        "imageUrl": "/src/assets/images/menu/combinados-2.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/7vExWxlj4J",
        "category": "COMBINADOS",
        "categorySlug": "combinados",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "combinados-3",
        "name": "Combinado - 25 Peças",
        "description": "- 04 Sashimi Salmão. - 05 Uramaki Filadélfia. - 05 Uramaki Skin. - 02 Joy Salmão. - 02 Joy Camarão. - 02 Niguiri Salmão. - 05 Hot Filadélfia.",
        "price": "R$ 125,00",
        "basePrice": 125.0,
        "imageUrl": "/src/assets/images/menu/combinados-3.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/ov4JwPnBEz",
        "category": "COMBINADOS",
        "categorySlug": "combinados",
        "audience": [
          "iniciante",
          "tradicional"
        ]
      },
      {
        "id": "combinados-4",
        "name": "Combinado - 43 Peças",
        "description": "- 08 Sashimi Salmão. - 10 Uramaki Nypo. - 05 Uramaki Filadélfia. - 05 Uramaki Skin. - 04 Joy Salmão. - 02 Joy Camarão. - 04 Hossomaki Salmão. - 05 Hot Filadélfia.",
        "price": "R$ 175,00",
        "basePrice": 175.0,
        "imageUrl": "/src/assets/images/menu/combinados-4.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/rKEjjm0DED",
        "category": "COMBINADOS",
        "categorySlug": "combinados",
        "audience": [
          "iniciante",
          "tradicional"
        ]
      }
    ]
  },
  {
    "name": "COMBINADOS ESPECIAIS",
    "slug": "combinados-especiais",
    "items": [
      {
        "id": "combinados-especiais-1",
        "name": "Combinado Nypo 04 Pessoas - 101 peças",
        "description": "-16 Sashimi Mix. -05 Uramaki Ebi. -05 Uramaki Fresh. -05 Uramaki Brie. -05 Uramaki cryps couve -05 Uramaki Amêndoas. -05 Uramaki Cebola Roxa. -05 Uramaki Alho Poró. -05 Uramaki Coalho. -10 Hot Crepe Roll. -10 Hot Filadélfia. -04 Joy Salmão. -04 Joy Camarão. -04 Joy Ebi. -04 Joy Furai. -04 Joy Brie. -10 Ussuzukuri Crispy.",
        "price": "R$ 390,00",
        "basePrice": 390.0,
        "imageUrl": "/src/assets/images/menu/combinados-especiais-1.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/xAZdoX0BEK",
        "category": "COMBINADOS ESPECIAIS",
        "categorySlug": "combinados-especiais",
        "audience": [
          "iniciante",
          "tradicional"
        ]
      }
    ]
  },
  {
    "name": "HOT ROLL",
    "slug": "hot-roll",
    "items": [
      {
        "id": "hot-roll-1",
        "name": "Hot Filadélfia",
        "description": "Enrolado de arroz, empanado na farinha panko e frito, com recheio de salmão e cream cheese, molho tarê, gergelim e cebolinha.",
        "price": "R$ 18,00 - R$ 30,00",
        "basePrice": 18.0,
        "imageUrl": "/src/assets/images/menu/hot-roll-1.jpg",
        "variations": [
          {
            "name": "Hot Filadélfia - 05 unid.",
            "price": 18.0
          },
          {
            "name": "Hot Filadélfia - 10 unid.",
            "price": 30.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/xvQpBJbREg",
        "category": "HOT ROLL",
        "categorySlug": "hot-roll",
        "audience": [
          "iniciante"
        ]
      },
      {
        "id": "hot-roll-2",
        "name": "Hot Camarão",
        "description": "Enrolado de arroz, empanado na farinha panko e frito, com recheio de camarão e cream cheese, molho tarê, gergelim e cebolinha.",
        "price": "R$ 22,00 - R$ 40,00",
        "basePrice": 22.0,
        "imageUrl": "/src/assets/images/menu/hot-roll-2.jpg",
        "variations": [
          {
            "name": "Hot Camarão - 05 unid.",
            "price": 22.0
          },
          {
            "name": "Hot Camarão - 10 unid.",
            "price": 40.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/XlQBWaqx4q",
        "category": "HOT ROLL",
        "categorySlug": "hot-roll",
        "audience": [
          "iniciante"
        ]
      },
      {
        "id": "hot-roll-3",
        "name": "Super Hot ( Sem Arroz )",
        "description": "Laminas de salmão, cream cheese, camarão empanado, pepino e manga, finalizado com molho de mostarda e mel e cebolinha.",
        "price": "R$ 22,00 - R$ 42,00",
        "basePrice": 22.0,
        "imageUrl": "/src/assets/images/menu/hot-roll-3.jpg",
        "variations": [
          {
            "name": "Super Hot ( Sem Arroz ) - 05 unid.",
            "price": 22.0
          },
          {
            "name": "Super Hot ( Sem Arroz ) - 10 unid.",
            "price": 42.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/xvQp0gJVQg",
        "category": "HOT ROLL",
        "categorySlug": "hot-roll",
        "audience": [
          "iniciante"
        ]
      },
      {
        "id": "hot-roll-4",
        "name": "Crepe Holl ( Sem Arroz )",
        "description": "Salmão, camarão empanado, cream cheese, massa crocante, finalizado com geléia de pimenta e cebolinha.",
        "price": "R$ 30,00 - R$ 45,00",
        "basePrice": 30.0,
        "imageUrl": "/src/assets/images/menu/hot-roll-4.jpg",
        "variations": [
          {
            "name": "Crepe Holl ( Sem Arroz ) - 05 unid.",
            "price": 30.0
          },
          {
            "name": "Crepe Holl ( Sem Arroz ) - 10 unid.",
            "price": 45.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/elE5NPw1Z2",
        "category": "HOT ROLL",
        "categorySlug": "hot-roll",
        "audience": [
          "iniciante"
        ]
      },
      {
        "id": "hot-roll-5",
        "name": "Hot Morango e Nutella",
        "description": "Enrolado de arroz, empanado na farinha panko e frito, com recheio de morango, finalizado com Nutella.",
        "price": "R$ 22,00 - R$ 40,00",
        "basePrice": 22.0,
        "imageUrl": "/src/assets/images/menu/hot-roll-5.jpg",
        "variations": [
          {
            "name": "Hot Morango e Nutella - 05 unid.",
            "price": 22.0
          },
          {
            "name": "Hot Morango e Nutella - 10 unid.",
            "price": 40.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/vVZlJGYY42",
        "category": "HOT ROLL",
        "categorySlug": "hot-roll",
        "audience": [
          "iniciante"
        ]
      },
      {
        "id": "hot-roll-6",
        "name": "Hot Banana e Chocolate Branco",
        "description": "Enrolado de arroz, empanado na farinha panko e frito, com recheio de banana, finalizado com chocolate branco.",
        "price": "R$ 22,00 - R$ 40,00",
        "basePrice": 22.0,
        "imageUrl": "/src/assets/images/menu/hot-roll-6.jpg",
        "variations": [
          {
            "name": "Hot Banana e Chocolate Branco - 05 unid.",
            "price": 22.0
          },
          {
            "name": "Hot Banana e Chocolate Branco - 10 unid.",
            "price": 40.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/vO4KXPn7Ea",
        "category": "HOT ROLL",
        "categorySlug": "hot-roll",
        "audience": [
          "iniciante"
        ]
      },
      {
        "id": "hot-roll-7",
        "name": "HOT JOY",
        "description": "",
        "price": "R$ 22,00 - R$ 40,00",
        "basePrice": 22.0,
        "imageUrl": "/src/assets/images/menu/hot-roll-7.jpg",
        "variations": [
          {
            "name": "HOT JOY 5 UN",
            "price": 22.0
          },
          {
            "name": "HOT JOY 10 UN",
            "price": 40.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/L2EY5XyWEz",
        "category": "HOT ROLL",
        "categorySlug": "hot-roll",
        "audience": [
          "iniciante"
        ]
      },
      {
        "id": "hot-roll-8",
        "name": "HOT TROPICAL",
        "description": "",
        "price": "R$ 30,00 - R$ 54,00",
        "basePrice": 30.0,
        "imageUrl": "/src/assets/images/menu/hot-roll-8.jpg",
        "variations": [
          {
            "name": "HOT TROPICAL 5 UN",
            "price": 30.0
          },
          {
            "name": "HOT TROPICAL 10 UN",
            "price": 54.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/AVQyApRVQG",
        "category": "HOT ROLL",
        "categorySlug": "hot-roll",
        "audience": [
          "iniciante"
        ]
      },
      {
        "id": "hot-roll-9",
        "name": "HOT TROPICAL DORITOS",
        "description": "",
        "price": "R$ 30,00 - R$ 58,00",
        "basePrice": 30.0,
        "imageUrl": "/src/assets/images/menu/hot-roll-9.jpg",
        "variations": [
          {
            "name": "HOT TROPICAL DORITOS 5 un",
            "price": 30.0
          },
          {
            "name": "HOT TROPICAL DORITOS 10 un",
            "price": 58.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/y9ZWg7j5Ze",
        "category": "HOT ROLL",
        "categorySlug": "hot-roll",
        "audience": [
          "iniciante"
        ]
      }
    ]
  },
  {
    "name": "TEMAKI",
    "slug": "temaki",
    "items": [
      {
        "id": "temaki-1",
        "name": "TEMAKI SIMPLES",
        "description": "Cone de arroz com recheio de pate de salmao, finalizado com gergilim",
        "price": "R$ 28,00",
        "basePrice": 28.0,
        "imageUrl": "/src/assets/images/menu/temaki-1.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/qGQVG72P48",
        "category": "TEMAKI",
        "categorySlug": "temaki",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "temaki-2",
        "name": "TEMAKI FILADÉLFIA",
        "description": "Cone de arroz com recheio de pate de salmao e cream cheese, finalizado com cebolinha e gergelim.",
        "price": "R$ 32,00",
        "basePrice": 32.0,
        "imageUrl": "/src/assets/images/menu/temaki-2.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/w04Pm8lrEk",
        "category": "TEMAKI",
        "categorySlug": "temaki",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "temaki-3",
        "name": "TEMAKI NYPO",
        "description": "Cone de arroz com recheio de patê de salmão, cream cheese, cebolinha, doritos, empanado e frito, finalizado com geléia de pimenta, tarê e cebolinha.",
        "price": "R$ 35,00",
        "basePrice": 35.0,
        "imageUrl": "/src/assets/images/menu/temaki-3.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/a0Qa7ryxE3",
        "category": "TEMAKI",
        "categorySlug": "temaki",
        "audience": [
          "tradicional"
        ]
      },
      {
        "id": "temaki-4",
        "name": "TEMAKI HOT FILADÉLFIA",
        "description": "Cone de arroz com recheio de pate de salmão , cream cheese, empanado e frito na farinha panko, finalizado com tarê.",
        "price": "R$ 32,00",
        "basePrice": 32.0,
        "imageUrl": "/src/assets/images/menu/temaki-4.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/AVQyB8n84G",
        "category": "TEMAKI",
        "categorySlug": "temaki",
        "audience": [
          "iniciante",
          "tradicional"
        ]
      }
    ]
  },
  {
    "name": "PRATOS QUENTES",
    "slug": "pratos-quentes",
    "items": [
      {
        "id": "pratos-quentes-1",
        "name": "Bolinho de Salmão",
        "description": "06 unidades.",
        "price": "R$ 28,00",
        "basePrice": 28.0,
        "imageUrl": "/src/assets/images/menu/pratos-quentes-1.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/y14LGPVlQ9",
        "category": "PRATOS QUENTES",
        "categorySlug": "pratos-quentes",
        "audience": [
          "iniciante"
        ]
      },
      {
        "id": "pratos-quentes-2",
        "name": "Bolinho de Bacalhau",
        "description": "4 unidades",
        "price": "R$ 26,00",
        "basePrice": 26.0,
        "imageUrl": "/src/assets/images/menu/pratos-quentes-2.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/5V40eq3gEM",
        "category": "PRATOS QUENTES",
        "categorySlug": "pratos-quentes",
        "audience": [
          "iniciante"
        ]
      },
      {
        "id": "pratos-quentes-3",
        "name": "Porção de Tilápia",
        "description": "400g.",
        "price": "R$ 60,00",
        "basePrice": 60.0,
        "imageUrl": "/src/assets/images/menu/pratos-quentes-3.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/a0ZMJPNkQA",
        "category": "PRATOS QUENTES",
        "categorySlug": "pratos-quentes",
        "audience": [
          "iniciante"
        ]
      },
      {
        "id": "pratos-quentes-4",
        "name": "Porção de Batata Frita",
        "description": "400g.",
        "price": "R$ 24,00",
        "basePrice": 24.0,
        "imageUrl": "/src/assets/images/menu/pratos-quentes-4.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/WG4mdrW0Qz",
        "category": "PRATOS QUENTES",
        "categorySlug": "pratos-quentes",
        "audience": [
          "iniciante"
        ]
      },
      {
        "id": "pratos-quentes-5",
        "name": "Camarão A Milanesa",
        "description": "Camarão empanado na farinha panko com molho de geleia e maionese da casa",
        "price": "R$ 70,00 - R$ 110,00",
        "basePrice": 110.0,
        "imageUrl": "/src/assets/images/menu/pratos-quentes-5.jpg",
        "variations": [
          {
            "name": "Camarão A Milanesa - 400g",
            "price": 110.0
          },
          {
            "name": "1/2 Camarão A Milanesa - 200g",
            "price": 70.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/5V403Pd5QM",
        "category": "PRATOS QUENTES",
        "categorySlug": "pratos-quentes",
        "audience": [
          "iniciante"
        ]
      },
      {
        "id": "pratos-quentes-6",
        "name": "Risoto de Camarão",
        "description": "100g de arroz; 80g de camarão.",
        "price": "R$ 49,00",
        "basePrice": 49.0,
        "imageUrl": "/src/assets/images/menu/pratos-quentes-6.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/mq4r5ek8Qy",
        "category": "PRATOS QUENTES",
        "categorySlug": "pratos-quentes",
        "audience": [
          "iniciante"
        ]
      },
      {
        "id": "pratos-quentes-7",
        "name": "Filé Mignon",
        "description": "200g de filé mignon, 150g de batata e 100 g de arroz.",
        "price": "R$ 45,00",
        "basePrice": 45.0,
        "imageUrl": "/src/assets/images/menu/pratos-quentes-7.jpg",
        "variations": [
          {
            "name": "Filé Mignon Mal Passado",
            "price": 45.0
          },
          {
            "name": "Filé Mignon ao Ponto",
            "price": 45.0
          },
          {
            "name": "Filé Mignon Bem Passado",
            "price": 45.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/yV4Dxq694B",
        "category": "PRATOS QUENTES",
        "categorySlug": "pratos-quentes",
        "audience": [
          "iniciante"
        ]
      },
      {
        "id": "pratos-quentes-8",
        "name": "Salmão Grelhado",
        "description": "180g de salmão grelhado, finalizado com mix de legumes, salteado na manteiga e uma porção de 100g de arroz.",
        "price": "R$ 49,00",
        "basePrice": 49.0,
        "imageUrl": "/src/assets/images/menu/pratos-quentes-8.jpg",
        "variations": [
          {
            "name": "Salmão Grelhado Mal Passado",
            "price": 49.0
          },
          {
            "name": "Salmão Grelhado Ao Ponto",
            "price": 49.0
          },
          {
            "name": "Salmão Grelhado Bem Passado",
            "price": 49.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/0V4gML0LZj",
        "category": "PRATOS QUENTES",
        "categorySlug": "pratos-quentes",
        "audience": [
          "iniciante"
        ]
      },
      {
        "id": "pratos-quentes-9",
        "name": "Yakissoba Tradicional",
        "description": "Frango, carne e legumes. 130g de macarrão, 80g carne frango e legumes",
        "price": "R$ 35,00",
        "basePrice": 35.0,
        "imageUrl": "/src/assets/images/menu/pratos-quentes-9.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/qV4voW5nEJ",
        "category": "PRATOS QUENTES",
        "categorySlug": "pratos-quentes",
        "audience": [
          "iniciante"
        ]
      },
      {
        "id": "pratos-quentes-10",
        "name": "Yakissoba Camarão",
        "description": "Camarão e legumes. 130g de macarrão, 80g camarão e legumes",
        "price": "R$ 41,00",
        "basePrice": 41.0,
        "imageUrl": "/src/assets/images/menu/pratos-quentes-10.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/Pn4eyR0946",
        "category": "PRATOS QUENTES",
        "categorySlug": "pratos-quentes",
        "audience": [
          "iniciante"
        ]
      },
      {
        "id": "pratos-quentes-11",
        "name": "Yakissoba Frutos do Mar",
        "description": "Frango, carne, camarão, polvo, legumes, finaliza com salmão salteado. 130g de macarrão, 80g de frutos do mar",
        "price": "R$ 52,00",
        "basePrice": 52.0,
        "imageUrl": "/src/assets/images/menu/pratos-quentes-11.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/JGZz2j3oZD",
        "category": "PRATOS QUENTES",
        "categorySlug": "pratos-quentes",
        "audience": [
          "iniciante"
        ]
      },
      {
        "id": "pratos-quentes-12",
        "name": "Meia porção de tilápia",
        "description": "200 gramas",
        "price": "R$ 30,00",
        "basePrice": 30.0,
        "imageUrl": "/src/assets/images/menu/pratos-quentes-12.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/gbEXGOgP4X",
        "category": "PRATOS QUENTES",
        "categorySlug": "pratos-quentes",
        "audience": [
          "iniciante"
        ]
      }
    ]
  },
  {
    "name": "PRATOS KIDS",
    "slug": "pratos-kids",
    "items": [
      {
        "id": "pratos-kids-1",
        "name": "Espaguete na Manteiga com Carne",
        "description": "100g filé mignon, com 150g macarrão espaguete salteado na manteiga.",
        "price": "R$ 25,00",
        "basePrice": 25.0,
        "imageUrl": "/src/assets/images/menu/pratos-kids-1.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/qGQVGjnA48",
        "category": "PRATOS KIDS",
        "categorySlug": "pratos-kids",
        "audience": [
          "kids",
          "iniciante"
        ]
      },
      {
        "id": "pratos-kids-2",
        "name": "Mix de Tilápia",
        "description": "200g de tilápia. 200g de batata.",
        "price": "R$ 45,00",
        "basePrice": 45.0,
        "imageUrl": "/src/assets/images/menu/pratos-kids-2.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/YGEbV70rEd",
        "category": "PRATOS KIDS",
        "categorySlug": "pratos-kids",
        "audience": [
          "kids",
          "iniciante"
        ]
      },
      {
        "id": "pratos-kids-3",
        "name": "Batata Frita",
        "description": "200g.",
        "price": "R$ 16,00",
        "basePrice": 16.0,
        "imageUrl": "/src/assets/images/menu/pratos-kids-3.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/OW4AYPxa4R",
        "category": "PRATOS KIDS",
        "categorySlug": "pratos-kids",
        "audience": [
          "kids",
          "iniciante"
        ]
      }
    ]
  },
  {
    "name": "SOFT DRINKS",
    "slug": "soft-drinks",
    "items": [
      {
        "id": "soft-drinks-1",
        "name": "Água Mineral",
        "description": "Garrafa 500ml.",
        "price": "R$ 5,00",
        "basePrice": 5.0,
        "imageUrl": "/src/assets/images/menu/soft-drinks-1.jpg",
        "variations": [
          {
            "name": "Àgua sem Gás",
            "price": 5.0
          },
          {
            "name": "Àgua com Gás",
            "price": 5.0
          }
        ],
        "cupOptions": [
          "Copo(s)",
          "Copo(s) com Gelo",
          "Copo(s) com Limão",
          "Copo(s) com Gelo e Limão"
        ],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/a0ZMJvx6QA",
        "category": "SOFT DRINKS",
        "categorySlug": "soft-drinks",
        "audience": [
          "bebidas"
        ]
      },
      {
        "id": "soft-drinks-2",
        "name": "H2O Limão",
        "description": "Garrafa 500ml.",
        "price": "R$ 7,00",
        "basePrice": 7.0,
        "imageUrl": "/src/assets/images/menu/soft-drinks-2.png",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/mq4r5D62Qy",
        "category": "SOFT DRINKS",
        "categorySlug": "soft-drinks",
        "audience": [
          "bebidas"
        ]
      },
      {
        "id": "soft-drinks-3",
        "name": "keep Cooler",
        "description": "keep cooler 275ml.",
        "price": "R$ 12,00",
        "basePrice": 12.0,
        "imageUrl": "/src/assets/images/menu/soft-drinks-3.jpg",
        "variations": [
          {
            "name": "Keep Cooler Açaí com hibiscus",
            "price": 12.0
          },
          {
            "name": "Keep Cooler Morango",
            "price": 12.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/5V403xL7QM",
        "category": "SOFT DRINKS",
        "categorySlug": "soft-drinks",
        "audience": [
          "bebidas"
        ]
      },
      {
        "id": "soft-drinks-4",
        "name": "Refrigerantes Lata - Sabores",
        "description": "Lata 350ml.",
        "price": "R$ 7,00",
        "basePrice": 7.0,
        "imageUrl": "/src/assets/images/menu/soft-drinks-4.jpg",
        "variations": [
          {
            "name": "Coca Cola - Lata",
            "price": 7.0
          },
          {
            "name": "Coca Cola Zero- Lata",
            "price": 7.0
          },
          {
            "name": "Guaraná - Lata",
            "price": 7.0
          },
          {
            "name": "Schweppes Citrus - Lata",
            "price": 7.0
          },
          {
            "name": "Tônica sem açucar - Lata",
            "price": 7.0
          },
          {
            "name": "Tônica- Lata",
            "price": 7.0
          },
          {
            "name": "Pepsi- Lata",
            "price": 7.0
          },
          {
            "name": "Fanta Uva",
            "price": 7.0
          },
          {
            "name": "Fanta Laranja",
            "price": 7.0
          },
          {
            "name": "Guaraná - Lata Zero",
            "price": 7.0
          },
          {
            "name": "Sprite",
            "price": 7.0
          }
        ],
        "cupOptions": [
          "Copo(s)",
          "Copo(s) com Gelo",
          "Copo(s) com Limão",
          "Copo(s) com Gelo e Limão"
        ],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/5V403xolQM",
        "category": "SOFT DRINKS",
        "categorySlug": "soft-drinks",
        "audience": [
          "bebidas"
        ]
      },
      {
        "id": "soft-drinks-5",
        "name": "Red Bull",
        "description": "Lata 250 ml.",
        "price": "R$ 14,00",
        "basePrice": 14.0,
        "imageUrl": "/src/assets/images/menu/soft-drinks-5.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/GX4GG0LM4D",
        "category": "SOFT DRINKS",
        "categorySlug": "soft-drinks",
        "audience": [
          "bebidas"
        ]
      },
      {
        "id": "soft-drinks-6",
        "name": "51 ICE- Sabores",
        "description": "",
        "price": "R$ 10,00",
        "basePrice": 10.0,
        "imageUrl": "/src/assets/images/menu/soft-drinks-6.jpg",
        "variations": [
          {
            "name": "51 ICE- Kiwi",
            "price": 10.0
          },
          {
            "name": "51 ice balada",
            "price": 10.0
          },
          {
            "name": "51 KIWI",
            "price": 10.0
          },
          {
            "name": "51 MARACUJA",
            "price": 10.0
          },
          {
            "name": "51 LIMÃO",
            "price": 10.0
          }
        ],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/yV4D7KekQB",
        "category": "SOFT DRINKS",
        "categorySlug": "soft-drinks",
        "audience": [
          "bebidas"
        ]
      }
    ]
  },
  {
    "name": "CERVEJAS",
    "slug": "cervejas",
    "items": [
      {
        "id": "cervejas-1",
        "name": "Cerveja Longneck",
        "description": "",
        "price": "R$ 12,00",
        "basePrice": 12.0,
        "imageUrl": "/src/assets/images/menu/cervejas-1.jpg",
        "variations": [
          {
            "name": "Heineken Longneck",
            "price": 12.0
          },
          {
            "name": "Budweiser Longneck",
            "price": 12.0
          },
          {
            "name": "Stella Longneck",
            "price": 12.0
          },
          {
            "name": "Corona Longneck",
            "price": 12.0
          }
        ],
        "cupOptions": [
          "Copo(s)",
          "Copo(s) com Gelo",
          "Copo(s) com Limão",
          "Copo(s) com Gelo e Limão"
        ],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/qV4vozGVEJ",
        "category": "CERVEJAS",
        "categorySlug": "cervejas",
        "audience": [
          "bebidas"
        ]
      },
      {
        "id": "cervejas-2",
        "name": "Cerveja Longneck - sem álcool",
        "description": "Cerveja Longneck 330ml Sem álcool",
        "price": "R$ 12,00",
        "basePrice": 12.0,
        "imageUrl": "/src/assets/images/menu/cervejas-2.png",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/yV4DxMd04B",
        "category": "CERVEJAS",
        "categorySlug": "cervejas",
        "audience": [
          "bebidas"
        ]
      },
      {
        "id": "cervejas-3",
        "name": "Brahma Malzbier",
        "description": "",
        "price": "R$ 12,00",
        "basePrice": 12.0,
        "imageUrl": "/src/assets/images/menu/cervejas-3.png",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/a0ZM5koLZA",
        "category": "CERVEJAS",
        "categorySlug": "cervejas",
        "audience": [
          "bebidas"
        ]
      }
    ]
  },
  {
    "name": "DESTILADOS",
    "slug": "destilados",
    "items": [
      {
        "id": "destilados-1",
        "name": "Champagne Aurora Moscatel",
        "description": "Garrafa 1L.",
        "price": "R$ 60,00",
        "basePrice": 60.0,
        "imageUrl": "/src/assets/images/menu/destilados-1.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/XlQBWO764q",
        "category": "DESTILADOS",
        "categorySlug": "destilados",
        "audience": [
          "bebidas"
        ]
      },
      {
        "id": "destilados-2",
        "name": "Vinho Concha y Toro Cabernert Sauvignon",
        "description": "750ml",
        "price": "R$ 54,00",
        "basePrice": 54.0,
        "imageUrl": "/src/assets/images/menu/destilados-2.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/WG4mjGD8Ez",
        "category": "DESTILADOS",
        "categorySlug": "destilados",
        "audience": [
          "bebidas"
        ]
      },
      {
        "id": "destilados-3",
        "name": "WHISKY ROYAL SALUTE",
        "description": "Garrafa 700ml",
        "price": "R$ 1.400,00",
        "basePrice": 1400.0,
        "imageUrl": "/src/assets/images/menu/destilados-3.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/y9ZWmxKr4e",
        "category": "DESTILADOS",
        "categorySlug": "destilados",
        "audience": [
          "bebidas"
        ]
      },
      {
        "id": "destilados-4",
        "name": "AURORA-PROSECCO",
        "description": "",
        "price": "R$ 65,00",
        "basePrice": 65.0,
        "imageUrl": "/src/assets/images/menu/destilados-4.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/xvQpBwjoEg",
        "category": "DESTILADOS",
        "categorySlug": "destilados",
        "audience": [
          "bebidas"
        ]
      },
      {
        "id": "destilados-5",
        "name": "AURORA MOSCATEL- ROSÉ",
        "description": "",
        "price": "R$ 65,00",
        "basePrice": 65.0,
        "imageUrl": "/src/assets/images/menu/destilados-5.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/vVZl0pWjZ2",
        "category": "DESTILADOS",
        "categorySlug": "destilados",
        "audience": [
          "bebidas"
        ]
      },
      {
        "id": "destilados-6",
        "name": "ANGELICA ZAPATA",
        "description": "Malbec alta 2017 MENDOZA ARGENTINA",
        "price": "R$ 298,00",
        "basePrice": 298.0,
        "imageUrl": "/src/assets/images/menu/destilados-6.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/Pn4epPDbQ6",
        "category": "DESTILADOS",
        "categorySlug": "destilados",
        "audience": [
          "bebidas"
        ]
      },
      {
        "id": "destilados-7",
        "name": "vinho D.V. Catena",
        "description": "Cabernet-Malbec Mendoza argentina 2020",
        "price": "R$ 200,00",
        "basePrice": 200.0,
        "imageUrl": "/src/assets/images/menu/destilados-7.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/61QkrJqgZ2",
        "category": "DESTILADOS",
        "categorySlug": "destilados",
        "audience": [
          "bebidas"
        ]
      },
      {
        "id": "destilados-8",
        "name": "Vinho Alma Negra",
        "description": "Mendoza Argentina Domaine-Alma Negra",
        "price": "R$ 180,00",
        "basePrice": 180.0,
        "imageUrl": "/src/assets/images/menu/destilados-8.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/ov4JpqdoZz",
        "category": "DESTILADOS",
        "categorySlug": "destilados",
        "audience": [
          "bebidas"
        ]
      },
      {
        "id": "destilados-9",
        "name": "Vinho Lambrusco Cavicchioli",
        "description": "VINHO BRANCO CAVICCHIOLI LAMBRUSCO 750 ML",
        "price": "R$ 70,00",
        "basePrice": 70.0,
        "imageUrl": "/src/assets/images/menu/destilados-9.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/7vExjO8aQJ",
        "category": "DESTILADOS",
        "categorySlug": "destilados",
        "audience": [
          "bebidas"
        ]
      },
      {
        "id": "destilados-10",
        "name": "VINHO TARAPACA GRAN RESERVA CABERNET SAUVIGNON",
        "description": "VINHO TARAPACA GRAN RESERVA CABERNET SAUVIGNON 750 ML - 2020",
        "price": "R$ 140,00",
        "basePrice": 140.0,
        "imageUrl": "/src/assets/images/menu/destilados-10.png",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/y9ZWR96gEe",
        "category": "DESTILADOS",
        "categorySlug": "destilados",
        "audience": [
          "bebidas"
        ]
      },
      {
        "id": "destilados-11",
        "name": "Vinho Branco Ventisquero Reserva Chardonnay",
        "description": "Vinho Branco Ventisquero Reserva Chardonnay 750ml 2021",
        "price": "R$ 110,00",
        "basePrice": 110.0,
        "imageUrl": "/src/assets/images/menu/destilados-11.jpg",
        "variations": [],
        "cupOptions": [],
        "checkoutUrl": "https://www.deliway.com.br/carrinho/item/BdW6qOBrez/rKEj2B9DED",
        "category": "DESTILADOS",
        "categorySlug": "destilados",
        "audience": [
          "bebidas"
        ]
      }
    ]
  }
];
