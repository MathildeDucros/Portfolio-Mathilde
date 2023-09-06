import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// template_dggfxbl
// service_3s2y7yv
// rUpx0gT9ZLDlt4Qx6

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    nameError: "",
    emailError: "",
    messageError: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });

    setFormErrors({
      ...formErrors,
      [`${name}Error`]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation des champs
    let errors = {};

    if (form.name.trim() === "") {
      errors.nameError = "Veuillez saisir votre nom";
    }

    if (form.email.trim() === "") {
      errors.emailError = "Veuillez saisir votre adresse e-mail";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.emailError = "Veuillez saisir une adresse e-mail valide";
    }

    if (form.message.trim() === "") {
      errors.messageError = "Veuillez saisir votre message";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_3s2y7yv",
        "template_furrffq",
        {
          from_name: form.name,
          to_name: "Mathilde Ducros",
          from_email: form.email,
          to_email: "ducros.mathilde@gmail.com",
          message: form.message,
        },
        "rUpx0gT9ZLDlt4Qx6"
      )
      .then(
        () => {
          setLoading(false);
          alert("Merci. Je vous répondrai dès que possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ah, quelque chose s'est mal passé. Veuillez réessayer.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden z-[0]`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Me Contacter</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-secondary font-medium mb-4">Votre Nom</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
              placeholder="Quel est votre nom ? "
              className="bg-tertiary py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium"
            />
            {formErrors.nameError && (
              <span className="text-red-500">{formErrors.nameError}</span>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-secondary font-medium mb-4">Votre Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              placeholder="Quel est votre adresse mail ?"
              className="bg-tertiary py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium"
            />
            {formErrors.emailError && (
              <span className="text-red-500">{formErrors.emailError}</span>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-secondary font-medium mb-4">
              Votre Message
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              autoComplete="on"
              placeholder="Que voulez-vous écrire ?"
              className="bg-tertiary py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium"
            />
            {formErrors.messageError && (
              <span className="text-red-500">{formErrors.messageError}</span>
            )}
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-secondary font-bold shadow-md shadow-primary"
          >
            {loading ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] z-[-1]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
