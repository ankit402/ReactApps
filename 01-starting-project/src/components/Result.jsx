import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ userInput }) {

    console.log(userInput);

    const outputdata = calculateInvestmentResults(userInput);

    const initialinvested = outputdata[0].valueEndOfYear - outputdata[0].interest - outputdata[0].annualInvestment;

    console.log(outputdata);

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (year)</th>
                    <th>Invested Capital</th>
                    <th>Total Investment </th>
                </tr>
            </thead>

            <tbody>
                {outputdata.map((yeardata) => {
                    
                    const investedCapital =yeardata.valueEndOfYear -
                        yeardata.annualInvestment * yeardata.year - initialinvested;
                    const totalAmountInvested = yeardata.valueEndOfYear - investedCapital;
                    return (
                        <tr key={yeardata.year}>
                            <td>{yeardata.year}</td>

                            <td>
                                {formatter.format(yeardata.valueEndOfYear)}
                            </td>

                            <td>
                                {formatter.format(yeardata.interest)}
                            </td>

                            <td>
                                {formatter.format(investedCapital)}
                            </td>
                            <td>
                                {formatter.format(totalAmountInvested)}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}