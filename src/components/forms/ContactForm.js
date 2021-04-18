import styled from 'styled-components';
import { withFormik } from 'formik';
import * as Yup from 'yup';

const Container = styled.form`
  .field {
    margin-bottom: 2rem !important;
  }
  input {
    min-height: 55px;
  }
  button {
    :hover {
      color: #000 !important;
    }
  }
  @media screen and (min-width: 769px) {
    .field-body > .field:not(:last-child) {
      margin-right: 1.5rem;
    }
  }
`;

const ContactForm = ({
  values,
  touched,
  errors,
  isSubmitting,
  handleSubmit,
  handleChange,
  handleBlur,
}) => {
  return (
    <Container onSubmit={handleSubmit} className="pt-5 pb-4">
      <div className="field">
        <input
          className="input is-shadowless"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Your email"
        />
        {errors.email && touched.email && (
          <p className="help is-danger has-text-left">{errors.email}</p>
        )}
      </div>
      <div className="field">
        <input
          className="input is-shadowless"
          name="message"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter message"
        />
        {errors.message && touched.message && (
          <p className="help is-danger has-text-left">{errors.message}</p>
        )}
      </div>
      <button
        disabled={isSubmitting}
        type="submit"
        className={`button is-primary is-fullwidth ${
          isSubmitting ? 'is-loading' : ''
        }`}
      >
        Submit
      </button>
    </Container>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    email: '',
    message: '',
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    message: Yup.string().required('Message is required!'),
  }),

  handleSubmit: (values, { setSubmitting, props }) => {
    props.onSubmit(values).finally(() => {
      setSubmitting(false);
    });
  },
  displayName: 'ContactForm', // helps with React DevTools
})(ContactForm);
