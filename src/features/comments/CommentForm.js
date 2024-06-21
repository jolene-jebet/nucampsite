import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

const CommentForm = ({ campsiteId }) => {
    const [ modalOpen, setModalOpen ] = useState(false);

    return(
        <>
    {/* 'true' causes the modal to open */}
            <Button outline = {true}  onClick = {() => {
               console.log('Button clicked');
               setModalOpen(true); 
            }}>
                <i className='fa fa-pencil fa-lg' /> Add Comment
            </Button>

            <Modal>
                {/* causes the modalOpen state back to false when the modal is closed */}
                <ModalHeader toggle = {() => setModalOpen(false)}>
                    Add Comment
                </ModalHeader>
                <ModalBody>
                    {/* shows the current campsiteId */}
                    campsite: {campsiteId}
                </ModalBody>

            </Modal>
        </>
    );
}

export default CommentForm;