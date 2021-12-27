import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import Email from '@mui/icons-material/Email';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Facebook from '@mui/icons-material/Facebook';
import FavoriteIcon from '@mui/icons-material/Favorite';


function Footer() {
	return (
		<footer className='w-full px-8 py-12 bg-indigo-400 bg-opacity-80 text-white flex flex-col items-center gap-y-4 text-center'>
			<span>
				<h1 className='text-3xl font-bold'>Small Connect</h1>
				<p>Connect small business with their customer</p>
			</span>
			<span className='flex gap-x-4'>
				<a href='https://github.com/ByteSquad2-0/Frontend_supermarket' target={'_blank'} rel="noreferrer" >
					<Email fontSize="large" />
				</a>
				<a href='https://github.com/ByteSquad2-0/Frontend_supermarket' target={'_blank'} rel="noreferrer" >
					<Facebook fontSize="large" />
				</a>
				<a href='https://github.com/ByteSquad2-0/Frontend_supermarket' target={'_blank'} rel="noreferrer" >
					<LinkedIn fontSize="large" />
				</a>
				<a href='https://github.com/ByteSquad2-0/Frontend_supermarket' target={'_blank'} rel="noreferrer" >
					<GitHubIcon fontSize="large" />
				</a>
			</span>
			<p>This project is made with <FavoriteIcon className='text-pink-600' /> by <b>Bytesquad</b> in hackathon</p>
		</footer>
	)
}

export default Footer
