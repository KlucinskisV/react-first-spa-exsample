import gitHubIcon from './gitHub-black.svg';
import './btmGithub.css'

const BtnGitHub = ({ link }) => {
	return (
		<a href={link} target="_blank" rel="noreferrer" className="btn-outline">
			<img src={gitHubIcon} alt="" />
			GitHub repository
		</a>
	);
};

export default BtnGitHub;