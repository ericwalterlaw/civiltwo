import { Handshake, Shield, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: Handshake,
    title: "Integrity",
    description: "We build trust through honest communication and ethical business practices.",
  },
  {
    icon: Shield,
    title: "Safety",
    description: "Creating a safe work environment is our highest priority on every project.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new technologies and methods to deliver superior results.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Collaboration and mutual respect drive our success as employee-owners.",
  },
];

const leadership = [
  {
    name: "Nolan Hudson",
    role: "Chief Executive Officer",
    description: "25+ years of construction leadership experience, focused on strategic growth and operational excellence.",
    image: "https://res.cloudinary.com/dyj2guzc2/image/upload/v1753279617/IMG_1479_s3gmam.jpg",
  },
];

const ownershipStats = [
  { value: "2,500+", label: "Employee-Owners" },
  { value: "98%", label: "Project Success Rate" },
  { value: "1,200+", label: "Projects Completed" },
];

export default function WhoWeAre() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-blue-800 mb-6">
              Who We Are
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When we focus on mutual success, everyone wins. Learn about our
              culture, values, and the people who make NH Constructions a leader
              in the industry.
            </p>
          </div>

          {/* Company Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-blue-800 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                As a company that is 100 percent employee-owned, we collaborate
                and innovate to help our partners thrive. Our culture of
                ownership drives your success.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Whether you are in the buildings, civil, or industrial market,
                partnering with NH Constructions means you're gaining a proven,
                reliable and trusted full-service partner with a mobile network
                of more than 2,500 employees, experts and seasoned professionals
                across the United States.
              </p>
              <p className="text-gray-600 text-lg">
                From advanced digital construction technologies to innovative
                offsite modular manufacturing, to the cutting edge of
                sustainable construction, we lead the industry as we have for
                more than 25 years.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Construction team collaboration"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-white rounded-lg shadow-sm mb-16 p-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h4 className="font-bold text-blue-800 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
              Leadership Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="font-bold text-blue-800 mb-1">
                    {leader.name}
                  </h4>
                  <p className="text-orange-500 font-medium mb-2">
                    {leader.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {leader.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Employee Ownership */}
          <div className="bg-blue-800 text-white rounded-lg p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">100% Employee-Owned</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Proudly 100% employee owned - see how we put our culture to work
              for you. When every team member has a stake in success, it shows
              in the quality of our work.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {ownershipStats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold text-orange-500 mb-2">
                    {stat.value}
                  </div>
                  <div className="font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}