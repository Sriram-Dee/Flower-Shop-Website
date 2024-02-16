import React from "react";
import ContactForm from "../assets/CustComponentes/ContactForm";

export const About = () => {
  return (
    <div className="container py-3 " id="about">
      <h3 className="text-primary text-center my-3">
        Welcome to Bolossom.com{" "}
        <span className="text-muted d-block fs-6">
          – Your Trusted Online Florist
        </span>
      </h3>
      <h4 className="text-info">
        <span>Our Story</span>
      </h4>
      <p>
        At Bolossom.com, we're passionate about spreading love, happiness, and
        positivity through the beauty of flowers. Established in 1999, we are a
        leading online florist dedicated to providing exquisite floral
        arrangements and gifts for all occasions. Our journey began with a
        simple goal – to make sending flowers and gifts as delightful as
        receiving them
      </p>

      <h4 className="text-info">
        <span>Our Mission</span>
      </h4>
      <p>
        Our mission is to bring joy and express emotions through fresh and
        vibrant flowers. We believe that every flower has a unique story to tell
        and can convey a wide range of feelings, from love and gratitude to
        sympathy and celebration. Our commitment is to help you connect with
        your loved ones, even when distance separates you.
      </p>

      <h4 className="text-info">
        <span>About Our Network</span>
      </h4>
      <p>
        Bolossom.com is India’s leading florist company and best website to send
        flowers gifts to India. We do not just provide flowers in various ways
        but, we also deliver them on the doorstep of those you want them
        delivered to. Metropolitan lifestyle demands this kind of a service
        which Bolossom is glad to give. We have a wide and unique range of items
        to select from which includes chocolates, cakes and gifts for every
        occasion.
      </p>
      <p>
        With a professional network of vendors in more than 500 cities across
        India, we form the best, accurate and reliable service to approach. From
        personal to corporate, Bolossom fulfills every order on time because
        that’s what we do best. Equipped with the latest technology, be it SMS
        notifications or app usage, your experience with the services that we
        have to provide would be very smooth and cherishing.
      </p>
      <p>
        We have been serving people since 1999 and we believe that one must
        change along with time. Keeping this in mind the specifications of our
        services vary with each kind of requirement. This is how we customize
        your experience with us, this is how we build trust. It is our mission
        to be the reason that people are able to express and feel loved at the
        same time. What is more good a way to do that than send flowers to
        India, Gifts to India ?
      </p>

      <h4 className="text-info">
        <span>Why Choose Bolossom.com?</span>
      </h4>
      <ul>
        <li>
          <b>Freshness Guaranteed:</b> We source our flowers directly from local
          farms to ensure the highest quality and freshness.
        </li>
        <li>
          <b>Express Delivery:</b> We offer same-day and midnight flower
          delivery services to make your moments extra special.
        </li>
        <li>
          <b>Wide Variety:</b> Our extensive collection includes a wide variety
          of flowers, bouquets, gifts, and cakes to suit every occasion and
          budget.
        </li>
        <li>
          <b>Customer-Centric:</b> Your satisfaction is our top priority. Our
          customer support team is here to assist you 24/7.
        </li>
        <li>
          <b>Secure and Convenient:</b> Our website is secure, user-friendly,
          and designed to make your online shopping experience hassle-free.
        </li>
      </ul>

      {/* =========================== Contact ======================= */}
      <h3 className="text-primary text-center my-5">Contact Us</h3>
      <ContactForm />
    </div>
  );
};
