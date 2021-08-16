import React from 'react'
import {  Modal, ModalHeader, ModalBody, Table } from 'reactstrap';
import File from './Sample.pdf'
import pic from '../../images/Picture1.png'

const DamModal = ({selectedDam, setSelectedDam}) => {
    const toggleDam = () => {
      setSelectedDam(null)
    }
    return (
      <Modal isOpen={selectedDam} toggle={toggleDam} >
        <ModalHeader toggle={toggleDam} charCode={<strong>X</strong>} >
          FPO NAME
        </ModalHeader>
        <ModalBody>
          <p className='text-center'><strong>{selectedDam?.city}, {selectedDam?.state}</strong></p>
          <Table bordered>
          <tbody>
            <tr>
              <td>FPO Gateway Link</td>
              <td><a href="https://fpogateway.com/landing/home" target="_blank" rel="noopener noreferrer">Link</a></td>
            </tr>
    
          </tbody>
        </Table>
        <img src={pic} alt='img' style={{width: '464px'}}/>
        </ModalBody>
      </Modal>
    )
}

export default DamModal
