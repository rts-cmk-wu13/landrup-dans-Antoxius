"use client";

import { useState } from "react";
import { z } from "zod";
import { FaArrowRight } from "react-icons/fa";

//    Laver validerings-regel til email.
//    `safeParse` fortæller mig om det ligner en rigtig email.
const emailSchema = z.string().trim().email();

export default function Newsletter(){
    // URL til API (ligger i .env.local)
    const newsletterUrl = process.env.NEXT_PUBLIC_NEWSLETTER_URL;

    // State: hvad brugeren skriver + besked + om vi er i gang
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState("");

    async function onSubmit(event) {
        // Så siden ikke reloader når man trykker submit.
        event.preventDefault();


        // Tjekker om email er gyldig, før API kald.
        const parsed = emailSchema.safeParse(email);
        if (!parsed.success) {
            setMessage("Indtast en gyldig email.");
            return;
        }

        // låser formen mens vi sender så man ikke kan klikke 100 gange.
        setIsSubmitting(true);
        setMessage("");

        // (Tjekker om input er en email.)
        await fetch(newsletterUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: parsed.data }),
        }).catch(() => {});

        // Åbner formen igen
        setIsSubmitting(false);

        // Viser besked (og rydder input)
        setEmail("");
        setMessage("Tak! Du er nu tilmeldt nyhedsbrevet.");
    }

    return(
        <div className="mx-5 text-white my-8" >
            <div className="flex flex-col">
                <h2 className="text-4xl">Nyhedsbrev</h2>
                    <p className="py-2">Få direkte besked når vi har sæsonstart eller afholder arrangementer.</p>
                    <form className="flex justify-between gap-6" onSubmit={onSubmit} noValidate>
                        <input
                            type="email"
                            placeholder="Indtast din email"
                            name="newsletter-email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            className="border-none w-full text-black bg-white p-2"
                            aria-label="Email"
                            disabled={isSubmitting}
                        />
                        <button
                            type="submit"
                            className="text-[#0E1A2B] bg-white px-4 rounded-lg"
                            disabled={isSubmitting}
                        >
                            <span className="flex items-center gap-2">
                                Tilmeld
                            </span>
                        </button>
                    </form>

                    {/* Jeg bruger samme felt til både success og error beskeder. */}
                    {message && <p className="mt-2">{message}</p>}
            </div>
        </div>
    )
}