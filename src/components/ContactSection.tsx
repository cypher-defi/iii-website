"use client";

import { Phone, Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        form.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <AnimateOnScroll animation="slide-in-left">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0E0E0E] mb-8">
              Contáctanos
            </h2>
            <p className="text-lg text-[#6B6B6B] leading-relaxed mb-12">
              Los invitamos a ponerse en contacto para conocer nuestras
              soluciones, recibir asesoría especializada o explorar nuevas
              oportunidades de colaboración.
            </p>
          </AnimateOnScroll>

          <div className="space-y-8">
            <AnimateOnScroll animation="fade-in-up" delay={100}>
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-[#EDEDED] text-[#0E0E0E] rounded-xl transition-all duration-300 group-hover:bg-[#DA2428] group-hover:text-white">
                  <Phone className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-[#6B6B6B] mb-1">
                    Teléfono
                  </span>
                  <a
                    href="tel:+56998271211"
                    className="text-lg font-medium text-[#0E0E0E] hover:text-[#DA2428] transition-colors"
                  >
                    +56 9 9827 1211
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-up" delay={200}>
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-[#EDEDED] text-[#0E0E0E] rounded-xl transition-all duration-300 group-hover:bg-[#DA2428] group-hover:text-white">
                  <Mail className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-[#6B6B6B] mb-1">
                    Email
                  </span>
                  <a
                    href="mailto:enrique.ibarra@iii.cl"
                    className="text-lg font-medium text-[#0E0E0E] hover:text-[#DA2428] transition-colors"
                  >
                    enrique.ibarra@iii.cl
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        <div className="lg:col-span-7">
          <AnimateOnScroll animation="slide-in-right">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-[#FAFAFA] p-8 md:p-12 border border-[#EDEDED] rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <input type="hidden" name="access_key" value="e9f48fae-6085-49a1-aa5f-ab64100a1922" />
              <input type="hidden" name="subject" value="Nuevo mensaje desde iii.cl" />

              {submitStatus === "success" && (
                <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <p className="text-sm">¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.</p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p className="text-sm">Hubo un error al enviar el mensaje. Por favor intente nuevamente.</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold text-[#0E0E0E]"
                  >
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-white border border-[#CCCCCC] p-4 text-[#0E0E0E] focus:outline-none focus:border-[#DA2428] focus:ring-1 focus:ring-[#DA2428] transition-all duration-300 rounded-lg placeholder:text-[#999] text-sm"
                    placeholder="Su nombre completo"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold text-[#0E0E0E]"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-white border border-[#CCCCCC] p-4 text-[#0E0E0E] focus:outline-none focus:border-[#DA2428] focus:ring-1 focus:ring-[#DA2428] transition-all duration-300 rounded-lg placeholder:text-[#999] text-sm"
                    placeholder="nombre@empresa.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-xs font-semibold text-[#0E0E0E]"
                >
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full bg-white border border-[#CCCCCC] p-4 text-[#0E0E0E] focus:outline-none focus:border-[#DA2428] focus:ring-1 focus:ring-[#DA2428] transition-all duration-300 rounded-lg placeholder:text-[#999] text-sm"
                  placeholder="+56 9 ..."
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold text-[#0E0E0E]"
                >
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-white border border-[#CCCCCC] p-4 text-[#0E0E0E] focus:outline-none focus:border-[#DA2428] focus:ring-1 focus:ring-[#DA2428] transition-all duration-300 rounded-lg placeholder:text-[#999] text-sm resize-none"
                  placeholder="¿En qué podemos ayudarle?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-[#0E0E0E] border border-gray-200 font-semibold py-4 px-8 rounded-full hover:bg-[#DA2428] hover:text-white hover:border-[#DA2428] transition-all duration-300 flex justify-center items-center gap-2 text-sm shadow-sm hover:shadow-lg group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    Enviando...
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  </>
                ) : (
                  <>
                    Enviar Mensaje
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
                  </>
                )}
              </button>
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
