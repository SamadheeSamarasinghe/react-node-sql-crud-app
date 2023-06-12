'use strict';

const express = require('express');
const batchController = require('../controllers/batchController');
const router = express.Router();

const {getBatches, getBatch, addBatch, updateBatch, deleteBatch} = batchController;

router.get('/batchevents', getBatches);
router.get('/batchevent/:id', getBatch);
router.post('/batchevent', addBatch);
router.put('/batchevent/:id', updateBatch);
router.delete('/batchevent/:id', deleteBatch);

module.exports = {
    routes: router
}