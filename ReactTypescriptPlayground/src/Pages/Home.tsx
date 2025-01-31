import ButtonToPath from "../Components/ButtonToPath.tsx";

export default function Home() {
    return(
        <>
            <nav className={'test-nav'}>
                <ButtonToPath path={'/test'} text={"Go To Test"}/>
                <p> Yup this is home.</p>
            </nav>
        </>
    )
}