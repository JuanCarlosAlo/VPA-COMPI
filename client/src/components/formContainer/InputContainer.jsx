import { StyledErrorText, StyledInputContainer } from './styles';

const InputContainer = ({
	keyForm,
	label,
	type,
	register,
	formValidation,
	errors
}) => {
	return (
		<StyledInputContainer>
			<label htmlFor={keyForm}>{label}</label>
			<input
				type={type}
				name={keyForm}
				id={keyForm}
				{...register(keyForm, formValidation)}
			/>
			<StyledErrorText>{errors?.[keyForm]?.message}</StyledErrorText>
		</StyledInputContainer>
	);
};

export default InputContainer;
