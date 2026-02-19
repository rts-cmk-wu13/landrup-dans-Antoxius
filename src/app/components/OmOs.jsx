"use client";

import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function OmOs() {
    const [testimonials, setTestimonials] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        async function load() {
            const response = await fetch("http://localhost:4000/api/v1/testimonials");

            const data = await response.json();
            setTestimonials(data);
        }

        load();
    }, []);

    if (testimonials.length === 0) {
        return (
            <section className="about-us-bg-color text-white">
                <article className="mx-10 text-center">
                    <h2 className="text-4xl py-4">Det siger vores kunder om os</h2>
                    <p className="mt-6">Ingen testimonials lige nu.</p>
                </article>
            </section>
        );
    }

    const current = testimonials[index];

    function prev() {
        if (index === 0) {
            setIndex(testimonials.length - 1);
        } else {
            setIndex(index - 1);
        }
    }

    function next() {
        if (index === testimonials.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    return (
        <section className="about-us-bg-color py-10 text-white">
            <article className="mx-10 text-center">
                <h2 className="text-4xl py-4">Det siger vores kunder om os</h2>

                <div className="mt-6">
                    <div className="my-2">
                        <p className="text-xl italic">"{current.content}"</p>
                        <p className="mt-2 font-semibold">{current.name}</p>
                        <p className="text-sm opacity-80">{current.occupation}</p>
                    </div>

                    <div className="mt-4 flex items-center justify-center gap-4">
                        <button
                            type="button"
                            className="rounded-full border border-white px-2 py-2 text-white"
                            onClick={prev}
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            type="button"
                            className="rounded-full border border-white px-2 py-2 text-white"
                            onClick={next}
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            </article>
        </section>
    );
}