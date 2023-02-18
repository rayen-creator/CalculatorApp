import React from 'react';
import './calculator.css';
//parent function component
export function Calculator() {

    //useState hook
    //the first paramater is to return the state the second is a function to modify the state
    const [calc, setCalc] = React.useState({
        current: "0",
        total: "0",
        isInitial: true,
        preOp: ""
    });

    function handleNumber(value) {
        let newValue = value;
        console.log("dd", calc.isInitial);
        if (!calc.isInitial) {
            newValue = calc.current + value;

        }
        setCalc({
            current: newValue,
            total: calc.total,
            isInitial: false,
            preOp:calc.preOp
        });
    }
    function handleOperator(value) {
        const total = doCalculation();

        setCalc({
            current: total.toString(),
            total: total.toString(),
            isInitial: true,
            preOp: value
        });

    }
    function doCalculation() {
        let total = parseInt(calc.total);
        // debugger;
        console.log(calc);
        switch (calc.preOp) {
            case "+":
                total += parseInt(calc.current);
                break;
            case "-":
                total -= parseInt(calc.current);

                break;
            case "*":
                total *= parseInt(calc.current);

                break;
            case "/":
                total /= parseInt(calc.current);
                break;
            default:
                total = parseInt(calc.current);
        }
        return total;


    }

    function renderDisplay() {
        return calc.current + calc.preOp;
    }

    function handleClear() {
        setCalc({
            current: "0",
            total: "0",
            isInitial: true,
            preOp: ""
        });
    }

  
    return (
        <div className="calculator">
            <div className="display">{renderDisplay()}</div>
            <CalcButton value="7" onClick={handleNumber} />
            <CalcButton value="8" onClick={handleNumber} />
            <CalcButton value="9" onClick={handleNumber} />
            <CalcButton className="operator" value="/" onClick={handleOperator} />

            <CalcButton value="4" onClick={handleNumber} />
            <CalcButton value="5" onClick={handleNumber} />
            <CalcButton value="6" onClick={handleNumber} />
            <CalcButton className="operator" value="*" onClick={handleOperator} />

            <CalcButton value="1" onClick={handleNumber} />
            <CalcButton value="2" onClick={handleNumber} />
            <CalcButton value="3" onClick={handleNumber} />
            <CalcButton className="operator" value="-" onClick={handleOperator} />

            <CalcButton value="C" onClick={handleClear} />
            <CalcButton value="0" onClick={handleNumber} />
            <CalcButton value="=" onClick={handleOperator} />
            <CalcButton className="operator" value="+" onClick={handleOperator} />
        </div>
    );
}

//child function component
export function CalcButton(props) {
    //props.onClick define props callback function
    return <button className={props.className} onClick={() => props.onClick(props.value)}>{props.value}</button>
}