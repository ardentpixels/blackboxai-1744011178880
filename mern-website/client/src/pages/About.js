import Team from '../components/Team';
import Mission from '../components/Mission';
import Values from '../components/Values';

const About = () => {
  return (
    <div className="space-y-16 pb-16">
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">About Our Company</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          We are a passionate team dedicated to building innovative solutions that make a difference.
          Founded in 2023, our mission is to deliver exceptional value to our customers through
          cutting-edge technology and outstanding service.
        </p>
      </section>
      
      <Mission />
      <Values />
      <Team />
    </div>
  );
};

export default About;