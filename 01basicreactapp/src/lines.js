
function Kavita(){

    return (
        <>
            
            <ul>
            <li>ye gam ke aur char din </li>
            <li>sitam ke aur char din</li>
            <li>Ye din bhi jaege gujar </li>
            <li>gujar gye hazaar din</li>
            <li>Tu jinda hai to jindagi ki jeet pe yakin kr</li>
            <li>agr kahi hai swarg to utar la jamin pr</li>
            </ul>

            <div>
                So we can make diffrent components and export funtions returing jsx
            </div>
        </>
    )
}


function Jokes() {
    return (
        <>
            <h1>LAla tum kis chakki ka khate ho </h1>
            <h2>Itni mahangai me bhi tond nikale jaate ho</h2>
            <p>
                Generally we name components with capital letter.... <br />
                if we use vite library for building react then we name files with .jsx and .js not acceptible but if
                 we build like basic way of react then we can name components both by .js and .jsx
            </p>
        </>
    )
}

export {Kavita, Jokes}  //named export to export no of fns/ variables
// export default Kavita //default export only one fn can be exported through this
