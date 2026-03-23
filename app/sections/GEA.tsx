"use client";

import { useState } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
};

type Status = "idle" | "loading" | "success" | "duplicate" | "error";

const INITIAL_FORM: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  dateOfBirth: "",
};

const GEA = () => {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === "error" || status === "duplicate") {
      setStatus("idle");
      setErrorMsg("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, email, dateOfBirth } = form;

    if (!firstName || !lastName || !email || !dateOfBirth) {
      setStatus("error");
      setErrorMsg("Please fill out all fields before submitting.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          first_name: firstName,
          last_name: lastName,
          date_of_birth: dateOfBirth,
          submitted_at: new Date().toISOString(), // exact timestamp when they hit send
        }),
      });

      const data = await res.json();

      if (res.status === 409) {
        setStatus("duplicate");
        setErrorMsg(data.message || "You're already on the waitlist!");
        return;
      }

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Check your connection and try again.");
    }
  };

  return (

    <section id='GEA' className='gea'>
      <div className='gea-main'>

        <div className='gea-d1 gea-dn'>

          <p className='gea-d1-tag gea-dn-tag'>Get early access</p>
          <h1 className='gea-d1-title gea-dn-title'>
            Join the waitlist for Memviox.
          </h1>

          <p className='gea-d1-subtitle gea-dn-subtitle'>
            Be early. Get updates. See what we are building before the wider launch.
          </p>

        </div>

        <div className='gea-d2'>

          {status === "success" && (
            <div className='gea-alert gea-alert--success'>
              🎉 <strong>You&apos;re on the list!</strong> Check your inbox for a confirmation email.
            </div>
          )}
          {status === "duplicate" && (
            <div className='gea-alert gea-alert--duplicate'>
              👀 <strong>Already signed up!</strong> {errorMsg}
            </div>
          )}
          {status === "error" && (
            <div className='gea-alert gea-alert--error'>
              ⚠️ <strong>Oops!</strong> {errorMsg}
            </div>
          )}

          {status !== "success" && (

            <form className='gea-form' onSubmit={handleSubmit} noValidate>

              <div className='gea-form-d1 gea-form-dn'>

                <label htmlFor='firstName' className='gea-form-label'>First Name:</label>
                <input
                  type='text'
                  id='firstName'
                  name='firstName'
                  className='gea-form-input'
                  placeholder='Your name'
                  value={form.firstName}
                  onChange={handleChange}
                  disabled={status === "loading"}
                />

                <label htmlFor='lastName' className='gea-form-label'>Last Name:</label>
                <input
                  type='text'
                  id='lastName'
                  name='lastName'
                  className='gea-form-input'
                  placeholder='Your last name'
                  value={form.lastName}
                  onChange={handleChange}
                  disabled={status === "loading"}
                />

                <label htmlFor='email' className='gea-form-label'>Email:</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='gea-form-input'
                  placeholder='Your email'
                  value={form.email}
                  onChange={handleChange}
                  disabled={status === "loading"}
                />

                <label htmlFor='dateOfBirth' className='gea-form-label'>Date of Birth:</label>
                <input
                  type='date'
                  id='dateOfBirth'
                  name='dateOfBirth'
                  className='gea-form-input'
                  value={form.dateOfBirth}
                  onChange={handleChange}
                  disabled={status === "loading"}
                />
              </div>

              <div className='gea-form-d2'>
                <button
                  type='submit'
                  className='gea-form-button'
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Submitting..." : "Join waitlist"}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default GEA;