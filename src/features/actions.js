export const loginSuccess = (token, status, message) => {
   return {
      type: "LOGIN_SUCCESS",
      payload: {
         token: token,
         status: status,
         message: message,
      },
   };
};
export const loginFailure = (status, message) => {
   return {
      type: "LOGIN_FAILURE",
      payload: {
         status: status,
         message: message,
      },
   };
};

export const logoutRequest = () => {
   return {
      type: "USER_LOGGED_OUT",
   };
};

export const receiveData = (data, status) => {
   return {
      type: "RECEIVE_DATA",
      payload: {
         data: data,
         status: status,
      },
   };
};

// Login action

export const loginUser = (credential) => {
   return (dispatch) => {
      fetch("http://localhost:3001/api/v1/user/login", {
         method: "POST",
         headers: {
            "Content-type": "application/json",
         },
         body: JSON.stringify(credential),
      })
         .then((data) => data.json())
         .then((data) => {
            try {
               dispatch(loginSuccess(data.body.token, data.status, data.message));
               dispatch(userProfile(data.body.token));
            } catch (e) {
               dispatch(loginFailure(data.status, data.message));
            }
         })
         .catch((error) => {
            dispatch(loginFailure(error));
         });
   };
};

// User's profile action

export const userProfile = (token) => {
   return (dispatch) => {
      return fetch("http://localhost:3001/api/v1/user/profile", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
         },
      })
         .then((response) => response.json())
         .then((data) => {
            dispatch(receiveData(data.body, data.status));
            console.log(data);
         })
         .catch((error) => {
            if (error.response.status === 401) {
               dispatch(loginFailure(error));
            }
         });
   };
};

// User's update profile

export const updateProfile = (token, newUserName) => {
   return (dispatch) => {
      const requestData = {
         userName: newUserName, // Utilisez la valeur de newUserName provenant du formulaire
      };
      return fetch("http://localhost:3001/api/v1/user/profile", {
         method: "PUT",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            accept: "application/json",
         },
         body: JSON.stringify(requestData),
      })
         .then((response) => response.json())
         .then((data) => {
            dispatch(receiveData(data.body, data.status));
         })
         .catch((error) => {
            dispatch(loginFailure(error));
         });
   };
};
