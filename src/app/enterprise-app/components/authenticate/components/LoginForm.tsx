import { Box, Button, Container, Typography } from "@material-ui/core";
import { Field, Formik, FormikActions, FormikProps } from "formik";
import { TextField } from "formik-material-ui";
import React from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

import { CenterBox } from "app-core";

interface ILoginForm {
  authorize: (name: string, password: string) => void;
  clearError: () => void;
  errorStatus: boolean;
}

interface IFormValues {
  username: string;
  password: string;
}

const initialValues: IFormValues = {
  username: "",
  password: ""
};

const FormSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required")
});

export const LoginForm = ({ authorize, clearError, errorStatus }: ILoginForm) => {
  const { t } = useTranslation();

  const submitForm = (values: IFormValues, actions: FormikActions<IFormValues>) => {
    clearError();
    authorize(values.username, values.password);
    actions.setSubmitting(false);
  };

  const FormComponent = (props: FormikProps<IFormValues>) => (
    <CenterBox>
      <Box style={{ padding: "70px", background: "white" }}>
        <div style={{ paddingBottom: "12px" }}>
          <Typography variant="h6">{t("appName")}</Typography>
        </div>
        <form onSubmit={props.handleSubmit}>
          <Box>
            <Field name="username" label={t("username")} component={TextField} />
          </Box>
          <Box>
            <Field name="password" label={t("password")} type="password" component={TextField} />
            {errorStatus && <div>Error!</div>}
          </Box>
          <Box paddingTop="20px">
            <Button variant="contained" color="primary" onClick={props.submitForm}>
              {t("login")}
            </Button>
          </Box>
        </form>
      </Box>
    </CenterBox>
  );

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={submitForm}
        render={FormComponent}
      />
    </Container>
  );
};
