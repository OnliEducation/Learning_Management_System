export interface IFormField {
    className?: string,
    variant: 'sm' | 'md',
    label: string,
    type: string,
    name: string,
    required: boolean,
    value?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined,
}