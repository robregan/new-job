import { Formik, Form, Field, ErrorMessage } from "formik";

const Newhit = () => (
  <>
    <h1>New Hit</h1>
    <Formik
      initialValues={{ name: "", email: "", acceptedTerms: false }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Required";
        }


        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        // post data to server
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, dirty, handleReset }) => (
        <Form>
          <div>
            <label>
              Company Name:
              <Field type="text" name="companyName" placeholder="Company Name"/>
            </label>
            <ErrorMessage name="companyName" component="span" />
          </div>
          <div>
            <label htmlFor="email" >Contact Email: </label>
            <Field type="email" name="contactEmail" placeholder="Contact Email"/>
            <ErrorMessage name="contactEmail" component="span" />
          </div>
         
          <div>
            <label>
              Job Title:
              <Field type="text" name="jobTitle" placeholder='Job Title' />
            </label>
            <ErrorMessage name="jobTitle" component="span" />
          </div>
          <div>
            <label>
              Company Website:
              <Field type="text" name="companySite" placeholder="Company Site" />
            </label>
            <ErrorMessage name="companySite" component="span" />
          </div>
       
          <div>
            <label>Applied?</label>
            <Field type="checkbox" name="appliedYes" /> <span>yes</span>
            <ErrorMessage name="acceptedTerms" component="span" />
            <Field type="checkbox" name="appliedNo" /> <span>no</span>
          </div>
          <button
            type="button"
            onClick={handleReset}
            disabled={!dirty || isSubmitting}
            className="btn btn-reverse btn-block bambi"
          >
            Reset
          </button>
          <button className="btn btn-block bambi"type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </>
);

export default Newhit;