const express = require('express');
const bookRoute = express.Router();
const Book = require('../model/Book');

// Add Book
bookRoute.route('/add-book').post((req, res, next) => {
    Book.create(req.body)
    .then(data => {
        res.json(data);
    })
    .catch(error => {
        next(error);
    });
});

// Get all Books
bookRoute.route('/').get((req, res, next) => {
    Book.find()
    .then(data => {
        res.json(data);
    })
    .catch(error => {
        next(error);
    });
});

// Get a specific Book by ID
bookRoute.route('/read-book/:id').get((req, res, next) => {
    Book.findById(req.params.id)
    .then(data => {
        res.json(data);
    })
    .catch(error => {
        next(error);
    });
});

// Update Book
bookRoute.route('/update-book/:id').put((req, res, next) => {
    Book.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    .then(data => {
        res.json(data);
    })
    .catch(error => {
        next(error);
    });
});

// Delete Book
bookRoute.route('/delete-book/:id').delete((req, res, next) => {
  Book.findOneAndDelete({ _id: req.params.id })
      .then(data => {
          if (!data) {
              return res.status(404).json({ msg: 'Book not found' });
          }
          res.status(200).json({ msg: 'Book deleted successfully', data: data });
      })
      .catch(error => {
          next(error);
      });
});
module.exports = bookRoute;
