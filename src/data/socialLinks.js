// links
const phoneNumber = "+916351468706";
const message =
  "Hey, I've come from your website and I need a website for my business";

const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  message
)}`;

export default whatsappLink;
