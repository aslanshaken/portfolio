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

  UPDATE_AVATAR: (state, action) => {
    state.user.image = action.payload;
    return {
      ...state,
      user: state.user,
    };
  },

  ADDADDRESS: (state, action) => {
    const { user } = state;
    user.addresses = [
      {
        id: action.payload.id,
        line1: action.payload.line1,
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
      },
    ];
    return {
      ...state,
      user,
    };
  },

  UPDATEPERSONALINFO: (state, action) => {
    const { user } = state;
    user.user = {
      first_name: action.payload.first_name,
      last_name: action.payload.last_name,
      username: action.payload.username,
      mobile: action.payload.phone_number,
      email: action.payload.email_address,
      instagram: action.payload.instagram,
      facebook: action.payload.facebook,
    };
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
  updateAvatar: () => Promise.resolve(),
  addAddress: () => Promise.resolve(),
  updatePersonalInfo: () => Promise.resolve(),
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

  const register = async (data) => {
    const response = await axios.post(`/api/${process.env.API_VERSION}/sign_up`, {
      users: {
        first_name: data.firstName,
        last_name: data.lastName,
        mobile: data.phoneNumber,
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation,
        user_type: 'end_user',
      },
    });
    const { user, auth_token } = response.data;
  };

  const confirm = async (data) => {
    const response = await axios.post(`/api/${process.env.API_VERSION}/confirm_user`, data);
  };

  const logout = async () => {
    setSession(null);
    dispatch({ type: 'LOGOUT' });
  };

  const updateAddress = async (data) => {
    dispatch({
      type: 'UPDATEADDRESS',
      payload: data,
    });

    const response = await axios.post(`/api/${process.env.API_VERSION}/users/addresses/${data?.id}/update`, {
      address: {
        line1: data.address,
        apartment: data.apartment,
        state: data.state,
        city: data.city,
        zip: data.zip,
        primary_address: 'true',
      },
    });
    return response;
  };

  const addAddress = async (data) => {
    const response = await axios.post(`/api/${process.env.API_VERSION}/users/add_address`, {
      address: {
        line1: data.address,
        apartment: data.apartment,
        state: data.state,
        city: data.city,
        zip: data.zip,
        primary_address: 'true',
      },
    });

    const userInfo = await axios.get(`/api/${process.env.API_VERSION}/users/profile`);

    dispatch({
      type: 'ADDADDRESS',
      payload: userInfo.data.addresses[0],
    });

    return response;
  };

  const updatePersonalInfo = async (data) => {
    dispatch({
      type: 'UPDATEPERSONALINFO',
      payload: data,
    });

    const response = await axios.post(`/api/${process.env.API_VERSION}/users/update_personal_info`, {
      user: {
        first_name: data.first_name,
        last_name: data.last_name,
        username: data.username,
        mobile: data.phone_number,
        instagram: data.instagram,
        facebook: data.facebook,
      },
    });
    return response;
  };

  const updateAvatar = async (avatarUrl) => {
    dispatch({
      type: 'UPDATE_AVATAR',
      payload: avatarUrl,
    });

    return await Promise.resolve(true);
  };

  const updatePassword = async (data) => {
    const response = await axios.post(`/api/${process.env.API_VERSION}/users/update_password`, {
      new_password: data.new_password,
      old_password: data.old_password,
    });
    return response;
  };

  const changeAddress = async (isPickup, addressId, orderId) => {
    const response = await axios.post(`/api/${process.env.API_VERSION}/orders/${orderId}/change_address`, {
      is_pickup: isPickup,
      address_id: addressId,
    });
    return response;
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
        addAddress,
        updateAvatar,
        updatePersonalInfo,
        updatePassword,
        changeAddress,
        confirm,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
