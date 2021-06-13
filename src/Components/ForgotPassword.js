import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'

export default function ForgotPassword() {
    
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    
    async function handleSubmit(e) {
        e.preventDefault();

        try{
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value);
            setMessage("Check you mail inbox.")
        } catch {
            setError('Failed to reset password.')
        }

        setLoading(false)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Reset Password</h2>
                    {error && <Alert variant="danger" > {error} </Alert>}
                    {message && <Alert variant="success" > {message} </Alert>}
                    <Form onSubmit={handleSubmit} >
                        <Form.Group id="email" className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required placeholder="Enter email"/>
                        </Form.Group>

                        <Button disabled={loading} className="mt-3 w-100" type="submit">Reset Password</Button>
                    </Form>

                    <div className="w-100 text-center mt-3">
                        <Link to="/login">Login</Link> 
                    </div>
                </Card.Body>
            </Card>

            <div className="w-100 text-center mt-2">
                Need an account ? <Link to="/signup">Sign Up</Link> 
            </div>
        </>
    )
}
