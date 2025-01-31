import Button from "../Components/Button.tsx"

let Style: object  = {
    display: "flex",
    height: "auto",
    width: "90px",
    padding: "15px",
    margin: "10px",
    border: "2px solid black",
    flexDirection: "column",
    justifyContent: "start",
};

const testClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.value)
    return (
        <div>hello</div>
    )
};

export default function Card() {
    return (
        <div style={Style}>
            <div>
                ardas;dlfjk
                a;lsdkfj
                a;ldskjf
                a;ldfkj
            </div>
            <Button text="asf" onClick={testClick}/>
        </div>
    );
}