// show reports in table
$(document).ready(function()
{

        $.ajax({url:"/reports"}).then(
            function(reports) // after-promise succeed
            {
                console.log(reports);
               
                const report_ls = reports.reports
                const reports_table = $('#reports')
                reports_table.find("tr:gt(0)").remove()
            
                

                $.each(report_ls,  (i, report) => {
        
                    reports_table.append(
                                `<tr><td class="fw-lighter">${report.id}</td>
                                     <td class="fw-lighter">${report.license}</td>
                                     <td class="fw-lighter">${report.driver_id}</td>
                                     <td class="fw-lighter">${report.speed}</td>`)
                                     
                })
            }
            ,function(err)   // after-promise failed
            {
                console.log(err);}
            );

});

