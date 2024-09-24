'use client'

import { CheckEmailModalContent, RegistrationModalContent, Modal, AddDetailsModalContent, LoginModalContent, ProfessorSignupSearchModalContent, ProfessorSignUpModalContent, NavigationForSmallScreenModalContent } from "@/components/modals";
import { PROFESSOR_SIGN_UP_SEARCH_MODAL_NAME, PROFESSOR_SIGN_UP_MODAL_NAME, NAVIGATION_SMALL_SCREEN_MODAL_NAME } from "@/constants";
import { ProfessorProvider } from "@/contexts/ProfessorContext";


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
      <ProfessorProvider>
        <Modal modalName={PROFESSOR_SIGN_UP_SEARCH_MODAL_NAME}>
          <ProfessorSignupSearchModalContent /> 
        </Modal>
        <Modal modalName={PROFESSOR_SIGN_UP_MODAL_NAME}>
          <ProfessorSignUpModalContent />
        </Modal>
      </ProfessorProvider>
      <Modal modalName={NAVIGATION_SMALL_SCREEN_MODAL_NAME}>
        <NavigationForSmallScreenModalContent />
      </Modal>
    </>
  )
}

export default ModalsSetup