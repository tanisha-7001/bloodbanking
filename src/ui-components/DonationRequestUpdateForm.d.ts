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
export declare type DonationRequestUpdateFormInputValues = {
    requesterName?: string;
    bloodType?: string;
    age?: number;
    weight?: number;
};
export declare type DonationRequestUpdateFormValidationValues = {
    requesterName?: ValidationFunction<string>;
    bloodType?: ValidationFunction<string>;
    age?: ValidationFunction<number>;
    weight?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DonationRequestUpdateFormOverridesProps = {
    DonationRequestUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    requesterName?: PrimitiveOverrideProps<TextFieldProps>;
    bloodType?: PrimitiveOverrideProps<TextFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
    weight?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DonationRequestUpdateFormProps = React.PropsWithChildren<{
    overrides?: DonationRequestUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    donationRequest?: any;
    onSubmit?: (fields: DonationRequestUpdateFormInputValues) => DonationRequestUpdateFormInputValues;
    onSuccess?: (fields: DonationRequestUpdateFormInputValues) => void;
    onError?: (fields: DonationRequestUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DonationRequestUpdateFormInputValues) => DonationRequestUpdateFormInputValues;
    onValidate?: DonationRequestUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DonationRequestUpdateForm(props: DonationRequestUpdateFormProps): React.ReactElement;
