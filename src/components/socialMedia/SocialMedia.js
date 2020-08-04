import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import styled from 'styled-components';

const IconWrapper = styled.span`
	i {
		background-color: ${props => props.backgroundColor};
	}
	&:hover i {
		background-color: black;
		transition: 0.3s ease-in;
	}
`

export default function socialMedia() {
	return (
		<div className="social-media-div">
			{socialMediaLinks.map((media) => {
				return (
					<a
						href={media.link}
						className={`icon-button`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<IconWrapper {...media}>
							<i className={`fab ${media.fontAwesomeIcon}`}></i>
						</IconWrapper>
						{/* <span></span> */}
					</a>
				);
			})}
		</div>
	);
}