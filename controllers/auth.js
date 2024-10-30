const users = [
    {
        id: 1,
        name: "John Doe",
        email: "qHr9F@example.com",
        password: "password123",
    },
    {
        id: 2,
        name: "Jani Doe",
        email: "abCnH@example.com",
        password: "password123",
    },
];

export const login = (req, res) => {
    const { email, password } = req.query;

    console.log(email, password);

    // find user by email
    const user = users.find((user) => user.email === email);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    if (user.password !== password) {
        return res.status(401).json({ message: "Invalid password" });
    }

    res.cookie("token", user.id, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
    })
        .cookie("token2", user.name, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
        })
        .cookie("token3", user.email, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "none",
        })
        .json({ message: "Login successful", user });
};
