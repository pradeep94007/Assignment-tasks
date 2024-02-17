import React from 'react';

const ListView = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={item.id}>
          {/* Assuming each item in the array has an 'id' property */}
          {/* You can replace 'id' with any unique identifier */}
          <p>{item.name}</p>
          {/* Assuming 'name' is a property of each item */}
        </div>
      ))}
    </div>
  );
};

export default ListView;
