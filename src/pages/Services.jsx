import { Building, Construction, Factory, Check } from "lucide-react";

const serviceCategories = [
  {
    icon: Building,
    title: "Buildings",
    description: "From P3s and EPC delivery methods to preconstruction services, we're ready to support your building needs.",
    services: ["Commercial & Retail", "Education", "Healthcare", "Hospitality", "Multifamily Residential"]
  },
  {
    icon: Construction,
    title: "Civil Infrastructure",
    description: "From engineering to preconstruction, we offer a variety of services and delivery methods for infrastructure projects.",
    services: ["Transportation Infrastructure", "Water & Wastewater Treatment", "Aviation Infrastructure", "Marine & Port Facilities", "Transit Stations"]
  },
  {
    icon: Factory,
    title: "Industrial",
    description: "From maintenance and turnarounds to modular construction and fabrication, we offer comprehensive industrial services.",
    services: ["Oil & Gas", "Manufacturing", "Mining", "Power Generation", "Renewable Energy"]
  }
];

const coreServices = [
  { icon: Building, title: "Preconstruction" },
  { icon: Construction, title: "Construction Management" },
  { icon: Factory, title: "Design-Build" },
  { icon: Check, title: "Sustainable Construction" }
];

const projects = [
  {
    title: "Regional Medical Center",
    category: "Healthcare",
    value: "$120M",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    title: "Metro Highway Bridge",
    category: "Infrastructure",
    value: "$45M",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    title: "Advanced Manufacturing Plant",
    category: "Industrial",
    value: "$180M",
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  }
];

export default function Services() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-blue-800 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From preconstruction planning to project delivery, we provide comprehensive construction services across all sectors
            </p>
          </div>

          {/* Service Categories */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-8">
                <category.icon className="h-12 w-12 text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold text-blue-800 mb-4">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <ul className="space-y-2 text-gray-600">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="h-4 w-4 text-orange-500 mr-2" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Core Services */}
          <div className="bg-gray-100 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Core Construction Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreServices.map((service, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="text-3xl text-orange-500 mb-3">
                      <service.icon className="h-8 w-8 mx-auto" />
                    </div>
                    <h4 className="font-semibold text-blue-800">{service.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Gallery */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Recent Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="font-semibold">{project.title}</h4>
                      <p className="text-sm">{project.category} • {project.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}