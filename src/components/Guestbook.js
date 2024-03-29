import React, { useState } from "react";
import useGuestbook from "../services/useGuestbook";

export default function Guestbook() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const guestbook = useGuestbook().sort((a, b) => new Date(b.date) - new Date(a.date));

    async function handleSubmit(event) {
        event.preventDefault();
        const now = new Date();
        const newEntry = {
            name: name,
            message: message,
            date: now.toISOString(),
        };
        try {
            await fetch("https://abschlussprojekt-server.onrender.com/guestbook", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newEntry),
            });
            setName("");
            setMessage("");
            setSubmitted(true); 
        } catch (error) {
            console.error("Achtung, Fehler", error);
        }
    }

    return (
        <div className="guestbook-container">
            <div className="guestbook-headline">"Ich bin ganz Ohr:"</div>

            <div className="guestbook-display">
                <ul>
                    {guestbook.map((entry) => (
                        <li key={entry.id} className="guestbook-entry">
                            <div className="guestbook-name">
                                <p>{entry.name}:</p>
                            </div>
                            <div className="guestbook-message">
                                <p>{entry.message}</p>
                            </div>
                            <div>
                                {/* <p>{new Date(entry.date).toLocaleString()}</p> */}
                            </div>
                            <hr className="hr3" />
                        </li>
                    ))}
                </ul>
            </div>
                {submitted && (
                    <div className="guestbook-form-thanks">
                        Danke und alles Gute für Ihre mentale Gesundheit!
                    </div>
                )}

            <div>
            <form onSubmit={handleSubmit} className="guestbook-form">
    <label className="guestbook-form-name">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Bitte gebe deinen Namen ein" />
    </label>
    <label className="guestbook-form-message">
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Bitte gebe deine Nachricht ein" />
    </label>
    <button type="submit" className="guestbook-form-submit">Übermitteln</button>
</form>

            </div>
        </div>
    );
}
