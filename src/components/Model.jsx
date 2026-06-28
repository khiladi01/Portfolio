import profileimage from "../assets/Image/Raushan Raj.jpeg";

export default function Model() {
  return (
    <div className="w-full h-full flex justify-center items-center">
  <div className="relative flex justify-center items-center">
    
    {/* Outer rotating ring */}
    <div className="absolute w-92 h-92 rounded-full border-2 border-dashed border-blue-400 animate-spin" style={{ animationDuration: '10s' }} />
    
    {/* Gradient ring */}
    <div className="absolute w-88 h-88 rounded-full p-1" style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)' }}>
      <div className="w-full h-full rounded-full bg-white" />
    </div>

    {/* Profile image */}
    <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl" style={{ boxShadow: '0 0 40px rgba(59, 130, 246, 0.3)' }}>
      <img
        src={profileimage}
        alt="Raushan Raj"
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
      />
    </div>

    {/* Online badge */}
    <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-md border border-gray-100">
      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
      <span className="text-xs font-medium text-gray-600">Available to hire</span>
    </div>

  </div>
</div>
  );
}