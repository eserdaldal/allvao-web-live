import * as React from 'react';
import { Html, Body, Head, Heading, Container, Preview, Section, Text } from '@react-email/components';

interface ContactTemplateProps {
    username: string;
    email: string;
    message: string;
}

const main = {
    backgroundColor: '#2A2D34',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: '#2A2D34',
    margin: '0 auto',
    padding: '20px 0 48px',
    marginBottom: '64px',
};

const content = {
    backgroundColor: '#343842',
    padding: '40px',
    borderRadius: '8px',
    border: '1px solid rgba(229, 220, 195, 0.1)',
};

const header = {
    fontSize: '24px',
    fontWeight: 'normal',
    color: '#E5DCC3',
    margin: '0 0 20px 0',
    borderBottom: '1px solid rgba(229, 220, 195, 0.2)',
    paddingBottom: '10px',
};

const messageContainer = {
    padding: '20px',
    backgroundColor: '#2A2D34',
    borderRadius: '4px',
    border: '1px solid rgba(229, 220, 195, 0.1)',
};

const label = {
    color: '#E5DCC3',
    fontSize: '14px',
    opacity: 0.8,
    margin: '0 0 5px 0',
};

const sender = {
    color: '#E5DCC3',
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '0 0 20px 0',
};

const messageText = {
    color: '#E5DCC3',
    fontSize: '14px',
    lineHeight: '1.6',
    whiteSpace: 'pre-wrap' as const,
    margin: '0',
};

const footer = {
    color: '#E5DCC3',
    fontSize: '12px',
    textAlign: 'center' as const,
    opacity: 0.5,
    marginTop: '20px',
};

export const ContactTemplate: React.FC<Readonly<ContactTemplateProps>> = ({
    username,
    email,
    message,
}) => (
    <Html>
        <Head />
        <Preview>Yeni mesaj: {username}</Preview>
        <Body style={main}>
            <Container style={container}>
                <Section style={content}>
                    <Heading style={header}>Yeni İletişim Formu Mesajı</Heading>
                    <Section style={messageContainer}>
                        <Text style={label}>Gönderen:</Text>
                        <Text style={sender}>{username} ({email})</Text>
                        <Text style={label}>Mesaj:</Text>
                        <Text style={messageText}>{message}</Text>
                    </Section>
                    <Text style={footer}>
                        Bu mesaj Allvao.com iletişim formu üzerinden gönderilmiştir.
                    </Text>
                </Section>
            </Container>
        </Body>
    </Html>
);
