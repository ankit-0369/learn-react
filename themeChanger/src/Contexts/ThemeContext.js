import { useContext, createContext, Children } from "react";

export const ThemeContext= createContext({
    themeMode: "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{},
})

export const ThemeProvider= ThemeContext.Provider

//custom hoook to change the theme it just help to remove extra work
export default function UseTheme(){
        return useContext(ThemeContext)
}

//Notes:-    We are Defining the functionality of darkTheme and lightTheme in App.jsx file
//for this We use the same name as passed
//Here ThemeProvider is defined as variable --ye same as <ThemeContext.Provider></>
//ke tarah kaaam kr rha hai

//i.e. we are wrapping all the components which need the information in App.jsx
/*
<ThemeProvider>
    {Children}
</ThemeProvider>

isi cheej ko hm main.jsx me bhi kr skte h... like this
<ThemeProvider>
<App/>
</ThemeProvider>

*/