# Create users
User.destroy_all
User.create(email: "test@mail.com", password: "123123")
