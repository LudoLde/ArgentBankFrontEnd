import "/Users/ludzy/Desktop/ArgentBank-Frontend/argentbank/src/styles/components/User/Userinfo.css";
import { useState } from "react";
import { updateProfile } from "../../features/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function UserInfo() {
   const user = useSelector((state) => state.user);
   const auth = useSelector((state) => state.auth);

   const dispatch = useDispatch();

   const [editButton, setEditButton] = useState();
   const [newFirstName, setNewFirstName] = useState(user.firstName);
   const [newLastName, setNewLastName] = useState(user.lastName);
   const [newUserName, setNewUsername] = useState(user.userName); //permet de faire passer l'info à updateprofil

   const editNameButton = async (e) => {
      e.preventDefault();
      setEditButton((current) => !current);
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch(updateProfile(auth.token, newUserName));
      setEditButton((current) => !current);
   };

   return (
      <div className="user-info-container">
         {!editButton ? (
            <div className="header">
               <h1>
                  Welcome back
                  <br />
                  {user.firstName + " " + user.lastName}
               </h1>
               <button onClick={editNameButton} className="edit-button">
                  Edit Name
               </button>
            </div>
         ) : (
            <div className="header">
               <h1>Welcome back</h1>
               <form className="editNameContent" onSubmit={handleSubmit}>
                  <div className="input-wrapper">
                     <label htmlFor="firstname">Username</label>
                     <input type="text" value={newUserName} onChange={(e) => setNewUsername(e.target.value)} required />
                  </div>
                  <div className="input-wrapper">
                     <label htmlFor="firstname">Firstname</label>
                     <input type="text" value={newFirstName} onChange={(e) => setNewFirstName(e.target.value)} required />
                  </div>
                  <div className="input-wrapper">
                     <label htmlFor="lastname">Lastname</label>
                     <input type="text" value={newLastName} onChange={(e) => setNewLastName(e.target.value)} required />
                  </div>
                  <div className="editNameButtons">
                     <button className="save-button" type="submit">
                        Save
                     </button>
                     <button className="cancel-button" onClick={editNameButton}>
                        Cancel
                     </button>
                  </div>
               </form>
            </div>
         )}
      </div>
   );
}

export default UserInfo;
