"use client";

import { FormEvent, useState } from "react";
import styles from "./BookingForm.module.css";
import Button from "@/components/UI/Button/Button";
import { makeBookingRequest } from "@/lib/campersApi";

type BookingFormProps = {
  camperId: string;
};

type FormValues = {
  name: string;
  email: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(name: keyof FormValues, value: string) {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return "This field is required.";
  }

  if (name === "name" && trimmedValue.length < 2) {
    return "Name must be at least 2 characters.";
  }

  if (name === "email" && !emailPattern.test(trimmedValue)) {
    return "Please enter a valid email address.";
  }

  return "";
}

function validateForm(values: FormValues) {
  return {
    name: validateField("name", values.name),
    email: validateField("email", values.email),
  };
}

export default function BookingForm({ camperId }: BookingFormProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | null>(
    null,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(name: keyof FormValues, value: string) {
    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: "",
    }));

    setStatusMessage("");
    setStatusType(null);
  }

  function handleBlur(name: keyof FormValues) {
    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: validateField(name, values[name]),
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateForm(values);
    setErrors(nextErrors);

    if (nextErrors.name || nextErrors.email) {
      setStatusMessage("Please fix the highlighted fields.");
      setStatusType("error");
      return;
    }

    try {
      setIsSubmitting(true);
      setStatusMessage("");
      setStatusType(null);

      await makeBookingRequest(camperId, {
        name: values.name.trim(),
        email: values.email.trim(),
      });

      setValues(initialValues);
      setErrors({});
      setStatusMessage("Your request has been sent successfully.");
      setStatusType("success");
    } catch {
      setStatusMessage("Something went wrong. Please try again.");
      setStatusType("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className={styles.formCard}>
      <h2 className={styles.title}>Book your campervan now</h2>
      <p className={styles.text}>
        Stay connected! We are always ready to help you.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.fieldGroup}>
          <input
            className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
            type="text"
            name="name"
            placeholder="Name*"
            value={values.name}
            onChange={(e) => handleChange("name", e.target.value)}
            onBlur={() => handleBlur("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className={styles.fieldMessage}>
              {errors.name}
            </p>
          )}
        </div>

        <div className={styles.fieldGroup}>
          <input
            className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
            type="email"
            name="email"
            placeholder="Email*"
            value={values.email}
            onChange={(e) => handleChange("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className={styles.fieldMessage}>
              {errors.email}
            </p>
          )}
        </div>

        {statusMessage && (
          <p
            className={`${styles.statusMessage} ${
              statusType === "success" ? styles.successMessage : styles.errorMessage
            }`}
          >
            {statusMessage}
          </p>
        )}

        <Button
          className={styles.formButton}
          type="submit"
          variant="primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </Button>
      </form>
    </div>
  );
}
