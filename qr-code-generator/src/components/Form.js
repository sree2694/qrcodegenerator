import React, { useState } from "react";
import { TextField, Button, Grid, MenuItem, Select, InputLabel, FormControl, TextareaAutosize } from "@mui/material";

const Form = ({ setUserData, handleGenerateQRCode }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        address: "",
        linkedin: "",
        jobRole: "",
        academicInfo: "",
        experience: "",
        frontendSkills: "",
        backendSkills: "",
        databaseSkills: "",
        deploymentSkills: "",
        platformSkills: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required.";
        if (!formData.email) newErrors.email = "Email is required.";
        if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number is required.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setUserData(formData);
            handleGenerateQRCode();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                {/* First Column */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="name"
                        label="Name"
                        variant="outlined"
                        fullWidth
                        value={formData.name}
                        onChange={handleChange}
                        required
                        error={!!errors.name}
                        helperText={errors.name}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        name="email"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        value={formData.email}
                        onChange={handleChange}
                        required
                        error={!!errors.email}
                        helperText={errors.email}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        name="phoneNumber"
                        label="Phone Number"
                        variant="outlined"
                        fullWidth
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                        error={!!errors.phoneNumber}
                        helperText={errors.phoneNumber}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        name="address"
                        label="Address"
                        variant="outlined"
                        fullWidth
                        value={formData.address}
                        onChange={handleChange}
                    />
                </Grid>

                {/* Second Column */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="linkedin"
                        label="LinkedIn Profile"
                        variant="outlined"
                        fullWidth
                        value={formData.linkedin}
                        onChange={handleChange}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        name="jobRole"
                        label="Job Role"
                        variant="outlined"
                        fullWidth
                        value={formData.jobRole}
                        onChange={handleChange}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextareaAutosize
                        name="academicInfo"
                        minRows={3}
                        placeholder="Academic Info"
                        value={formData.academicInfo}
                        onChange={handleChange}
                        style={{ width: "100%", marginBottom: "16px", padding: "8px" }}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextareaAutosize
                        name="experience"
                        minRows={3}
                        placeholder="Experience"
                        value={formData.experience}
                        onChange={handleChange}
                        style={{ width: "100%", marginBottom: "16px", padding: "8px" }}
                    />
                </Grid>

                {/* Skills */}
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel>Frontend Skills</InputLabel>
                        <Select
                            name="frontendSkills"
                            value={formData.frontendSkills}
                            onChange={handleChange}
                            label="Frontend Skills"
                        >
                            <MenuItem value="React">React</MenuItem>
                            <MenuItem value="Angular">Angular</MenuItem>
                            <MenuItem value="Vue">Vue</MenuItem>
                            <MenuItem value="HTML/CSS">HTML/CSS</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel>Backend Skills</InputLabel>
                        <Select
                            name="backendSkills"
                            value={formData.backendSkills}
                            onChange={handleChange}
                            label="Backend Skills"
                        >
                            <MenuItem value="Node.js">Node.js</MenuItem>
                            <MenuItem value="Spring Boot">Spring Boot</MenuItem>
                            <MenuItem value="Django">Django</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel>Database Skills</InputLabel>
                        <Select
                            name="databaseSkills"
                            value={formData.databaseSkills}
                            onChange={handleChange}
                            label="Database Skills"
                        >
                            <MenuItem value="MySQL">MySQL</MenuItem>
                            <MenuItem value="PostgreSQL">PostgreSQL</MenuItem>
                            <MenuItem value="MongoDB">MongoDB</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel>Deployment Skills</InputLabel>
                        <Select
                            name="deploymentSkills"
                            value={formData.deploymentSkills}
                            onChange={handleChange}
                            label="Deployment Skills"
                        >
                            <MenuItem value="Docker">Docker</MenuItem>
                            <MenuItem value="Kubernetes">Kubernetes</MenuItem>
                            <MenuItem value="AWS">AWS</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel>Platform Skills</InputLabel>
                        <Select
                            name="platformSkills"
                            value={formData.platformSkills}
                            onChange={handleChange}
                            label="Platform Skills"
                        >
                            <MenuItem value="Linux">Linux</MenuItem>
                            <MenuItem value="Windows">Windows</MenuItem>
                            <MenuItem value="MacOS">MacOS</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <Button variant="contained" color="primary" type="submit" fullWidth>
                        Generate QR Code
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default Form;
