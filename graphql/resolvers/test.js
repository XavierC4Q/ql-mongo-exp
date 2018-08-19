const TestResolver = {
  speakUser: ({ id }) => {},
  createUser: ({ username, email, age }) => {
    const newUser = {
      username: username,
      email: email,
      age: age
    }
    return newUser
  },
  allUsers: () => {}
}


module.exports = TestResolver
