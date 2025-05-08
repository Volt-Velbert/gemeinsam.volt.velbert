"use client"

import styles from "./page.module.css";
import Card from "fdp/components/card/Card";
import Image from "next/image";
import React from "react";
import {sendMail} from "fdp/app/mail.action";
import {Link} from "@react-email/components";

const initialState = {
    message: '',
}

export default function Home() {

    const [active, setActive] = React.useState(0)
    const [state, formAction, pending] = React.useActionState(sendMail, initialState)

    return <div className={styles.page}>
        <Card>
            <Image src={"/volt-logo.png"} style={{objectFit: "contain"}} alt={"FDP Logo"} width={200} height={130}/>
            <h1>
                Gemeinsam für <br/> ein besseres Velbert.
            </h1>
            <p>
                Ihre Stimme zählt. Gemeinsam mit Ihnen wollen wir <br/>Velbert lebenswerter, nachhaltiger und digitaler
                machen.<br/>
                Ihre Ideen sind der erste Schritt <br/> für eine Stadt, die besser zu uns allen passt.
            </p>

            <div className={"button-group"}>
                <button {...(active === 0 ? {"data-active": "true"} : {})} onClick={() => setActive(0)}>Mit Kontaktdaten
                    versenden
                </button>
                <button {...(active === 1 ? {"data-active": "true"} : {})} onClick={() => setActive(1)}>Anonym
                    versenden
                </button>
            </div>

            <br/>
            {pending ? <h1>
                Ihre Idee befindet sich <br/> gerade auf dem Weg.
            </h1> : state && state.errors ?
                <h1>Bei Ihrer Anfrage ist leider ein <br/> Fehler aufgetreten.</h1> : state && state.message ?
                    <h1>Vielen Dank für Ihre Anregung. <br/> {active === 0 ? <>Wir melden uns <br/>schnellstmöglich bei
                        Ihnen.</> : null}</h1> : <form action={formAction}>

                        {
                            active === 0 ? <>
                                <input name={"firstname"} placeholder={"Vorname"} required={true}/>
                                <input name={"lastname"} placeholder={"Nachname"} required={true}/>

                                <input name={"mail"} placeholder={"E-Mail"} required={true}/>
                            </> : null
                        }

                        <textarea name={"text"} placeholder={"Platz für Ihre Ideen"} rows={10} required></textarea>

                        <div style={{display: "flex"}} className={"align-items-end"}>
                            <input name={"privacy"} type={"checkbox"} required/>
                            <label>Ich habe die <Link
                                href={"#"}>Datenschutzbestimmungen</Link> zur <br/> Kenntnis
                                genommen.</label>

                        </div>

                        <div className={"input-submit-container"}>
                            <input type={"submit"} value={"Senden"}/>
                        </div>
                    </form>}

            <br/>
            <div style={{
                marginTop: "1rem",
                display: "flex",
                gap: ".5rem",
            }}>
                <Link href="#">Impressum</Link>
                <Link href="#">Datenschutz</Link>
            </div>

            <br/>

            {
                /**
                 <div style={{
                 display: "flex",
                 alignItems: "center",
                 margin: "2rem 0"
                 }}>
                 <Image src={"/Nico_Sammito_Small.jpg"} style={{objectFit: "contain", borderRadius: "50%"}}
                 alt={"FDP Logo"} width={50} height={50}/>
                 <div style={{
                 display: "flex",
                 flexDirection: "column",
                 margin: "0 .5rem"
                 }}>
                 <span style={{color: "var(--magenta)"}}>Nico Sammito</span>
                 <span>Ihr Ansprechpartner für Siepen-Asbruch</span>
                 </div>

                 </div>

                 */

            }


        </Card>
    </div>
}
