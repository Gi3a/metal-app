import React from 'react';
import { useSelector } from "react-redux"
import '../assets/styles/components/Header.css'
import Modal from './Modal';
import ModalSignup from './ModalSignup';
import HeaderFirst from './HeaderFirst';
import HeaderSecond from './HeaderSecond';

function Header() {

	const modalSelector = useSelector((state) => state.modal.modalState)
	const modalSignUpSelector = useSelector((state) => state.modal.modalSignUpState)
	const user = useSelector((state) => state.user.userState)

	return (
		<>
			<header>
				{user.length === 0 ? <HeaderFirst /> : <HeaderSecond />}


			</header>
			{modalSelector ? <Modal /> : ''}
			{modalSignUpSelector ? <ModalSignup /> : ''}
		</>
	)
}

export default Header