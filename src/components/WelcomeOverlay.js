import React, { useState } from "react";

function WelcomeOverlay() {
    const [showOverlay, setShowOverlay] = useState(true);

    function handleOverlayClick() {
        setShowOverlay(false);
    }


    return (
        <div className="welcome-overlay" style={{ display: showOverlay ? "flex" : "none" }}>
            <div className="welcome-overlay-content">
                <div className="welcome-overlay-headline">
                    <h1>Abschlußprojekt von Jan Moritz</h1>
                    <p>Full Stack Web & App Development an der WBS CODING SCHOOL</p>
                </div>
                <hr className="hr2" />
                <div className="welcome-overlay-text">
                    <p>In meiner Abschlußarbeit habe ich die Sitcom "Frasier" thematisiert. <br />
                        Ziel war eine Staffel- und Episodenübersicht, mit der Möglichkeit der Suche nach <br />
                        Gastdarstellenden, Gastanrufenden sowie speziellen Szenen oder Anmerkungen. <br />
                        Ich habe mich bewußt für die deutsche Sprache entschieden. <br />
                        Es gibt in der Synchronisation einige Besonderheiten, die ich berücksichtigen möchte. </p>
                    <p>Die Umsetzung erfolgte mit HTML, CSS, React, Express, MongoDB und Firebase, das Deploying bei Render. <br/> 
                    Leider sind die Ladezeiten etwas länger, was auch ein Grund für diesen Begrüßungstext ist. <br />
                        Die Seite ist kein abgeschlossenes Projekt. Es gibt noch einige Dinge, die ich umsetzen möchte. Das Design ist responsive, dennoch, der Thematik gezollt, nicht für die Betrachtung auf einem Smartphone ausgelegt. <br/>
                        Das verwendete urheberrechtlich geschütze Material dient zur Veranschaulichung im Rahmen des Unterrichts. </p>
                    <p>Inzwischen sollte die Verbindung zur Datenbank stehen und ich wünsche viel Spaß!</p>
                </div>
                <button className="welcome-overlay-button" onClick={handleOverlayClick}>Weiter zur Seite</button>
            </div>
        </div>
    );
}

export default WelcomeOverlay;
