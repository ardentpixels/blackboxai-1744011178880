const Values = () => {
  const values = [
    {
      title: "Integrity",
      description: "We uphold the highest standards of integrity in all our actions."
    },
    {
      title: "Innovation",
      description: "We strive to innovate and improve continuously."
    },
    {
      title: "Customer Focus",
      description: "We prioritize our customers and their needs."
    },
    {
      title: "Teamwork",
      description: "We work together to achieve common goals."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;