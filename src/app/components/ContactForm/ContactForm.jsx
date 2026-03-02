"use client";
import { email } from "zod";
import { loginUser } from "@/app/lib/actions";
import { formData } from "@/app/lib/actions";
import { useActionState, useEffect } from "react";

export default function ContactForm () {
    const initialState = {
        data: {
            name: "",
            email: "",
        },
        success: false
    }
    const [formState, formAction, isPending] = useActionState (loginUser, initialState)

    useEffect(function () {
        console.log("formState", formState)
    }, [formState])

    return (
        <>
        <form action={formAction}>
            <div>
                <label htmlFor="name">Navn</label>
                <input type="text" id="name" name="name" defaultValue={formState.data.name} />
            </div>
            <button type="submit">Gem navn</button>
        </form>
        </>
    )
        
    }