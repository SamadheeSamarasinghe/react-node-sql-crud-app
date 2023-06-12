'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getCategories = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('categoryEvents');
        const list = await pool.request().query(sqlQueries.categorylist);
        return list.recordset;

    } catch(error) {
        return error.message;
    }
}

const getCategoryById = async(categoryID) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('categoryEvents');
        const oneCategory = await pool.request()
                         .input('categoryID', sql.Int, categoryID)
                         .query(sqlQueries.categorybyid);
        return oneCategory.recordset;
    } catch(error) {
        return error.message;
    }
}

const createCategory = async(categoryData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('categoryEvents');
        const insertCategory = await pool.request()
                            .input('categoryID', sql.Int, categoryData.categoryID)
                            .input('categoryName', sql.NVarChar(100), categoryData.categoryName)
                            .input('categoryDes', sql.NVarChar(250), categoryData.categoryDes)
                            .input('categoryStatus', sql.NVarChar(20), categoryData.categoryStatus)
                            .input('adminID', sql.Int, categoryData.adminID)
                            .query(sqlQueries.createcategory);
        return insertCategory.recordset;

    } catch(error) {
        return error.message;
    }
}

const updateCategory = async (categoryID, categoryData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('categoryEvents');
        const update = await pool.request()
                        .input('categoryID', sql.Int, categoryID)
                        .input('categoryName', sql.NVarChar(100), categoryData.categoryName)
                        .input('categoryDes', sql.NVarChar(250), categoryData.batchDes)
                        .input('categoryStatus', sql.NVarChar(20), categoryData.categoryStatus)
                        .input('adminID', sql.Int, categoryData.adminID)
                        .query(sqlQueries.updatecategory);
        return update.recordset;

    } catch(error) {
        return error.message;
    }
}

const deleteCategory = async (categoryID) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('categoryEvents');
        const deleted = await pool.request()
                        .input('categoryID', sql.Int, categoryID)
                        .query(sqlQueries.deletecategory);
        return deleted.recordset;

    } catch(error) {
        return error.message;
    }
}

module.exports = {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}