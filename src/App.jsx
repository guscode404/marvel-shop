import { GlobalStyle } from './global-styles/globalstyle'
import { Header } from './components/Header'
import { RoutesMain } from './routes/RoutesMain'
import { Modal } from './components/Modal'
import { useState } from 'react'
import { Cart } from './components/Cart'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true);

  return (
    <>
      <GlobalStyle />
      <Header toggleModal={toggleModal} />
      <RoutesMain />
      <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
      { isModalOpen ?
          <Modal toggleModal={toggleModal} modalTitle="Seu carrinho">
            <Cart />
          </Modal> :
        null }
    </>
  )
}

export default App
