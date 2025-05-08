import {
    Body, Column,
    Container, Font, Head, Heading,
    Html, Img, Link, Row, Section, Text
} from '@react-email/components';
import * as React from 'react';

interface EmailTemplateProps {
    firstName: string
    lastname: string
    text: string
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({firstName, lastname, text}) => (
    <Html>
        <Head>
            <Font
                fontFamily="Ubuntu"
                fallbackFontFamily="Helvetica"
                webFont={{
                    url: "https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgoKfw72nU6AFw.woff2",
                    format: "woff2",
                }}
                fontWeight={400}
                fontStyle="normal"
            />
        </Head>
        <Body style={main}>
            <Container style={container}>
                <img
                    src={"https://volteuropa.org/storage/images/logos_and_icons/volt-logo.png"}
                    style={{objectFit: "contain"}} alt={"Volt Logo"} width={200} height={130}/>
                <Heading>Hallo<br/> {firstName} {lastname},</Heading>
                <Text>
                    vielen Dank, dass Sie sich die Zeit genommen haben, uns Ihre Idee über unsere Webseite mitzuteilen.
                    Wir schätzen Ihr Engagement und freuen uns, dass Sie aktiv an der Gestaltung unserer Stadt mitwirken
                    möchten.
                </Text>
                <Text>
                    Ihre eingereichte Anregung:
                </Text>
                <div style={{
                    border: "1px solid #502379",
                    padding: ".25rem"
                }}>
                    <code>{text}</code>
                </div>
                <Text>
                    Wir werden Ihre Anregung sorgfältig und zeitnah intern besprechen. Sollte es Rückfragen geben
                    oder eine weiterführende Diskussion notwendig sein, werden wir uns direkt bei Ihnen melden.
                </Text>
                <Text>
                    Falls Sie darüber hinaus Interesse an unserer politischen Arbeit haben oder weitere Vorschläge
                    einbringen möchten, stehen wir Ihnen jederzeit gerne zur Verfügung. Besuchen Sie auch gerne unser
                    wöchentliches Meet&Great, der jeden Montag stattfindet – eine großartige Gelegenheit,
                    um ins Gespräch zu kommen!
                </Text>

                <Text>
                    Sollten Sie Fragen haben, erreichen Sie uns jederzeit per E-Mail unter info@voltvelbert.org.
                </Text>

                <Text>
                    Nochmals vielen Dank für Ihr Engagement und Ihr Vertrauen in unsere Arbeit. Wir freuen uns auf den
                    weiteren Austausch mit Ihnen!
                </Text>

                <Text>Mit freundlichen Grüßen <br/>Volt Velbert</Text>

                <Section>
                    <Row>
                        <Column colSpan={4}>
                            <Text>
                                Volt Velbert <br/>
                                Nevigeserstraße 275, 42553 Velbert
                            </Text>
                        </Column>
                        <Column align="left">
                            <Row>
                                <Column>
                                    <Link href="#">
                                        <Img
                                            alt="Facebook"
                                            height="36"
                                            src="https://react.email/static/facebook-logo.png"
                                            width="36"
                                        />
                                    </Link>
                                </Column>
                                <Column>
                                    <Link href="#">
                                        <Img
                                            alt="Instagram"
                                            height="36"
                                            src="https://react.email/static/instagram-logo.png"
                                            width="36"
                                        />
                                    </Link>
                                </Column>
                            </Row>
                        </Column>
                    </Row>
                </Section>

            </Container>
        </Body>
    </Html>
)

const main = {
    fontFamily: 'Ubuntu, sans-serif',
    background: "#FFF",
    color: "#000000"
}

const container = {
    paddingLeft: '12px',
    paddingRight: '12px',
    margin: '0 auto'
}