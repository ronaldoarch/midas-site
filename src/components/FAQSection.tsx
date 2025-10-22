const FAQSection = () => {
  const faqs = [
    {
      question: "Funciona para casas pequenas?",
      answer: "Sim."
    },
    {
      question: "Em quanto tempo vejo resultado?", 
      answer: "Dias, não meses."
    },
    {
      question: "Preciso ter equipe interna?",
      answer: "Não. A Midas pode ser sua equipe completa."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 px-2">
          <span className="text-gradient-midas">FAQ</span>
        </h2>
        
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground flex-1">
                  {faq.question}
                </h3>
                <div className="text-2xl sm:text-3xl text-primary font-bold flex-shrink-0">👉</div>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-success font-semibold mt-3 sm:mt-4">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;