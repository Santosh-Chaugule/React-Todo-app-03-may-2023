import React from "react";

const date = new Date();

function Footer() {
    return (
        <footer>
            {console.log(date.getFullYear)}
            <p>Copyright {date.getFullYear()}</p>
        </footer>
    )
}
export default Footer