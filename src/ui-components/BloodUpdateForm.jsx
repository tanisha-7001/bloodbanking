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
import { getBlood } from "../graphql/queries";
import { updateBlood } from "../graphql/mutations";
const client = generateClient();
export default function BloodUpdateForm(props) {
  const {
    id: idProp,
    blood: bloodModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    bloodType: "",
    units: "",
  };
  const [bloodType, setBloodType] = React.useState(initialValues.bloodType);
  const [units, setUnits] = React.useState(initialValues.units);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = bloodRecord
      ? { ...initialValues, ...bloodRecord }
      : initialValues;
    setBloodType(cleanValues.bloodType);
    setUnits(cleanValues.units);
    setErrors({});
  };
  const [bloodRecord, setBloodRecord] = React.useState(bloodModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getBlood.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getBlood
        : bloodModelProp;
      setBloodRecord(record);
    };
    queryData();
  }, [idProp, bloodModelProp]);
  React.useEffect(resetStateValues, [bloodRecord]);
  const validations = {
    bloodType: [{ type: "Required" }],
    units: [{ type: "Required" }],
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
          bloodType,
          units,
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
            query: updateBlood.replaceAll("__typename", ""),
            variables: {
              input: {
                id: bloodRecord.id,
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
      {...getOverrideProps(overrides, "BloodUpdateForm")}
      {...rest}
    >
      <TextField
        label="Blood type"
        isRequired={true}
        isReadOnly={false}
        value={bloodType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bloodType: value,
              units,
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
        label="Units"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={units}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              bloodType,
              units: value,
            };
            const result = onChange(modelFields);
            value = result?.units ?? value;
          }
          if (errors.units?.hasError) {
            runValidationTasks("units", value);
          }
          setUnits(value);
        }}
        onBlur={() => runValidationTasks("units", units)}
        errorMessage={errors.units?.errorMessage}
        hasError={errors.units?.hasError}
        {...getOverrideProps(overrides, "units")}
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
          isDisabled={!(idProp || bloodModelProp)}
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
              !(idProp || bloodModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
