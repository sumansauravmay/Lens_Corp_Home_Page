import React from "react";
import FreequentlyAsk from "./FreequentlyAsk";
import FaqCode from "./FaqCode";

const Faq = () => {
  return (
    <div>
      <FreequentlyAsk />
      <div className="p-4 bg-white rounded-lg">
        <FaqCode
          title="Do I need to sign a contract?"
          answer="We will first work with you to comprehend your requirements in detail. Thereafter, we would draft an agreement with proposed solutions.After assessing possible challenges and pitfalls and identifying ways to overcome them, we will jointly sign an agreement, not a binding contract."
        />
        <FaqCode
          title="How do we ensure quality of deliverables?"
          answer="We are researchers, first. We thoroughly benchmark our proposed solutions against internal and public datasets and baselines after each development sprint. After final delivery, we will continuously enhance our delivery based on your feedbacks."
        />
        <FaqCode
          title="How do I begin collaboration?"
          answer="Please contact us at solutions@lenscorp.ai. We usually respond within 24 Hrs."
        />

        <FaqCode
          title="What sevices do we offer?"
          answer="We build accurate and efficient AI systems for your business. Our ethically-trained solutions are paving a new path forward to create explainable, transparent, and easily customizable. In addition, we grant ownership of all copyrights to the system, software, and model to you."
        />

        <FaqCode
          title="How do you ensure user privacy?"
          answer="We do not share, sell, or rent your competitive information (including any and all data) to any third party.Since we grant exclusive Intellectual Property Rights back to you, we have no intention of violating any user privacy."
        />

        <FaqCode
          title="How can I pay for the services?"
          answer="We split the entire project into multiple milestones.We work on an advanced milestone payment basis with an option to drop off remaining milestones anytime."
        />
      </div>
    </div>
  );
};

export default Faq;
