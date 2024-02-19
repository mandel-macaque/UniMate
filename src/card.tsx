// Card component to display user profile and attributes
const Card = ({ userProfile, attributes }: { userProfile: any; attributes: string[] }) => (
  <div className="border border-gray-300 rounded-lg shadow-md p-6 m-4 w-1/2">
    <div className="flex justify-center">
      <div className="border border-gray-300 rounded-lg shadow-md p-6 m-4">
        <div className="text-center">
          <img src={userProfile.avatar} alt="User Avatar" className="block mx-auto w-1/2 rounded-full mb-4" />
          <h2>{userProfile.name}</h2>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap justify-center">
      {attributes.map((attribute, index) => (
        <div className="bg-gray-200 px-4 py-2 rounded-full m-2" key={index}>
          {attribute}
        </div>
      ))}
    </div>
    <button type="button" className="bg-white">Click Me!</button>
  </div>
);

export default Card;
