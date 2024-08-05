import { Paw } from "lucide-react";

const Index = () => {
  const popularBreeds = [
    "Labrador Retriever",
    "German Shepherd",
    "Golden Retriever",
    "French Bulldog",
    "Bulldog",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <Paw className="mx-auto h-12 w-12 text-indigo-600" />
          <h1 className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">All About Dogs</h1>
          <p className="mt-4 text-xl text-gray-500">Man's best friend and loyal companion</p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Dogs</h2>
          <p className="text-gray-700 mb-6">
            Dogs are domesticated mammals known for their loyalty, companionship, and diverse breeds. 
            They have been living alongside humans for thousands of years, serving various roles from 
            working animals to beloved pets.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">Popular Dog Breeds</h3>
          <ul className="list-disc pl-5 mb-6">
            {popularBreeds.map((breed, index) => (
              <li key={index} className="text-gray-700">{breed}</li>
            ))}
          </ul>

          <img 
            src="/placeholder.svg" 
            alt="A group of diverse dog breeds" 
            className="mx-auto object-cover w-full h-64 rounded-lg shadow-md"
          />
          <p className="mt-2 text-sm text-gray-500 text-center">Various dog breeds showcasing their diversity</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
