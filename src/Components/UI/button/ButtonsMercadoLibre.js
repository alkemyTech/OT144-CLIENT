import { useEffect } from 'react'

const ButtonsMercadoLibre = () => {
	useEffect(() => {
		const script = document.createElement('script')
		script.src =
			'https://www.mercadopago.cl/integrations/v1/web-payment-checkout.js'
		script.async = true
		script.id = '418446657-fab0bfbe-f632-4449-b025-d6c81dc2010d'
		script.source = 'button'
		document.body.appendChild(script)
	}, [])

	return <div className="buttom"></div>
}

export default ButtonsMercadoLibre
