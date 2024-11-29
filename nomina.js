function calculatePayroll() {
    const salary = parseFloat(document.getElementById("salary").value);
    const deductions = parseFloat(document.getElementById("deductions").value);
    const extras = parseFloat(document.getElementById("extras").value);

    const total = salary - deductions + extras;
    const result = document.getElementById("payrollResult");

    result.innerHTML = `
        <div style="background-color: blue; color: white; padding: 10px;">
            <p>Total Salario: €${total}</p>
            <p>Ingresos Extras: €${extras}</p>
            <p style="color: red;">Deducciones: €${deductions}</p>
        </div>
    `;
}

