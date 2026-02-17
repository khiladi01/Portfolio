function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-0">
      <div className="min-h-[120px] flex flex-col items-center justify-center text-center px-5 py-8">
        
        <h2 className="text-[18px] font-semibold text-black">
          Raushan Raj
        </h2>

        <p className="mt-2 text-[14px] text-gray-700 max-w-md">
          Real world ideas crafted in code and built for performance.
        </p>

        <p className="mt-4 text-sm text-gray-600">
          {new Date().getFullYear()} Raushan Raj. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
