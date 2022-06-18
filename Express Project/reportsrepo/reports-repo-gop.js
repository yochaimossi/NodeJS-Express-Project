

function getAllReports() {

    return "getAllReports";
}

function getReportById(id) {
    return "getReportById";
}

function addReport(report) {
    return "addReport";
}

function updateReport(report, id) {
    return "updateReport";
}

function deleteReport(id) {
    return "deleteReport";
}

function getReportsByCondition(column, value){
    return "getReportsByCondition";
}

module.exports = {
    getAllReports,
    getReportById,
    addReport,
    updateReport,
    deleteReport, 
    getReportsByCondition
}