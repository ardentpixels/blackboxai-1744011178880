const HeroSection = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to Our Website</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          We provide innovative solutions to help your business grow and succeed in the digital world.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;