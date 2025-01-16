const login = async (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'test' && password === 'password') {
        resolve({ token: 'mockToken' });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000); // Simulate API delay
  });
};


export default { login };
