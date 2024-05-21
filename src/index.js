/* eslint-disable no-undef */
const app = require("./app");

const port = process.env.PORT || 9090;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
