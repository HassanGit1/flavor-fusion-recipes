const Loader: React.FC = () => {
    return (
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="flex space-x-2">
          <div className="w-5 h-5 bg-gradient-to-r from-[#2a4d69] to-[#4b86b4] rounded-full animate-bounce"></div>
          <div className="w-5 h-5 bg-gradient-to-r from-[#2a4d69] to-[#4b86b4] rounded-full animate-bounce"></div>
          <div className="w-5 h-5 bg-gradient-to-r from-[#2a4d69] to-[#4b86b4] rounded-full animate-bounce"></div>
        </div>
      </div>
    );
  };
  
  export default Loader;
  