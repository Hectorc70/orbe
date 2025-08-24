/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import React from 'react';
interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn<any>;
  error?: FieldError;
  className?: string;
  maxLength?: number;
  minLength?: number;
  disabled?: boolean;
  defaultValue?: string | number | readonly string[];
  helperText?: string;
  button?: React.ReactNode;
  functionButton?: () => void;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  step?: string
}



/**
 * Componente `FormInput`
 *
 * Permite crear campos de texto integrados con `react-hook-form`, incluye validaciones,
 * estilos condicionales, texto de ayuda y soporte para íconos interactivos embebidos.
 *
 * @param {string} label - Etiqueta visible encima del campo.
 * @param {string} name - Nombre del campo (clave para React Hook Form).
 * @param {string} [type="text"] - Tipo de input (texto, email, password, etc).
 * @param {string} [placeholder] - Texto de ayuda dentro del input.
 * @param {UseFormRegisterReturn<any>} register - Objeto de registro de React Hook Form.
 * @param {FieldError} [error] - Objeto de error si existe una validación fallida.
 * @param {string} [className] - Clases CSS adicionales para el contenedor del input.
 * @param {number} [maxLength=60] - Longitud máxima permitida.
 * @param {number} [minLength] - Longitud mínima requerida.
 * @param {boolean} [disabled=false] - Si está deshabilitado.
 * @param {string | number | readonly string[]} [defaultValue] - Valor por defecto del input.
 * @param {string} [helperText] - Texto de ayuda si no hay errores.
 * @param {React.ReactNode} [button] - Elemento visual embebido (ej. ícono o botón).
 * @param {() => void} [functionButton] - Función que se ejecuta al hacer clic en el botón.
 */
const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = 'text',
  placeholder = '',
  register,
  error,
  className = '',
  maxLength = 60,
  minLength,
  disabled = false,
  defaultValue,
  helperText,
  button,
  functionButton,
  value,
  onChange,
  step
}) => {
  return (
    <div className={`mb-4 flex ${type === 'checkbox' ? 'items-center justify-end  gap-2  flex-row-reverse' : 'flex-col'} ${className}`}>
      <label htmlFor={name} className="text-colorText">
        {label}
      </label>
      <div className="relative">
        <input
          step={step}
          id={name}
          type={type}
          placeholder={placeholder}
          {...(register ?? { value, onChange })}
          className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`}
          maxLength={maxLength}
          minLength={minLength}
          disabled={disabled}
          defaultValue={defaultValue}
        />
        {button && (
          <button
            type="button"
            onClick={functionButton}
            className="cursor-pointer absolute top-1/2 right-3 -translate-y-1/2 text-gray-600 hover:text-primary"
          >
            {button}
          </button>
        )}
      </div>
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
      {!error && helperText && <span className="text-colorText text-xs">{helperText}</span>}
    </div>
  );
};

export default FormInput;
