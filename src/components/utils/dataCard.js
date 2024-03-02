const dataCard = [
  {
    material: 'пластик',
    accessories: 'Braun',
    table: 'Постформинг',
    price: '29 200',
    newPrice: '19 990 ₽ м./п.',
    image: 'https://avatars.mds.yandex.net/i?id=e977bb19d9431b2d7a48b37a215031e5_sr-9106775-images-thumbs&n=13',
    id: '1'
  },
  {
    material: 'Крашенный МДФ и шпонированный МДФ',
    accessories: 'Fennel',
    table: 'Компакт-плита',
    price: '28 620',
    newPrice: '21 200 ₽ м./п.',
    image: 'https://avatars.mds.yandex.net/i?id=e547359c061853bef6f303cd73fdee4b-4578804-images-thumbs&n=13',
    id: '2'
  },
  {
    material: 'Пластик и шпонированный МДФ',
    accessories: 'Blum',
    table: 'Постформинг',
    price: '32 900',
    newPrice: '24 400 ₽ м./п.',
    image: 'https://avatars.mds.yandex.net/i?id=79c4a1f3638a6dec51876a9d448ecf8b_sr-5584275-images-thumbs&n=13',
    id: '3'
  },
  {
    material: 'пластик',
    accessories: 'Braun',
    table: 'Постформинг',
    price: '21 700',
    newPrice: '19 990 ₽ м./п.',
    image: 'https://avatars.mds.yandex.net/i?id=1bfffa02e18161b926e127f18c9a41cef50d6317-12165746-images-thumbs&n=13',
    id: '4'
  },
  {
    material: 'Массив и шпонированный МДФ',
    accessories: 'Blum',
    table: 'Компакт-плита',
    price: '61 100',
    newPrice: '45 300 ₽ м./п.',
    image: 'https://avatars.mds.yandex.net/i?id=0d8997514e7f6ca525199e1fea0fbc2b05df3d13-6917684-images-thumbs&n=13',
    id: '5'
  },
  {
    material: 'Крашенный МДФ и шпонированный МДФ',
    accessories: 'Hettich',
    table: 'Постформинг',
    price: '34 600',
    newPrice: '25 700 ₽ м./п.',
    image: 'https://avatars.mds.yandex.net/i?id=defe0ac790da6087a2b816b0ba3e7154-4590460-images-thumbs&n=13',
    id: '6'
  },
  {
    material: 'Крашенный МДФ',
    accessories: 'Hettich',
    table: 'Искусственный камень',
    price: '32 200',
    newPrice: '23 900 ₽ м./п.',
    image: 'https://avatars.mds.yandex.net/i?id=83c3221f9a097fde469f275f6ab188d0_sr-8377138-images-thumbs&n=13',
    id: '7'
  },
  {
    material: 'Крашенный МДФ',
    accessories: 'Hettich',
    table: 'Компакт панель',
    price: '26 850',
    newPrice: '19 990 ₽ м./п.',
    image: 'https://avatars.mds.yandex.net/i?id=db0e98a82ea272ee60d79bb2403c5512fd46d9b4-8272366-images-thumbs&n=13',
    id: '8'
  },
  {
    material: 'Крашенный МДФ',
    accessories: 'Blum',
    table: 'Постформинг',
    price: '27 300',
    newPrice: '20 200 ₽ м./п.',
    image: 'https://avatars.mds.yandex.net/i?id=6fd8ac41c20b7386493665fa295f82aa_sr-5669589-images-thumbs&n=13',
    id: '9'
  },
];

const designerData = [
  {
    id: '1',
    name: 'Юлия',
    position: 'Дизайнер кухонь',
    employment: '2013',
    image: 'https://plus.unsplash.com/premium_photo-1708275305451-1c28a9d2b29c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '2',
    name: 'Екатерина',
    position: 'Дизайнер кухонь',
    employment: '2011',
    image: 'https://images.unsplash.com/photo-1708616748538-bdd66d6a9e25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NXx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '3',
    name: 'Светлана',
    position: 'Дизайнер кухонь',
    employment: '2015',
    image: 'https://images.unsplash.com/photo-1708607728910-b00e0c1be0af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDl8fHxlbnwwfHx8fHw%3D'
  },
];

const reviewData = [
  {
    id: 1,
    date: '12.10.2021',
    name: 'Ирина Егорова',
    rating: 5,
    text: 'Заказали кухню в свою квартиру. Дизайн и качество нас полностью устраивает. С доставкой проблем не возникло, всё привезли без задержки и полный комплект, ничто не повредилось, опытные сборщики  быстро и качественно собрали всю кухню. Кроме того компания сделала нам хорошую скидку, отношение к клиентам очень теплое, спасибо вам.',
    userImage: 'https://interesnoewmire.ru/wp-content/uploads/krasivye-devushki-na-chetverg-chast-3-46-foto-cefbb3f.jpg',
    kitchenImage: 'https://avatars.mds.yandex.net/i?id=35633f4d3810c241fac33967aaf498005e2f870a-12574745-images-thumbs&n=13'
  },
  {
    id: 2,
    date: '03.08.2021',
    name: 'Елена Федорова',
    rating: 5,
    text: 'Компанию «Немецкий стандарт» нашли с мужем в интернете случайно. После  общения с дизайнером, я решила заказать кухню именно там! Впечатлила работа монтажников Евгения и Александра!  Мало того, что они отлично знают своё дело, но также очень вежливы в общении. При установке кухни  учли все мои пожелания, работу выполнили быстро ,чисто и качественно! Пользуюсь кухней уже год и получаю огромное удовольствие.',
    userImage: 'https://yobte.ru/uploads/posts/2020-08/obajatelnye-devushki-50-foto-10.jpg',
    kitchenImage: 'https://avatars.mds.yandex.net/i?id=8836f473d86543ebc0fbb54a16ea46cebb2b8829-12519862-images-thumbs&n=13'
  },
  {
    id: 3,
    date: '12.05.2021',
    name: 'Николай Гриценко',
    rating: 5,
    text: 'Пересмотрев большую часть компаний по изготовлению кухонь мы с женой  наткнулись на компанию "Немецкий стандарт", г. Краснодар. Пользуемся кухней вот уже на протяжении четырех  месяцев.  На сегодняшний день ни с какими проблемами не сталкивались, наоборот - стало более уютно и приятно проводить время на кухне. Получилось все, как хотели.',
    userImage: 'https://proprikol.ru/wp-content/uploads/2020/10/kartinki-krasivyh-muzhchin-2.jpg',
    kitchenImage: 'https://avatars.mds.yandex.net/i?id=89f791085f555aafa419577490edffe36611f0a7-12615441-images-thumbs&n=13'
  },
  {
    id: 4,
    date: '25.11.2020',
    name: 'Ольга Юхневич',
    rating: 5,
    text: 'Долго подыскивали где заказать мебель для кухни. Случайно нашли  "Немецкий стандарт" поинтересовались смогут ли изготовить кухню как мы хотим. Сделали у них заказ. Выполнено все в срок ( и даже чуть- чуть раньше), качественно с учетом  всех наших пожеланий по дизайну и размерам. Большое спасибо. Отдельное спасибо дизайнеру Юлии за  советы по подбору материалов и фурнитуры. Все вежливы, учтивы, корректны и доброжелательны.',
    userImage: 'https://shutniks.com/wp-content/uploads/2019/12/Devushka_v_shlyape_osenyu_7_07132654.jpg',
    kitchenImage: 'https://avatars.mds.yandex.net/i?id=6b9203e47156c176cf5e5a29c11fbf3c0c7e9b88-10639375-images-thumbs&n=13'
  },
  {
    id: 5,
    date: '16.09.2020',
    name: 'Виктор Степанов',
    rating: 5,
    text: 'Решили заказать кухонный гарнитур для небольшой кухни. Среди огромного количества фирм, выбрали компанию "Немецкий стандарт" в г. Краснодар, сейчас с уверенностью можем сказать, что не ошиблись! Благодарны за качественное изготовление мебели. Дизайнер Оксана учла все пожелания. Парни по установке работают быстро, чисто, тихо! Спасибо большое всему коллективу! В дальнейшем будем сотрудничать только с Вами!',
    userImage: 'https://belon.club/uploads/posts/2023-04/1681531491_belon-club-p-obichnii-muzhchina-pinterest-1.jpg',
    kitchenImage: 'https://avatars.mds.yandex.net/i?id=085874acfc38b571fb721db8f018fab3e99ecfc7-10966719-images-thumbs&n=13'
  },

]

export { dataCard, designerData, reviewData };