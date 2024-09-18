import { calculateInvestmentResults, formatter } from "../Util/investment";

function Result ({Pinput}){
    const result =calculateInvestmentResults(Pinput )
    const initialInvestment = 
    result[0].valueEndOfYear - 
    result[0].interest-
    result[0].annualInvestment;

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {
                    result.map((yearResult)=>{
                        const totalInterest = yearResult.valueEndOfYear - yearResult.annualInvestment * yearResult.year - initialInvestment;
                        const totalAmountInvested = yearResult.valueEndOfYear - totalInterest;
                        return (
                            <tr key={yearResult.year}>
                                <td> {yearResult.year}</td>
                                <td>{formatter.format(yearResult.valueEndOfYear)}</td>
                                <td>{formatter.format(yearResult.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(totalAmountInvested)}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
            
            
        </table>
    )


}

export default Result;