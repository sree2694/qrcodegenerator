import React, { useState, useEffect } from "react";
import { Button, Container, CssBaseline, Typography, Switch, FormControlLabel } from "@mui/material";
import Form from "./components/Form";
import QRCodeDisplay from "./components/QRCodeDisplay";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import "./App.css";

const App = () => {
    const [userData, setUserData] = useState(null);
    const [theme, setTheme] = useState("light");
    const [openDialog, setOpenDialog] = useState(false);

    // Load data from localStorage on mount
    useEffect(() => {
        const savedData = localStorage.getItem("userData");
        const savedTheme = localStorage.getItem("theme") || "light";
        if (savedData) setUserData(JSON.parse(savedData));
        setTheme(savedTheme);
    }, []);

    // Save data to localStorage on change
    useEffect(() => {
        if (userData) localStorage.setItem("userData", JSON.stringify(userData));
        localStorage.setItem("theme", theme);
    }, [userData, theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    const handleGenerateQRCode = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <div className={`App ${theme}`}>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography variant="h3" gutterBottom align="center">
                    QR Code Generator
                </Typography>
                <Form setUserData={setUserData} handleGenerateQRCode={handleGenerateQRCode} />
                <FormControlLabel
                    control={<Switch checked={theme === "dark"} onChange={toggleTheme} />}
                    label="Dark Mode"
                />
            </Container>

            {/* Dialog/Popup for QR Code */}
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Generated QR Code</DialogTitle>
                <DialogContent>
                    <QRCodeDisplay userData={userData} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default App;
