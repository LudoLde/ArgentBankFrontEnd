// Login reducer

export const loginReducer = (state = { token: "", status: "", message: "" }, action) => {
   switch (action.type) {
      case "LOGIN_SUCCESS":
         return (state = {
            token: action.payload.token,
            status: action.payload.status,
            message: action.payload.message,
         });
      case "LOGIN_FAILURE":
         return (state = {
            token: null,
            status: action.payload.status,
            message: action.payload.message,
         });
      case "USER_LOGGED_OUT":
         return (state = {
            token: "",
            status: "",
            message: "",
         });
      default:
         return state;
   }
};

// User reducer

export const userReducer = (state = { status: "", email: "", firstName: "", lastName: "", userName: "" }, action) => {
   switch (action.type) {
      case "RECEIVE_DATA":
         return (state = {
            status: action.payload.status,
            id: action.payload.data.id,
            createdAt: action.payload.data.createdAt,
            updatedAt: action.payload.data.updatedAt,
            email: action.payload.data.email,
            firstName: action.payload.data.firstName,
            lastName: action.payload.data.lastName,
            userName: action.payload.data.userName,
         });
      case "USER_LOGGED_OUT":
         return (state = {
            status: "",
            email: "",
            firstName: "",
            lastName: "",
         });
      default:
         return state;
   }
};
