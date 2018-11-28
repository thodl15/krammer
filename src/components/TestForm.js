import React from 'react';
import { Formik } from 'formik';

const BasicExample = () => (
  <div className={"noteEntryWrapper"}>
    <Formik
      initialValues={{ name: 'jared' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      render={props => (
        <form onSubmit={props.handleSubmit}>
          <textarea
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name"
            className={"noteEntryArea"}
          />
        </form>
      )}
    />
  </div>
);

export default BasicExample;