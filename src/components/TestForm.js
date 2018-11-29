import React from 'react';
import { Formik } from 'formik';

const BasicExample = (props) => (
  <div className={"noteEntryWrapper"}>
    <Formik
      initialValues={{ name: '' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          values.name = values.name.trim();
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
        actions.resetForm();
      }}
      onReset={(values, actions) => {
        console.log(values);
      }}
      render={fProps => (
        <form onSubmit={fProps.handleSubmit}>
          <textarea
            type="text"
            onChange={fProps.handleChange}
            onBlur={fProps.handleBlur}
            value={fProps.values.name}
            name="name"
            className={"noteEntryArea"}
            onKeyUp={(e) => {if (e.key === `Enter`) {
              // TODO (David):
              // Handle the enter key submission so that
              // the submission does not include enter,
              // but the form resets without any newline
              // characters included.
              // e.stopPropagation();
              fProps.submitForm();
            }
              }}
          />
        </form>
      )}
    />
  </div>
);

export default BasicExample;