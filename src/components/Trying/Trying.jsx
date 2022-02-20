import * as React from "react";
import Logo from './Logo.png';
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
const user = {
    firstName: 'Omar',
    lastName: 'Alsaudi'
};

// const Trying = () => {
//     return(
//         <h1>
//         Hello, {formatName(user)}!
//         </h1>
//     )
// }
const Trying = () => {
return (
    <div>
    <img alt='daily smarty ui image logo big' src={Logo}/>
        <h1>Here is the logo</h1>
    </div>
    )
}
export default Trying;