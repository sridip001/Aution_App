import React, { useState } from "react";

const PostAuction = () => {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");

  const handlePost = () => {
    alert(`Auction Posted: ${item} - $${price}`);
  };

  return (
    <div className="p-10 text-center">
      <h2 className="text-2xl font-bold">Post Auction</h2>
      <input type="text" placeholder="Item Name" className="border p-2 mt-4" onChange={(e) => setItem(e.target.value)} />
      <input type="number" placeholder="Starting Price" className="border p-2 mt-4" onChange={(e) => setPrice(e.target.value)} />
      <button className="bg-green-500 text-white p-2 mt-4" onClick={handlePost}>Post Auction</button>
    </div>
  );
};

export default PostAuction;
