//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.11;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract Medium is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter; 
    Counters.Counter private _tokenIdCounter;
    uint public fees;

    constructor(
        string memory name_,
        string memory symbol_,
        uint fees_
    ) ERC721(name_, symbol_){fees = fees_;}

    function safeMint(address to, string memory _tokenURI) public payable{
        require(msg.value>=fees, "not enough MATIC");
        payable(owner()).transfer(fees);
        //Mint NFT
        uint tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, _tokenURI);
        //return over fees
        uint contractBalance = address(this).balance;
        if(contractBalance>0){
            payable(msg.sender).transfer(address(this).balance);
        }
    }

    function _burn(uint tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint tokenId) public view override(ERC721, ERC721URIStorage) returns(string memory){
        return super.tokenURI(tokenId);
    }
}
