import "./Result.css"

export const Result = () =>{
    return(
        <>
        <div className="resultDiv">
            <span>Your Result</span>
            <div className="oval">
                <h1>76</h1>
                <p>of 100</p>
            </div>
            <div className="article">
                <h2>Great</h2>
                <span>Your performance exceed 65% of the people conducting the test here!</span>
            </div>
        </div>

        </>

    )
}