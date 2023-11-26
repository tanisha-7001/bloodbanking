/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BloodCreateFormInputValues = {
    bloodType?: string;
    units?: number;
};
export declare type BloodCreateFormValidationValues = {
    bloodType?: ValidationFunction<string>;
    units?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BloodCreateFormOverridesProps = {
    BloodCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    bloodType?: PrimitiveOverrideProps<TextFieldProps>;
    units?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BloodCreateFormProps = React.PropsWithChildren<{
    overrides?: BloodCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BloodCreateFormInputValues) => BloodCreateFormInputValues;
    onSuccess?: (fields: BloodCreateFormInputValues) => void;
    onError?: (fields: BloodCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BloodCreateFormInputValues) => BloodCreateFormInputValues;
    onValidate?: BloodCreateFormValidationValues;
} & React.CSSProperties>;
export default function BloodCreateForm(props: BloodCreateFormProps): React.ReactElement;
