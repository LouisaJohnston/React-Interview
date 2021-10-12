import {
  Container,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Grid,
  Button,
  Paper,
  FormControlLabel,
} from "@material-ui/core";
import React, { useState } from "react";
import Link from "next/link";
import { Formik, Field, Form } from "formik";

export default function Question1() {
  const [isSubmit, setIsSubmit] = useState(false);
  const handleSubmit = (values: any) => {
    setIsSubmit(true);
    console.log(values);
  };

  return (
    <Container sx={{ pt: 2 }}>
      <Grid>
        <Link href="/" passHref>
          <ListItemButton component="a">
            <ListItemText>Back to Home</ListItemText>
          </ListItemButton>
        </Link>
        <Link href="/question2" passHref>
          <ListItemButton component="a">
            <ListItemText>Go to Question 2</ListItemText>
          </ListItemButton>
        </Link>
      </Grid>

      <Typography variant="h5">Question 1</Typography>
      <Typography>Design a form with Formik and Material UI</Typography>
      <Typography>Contains the following items: </Typography>
      <List>
        <ListItem>
          <ListItemText>Name</ListItemText>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText>Date (datetime)</ListItemText>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText>Active (boolean switch)</ListItemText>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText>Age (select from 1 to 70)</ListItemText>
        </ListItem>
      </List>
      {isSubmit && <List></List>}
      <Paper style={{ width: "40vw", fontSize: "2em" }}>
        <Formik
          initialValues={{ name: "", date: "", active: "", age: "" }}
          onSubmit={handleSubmit}
        >
          <Form style={{ display: "flex", flexDirection: "column" }}>
            <Field name="name" type="text" placeholder="Name" />
            <Field name="date" type="date" />
            <FormControlLabel
              style={{ marginLeft: "0" }}
              control={<Field name="active" type="checkbox" />}
              label="Active"
            />
            <Field
              name="age"
              type="number"
              min="0"
              max="70"
              placeholder="Age"
            />  
            <Button type="submit">Submit</Button>
          </Form>
        </Formik>
      </Paper>
    </Container>
  );
}
