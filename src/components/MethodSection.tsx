const MethodSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-card border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-premium">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-gradient-midas">
            Método Comprovado
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-foreground mb-4 px-2">
              Existe um método <strong className="text-primary">científico</strong> para que sua operação 
              nunca pare de receber depósitos.
            </p>
            
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-foreground mb-4 px-2">
              Se você <strong className="text-success">seguir</strong>, sua banca vai crescer todos os dias.
            </p>
            
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-foreground px-2">
              Se <strong className="text-destructive">ignorar</strong>, vai continuar parada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;