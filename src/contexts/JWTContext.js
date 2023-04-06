import { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
// utils
import axios from '../utils/axios';
import { isValidToken, setSession } from '../utils/jwt';

// ----------------------------------------------------------------------

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  LOGIN: (state, action) => {
    const { user } = action.payload;
    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
  REGISTER: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  UPDATEADDRESS: (state, action) => {
    const { user } = state;
    user.addresses = [
      ...user.addresses.map((item) => {
        if (item.id === action.payload.id) {
          return {
            id: action.payload.id,
            line1: action.payload.address,
            apartment: action.payload.apartment,
            state: action.payload.state,
            city: action.payload.city,
            zip: action.payload.zip,
            address_type: null,
            addressable_type: 'User',
            addressable_id: 15,
            primary_address: true,
            created_at: '2023-04-04T08:34:27.021Z',
            updated_at: new Date(),
          };
        } else {
          return item;
        }
      }),
    ];
    return {
      ...state,
      user,
    };
  },
};

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state);

const AuthContext = createContext({
  ...initialState,
  method: 'jwt',
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
  updateAddress: () => Promise.resolve(),
});

// ----------------------------------------------------------------------

AuthProvider.propTypes = {
  children: PropTypes.node,
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : '';

        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);

          const response = await axios.get(`/api/${process.env.API_VERSION}/users/profile`);
          const user = response.data;

          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, [state.isAuthenticated]);

  const login = async (email, password) => {
    const response = await axios.post(`/api/${process.env.API_VERSION}/login`, {
      email,
      password,
    });

    const { auth_token, user } = response.data;

    setSession(auth_token);
    dispatch({
      type: 'LOGIN',
      payload: {
        user,
      },
    });
  };

  const register = async (first_name, last_name, email, password, password_confirmation) => {
    const response = await axios.post(`/api/${process.env.API_VERSION}/sign_up`, {
      users: {
        first_name,
        last_name,
        email,
        password,
        password_confirmation,
        user_type: 'end_user',
      },
    });
    const { accessToken, user } = response.data;

    localStorage.setItem('accessToken', accessToken);
    dispatch({
      type: 'REGISTER',
      payload: {
        user,
      },
    });
  };

  const logout = async () => {
    setSession(null);
    dispatch({ type: 'LOGOUT' });
  };

  const updateAddress = async (data) => {
    await axios.post(`/api/${process.env.API_VERSION}/users/addresses/${data?.id}/update`, {
      address: {
        line1: data.address,
        apartment: data.apartment,
        state: data.state,
        city: data.city,
        zip: data.zip,
        primary_address: 'true',
      },
    });

    dispatch({
      type: 'UPDATEADDRESS',
      payload: data,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'jwt',
        login,
        logout,
        register,
        updateAddress,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
