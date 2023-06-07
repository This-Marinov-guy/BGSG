import React from "react";
import {Field, ErrorMessage } from "formik";

const FormExtras = (props) => {
    return (
        <div className="row container mt--40">
            <div className="col-lg-12 col-md-12 col-12">
            <h3>Preferences</h3>
                <div className="rnform-group">
                    <Field as="select" name="menuType">
                        <option value="" disabled>
                            Select your menu
                        </option>
                        <option value="Non-vegetarian">classic</option>
                        <option value="Vegetarian">vegetarian</option>

                    </Field>
                    <ErrorMessage
                        className="error"
                        name="menuType"
                        component="div"
                    />
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-12">
                <div className="rnform-group">
                    <Field as="select" name="drink">
                        <option value="" disabled>
                            Select your drink
                        </option>
                        <option value="soft drink">soft drink</option>
                        <option value="beer">beer</option>
                        <option value="white wine">white wine</option>
                        <option value="red wine">red wine</option>
                    </Field>
                    <ErrorMessage
                        className="error"
                        name="drink"
                        component="div"
                    />
                </div>
            </div>
        </div>
    )
}

export default FormExtras