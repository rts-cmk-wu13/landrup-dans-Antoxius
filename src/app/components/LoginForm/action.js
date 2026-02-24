"use server";
import {z} from "zod";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const loginSchema = z.object({
    // email: z.email("Indtast en gyldig email"),
    username: z.string().min(1, "Indtast dit brugernavn"),
    password: z.string().min(4, "Adgangskoden skal være mindst 4 tegn lang")
})

export async function loginUser (prevState, formData) {

    const cookieStore = await cookies();
    const username = formData.get("username");
    const password = formData.get("password");

    if (username === prevState.values.username && password === prevState.values.password) {
        return prevState // Ingen ændring hvis brugeren har indtastet det samme som i forrige forsøg, så returner forrige state så de ikke overloader formen med den samme fejlmeddelelse igen og igen
    }

    // ----- Validation start -----
    const result = loginSchema.safeParse({ username, password })

    if (!result.success) {
        console.log(z.flattenError(result.error).fieldErrors);
        return {
            values: { username, password },
            errors: z.flattenError(result.error).fieldErrors
        }
    }
    // ----- Validation end -----

    // ----- Fetch start -----
    const response = await fetch("http://localhost:4000/auth/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    })
    // ----- Fetch end -----

    // ----- error handling start -----
    if (!response.ok) {
        return {
            values: { username, password },
            errors: { form: ["Forkert brugernavn eller adgangskode"]}
            // Laver [] for at holde samme data struktur som de andre fejl (arrays), for at jeg kan håndtere det ens på frontend
        }
    }
    // ----- error handling end -----

    // console.log(response);
    
    const data = await response.json();

    cookieStore.set("authToken", data.token)
    cookieStore.set("userID", data.userId) // sætter cookie med userID, så jeg fx kan hente brugerens data på andre sider


    return redirect("/"); // sender brugeren til forsiden efter login brug fx. redirect("/profile") hvis du vil sende dem til en profilside efter login
    
}