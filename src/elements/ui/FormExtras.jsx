import React from "react";
import { Field, ErrorMessage } from "formik";

const FormExtras = () => {
    return (
        <div className="row container mt--40">
            <div className="col-lg-12 col-md-12 col-12">
                <div className="rnform-group">
                    <Field as="select" name="inputOne">
                        <option value="" disabled>
                            How are you coming
                        </option>
                        <option value="single">Single
                        </option>
                        <option value="team">As a team
                        </option>
                        
                    </Field>
                    <ErrorMessage
                        className="error"
                        name="inputOne"
                        component="div"
                    />
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-12">
                <div className="rnform-group">
                <Field type='text' placeholder='Team Name' name="inputTwo">
                </Field>
                <small>*Only for teams</small>
                </div>
                <ErrorMessage
                        className="error"
                        name="inputTwo"
                        component="div"
                    />
            </div>
            {/* <div className="col-lg-12 col-md-12 col-12">
                <div className="rnform-group">
                    <Field type='text' name="allergies" placeholder="Any allergies"
                    >

                    </Field>

                </div>
            </div> */}
        </div>
    )
}

export default FormExtras 