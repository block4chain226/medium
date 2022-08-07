import React, { useContext, useState } from "react";
import "../css/NewStory.css";
import { create } from "ipfs-http-client";
import AuthContext from "../context/AuthContext";
import { TextUpload } from "react-ipfs-uploader";
import { ethers } from "ethers";
const ABI = require("../ABI.json");

const NewStory = () => {
  const { accounts } = useContext(AuthContext);
  console.log("acci: ", accounts[0]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [textUrl, setTextUrl] = useState("");
  const [fileUrl, updateFileUrl] = useState(``);
  const contractAddress = "0x07b665A5B0eAA67afB20Be57522c2E64079b54c4";

  const client = create({ url: "https://ipfs.infura.io:5001/api/v0" });

  async function mintNft(fileUrl) {
    console.log("acc ", accounts[0]);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, ABI.abi, signer);
    try {
      const result = await contract.safeMint(accounts[0], fileUrl, {
        value: ethers.utils.parseEther("0.1"),
      });
      await result.wait();
      console.log("acc ", accounts);
      console.log("result ", result);
    } catch (err) {
      console.log("error: ", err);
    }
  }

  async function uploadFiles(e) {
    e.preventDefault();
    const metaData = {
      title,
      text: text.split(),
    };
    const mJson = JSON.stringify(metaData);
    try {
      const added = await client.add(mJson);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      updateFileUrl(url);
      const result = await uploadNftMetadata(url);
      updateFileUrl(result);
      mintNft(result);
    } catch (err) {
      console.error("error", err);
    }
  }

  async function uploadNftMetadata(url) {
    const nftMetadata = {
      image:
        "https://ipfs.io/ipfs/QmWEsG4ayh75BMk2H1CowAdALPjsi3fD7CSZ6qxNM1yNnz/image/moralis.png",
      description: title,
      externalUrl: url,
    };
    const nftJ = JSON.stringify(nftMetadata);
    try {
      const addedNft = await client.add(nftJ);
      const urlNft = `https://ipfs.infura.io/ipfs/${addedNft.path}`;
      return urlNft;
    } catch (err) {
      console.error("error: ", err);
    }
  }

  return (
    <div className="container4">
      <form className="write-form">
        <div className="input-form">
          <input
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title..."
            autoFocus={true}
          />
          <textarea
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder="Write something..."
          />
          <p>{fileUrl}</p>
        </div>
        <div className="submit">
          <a className="button3" type="submit" onClick={uploadFiles}>
            Post
          </a>
        </div>
      </form>
    </div>
  );
};

export default NewStory;
