const services = [
  {
    title: "Buildings",
    description: "Commercial, residential, and institutional construction projects with sustainable building practices.",
    image: "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?q=80&w=1046&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Civil Infrastructure",
    description: "Transportation, water systems, and public infrastructure that connects communities.",
    image: "https://images.unsplash.com/photo-1533378890784-b2a5b0a59d40?q=80&w=1137&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Industrial",
    description: "Manufacturing, energy, and specialized industrial facilities for complex operations.",
    image: "https://images.unsplash.com/photo-1553949345-eb786bb3f7ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  },
];

export default function ServicesPreview() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">
            What We Build
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We look beyond your immediate construction needs to develop
            comprehensive solutions for each project
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
                <button className="mt-4 text-orange-500 font-medium hover:text-orange-600 transition-colors">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-3 px-8 rounded-md transition-colors">
            View All Services
          </button>
        </div>
      </div>
    </div>
  );
}