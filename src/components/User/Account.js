import "../../styles/components/User/Account.css";

function Account(props) {
   const account = props.account;

   return (
      <section className="account">
         <div className="account-content-wrapper">
            <h3 className="account-title">{account.title}</h3>
            <p className="account-amount">{account.amount}</p>
            <p className="account-amount-description">{account.description}</p>
         </div>
         <div className="account-content-wrapper cta">
            <button className="transaction-button">View Transactions</button>
         </div>
      </section>
   );
}

export default Account;
