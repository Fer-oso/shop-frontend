export const USER_TO_REGISTER = {
  username: "",
  password: "",
  enabled: true,
  accountNonExpired: true,
  accountNonLocked: true,
  credentialsNonExpired: true,
  roles: [
    {
      roleName: "USER",
    },
  ],
};

export const useUserAccountStatusValues = (
  userState,
  accountNonExpiredState,
  accountNonLockedState,
  credentialsNonExpiredState
) => {
  return [
    { label: "User Enabled", name: "enabled", state: userState },
    {
      label: "Expired Account",
      name: "accountNonExpired",
      state: accountNonExpiredState,
    },
    {
      label: "Locked Account",
      name: "accountNonLocked",
      state: accountNonLockedState,
    },
    {
      label: "Credentials Expired",
      name: "credentialsNonExpired",
      state: credentialsNonExpiredState,
    },
  ];
};
