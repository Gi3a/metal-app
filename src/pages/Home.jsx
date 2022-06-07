import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'

function Home() {
	return (
		<Post>
			<Header />
		</Post>
	)
}

const Post = styled.div`
	.wow {
		background-color: red;
	}
`

export default Home