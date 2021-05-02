import idRandom from './src/utils/idRandom';
// categories

export const CATEGORIES = [
  {
    _id: idRandom('categories', 8),
    name: 'Cơm',
    image: require('./src/assets/images/categories/1.png'),
  },
  {
    _id: idRandom('categories', 8),
    name: 'Bún Phở',
    image: require('./src/assets/images/categories/2.png'),
  },
  {
    _id: idRandom('categories', 8),
    name: 'Trà Sữa',
    image: require('./src/assets/images/categories/3.png'),
  },
  {
    _id: idRandom('categories', 8),
    name: 'Đặc sản',
    image: require('./src/assets/images/categories/4.png'),
  },
  {
    _id: idRandom('categories', 8),
    name: 'Đồ ăn nhanh',
    image: require('./src/assets/images/categories/5.png'),
  },
  {
    _id: idRandom('categories', 8),
    name: 'Ăn vặt',
    image: require('./src/assets/images/categories/6.png'),
  },

  {
    _id: idRandom('categories', 8),
    name: 'Healthy',
    image: require('./src/assets/images/categories/7.png'),
  },
  {
    _id: idRandom('categories', 8),
    name: 'Siêu hot',
    image: require('./src/assets/images/categories/8.png'),
  },
];

export const LIST_PROMOS = [
  {
    _id: idRandom('promos', 8),
    headerPromos: {
      headerStrong: 'Deal Hot chỉ 5k',
      headerNormal: 'Khao 20k cho đơn hàng từ 25k',
    },
    promos: [
      {
        _id: idRandom('promo', 8),
        image:
          'https://top10binhduong.vn/wp-content/uploads/2020/02/tra-sua.jpg',
        name: 'Cộng rau má - Hoàng Diệu 2 babf abfbabf ababfa afb asf asf',
      },
      {
        _id: idRandom('promo', 8),
        image:
          'https://top10binhduong.vn/wp-content/uploads/2020/02/tra-sua.jpg',
        name: 'Cộng rau má - Hoàng Diệu 2 babf abfbabf ababfa afb asf asf',
      },
      {
        _id: idRandom('promo', 8),
        image:
          'https://top10binhduong.vn/wp-content/uploads/2020/02/tra-sua.jpg',
        name: 'Cộng rau má - Hoàng Diệu 2 babf abfbabf ababfa afb asf asf',
      },
      {
        _id: idRandom('promo', 8),
        image:
          'https://top10binhduong.vn/wp-content/uploads/2020/02/tra-sua.jpg',
        name: 'Cộng rau má - Hoàng Diệu 2 babf abfbabf ababfa afb asf asf',
      },
    ],
  },
  {
    _id: idRandom('promos', 8),
    headerPromos: {
      headerStrong: 'Quán Mới Khao 30k',
      headerNormal: 'Giảm 30k khi nhập mã ZALOPAY04',
    },
    promos: [
      {
        _id: idRandom('promo', 8),
        image:
          'https://media-cdn.tripadvisor.com/media/photo-s/15/03/79/e3/otto-s-anatolian-food.jpg',
        name: 'Cộng rau má - Hoàng Diệu 2 babf abfbabf ababfa afb asf asf',
      },
      {
        _id: idRandom('promo', 8),
        image:
          'https://media-cdn.tripadvisor.com/media/photo-s/15/03/79/e3/otto-s-anatolian-food.jpg',
        name: 'Cộng rau má - Hoàng Diệu 2 babf abfbabf ababfa afb asf asf',
      },
      {
        _id: idRandom('promo', 8),
        image:
          'https://media-cdn.tripadvisor.com/media/photo-s/15/03/79/e3/otto-s-anatolian-food.jpg',
        name: 'Cộng rau má - Hoàng Diệu 2 babf abfbabf ababfa afb asf asf',
      },
      {
        _id: idRandom('promo', 8),
        image:
          'https://media-cdn.tripadvisor.com/media/photo-s/15/03/79/e3/otto-s-anatolian-food.jpg',
        name: 'Cộng rau má - Hoàng Diệu 2 babf abfbabf ababfa afb asf asf',
      },
    ],
  },
];

export const LIST_RESTAURANT_SUGGESTION = [
  {
    _id: idRandom('listRestaurantSuggestion', 8),
    header: 'Sài gòn hôm nay có gì',
    suggestions: [
      {
        _id: idRandom('restaurantSuggestion', 8),
        image:
          'https://media-exp1.licdn.com/dms/image/C561BAQHsGu0_rbX2JQ/company-background_10000/0/1592190729149?e=2159024400&v=beta&t=duTt56eUqyz3JCxqdwPD1pZdKerPf6faMkkGR4Rd7UQ',
        strongText: 'Ăn ngoài kế hoạch',
        normalText: 'Menu cho buổi liên hoan bất chợt',
      },
      {
        _id: idRandom('restaurantSuggestion', 8),
        image:
          'https://media-exp1.licdn.com/dms/image/C561BAQHsGu0_rbX2JQ/company-background_10000/0/1592190729149?e=2159024400&v=beta&t=duTt56eUqyz3JCxqdwPD1pZdKerPf6faMkkGR4Rd7UQ',
        strongText: 'Ăn ngoài kế hoạch',
        normalText: 'Menu cho buổi liên hoan bất chợt',
      },
      {
        _id: idRandom('restaurantSuggestion', 8),
        image:
          'https://media-exp1.licdn.com/dms/image/C561BAQHsGu0_rbX2JQ/company-background_10000/0/1592190729149?e=2159024400&v=beta&t=duTt56eUqyz3JCxqdwPD1pZdKerPf6faMkkGR4Rd7UQ',
        strongText: 'Ăn ngoài kế hoạch',
        normalText: 'Menu cho buổi liên hoan bất chợt',
      },
    ],
  },
  {
    _id: idRandom('listRestaurantSuggestion', 8),
    header: 'Quán Ngon - Khao tới 22k đơn từ 20k',
    suggestions: [
      {
        _id: idRandom('restaurantSuggestion', 8),
        image:
          'https://madklubben.dk/wp-content/uploads/2020/07/restaurant_hero_FCKbh.jpg',
        strongText: 'Ăn ngoài kế hoạch',
        normalText: 'Menu cho buổi liên hoan bất chợt',
      },
      {
        _id: idRandom('restaurantSuggestion', 8),
        image:
          'https://madklubben.dk/wp-content/uploads/2020/07/restaurant_hero_FCKbh.jpg',
        strongText: 'Ăn ngoài kế hoạch',
        normalText: 'Menu cho buổi liên hoan bất chợt',
      },
      {
        _id: idRandom('restaurantSuggestion', 8),
        image:
          'https://madklubben.dk/wp-content/uploads/2020/07/restaurant_hero_FCKbh.jpg',
        strongText: 'Ăn ngoài kế hoạch',
        normalText: 'Menu cho buổi liên hoan bất chợt',
      },
    ],
  },
];

export const LIST_RESTAURANTS = [
  {
    _id: idRandom('listRestaurant', 8),
    nameStrong: 'GongCha Sài Gòn',
    nameNormal: 'Goncha Sài Gòn',
    distance: '3.2km',
    address: '56 Hoàng Diệu 2, Linh Chiểu, Thủ Đức, Hồ Chí Minh',
    image:
      'https://cdn.jamja.vn/blog/wp-content/uploads/2018/04/menu-gong-cha-1.jpg',
    foodsCategories: [
      {
        header: 'Trà sữa',
        foods: [
          {
            id: idRandom('food', 8),
            name: 'Trà sữa trân châu- đường đen',
            image:
              'https://micaykitachi.com/wp-content/uploads/2020/02/tra-sua.jpg',
            price: '35.000',
            options: [
              {
                header: 'Thêm topping',
                selections: [
                  {
                    name: 'Trân châu đen',
                    price: '5.000',
                  },
                  {
                    name: 'Trân châu trắng',
                    price: '5.000',
                  },
                  {
                    name: 'plan',
                    price: '7.000',
                  },
                ],
              },
            ],
          },
          {
            id: idRandom('food', 8),
            name: 'Trà sữa truyền thống',
            image: 'https://i.ytimg.com/vi/95MzevrLk-0/maxresdefault.jpg',
            price: '30.000',
            options: [
              {
                header: 'Thêm topping',
                selections: [
                  {
                    name: 'Trân châu đen',
                    price: '5.000',
                  },
                  {
                    name: 'Trân châu trắng',
                    price: '5.000',
                  },
                  {
                    name: 'plan',
                    price: '7.000',
                  },
                ],
              },
            ],
          },
          {
            id: idRandom('food', 8),
            name: 'Trà sữa matcha',
            image: 'https://i.ytimg.com/vi/HCOI7lObza0/maxresdefault.jpg',
            price: '35.000',
            options: [
              {
                header: 'Thêm topping',
                selections: [
                  {
                    name: 'Trân châu đen',
                    price: '5.000',
                  },
                  {
                    name: 'Trân châu trắng',
                    price: '5.000',
                  },
                  {
                    name: 'plan',
                    price: '7.000',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        header: 'Trà Hoa Quả',
        foods: [
          {
            id: idRandom('food', 8),
            name: 'Trà chanh',
            price: '15.000',
            image:
              'https://thucthan.com/media/2019/07/tra-chanh/mon-tra-chanh.jpg',
            options: [],
          },
          {
            id: idRandom('food', 8),
            name: 'Trà chanh mật ong',
            price: '20.000',
            image:
              'https://toinayangi.vn/wp-content/uploads/2015/01/cach-pha-tra-chanh-nhanh-gon-nhung-cuc-nhanh-01.jpg',
            options: [],
          },
          {
            id: idRandom('food', 8),
            name: 'Trà đào',
            price: '20.000',
            image:
              'https://vancokythu.net/wp-content/uploads/2019/10/ly-tr%C3%A0-600x381.jpg',
            options: [],
          },
        ],
      },
    ],
  },
  {
    _id: idRandom('listRestaurant', 8),
    nameStrong: 'Bún đậu Sài Gòn',
    nameNormal: 'Bún đậu Sài Gòn',
    address: '56 Hoàng Diệu 2, Linh Chiểu, Thủ Đức, Hồ Chí Minh',
    distance: '3.2km',
    image:
      'https://dulichtoday.vn/wp-content/uploads/2020/04/bun-dau-mam-tom-ha-noi-2.jpg',
    foodsCategories: [
      {
        header: 'Bún đậu mắm tôm',
        foods: [
          {
            id: idRandom('food', 8),
            name: 'Mẹt nhỏ',
            price: '50.000',
            image:
              'https://img-global.cpcdn.com/recipes/9b72ad1cf1e433e2/751x532cq70/bun-d%E1%BA%ADu-m%E1%BA%AFm-tom-chay-recipe-main-photo.jpg',
            options: [
              {
                header: 'Thêm topping',
                selections: [
                  {
                    name: 'Bún thêm',
                    price: '5.000',
                  },
                  {
                    name: 'Chả cốm thêm',
                    price: '10.000',
                  },
                  {
                    name: 'Thịt luộc thêm',
                    price: '10.000',
                  },
                ],
              },
            ],
          },
          {
            id: idRandom('food', 8),
            name: 'Mẹt vừa',
            price: '75.000',
            image:
              'https://dulichtoday.vn/wp-content/uploads/2020/04/bun-dau-mam-tom-ha-noi-2.jpg',
            options: [
              {
                header: 'Thêm topping',
                selections: [
                  {
                    name: 'Bún thêm',
                    price: '5.000',
                  },
                  {
                    name: 'Chả cốm thêm',
                    price: '10.000',
                  },
                  {
                    name: 'Thịt luộc thêm',
                    price: '10.000',
                  },
                ],
              },
            ],
          },
          {
            id: idRandom('food', 8),
            name: 'Mẹt lớn ',
            price: '100.000',
            image:
              'https://cdn.vietnamtours247.com/2020/01/65755530-0D13-406D-8038-2034946C88F4.jpeg',
            options: [
              {
                header: 'Thêm topping',
                selections: [
                  {
                    name: 'Bún thêm',
                    price: '5.000',
                  },
                  {
                    name: 'Chả cốm thêm',
                    price: '10.000',
                  },
                  {
                    name: 'Thịt luộc thêm',
                    price: '10.000',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        header: 'Bún mắm nêm',
        foods: [
          {
            id: idRandom('food', 8),
            name: 'Bún mắm nêm',
            price: '20.000',
            image:
              'https://cdn.tgdd.vn/2020/06/CookProduct/Untitled-9-1200x676-3.jpg',
            options: [
              {
                header: 'Thêm topping',
                selections: [
                  {
                    name: 'Bún thêm',
                    price: '2.000',
                  },
                  {
                    name: 'Thịt luộc thêm',
                    price: '5.000',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    _id: idRandom('listRestaurant', 8),
    nameStrong: 'Gà rán KFC',
    nameNormal: 'Gà rán KFC',
    distance: '3.2km',
    address: '56 Hoàng Diệu 2, Linh Chiểu, Thủ Đức, Hồ Chí Minh',
    image: '  ',
    foodsCategories: [
      {
        header: 'Gà rán',
        foods: [
          {
            id: idRandom('food', 8),
            name: 'Combo1',
            price: '50.000',
            image:
              'https://canadify.com/wp-content/uploads/2018/09/KFC-Canada-Brings-Back-Extra-Crispy-Chicken-678x381.jpg',
            options: [],
          },
          {
            id: idRandom('food', 8),
            name: 'Combo2',
            price: '80.000',
            image:
              'https://www.thatlangon.com/wp-content/uploads/2020/07/ga-ran1.jpg',
            options: [],
          },
          {
            id: idRandom('food', 8),
            name: 'Combo3',
            price: '120.000',
            image: 'http://list.vn/wp-content/uploads/2021/02/ga-ran.jpg',
            options: [],
          },
        ],
      },
      {
        header: 'Nước ngọt',
        foods: [
          {
            id: idRandom('food', 8),
            name: 'Pepsi',
            price: '15.000',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh6tdr82HhsZ3siLRzm9yYSUz3f18ByJomMg&usqp=CAU',
            options: [],
          },
          {
            id: idRandom('food', 8),
            name: 'Coca',
            price: '15.000',
            image:
              'https://www.sapakitchen.vn/uploads/files/2018/01/18/a0-09f5c.jpg',
            options: [],
          },
        ],
      },
    ],
  },
];
