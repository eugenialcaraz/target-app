import emailjs from "@emailjs/browser";

export const sendEmail = (message) => {
  emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    message,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
};
