import { GlobalStyle } from './global-styles/globalstyle'
import { Header } from './components/Header'
import { RoutesMain } from './routes/RoutesMain'
import { Modal } from './components/Modal'
import { useState } from 'react'
import { Cart } from './components/Cart'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true);

  return (
    <>
      <GlobalStyle />
      <Header toggleModal={toggleModal} />
      <RoutesMain />
      { isModalOpen ?
          <Modal toggleModal={toggleModal}>
            <Cart />
          </Modal> :
        null }
    </>
  )
}

export default App
