import React from "react";
import Breadcrumb from "../../elements/common/Breadcrumb";
import PageHelmet from "../../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import ImageFb from "../../elements/ui/ImageFb";
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";

const Articles = () => {
    return <React.Fragment>
        <PageHelmet pageTitle="Articles" />
        <Header
            headertransparent="header--transparent"
            colorblack="color--black"
            logoname="logo.png"
        />
        {/* Start Breadcrump Area */}
        <Breadcrumb title={"Articles"} />
        {/* End Breadcrump Area */}
        {/* <div className="container mt--80 mb--80">

            <h2 className="title">Society Articles</h2>
            <ul>
                <p>

                </p>
            </ul>

        </div> */}
        {/* Start Article  Details */}
        <div
            className="rn-blog-details article pt--110 pb--70 pr--10 pl--10 bg_color--1"
        >
            <div className="inner-wrapper">
                <div className="inner">
                    <h2 style={{ textAlign: "start" }}>
                        The entrepreneurship series II: Toni Enchev Small steps
                        towards big goals
                    </h2>
                    <p style={{ textAlign: "end", fontSize: '26px' }} className="mb--10">
                        Small steps towards big goals
                    </p>
                    <p className="author mb--20"> Written by Gergana Popova & Jordanka Daskalova      </p>
                    <ImageFb
                        className="mt--20 mb--40"
                        src="/assets/images/profile/toni/1.webp"
                        fallback="/assets/images/profile/toni/1.jpeg"
                        alt="Article Images"
                    />
                    <p className="mb--40">
                        On Saturday, 22nd of April, our second lecture of the Entrepreneurship Series for Bulgarian Society Groningen was held by Toni Enchev. He
                        successfully converted his abandoned family villa into a
                        place for unforgettable parties, doing it from scratch with
                        the help of family and friends …not only once but TWICE!
                    </p>
                    <div className="blog-single-list-wrapper d-flex flex-wrap">
                        <div className="thumbnail">
                            <ImageFb
                                className="w-100"
                                src="/assets/images/profile/toni/2.webp"
                                fallback="/assets/images/profile/toni/2.jpeg"
                                alt="BLog Images"
                            />
                        </div>
                        <div className="content">
                            <p>
                                Toni is a Bachelor student in Journalism from University
                                of Sofia in Bulgaria. His education is not in any way
                                related to business or entrepreneurship, yet he was able
                                to start a business, showing that this can be achieved
                                by anyone who has enough passion, patience and support.
                                Toni claims that this can be done by anyone with no
                                business knowledge and all that it is needed are “small
                                and gradual steps”.
                            </p>
                        </div>
                    </div>
                    <h2 className="mt--80">
                        TONI'S VILLA - The party never ends!
                    </h2>
                    <p>
                        {" "}
                        Toni"s main venture is “Toni's Villa”. Toni recalls from his
                        childhood that the villa was used initially as a family
                        vacation home for celebrating birthdays or other special
                        occasions. After a while the villa got abandoned.
                        Unfortunately, the lake that the villa was built next to got
                        drained by the government, and the place lost its charm.
                    </p>
                    <div className="blog-single-list-wrapper d-flex flex-wrap mt--80 mb--40">
                        <div className="thumbnail">
                            <ImageFb
                                className="w-100"
                                src="/assets/images/profile/toni/3.webp"
                                fallback="/assets/images/profile/toni/3.jpeg"
                                alt="BLog Images"
                            />
                        </div>
                        <div className="content">
                            <p>
                                For 4 years the villa and its surroundings were
                                gradually declining until they became completely
                                forgotten. This was until Toni decided to have a special
                                celebration for his 18th birthday and bring the villa
                                back to life.
                            </p>
                            <p>
                                With the help of his closest friends and family Toni
                                revived the place and threw the biggest party the villa
                                has seen in years!
                            </p>
                        </div>
                    </div>
                    <p className="mt--40">
                        Since Veni, a friend of Toni, had a great time at the
                        birthday party, he decided he wanted to have his own
                        birthday party at the villa too! At first Toni was unwilling
                        as he did not want to cause any damage to his parents' newly
                        renovated villa but after some convincing, Toni spoke with
                        his parents and he finally agreed. Little did Toni know that
                        this was the beginning of Toni's Villa. Veni was not the
                        only friend of Toni that wanted to throw a party at the
                        villa. Since there was a high demand for the place Toni
                        understood that things were getting more serious. Thе whole
                        venture began to look like an actual business.
                    </p>
                    <p>
                        Every company needs a logo, so Toni needed one as well! With
                        the help of his friends a logo was designed and that was the
                        first step of making Toni's Villa official. After that he
                        created an instagram page (@tonis_villa), which quickly
                        gained popularity. People outside of his friend circle began
                        to show interest in the villa as well, and soon he had an
                        event there every week.
                    </p>
                    <div className="images-container mb--40 mt--40">
                        <img
                            className="mb--20"
                            src="/assets/images/profile/toni/5.jpeg"
                            alt="BLog Images"
                        />
                        <img
                            src="/assets/images/profile/toni/6.jpeg"
                            alt="BLog Images"
                        />
                    </div>
                    <p>
                        In every business there is a moment of decline or
                        stagnation. This is exactly what Toni experienced as the
                        demand for the villa decreased. Toni was insightful enough
                        to approach the situation with some original ideas. Toni
                        decided to level up. Toni’s Villa would become a place where
                        theme party events would be hosted by Toni himself. In order
                        to do so he had to renovate and modernise the house over the
                        summer vacation by using his own money. He bought lights, a
                        sound system and even added graffiti made by a local artist
                        who happens to be his friend. To make it even more
                        professional another close friend of Toni took the role of a
                        house DJ. Thus the place was brought back to life.
                    </p>

                    <p className="mt--25 mt_sm--5">
                        For several months everything was going according to plan.
                    </p>
                    <div className="images-container">
                        <img
                            className="mb--20"
                            src="/assets/images/profile/toni/7.jpeg"
                            alt="BLog Images"
                        />
                        <img
                            src="/assets/images/profile/toni/8.jpeg"
                            alt="BLog Images"
                        />
                    </div>
                    <h2 className="mt--80 mb--20">
                        AND THEN EVERYTHING FELL APART
                    </h2>
                    <p className="mb--40">
                        On 14th of February while Toni was in class, he got a call
                        from his mother. She brought him the bad news that the villa
                        was robbed. His mother found the house completely empty. At
                        first he was in shock and denial. He could not believe her.
                        Arriving at the villa, he saw his mother sitting there,
                        crying. The villa was indeed empty - the sound system, the
                        furniture, the lights, everything Toni was working for for
                        the last 3 years was gone.
                    </p>
                    <div className="blog-single-list-wrapper d-flex flex-wrap">
                        <div className="thumbnail">
                            <ImageFb
                                src="/assets/images/profile/toni/9.webp"
                                fallback="/assets/images/profile/toni/9.jpeg"
                                alt="BLog Images"
                            />
                        </div>
                        <div className="content">
                            <p>
                                Toni was faced with a dilemma. Should he give up? Is
                                there even another option? Can he start from scratch
                                again?
                            </p>
                        </div>
                    </div>
                    <h2 className="mt--80 mb--20">THE COMEBACK</h2>
                    <p>
                        {" "}
                        Toni decided not to give up. He used the crysis he
                        experienced to propel the villa to new heights. With the
                        help of a friend Toni shot a video in which he told the
                        story of his robbery and the disappointment he experienced.
                        In the video he showed the 3 week process of fixing the
                        villa again from scratch for the second time! After the
                        release of the video he created the biggest party the villa
                        has ever seen. Toni’s Villa became more successful than
                        ever. After Toni’s bounce back the motto of the villa was
                        created - “The party never ends”
                    </p>
                    <div className="images-container">
                        <img
                            className="mb--20 mr--5"
                            src="/assets/images/profile/toni/10.jpeg"
                            alt="BLog Images"
                        />
                        <img
                            className="ml--5"
                            src="/assets/images/profile/toni/11.jpeg"
                            alt="BLog Images"
                        />
                    </div>
                    <p>
                        <a
                            href="https://www.instagram.com/tv/CbIkz_QFrQm/"
                            target="_blank"
                        >
                            Link to the video of robbery
                        </a>
                    </p>
                    <h2 className="mt--60">OTHER PROJECTS </h2>
                    <p className="center_text">
                        {" "}
                        Other businesses and projects Toni Enchev works on include:
                    </p>
                    <ul>
                        <li>
                            An art project called “It depends on us”, where abandoned
                            places get renovated with paintings with the faces of
                            important and influential Bulgarians from the past
                        </li>
                        <li>
                            Street interviews, which can be found on his Youtube
                            Channel
                        </li>
                        <li>
                            A podcast, called “Near the fireplace”, which can be found
                            in his YouTube channel{" "}
                            <a
                                href="https://www.youtube.com/@tonienchev/"
                                target="_blank"
                            >
                                (Check it here)
                            </a>
                        </li>
                        <li>
                            A clothing brand, namely “Yunak Brand”, promoted on
                            Instagram{" "}
                            <a
                                href=" https://www.instagram.com/yunak.brand/"
                                target="_blank"
                            >
                                (Check it here)
                            </a>
                        </li>
                    </ul>
                    <h2 className="mt--80 mb--20">A TAKE HOME MESSAGE </h2>
                    <p>
                        Toni’s story showcases that anything you want can be
                        achieved with consistency, patience, and the help of your
                        closest friends. His achievements can be attributed to
                        countless hours of work. He spent a lot of summers and
                        holidays working while others were resting, spending their
                        holidays abroad or simply partying at Sunny Beach. Toni was
                        brave enough to trust that his friends and family always had
                        his back and this trust paid off by creating a strong team
                        that made all of his ventures possible.
                    </p>
                    <p>
                        {" "}
                        You will always be faced with road blocks and different
                        dilemmas. For instance, whether you should give up or keep
                        going. The core take home message is you should know
                        yourself. You should know whether you want something or not.
                        You should know yourself well enough so you don’t fall in
                        the trap of lying to yourself that something is not for you
                        just because it is too difficult. On the other hand you
                        should also know yourself well enough to know when to stop,
                        to remember the reasons that made you start in the first
                        place and see if they are still valid. In other words you
                        should introspect and find your true passions.
                    </p>
                    <p>
                        {" "}
                        In summary, Tony believes that obstacles will inevitably
                        arise as you work towards your goals. However, it's up to
                        you to decide whether to give up or to persist and overcome
                        them.
                    </p>
                </div>
            </div>
        </div>
        {/* End Article  Details */}
        {/* Start Back To Top */}
        <div className="backto-top">
            <ScrollToTop showUnder={160}>
                <FiChevronUp />
            </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Footer />
    </React.Fragment>
}

export default Articles