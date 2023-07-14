import styled from "styled-components";
import { MEASUREMENTS } from "../../constants/measurements";
import { COLORS } from "../../constants/colors";

const StyledMessageContainer = styled.div`
display: flex;
align-items: flex-end;
gap: 2rem;
width: fit-content;
max-width: 90%;
background-color: ${COLORS.WHITE};
color: ${COLORS.BLACK};
padding-left: 1rem;
padding-right: 1rem;
border-radius: 0.5rem;
`

const StyledMessage = styled.p`
text-align: left;
	word-wrap:break-word;
	max-width: 70%;
	font-size: ${MEASUREMENTS.FONTS_SIZE.SUBTITLES.MOBILE};
	margin-top:  calc(${MEASUREMENTS.FONTS_SIZE.SUBTITLES.MOBILE} - 0.5rem);
	margin-bottom:  calc(${MEASUREMENTS.FONTS_SIZE.SUBTITLES.MOBILE} - 0.5rem);
	@media screen and (min-width: 768px) {
		font-size:  ${MEASUREMENTS.FONTS_SIZE.SUBTITLES.TABLET};
		margin-top:  calc(${MEASUREMENTS.FONTS_SIZE.SUBTITLES.TABLET} - 0.5rem);
		margin-bottom: calc(${MEASUREMENTS.FONTS_SIZE.SUBTITLES.TABLET} - 0.5rem);
	}
`

const StyledDate = styled.p`
text-align: left;
	word-wrap:break-word;
	width:fit-content;
	font-size: ${MEASUREMENTS.FONTS_SIZE.TEXT.MOBILE};
	margin-top:  calc(${MEASUREMENTS.FONTS_SIZE.TEXT.MOBILE} - 0.5rem);
	margin-bottom:  calc(${MEASUREMENTS.FONTS_SIZE.TEXT.MOBILE} - 0.5rem);
	@media screen and (min-width: 768px) {
		font-size:  ${MEASUREMENTS.FONTS_SIZE.TEXT.TABLET};
		margin-top:  calc(${MEASUREMENTS.FONTS_SIZE.TEXT.TABLET} - 0.5rem);
		margin-bottom: calc(${MEASUREMENTS.FONTS_SIZE.TEXT.TABLET} - 0.5rem);
	}
`

export { StyledMessageContainer, StyledMessage, StyledDate }