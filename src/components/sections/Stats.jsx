const stats = [
  { value: "25+", label: "Years in Operation" },
  { value: "$2.3M+", label: "Annual Construction Volume" }, // Changed m to B for billions
  { value: "#15", label: "Top Regional Contractor" },
  { value: "100%", label: "Employee Owned" },
];

export default function Stats() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm p-8 text-center hover:shadow-md transition-shadow"
            >
              <div className="text-4xl font-bold text-blue-800 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}