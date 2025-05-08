"use server"

import {Resend} from 'resend';
import {EmailTemplate} from "fdp/emails/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMail = async (prevState: unknown, formData: FormData) => {

    const firstname = formData.get("firstname") ?? "Unknown"
    const lastname = formData.get("lastname") ?? "Unknown"
    const mail = formData.get("mail") ?? undefined
    const text = formData.get("text")
    const privacy = formData.get("privacy")

    if (privacy != "on") {
        return {
            errors: "Bitte akzeptieren Sie unsere Datenschutzbestimmungen!"
        }
    }

    const {error} = await resend.emails.send({
        from: 'Volt Velbert <info@updates.voltvelbert.org>',
        to: ['info@voltvelbert.org'],
        replyTo: "info@voltvelbert.org",
        ...(mail ? {cc: [`${mail}`]} : {}),
        subject: 'Ihre Anregung für Velbert',
        react: <EmailTemplate firstName={firstname.toString()}
                              lastname={lastname.toString()}
                              text={String(text)}/>
    })

    if (error) return {
        errors: "Die Mail konnte nicht veschickt werden"
    }

    return {
        message: "erfolgreich"
    }

}