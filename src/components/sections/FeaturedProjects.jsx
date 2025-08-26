export default function FeaturedProject() {
  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-orange-500 font-semibold mb-2">Featured Project</div>
            <h2 className="text-4xl font-bold text-blue-800 mb-6">Metro University Student Center</h2>
            <p className="text-gray-600 text-lg mb-6">
              A 275,000 square foot student center featuring modern learning spaces, dining facilities, and recreational areas. This LEED Gold certified project demonstrates our commitment to sustainable construction practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div>
                <div className="font-semibold text-blue-800">Location</div>
                <div className="text-gray-600">California</div>
              </div>
              <div>
                <div className="font-semibold text-blue-800">Market</div>
                <div className="text-gray-600">Education</div>
              </div>
              <div>
                <div className="font-semibold text-blue-800">Value</div>
                <div className="text-gray-600">$85M</div>
              </div>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
              View Project Details
            </button>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Metro University Student Center" 
              className="rounded-xl shadow-lg w-full" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}