export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.7), rgba(30, 58, 138, 0.7)), url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Building Excellence
          <br />
          <span className="text-orange-400">for 25+ Years</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light">
          When we focus on mutual success, everyone wins. Partner with us for
          innovative construction solutions that transform communities.
        </p>
        
        {/* Call-to-action button */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300">
          Get a Free Consultation
        </button>
      </div>
    </div>
  );
}