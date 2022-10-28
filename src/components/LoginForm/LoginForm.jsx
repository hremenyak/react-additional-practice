import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const initialValues = {
  login: '',
  password: '',
};

let schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(5).max(10).required(),
});

export const LoginForm = () => {
  const handleSubmit = (values, actions) => {
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          Login
          <Field type="text" name="login" />
          <ErrorMessage name="login" />
        </label>

        <label htmlFor="password">
          Password
          <Field type="password" name="password" />
          <ErrorMessage name="password" />
        </label>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
