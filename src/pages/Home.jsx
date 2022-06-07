import React from 'react'
import styled from 'styled-components'
import FirstBlock from '../components/FirstBlock'
import Header from '../components/Header'


function Home() {
	return (
		<Post>
			<Header />
			<FirstBlock />
		</Post>
	)
}

const Post = styled.div`
	.wow {
		background-color: red;
	}
`

export default Home