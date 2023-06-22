// add ticket_link : '*link for the tickets' for outside ticket purchase
export const OPEN_SOCIETY_EVENTS = [
  // {
  //   title: "Picnic",
  //   description: "Let's welcome the summer together",
  //   bgImage: "11",
  //   date: "SATURDAY June 17th",
  //   time: "18:00",
  //   ticketTimer: '2023-06-16T23:59:00',
  //   ticketPool: 50,
  //   //Use the corrected date and time for changes in the date or time. Do not change the initial ones as it will make a new event in the DB
  //   correctedDate: "",
  //   correctedTime: "",
  //   where: `Stadspark`,
  //   entry: 6,
  //   memberEntry: 5,
  //   including: ['(discounted including food and drinks)', '(including food and drinks)'],
  //   price_id: 'price_1NGRi6IOw5UGbAo16vGdrc26',
  //   memberPrice_id: 'price_1NGReLIOw5UGbAo1wBtZJuDs',
  //   activeMemberPrice_id: 'price_1NHoe8IOw5UGbAo15hizwFzC',
  //   freePass: ["elenamateva@abv.bg", "mnanova6@gmail.com", "tsvetina.arabadzhieva@gmail.com", 'mariakristi.radeva@gmail.com'],
  //   extraInputs: true,
  //   text: [
  //     `📣 We are thrilled to announce our sizzling summer barbecue picnic! It's time to gather your friends, soak up the good vibes, and celebrate the arrival of warm days in the most delicious way possible.`,
  //     `Don't forget your favourite picnic blanket and feel free to bring any games or activities that will add to the day!`,
  //     '...',
  //     `Призоваваме всички любители на слънцето и барбекюто! 🌞 Да посрещнем лятото заедно!`,
  //     `📣Заповядайте на българска скара, приготвена на открито! `,
  //     `Поканете своите приятели , а ние ще ви очакваме ви с усмивки и готовност за забавление.`,
  //     `Не забравяйте любимото си одеяло за пикник и не се колебайте да носите всякакви игри или дейности, които ще допринесат за настроението!`,
  //   ],
  //   ticket_img: '/assets/images/tickets/ticket-3.jpg',
  //   images: ["/assets/images/events/picnik/picnic-3", "/assets/images/events/picnik/picnik-5", "/assets/images/events/picnik/picnic-6"],
  //   thumbnail: "/assets/images/portfolio/portfolio-10",
  // },
  {
    title: "Dodgeball",
    description: "Show your skills",
    bgImage: "6",
    date: "FRIDAY June 23rd",
    time: "13:00",
    ticketTimer: '2023-06-23T11:00:00',
    ticketPool: 100,
    //Use the corrected date and time for changes in the date or time. Do not change the initial ones as it will make a new event in the DB
    correctedDate: "",
    correctedTime: "",
    where: `ACLO sports center`,
    entry: 5,
    memberEntry: 4,
    price_id: 'price_1NIuqkIOw5UGbAo1q7e650Xi',
    memberPrice_id: 'price_1NIupxIOw5UGbAo11X4eZmOe',
    activeMemberPrice_id: 'price_1NIupxIOw5UGbAo1KWfIQd0w',
    freePass: ["ddaskalova123@gmail.com", "gergana.savova.popova@gmail.com", 'milenaradoytsevami@gmail.com'],
    extraInputs: false,
    text: [
      `When was the last time you played Dodgeball? Maybe around 7th grade…in Gym class… at the end of the school year…
      `,
      `
      What better way to unwind after this academic year than with a final Gym class playing Dodgeball?
      `,
      `The tournament will take place on June 23rd at 13:00 o’clock at the ACLO sports center, where we will have fun and kick off the summer season!
      `,
      `The teams will be formed on-site, and players from the winning team will receive individual prizes. Don't miss this unique opportunity to have a good laugh, just like in the good old days, with a game of Dodgeball. Sign up now!☝️☝️☝️
      `,
      '...',
      `Кога последно сте играли на Народна топка? Някъде там в миналото… около седми клас… в час по физизческо… в края на учебната година…
      `,
      `Какъв по добър начин да разпуснеш след тази академчна година от един последен час по физическо с Народна топка? 
      `,
      `Турнирът ще се проведе на 23 юни от 13:00 часа в спортния център на Акло, където ще можем да се позабавляваме и да открием летния сезон! 

      `,
      `Отборите ще бъдат сформирани на място, а играчите от печелившия отбор ще получат индивидуални награди. Не пропускайте тази уникална възможност да се посмеете, както в доброто старо време, с игра на народна топка, и се запишете още сега! ☝️☝️☝️
      `,
    ],
    ticket_img: '/assets/images/tickets/ticket-4.jpg',
    images: ["/assets/images/events/dodgeball/dodgeball-1", "/assets/images/events/dodgeball/dodgeball-2"],
    thumbnail: "/assets/images/portfolio/portfolio-11",
  },
];

export const OPEN_NON_SOCIETY_EVENTS = [
  {
    title: "Barista Course",
    description: "Master the profession of a barista",
    bgImage: "2",
    when: "TBD",
    //Use the corrected when for changes in the date or time. Do not change the initial ones as it will make a new event in the DB
    correctedWhen: "",
    where: "TBD",
    entry: 30,
    memberEntry: 5,
    text: [
      "Join our Barista Course led by Henry Daniels, owner of Revista Coffee and become a pro barista in no time!",
      "As a member of the Bulgarian Society Groningen, you'll get a special discount. The original price of 30 euros is now only 20 euros for members. You will be contacted by Henry to find a suitable date for the course. The course is usually held Tuesday and Wednesday mornings from 10-12. After finishing the course you will be able to receive a reference letter for a future employer. You will pay for the course in person!",
    ],
    images: ["/assets/images/portfolio/portfolio-7"],
    thumbnail: "/assets/images/portfolio/portfolio-7",
  },
];

export const EVENT_REFLECTION_DETAILS = [
  {
    title: "Bulgarian Dinner",
    bgImage: "12",
    date: "13th January",
    attendance: "60",
    comments: "20",
    text: [
      `Our first event - a traditional Bulgarian Dinner consisting of 3 courses. The starter was tarator - a "cold soup" made with yogurt and cucumber, the main course was musaka and we finished with chocolate cake for dessert.`,
    ],
    images: [
      { id: "1", image: "bulgarian-dinner/06", text: "" },
      { id: "2", image: "bulgarian-dinner/09", text: "" },
      { id: "3", image: "bulgarian-dinner/10", text: "" },
    ],
  },
  {
    title: "Trifon Zarezan",
    secondTitle: " | Wine Tasting",
    bgImage: "13",
    date: "14th February",
    attendance: "30",
    comments: "20",
    text: [
      `This event was available only for our members as a welcome event. We celebrated Trifon Zarezan together with a wine tasting event. It involved sampling and evaluating different types of wines - 3 red wines and 2 white wines. We put our guests in groups of 2 and they had a list of wines and descriptions which they had to put together after tasting each of the wines. The group with the most right answers won a prize which was a special wine bought from Paris.`,
    ],
    images: [
      { id: "1", image: "wine-tasting/01", text: "" },
      { id: "2", image: "wine-tasting/03", text: "" },
      { id: "3", image: "wine-tasting/06", text: "" },
    ],
  },
  {
    title: "Freedom Fest",
    bgImage: "14",
    date: "3rd March",
    attendance: "90",
    comments: "50",
    text: [
      `We celebrated the independence day of Bulgaria together by hosting a freedom fest. The event was a party with Bulgarian music which was organized for anyone who wanted to get a taste of the Bulgarian culture.`,
    ],
    images: [
      { id: "2", image: "freedom-fest/02", text: "" },
      { id: "4", image: "freedom-fest/04", text: "" },
      { id: "12", image: "freedom-fest/12", text: "" },
      { id: "13", image: "freedom-fest/13", text: "" },
    ],
  },
  {
    title: "The Entrepreneur Series II",
    bgImage: "4",
    date: "22nd April",
    attendance: "25",
    comments: "25",
    text: [
      `Toni, a 21-year old student and entrepreneur from Bulgaria, was our guest in our Entrepreneurship series where people share their stories about developing their own projects and businesses. Toni has experience with organizing parties at Toni’s Villa, has his own clothing brand - Yunak Brand, as well as a successful podcast and a Youtube channel (@tonienchev). He shared his experience and motivated students to follow their passion by taking small steps towards bigger goals. 
      `,
    ],
    images: [{ id: "2", image: "entrepreneur-series/ent-II", text: "" }],
  },
  {
    title: "The Entrepreneur Series I",
    bgImage: "4",
    date: "16th March",
    attendance: "17",
    comments: "15",
    text: [
      `Henri holds a Bachelors Degree in Philosophy and Political Science and will be Graduating with Honours and an LLB in International and European Technology Law in June 2023. Beside his studies, he has managed and owns two successful businesses - Revista Coffee and Moonshadow Sailing. He has been the VP for marketing and the President of the European Law Student Association, Groningen. His areas of expertise include small-business management, critical thinking, public speaking, and competition law. His lecture was about his legacy so far, how he founded his business and the advice he wanted to give to any current and future entrepreneur. `,
    ],
    images: [{ id: "1", image: "entrepreneur-series/ent-I", text: "" }],
  },
  {
    title: "Easter Lunch",
    bgImage: "18",
    date: "16th April",
    attendance: "25",
    comments: "10",
    text: [
      `To celebrate the Orthodox Easter we organized an Easter Lunch including a chicken soup, sarmi, snow white salad and kozunak - traditional Bulgarian dishes. Part of the event was also the Eastern tradition of painting eggs.`,
    ],
    images: [
      { id: "1", image: "easter/1", text: "" },
      { id: "2", image: "easter/2", text: "" },
      { id: "3", image: "easter/3", text: "" },
    ],
  },
  {
    title: "Board Game Night",
    bgImage: "3",
    date: "12th May",
    attendance: "25",
    comments: "10",
    text: [
      `Our first website event fully organized by one of our committees - the Board Game Night. There were snacks, many games, drinks and of course - lots of fun. Big thanks again to our Personal Development and Sports committee and big thanks to all of you who came. If you were unfortunate to have missed it, check our website and our social media regularly for more events!`,
    ],
    images: [
      { id: "1", image: "board-game/1", text: "" },
      { id: "2", image: "board-game/2", text: "" },
      { id: "3", image: "board-game/3", text: "" },
    ],
  },

];
