const AssessmentSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 px-2">
          Assessoria <span className="text-gradient-midas">Midas</span>
        </h2>
        
        <div className="bg-card border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-premium">
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl leading-relaxed">
            <p className="text-foreground px-2">
              Nós estruturamos o marketing da sua operação de apostas com base na sua 
              <strong className="text-primary"> real necessidade</strong>.
            </p>
            
            <p className="text-foreground px-2">
              Você pode ter nosso time ao seu lado ou 
              <strong className="text-success"> terceirizar 100%</strong> com a Midas.
            </p>
            
            <p className="text-foreground px-2">
              Sem dor de cabeça com equipe, gestão ou burocracia.
            </p>
            
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary px-2">
              Você foca no caixa. Nós focamos em encher ele de depositantes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentSection;