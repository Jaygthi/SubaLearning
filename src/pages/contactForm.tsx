import { useState } from "react";

import type {
  ContactFormData,
  ContactFormErrors,
} from "../types/contact";
import "../styles/contacts.css";

const initialFormData: ContactFormData = {
  name: "",
  mobile: "",
  email: "",
  comments: "",
};

const initialTouched: Record<
  keyof ContactFormData,
  boolean
> = {
  name: false,
  mobile: false,
  email: false,
  comments: false,
};

function validateField(
  field: keyof ContactFormData,
  value: string
): string | undefined {
  const trimmedValue = value.trim();

  switch (field) {
    case "name":
      if (!trimmedValue) {
        return "Please enter your name.";
      }

      if (trimmedValue.length < 2) {
        return "Name must contain at least 2 characters.";
      }

      return undefined;

    case "mobile":
      if (!trimmedValue) {
        return "Please enter your mobile number.";
      }

      if (!/^[6-9]\d{9}$/.test(trimmedValue)) {
        return "Please enter a valid 10-digit mobile number.";
      }

      return undefined;

    case "email":
      if (!trimmedValue) {
        return "Please enter your email address.";
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
        return "Please enter a valid email address.";
      }

      return undefined;

    case "comments":
      if (!trimmedValue) {
        return "Please enter your comments.";
      }

      if (trimmedValue.length < 10) {
        return "Comments should contain at least 10 characters.";
      }

      return undefined;

    default:
      return undefined;
  }
}

function validateForm(
  data: ContactFormData
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  (
    Object.keys(data) as Array<keyof ContactFormData>
  ).forEach((field) => {
    const error = validateField(field, data[field]);

    if (error) {
      errors[field] = error;
    }
  });

  return errors;
}

export default function ContactForm() {
  const [formData, setFormData] =
    useState<ContactFormData>(initialFormData);

  const [errors, setErrors] =
    useState<ContactFormErrors>({});

  const [touched, setTouched] =
    useState(initialTouched);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [submitted, setSubmitted] =
    useState(false);

  /*
   * Controlled input handler
   */
  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const { name, value } = event.currentTarget;

    const field =
      name as keyof ContactFormData;

    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    /*
     * Only validate a field after
     * the user has interacted with it.
     */
    if (touched[field]) {
      const error = validateField(field, value);

      setErrors((previous) => ({
        ...previous,
        [field]: error,
      }));
    }
  };

  /*
   * Validate field when user leaves it
   */
  const handleBlur: React.FocusEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const { name, value } = event.currentTarget;

    const field =
      name as keyof ContactFormData;

    setTouched((previous) => ({
      ...previous,
      [field]: true,
    }));

    const error = validateField(field, value);

    setErrors((previous) => ({
      ...previous,
      [field]: error,
    }));
  };

  /*
   * Form submit
   */
  const handleSubmit = async (
    event: React.SubmitEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const validationErrors =
      validateForm(formData);

    setErrors(validationErrors);

    setTouched({
      name: true,
      mobile: true,
      email: true,
      comments: true,
    });

    if (
      Object.keys(validationErrors).length > 0
    ) {
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitted(false);

      /*
       * API call will be added here.
       *
       * await submitContactForm(formData);
       */

      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      setSubmitted(true);
      setFormData(initialFormData);
      setErrors({});
      setTouched(initialTouched);
    } catch (error) {
      console.error(
        "Contact form submission failed:",
        error
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldClass = (
    field: keyof ContactFormData
  ) => {
    if (!touched[field]) {
      return "";
    }

    return errors[field]
      ? "is-invalid"
      : "is-valid";
  };

  return (
    <section
      className="contact-section"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <div className="row align-items-center g-5">

          {/* LEFT */}
          <div className="col-lg-6">
            <div className="contact-intro">

              <h1 id="contact-heading">
                Contact Us
              </h1>

              <div
                className="contact-icon"
                aria-hidden="true"
              >
                ☎
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-6">

            <div className="contact-card">

              <div className="contact-card-header">
                <h2>Let's Talk</h2>

                <p>
                  Feel Free to Drop us a Line Below
                </p>
              </div>

              {submitted && (
                <div
                  className="alert alert-success"
                  role="status"
                  aria-live="polite"
                >
                  Thank you! Your message has been
                  submitted successfully.
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                noValidate
              >

                {/* NAME */}
                <div className="mb-3">

                  <label
                    htmlFor="name"
                    className="form-label"
                  >
                    Your Name
                    <span
                      className="required"
                      aria-hidden="true"
                    >
                      *
                    </span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-control ${getFieldClass(
                      "name"
                    )}`}
                    autoComplete="name"
                    aria-required="true"
                    aria-invalid={
                      touched.name &&
                      Boolean(errors.name)
                    }
                    aria-describedby={
                      errors.name
                        ? "name-error"
                        : undefined
                    }
                  />

                  {touched.name &&
                    errors.name && (
                      <div
                        id="name-error"
                        className="invalid-feedback"
                      >
                        {errors.name}
                      </div>
                    )}

                </div>

                {/* MOBILE */}
                <div className="mb-3">

                  <label
                    htmlFor="mobile"
                    className="form-label"
                  >
                    Your Mobile Number
                    <span
                      className="required"
                      aria-hidden="true"
                    >
                      *
                    </span>
                  </label>

                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={10}
                    inputMode="numeric"
                    className={`form-control ${getFieldClass(
                      "mobile"
                    )}`}
                    autoComplete="tel"
                    aria-required="true"
                    aria-invalid={
                      touched.mobile &&
                      Boolean(errors.mobile)
                    }
                    aria-describedby={
                      errors.mobile
                        ? "mobile-error"
                        : undefined
                    }
                  />

                  {touched.mobile &&
                    errors.mobile && (
                      <div
                        id="mobile-error"
                        className="invalid-feedback"
                      >
                        {errors.mobile}
                      </div>
                    )}

                </div>

                {/* EMAIL */}
                <div className="mb-3">

                  <label
                    htmlFor="email"
                    className="form-label"
                  >
                    Your Email ID
                    <span
                      className="required"
                      aria-hidden="true"
                    >
                      *
                    </span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-control ${getFieldClass(
                      "email"
                    )}`}
                    autoComplete="email"
                    aria-required="true"
                    aria-invalid={
                      touched.email &&
                      Boolean(errors.email)
                    }
                    aria-describedby={
                      errors.email
                        ? "email-error"
                        : undefined
                    }
                  />

                  {touched.email &&
                    errors.email && (
                      <div
                        id="email-error"
                        className="invalid-feedback"
                      >
                        {errors.email}
                      </div>
                    )}

                </div>

                {/* COMMENTS */}
                <div className="mb-4">

                  <label
                    htmlFor="comments"
                    className="form-label"
                  >
                    Comments
                    <span
                      className="required"
                      aria-hidden="true"
                    >
                      *
                    </span>
                  </label>

                  <textarea
                    id="comments"
                    name="comments"
                    rows={4}
                    value={formData.comments}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-control ${getFieldClass(
                      "comments"
                    )}`}
                    aria-required="true"
                    aria-invalid={
                      touched.comments &&
                      Boolean(errors.comments)
                    }
                    aria-describedby={
                      errors.comments
                        ? "comments-error"
                        : undefined
                    }
                  />

                  {touched.comments &&
                    errors.comments && (
                      <div
                        id="comments-error"
                        className="invalid-feedback"
                      >
                        {errors.comments}
                      </div>
                    )}

                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="contact-submit"
                  disabled={isSubmitting}
                  aria-disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        aria-hidden="true"
                      />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}