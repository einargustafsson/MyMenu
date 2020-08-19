export const state = () => ({
  products: [
    {
      id: 1,
      title: 'Icelandic plate Loki',
      description: 'Rye bread slices, with mashed fish ( Plokkfiskur) & smoked trout. Flatbread with smoked lamb.Dried fish with butter and taste of fermented shark.',
      price: 2900,
      ratings: 3,
      reviews: 5,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type: 'Main',
      imgURL: 'https://images.squarespace-cdn.com/content/v1/5c721c5034c4e26716faa829/1551670625772-J0IM4S1QRVE2EP3SMDLV/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/_MG_5727.jpg?format=500w'
    },
    {
      id: 2,
      title: 'Icelandic plate Baldur',
      description: 'Two rye bread slices, one with mashed fish & the other with egg & herring. Loki’s unique Rye bread ice cream.',
      price: 2400,
      ratings: 5,
      reviews: 10,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type: 'Main',
      imgURL: 'https://images.squarespace-cdn.com/content/v1/5c721c5034c4e26716faa829/1551670712342-W80QUV9RK41P5JB2JGCS/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/_MG_5737.jpg?format=500w'
    },
    {
      id: 3,
      title: 'Icelandic plate Þór',
      description: 'Rye bread slices, with mashed fish ( Plokkfiskur) & smoked trout. Flatbread with sheep-head jelly, mashed turnips and bean salad.',
      price: 2900,
      ratings: 2,
      reviews: 3,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type: 'Main',
      imgURL: 'https://images.squarespace-cdn.com/content/v1/5c721c5034c4e26716faa829/1551670977993-U4BZ0RJP7B6L6HZ56Z6O/ke17ZwdGBToddI8pDm48kLRAvIOuD_BeOmvIoc2uxngUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcPqTeDH7fKPa2US_s5qbB6FQIWaMIObzCsue3bQUWeZdbZWxuQwynQ0LmYHq0RCqo/IP+l+banner.jpg?format=1500w'
    },
    {
      id: 4,
      title: 'Icelandic plate Freyja',
      description: 'Trout – tarte with salad. Loki’s unique rye bread ice cream.',
      price: 2400,
      ratings: 1,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type: 'Main',
      imgURL: 'https://images.squarespace-cdn.com/content/v1/5c721c5034c4e26716faa829/1551671692091-ZDDYXYXGFZ19XMW0BTP3/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/_MG_5747.jpg?format=500w'
    },
    {
      id: 5,
      title: 'Gratinated mashed fish',
      description: 'With rye bread and salad.',
      price: 2500,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type: 'Main',
      imgURL: 'https://images.squarespace-cdn.com/content/v1/5c721c5034c4e26716faa829/1550988829598-T1YPOPI6V3J02IDO0N4E/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/_MG_5761.jpg?format=500w'
    },
    {
      id: 6,
      title: 'Meat soup',
      description: 'Icelandic lamb meat soup',
      price: 2190,
      ratings: 5,
      reviews: 1,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Main',
      imgURL:'https://images.squarespace-cdn.com/content/v1/5c721c5034c4e26716faa829/1550988952105-CF5VI38AQ2O9TQJEQLLR/ke17ZwdGBToddI8pDm48kPoswlzjSVMM-SxOp7CV59BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIeQMKeWYgwh6Mn73n2eZmZLHHpcPIxgL2SArp_rN2M_AKMshLAGzx4R3EDFOm1kBS/Loki_kjotsupa.jpg?format=500w'
    },
    {
      id: 7,
      title: 'Loki’s vegetarian plate',
      description: 'Fresh greens, potatoes, quinoa, chickpeas, house sauce & rye bread ',
      price: 2200,
      ratings: 5,
      reviews: 7,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Main',
      imgURL:'https://images.squarespace-cdn.com/content/v1/5c721c5034c4e26716faa829/1551672218966-0YTCNE7H9B0HA73BU3MQ/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Grænmetisréttur.jpg?format=500w'
    },
    {
      id: 8,
      title: 'Icelandic Braveheart',
      description: 'Brennivíns shot, rye bread & flatbread. Dried fish with butter and a bit of fermented shark.',
      price: 2400,
      ratings: 3,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Main',
      imgURL:'https://images.squarespace-cdn.com/content/v1/5c721c5034c4e26716faa829/1551672107417-6LUG9PBCW6B5FZ3L1UD6/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/_MG_5753.jpg?format=500w'
    },
    {
      id: 9,
      title: 'Dish of the day',
      description: 'Fresh fish or hearty meat served with the right condiments for a well balanced and nutritious meal. As always honoring our heritage and quest for quality.',
      price: '',
      ratings: 3,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Main',
      imgURL:'https://images.squarespace-cdn.com/content/v1/5c721c5034c4e26716faa829/1550988816675-MS02CJVMRPQMGTB88H23/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/_MG_5796.jpg?format=1000w'
    },
    {
      id: 10,
      title: 'Must try-Tasting',
      description: 'Fermented shark & Brennivín shot',
      price: 1600,
      ratings: 3,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Main',
      imgURL:'https://images.squarespace-cdn.com/content/v1/5c721c5034c4e26716faa829/1551672107417-6LUG9PBCW6B5FZ3L1UD6/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/_MG_5753.jpg?format=500w'
    },
    {
      id: 11,
      title: 'Homemade rye bread with Eggs & herring',
      description: '',
      price: 1550,
      ratings: 3,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Appetizers',
      imgURL:'https://images.squarespace-cdn.com/content/v1/5c721c5034c4e26716faa829/1551672905898-VU87G93GVHRCLLJBNIYW/ke17ZwdGBToddI8pDm48kGDpvalPb1SqHoCn1hwN0Y57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmQPoRzxSr1hzN-vPBHt7YyLLXgctAyUJRqJUUGWVDK_ZzIgvsybGcZEPqUYiXY8im/Loki%27s+herring+plate.jpg?format=1500w'
    },
    {
      id: 12,
      title: 'Homemade rye bread with Smoked trout & cottage cheese',
      description: '',
      price: 1550,
      ratings: 3,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Appetizers',
      imgURL:''
    },
    {
      id: 13,
      title: 'Homemade rye bread with Mashed fish (Plokkfiskur)',
      description: '',
      price: 1550,
      ratings: 3,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Appetizers',
      imgURL:'/images/Loki_rugbraud_plokkfisk.jpg'
    },
    {
      id: 14,
      title: 'Homemade rye bread with Lamb pate',
      description: '',
      price: 850,
      ratings: 3,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Appetizers',
      imgURL:'/images/Loki_rugbraud_kaefu.jpg'
    },
    {
      id: 15,
      title: 'Homemade flatbread with Smoked lamb',
      description: '',
      price: 1530,
      ratings: 3,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Appetizers',
      imgURL:'https://images.squarespace-cdn.com/content/v1/5c721c5034c4e26716faa829/1551673255119-EMUCI4Y16XBSGULSTBMA/ke17ZwdGBToddI8pDm48kPoswlzjSVMM-SxOp7CV59BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIeQMKeWYgwh6Mn73n2eZmZLHHpcPIxgL2SArp_rN2M_AKMshLAGzx4R3EDFOm1kBS/Loki_flatkaka_m_hangikjoti.jpg?format=1500w'
    },
    {
      id: 16,
      title: 'Homemade flatbread with Smoked trout & cottage cheese',
      description: '',
      price: 2050,
      ratings: 3,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Appetizers',
      imgURL:'https://images.squarespace-cdn.com/content/v1/5c721c5034c4e26716faa829/1551673255118-DTBHHSRUFIGOQPJ14UK5/ke17ZwdGBToddI8pDm48kPoswlzjSVMM-SxOp7CV59BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIeQMKeWYgwh6Mn73n2eZmZLHHpcPIxgL2SArp_rN2M_AKMshLAGzx4R3EDFOm1kBS/Loki_flatkaka_m_silung.jpg?format=1500w'
    },
    {
      id: 17,
      title: 'Homemade flatbread with Sheep-head jelly, turnips & bean salad',
      description: '',
      price: 2050,
      ratings: 3,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Appetizers',
      imgURL:'https://images.squarespace-cdn.com/content/v1/5c721c5034c4e26716faa829/1551673255641-KNRIBBR09NF76MJXCIA8/ke17ZwdGBToddI8pDm48kPoswlzjSVMM-SxOp7CV59BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIeQMKeWYgwh6Mn73n2eZmZLHHpcPIxgL2SArp_rN2M_AKMshLAGzx4R3EDFOm1kBS/Loki_flatkaka_m_svidasultu.jpg?format=1500w'
    },
    {
      id: 18,
      title: 'Bagel with Cheese & marmalade',
      description: '',
      price: 950,
      ratings: 3,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Appetizers',
      imgURL:''
    },
    {
      id: 19,
      title: 'Bagel with Smoked trout, cottage cheese	& greens',
      description: '',
      price: 1800,
      ratings: 3,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Appetizers',
      imgURL:'https://images.squarespace-cdn.com/content/v1/5c721c5034c4e26716faa829/1551674044320-7853MO5H5C2U0DF7YA5S/ke17ZwdGBToddI8pDm48kPoswlzjSVMM-SxOp7CV59BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIeQMKeWYgwh6Mn73n2eZmZLHHpcPIxgL2SArp_rN2M_AKMshLAGzx4R3EDFOm1kBS/Loki_beygla_m_silungi.jpg?format=1500w'
    },
    {
      id: 20,
      title: 'Bagel with Ham, cheese, eggs, dressing & greens',
      description: '',
      price: 1800,
      ratings: 3,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Appetizers',
      imgURL:'https://images.squarespace-cdn.com/content/v1/5c721c5034c4e26716faa829/1551674045068-GIR2R2ODLITYCIR6H976/ke17ZwdGBToddI8pDm48kPoswlzjSVMM-SxOp7CV59BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIeQMKeWYgwh6Mn73n2eZmZLHHpcPIxgL2SArp_rN2M_AKMshLAGzx4R3EDFOm1kBS/Loki_beygla_m_skinku.jpg?format=1500w'
    },
    {
      id: 21,
      title: 'Loki’s unique Rye bread ice cream',
      description: 'With cream & rhubarb syrup',
      price: 900,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Pastry',
      imgURL:'https://images.squarespace-cdn.com/content/v1/5c721c5034c4e26716faa829/1551673975353-U3RQHAO8YR3E3PCGHOIK/ke17ZwdGBToddI8pDm48kGDpvalPb1SqHoCn1hwN0Y57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmQPoRzxSr1hzN-vPBHt7YyLLXgctAyUJRqJUUGWVDK_ZzIgvsybGcZEPqUYiXY8im/Rúgbrauðs%C3%ADs%2C+Rye+bread+ice+cream.jpg?format=500w'
    },
    {
      id: 22,
      title: 'Bow (Kleina)',
      description: '',
      price: 300,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Pastry',
      imgURL:'/images/kleina.jpg'
    },
    {
      id: 23,
      title: 'Love-ball (Ástarpungur)',
      description: '',
      price: 300,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Pastry',
      imgURL:'/images/astarpungar.jpg'
    },
    {
      id: 24,
      title: 'Pancake with sugar',
      description: 'Get two for 400',
      price: '250',
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Pastry',
      imgURL:'/images/Loki_ponnukokur_m_sykri.jpg'
    },
    {
      id: 26,
      title: 'Pancake with cream & jam',
      description: '',
      price: 550,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Pastry',
      imgURL:'/images/Loki_ponnukaka_m_rjoma_sultu.jpg'
    },
    {
      id: 27,
      title: 'Pancake with Skyr & caramel sauce',
      description: '',
      price: 700,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Pastry',
      imgURL:'/images/ponnukaka.jpg'
    },
    {
      id: 28,
      title: 'Pancake plate',
      description: '',
      price: 1450,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Pastry',
      imgURL:'/images/Loki_ponnukokuveisla.jpg'
    },
    {
      id: 29,
      title: 'Carrot cake with cream',
      description: '',
      price: 1100,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Pastry',
      imgURL:'/images/gulrotarkaka.jpg'
    },
    {
      id: 30,
      title: 'Skyr cake with cream & rhubarb syrup',
      description: '',
      price: 1050,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Pastry',
      imgURL:'/images/Loki_skyrkaka.jpg'
    },
    {
      id: 31,
      title: 'Chocolate cake with cream',
      description: '',
      price: 1100,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Pastry',
      imgURL:'/images/Loki_sukkuladikaka.jpg'
    },
    {
      id: 32,
      title: 'Healthy cake with cream',
      description: '',
      price: 1050,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Pastry',
      imgURL:'/images/Loki_hollustukaka.jpg'
    },
    {
      id: 33,
      title: 'Skyr with single cream & sugar',
      description: '',
      price: 900,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Pastry',
      imgURL:'/images/Loki_skyr_m_rjomablandi.jpg'
    },
    {
      id: 40,
      title: 'Viking beer bottle',
      description: ' 5,6% - 33clAward winning Icelandic Lager',
      price: 1050,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Alcohol',
      imgURL:'/images/viking.jpg'
    },
    {
      id: 41,
      title: 'Thule beer',
      description: ' 5% - 33cl',
      price: 950,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Alcohol',
      imgURL:'/images/thule-draft.jpg'
    },
    {
      id: 49,
      title: 'Viking light',
      description: ' 4.4 % gluten free',
      price: 950,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Alcohol',
      imgURL:''
    },
    {
      id: 42,
      title: 'Loki Laufeyjarson',
      description: '5,4% 33 cl',
      price: 1200,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Alcohol',
      imgURL:'/images/loki-beer.jpg'
    },
    {
      id: 70,
      title: 'Viking lager small draft',
      description: 'draft 33 cl',
      price: 750,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Alcohol',
      imgURL:'/images/thule-draft.jpg'
    },
    {
      id: 71,
      title: 'Viking lager large draft',
      description: 'draft 50 cl',
      price: 900,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Alcohol',
      imgURL:'/images/thule-draft.jpg'
    },
    {
      id: 43,
      title: 'Einstök White Ale',
      description: '5,2% - 33 cl',
      price: 1250,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Alcohol',
      imgURL:'/images/einstok.jpg'
    },
    {
      id: 44,
      title: 'Einstök Pale Ale',
      description: ' 5,6% - 33cl',
      price: 1250,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Alcohol',
      imgURL:'/images/einstok.jpg'
    },
    {
      id: 45,
      title: 'Einstök Toasted Porter',
      description: '',
      price: 1250,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Alcohol',
      imgURL:'/images/einstok.jpg'
    },
    {
      id: 46,
      title: 'Glass of wine ',
      description: 'Faustino VII - Red or White 18,7 cl glass',
      price: 1200,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Alcohol',
      imgURL:'/images/faustino-glass.jpg'
    },
    {
      id: 47,
      title: 'Bottle of wine',
      description: 'Faustino VII Red or White 70 cl bottle',
      price: 4500,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Alcohol',
      imgURL:'/images/faustino-bottle.jpg'
    },
    {
      id: 48,
      title: 'Brennivín',
      description: 'Icelandic shot - 3 cl',
      price: 1000,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Alcohol',
      imgURL:'/images/brennivin.jpg'
    },
    {
      id: 50,
      title: 'Birkir, Björk or Reyka vodka ',
      description: 'Icelandic shot - 4 cl',
      price: 1300,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Alcohol',
      imgURL:'/images/reyka.jpg'
    },
    {
      id: 51,
      title: 'Farmers coffee',
      description: 'Coffee & Brennivín',
      price: 1250,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Alcohol',
      imgURL:''
    },
    {
      id: 52,
      title: 'Priest coffee: ',
      description: 'Coffee & Brennivín, cream, brown sugar',
      price: 1400,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Alcohol',
      imgURL:''
    },
    {
      id: 53,
      title: 'Bishops coffee'	,
      description: 'Swiss Mocha & Brennivín',
      price: 1550,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Alcohol',
      imgURL:''
    },
    {
      id: 54,
      title: 'Irish coffee'	,
      description: '',
      price: 1400,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Alcohol',
      imgURL:'/images/irish.jpg'
    },
    {
      id: 55,
      title: 'Tea',
      description: 'English Breakfast, Earl Grey, Lemon, Green Te, Super Berries, Ginger peach Tea, Black Tea Chai,Chocolate Rooibos & vanilla, Black Tea & Ginger with Peach, Chamomile, Lemongrass ginger &citrus',
      price: 450,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Drinks',
      imgURL:'/images/tea.jpg'
    },
    {
      id: 56,
      title: 'Loki Te'	,
      description: 'Icelandic herbal tea',
      price: 500,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Drinks',
      imgURL:''
    },
    {
      id: 57,
      title: 'Regular coffee'	,
      description: 'Comes with a refill',
      price: 450,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Drinks',
      imgURL:'/images/coffee.jpg'
    },
    {
      id: 58,
      title: 'Espresso'	,
      description: '',
      price: 450,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Drinks',
      imgURL:'/images/espresso.jpg'
    },
    {
      id: 59,
      title: 'Americano'	,
      description: '',
      price: 550,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Drinks',
      imgURL:''
    },
    {
      id: 60,
      title: 'Cappuccino'	,
      description: '',
      price: 580,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Drinks',
      imgURL:'/images/cappuccino.jpg'
    },
    {
      id: 61,
      title: 'Cafe latte'	,
      description: '',
      price: 580,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Drinks',
      imgURL:'/images/latte.jpg'
    },
    {
      id: 73,
      title: 'Soy or Oat latte'	,
      description: '',
      price: 650,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Drinks',
      imgURL:'/images/latte.jpg'
    },
    {
      id: 74,
      title: 'Flat white'	,
      description: '',
      price: 650,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Drinks',
      imgURL:'/images/flatwhite.jpg'
    },
    {
      id: 75,
      title: 'Hot Chocolate w/cream'	,
      description: '',
      price: 600,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Drinks',
      imgURL:''
    },
    {
      id: 62,
      title: 'Swiss Mocha'	,
      description: '',
      price: 650,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Drinks',
      imgURL:''
    },
    {
      id: 63,
      title: 'Fruit juice'	,
      description: 'Orange, Apple, Tropical',
      price: 350,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Drinks',
      imgURL:'/images/juice.jpg'
    },
    {
      id: 64,
      title: 'Milk glass'	,
      description: '',
      price: 250,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Drinks',
      imgURL:''
    },
    {
      id: 65,
      title: 'Soda / Soft drink'	,
      description: 'Cola, Cola Zero, Sprite, Appelsín - 33 cl',
      price: 450,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Drinks',
      imgURL:'/images/appelsin.jpg'
    },
    {
      id: 66,
      title: 'Sparkling water '	,
      description: 'Icelandic Water - 33 cl',
      price: 350,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Drinks',
      imgURL:''
    },
    {
      id: 67,
      title: 'Pilsner (light beer)'	,
      description: '2,2% 33 cl',
      price: 550,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Drinks',
      imgURL:''
    },
    {
      id: 68,
      title: 'Malt'	,
      description: '2,2% 33 cl',
      price: 550,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Drinks',
      imgURL:'/images/malt.jpg'
    },
    {
      id: 69,
      title: 'Hot chocolate with cream'	,
      description: '',
      price: 600,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Drinks',
      imgURL:''
    }    
  ],
  userInfo: {
    isLoggedIn: false,
    isSignedUp: false,
    hasSearched: false,
    hasFiltered: false,
    name: '',
    productTitleSearched: '',
    productTagFiltered: ''
  },
  systemInfo: {
    openLoginModal: false,
    openSignupModal: false,
    openCheckoutModal: false
  }
})

export const getters = {
  productsAdded: state => {
    return state.products.filter(el => {
      return el.isAddedToCart;
    });
  },
  productsAddedToFavourite: state => {
    return state.products.filter(el => {
      return el.isFavourite;
    });
  },
  getProductById: state => id => {
    return state.products.find(product => product.id == id);
  },
  isUserLoggedIn: state => {
    return state.userInfo.isLoggedIn;
  },
  isUserSignedUp: state => {
    return state.userInfo.isSignedUp;
  },
  getUserName: state => {
    return state.userInfo.name;
  },
  isLoginModalOpen: state => {
    return state.systemInfo.openLoginModal;
  },
  isSignupModalOpen: state => {
    return state.systemInfo.openSignupModal;
  },
  isCheckoutModalOpen: state => {
    return state.systemInfo.openCheckoutModal;
  },
  quantity: state => {
    return state.products.quantity;
  }
}

export const mutations = {
  addToCart: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isAddedToCart = true;
      }
    });
  },
  setAddedBtn: (state, data) => {
    state.products.forEach(el => {
      if (data.id === el.id) {
        el.isAddedBtn = data.status;
      }
    });
  },
  removeFromCart: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isAddedToCart = false;
      }
    });
  },
  removeProductsFromFavourite: state => {
    state.products.filter(el => {
      el.isFavourite = false;
    });
  },
  isUserLoggedIn: (state, isUserLoggedIn) => {
    state.userInfo.isLoggedIn = isUserLoggedIn;
  },
  isUserSignedUp: (state, isSignedUp) => {
    state.userInfo.isSignedUp = isSignedUp;
  },
  setHasUserSearched: (state, hasSearched) => {
    state.userInfo.hasSearched = hasSearched;
  },
  setHasUserFiltered: (state, hasFiltered) => {
    state.userInfo.hasFiltered = hasFiltered;
  },
  setUserName: (state, name) => {
    state.userInfo.name = name;
  },
  setProductTitleSearched: (state, titleSearched) => {
    state.userInfo.productTitleSearched = titleSearched;
    console.log('setProductTitleSearch');
  },
  setProductTagFiltered: (state, tagFiltered) => {
    state.userInfo.productTagFiltered = tagFiltered;
    console.log('setProductTagFiltered');
  },
  showLoginModal: (state, show) => {
    state.systemInfo.openLoginModal = show;
  },
  showSignupModal: (state, show) => {
    state.systemInfo.openSignupModal = show;
  },
  showCheckoutModal: (state, show) => {
    state.systemInfo.openCheckoutModal = show;
  },
  addToFavourite: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isFavourite = true;
      }
    });
  },
  removeFromFavourite: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isFavourite = false;
      }
    });
  },
  quantity: (state, data) => {
    state.products.forEach(el => {
      if (data.id === el.id) {
        el.quantity = data.quantity;
      }
    });
  },
  SET_USER(state, authUser) {
    state.authUser = authUser
  }
}
/* 
export const actions = {
  async nuxtServerInit({ commit }) {
    const res = await this.$axios.get("/api/current_user")
    commit("SET_USER", res.data)
  },

  async logout({ commit }) {
    const { data } = await this.$axios.get("/api/logout")
    if (data.ok) commit("SET_USER", null)
  },

  async handleToken({ commit }, token) {
    const res = await this.$axios.post("/api/stripe", token)
    commit("SET_USER", res.data)
  }
} */
