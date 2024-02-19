// Card component to display user profile and attributes
const Card = ({ userProfile, attributes }: { userProfile: any; attributes: string[] }) => (
    <div className="card">
      <div className="profile-card">
        <div className="user-profile">
          <img src={userProfile.avatar} alt="User Avatar" />
          <h2>{userProfile.name}</h2>
        </div>
      </div>
      <div className="attributes">
        {attributes.map((attribute, index) => (
          <div className="attribute" key={index}>
            {attribute}
          </div>
        ))} 
      </div>
    </div>
  );

export default Card;
