"use client";
import { useActionState } from "react"; 
import { loginUser } from "../../lib/actions";


const initialState = {
    values: {
        username: "",
        password: ""
    },
    errors: undefined
}

export default function LoginForm () {

    const [state, formAction, isPending] = useActionState(loginUser, initialState);
    
    return (
        <form action={formAction} noValidate className="flex flex-col gap-5 w-80 mx-auto">
            <div>
                <label htmlFor="username">Brugernavn</label>
                <input className="bg-gray-300" type="text" id="username" name="username" defaultValue={state.values.username}/>
                {state.errors?.username && <p>{state.errors.username}</p>}
                {/*(optional chaining) ? = Hvis sandt: fortsæt til username og skriv username-fejlen fra loginScheme i vores action.js i et <p>-tag. */}
            </div>
            <div>
                <label htmlFor="password">Adgangskode</label>
                <input className="bg-gray-300" type="password" id="password" name="password" defaultValue={state.values.password} />
                {state.errors?.password && <p>{state.errors.password}</p>}
            </div>
            { state.errors?.form && <p>{state.errors.form}</p>}
            <button disabled={isPending} className="bg-green-600 disabled:bg-gray-400 px-5 py-3 rounded-lg text-black w-50 font-bold" type="submit">{ isPending ? "Logger ind..." : "Log ind"}</button>
        </form>

)
}