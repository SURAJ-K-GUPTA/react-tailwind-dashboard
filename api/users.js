let users = [
    { id: 1, username: "john_doe", email: "john@example.com", password: "password123" },
    { id: 2, username: "jane_doe", email: "jane@example.com", password: "mypassword456" },
  ];
  
  // Handler function for login and signup
  export default function handler(req, res) {
    if (req.method === 'POST') {
      const { email, password, username } = req.body;
  
      if (username) {
        // Handle signup (check if user exists, if not add a new user)
        const existingUser = users.find((u) => u.email === email);
        if (existingUser) {
          res.status(400).json({ error: "User already exists" });
        } else {
          const newUser = {
            id: users.length + 1,
            username,
            email,
            password,
          };
          users.push(newUser);
          res.status(201).json(newUser);
        }
      } else {
        // Handle login (if username is not provided, it's a login request)
        const user = users.find((u) => u.email === email && u.password === password);
        if (user) {
          res.status(200).json({ id: user.id, username: user.username, email: user.email });
        } else {
          res.status(401).json({ error: 'Invalid email or password' });
        }
      }
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }
  