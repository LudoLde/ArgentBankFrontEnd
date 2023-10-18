import "/Users/ludzy/Desktop/ArgentBank-Frontend/argentbank/src/styles/components/User/Transactions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faPencil } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Transactions = () => {
   const transactions = [
      { Date: "27/02/20", Description: "Golden Sun Bakery", Amount: "$8.00", Balance: "$298.00" },
      {
         Date: "25/02/20",
         Description: "Golden Sun Bakery",
         Amount: "$10.00",
         Balance: "$298.00",
      },
   ];
   const [selectedTransaction, setSelectedTransaction] = useState(null);
   const [isEditing, setIsEditing] = useState(false); // Nouvelle variable d'état pour suivre l'état d'édition
   const [selectedCategory, setSelectedCategory] = useState("");

   const showDetails = (index) => {
      setSelectedTransaction(index === selectedTransaction ? null : index);
   };

   const toggleEditing = () => {
      setIsEditing(!isEditing); // Inverse l'état d'édition lorsqu'on clique sur l'icône du crayon
   };
   const handleCategoryChange = (e) => {
      // Une fois la catégorie enregistrée, réinitialisez l'état d'édition.
      setSelectedCategory(e.target.value);
      setIsEditing(false);
   };

   return (
      <div className="transactions-container">
         <div className="transactions-container-menu">
            <p className="transaction-date transaction-menu-design">Date</p>
            <p className="transaction-description transaction-menu-design">Description</p>
            <p className="transaction-amount transaction-menu-design">Amount</p>
            <p className="transaction-balance transaction-menu-design">Balance</p>
         </div>
         {transactions.map((transaction, index) => (
            <div className="transaction-container" key={index}>
               <div className="transactions-list-items">
                  <p className="transaction-date">{transaction.Date}</p>
                  <p className="transaction-description">{transaction.Description}</p>
                  <p className="transaction-amount">{transaction.Amount}</p>
                  <p className="transaction-balance">{transaction.Balance}</p>
                  <FontAwesomeIcon icon={faChevronDown} className="chevron-design" onClick={() => showDetails(index)} />
               </div>
               {selectedTransaction === index && (
                  <div className="transactions-details">
                     <p className="transactions-details-margin-block-top">
                        Transaction Type <span>Electronic</span>
                     </p>
                     {isEditing ? ( // Afficher le contenu en fonction de l'état d'édition
                        <p>
                           Category
                           <select name="category" value={selectedCategory} onChange={handleCategoryChange}>
                              <option value="food">Food</option>
                              <option value="insurances">Insurances</option>
                           </select>
                        </p>
                     ) : (
                        <p>
                           Category
                           <span className="edit-display-none">
                              Food
                              <FontAwesomeIcon icon={faPencil} className="pencil-design" onClick={toggleEditing} />
                           </span>
                        </p>
                     )}
                     <p className="transactions-details-margin-block-end">
                        Note
                        <span>
                           Lorem Ipsum
                           <FontAwesomeIcon icon={faPencil} className="pencil-design" />
                        </span>
                     </p>
                  </div>
               )}
            </div>
         ))}
      </div>
   );
};

export default Transactions;
