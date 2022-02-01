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
            weight: 150,
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
            weight: 350,
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
            price: 120,
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
              en: "Salmon in an apple-kiwi sauce",
              uk: "Сьомга у фруктовому соусі",
            },
            weight: 200,
            price: 260,
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
            weight: 200,
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
          en: "Drink",
          uk: "Горілка",
        },
        postitions: [
          {
            name: {
              en: "Absolut",
              uk: "Absolut",
            },
            weight: "50",
            price: 65,
            indentifyer: "мл",
          },
          {
            name: {
              en: "Перша гільдія «Престиж»",
              uk: "Перша гільдія «Престиж»",
            },
            weight: "50",
            price: 65,
            indentifyer: "мл",
          },
          {
            name: {
              en: "Перша гільдія «Верховна»",
              uk: "Перша гільдія «Верховна»",
            },
            weight: "50",
            price: 40,
            indentifyer: "мл",
          },
          {
            name: {
              en: "Перша гільдія «Поважна»",
              uk: "Перша гільдія «Поважна»",
            },
            weight: "50",
            price: 40,
            indentifyer: "мл",
          },
          {
            name: {
              en: "Козацька рада «Преміум»",
              uk: "Козацька рада «Преміум»",
            },
            weight: "50",
            price: 45,
            indentifyer: "мл",
          },
          {
            name: {
              en: "Козацька рада «Оригінальна»",
              uk: "Козацька рада «Оригінальна»",
            },
            weight: "50",
            price: 35,
            indentifyer: "мл",
          },
          {
            name: {
              en: "Козацька рада «Класична»",
              uk: "Козацька рада «Класична»",
            },
            weight: "50",
            price: 35,
            indentifyer: "мл",
          },
          {
            name: {
              en: "Хлібний дар «Класична»",
              uk: "Хлібний дар «Класична»",
            },
            weight: "50",
            price: 35,
            indentifyer: "мл",
          },
        ],
      },
      {
        name: {
          en: "Drink",
          uk: "Віскі",
        },
        postitions: [
          {
            name: {
              en: "The Glenlivet Founder's Reserve",
              uk: "The Glenlivet Founder's Reserve",
            },
            weight: "50",
            price: 200,
            indentifyer: "мл",
          },
          {
            name: {
              en: "Chivas Regal XV",
              uk: "Chivas Regal XV",
            },
            weight: "50",
            price: 250,
            indentifyer: "мл",
          },
          {
            name: {
              en: "Chivas Regal 12 YO",
              uk: "Chivas Regal 12 YO",
            },
            weight: "50",
            price: 190,
            indentifyer: "мл",
          },
          {
            name: {
              en: "Jameson",
              uk: "Jameson",
            },
            weight: "50",
            price: 100,
            indentifyer: "мл",
          },
          {
            name: {
              en: "Jameson Cold Brew",
              uk: "Jameson Cold Brew",
            },
            weight: "50",
            price: 110,
            indentifyer: "мл",
          },
          {
            name: {
              en: "Jameson Stout Edition",
              uk: "Jameson Stout Edition",
            },
            weight: "50",
            price: 110,
            indentifyer: "мл",
          },
          {
            name: {
              en: "Ballantine's 7 YO Bourbon Finish",
              uk: "Ballantine's 7 YO Bourbon Finish",
            },
            weight: "50",
            price: 110,
            indentifyer: "мл",
          },
          {
            name: {
              en: "Ballantine's Finest",
              uk: "Ballantine's Finest",
            },
            weight: "50",
            price: 100,
            indentifyer: "мл",
          },
          {
            name: {
              en: "Redbreast 12 YO",
              uk: "Redbreast 12 YO",
            },
            weight: "50",
            price: 200,
            indentifyer: "мл",
          },
        ],
      },
      {
        name: {
          en: "Drink",
          uk: "Коньяк",
        },
        postitions: [
          {
            name: {
              en: "Martel VSOP",
              uk: "Martel VSOP",
            },
            weight: "50",
            price: 240,
            indentifyer: "мл",
          },
          {
            name: {
              en: "Martel VS",
              uk: "Martel VS",
            },
            weight: "50",
            price: 170,
            indentifyer: "мл",
          },
          {
            name: {
              en: "ARARAT 5*",
              uk: "ARARAT 5*",
            },
            weight: "50",
            price: 100,
            indentifyer: "мл",
          },
          {
            name: {
              en: "ARARAT 3*",
              uk: "ARARAT 3*",
            },
            weight: "50",
            price: 80,
            indentifyer: "мл",
          },
          {
            name: {
              en: "ARARAT Ani 7 YO",
              uk: "ARARAT Ani 7 YO",
            },
            weight: "50",
            price: 120,
            indentifyer: "мл",
          },
          {
            name: {
              en: "Старий Кахеті 5*",
              uk: "Старий Кахеті 5*",
            },
            weight: "50",
            price: 85,
            indentifyer: "мл",
          },
          {
            name: {
              en: "Старий Кахеті 4*",
              uk: "Старий Кахеті 4*",
            },
            weight: "50",
            price: 70,
            indentifyer: "мл",
          },
          {
            name: {
              en: "Коблево Резерв ХО",
              uk: "Коблево Резерв ХО",
            },
            weight: "50",
            price: 100,
            indentifyer: "мл",
          },
          {
            name: {
              en: "Коблево Резерв VS",
              uk: "Коблево Резерв VS",
            },
            weight: "50",
            price: 50,
            indentifyer: "мл",
          },
        ],
      },
      {
        name: {
          en: "Drink",
          uk: "Ром, Текіла, Джин, Лікери",
        },
        postitions: [
          {
            name: {
              en: "Becherovka",
              uk: "Becherovka",
            },
            weight: "50",
            price: 70,
            indentifyer: "мл",
          },
          {
            name: {
              en: "Becherovka Lemond",
              uk: "Becherovka Lemond",
            },
            weight: "50",
            price: 70,
            indentifyer: "мл",
          },
          {
            name: {
              en: "Beefeater",
              uk: "Beefeater",
            },
            weight: "50",
            price: 85,
            indentifyer: "мл",
          },
          {
            name: {
              en: "Olmeca",
              uk: "Olmeca",
            },
            weight: "50",
            price: 100,
            indentifyer: "мл",
          },
          {
            name: {
              en: "Havana Club",
              uk: "Havana Club",
            },
            weight: "50",
            price: 80,
            indentifyer: "мл",
          },
          {
            name: {
              en: "Lillet Blanc",
              uk: "Lillet Blanc",
            },
            weight: "50",
            price: 45,
            indentifyer: "мл",
          },
          {
            name: {
              en: "Martini",
              uk: "Martini",
            },
            weight: "50",
            price: 35,
            indentifyer: "мл",
          },
          {
            name: {
              en: "Ramazzotti Sambuca",
              uk: "Ramazzotti Sambuca",
            },
            weight: "50",
            price: 60,
            indentifyer: "мл",
          },
        ],
      },
      {
        name: {
          en: "Drink",
          uk: "Пиво Бочкове",
        },
        postitions: [
          {
            name: {
              en: "Львівське 1715",
              uk: "Львівське 1715",
            },
            weight: "300 (500)",
            price: "40 (60)",
            indentifyer: "мл",
          },
          {
            name: {
              en: "Carlsberg",
              uk: "Carlsberg",
            },
            weight: "300 (500)",
            price: "40 (60)",
            indentifyer: "мл",
          },
          {
            name: {
              en: "Львівське Білий лев",
              uk: "Львівське Білий лев",
            },
            weight: "300 (500)",
            price: "40 (60)",
            indentifyer: "мл",
          },
          {
            name: {
              en: "Львівське Дункель",
              uk: "Львівське Дункель",
            },
            weight: "300 (500)",
            price: "40 (60)",
            indentifyer: "мл",
          },
          {
            name: {
              en: "Grimbergen Бланш",
              uk: "Grimbergen Бланш",
            },
            weight: "300 (500)",
            price: "60 (100)",
            indentifyer: "мл",
          },
          {
            name: {
              en: "Grimbergen Блонд",
              uk: "Grimbergen Блонд",
            },
            weight: "300 (500)",
            price: "60 (100)",
            indentifyer: "мл",
          },
          {
            name: {
              en: "Grimbergen Дабл Амбре",
              uk: "Grimbergen Дабл Амбре",
            },
            weight: "300 (500)",
            price: "60 (100)",
            indentifyer: "мл",
          },
        ],
      },
      {
        name: {
          en: "Drink",
          uk: "Пиво В Пляшці",
        },
        postitions: [
          {
            name: {
              en: "Carlsberg",
              uk: "Carlsberg",
            },
            weight: "1",
            price: "60",
            indentifyer: "п",
          },
          {
            name: {
              en: "Carlsberg б/а",
              uk: "Carlsberg б/а",
            },
            weight: "1",
            price: "60",
            indentifyer: "п",
          },
          {
            name: {
              en: "Corona",
              uk: "Corona",
            },
            weight: "1",
            price: "75",
            indentifyer: "п",
          },
          {
            name: {
              en: "Сидр Сомерсбі",
              uk: "Сидр Сомерсбі",
            },
            weight: "1",
            price: "60",
            indentifyer: "п",
          },
        ],
      },
      {
        name: {
          en: "Drink",
          uk: "Алкогольні коктейлі",
        },
        postitions: [
          {
            name: {
              en: "Long Island Iced Tea",
              uk: "Long Island Iced Tea",
            },
            weight: "260",
            price: "180",
            indentifyer: "мл",
          },
          {
            name: {
              en: "Mohito",
              uk: "Mohito",
            },
            weight: "300",
            price: "120",
            indentifyer: "мл",
          },
          {
            name: {
              en: "Gluntwein",
              uk: "Глінтвейн",
            },
            weight: "200",
            price: "120",
            indentifyer: "мл",
          },
          {
            name: {
              en: "Spritz",
              uk: "Spritz",
            },
            weight: "200",
            price: "160",
            indentifyer: "мл",
          },
          {
            name: {
              en: "Martini Royal",
              uk: "Martini Royal",
            },
            weight: "280",
            price: "165",
            indentifyer: "мл",
          },
          {
            name: {
              en: "Cosmopolitan",
              uk: "Cosmopolitan",
            },
            weight: "100",
            price: "90",
            indentifyer: "мл",
          },
          {
            name: {
              en: "Зелений мексиканець",
              uk: "Зелений мексиканець",
            },
            weight: "60",
            price: "90",
            indentifyer: "мл",
          },
          {
            name: {
              en: "Хріновуха",
              uk: "Хріновуха",
            },
            weight: "50",
            price: "30",
            indentifyer: "мл",
          },
          {
            name: {
              en: "П’яна вишня",
              uk: "П’яна вишня",
            },
            weight: "50",
            price: "30",
            indentifyer: "мл",
          },
          {
            name: {
              en: "Журавлина",
              uk: "Журавлина",
            },
            weight: "50",
            price: "30",
            indentifyer: "мл",
          },
          {
            name: {
              en: "Обліпиха",
              uk: "Обліпиха",
            },
            weight: "50",
            price: "30",
            indentifyer: "мл",
          },
          {
            name: {
              en: "Лімончелло",
              uk: "Лімончелло",
            },
            weight: "50",
            price: "30",
            indentifyer: "мл",
          },
        ],
      },
      {
        name: {
          en: "Drink",
          uk: "Безалькогольні напої",
        },
        postitions: [
          {
            name: {
              en: "SANDORA сік",
              uk: "SANDORA сік",
            },
            weight: "250",
            price: "35",
            indentifyer: "мл",
          },
          {
            name: {
              en: "Pepsi (в склі)",
              uk: "Pepsi (в склі)",
            },
            weight: "330",
            price: "50",
            indentifyer: "мл",
          },
          {
            name: {
              en: "Pepsi",
              uk: "Pepsi",
            },
            weight: "500",
            price: "45",
            indentifyer: "мл",
          },
          {
            name: {
              en: "7-UP",
              uk: "7-UP",
            },
            weight: "500",
            price: "45",
            indentifyer: "мл",
          },
          {
            name: {
              en: "Evervess тонік",
              uk: "Evervess тонік",
            },
            weight: "500",
            price: "45",
            indentifyer: "мл",
          },
          {
            name: {
              en: "Карпатська джерельна",
              uk: "Карпатська джерельна",
            },
            weight: "500",
            price: "60",
            indentifyer: "мл",
          },
          {
            name: {
              en: "Боржомі",
              uk: "Боржомі",
            },
            weight: "500",
            price: "75",
            indentifyer: "мл",
          },
          {
            name: {
              en: "Узвар",
              uk: "Узвар",
            },
            weight: "300",
            price: "26",
            indentifyer: "мл",
          },
          {
            name: {
              en: "Сік ФРЕШ моркв'яно-яблучний",
              uk: "Сік ФРЕШ моркв'яно-яблучний",
            },
            weight: "300",
            price: "90",
            indentifyer: "мл",
          },
          {
            name: {
              en: "Сік ФРЕШ апельсиновий",
              uk: "Сік ФРЕШ апельсиновий",
            },
            weight: "300",
            price: "120",
            indentifyer: "мл",
          },
          {
            name: {
              en: "Сік ФРЕШ грейфрутовий",
              uk: "Сік ФРЕШ грейфрутовий",
            },
            weight: "300",
            price: "180",
            indentifyer: "мл",
          },
        ],
      },
      {
        name: {
          en: "Drink",
          uk: "Безалькогольні коктейлі",
        },
        postitions: [
          {
            name: {
              en: "Banana cocktail",
              uk: "Банановий коктейль",
            },
            weight: "300",
            price: "70",
            indentifyer: "мл",
          },
          {
            name: {
              en: "Milkshake",
              uk: "Молочний коктейль",
            },
            weight: "300",
            price: "70",
            indentifyer: "мл",
          },
          {
            name: {
              en: "Non-alkohol mohito",
              uk: "Мохіто б/а",
            },
            weight: "300",
            price: "70",
            indentifyer: "мл",
          },
        ],
      },
      {
        name: {
          en: "Drink",
          uk: "Кава та Чай",
        },
        postitions: [
          {
            name: {
              en: "Еспрессо",
              uk: "Еспрессо",
            },
            weight: "",
            price: "35",
            indentifyer: "ч",
          },
          {
            name: {
              en: "Капучіно",
              uk: "Капучіно",
            },
            weight: "",
            price: "50",
            indentifyer: "ч",
          },
          {
            name: {
              en: "Американо з молоком",
              uk: "Американо з молоком",
            },
            weight: "",
            price: "45",
            indentifyer: "ч",
          },
          {
            name: {
              en: "Латте",
              uk: "Латте",
            },
            weight: "",
            price: "50",
            indentifyer: "ч",
          },
          {
            name: {
              en: "Чай листковий",
              uk: "Чай листковий",
            },
            weight: "",
            price: "40",
            indentifyer: "ч",
          },
          {
            name: {
              en: "Чай обліпиховий",
              uk: "Чай обліпиховий",
            },
            weight: "",
            price: "60",
            indentifyer: "ч",
          },
          {
            name: {
              en: "Чай трав’яний з медом",
              uk: "Чай трав’яний з медом",
            },
            weight: "",
            price: "60",
            indentifyer: "ч",
          },
        ],
      },
      {
        name: {
          en: "Drink",
          uk: "Червоні вина",
        },
        postitions: [
          {
            name: {
              en: "Cabernet Sauvignon IGT (Italy)",
              uk: "Cabernet Sauvignon IGT (Італія)",
            },
            weight: "1",
            price: "96/480",
            indentifyer: " б/п",
          },
          {
            name: {
              en: "Bardolino DOC (Italy)",
              uk: "Bardolino DOC (Італія)",
            },
            weight: "1",
            price: "96/480",
            indentifyer: " б/п",
          },
          {
            name: {
              en: "Toscana Rosso IGT (Italy)",
              uk: "Toscana Rosso IGT (Італія)",
            },
            weight: "1",
            price: "96/480",
            indentifyer: " б/п",
          },
          {
            name: {
              en: "Alazani Valley (Georgia)",
              uk: "Alazani Valley (Грузія)",
            },
            weight: "1",
            price: "96/480",
            indentifyer: " б/п",
          },
          {
            name: {
              en: "Saperavi (Georgia)",
              uk: "Saperavi (Грузія)",
            },
            weight: "1",
            price: "96/480",
            indentifyer: " б/п",
          },
        ],
      },
      {
        name: {
          en: "Drink",
          uk: "Білі вина",
        },
        postitions: [
          {
            name: {
              en: "Chardonnay IGT (Italy)",
              uk: "Chardonnay IGT (Італія)",
            },
            weight: "1",
            price: "96/480",
            indentifyer: " б/п",
          },
          {
            name: {
              en: "Soave DOC (Italy)",
              uk: "Soave DOC (Італія)",
            },
            weight: "1",
            price: "96/480",
            indentifyer: " б/п",
          },
          {
            name: {
              en: "Alazani Valley (Georgia)",
              uk: "Alazani Valley (Грузія)",
            },
            weight: "1",
            price: "96/480",
            indentifyer: " б/п",
          },
          {
            name: {
              en: "Tsinandali (Georgia)",
              uk: "Tsinandali (Грузія)",
            },
            weight: "1",
            price: "96/480",
            indentifyer: " б/п",
          },
        ],
      },
      {
        name: {
          en: "Drink",
          uk: "Ігристі вина",
        },
        postitions: [
          {
            name: {
              en: "Артемівське (Ukraine)",
              uk: "Артемівське  (Україна)",
            },
            weight: "200/750",
            price: "120/300",
            indentifyer: "мл",
          },
          {
            name: {
              en: "Базалеті брют (Georgia)",
              uk: "Базалеті брют  (Грузія)",
            },
            weight: "750",
            price: "500",
            indentifyer: "мл",
          },
          {
            name: {
              en: "Базалеті н/сухе (Georgia)",
              uk: "Базалеті н/сухе  (Грузія)",
            },
            weight: "750",
            price: "500",
            indentifyer: "мл",
          },
          {
            name: {
              en: "Lambrusco біле н/солодке (Italy)",
              uk: "Lambrusco біле н/солодке (Італія)",
            },
            weight: "750",
            price: "400",
            indentifyer: "мл",
          },
        ],
      },
    ],
  },
};
export default menu;
