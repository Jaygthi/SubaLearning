import { useState } from "react";
import emailjs from "@emailjs/browser";

import type {
  ContactFormData,
  ContactFormErrors,
} from "../../types/contact";
import "../../styles/contacts.css";

const initialFormData: ContactFormData = {
  name: "",
  mobile: "",
  email: "",
  message: "",
};

const initialTouched: Record<
  keyof ContactFormData,
  boolean
> = {
  name: false,
  mobile: false,
  email: false,
  message: false,
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

    case "message":
      if (!trimmedValue) {
        return "Please enter your message.";
      }

      if (trimmedValue.length < 10) {
        return "message should contain at least 10 characters.";
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

  const [submitError, setSubmitError] = useState(false);

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
      message: true,
    });

    if (
      Object.keys(validationErrors).length > 0
    ) {
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitted(false);
      setSubmitError(false);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          mobile: formData.mobile,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      setFormData(initialFormData);
      setErrors({});
      setTouched(initialTouched);
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setSubmitError(true);
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

              {submitError && (
                <div
                  className="alert alert-danger"
                  role="alert"
                  aria-live="polite"
                >
                  Something went wrong. Please try again later.
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
                    Parent Name
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
                    placeholder="Your name"
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
                    Parent Mobile Number
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
                    placeholder="Your mobile number"
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
                    Parent Email ID
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
                    placeholder="Your email address"
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

                {/* message */}
                <div className="mb-4">

                  <label
                    htmlFor="message"
                    className="form-label"
                  >
                    Message
                    <span
                      className="required"
                      aria-hidden="true"
                    >
                      *
                    </span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-control ${getFieldClass(
                      "message"
                    )}`}
                    aria-required="true"
                    aria-invalid={
                      touched.message &&
                      Boolean(errors.message)
                    }
                    aria-describedby={
                      errors.message
                        ? "message-error"
                        : undefined
                    }
                    placeholder="Please submit your student details (e.g., 6th grade maths or 10th grade physics) for a FREE demo class."
                  />

                  {touched.message &&
                    errors.message && (
                      <div
                        id="message-error"
                        className="invalid-feedback"
                      >
                        {errors.message}
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
 );
}