export function Stats() {
  const stats = [
    { number: "2+", label: "Years Experience", color: "text-orange-500" },
    { number: "10", label: "Completed Projects", color: "text-blue-400" },
    { number: "7", label: "Happy Customers", color: "text-green-400" },
    { number: "2", label: "Honors and Awards", color: "text-purple-400" },
  ]

  return (
    <div className="py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
