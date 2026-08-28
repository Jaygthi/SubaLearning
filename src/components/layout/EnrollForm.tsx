import { useState } from "react";
import type {
  TutorEnrollErrors,
  TutorEnrollFormData,
} from "../../types/tutorEnroll";
import "../../styles/TutorEnrollForm.css";

const initialForm: TutorEnrollFormData = {
  fullName: "",
  mobileNumber: "",
  email: "",
  subjects: "",
  level: "",
  experience: "",
};

const initialTouched: Record<
  keyof TutorEnrollFormData,
  boolean
> = {
  fullName: false,
  mobileNumber: false,
  email: false,
  subjects: false,
  level: false,
  experience: false,
};

const NAME_REGEX = /^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ.' -]*$/;
const MOBILE_REGEX = /^[6-9]\d{9}$/;
const EMAIL_REGEX =
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const MAX_LENGTH = {
  fullName: 100,
  mobileNumber: 10,
  email: 150,
  subjects: 200,
  level: 150,
  experience: 500,
};

function validateField(
  field: keyof TutorEnrollFormData,
  value: string
): string | undefined {
  const trimmed = value.trim();

  switch (field) {
    case "fullName":
      if (!trimmed) {
        return "Please enter your full name.";
      }

      if (trimmed.length < 2) {
        return "Name must contain at least 2 characters.";
      }

      if (trimmed.length > MAX_LENGTH.fullName) {
        return "Name is too long.";
      }

      if (!NAME_REGEX.test(trimmed)) {
        return "Please enter a valid name.";
      }

      return undefined;

    case "mobileNumber":
      if (!trimmed) {
        return "Please enter your mobile number.";
      }

      if (!MOBILE_REGEX.test(trimmed)) {
        return "Enter a valid 10-digit Indian mobile number.";
      }

      return undefined;

    case "email":
      if (!trimmed) {
        return "Please enter your email address.";
      }

      if (
        trimmed.length > MAX_LENGTH.email ||
        !EMAIL_REGEX.test(trimmed)
      ) {
        return "Please enter a valid email address.";
      }

      return undefined;

    case "subjects":
      if (!trimmed) {
        return "Please enter the subject(s) you teach.";
      }

      if (trimmed.length > MAX_LENGTH.subjects) {
        return "Subject information is too long.";
      }

      return undefined;

    case "level":
      if (!trimmed) {
        return "Please enter the levels/classes you teach.";
      }

      if (trimmed.length > MAX_LENGTH.level) {
        return "Level information is too long.";
      }

      return undefined;

    case "experience":
      if (!trimmed) {
        return "Please enter your teaching experience.";
      }

      if (trimmed.length > MAX_LENGTH.experience) {
        return "Experience description is too long.";
      }

      return undefined;

    default:
      return undefined;
  }
}

function validateForm(
  formData: TutorEnrollFormData
): TutorEnrollErrors {
  const errors: TutorEnrollErrors = {};

  (
    Object.keys(formData) as Array<
      keyof TutorEnrollFormData
    >
  ).forEach((field) => {
    const error = validateField(
      field,
      formData[field]
    );

    if (error) {
      errors[field] = error;
    }
  });

  return errors;
}

export default function TutorEnrollForm() {
  const [formData, setFormData] =
    useState<TutorEnrollFormData>(initialForm);

  const [errors, setErrors] =
    useState<TutorEnrollErrors>({});

  const [touched, setTouched] =
    useState(initialTouched);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [successMessage, setSuccessMessage] =
    useState("");

  const [serverError, setServerError] =
    useState("");

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const field =
      event.currentTarget.name as keyof TutorEnrollFormData;

    let value = event.currentTarget.value;

    // Client-side length protection.
    value = value.slice(
      0,
      MAX_LENGTH[field]
    );

    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setServerError("");
    setSuccessMessage("");

    if (touched[field]) {
      const error = validateField(field, value);

      setErrors((previous) => ({
        ...previous,
        [field]: error,
      }));
    }
  };

  const handleBlur: React.FocusEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const field =
      event.currentTarget.name as keyof TutorEnrollFormData;

    const value = event.currentTarget.value;

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

  const handleSubmit = async (
    event: React.SubmitEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setServerError("");
    setSuccessMessage("");

    const validationErrors =
      validateForm(formData);

    setErrors(validationErrors);

    setTouched({
      fullName: true,
      mobileNumber: true,
      email: true,
      subjects: true,
      level: true,
      experience: true,
    });

    if (
      Object.keys(validationErrors).length > 0
    ) {
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch(
        "/api/tutor-enroll",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,

            /*
             * Honeypot is deliberately absent
             * from the UI.
             */
          }),
        }
      );

      const result: {
        success?: boolean;
        message?: string;
      } = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message ||
            "Unable to submit your enrolment request."
        );
      }

      setSuccessMessage(
        "Thank you. Your tutor enrolment request has been sent successfully."
      );

      setFormData(initialForm);
      setErrors({});
      setTouched(initialTouched);
    } catch (error) {
      console.error(
        "Tutor enrolment submission failed:",
        error
      );

      setServerError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldClass = (
    field: keyof TutorEnrollFormData
  ) => {
    if (!touched[field]) {
      return "";
    }

    return errors[field]
      ? "is-invalid"
      : "is-valid";
  };

  return (
    <form
      className="tutor-enroll-form"
      onSubmit={handleSubmit}
      noValidate
    >
      {successMessage && (
        <div
          className="alert alert-success"
          role="status"
          aria-live="polite"
        >
          {successMessage}
        </div>
      )}

      {serverError && (
        <div
          className="alert alert-danger"
          role="alert"
          aria-live="assertive"
        >
          {serverError}
        </div>
      )}

      {/* Full Name */}
      <div className="mb-3">
        <label
          htmlFor="fullName"
          className="form-label"
        >
          Full Name
          <span
            className="text-danger"
            aria-hidden="true"
          >
            {" "}
            *
          </span>
        </label>

        <input
          id="fullName"
          name="fullName"
          type="text"
          className={`form-control ${getFieldClass(
            "fullName"
          )}`}
          value={formData.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          maxLength={MAX_LENGTH.fullName}
          autoComplete="name"
          aria-required="true"
          aria-invalid={
            touched.fullName &&
            Boolean(errors.fullName)
          }
          aria-describedby={
            errors.fullName
              ? "fullName-error"
              : undefined
          }
        />

        {touched.fullName &&
          errors.fullName && (
            <div
              id="fullName-error"
              className="invalid-feedback"
            >
              {errors.fullName}
            </div>
          )}
      </div>

      {/* Mobile */}
      <div className="mb-3">
        <label
          htmlFor="mobileNumber"
          className="form-label"
        >
          Mobile Number
          <span
            className="text-danger"
            aria-hidden="true"
          >
            {" "}
            *
          </span>
        </label>

        <input
          id="mobileNumber"
          name="mobileNumber"
          type="tel"
          className={`form-control ${getFieldClass(
            "mobileNumber"
          )}`}
          value={formData.mobileNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          maxLength={10}
          inputMode="numeric"
          autoComplete="tel"
          aria-required="true"
          aria-invalid={
            touched.mobileNumber &&
            Boolean(errors.mobileNumber)
          }
          aria-describedby={
            errors.mobileNumber
              ? "mobileNumber-error"
              : undefined
          }
        />

        {touched.mobileNumber &&
          errors.mobileNumber && (
            <div
              id="mobileNumber-error"
              className="invalid-feedback"
            >
              {errors.mobileNumber}
            </div>
          )}
      </div>

      {/* Email */}
      <div className="mb-3">
        <label
          htmlFor="email"
          className="form-label"
        >
          Email
          <span
            className="text-danger"
            aria-hidden="true"
          >
            {" "}
            *
          </span>
        </label>

        <input
          id="email"
          name="email"
          type="email"
          className={`form-control ${getFieldClass(
            "email"
          )}`}
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          maxLength={MAX_LENGTH.email}
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

        {touched.email && errors.email && (
          <div
            id="email-error"
            className="invalid-feedback"
          >
            {errors.email}
          </div>
        )}
      </div>

      {/* Subjects */}
      <div className="mb-3">
        <label
          htmlFor="subjects"
          className="form-label"
        >
          Subjects You Teach
          <span
            className="text-danger"
            aria-hidden="true"
          >
            {" "}
            *
          </span>
        </label>

        <input
          id="subjects"
          name="subjects"
          type="text"
          className={`form-control ${getFieldClass(
            "subjects"
          )}`}
          value={formData.subjects}
          onChange={handleChange}
          onBlur={handleBlur}
          maxLength={MAX_LENGTH.subjects}
          placeholder="e.g. Maths, Physics"
          aria-required="true"
          aria-invalid={
            touched.subjects &&
            Boolean(errors.subjects)
          }
          aria-describedby={
            errors.subjects
              ? "subjects-error"
              : undefined
          }
        />

        {touched.subjects &&
          errors.subjects && (
            <div
              id="subjects-error"
              className="invalid-feedback"
            >
              {errors.subjects}
            </div>
          )}
      </div>

      {/* Level */}
      <div className="mb-3">
        <label
          htmlFor="level"
          className="form-label"
        >
          Levels
          <span
            className="text-danger"
            aria-hidden="true"
          >
            {" "}
            *
          </span>
        </label>

        <input
          id="level"
          name="level"
          type="text"
          className={`form-control ${getFieldClass(
            "level"
          )}`}
          value={formData.level}
          onChange={handleChange}
          onBlur={handleBlur}
          maxLength={MAX_LENGTH.level}
          placeholder="e.g. Primary, CBSE, IGCSE, Class 10"
          aria-required="true"
          aria-invalid={
            touched.level &&
            Boolean(errors.level)
          }
          aria-describedby={
            errors.level
              ? "level-error"
              : undefined
          }
        />

        {touched.level && errors.level && (
          <div
            id="level-error"
            className="invalid-feedback"
          >
            {errors.level}
          </div>
        )}
      </div>

      {/* Experience */}
      <div className="mb-4">
        <label
          htmlFor="experience"
          className="form-label"
        >
          Years of Experience
          <span
            className="text-danger"
            aria-hidden="true"
          >
            {" "}
            *
          </span>
        </label>

        <textarea
          id="experience"
          name="experience"
          rows={3}
          className={`form-control ${getFieldClass(
            "experience"
          )}`}
          value={formData.experience}
          onChange={handleChange}
          onBlur={handleBlur}
          maxLength={MAX_LENGTH.experience}
          placeholder="Tell us briefly about your teaching experience"
          aria-required="true"
          aria-invalid={
            touched.experience &&
            Boolean(errors.experience)
          }
          aria-describedby={
            errors.experience
              ? "experience-error"
              : undefined
          }
        />

        {touched.experience &&
          errors.experience && (
            <div
              id="experience-error"
              className="invalid-feedback"
            >
              {errors.experience}
            </div>
          )}
      </div>

      <button
        type="submit"
        className="btn btn-success w-100"
        disabled={isSubmitting}
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
          "Submit"
        )}
      </button>
    </form>
  );
}