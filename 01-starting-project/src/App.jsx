import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 1000,
        annualInvestment: 200,
        expectedReturn: 5,
        duration: 3
    });

    // Handler User Input Trigger
    function handlerInput(inputidentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputidentifier]: +newValue
            };
        });
    }

    const validateInput =
        userInput.initialInvestment >= 1 &&
        userInput.annualInvestment >= 1 &&
        userInput.expectedReturn >= 0 &&
        userInput.duration >= 1;

    return (
        <>
            <Header />

            <UserInput
                onChange={handlerInput}
                Input={userInput}
            />

            {!validateInput && (
                <p className="center">
                    Please enter valid data
                </p>
            )}

            {validateInput && (
                <Result userInput={userInput} />
            )}
        </>
    );
}

export default App;