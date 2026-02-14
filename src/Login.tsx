import { useConnect, useConnectors } from 'wagmi'

function Login() {
  const { connect, error } = useConnect()
  const connectors = useConnectors()

  return (
    <div className='container px-4 py-5'>
        <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
            <div className='col-10'>
                <img src="https://s2.glbimg.com/ugId2amQ6SVnK2UDn2HC-RGGEj0=/600x0/filters:quality(70)/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/1/r/VrkHb1QeGn1tqZHKERqw/maxresdefault.jpeg" alt="" className='d-block mx-lg-auto img-fluid' width="700" height="500"/>
            </div> 
            <div className='col-6'>
                  <h1 className='display-5 fw-bold text-body-emphasis lh-1 mb-3'>Webbb3</h1>
                  <p className='lead'>Votaçao on-chain do BBB.</p>
                  <p className='lead mb-3'>Autentique-se com a sua carteira e deixe o seu voto para o próximo paredao.</p>
                  <div>
                      <button type='button' onClick={() => connect({connector: connectors[0]})} className='btn btn-primary btn-lg px-4 me-2'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/960px-MetaMask_Fox.svg.png" width="64" className='me-3' />
                        Conectar com a MetaMask
                      </button>
                  </div>
                  <p className='message'>{error ? error.message : ""}</p>
            </div> 
        </div>
    </div>  
  )
}

export default Login
