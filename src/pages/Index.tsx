import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ChatWidget from "@/components/chat/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-indigo-600">PathWise</h1>
            <div className="hidden md:flex ml-10 space-x-8">
              <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">My Paths</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">Leaderboard</a>
            </div>
          </div>
          <Button className="bg-indigo-600 hover:bg-indigo-700">Sign In</Button>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          <span className="text-indigo-600">Your Personalized Learning </span>
          <span className="text-cyan-500">Journey </span>
          <span className="text-teal-400">Starts Here</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Discover the perfect path to master any technology. Learn, track progress, and compete with others in your learning journey.
        </p>

        {/* Search Bar */}
        <div className="flex max-w-xl mx-auto mb-16">
          <Input 
            className="flex-1 rounded-r-none" 
            placeholder="Search for any technology or topic..." 
          />
          <Button className="rounded-l-none bg-indigo-600 hover:bg-indigo-700">
            Explore
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-20">
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-indigo-600">1000+</p>
            <p className="text-gray-600">Learning Paths</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-indigo-600">50K+</p>
            <p className="text-gray-600">Active Learners</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-indigo-600">95%</p>
            <p className="text-gray-600">Success Rate</p>
          </div>
        </div>

        {/* Popular Learning Paths */}
        <h3 className="text-2xl font-bold text-left mb-6">Popular Learning Paths</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-indigo-600 font-bold">#{item}</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Learning Path {item}</h4>
              <p className="text-gray-600 mb-4">Master the fundamentals and advanced concepts with our comprehensive curriculum.</p>
              <Button variant="outline" className="w-full">View Path</Button>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Widget - now without API key parameter */}
      <ChatWidget />
    </div>
  );
};

export default Index;
