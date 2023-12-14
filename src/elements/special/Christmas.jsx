import React, { useState, Fragment } from "react";
import { useHttpClient } from "../../hooks/http-hook";
import Loader from "../../elements/ui/Loader";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FiX } from "react-icons/fi";

import ModalWindow from "../../elements/ui/ModalWindow";

import GifSearch from "./GifSearch";
import GifImage from "./GifImage";

const schema = yup.object().shape({
    text: yup.string().required("You are not sending without a wish >:("),
    sender: yup.string().when("hideSender", {
        is: false,
        then: () => yup.string().required("Please fill your name"),
        otherwise: () => yup.string(),
    }),
    receiver: yup.string().when("randomReceiver", {
        is: false,
        then: () => yup.string().required("Please fill the full name of the receiver"),
        otherwise: () => yup.string(),
    }),

});

const Christmas = (props) => {
    const [showInbox, setShowInbox] = useState(false)
    const [showForm, setShowForm] = useState(false);
    const [gif, setGif] = useState(null)
    const [success, setSuccess] = useState(false);

    const { loading, sendRequest } = useHttpClient();

    return (
        <Fragment>
            {showInbox && <ModalWindow show={showInbox}>
                <div className="inner" style={{padding:'10px'}}>
                <h3>Your Christmas 2023 cards</h3>
                    <FiX className="x_icon" onClick={() => { setShowInbox(false) }} />
                    {props.currentUser.christmas.length > 0 ? <div className="row mt--20" >
                        {props.currentUser.christmas.map((card, index) => (
                            <div key={index} className="col-lg-12 col-md-12 col-12 mt--10">
                                <div className="card_panel">
                                    <GifImage src={card.gif} />
                                    <div className="card_text">
                                        <p>From: {card.sender}</p>
                                        <p>To: {card.receiver}</p>
                                        <p>Text: {card.text}</p>
                                    </div>
                                </div>
                            </div>
                            
                        ))}
                    </div> : <p style={{ margin: 'auto', padding: '50px 10px' }}>No cards yet - you can always send one to yourself :P</p>}
                </div>
            </ModalWindow>}
            {showForm && <ModalWindow show={showForm}>
                <Formik className="inner" validationSchema={schema}
                    initialValues={{
                        text: '',
                        gif: '',
                        sender: props.currentUser.name + ' ' + props.currentUser.surname,
                        receiver: '',
                        randomReceiver: false,
                        hideSender: false,
                    }}
                    onSubmit={async (values) => {
                        try {
                            const responseData = await sendRequest(
                                "special/add-card",
                                "POST",
                                JSON.stringify({
                                    text: values.text,
                                    gif: gif,
                                    sender: values.sender,
                                    receiver: values.receiver,
                                    randomReceiver: values.randomReceiver,
                                    hideSender: values.hideSender
                                }),
                                {
                                    "Content-Type": "application/json",
                                }
                            );
                            if (responseData.message == 'Success') {
                                setSuccess(true);
                            }
                        } catch (error) {
                            console.log(error)
                        }
                    }}
                >
                    {success ? <div style={{ padding: '10px' }}>
                        <FiX className="x_icon" onClick={() => { setShowForm(false) }} />
                        <img src='https://i.pinimg.com/originals/ff/6e/bd/ff6ebd0dfb50a44c04c842f365df4446.gif'></img>
                        <p className="mt--20">Hope you had fun - we expect to see you next year as well! Kind regards, BGSN!</p>
                    </div> : <Form
                        id="form"
                        style={{ padding: "5%" }}
                    >
                        <div className="hor_section">
                            <h3>Send a Christmas Card to a BGSG member</h3>
                            <FiX className="x_icon" onClick={() => { setShowForm(false) }} />
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12 mt--20">
                                <Field as='textarea' placeholder="Your holiday wish" name="text" style={{ padding: '5px 10px' }} />
                                <ErrorMessage
                                    className="error"
                                    name="text"
                                    component="div"
                                />
                            </div>
                            <GifSearch value={gif} setValue={(value) => setGif(value)} />
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="rnform-group">
                                    <Field type="text" placeholder="Your Name" name="sender" />
                                    <ErrorMessage className="error" name='sender' component='div' />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="hor_section_nospace">
                                    <Field
                                        style={{ maxWidth: "30px", margin: '10px' }}
                                        type="checkbox"
                                        name="hideSender"
                                    ></Field>
                                    <p className="information">
                                        Hide your name from receiver
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="rnform-group">
                                    <Field type="text" placeholder="Receiver Full Name" name="receiver" />
                                    <ErrorMessage
                                        className="error"
                                        name="receiver"
                                        component="div"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="hor_section_nospace">
                                    <Field
                                        style={{ maxWidth: "30px", margin: '10px' }}
                                        type="checkbox"
                                        name="randomReceiver"
                                    ></Field>
                                    <p className="information">
                                        Send to random user
                                    </p>
                                </div>
                            </div>

                        </div>
                        <button
                            disabled={loading}
                            type="submit"
                            className="rn-button-style--2 btn-solid mt--20"
                        >
                            {loading ? <Loader /> : <span>Send Card</span>}
                        </button>
                    </Form>}
                </Formik>
            </ModalWindow>}

            <div className='holiday-special'>
                <img src='/assets/images/special/christmas-hat.png' alt='hat' className="special-icon" />
                <h3 style={{ color: 'white' }}>Holiday Special </h3>
                <div className='holiday-special-btns'>
                    <button
                        className="rn-button-style--2"
                        onClick={() => {
                            setShowInbox(true)
                        }}
                    >
                        Check your inbox       </button>
                    <button
                        className="rn-button-style--2"

                        onClick={() => {
                            setShowForm(true)
                        }}
                    >
                        Send a wish
                    </button>
                </div>
            </div>
        </Fragment >
    )
}

export default Christmas