import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Header() {
	return (
		<Post>
			<div>
				<p>+ 7 (917) 933-34-53</p>
				<p>salleleads@yandex.ru</p>

				<button>Вход</button>
				<button>Регистрация</button>
			</div>
			<div>
				<div>
					<h2>Металлообработки.рф</h2>
					<p>Челябинская область</p>
				</div>
				<Link to='#'>Заказы</Link>
				<Link to='#'>Разместить заказ</Link>
				<button>заказы</button>
				<button>Разместить заказ</button>
			</div>
		</Post>
	)
}

const Post = styled.div`

`

export default Header