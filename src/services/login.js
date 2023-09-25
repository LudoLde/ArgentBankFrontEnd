const login = async (credential) => {
   return fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
         "Content-type": "application/json",
      },
      body: JSON.stringify(credential),
   }).then((response) => {
      return response.json();
   });
};

export default login;
