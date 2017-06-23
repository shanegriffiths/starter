<?php

if ( isset($_POST['password']) && $_POST['password'] === 'ocp' ) {

	setcookie('ib_auth', '5d04a0c093053a04d00d7e1d9bc01490', strtotime('+ 12 hours'));

	if ( isset($_GET['r']) && ! empty($_GET['r']) ) {
		header('Location: /' . $_GET['r']);
	} else {
		header('Location: /');
	}

	exit();

}

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Authorisation Required</title>

	<!-- Fonts -->
	<link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

	<!-- Styles -->
	<style>
		* {
			box-sizing: inherit;
		}
		* ~ * {
			margin-bottom: 0;
		}
		html, body {
			height: 100%;
			width: 100%;
		}
		html {
			box-sizing: border-box;
			overflow: hidden;
			font: 100% / 1.2 sans-serif;
		}
		body {
			font-size: 1.5rem;
			background: #EFEFEF;
			color: #333;
			border: 1rem solid white;
			margin: 0;
			padding: 1rem;
		}
		main {
      display: flex;
			flex-direction: column;
      align-items: center;
      justify-content: center;

      height: 100%;
      width: 100%;
			margin: 0 auto;
		}
		img {
			max-height: 50%;
			max-width: 10rem;
		}
		h1 {
			font-size: 2rem;
			text-transform: uppercase;
			letter-spacing: .5rem;
			margin-bottom: 4rem;
		}
		@media (min-width: 768px) {
			h1 {
				font-size: 4rem;
				text-align: center;
				margin-bottom: 8rem;
			}
		}
		form {
			display: flex;
		}
		input,
		button {
			border-width: 0 0 3px 0;
			border-color: #333;
			border-style: solid;
			background: transparent;
		}
		input {
			font-size: 1.5rem;
			font-weight: 300;
			letter-spacing: 1px;
			padding: .5em 0;
		}
		button {
			font-size: 15px;
			font-weight: 900;
			-webkit-font-smoothing: antialiased;
			padding: .75rem 1rem;
			text-transform: uppercase;
			cursor: pointer;
		}
		button:focus {
			color: #BEA171;
			outline: none;
		}
		input:focus,
		input:focus + button {
			border-color: #BEA171;
			outline: 0;
		}
		::-webkit-input-placeholder {
			font-weight: 700;
			-webkit-font-smoothing: antialiased;
		}
		:-moz-placeholder {
			font-weight: 700;
			-webkit-font-smoothing: antialiased;
		}
		::-moz-placeholder {
			font-weight: 700;
			-webkit-font-smoothing: antialiased;
		}
		:-ms-input-placeholder {
			font-weight: 700;
			-webkit-font-smoothing: antialiased;
		}
		::-ms-input-placeholder {
			font-weight: 700;
			-webkit-font-smoothing: antialiased;
		}
	</style>
</head>
<body>

	<main class="flex-center position-ref full-height">

		<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAYAAACI7Fo9AAAhvUlEQVR4AezBMQEAAADCIPuntsROYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9Dh75wItWVXe+dPdoEQcowYfIY62sUXNpS+YVhr60da9VXX23uecvc/j7FNNJ84jMTMxKqMRlcFhHB0d4yQzWZnJKIbIKCJMomgiumaJExFEAQMkxgdRVBSGh7oQMBKwoYH0/1bv5fJyzvlO1a2qW1X3+6911mL1vdxbdev8zrf/+3tsGSVnS2Mv3LZt2+O9+ROLxfJ1/AYVF4+Y/MCj0qQM+7yJxVLavkEa+0iQ9B4N4uJRnZ7+qIzsh7Zu3XqMx2KxZl9CF28J0/2POshxOdhVnF+yuOgf67FYrJnVJhnlv1cGubt0duBRZewntu8Jn+KxWKzZEvy3MvbcMD29FPDVkV3o4srl5eiXPBaLNRtaWBBPlSb/qCYhX72ML77sh+GJ3nSLxWJ1u9Hzpe5dUwo5cYWA3fRu76rE96ZTLBarFcYdpe13CcgJ2Pcjst8vgvzV3rSJxeJNt/T10tgHACoNNHElvT7wxp63Y8eOn/fWVywWa3fXHK+i4s+qd9aHv7AjL03x122ZvdRbH7FYrG6YGRXn3xpuqd7ct0tjf+Tr9Hc9zzvKm4xYLFa7bZ6B1Nnh6+FGS/WkR3yN/P9dcc1l7bZZ9Fgs1pi9eJAfQBTHsrrp5po02d9IbW9bBTX+/QEZ2Svw781TcPYeX+f/odVqPdFjsVijVTcwLxHGfhLgBgNsuKm4OCR0niuTf2M10MrkD3WCNJY6vbUh7C6647//tq3zxFu7WCxWS5htIsnfg5TXYF7cNa4kly0cjr5CF7c8JqLr/BEUyCBCuxVC08s9cPDw6Sqz22OxWIPr1FayVZr896Uufghgh9lRV3HvYV+lywsLC48TiNqloCc7Wi19nDT59yt/B11Rd1Ak9mKpeXeexWqktip+xdfp/5CxvQtRloCvvspN20/D1+/cqZ5UCXoQ7+x3uKVvo1cMxOrBFD+Rxn64q9OX4fd6PxWLxTpclHK0jJL2SlQ0xY8bR3Aimosw76z8/GLHz1Og7xXiF5W236N/Lw08sgFS28/4kfl1/G6Pxdroy3Ols9cpk18HwCjAh4jmm5uCDgmd/OfmUZ1+DfDxUhfflFHxe/tU/mKPxdooQuQUQfxr0hQfU3F+D8AatGzVfb8yxaGqaN5CNIcGAH3v3uqoju/FLn046IMg2Y8KuxUfL7W9wtf2DDTeeHMmFmsTbmwRpb+BaS7Y9AIsw0RvAK5XonXxeT/K3oqd+NKlc5Rchmg+KOiQQlQv2YGXcfGI1PmfiCS5GD+HBr769UtjfyxMcbkw2ZmtIDmZZ9fNpFgY4OBrrURs3yV1eo3UxX2ahrv6coDHvRt9XbziMLpHK2MvwL+V5c19P9jnQQOD7qru0ttXf29/GZ5/9fB+whO6OvFlnH8Wr2sY4N2D4gj0D+Ln4iEiQ3P6PkT7w+/PmyaxWAtCPHWvyH5V6OxfYLcc0VZq+0O3ZF1Ls0nYBwmA/b3U9lXYPXfFM1gKl0ZzbT+BVcSwoEMizN6Mn1X28/E6vL629IttipXKOtrb05Ee7xUPRREVX5I6e//h61XI0ePh41YoYxOLtXVr6xh0iS0tpSfh5hYmOdPX2ftklH4OpaXwyrhRabCbV57hQYFNOkTwnTt3rgDuJLX9cHk0tw+5aD486PDq6ml4X+VR3X7TPXAc8F0ZB8IUn0R0plOC9Pt34Lv3KLX9gYjs9SrOL5KRPUfopCei5JQ9ezrPXlhAKe6RBxuLQUVRyAvb7V9otYJn7vP9f768vPycJWlegCaNjtKnYjkqAt3zTfJvUSmmovyPkRMWh2FG+ajQ9i4AHab9SI2bcFCoieW5awtFRPsLP9ARCl28VULLaHU0T100XxPo7qAHvJ6y31M1lAIFM2i2AZj0JuOQ8GcH3CrnEamLe4W2NyuTXSui7C9kmL7XN9lbsRLAhifsE1YE2Afwff3Cw9dz8dnjoY17AffE7t27/5k3H2IJHf9WEPfulCa/YyU6xOk9uEmktvcD3rKbyUWUPsxrBpqI3r2+/zb27SiY8apERPO2CPd60PCgk1EdDyThonrNHgUeBjLKv4C/r1vpjOPvt3oFgN/lHgb4mnufKw08Jv+HQKd3rzy0I3sn7gnsDXjzIVY3Sl5r8pUl5aprDPA2SDe5B4jSxS3SZO8TgZHY5PIIDRPNhwUdEip7c1VU98PsDI/W5uUoOQWbkkLnX8HvI6Af4/XYz/7IiTUf8eZDLKnTfzfO4QwNdpgRZVwu+iZl4vN8letBZ6njpqSi+ShBx9JWRiVRHfsHUf5dTJsdZPx015jdQtt3SWPRNvsTIhMx5sttLqZ/7rEY9LWAHfQ3r+5COWjXZP8RfnFhyD7uTkfvAdBENB8p6KRXD5MzveF0VKcTbBcmf4009mNS57e6n+k2IhGBGXTWuoMOaFwe2Xl6VI4BKGmyT6Gc1NdWdbvm+FEU3QhjP05F85GDTnh1FWXNojohrGzwHnA+HFYt0tivK23vH8/GJ4POoBO7vS7Xi6aNQNu7VZTeKHVxKY49wi4vdncP68neKEVEc6GTj3rQmECHhEneVJVXR6rRG7FOO+20n2sH6QkdbWOk0wAjlvuoKsTD1H0m9EOAQWfQG0COYQ1KZ58PdP6XIszfo0J7lgxtgRwudpYnVbpZFc2Rtwao4wYdEVfo9DuI4qv/RrRXH5m27Gy3n7EUpSf5Kta+zs7wdfqHUts/Fzq9Upr0a3g/DPrAYtCVLq4+xdfP9dZLRDT3dXaJB40ZdAhz4+movj5CxkLq4v3SWAYdYtCHGHUc59/pyqS9bsMgdX5pRU37QUA6KdAR1SWielIS1bWL6pPXskqehzLc2s+XQWfQcbO7vGrtEUVR/pppiubKRfMJgU5FdV/bN3gTlh+kXRXXHUHV32PB+2TQNzjoytiDXZ2+TWl7JyI4cUTRuUiPTUM0xz7BpEHHRiO8emleHVFdTC6qd7Q9Aw9gfC5VnxkekjKx75TuNW9s0Dmid7v585HXxc4uvq/uiCK0Zy4r9TxvzEK6iY7mkwUdwoktlV49tG/2xqxF3z8WD9yanXbXBfcDESR5v8fefptB9xh07OS6SjDs4lZWa7mbIy7G7ds3IxdPR/NJgk7vwAuT3r5XqaeNz8qEv4wHbc1oaleBeMPSUnSSS9Wh8YVBd2LQnbb4JsH0lkO1vt3Yf3S92aMWRjSr2D5M77RPHnQX1auq5dD5541BS1HSxsYofkddgxAOnERnmgcx6FVi0J26oS2kKX5A+XYZ2ncjvTPKaI5DF1a/Xvw+GdsHMId9fUGHV0+erHTyrdK8uundvsv3n+6NUNgIxYO12o/vX/HjQhdvwYPac2LQKTHoECrdSN/e94OfQa/zqCIXhjuWn7piP+RB6ww65IfJ7+A1lS6dg+yckfjxxcVmfjwuvo9jp7wSMeikGPSBfLspbh6Bb9+MwY5heRXcA3jwTAvomHqjTPGNsDSqp7fv2rW2qL68nDyv3o87UPMb9sCPQww6LQa9VluwLKR8uzS9+zDdxBtSXVkRzRElXTSfOOiTj+qtMO408ePSpP+n7fw4g84aHvThfDsORVxc9I8d3JvnJdG8R0fzdQIdY5gwZius2IGHVx+PHy8Ooe3XDYxk0FkjBR1qdbt9306leExxOXz7SLx5mLpoPiHQJx/V8WDEzLdmfjzJPScGnTUO0KETWvo4pHGa+HYA3CSa4wilx+600958XUEnojqqDXd3u8c3y48XnyU2PRHJr8cwTw9i0FkjBp3w7fYhLCfr8u1VU1OdfKVVTTS/0IOmFHQqqoswfodXIxwEqTTq1evsUN+Pu/w4g86aGOhOIshzqdfk27fIyF5BePPpBZ2I6hgWsbtiyo6vs/p69bSfH4cFIP04g84aJ+jQnqX0pCb5dqSLsEz92Z32KEAfdXmVWfoBD5py0CGp49+ujOr6Z6M6GoOa+vFOmGYeLQadNW7QnW9vNfLtSBs5344oVRrNEQl1cR9mvM8G6G74Q/bVqqjuZuehf1zo4kpqM5P24ww6a/KgO21B2gfLTapOXujst9qBjhDNy250HPnkQTMCOoQTY6uiOlqBuyp9GfrHqfy4SOzFbpDF1IHOYtCd0B6JZWedb8fv7R/G2CuJgC6azxboiOpC54+N6jHeb3af1Lamf5zw49MGOotBh7DslCa/oc63V918LprPFOhEVK+d4oPvN73vLUdZ6jkx6KxZAB1COojy7bQ3nyHQXVSP0q+sitxkfhyDPzyIQWfNGOhOm51vp25+vEac4upBMwo61JX5ARUXbu+B9OMuP86gs2YJdMK3O9grN+ouwJnfsww6hkiqpDhUu3KJiwcxpML5cQadNRegQ1ieqrj4MgpBiP72K5CGmi3QXeFMfB4eWPWQ27s6QRp7Tgw6a55Ah3CqSJMlPMpCUR46K6C3hNmG/Dg1X93l1VtB8EwGnTWXoMswzSjIV8+T7+jsjGkHvasSX5niFgLyVWfGZf+NQWfNH+g7dhwtdXpNKehJj5hLl74Xvn0aQe9G+Wsxy65uvnrpv2l7965dy89h0FnzAzoRzVFMgq/VjzAursDyeMKgE37cwo/XnnKDIhn8nrL3hKjOoLNmHnQimrsTW+9tR9FpIso/SNXJ4zQUHEO03qB3u9HzpUk/RzbxmOKvO0qfKrT9It57WVRfXkZUZ9BZMws6Ec1dVIvS/+Xy7X6QnUP2tyfF/b62Z6wX6J0wFjLOb6Xq1THjztWrI6+O6jc6qjPorBkFHdFcmeza0q4ubX+0ejmOtkxl7PfIefI6/5MWzoGbIOi0H9+/kh8/cjTTJu+Itm5tHSN0fkNVVMfR1Aw6a6ZBl6Et6Ghekm839jr3mmnfPl7Q4cdllP4p1T+u4uLOtkoSb7WoqB7g78Cgs2YU9G3btj1e6uxvqqK5qIEUy16h7cWUb0fbJ9Jb4wJ9H/x4VO/HASv8uO+HJ9b9LRDV6ZUNg86aMdBlUB3Fus1q2jdjGYzlcJBW+3aMnMKyetSgi8DIpn4chy/SNfD6AL26YdBZMwQ6fGl1NC9+eGor2eo1FNo3m/p2LLNHAbrSyevq/HiY9v24jJKznR+ntLCw8DhkH6qiOnbzGXTWTIEuRPxrI9xpdnXy11MjmLDMxjJ4WNBx1FLfj59OznMbpl69Q2cgGHTWbIBORfNhK8LQzomxx5RvRzkq8u0Dge7y40lxFfUwwUbh8P3jO46mo/pMgM7iUVKI5vvHlTfe3HQuHcYpu6mrVaCLKDmFyI+PZp4bUVfgwENUn27QWQy6i+amcqediOaDwYLlc5N58jgDrexmV8Y+jPPWRZC/UiW189WJ/vFhKwVPJ6L6lILOYtBFUO3NZZj+wRj6269vUooqtL3rMe/dZA/KyF4FCOqsAOa5tXWeeCNUN8rSqlWPDO27pxZ0FoOOmyow9m/HGs2H8O3911P9NcqP+yHy46MU4dVN8eNOmL5o+kBnMehuAuo4ojmtzZKokyeuUj+u4uIi58fHoWUX1em59gw6az1Bp2eau2i+Z0/n2R6hMfh24qqer+7q1Sff1UdPw2XQWesGeic0vwnAStNdYfpfvDGLzrcTl6tXN9b58YnI92NddfaciNLzpwR0FoNORHOcJoozwieoBSGeijRY1Xuuzr/n17l69QlqC3X+3FSAzmLQ4c2rdtr9yL7dWx9tkkH6RmmKn1CQI6JizDQKa7x1UFfGwRjOoGPQCTHoMxHNaUmdvUrGxQMNQT8XUHiTFRHVC/ocOgZ9jGLQaW+OaGQmHM3p/nFiMmtxpauTn7RkTVSHV2fQ10kMOqK5RjQnzwSfnFy9ur2K9ud0nfyEtcWnvTqDPnkx6H5YvEJPTzSn69UbXG4uHfrbJ+/Vo6BqB9436QUM+oTFoLtxx/k3qr35JKO56x8v0D8+ioIZ1xhzHubSrXdUx4Xe+FaQnMygT1QMuh8mv6OnYKcdDxzsTNf1jwfDlsDCt5vJ+nZfa1UV1WWUfohBn5gYdMAlouymsmiuTO/2VmvM54o17x93hSdfCXR692O71/KHlMmuw79T/e1dnfiT24FP/0qXeXXjojqDPgEx6Ehb6YoquH4r57jl5rkVZP84DoZoKfWsqjZV9KMrbd+ANtT6sVFuLt0kvHrSVnHvYTqqM+hjEYOOaG5qo/muXf7Tx7+8TX9XxgU5X10G+b9H4czion9s1eAJqbOX4mei7NXNpaN8u5tLN0ZtllFyWdlrcVGdQR+rGHRfVkTz7MDYoznmufnG+fH6+erdMDODjpJCOyp616lRUjiOCWOgvTHKV+mySnqHSldNcXYRgz4mMegATT0J0TwoO0PNpLfv3aue5o1J7SA4Qeni8ySEcfHFJSEWhh0OibHNGN9MzaULx+/bN0uTfaoqqu9T5sUM+ljEoEtdHc3R1jlWP27s/6/z4wBCGnvhySef/OQRjHveJMKMnCcP+4C03jijeoCoTnh1Bn1kYtCxbBamypuPL5rLKH19rR9Pf9aPj/IAB4xzhg3QhG9Hue3CePLtm+DVy3bgsTmIeXcM+kjFoCNyTdKbwyZI2o/jhr/DV7ke15FMQogF+Hb6SCb7OaT7xuLVTcUOvEk/wqCPRgy68606/U65N++NPJq3g7Tvxym4YvtFVwM+BtAH9u1I96EMdxxevexvoeLiIF4/gz4SMehYPlflzUUYnzXaCKaV8+NUfvzkk5MnT/DY5E3SJGevh28XYbak4qLUqyudXcKgNxeDTkXz1TcKcspR9l18fZR+HIMi6v24xfnjxMNlBKATvp3Kt6Msd4T59k1S55cOE9UZdFoMOhnNkzNHlR8XJj+/zo9rwo9PCnQI6Tuk8ajSW5Tnjirf3unoPRhaSUZ1Br25GHQimif9aI5RyJPy48rk17pZ5+sNOoQ0XmDshbRvz29tB0aOIqoLYz+uy/PqD+J9MOi0GPRJR3PnxxM6Pw4/7vLjEwedgA9pPcq3w46gbNdbo7rK7K6O6vklDDotBr00mueHo3lJ3hzefPv2NXlzYZIzAUAdIEFSHBTGvsnlx6cNdCeU2ypd79vxNaQLYVO8NYiO6gw6LQZ9vNHcldFq+781kR8HOOT545MHnfbtxDlwsCmwK+OI6kLnH2XQG4tBb7X0cQBj1DvtS9K8QMb5FwauV58B0J1vF3H+QWpTEelDsQbfLqLyqI4HQFuEexn0RmLQUecN4CpqrF8/7OQUZYrbQiI/jg0uZwtmDHSnTSq0Z0lTPBgk9fl2/C2HjerYFyifiGM/idfAoNeKQUeVm9T2trJoLrW9eZho7mOwQ4P8uIySs91NOgOgk75dGnsH5duRVoSdGXgHno7qDHq1GHR0oVV68yB/9aAjp5rmxwGG5zQHoEMoz1XGXktZlWF8OybjoFiGiOoM+mox6NXRHJFYmPymQSIPbtwG89xIPz4DoNP59jC9kH7Y5QPXyUtjP1wV1X0/28egl4pBRzSv8uYiiF89WL16TufH4+KDzgrMCeh0nXwyujr5ttQvhSWqi+qtVusYBn1FDDpOEMUG2CiiOTnP7Uh+HBtWtB+fD9Cd2ipxc+nI/vamdfJSV0X14ohXf3QTg74iBl0Isw2TUIloTubHCT/upsDQfnxOQYdafnhigzr5xv3tiOpVXh2NMN6OHUcz6IfFoGfY7W6jpp2I5mS9OrXphI0pun98vkF3VYeBsSPz7VJXe3Xk61WU3rjBQWfQlc7/URr7seobIXvV6PrH6Xr1OQOdGBPVpL/dPkDVyXcD85KyqN63AfYqjugr4qW7++9Bo7k09f3jR/79oCjz4wy6y7ebRv3tpr6/HcASn/EGBp1Br/WJOF9tbX6c6h9n0KElN5euQX87xl7TUZ28GHQG3bVWpl/DCSdV9epk84bJS/w4g075dk3WyeeVdfIy7M+1Y9AZ9AGiefGKYfx4uAK5vcD5cQZ9DP3tcVHq29tts6ji4n4GnUEfIJovHru6f5zKjyv4cZMQ/eMMetM6eWqevIjS81f3t2PTk/ysGXQGHd/XCfPfXN0/TqWCcMCir2LtEWLQm9fJu/52yrcj3/6YqJ70GHQGvT6a79ihnzBQ/7jpXePmuTHoo62Tl03y7Ynrb28U1Rl0Bh357vQ3+md0RwH6xyfhxxl0ur9dJcXBkJhLh/52V33X9+o9Bp1BL7lZdP53CwsLj8NGD9U/jq+LiPbjDPpk+9ulKd63tbX1GGXi88pWYgw6R/SHOjo7Q4b23VR+HH68HejIc2LQJ+bbkbakRmMLU1y+HGWp1MUPf+Y9M+gMuojTe4ROvxRS551pwo8z6GP37fDg1HBNzPZD6SuDzqCXLv/q6tWlth8ANB7EoK+7b0e7L2xU5WeZsEcvE4Net9ETpG/0aDHoE5Tvxxo2iv5sGXQGnbgRAlPcJoQJPYhBnzrBRlG+nUFn0KmhhVfv64TOjzPoU+zbkeas2kRl0Bn06jRNnL3f+XEGfSa0CeXHKna+nUFn0Ak/jrFSnhODPlPyVd+3h1wZx6BX1qvPvB9n0J1vRxqUC2YY9LLD/672ff1CD2LQ5+I9O9/OoDPoK54cBRiEH2fQZ9W3h/FZsGMMuscz45SbBMOgz6O28HDICvH56PMiBp2PZNpAwshmBp1BL92bifOLvPkQy4/Mr1eBjp7lrk5fxqDPp1otfZyK7J2VoJv8XG8+xMJpHyiiIIZNzKEYdD8MT8RpPJUtrTp9mzcHYrn5Y8YerNx5DdP3Mujzqa7JX16VYtP9h/y/9OZDLJzw0T9bbX/5iSw6++q2bdsez6DPn3ydfqDyOK64OISDH7z5ESvQ+V/WfeCdjt7DoM+X2u32L0iT3oH3XVo/oYtb3LjoORHL19kZun4Jdz6DPl/C2O66z1xFxZ95rHl7uqcn4OTUquo4aYp794ThLzPo8yEM+RSRvT6s2YTtyvyAN3dibZIm+1RtVA/z9zDo86FuiE246jFTWNK3Wq3jvPkTS4a2qPvwMQvcD5MdDPpMyw2QvAmfdeVD3aR/5M2nWDt27HgCdthrbwCdf/bwNx7NoM+uVJD9V+TIqx7osHDt+e5vYPm6eAXVuijC5EwGfTbVVenLcBgm3mv13He38cqa89rn/IZ6/1b82A/ynQz6DJa7xumNxGd7bzsITvDmXyycc67i3sN1Z7BJU3xtl+8/nUGfGW1Buow6xaUbcsnrhpJv7AXkKak6vxRpGgZ9+uVHyVtrIHfnqX8Fx2B7rI2j3V1zvNLFLa7ZpbqoIv9jBn26haakIOkdqh31nBQHRZgteayNp7bKE+oGQSTwo+Q/MejTe8qqSor7iTPW8Bm+02NtXCEV45Z8NRs4j+CIZAZ9uiQCI7G5Rh+kaD+DTViPtXGFrjVUzMGT18GOyI5Bgwz6FEGeAPL9tasx2LNTfP1cj8Xqwq/HvRux207DbtcZdga9K+NAavsjt79Smyb1s32eE4u1Zyk6SeniTsBMwq7Td6B2nkGfvPzQnC5NcZ+L5NXlzPYhjBDzVovFwq4sloOVkWLVVJqtW1vHMOiTk4jy12D3HO+DehirMHmdVyUWqxOksTS9+5odol9cunevehqDPnYdJbR9FwCmPpf+iqt4i0eJxWrrPGkOe35DpxNsZ9DHoxeuTImxH67NjAybCmWxlqMshReklvHYwFPGfq+tkoRBH63wAFXGXucyItRy3TfJW71BxWJ1hAkD07s7JGDHxpCMiwdlkJ2DmmsGfe0SOunJuPi+y4TU767bR9aUDWGx2iLcq3RxW4Mbrr+UN/Zjy8vRLzHow+lZzzrt56TJfx9NR5R1CpL+efZSx7/trVUsVssPT1Rx8eUGPtEd8/MtFHQw6IMu1cMXSVNc3tSPY7UFi+WNTixuguker7T9dNObUCENZOzbm5VeMuhdnf1rLNUHeZi2ZXSaxxqHeBQV8ucuzUMu5dHqauzn9inzYga9XHuF+EWcT9/kb+ogR9RfXl5+jsdijVPdKH8tOqYqNunKhljcK6P09Z7nZtFBDHpbJwkis9tVb7KzjgftwkLriR6LNQm1wrijjP22W2o226jL/x+i+0YHHVFcGXseNtwAbzM/bv9BBPmrPRZr0tqzp/NsaYqPA+Lmy077IxHaN8MGbETQZZAfkLq4uckD0k36wUaoH4a7PBZr/dQ6CvlzTB5F5Gka3ZWx1/oqXd4ooC9J8wJpio/gb4Sr6VJdxPkHp6rMmMUNMRgo6fxmQ+/+oEiK9yDvPq+gLy4uHiuD9I0ytnc1jeL42+D7RZT+G4/Fmjad0NLHwXu6aNR0aSrj/FYR5K/EIMq5Ad1N2zX5dausDZ2p0MVnhBALHos17Uc/SVPc3DC6o8KrH8USexWW87MOeidMX6Ti4iJlLDbbGkdxbLhJY8+embPqWSwsx2VcvB9wDXKzY2CCMvYCeNpZAx2HFgqdvk3F+T1umd50z0Lo4spuYF7izaJYLKHzXJn8pqbLV1y6H93uVjp9R7vdfsa0g44IDD8tdfHNYd6nMMmbOIrPvFg48UXG9n+quDjoontjvxrn38FklYVW64lTCPqmld593bsmBLSN31t/510Z+wk/DE/0WKz5OwAw/0LYPOoBClds83ddk78cG3bTAHonSloy7n3KQTvIMh37F+0w/1du7t7cicXCnLmuyV+LYRUNfayrDnPji69GFEXf+3qAju9XcX6JiotD4QCvH+8VtQZY2bRawTM9Fmsj6NRWshWpOGnsg+GAwANYqYsrMPYYUXESoAuR/apI7MWwH8M9oOynO0qf6rFYG3U5L0xxOV0xVpKOAvBx/leyD/zmcYC+9zDgyAKouLi/AnCqe+/r3TB/Ob0CmX+xWEfBf0tt/57eta4E/rNHhjAcNQrQEX0RwQF4xWuifPgPZGTP2b4nfIrHYrF+qu3btz9FmuRsaewdiIaDAu88PBpH0DQzOOiulDf/KJboJYCTPhwPBmXsuctKPc9jsVj1XXG+zv8Qxw5VwEZ6YqmLLwmTvxIPD6/VOkro4pYy0Ntts4hVwMqppPH+y1DNRi3RKwA/hKaVAYteWCxWWxW/Ikx+PuWPK4DvA6jtt2Vi36m0vXM16MoUh0RU/HcVFVfj+ys2BUnboOL8Ml+vqXSXxWIhSsIvY4e+AngqD0+uAPDfQ6warvADHXmjE4vFwvAFLI+VyR9y8I7lonP5n0dpr9v4Y7HGKAb+pxG+N2bAT18F+MRm37FYLKTAZGQ/JI19gNy0G+JyPxNTV1GNt46As1gsDJyUUfqn2KUn0nKN8+BolxWm+OSRgyg2eywWazrUDtITZGz/ADvsuqqbjJ7uch+GRnS03uOxWKzpVbdrjlehPUua4uvw17ioNByabIQp/mjG2kZZLNbOnTufhNJapMFcIYxb1rsNNgy0xPBGN6CSxWLNrjb5frav35yS34PyVqXz/4vZdouL/rEei8WaL6EGfSlKT+K/BOuf2oNjAQAAAIBB/tbT2FHdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIsXRv/s73/RAAAAAElFTkSuQmCC" alt="Logo">

		<h1>The Idea Bureau</h1>

		<form method="post">
			<input type="hidden" name="referrer" value="<?php echo $_SERVER['HTTP_REFERER']; ?>" />
			<input type="password" name="password" placeholder="Password" />
			<button>Go</button>
		</form>

	</main>

</body>
</html>
