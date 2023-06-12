'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getBatches = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('batchEvents');
        const list = await pool.request().query(sqlQueries.batchlist);
        return list.recordset;

    } catch(error) {
        return error.message;
    }
}

const getBatchById = async(batchID) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('batchevents');
        const oneBatch = await pool.request()
                         .input('batchID', sql.Int, batchID)
                         .query(sqlQueries.batchbyid);
        return oneBatch.recordset;
    } catch(error) {
        return error.message;
    }
}

const addBatch = async(batchData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('batchEvents');
        const insertBatch = await pool.request()
                            .input('batchID', sql.Int, batchData.batchID)
                            .input('batchDes', sql.NVarChar(100), batchData.batchDes)
                            .input('batchStatus', sql.NVarChar(20), batchData.batchStatus)
                            .input('batchDate', sql.Date, batchData.batchDate)
                            .input('adminID', sql.Int, batchData.adminID)
                            .query(sqlQueries.createbatch);
        return insertBatch.recordset;

    } catch(error) {
        return error.message;
    }
}

const updateBatch = async (batchID, batchData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('batchEvents');
        const update = await pool.request()
                        .input('batchID', sql.Int, batchID)
                        .input('batchDes', sql.NVarChar(100), batchData.batchDes)
                        .input('batchStatus', sql.NVarChar(20), batchData.batchStatus)
                        .input('batchDate', sql.Date, batchData.batchDate)
                        .input('adminID', sql.Int, batchData.adminID)
                        .query(sqlQueries.updatebatch);
        return update.recordset;

    } catch(error) {
        return error.message;
    }
}

const deleteBatch = async (batchID) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('batchEvents');
        const deleted = await pool.request()
                        .input('batchID', sql.Int, batchID)
                        .query(sqlQueries.deletebatch);
        return deleted.recordset;

    } catch(error) {
        return error.message;
    }
}

module.exports = {
    getBatches,
    getBatchById,
    addBatch,
    updateBatch,
    deleteBatch
}