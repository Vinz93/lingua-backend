import app from './config/express';

const PORT = 3009;

function listen() {
    app.listen(PORT);
    console.log(`💻  API started on port ${PORT}`);
}

listen();

export default app;
