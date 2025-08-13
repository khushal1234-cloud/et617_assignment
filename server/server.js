import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Supabase client
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Track events
app.post("/events", async (req, res) => {
  try {
    const { username, event_type, details } = req.body;

    const { error } = await supabase
      .from("clickstream")
      .insert([{ username, event_type, details }]);

    if (error) throw error;

    res.status(200).json({ message: "Event logged" });
    console.log("Message Rrecieved");
  } catch (error) {
    console.error("Error logging event:", error);
    res.status(500).json({ error: "Failed to log event" });
  }
});

app.get("/", (req, res) => {
  res.send("Clickstream API with Supabase is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
