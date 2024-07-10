'use client'

import { CheckEmailModalContent, RegistrationModalContent, Modal, AddDetailsModalContent, LoginModalContent } from "@/components/modals";

const ModalsSetup = () => {
  return (
    <>
      <Modal modalName="checkemailModal">
        <CheckEmailModalContent />
      </Modal>

      <Modal modalName="registrationModal">
        <RegistrationModalContent />
      </Modal>
      <Modal modalName="adddetailsModal">
        <AddDetailsModalContent />
      </Modal>
      <Modal modalName="loginModal">
        <LoginModalContent />
      </Modal>
    </>
  )
}

export default ModalsSetup