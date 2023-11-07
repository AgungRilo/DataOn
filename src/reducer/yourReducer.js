// Redux/yourReducer.js

const initialState = {
    // State awal Anda
    isAuthenticated: false,
    user: null,
  };
  
  const yourReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'YOUR_ACTION_TYPE':
        return {
          ...state,
         
        };
      case 'LOGIN':        
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
        };
      case 'LOGOUT':
        
        return {
          ...state,
          isAuthenticated: false,
          user: null,
        };
      default:
        return state;
    }
  };
  
  export default yourReducer;