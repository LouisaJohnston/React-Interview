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
import React from "react";
import Link from "next/link";
import { Formik, Field, Form } from "formik";

export default function Question1() {

  type FormValues = {
    name: string;
    date: string;
    active: false;
    age: 0;
  };

  const initialValues: FormValues = {
    name: "",
    date: new Date().toLocaleDateString("fr-CA"),
    active: false,
    age: 0,
  };

  const handleSubmit = (values: FormValues) => {
	console.log(values)
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
      <Paper>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <FormControlLabel
              control={
                <Field style={{ marginLeft: "5px" }} name="date" type="date" />
              }
              label="Date:"
              labelPlacement="start"
            />
            <FormControlLabel
              style={{ marginLeft: "30px" }}
              control={
                <Field
                  style={{ marginLeft: "5px" }}
                  name="name"
                  type="text"
                  placeholder="Name"
                />
              }
              label="Name:"
              labelPlacement="start"
            />
            <FormControlLabel
              style={{ marginLeft: "30px" }}
              control={
                <Field
                  style={{ marginLeft: "5px" }}
                  name="active"
                  type="checkbox"
                />
              }
              label="Active:"
              labelPlacement="start"
            />
            <FormControlLabel
              style={{ marginLeft: "30px" }}
              control={
                <Field
                  style={{ marginLeft: "5px" }}
                  name="age"
                  type="number"
                  min="0"
                  max="70"
                />
              }
              label="Age:"
              labelPlacement="start"
            />
            <Button style={{ marginLeft: "20px" }} type="submit">
              Submit
            </Button>
          </Form>
        </Formik>
      </Paper>
    </Container>
  );
}
