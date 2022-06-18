const { connectedKnex } = require('./sql-connector');
const { logger } = require('./logger')


function getReportById(id) {
    logger.debug(`A user selected a report from the table with id = ${id}`)
    return connectedKnex('reports').select('*').where('id', id).first();
}

function addReport(report) {
    logger.info(`A user added a new report - ${report}`)
    return connectedKnex("reports").insert(report);
}

function getAllReports() {
    logger.debug('A user selected * from "reports" table')
    return connectedKnex('reports').select('*');
}

function updateReport(report, id) {
    logger.info(`A user updated the report with id ${id} to a new- ${report}`)
    return connectedKnex("reports").where('id', id).update(report);
}

function deleteReport(id) {
    logger.info(`A user deleted the report with id ${id}`)
    return connectedKnex("reports").where('id', id).del()
}

function getReportsByCondition(column, value){
    return connectedKnex('reports').select('*').where(column, value); 
}

module.exports = {
    getAllReports,
    getReportById,
    addReport,
    updateReport,
    deleteReport, 
    getReportsByCondition
}