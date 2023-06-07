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

    cv: yup.mixed().required("Липсва файл").test(
        "fileType",
        "Моля въведете само .docx или .pdf",
        (value) => {
            if (!value) return true; // Allow empty values (no file selected)
            const allowedFileTypes = ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/pdf"]; // Array of allowed file types
            return allowedFileTypes.includes(value.type);
        }
    ),
    letter: yup.mixed().required("Липсва файл").test(
        "fileType",
        "Моля въведете само .docx или .pdf",
        (value) => {
            if (!value) return true; // Allow empty values (no file selected)
            const allowedFileTypes = ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/pdf"]; // Array of allowed file types
            return allowedFileTypes.includes(value.type);
        }
    ),
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
                <p>Екипът на Българското Общество в Грьонинген се разраства, затова търсим нови попълнения в нашия отбор. Ако си ентусиазиран и постоянен, обичаш да организираш събития и споделяш мисията на Обществото, кандидатствай за свободните ни позиции като изпратиш CV и кратко мотивационно писмо (до 300 думи).</p>
                <br />
                <p>Като активен член на Bulgarian Society Groningen, ще работиш в разрастващ и развиващ се екип от борд и комитети. Също така ще имаш намaления за събитията на BGSG, както и достъп до събития, организирани за целия екип, с цел обмяна на информация и сплотяване на екипа. </p>
                <br />
                <p style={{ color: 'red' }}>Срокът за кандидатстване е до 16/06/2023</p>
                <br />
                <p>Може да изберете повече от една позиция!</p>
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
                            const positions = []
                            const date = []

                            values.prSC && positions.push('PR of Social and Culture Committee')
                            values.chair && positions.push('Chair of Integration Committee')
                            values.copywriter && positions.push('Copywriter of Integration Committee')
                            values.treasurer && positions.push('Treasurer of Integration Committee')
                            values.prIC && positions.push('PR of Integration Committee')
                            positions.forEach((value, index) => {
                                formData.append(`positions[${index}]`, value);
                            });
                            if (values.option4) {
                                date.push('None of the given')
                            } else {
                                values.option1 && date.push('16th June');
                                values.option2 && date.push('17th June')
                                values.option3 && date.push('18th June')
                            }
                            date.forEach((value, index) => {
                                formData.append(`date[${index}]`, value);
                            });
                            formData.append("email", values.email);
                            formData.append("phone", values.phone)
                            formData.append("cv", values.cv);
                            formData.append("letter", values.letter
                            );
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
                            prSC: false,
                            chair: false,
                            copywriter: false,
                            treasurer: false,
                            prIC: false,
                            option1: false,
                            option2: false,
                            option3: false,
                            option4: false,
                            phone: '',
                            email: '',
                            cv: null,
                            letter: null,
                        }}
                    >
                        {({ setFieldValue }) => (
                            <Form
                                encType="multipart/form-data"
                                id="form"
                                className="pt--40"
                            >
                                <h2 >Отворени позиции: </h2>
                                <h3 className="mt--80" style={{ textDecoration: "underline" }}>Social and Culture Committee</h3>
                                <div className="hor_section_nospace mt--20">
                                    <Field
                                        style={{ maxWidth: "30px", margin: "10px" }}
                                        type="checkbox"
                                        name="prSC"
                                    ></Field>
                                    <h3 className="mt--20">PR</h3>
                                </div>
                                <p>Ако ти харесва да организираш събития като партита, вечери и социални събирания Social and Culture Committee е за теб! PR-a на този комитет ще отговаря за съдържание в социалните мрежи, свързано със събитията, както и за снимките по време на събитието. Опит със социални мрежи, Canva, Photoshop или с камера е бонус, но не е задължителен. </p>
                                <h3 style={{ textDecoration: "underline" }} className="mt--100">Integration Committee</h3>
                                <p>Ако обичш да се социализираш и искаш да помагаш на бъдещите български студенти в Грьонинген, това е комитетът за теб! Като част от Integration Committee ще участваш в Дни на отворените врати на университетите в града и ще представлявате BGSG на събития, събиращи различни асоциации в града. Също така, ще рганизираш събитие в началото на годината за всички нови членове и студенти. Освен това, комитетът ще отговаря за планиране и създаване на съдържание за сайта, което да помогне на бъдещите студенти да се интегрират (прим. статии със съвети и др.).</p>
                                <div className="hor_section_nospace mt--40">
                                    <Field
                                        style={{ maxWidth: "30px", margin: "10px" }}
                                        type="checkbox"
                                        name="chair"
                                    ></Field><h3 className="mt--20">Chair</h3>
                                </div>
                                <p>Като председател на Integration Committee ще кординираш функциите и задачите, които изпълнява комитета. Председателят е добър лидер, поема инициатива и мотивира екипът. </p>
                                <div className="hor_section_nospace mt--40">
                                    <Field
                                        style={{ maxWidth: "30px", margin: "10px" }}
                                        type="checkbox"
                                        name="copywriter"
                                    ></Field>
                                    <h3 className="mt--20">Copywriter</h3>
                                </div>
                                <p>Ако си организиран/а и обичаш да пишеш статии тази позиция е перфектна за теб! Твоята роля ще включва писане на протокол (minutes) по време на срещите с комитета и писане на статии за сайта, които помагат на новите студенти в града.
                                </p>
                                <div className="hor_section_nospace mt--40">
                                    <Field
                                        style={{ maxWidth: "30px", margin: "10px" }}
                                        type="checkbox"
                                        name="treasurer"
                                    ></Field>
                                    <h3 className="mt--20">Treasurer</h3>
                                </div>
                                <p>Ако умееш да боравиш с числа и да управляваш финанси тази позиция е перфектна за теб! Като ковчежник на Integration Committee ще разпределяш бюджета, с който разполагате, за да усигурите добро качество на събитията, които организирате. Пример за това би било подсигуряване на добър кетъринг по време на събитие, което привества потенциални студенти по време на Open Day. </p>
                                <div className="hor_section_nospace mt--40">
                                    <Field
                                        style={{ maxWidth: "30px", margin: "10px" }}
                                        type="checkbox"
                                        name="prIC"
                                    ></Field>
                                    <h3 className="mt--20">PR Integration Committee
                                    </h3>
                                </div>

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
                                            16ти юни
                                        </p>
                                    </div>
                                    <div className="hor_section_nospace">
                                        <Field
                                            style={{ maxWidth: "30px", margin: "10px" }}
                                            type="checkbox"
                                            name="option2"
                                        ></Field>
                                        <p>
                                            17ти юни
                                        </p>
                                    </div>
                                    <div className="hor_section_nospace">
                                        <Field
                                            style={{ maxWidth: "30px", margin: "10px" }}
                                            type="checkbox"
                                            name="option3"
                                        ></Field>
                                        <p>
                                            18ти юни
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
                                        <ErrorMessage
                                            className="error"
                                            name="cv"
                                            component="div"
                                        />
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-12 mt--20 file-input">
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
                                    </div>
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