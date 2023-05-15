// add ticket_link : '*link for the tickets' for outside ticket purchase
export const OPEN_SOCIETY_EVENTS = [
  // {
  //   title: "Board Game Night",
  //   description: "",
  //   bgImage: "3",
  //   date: "12.5.2023",
  //   time: "18:00",
  //   //Use the corrected date and time for changes in the date or time. Do not change the initial ones as it will make a new event in the DB
  //   correctedDate: "",
  //   correctedTime: "",
  //   where: "Xior, Oosterhamikkade",
  //   entry: 5,
  //   memberEntry: 4,
  //   including: 'including snacks',
  //   price_id: "price_1N3cxqIOw5UGbAo13X2dDxcz",
  //   memberPrice_id: "price_1N3cx2IOw5UGbAo1TChIppD6",
  //   activeMemberPrice_id: "price_1N5YPoIOw5UGbAo1NatmMkgn",
  //   text: [
  //     `Are you tired of constantly getting checkmated? This is your chance to pull an UNO Reverse Card and win the game! On 12.05 from 18:00 at Xior, Oosterhamikkade we are organizing a “Board Games Night”, where you will have the chance to show off your skills in Chess, Belot, Jenga, Uno and more. You can also bring your favourite game and prove to us that you're the best at it.*`,
  //     `Disclaimer: If you are not ready to fight with all your friends over the game, do you even want to win!?`,
  //     '...',
  //     `Писна ли ти все да си шах и мат? Това е твоят шанс да сложиш UNO Reverse Card и да победиш! На 12.05 от 18:00 в Xior, Oosterhamikkade организираме “Вечер на настолните игри”, където ще имаш възможността да покажеш уменията си на шах, белот, дженга, уно и други. Може да донесеш и любимата си игра и да покажеш на всички колко си добър в нея. Ако загубиш обаче, не се сърди, човече.*`,
  //     `ВНИМАНИЕ: Ако не си готов да се скараш с всичките си приятели по време на играта, изобщо готов ли си да победиш!?`,
  //     '*Special 4 euro price for members!/Специална цена от 4 евро за мембъри'],
  //   images: ["/assets/images/portfolio/portfolio-8"],
  //   thumbnail: "/assets/images/portfolio/portfolio-8",
  //   ticket_img: "/assets/images/tickets/ticket-2.jpg",
  // },
  {
    title: "TRAP WAVE",
    description: "",
    bgImage: "5",
    date: "FRIDAY June 2nd",
    time: "23:00",
    ticketTimer: '2023-06-16T10:00:00',
    // ticketPool: 100,
    //Use the corrected date and time for changes in the date or time. Do not change the initial ones as it will make a new event in the DB
    correctedDate: "",
    correctedTime: "",
    where: "Papengang 1, PEPR club",
    ticket_link: 'https://shop.eventix.io/20b148da-00b4-4e5a-a774-7082fb01dee1/tickets?shop_code=7qttqys2',
    text: [
      `Get ready, Groningen! 🔥 Prepare yourselves for an experience like no other! Bulgarian Society Groningen and club PEPR proudly present the wildest Trap party in town - it's going to be one for the books! 🚨`,
      `DRESS CODE : BLACK`,
      'DJ SETS: DJ Zander',
      `!!!But wait, there's more! We're giving away some amazing prizes to make the night even more unforgettable!`,
      `Enter our Instagram giveaway now for a chance to win 5x3 shots, 3x2 cocktails and 1 bottle + a VIP spot in the club for you and your friends! 🍹`,
      `Mark your calendars and get ready to turn up with us on June 2nd! 🔥`,],
    images: ["/assets/images/portfolio/portfolio-9", "/assets/images/events/trap-wave/2", "/assets/images/events/trap-wave/3"],
    thumbnail: "/assets/images/portfolio/portfolio-9",
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

];
