import React from 'react';
import { Formik } from 'formik';

const NoteInput = (props) => (
    <div className={"noteEntryWrapper"}>
        <Formik
            initialValues = {{ about: "" }}

            onSubmit={(values, { setSubmitting, resetForm }) => {
                var formData = values.about.trim();

                fetch("http://localhost:4000/notes", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ about: formData })
                }).then(
                    response => {
                        console.log(response.json());
                        props.updateFeed({ about: formData })
                        setSubmitting(false);
                    }
                );
                resetForm();
            }}
        >
            {formProps => {
                const {
                    values,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit
                } = formProps;
                return (
                    <form>
                        <textarea
                            id   = "about"
                            type = "text"

                            value     = {  values.about   }
                            className = { "noteEntryArea" }

                            onChange  = { handleChange }
                            onBlur    = { handleBlur   }
                            onKeyDown = {(e) => {
                                if (!isSubmitting && e.key === `Enter`) {
                                    e.preventDefault();
                                    handleSubmit();
                                }
                            }}
                        />
                    </form>
                );
            }}
        </Formik>
    </div>
);

export default NoteInput;