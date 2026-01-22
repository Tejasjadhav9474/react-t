const Contact = () => {
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center">
      <div className="max-w-3xl text-center px-6">
        <h1 className="text-4xl font-bold text-green-400">
          Contact
        </h1>
        <p className="mt-4 text-gray-300 text-lg">
          You can contact us at
          <span className="text-indigo-400 font-semibold">
            {" "}contact@example.com
          </span>
        </p>
      </div>
    </div>
  );
};

export default Contact;

