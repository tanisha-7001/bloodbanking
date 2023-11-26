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
export declare type BloodUpdateFormInputValues = {
    bloodType?: string;
    units?: number;
};
export declare type BloodUpdateFormValidationValues = {
    bloodType?: ValidationFunction<string>;
    units?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BloodUpdateFormOverridesProps = {
    BloodUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    bloodType?: PrimitiveOverrideProps<TextFieldProps>;
    units?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BloodUpdateFormProps = React.PropsWithChildren<{
    overrides?: BloodUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    blood?: any;
    onSubmit?: (fields: BloodUpdateFormInputValues) => BloodUpdateFormInputValues;
    onSuccess?: (fields: BloodUpdateFormInputValues) => void;
    onError?: (fields: BloodUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BloodUpdateFormInputValues) => BloodUpdateFormInputValues;
    onValidate?: BloodUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BloodUpdateForm(props: BloodUpdateFormProps): React.ReactElement;
