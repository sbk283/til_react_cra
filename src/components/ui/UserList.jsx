import styled from "@emotion/styled";
import React from "react";

const UserCard = styled.div`
  width: 500px;
  display: inline-block;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
  border: 6px solid #ffb703;
  margin: 20px;
  padding: 20px;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
    border: 6px solid yellowgreen;
  }
`;
const UserNameCard = styled.h2`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
  font-size: 15px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 5px;
`;
const UserAddressCard = styled.div`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
  font-size: 15px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 5px;
`;
const UserGeoCard = styled.div`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
  font-size: 15px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 5px;
`;
const UserContactCard = styled.div`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
  font-size: 15px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 5px;
`;
const UserCompanyCard = styled.div`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
  font-size: 15px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 5px;
`;

function UserList({ user }) {
  const { id, name, username, email, address, phone, website, company } = user;
  const { street, suite, city, zipcode, geo } = address;
  const { name: companyName, catchPhrase, bs } = company;
  const { lat, lng } = geo;

  return (
    <UserCard>
      <UserNameCard>
        <h2>{name}</h2>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
      </UserNameCard>
      <UserAddressCard>
        <h3>📍 Address</h3>
        <p>
          {street}, {suite}, {city}, {zipcode}
        </p>
      </UserAddressCard>
      <UserGeoCard>
        <h3>🗺 Geo</h3>
        <p>
          Latitude: {lat}, Longitude: {lng}
        </p>
      </UserGeoCard>
      <UserContactCard>
        <h3>☎ Contact</h3>
        <p>Phone: {phone}</p>
        <p>Website: {website}</p>
      </UserContactCard>
      <UserCompanyCard>
        <h3>🏢 Company</h3>
        <p>Name: {companyName}</p>
        <p>Catchphrase: {catchPhrase}</p>
        <p>BS: {bs}</p>
      </UserCompanyCard>
    </UserCard>
  );
}

export default UserList;
