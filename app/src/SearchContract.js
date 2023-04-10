import { useState } from "react";
import getContract from "./getContract";

const SearchContract = ({signer, addEscrow, approve, provider}) => {
    const [inputValue, setInputValue] = useState('');
    const handleChage = event => {
        setInputValue(event.target.value);
    }

    const handleSubmit = async () => {
        const contract = await getContract(inputValue, signer);
        try {
            const escrow = {
                address: contract.address,
                arbiter: await contract.arbiter(),
                beneficiary:  await contract.beneficiary(),
                isApproved: await contract.isApproved(),
                value: (await provider.getBalance(contract.address)).toString(),
                handleApprove: async () => {
                    contract.on('Approved', () => {
                    document.getElementById(contract.address).className =
                      'complete';
                    document.getElementById(contract.address).innerText =
                      "✓ It's been approved!";
                  });
          
                  await approve(contract, signer);
                },
              };
              addEscrow(escrow);
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <div className="existing-contracts">
            <h1> Search Contracts </h1>
        
            <div>
                <input
                    value={inputValue}
                    onChange={handleChage}
                    onKeyDown={(event) => event.code === 'Enter' && handleSubmit()}/>
            </div>
        </div>
    )
}

export default SearchContract;