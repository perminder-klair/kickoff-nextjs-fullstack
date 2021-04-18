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

const SetPasswordForm = ({
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
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter password"
          type="password"
        />
        {errors.password && touched.password && (
          <p className="help is-danger has-text-left">{errors.password}</p>
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
    password: '',
  }),
  validationSchema: Yup.object().shape({
    password: Yup.string().min(6).required('Password is required!'),
  }),

  handleSubmit: (values, { setSubmitting, props }) => {
    props.onSubmit(values).finally(() => {
      setSubmitting(false);
    });
  },
  displayName: 'SetPasswordForm', // helps with React DevTools
})(SetPasswordForm);
