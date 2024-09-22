const express = require('express');
const router = express.Router();

let posts = [];

router.get('/', (req, res) => {
    res.json(posts);
});

router.post('/', (req, res) => {
    const post = {
        id: posts.length + 1,
        title: req.body.title,
        content: req.body.content,
    };
    posts.push(post);
    res.status(201).json(post);
});

router.get('/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

router.put('/:id', (req, res) => {
    const index = posts.findIndex(p => p.id === parseInt(req.params.id));
    if (index !== -1) {
        posts[index] = { ...posts[index], ...req.body };
        res.json(posts[index]);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

router.delete('/:id', (req, res) => {
    const index = posts.findIndex(p => p.id === parseInt(req.params.id));
    if (index !== -1) {
        posts.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

module.exports = router;