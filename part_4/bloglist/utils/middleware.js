const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' });
};

const errorHandler = (e, req, res, next) => {
    if (e.name === 'CastError' && e.kind === 'ObjectId') {
        return res.status(400).send({ error: 'malformatted id' });
    } else if (e.name === 'ValidationError') {
        return res.status(400).json({ error: e.message });
    }
    else if (error.name === 'JsonWebTokenError') {
        return res.status(401).send({ error: 'invalid token' })
    }
    next(e); // call the express error handler middleware
};

module.exports = { unknownEndpoint, errorHandler }

