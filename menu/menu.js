const menu = {
  foods: {
    name: {
      en: "dishes",
      uk: "Страви",
    },
    categories: [
      {
        name: {
          en: "Snacks",
          uk: "До Пива",
        },
        postitions: [
          {
            name: {
              en: "Beer mix №1",
              uk: "Сет пивний №1 – грінки з салом, бастурма, сир",
            },
            weight: 300,
            price: 250,
            indentifyer: "г",
          },
          {
            name: {
              en: "Beer mix №2",
              uk: "Сет пивний №2 – ковбаски баварські, мисливські, хмизок",
            },
            weight: 300,
            price: 250,
            indentifyer: "г",
          },
          {
            name: {
              en: "Beer mix №3",
              uk: "Сет пивний №3 – курячі палички, сирні палички, кальмари фрі",
            },
            weight: 600,
            price: 450,
            indentifyer: "г",
          },
          {
            name: {
              en: "Deep-fried chicken sticks",
              uk: "Курячі палички з соусом з блакитного сиру",
            },
            weight: 250,
            price: 160,
            indentifyer: "г",
          },
          {
            name: {
              en: "Deep-fried mozzarella sticks",
              uk: "Сирні палички з журавлиновим соусом",
            },
            weight: 200,
            price: 140,
            indentifyer: "г",
          },
          {
            name: {
              en: "Fried calamari",
              uk: "Кільця кальмару з соусом тар-тар",
            },
            weight: 150,
            price: 180,
            indentifyer: "г",
          },
          {
            name: {
              en: "Fried onion rings",
              uk: "Цибулеві кільця",
            },
            weight: 150,
            price: 90,
            indentifyer: "г",
          },
        ],
      },
      {
        name: {
          en: "Cold plate",
          uk: "Холодні закуски",
        },
        postitions: [
          {
            name: {
              en: "Cheese plate",
              uk: "Сирна тарілка",
            },
            weight: 150,
            price: 300,
            indentifyer: "г",
          },
          {
            name: {
              en: "Beef carpaccio",
              uk: "Карпаччо з телятини",
            },
            weight: 150,
            price: 150,
            indentifyer: "г",
          },
          {
            name: {
              en: "Salmon carpaccio",
              uk: "Карпаччо з сьомги",
            },
            weight: 100,
            price: 190,
            indentifyer: "г",
          },
          {
            name: {
              en: "Tuna tartar with rocket",
              uk: "Тартар з тунця на подушці з рукколи",
            },
            weight: 150,
            price: 190,
            indentifyer: "г",
          },
          {
            name: {
              en: '"Salo" Ukrainian style',
              uk: "Сало українське в спеціях",
            },
            weight: 100,
            price: 90,
            indentifyer: "г",
          },
          {
            name: {
              en: "Herring with onions",
              uk: "Оселедець з цибулею",
            },
            weight: 100,
            price: 70,
            indentifyer: "г",
          },
          {
            name: {
              en: "Pickles",
              uk: "Соління",
            },
            weight: 600,
            price: 120,
            indentifyer: "г",
          },
        ],
      },
      {
        name: {
          en: "Appetizers",
          uk: "Гарячі закуски",
        },
        postitions: [
          {
            name: {
              en: "Coated Buffalo chicken wings with sweat chili",
              uk: "Крильця Buffalo з солодким чилі",
            },
            weight: 300,
            price: 155,
            indentifyer: "г",
          },
          {
            name: {
              en: "Classic Buffalo chicken wings with blue cheese sauce",
              uk: "Гострі крильця Buffalo з блакитним сиром",
            },
            weight: 300,
            price: 155,
            indentifyer: "г",
          },
          {
            name: {
              en: "Chicken wings with BBQ sauce",
              uk: "Курячі крильця з соусом BBQ",
            },
            weight: 300,
            price: 155,
            indentifyer: "г",
          },
          {
            name: {
              en: "Potato pancakes with sour cream",
              uk: "Домашні деруни зі сметаною",
            },
            weight: 250,
            price: 120,
            indentifyer: "г",
          },
          {
            name: {
              en: "Potato pancakes with bacon and onion",
              uk: "Деруни з беконом та печерицями",
            },
            weight: 350,
            price: 150,
            indentifyer: "г",
          },
          {
            name: {
              en: "Grilled potatoes with bacon, onions and cheese",
              uk: "Смажена картопля з цибулею і беконом запечена під сиром",
            },
            weight: 250,
            price: 170,
            indentifyer: "г",
          },
          {
            name: {
              en: "Cheburek - deep-fried turnover",
              uk: "Чебурек",
            },
            weight: 1,
            price: 75,
            indentifyer: "шт",
          },
        ],
      },
      {
        name: {
          en: "Soups",
          uk: "Перші страви",
        },
        postitions: [
          {
            name: {
              en: "Ukrainian borsch",
              uk: "Борщ український",
            },
            weight: 1,
            price: 80,
            indentifyer: "п",
          },
          {
            name: {
              en: "Solyanka - mixed meat soup",
              uk: "Солянка м’ясна",
            },
            weight: 1,
            price: 95,
            indentifyer: "п",
          },
          {
            name: {
              en: "Chicken soup with homemade noodles",
              uk: "Бульйон з домашньою локшиною",
            },
            weight: 1,
            price: 80,
            indentifyer: "п",
          },
        ],
      },
      {
        name: {
          en: "Salads",
          uk: "Салати",
        },
        postitions: [
          {
            name: {
              en: "Caesar salad",
              uk: "Салат Цезар",
            },
            weight: 300,
            price: 160,
            indentifyer: "г",
          },
          {
            name: {
              en: "Light-green salad with salmon",
              uk: "Салат з сьомгою",
            },
            weight: 200,
            price: 160,
            indentifyer: "г",
          },
          {
            name: {
              en: "Light-green salad with fresh tuna",
              uk: "Салат з тунцем",
            },
            weight: 200,
            price: 160,
            indentifyer: "г",
          },
          {
            name: {
              en: "Fresh veggies with sheep milk cheese",
              uk: "Салат Шопський",
            },
            weight: 300,
            price: 140,
            indentifyer: "г",
          },
        ],
      },
      {
        name: {
          en: "Main courses",
          uk: "Основні страви",
        },
        postitions: [
          {
            name: {
              en: "Buffalo spare ribs",
              uk: "Ребра Buffalo (порція від 400г)",
            },
            weight: 100,
            price: 60,
            indentifyer: "г",
          },
          {
            name: {
              en: "Pork shank",
              uk: "Рулька",
            },
            weight: 1000,
            price: 350,
            indentifyer: "г",
          },
          {
            name: {
              en: "Meat pan – pork shank, spare ribs, chicken wings ",
              uk: "М’ясна сковорода",
            },
            weight: 1500,
            price: 650,
            indentifyer: "г",
          },
          {
            name: {
              en: "Chicken Kyiv",
              uk: "Котлета по-київськи",
            },
            weight: 150,
            price: 90,
            indentifyer: "г",
          },
          {
            name: {
              en: "Pork schnitzel",
              uk: "Шніцель зі свинини",
            },
            weight: 200,
            price: 180,
            indentifyer: "г",
          },
          {
            name: {
              en: "Tuna steak",
              uk: "Стейк з тунця",
            },
            weight: 100,
            price: 180,
            indentifyer: "г",
          },
          {
            name: {
              en: "Salmon in an apple-kiwi sauce",
              uk: "Сьомга у фруктовому соусі",
            },
            weight: 100,
            price: 180,
            indentifyer: "г",
          },
        ],
      },
      {
        name: {
          en: "Burgers",
          uk: "Бургери",
        },
        postitions: [
          {
            name: {
              en: "Classic cheeseburger",
              uk: "Класичний чізбургер",
            },
            weight: 1,
            price: 180,
            indentifyer: "п",
          },
          {
            name: {
              en: "Chicken burger",
              uk: "Курячий бургер",
            },
            weight: 1,
            price: 160,
            indentifyer: "п",
          },
          {
            name: {
              en: "Chicken sandwich",
              uk: "Сендвіч з куркою",
            },
            weight: 1,
            price: 150,
            indentifyer: "п",
          },
        ],
      },
      {
        name: {
          en: "Grills",
          uk: "Гриль",
        },
        postitions: [
          {
            name: {
              en: "Ribeye beef",
              uk: "Стейк Рібай",
            },
            weight: 250,
            price: 280,
            indentifyer: "г",
          },
          {
            name: {
              en: "New York beef",
              uk: "Стейк Нью Йорк",
            },
            weight: 250,
            price: 280,
            indentifyer: "г",
          },
          {
            name: {
              en: "Shashlik - skewered and grilled cubes of pork sholder",
              uk: "Шашлик зі свинини",
            },
            weight: 200,
            price: 250,
            indentifyer: "г",
          },
          {
            name: {
              en: "Skewered teriyaki chicken",
              uk: "Шашлик курячий в соусі теріякі",
            },
            weight: 200,
            price: 180,
            indentifyer: "г",
          },
          {
            name: {
              en: "Chicken fillet with a honey-mustard sauce",
              uk: "Куряче філе з медово-гірчичним соусом",
            },
            weight: 200,
            price: 190,
            indentifyer: "г",
          },
          {
            name: {
              en: "Salmon steak",
              uk: "Стейк із сьомги (порція від 200г)",
            },
            weight: 100,
            price: 180,
            indentifyer: "г",
          },
          {
            name: {
              en: "Tuna steak",
              uk: "Стейк з тунця  (порція від 200г)",
            },
            weight: 100,
            price: 180,
            indentifyer: "г",
          },
        ],
      },
      {
        name: {
          en: "Sides",
          uk: "Гарніри",
        },
        postitions: [
          {
            name: {
              en: "Deep-fried or boiled potatoes",
              uk: "Картопля по-селянськи або відварна",
            },
            weight: 250,
            price: 60,
            indentifyer: "г",
          },
          {
            name: {
              en: "Home style potatoes",
              uk: "Картопля по-домашньому",
            },
            weight: 250,
            price: 95,
            indentifyer: "г",
          },
          {
            name: {
              en: "Grilled veggies",
              uk: "Овочі гриль",
            },
            weight: 100,
            price: 50,
            indentifyer: "г",
          },
          {
            name: {
              en: "French fries",
              uk: "Картопля фрі",
            },
            weight: 150,
            price: 70,
            indentifyer: "г",
          },
          {
            name: {
              en: "Graham bread",
              uk: "Домашній хліб – Грехемський",
            },
            weight: 150,
            price: 40,
            indentifyer: "г",
          },
        ],
      },
      {
        name: {
          en: "Dessert",
          uk: "Десерти",
        },
        postitions: [
          {
            name: {
              en: "Brownie with ice cream",
              uk: "Брауні з морозивом",
            },
            weight: 250,
            price: 130,
            indentifyer: "г",
          },
          {
            name: {
              en: "Cherry or apple strudel",
              uk: "Штрудель яблучний або вишневий",
            },
            weight: 300,
            price: 175,
            indentifyer: "г",
          },
          {
            name: {
              en: "Napoleon - layer-cake with pastry cream",
              uk: "Наполеон",
            },
            weight: 200,
            price: 80,
            indentifyer: "г",
          },
          {
            name: {
              en: "Cheese pancakes",
              uk: "Сирники",
            },
            weight: 150,
            price: 90,
            indentifyer: "г",
          },
        ],
      },
    ],
  },
  driks: {
    name: {
      en: "drinks",
      uk: "Напої",
    },
    categories: [
      {
        name: {
          en: "Cold plate",
          uk: "Холодні закуски",
        },
        postitions: [
          {
            name: {
              en: "Cheese plate",
              uk: "Сирна тарілка",
            },
            weight: 150,
            price: 300,
            indentifyer: "г",
          },
          {
            name: {
              en: "Beef carpaccio",
              uk: "Карпаччо з телятини",
            },
            weight: 150,
            price: 150,
            indentifyer: "г",
          },
          {
            name: {
              en: "Salmon carpaccio",
              uk: "Карпаччо з сьомги",
            },
            weight: 100,
            price: 190,
            indentifyer: "г",
          },
          {
            name: {
              en: "Tuna tartar with rocket",
              uk: "Тартар з тунця на подушці з рукколи",
            },
            weight: 150,
            price: 190,
            indentifyer: "г",
          },
          {
            name: {
              en: '"Salo" Ukrainian style',
              uk: "Сало українське в спеціях",
            },
            weight: 100,
            price: 90,
            indentifyer: "г",
          },
          {
            name: {
              en: "Herring with onions",
              uk: "Оселедець з цибулею",
            },
            weight: 100,
            price: 70,
            indentifyer: "г",
          },
          {
            name: {
              en: "Pickles",
              uk: "Соління",
            },
            weight: 600,
            price: 120,
            indentifyer: "г",
          },
        ],
      },
      {
        name: {
          en: "Appetizers",
          uk: "Гарячі закуски",
        },
        postitions: [
          {
            name: {
              en: "Coated Buffalo chicken wings with sweat chili",
              uk: "Крильця Buffalo з солодким чилі",
            },
            weight: 300,
            price: 155,
            indentifyer: "г",
          },
          {
            name: {
              en: "Classic Buffalo chicken wings with blue cheese sauce",
              uk: "Гострі крильця Buffalo з блакитним сиром",
            },
            weight: 300,
            price: 155,
            indentifyer: "г",
          },
          {
            name: {
              en: "Chicken wings with BBQ sauce",
              uk: "Курячі крильця з соусом BBQ",
            },
            weight: 300,
            price: 155,
            indentifyer: "г",
          },
          {
            name: {
              en: "Potato pancakes with sour cream",
              uk: "Домашні деруни зі сметаною",
            },
            weight: 250,
            price: 120,
            indentifyer: "г",
          },
          {
            name: {
              en: "Potato pancakes with bacon and onion",
              uk: "Деруни з беконом та печерицями",
            },
            weight: 350,
            price: 150,
            indentifyer: "г",
          },
          {
            name: {
              en: "Grilled potatoes with bacon, onions and cheese",
              uk: "Смажена картопля з цибулею і беконом запечена під сиром",
            },
            weight: 250,
            price: 170,
            indentifyer: "г",
          },
          {
            name: {
              en: "Cheburek - deep-fried turnover",
              uk: "Чебурек",
            },
            weight: 1,
            price: 75,
            indentifyer: "шт",
          },
        ],
      },
    ],
  },
};
export default menu;
