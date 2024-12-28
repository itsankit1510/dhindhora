import app from "./app.js";
import config from "config";

const port = config.get('HTTP_PORT');

app.listen(port, () => {
    console.log('Server is running on port', port);
});
