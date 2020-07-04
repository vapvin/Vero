require("dotenv");
import app from './app';

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);

// Test Code

console.log(dotenv);
