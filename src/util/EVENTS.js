// add ticket_link : '*link for the tickets' for outside ticket purchase
export const OPEN_SOCIETY_EVENTS = [
  // {
  //   visible: true,
  //   subEvent: {
  //     description: 'You can purchase ONLY the dinner from this event separately - just click below!',
  //     link: '/event-details/Introduction%20Week%20(DINNER%20ONLY)'
  //   },
  //   title: "Introduction Week (FULL PASS)",
  //   description: "Welcome to the new term",
  //   bgImage: "21",
  //   date: "15th-19th September",
  //   time: "Check Program",
  //   ticketTimer: '2023-09-15T04:59:00',
  //   ticketLimit: 60,
  //   //Use the corrected date and time for changes in the date or time. Do not change the initial ones as it will make a new event in the DB
  //   correctedDate: "",
  //   correctedTime: "",
  //   where: `Introduction Lecture - Lust |
  //   City walk - Starting point in front of Lust |
  //   Dinner - Wijkrestaurant De Duindoorn, Duindoornstraat 91, 9741 NP |
  //   Party - Club Sunny Beach`,
  //   entry: 15,
  //   // memberEntry: 5,
  //   including: ['', ''],
  //   price_id: 'price_1NmbxbIOw5UGbAo1SSvjARlW',
  //   memberPrice_id: 'price_1NmbxbIOw5UGbAo1SSvjARlW',
  //   activeMemberPrice_id: 'price_1NmbxbIOw5UGbAo1SSvjARlW',
  //   freePass: ["elenamateva@abv.bg", "vladislavmarinov3142@gmail.com", "z.tsenovska@gmail.com", "mnanova6@gmail.com", "tsvetina.arabadzhieva@gmail.com", 'mariakristi.radeva@gmail.com'],
  //   extraInputs: false,
  //   text: [
  //     `Welcome (back😉) to Groningen!`,
  //     `We are thrilled to announce our Intro week package, including four events spanning three incredible days! Let’s kick off the new academic year together!`,
  //     '...',
  //     `Добре дошли (отново😉) в Грьонинген!`,
  //     `Ние сме въодушевени да обявим нашия пакет за Въведителната седмица, включващ четири събития, простиращи се през три невероятни дни! Да започнем заедно новата учебна година!`,
  //   ],
  //   ticket_img: '/assets/images/tickets/ticket-5.jpg',
  //   images: ["/assets/images/events/intro-week/2", "/assets/images/events/intro-week/3"],
  //   thumbnail: "/assets/images/portfolio/portfolio-12",
  // },
  {
    visible: true,
    title: "International Volleyball Tournament",
    // newTitle: 'Bulgarian Dinner',
    description: " Calling all volleyball enthusiasts!",
    bgImage: "16",
    date: "21st October",
    time: "13:00",
    ticketTimer: '2023-10-21T12:00:00',
    ticketLimit: 48,
    //Use the corrected date and time for changes in the date or time. Do not change the initial ones as it will make a new event in the DB
    correctedDate: "",
    correctedTime: "",
    where: `Sportcentum ACLO`,
    entry: 6,
    memberEntry: 5,
    // including: ['(discounted including menu)', '(including menu)'],
    price_id: 'price_1NzZMgIOw5UGbAo1mTC5uNbC',
    memberPrice_id: 'price_1NzZNSIOw5UGbAo1yvxN3ZhC',
    activeMemberPrice_id: 'price_1NzZO3IOw5UGbAo1SOwKE8SK',
    freePass: ['vlady1002@abv.bg'],
    extraInputs: false,
    text: [
      `We're thrilled to announce our upcoming International Volleyball Tournament! `,
      `Whether you're a pro or just looking for some fun, this is the event you won't want to miss. You will have the chance to have a lot of fun and compete with your team for a prize fund of 90 euros! The prize will be divided between the members of the winning team.`,
      `You can assemble your own team of six and come together or be assigned to a team upon your arrival. The rules of the game will be presented right before the game and will be printed out and available to revisit throughout the whole gameplay. Please make sure you arrive 10 minutes before the starting hour!`,
    ],
    ticket_img: '/assets/images/tickets/ticket-7.jpg',
    images: ["/assets/images/portfolio/portfolio-14"],
    thumbnail: "/assets/images/portfolio/portfolio-14",
  },
];

export const OPEN_NON_SOCIETY_EVENTS = [
  // {
  //   title: "Barista Course",
  //   description: "Master the profession of a barista",
  //   bgImage: "2",
  //   when: "TBD",
  //   //Use the corrected when for changes in the date or time. Do not change the initial ones as it will make a new event in the DB
  //   correctedWhen: "",
  //   where: "TBD",
  //   entry: 30,
  //   memberEntry: 5,
  //   text: [
  //     "Join our Barista Course led by Henry Daniels, owner of Revista Coffee and become a pro barista in no time!",
  //     "As a member of the Bulgarian Society Groningen, you'll get a special discount. The original price of 30 euros is now only 20 euros for members. You will be contacted by Henry to find a suitable date for the course. The course is usually held Tuesday and Wednesday mornings from 10-12. After finishing the course you will be able to receive a reference letter for a future employer. You will pay for the course in person!",
  //   ],
  //   images: ["/assets/images/portfolio/portfolio-7"],
  //   thumbnail: "/assets/images/portfolio/portfolio-7",
  // },
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
  {
    title: "Dodgeball",
    bgImage: "6",
    date: "23rd June",
    attendance: "25",
    comments: "10",
    text: [
      `A night of sweat, sportsmanship, awards and tons of fun. This event, hosted again by one of our beloved committee, gathered players that enjoyed a quick tournament of dodgeball. Of course, there was an MVP award and motivation for the others to prepare better for the next one! `,
    ],
    images: [
      { id: "1", image: "dodgeball/1", text: "" },
      { id: "2", image: "dodgeball/2", text: "" },
      { id: "3", image: "dodgeball/3", text: "" },
    ],
  },
  {
    title: "Introduction Dinner 2023",
    bgImage: "22",
    date: "16th September",
    attendance: "30", 
    comments: "10",
    text: [
      `Bulgarian Society Groningen starts the new term with a 3-day event for newcomers and seniors. We welcomed everyone for a traditional Bulgarian dinner (our now tradition as we our first event that started everything) and we were pleased to introduce new active members, new board members and meet the juniors with people to build their network with. We believe everyone had good time and you can definitely expect more for the upcoming year!`,
    ],
    images: [
      { id: "1", image: "intro-week/4", text: "" },
      { id: "2", image: "intro-week/5", text: "" },
      { id: "3", image: "intro-week/6", text: "" },
    ],
  },

];
