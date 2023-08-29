import React from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FiX } from "react-icons/fi";
import Alert from "react-bootstrap/Alert";
import PageHelmet from "../../component/common/Helmet";
import HeaderTwo from "../../component/header/HeaderTwo";
import { useHttpClient } from "../../hooks/http-hook";
import Loader from "../../elements/ui/Loader";
import FooterTwo from "../../component/footer/FooterTwo";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import { useHistory } from "react-router-dom";

const schema = yup.object().shape({
    prSC: yup.boolean(),
    chair: yup.boolean(),
    copywriter: yup.boolean(),
    treasurer: yup.boolean(),
    prIC: yup.boolean(),

    option1: yup.boolean(),
    option2: yup.boolean(),
    option3: yup.boolean(),
    option4: yup.boolean(),

    phone: yup.string().min(8, 'Непълен телефон').required("Полето е задължително"),
    email: yup.string().email("Невалиден имейл").required('Полето е задължително'),

    q1: yup.string().required('Моля отговорете на въпроса').test('word-count', 'Надвишихте лимита от 200 думи', value => {
        const wordCount = value.trim().split(/\s+/).length;
        return wordCount <= 200;
    }),
    q2: yup.string().required('Моля отговорете на въпроса').test('word-count', 'Надвишихте лимита от 200 думи', value => {
        const wordCount = value.trim().split(/\s+/).length;
        return wordCount <= 200;
    }),
    q3: yup.string().required('Моля отговорете на въпроса').test('word-count', 'Надвишихте лимита от 200 думи', value => {
        const wordCount = value.trim().split(/\s+/).length;
        return wordCount <= 200;
    }),
    q4: yup.string().required('Моля отговорете на въпроса').test('word-count', 'Надвишихте лимита от 200 думи', value => {
        const wordCount = value.trim().split(/\s+/).length;
        return wordCount <= 200;
    }),

    cv: yup.mixed().notRequired().test(
        "fileType",
        "Моля въведете само .docx или .pdf",
        (value) => {
            if (!value) {
                return true;
            } // Allow empty values (no file selected)
            else {
                const allowedFileTypes = ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/pdf"]; // Array of allowed file types
                return allowedFileTypes.includes(value.type);
            }
        }
    ),
    // letter: yup.mixed().required("Липсва файл").test(
    //     "fileType",
    //     "Моля въведете само .docx или .pdf",
    //     (value) => {
    //         if (!value) return true; // Allow empty values (no file selected)
    //         const allowedFileTypes = ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/pdf"]; // Array of allowed file types
    //         return allowedFileTypes.includes(value.type);
    //     }
    // ),
})

const ActiveMember = (props) => {
    const { loading, sendRequest } = useHttpClient();

    const history = useHistory();

    const closeHandler = () => {
        props.setNotification(null);
    };

    return (
        <React.Fragment>
            <PageHelmet pageTitle="Active Member" />
            <HeaderTwo
                headertransparent="header--transparent"
                colorblack="color--black"
                logoname="logo.png"
            />

            <div className="container mt--200">
                <h2 className="center_text">Кандидатура за активни членове</h2>
            </div>
            {/* Start Options Area */}
            <div className="container mt--80 mb--80">
                <p>Екипът на Българското Общество в Грьонинген се разраства, затова търсим нови попълнения в нашия отбор. Ако си ентусиазиран и постоянен, обичаш да организираш събития и споделяш мисията на Обществото, кандидатствай за свободните ни позиции като отговориш на въпросите (до 200 думи на въпрос) и, ако имаш желание, ни изпратиш CV (до 300 думи).</p>
                <br />
                <p>Като активен член на Bulgarian Society Groningen, ще работиш в разрастващ и развиващ се екип от борд и комитети. Също така ще имаш намaления за събитията на BGSG, както и достъп до събития, организирани за целия екип, с цел обмяна на информация и сплотяване на екипа. </p>
                <br />
                <p style={{ color: 'red' }}>Срокът за кандидатстване е 31/08/2023</p>
            </div>


            {/* End Options Area */}
            {/* Start Form Area */}

            <div className="blog-comment-form pb--120 bg_color--1">
                <div className="container">
                    <Formik
                        className="inner"
                        validationSchema={schema}
                        onSubmit={async (values) => {
                            const formData = new FormData();
                            const positions = ['PR of Integration Committee']
                            const date = []

                            // values.prIC && positions.push('PR of Integration Committee')
                            // positions.forEach((value, index) => {
                            //     formData.append(`positions[${index}]`, value);
                            // });
                            formData.append('positions', positions);

                            if (values.option4) {
                                date.push('None of the given')
                            } else {
                                values.option1 && date.push('1st September');
                                values.option2 && date.push('2nd September')
                                values.option3 && date.push('3rd September')
                            }
                            date.forEach((value, index) => {
                                formData.append(`date[${index}]`, value);
                            });
                            formData.append("email", values.email);
                            formData.append("phone", values.phone)
                            formData.append("cv", values.cv);
                            // formData.append("letter", values.letter);
                            formData.append('questions',
                                [
                                    values.q1,
                                    values.q2,
                                    values.q3,
                                    values.q4,
                                ]
                            )
                            try {
                                const responseData = await sendRequest(
                                    "user/active-member",
                                    "POST",
                                    formData
                                );
                                props.setNotification(
                                    <Alert className="error_panel" variant="success">
                                        <div className="action_btns">
                                            <h3>Благодарим за интереса!</h3>
                                            <FiX className="x_icon" onClick={closeHandler} />
                                        </div>
                                        <p>
                                            Вашата заявка беше успешно изпълнента и нямаме търпение да се свържем с вас. Очаквайте ни!
                                        </p>
                                    </Alert>
                                );
                                history.push("/");
                                setTimeout(() => closeHandler(), 5000);
                            } catch (err) {
                            }

                        }}
                        initialValues={{
                            option1: false,
                            option2: false,
                            option3: false,
                            option4: false,
                            phone: '',
                            email: '',
                            cv: null,
                            // letter: null,
                            q1: '',
                            q2: '',
                            q3: '',
                            q4: '',

                        }}
                    >
                        {({ setFieldValue }) => (
                            <Form
                                encType="multipart/form-data"
                                id="form"
                                className="pt--40"
                            >
                                <h2 >Отворени позиции: </h2>
                                <h3 className="mt--20">PR Integration Committee
                                </h3>
                                <p>Ако често прекарваш време в социалните мрежи или обичаш да създаваш визуално съдържание, тази позиция е за теб! Като PR в Integration Committee ще отговаряш за присъствието ни в социалните мрежи, свързано с дейността на комитета. Това включва създаване на съдържание като постове, reels, strories и правене на снимки по време на събитията. Опит със социални мрежи, Canva, Photoshop или с камера е бонус, но не е задължителен. </p>
                                <h3 className="mt--100">В кой/кои от дните си свободен/а за интервю? </h3>
                                <div>
                                    <div className="hor_section_nospace">
                                        <Field
                                            style={{ maxWidth: "30px", margin: "10px" }}
                                            type="checkbox"
                                            name="option1"
                                        ></Field>
                                        <p>
                                            1ви Септември
                                        </p>
                                    </div>
                                    <div className="hor_section_nospace">
                                        <Field
                                            style={{ maxWidth: "30px", margin: "10px" }}
                                            type="checkbox"
                                            name="option2"
                                        ></Field>
                                        <p>
                                            2ри Септември
                                        </p>
                                    </div>
                                    <div className="hor_section_nospace">
                                        <Field
                                            style={{ maxWidth: "30px", margin: "10px" }}
                                            type="checkbox"
                                            name="option3"
                                        ></Field>
                                        <p>
                                            3ти Септември
                                        </p>
                                    </div>
                                    <div className="hor_section_nospace">
                                        <Field
                                            style={{ maxWidth: "30px", margin: "10px" }}
                                            type="checkbox"
                                            name="option4"
                                        ></Field>
                                        <p>
                                            Нито един от посочените
                                        </p>
                                    </div>

                                </div>
                                <h3 className="mt--80">Контакти</h3>
                                <div className="row ">
                                    <div className="col-lg-6 col-md-12 col-12">
                                        <Field type="email" placeholder="Email" name="email" />
                                        <ErrorMessage
                                            className="error"
                                            name="email"
                                            component="div"
                                        />
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-12">
                                        <Field
                                            type="text"
                                            placeholder="Phone"
                                            name="phone"
                                        ></Field>
                                        <ErrorMessage
                                            className="error"
                                            name="phone"
                                            component="div"
                                        />
                                    </div>
                                </div>
                                <h3 className="mt--80 mb--20">Въпроси</h3>
                                <div className="row ">
                                    <div className="col-lg-6 col-md-12 col-12 mt--40">
                                        <h4>1. Защо искаш да станеш част от Integration Committee и от Bulgarian Society Groningen? </h4>
                                        <Field as='textarea' placeholder="Въпрос 1" name="q1" />
                                        <ErrorMessage
                                            className="error"
                                            name="q1"
                                            component="div"
                                        />
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-12 mt--40">
                                        <h4>2. Имаш ли опит със създаване на съдържание за социалните мрежи, canva/photoshop, или друг опит, който смяташ за полезен за тази позиция?
                                        </h4>
                                        <Field
                                            as='textarea'

                                            placeholder="Въпрос 2"
                                            name="q2"
                                        ></Field>
                                        <ErrorMessage
                                            className="error"
                                            name="q2"
                                            component="div"
                                        />
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-12 mt--40">
                                        <h4>3. С какво би допринесъл към комитета и към BGSG като цяло?
                                        </h4>
                                        <Field as='textarea' placeholder="Въпрос 3" name="q3" />
                                        <ErrorMessage
                                            className="error"
                                            name="q3"
                                            component="div"
                                        />
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-12 mt--40">
                                        <h4>4. Какви събития би искал/а да видиш в BGSG?
                                        </h4>
                                        <Field
                                            as='textarea'

                                            placeholder="Въпрос 4"
                                            name="q4"
                                        ></Field>
                                        <ErrorMessage
                                            className="error"
                                            name="q4"
                                            component="div"
                                        />
                                    </div>
                                </div>
                                <div className="row mt--100">
                                    <div className="col-lg-6 col-md-12 col-12 mt--20 file-input">
                                        <h3>Качи CV</h3>
                                        <Field name="cv">
                                            {({ field }) => (
                                                <div>
                                                    <input
                                                        type="file"
                                                        accept=".pdf,.docx"
                                                        onChange={(event) => {
                                                            setFieldValue("cv", event.target.files[0]);
                                                        }}
                                                    />
                                                </div>
                                            )}
                                        </Field>
                                        <p>*Не е задължително</p>
                                        <ErrorMessage
                                            className="error"
                                            name="cv"
                                            component="div"
                                        />
                                    </div>
                                    {/* <div className="col-lg-6 col-md-12 col-12 mt--20 file-input">
                                        <h3>Качи мотивационно писмо</h3>
                                        <Field name="letter">
                                            {({ field }) => (
                                                <div>
                                                    <input
                                                        type="file"
                                                        accept=".pdf,.docx"
                                                        onChange={(event) => {
                                                            setFieldValue("letter", event.target.files[0]);
                                                        }}
                                                    />
                                                </div>
                                            )}
                                        </Field>
                                        <ErrorMessage
                                            className="error"
                                            name="letter"
                                            component="div"
                                        />
                                    </div> */}
                                </div>
                                <button
                                    disabled={loading}
                                    type="submit"
                                    className="rn-button-style--2 btn-solid mt--80"
                                >
                                    {loading ? <Loader /> : <span>Изпрати Кандидатура</span>}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            {/* End Form Area */}
            {/* Start Footer Style  */}
            <FooterTwo />
            {/* End Footer Style  */}
            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
        </React.Fragment >
    );
};

export default ActiveMember