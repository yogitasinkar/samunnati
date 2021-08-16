import React from 'react'
import {  Modal, ModalHeader, ModalBody, Table } from 'reactstrap';

const FactoryModal = ({selectedFactory, setSelectedFactory}) => {
    const toggleFactory = () => {
      setSelectedFactory(null)
    }
    return (
      <Modal isOpen={selectedFactory} toggle={toggleFactory} >
        <ModalHeader toggle={toggleFactory} charCode={<strong>X</strong>} >
          FACTORY INFO
        </ModalHeader>
        <ModalBody>
          <p className='text-center'><strong>{selectedFactory?.city}, {selectedFactory?.state}</strong></p>
          <Table bordered>
          <tbody>
            <tr>
              <td>Water Produced</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Water Consumed</td>
              <td>70</td>
            </tr>
          </tbody>
        </Table>
        </ModalBody>
      </Modal>
    )
}

export default FactoryModal
