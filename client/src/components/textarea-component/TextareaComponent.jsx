import { StyledTexboxInput } from './styles';

const TextareaComponent = ({
	register,
	name,
	formValidation,
	placeHolder,
	defaultValue
}) => {
	return (
		<StyledTexboxInput
			name={name}
			{...register(name, formValidation)}
			placeholder={placeHolder}
			defaultValue={defaultValue}
		></StyledTexboxInput>
	);
};

export default TextareaComponent;
