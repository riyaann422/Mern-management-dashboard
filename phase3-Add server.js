Add in server.js
const userRoutes = require("./routes/userRoutes");

app.use("/api/users",userRoutes);