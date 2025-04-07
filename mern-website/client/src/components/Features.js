const Features = () => {
  const features = [
    {
      title: "Innovative Solutions",
      description: "We create cutting-edge technology tailored to your business needs.",
      icon: "💡"
    },
    {
      title: "Expert Team",
      description: "Our professionals have years of experience in their fields.",
      icon: "👨‍💻"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance whenever you need it.",
      icon: "🛟"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;