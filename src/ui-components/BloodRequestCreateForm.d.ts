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
export declare type BloodRequestCreateFormInputValues = {
    requesterName?: string;
    bloodType?: string;
};
export declare type BloodRequestCreateFormValidationValues = {
    requesterName?: ValidationFunction<string>;
    bloodType?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BloodRequestCreateFormOverridesProps = {
    BloodRequestCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    requesterName?: PrimitiveOverrideProps<TextFieldProps>;
    bloodType?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BloodRequestCreateFormProps = React.PropsWithChildren<{
    overrides?: BloodRequestCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BloodRequestCreateFormInputValues) => BloodRequestCreateFormInputValues;
    onSuccess?: (fields: BloodRequestCreateFormInputValues) => void;
    onError?: (fields: BloodRequestCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BloodRequestCreateFormInputValues) => BloodRequestCreateFormInputValues;
    onValidate?: BloodRequestCreateFormValidationValues;
} & React.CSSProperties>;
export default function BloodRequestCreateForm(props: BloodRequestCreateFormProps): React.ReactElement;
