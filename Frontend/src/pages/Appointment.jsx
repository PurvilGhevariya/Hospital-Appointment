import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment | CareCompass Medical Institute"}
        imageUrl={"/signin.png"}
        content={"Thank you for scheduling your online appointment with CareCompass Medical Institute. Your consultation is set for [Appointment Date] at [Appointment Time] with Dr. [Doctor's Name] from our [Department]. Please ensure you have a stable internet connection and a quiet, private space for the consultation. You will receive an email with a link to join the virtual meeting 10 minutes before your appointment. If you need to reschedule or cancel, please contact us at least 24 hours in advance at [Phone Number] or [Email Address]. We look forward to providing you with exceptional care."}
      />
      <AppointmentForm/>
    </>
  );
};

export default Appointment;
