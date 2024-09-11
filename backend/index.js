const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection string
const mongoURI =
  "mongodb+srv://jauvalue:Tby5VZdwtU9GGaJw@cluster0.pi9vv.mongodb.net/jay?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err.message));

// Define schemas and models

// Company Schema and Model
const bookSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  authors: { type: [String], required: true },
  image: { type: String, required: true },
  previewLink: { type: String, required: true },
  publishedDate: { type: Number, required: true },
  infoLink: { type: String, required: true },
  categories: { type: [String], required: true },
});

const Book = mongoose.model("book", bookSchema);

// routes

// Route to get the 30 books
app.get("/books", async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = 30;

    // Validate the page parameter
    if (page < 1) {
      return res.status(400).json({ error: "Please try another time..." });
    }

    // Calculate the skip value based on the page number
    const skip = (page - 1) * limit;

    const books = await Book.find().skip(skip).limit(limit).exec();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get a book by ID
app.get("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/search", async (req, res) => {
  try {
    // Extract query parameter
    const { name } = req.query;

    // Validate input
    if (!name || typeof name !== "string") {
      return res
        .status(400)
        .json({ error: "Valid book name query parameter is required" });
    }

    // Perform search with case-insensitive regex and limit results to 50
    const books = await Book.find({ Title: new RegExp(name, "i") }).limit(50);

    // Check if any books were found
    if (books.length === 0) {
      return res.status(404).json({ error: "No books found with that name" });
    }

    // Return the found books
    res.json(books);
  } catch (error) {
    console.error("Error during search:", error); // Log the error for debugging
    res.status(500).json({ error: "An unexpected error occurred" });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Unexpected error:", err);
  res.status(500).json({ message: "Something went wrong" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
