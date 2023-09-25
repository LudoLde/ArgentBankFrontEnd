import Account from "./Account";
import UserInfo from "./UserInfo";

const accounts = [
   {
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance",
   },
   {
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      description: "Available Balance",
   },
   {
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      description: "Current Balance",
   },
];

function MainUser(props) {
   const data = props.dataUserInfo;

   return (
      <main className="main bg-dark">
         <UserInfo dataUserInfo={data} />
         <h2 className="sr-only">Accounts</h2>
         {accounts.map((account, index) => (
            <Account key={index} account={account} />
         ))}
      </main>
   );
}

export default MainUser;
