export const isUsernameValid = username => {
  const pattern = /^[a-z0-9_\-.]{5,}$/;
  return pattern.test(username);
};
