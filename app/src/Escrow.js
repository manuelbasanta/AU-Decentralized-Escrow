export default function Escrow({
  address,
  arbiter,
  beneficiary,
  value,
  isApproved,
  handleApprove,
}) {
  return (
    <div className="existing-contract">
      <ul className="fields">
        <li>
          <div> Arbiter </div>
          <div> {arbiter} </div>
        </li>
        <li>
          <div> Beneficiary </div>
          <div> {beneficiary} </div>
        </li>
        <li>
          <div> Value </div>
          <div> {value} </div>
        </li>
        <li>
          <div> Address </div>
          <div> {address} </div>
        </li>
        <li>
          {
            isApproved ?
            <div>Escrow already approved</div> :
            <div
              className="button"
              id={address}
              onClick={(e) => {
                e.preventDefault();

                handleApprove();
              }}
            >
              Approve
            </div>
          }
        </li>
      </ul>
    </div>
  );
}
