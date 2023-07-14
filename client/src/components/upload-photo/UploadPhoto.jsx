import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { storage } from '../../config/firebase.config';
import { StyledInput, StyledInputContainer } from './styles';
const UploadPhoto = ({ value, setValue, directory }) => {
	return (
		<form>
			<StyledInputContainer>
				+Add img
				<StyledInput
					type='file'
					onChange={e =>
						handleLoadFile(e.target.files[0], setValue, value, directory)
					}
				/>
			</StyledInputContainer>
		</form>
	);
};

const handleLoadFile = async (file, setValue, value, directory) => {
	const nameNoExtension = file.name.substring(0, file.name.lastIndexOf('.'));
	const finalName = `${nameNoExtension}-${v4()}`;
	const storageRef = ref(storage, `${directory}/${finalName}`);
	try {
		const upload = await uploadBytes(storageRef, file);
		const imageURL = await getDownloadURL(storageRef);

		setValue([...value, imageURL]);
	} catch (error) {}
};

export default UploadPhoto;
