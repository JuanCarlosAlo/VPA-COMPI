import { useState } from 'react';
import { StyledArrow, StyledImg, StyledSliderContainer } from './styles';

const Slider = ({ imgs }) => {
	const [imgIndex, setImgIndex] = useState(0);
	return (
		<StyledSliderContainer>
			<StyledArrow
				onClick={() => handlePreviousImg(imgIndex, setImgIndex, imgs)}
				src='/images/グループL.svg'
				alt=''
			/>

			<StyledImg src={imgs[imgIndex]} alt='' />
			<StyledArrow
				onClick={() => handleNextImg(imgIndex, setImgIndex, imgs)}
				src='/images/グループR.svg'
				alt=''
			/>
		</StyledSliderContainer>
	);
};

const handlePreviousImg = (imgIndex, setImgIndex, imgs) => {
	if (imgIndex === 0) {
		setImgIndex(imgs.length - 1);
	} else {
		setImgIndex(imgIndex - 1);
	}
};
const handleNextImg = (imgIndex, setImgIndex, imgs) => {
	if (imgIndex === imgs.length - 1) {
		setImgIndex(0);
	} else {
		setImgIndex(imgIndex + 1);
	}
};

export default Slider;
