export const validateUser = (req, res, next) => {
  const { name, email } = req.body;

  // Check if name is provided and not empty
  if (!name || typeof name !== "string" || name.trim() === "") {
    return res
      .status(400)
      .json({ message: "Name is required and should be a non-empty string" });
  }

  // Check if email is provided and in valid format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ message: "A valid email is required" });
  }

  // Proceed if validation passes
  next();
};
