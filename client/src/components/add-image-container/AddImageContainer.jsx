import { v4 } from 'uuid';
import {
	StyledCrossIcon,
	StyledImg,
	StyledImgsContainer,
	StyledNewImgContainer
} from './styles';
import UploadPhoto from '../upload-photo/UploadPhoto';
import { deleteObject, ref } from 'firebase/storage';
import { storage } from '../../config/firebase.config';

const AddImageContainer = ({ imgs, setImgs, currentUser }) => {
	console.log(imgs);
	return (
		<>
			<StyledImgsContainer>
				{imgs.length > 0 &&
					imgs.map(img => (
						<StyledNewImgContainer key={v4()}>
							<StyledCrossIcon
								onClick={() => handleDelete(imgs, setImgs, img)}
							/>
							<StyledImg src={img} alt='' />
						</StyledNewImgContainer>
					))}
			</StyledImgsContainer>
			<UploadPhoto
				directory={currentUser.email}
				setValue={setImgs}
				value={imgs}
			/>
		</>
	);
};

const handleDelete = async (imgs, setImgs, img) => {
	const storageRefDelete = ref(storage, img);

	try {
		await deleteObject(storageRefDelete);
	} catch (error) {}
	const updatedImgs = imgs.filter(image => image !== img);
	setImgs(updatedImgs);
};

export default AddImageContainer;
