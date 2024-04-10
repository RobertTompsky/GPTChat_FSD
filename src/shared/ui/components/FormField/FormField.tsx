import React from 'react';
import styles from './FormField.module.scss'
import { Input, Select, TextArea } from '..';

type AdditionalSelectProps = {
    options: { value: string | number; title: string | number }[];
    defaultOptionTitle: string;
};

type FormFieldProps<T extends 'input' | 'select' | 'textarea'> = {
    title: string;
    fieldType: T;
    name: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    zodError: string | undefined;
    placeholder?: string
} & (T extends 'select' ? AdditionalSelectProps : {});

export const FormField: React.FC<FormFieldProps<'input' | 'select' | 'textarea'>> = (props) => {
    const { title, fieldType, placeholder, name, value, onChange, zodError, ...rest } = props
    return (
        <div className={styles.formField}>
            <label htmlFor={name}>{title}</label>
            {fieldType === 'textarea' && (
                <TextArea
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange as (e: React.ChangeEvent<HTMLTextAreaElement>) => void}
                    placeholder={placeholder}
                />
            )}
            {fieldType === 'select' && (
                <Select
                    options={(rest as AdditionalSelectProps).options}
                    defaultOptionTitle={(rest as AdditionalSelectProps).defaultOptionTitle}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange as (e: React.ChangeEvent<HTMLSelectElement>) => void}
                />
            )}
            {fieldType === 'input' && (
                <Input
                    name={name}
                    id={name}
                    value={value}
                    onChange={onChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
                    placeholder={placeholder}
                />
            )}
            {zodError && <span>{zodError}</span>}
        </div>
    );
};