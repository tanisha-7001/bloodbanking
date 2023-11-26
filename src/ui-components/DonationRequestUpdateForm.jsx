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
import { getDonationRequest } from "../graphql/queries";
import { updateDonationRequest } from "../graphql/mutations";
const client = generateClient();
export default function DonationRequestUpdateForm(props) {
  const {
    id: idProp,
    donationRequest: donationRequestModelProp,
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
    age: "",
    weight: "",
  };
  const [requesterName, setRequesterName] = React.useState(
    initialValues.requesterName
  );
  const [bloodType, setBloodType] = React.useState(initialValues.bloodType);
  const [age, setAge] = React.useState(initialValues.age);
  const [weight, setWeight] = React.useState(initialValues.weight);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = donationRequestRecord
      ? { ...initialValues, ...donationRequestRecord }
      : initialValues;
    setRequesterName(cleanValues.requesterName);
    setBloodType(cleanValues.bloodType);
    setAge(cleanValues.age);
    setWeight(cleanValues.weight);
    setErrors({});
  };
  const [donationRequestRecord, setDonationRequestRecord] = React.useState(
    donationRequestModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getDonationRequest.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getDonationRequest
        : donationRequestModelProp;
      setDonationRequestRecord(record);
    };
    queryData();
  }, [idProp, donationRequestModelProp]);
  React.useEffect(resetStateValues, [donationRequestRecord]);
  const validations = {
    requesterName: [{ type: "Required" }],
    bloodType: [{ type: "Required" }],
    age: [{ type: "Required" }],
    weight: [{ type: "Required" }],
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
          age,
          weight,
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
            query: updateDonationRequest.replaceAll("__typename", ""),
            variables: {
              input: {
                id: donationRequestRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "DonationRequestUpdateForm")}
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
              age,
              weight,
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
              age,
              weight,
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
      <TextField
        label="Age"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={age}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              requesterName,
              bloodType,
              age: value,
              weight,
            };
            const result = onChange(modelFields);
            value = result?.age ?? value;
          }
          if (errors.age?.hasError) {
            runValidationTasks("age", value);
          }
          setAge(value);
        }}
        onBlur={() => runValidationTasks("age", age)}
        errorMessage={errors.age?.errorMessage}
        hasError={errors.age?.hasError}
        {...getOverrideProps(overrides, "age")}
      ></TextField>
      <TextField
        label="Weight"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={weight}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              requesterName,
              bloodType,
              age,
              weight: value,
            };
            const result = onChange(modelFields);
            value = result?.weight ?? value;
          }
          if (errors.weight?.hasError) {
            runValidationTasks("weight", value);
          }
          setWeight(value);
        }}
        onBlur={() => runValidationTasks("weight", weight)}
        errorMessage={errors.weight?.errorMessage}
        hasError={errors.weight?.hasError}
        {...getOverrideProps(overrides, "weight")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || donationRequestModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || donationRequestModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
