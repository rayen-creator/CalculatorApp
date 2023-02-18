export function Calculator(){
    return(
        <div className="calculator">
            <CalcButton value="7"/>
            <CalcButton value="8"/>
            <CalcButton value="9"/>
            <CalcButton value="/"/>

            <CalcButton value="4"/>
            <CalcButton value="5"/>
            <CalcButton value="6"/>
            <CalcButton value="*"/>

            <CalcButton value="1"/>
            <CalcButton value="2"/>
            <CalcButton value="3"/>
            <CalcButton value="-"/>


        </div>
    );
}

export function CalcButton(props){
    return <button>{props.value}</button>
}