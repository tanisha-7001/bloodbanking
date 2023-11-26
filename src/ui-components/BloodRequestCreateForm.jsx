/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createBloodRequest } from "../graphql/mutations";
const client = generateClient();
export default function BloodRequestCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    requesterName: "",
    bloodType: "",
  };
  const [requesterName, setRequesterName] = React.useState(
    initialValues.requesterName
  );
  const [bloodType, setBloodType] = React.useState(initialValues.bloodType);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setRequesterName(initialValues.requesterName);
    setBloodType(initialValues.bloodType);
    setErrors({});
  };
  const validations = {
    requesterName: [{ type: "Required" }],
    bloodType: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          requesterName,
          bloodType,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createBloodRequest.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "BloodRequestCreateForm")}
      {...rest}
    >
      <TextField
        label="Requester name"
        isRequired={true}
        isReadOnly={false}
        value={requesterName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              requesterName: value,
              bloodType,
            };
            const result = onChange(modelFields);
            value = result?.requesterName ?? value;
          }
          if (errors.requesterName?.hasError) {
            runValidationTasks("requesterName", value);
          }
          setRequesterName(value);
        }}
        onBlur={() => runValidationTasks("requesterName", requesterName)}
        errorMessage={errors.requesterName?.errorMessage}
        hasError={errors.requesterName?.hasError}
        {...getOverrideProps(overrides, "requesterName")}
      ></TextField>
      <TextField
        label="Blood type"
        isRequired={true}
        isReadOnly={false}
        value={bloodType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              requesterName,
              bloodType: value,
            };
            const result = onChange(modelFields);
            value = result?.bloodType ?? value;
          }
          if (errors.bloodType?.hasError) {
            runValidationTasks("bloodType", value);
          }
          setBloodType(value);
        }}
        onBlur={() => runValidationTasks("bloodType", bloodType)}
        errorMessage={errors.bloodType?.errorMessage}
        hasError={errors.bloodType?.hasError}
        {...getOverrideProps(overrides, "bloodType")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
