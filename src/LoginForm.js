import { Button, FormControl, FormLabel, Grid, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function LoginForm() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);
    const [password, setPassword] = useState("");
    const [disabledSubmit, setDisabledSubmit] = useState(true)
    const navigate = useNavigate();
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }
    
      const userEmail = event => {
        if (!isValidEmail(event.target.value)) {
         setError('Email is invalid');
        } else {
          setError(null);
        }
    
        setEmail(event.target.value);
      };
    const userPassword = (e) => {
        const regPass = "([a-z0-9])"
        const inputPass = e.target.value
        if (inputPass.match(regPass)) {
            setPassword(inputPass)
        }
    }
    useEffect(() => {
        if (email && password) {
            setDisabledSubmit(false);
        }
    }, [email, password])

    const handleSubmit = () => {
        navigate("/dashboard")
    }

    return (
        <React.Fragment>
            <Grid style={{ marginTop: "60px" }}>
                <Grid xs={4}>
                    <FormControl>
                        <FormLabel>Enter Email:
                            <Input type="text" value={email}
                                onChange={userEmail} />
                                 {error && <h2 style={{color: 'red'}}>{error}</h2>}
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid Grid xs={4}>
                    <FormControl>
                        <FormLabel>Enter password:
                            <Input type="text" value={password}
                                onChange={userPassword} />
                        </FormLabel>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid style={{marginTop:"20px"}}>
            <Button variant="contained" onClick={() => handleSubmit()} disabled={disabledSubmit} className="loginButton">Proceed</Button>
            </Grid>
        </React.Fragment>

    )
}
export default LoginForm;