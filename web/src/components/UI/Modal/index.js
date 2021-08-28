import React from 'react';

import Modal from 'react-modal';

import './styles.scss';

export function MyModal({ isOpen, onRequestClose, children, ...props }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      ariaHideApp={false}
      overlayClassName="modal-overlay"
      {...props}
    >
      {children}
    </Modal>
  );
};

